<?php

namespace app\api\controller;

use addons\third\model\Third;
use app\common\controller\Api;
use app\common\library\Ems;
use app\common\library\Sms;
use app\common\model\MoneyLog;
use app\common\model\WithdrawRecord;
use fast\Random;
use Flc\Dysms\Client;
use Flc\Dysms\Request\SendSms;
use function Stringy\create;
use think\Db;
use think\Validate;

/**
 * 会员接口
 */
class User extends Api
{
    protected $noNeedLogin = ['login', 'mobilelogin', 'register', 'resetpwd', 'changeemail', 'changemobile', 'third'];
    protected $noNeedRight = '*';

    public function _initialize()
    {
        parent::_initialize();
    }

    /**
     * 会员中心
     */
    public function index()
    {
        $user = $this->auth->getUser();
        $today_income = MoneyLog::tody_income(['user_id' => $this->auth->id]);
        $user['today_income'] = $today_income;
        $user['can_withdraw'] = $user['money'] - $user['freeze_money']; //可提现
        $user['withdraw_record'] = WithdrawRecord::getCount(['user_id' => $this->auth->id]);
        $this->success('', ['welcome' => $user]);
    }

    /**
     * 会员登录
     *
     * @param string $account 账号
     * @param string $password 密码
     */
    public function login()
    {
        $account = $this->request->request('account');
        $password = $this->request->request('password');
        if (!$account || !$password) {
            $this->error(__('Invalid parameters'));
        }
        $ret = $this->auth->login($account, $password);
        if ($ret) {
            $data = ['userinfo' => $this->auth->getUserinfo()];
            $this->success(__('Logged in successful'), $data);
        } else {
            $this->error($this->auth->getError());
        }
    }


    /**
     * 手机验证码登录
     *
     * @param string $mobile 手机号
     * @param string $captcha 验证码
     */
    public function mobilelogin()
    {
        $mobile = $this->request->request('mobile');
        $captcha = $this->request->request('captcha');
        if (!$mobile || !$captcha) {
            $this->error(__('Invalid parameters'));
        }
        if (!Validate::regex($mobile, "^1\d{10}$")) {
            $this->error(__('Mobile is incorrect'));
        }
        if (!Sms::check($mobile, $captcha, 'mobilelogin')) {
            $this->error(__('Captcha is incorrect'));
        }
        $user = \app\common\model\User::getByMobile($mobile);
        if ($user) {
            if ($user->status != 'normal') {
                $this->error(__('Account is locked'));
            }
            //如果已经有账号则直接登录
            $ret = $this->auth->direct($user->id);
        } else {
            $ret = $this->auth->register($mobile, Random::alnum(), '', $mobile, []);
        }
        if ($ret) {
            Sms::flush($mobile, 'mobilelogin');
            $data = ['userinfo' => $this->auth->getUserinfo()];
            $this->success(__('Logged in successful'), $data);
        } else {
            $this->error($this->auth->getError());
        }
    }

    /**
     * 注册会员
     *
     * @param string $username 用户名
     * @param string $password 密码
     * @param string $email 邮箱
     * @param string $mobile 手机号
     */
    public function register()
    {
        $mobile = $this->request->request('mobile');
        $password = $this->request->request('password');
        $code = $this->request->request('code');
        $username = $mobile; //默认用户名为手机号
        if (!$mobile || !$password) {
            $this->error(__('Invalid parameters'));
        }
        if ($mobile && !Validate::regex($mobile, "^1\d{10}$")) {
            $this->error(__('Mobile is incorrect'));
        }
        //验证手机验证码
        $errMsg = check_verification_code($mobile, $code, 'register', true);
        if (!empty($errMsg)) {
            $this->error($errMsg);
        }

        $ret = $this->auth->register($username, $password, $mobile, []);
        if ($ret) {
            $data = ['userinfo' => $this->auth->getUserinfo()];
            $this->success(__('Sign up successful'), $data);
        } else {
            $this->error($this->auth->getError());
        }
    }

    /**
     * 注销登录
     */
    public function logout()
    {
        $this->auth->logout();
        $this->success(__('Logout successful'));
    }

    /**
     * 修改会员个人信息
     *
     * @param string $avatar 头像地址
     * @param string $username 用户名
     * @param string $nickname 昵称
     * @param string $bio 个人简介
     */
    public function profile()
    {
        $user = $this->auth->getUser();
        $username = $this->request->request('username');
//        $avatar = $this->request->request('avatar', '', 'trim,strip_tags,htmlspecialchars');
        $avatar = $this->request->file('avatar');

        if ($username) {
            $exists = \app\common\model\User::where('username', $username)->where('id', '<>', $user['id'])->find();
            if ($exists) {
                $this->error(__('Username already exists'));
            }
            $user->username = $username;
        }
        if ($avatar) {
            $res = $this->uploadImg($avatar, 1);//上传会员头像
            $user->avatar = $res;
        }
//        $user->avatar = $avatar;
        $user->save();
        $this->success();
    }

    /**
     * 修改邮箱
     *
     * @param string $email 邮箱
     * @param string $captcha 验证码
     */
    public function changeemail()
    {
        $user = $this->auth->getUser();
        $email = $this->request->post('email');
        $captcha = $this->request->request('captcha');
        if (!$email || !$captcha) {
            $this->error(__('Invalid parameters'));
        }
        if (!Validate::is($email, "email")) {
            $this->error(__('Email is incorrect'));
        }
        if (\app\common\model\User::where('email', $email)->where('id', '<>', $user->id)->find()) {
            $this->error(__('Email already exists'));
        }
        $result = Ems::check($email, $captcha, 'changeemail');
        if (!$result) {
            $this->error(__('Captcha is incorrect'));
        }
        $verification = $user->verification;
        $verification->email = 1;
        $user->verification = $verification;
        $user->email = $email;
        $user->save();

        Ems::flush($email, 'changeemail');
        $this->success();
    }

    /**
     * 修改手机号
     *
     * @param string $email 手机号
     * @param string $captcha 验证码
     */
    public function changemobile()
    {
        $user = $this->auth->getUser();
        $mobile = $this->request->request('mobile');
        $captcha = $this->request->request('captcha');
        if (!$mobile || !$captcha) {
            $this->error(__('Invalid parameters'));
        }
        if (!Validate::regex($mobile, "^1\d{10}$")) {
            $this->error(__('Mobile is incorrect'));
        }
        if (\app\common\model\User::where('mobile', $mobile)->where('id', '<>', $user->id)->find()) {
            $this->error(__('Mobile already exists'));
        }
        $result = Sms::check($mobile, $captcha, 'changemobile');
        if (!$result) {
            $this->error(__('Captcha is incorrect'));
        }
        $verification = $user->verification;
        $verification->mobile = 1;
        $user->verification = $verification;
        $user->mobile = $mobile;
        $user->save();

        Sms::flush($mobile, 'changemobile');
        $this->success();
    }

    /**
     * 第三方登录
     *
     * @param string $platform 平台名称
     * @param string $code Code码
     */
    public function third()
    {
        $url = url('user/index');
//        $platform = $this->request->request("platform");
        $platform = 'wechat';   //微信登陆
        $code = $this->request->request("code");
        $config = get_addon_config('third');
        if (!$config || !isset($config[$platform])) {
            $this->error(__('Invalid parameters'));
        }
        $app = new \addons\third\library\Application($config);
        //通过code换access_token和绑定会员
        $result = $app->{$platform}->getUserInfo(['code' => $code]);
        if ($result) {
            $loginret = \addons\third\library\Service::connect($platform, $result);
            if ($loginret) {
                $data = [
                    'userinfo' => $this->auth->getUserinfo(),
                    'thirdinfo' => $result
                ];
                $this->success(__('Logged in successful'), $data);
            }
        }
        $this->error(__('Operation failed'), $url);
    }

    /**
     * 重置密码
     *
     * @param string $mobile 手机号
     * @param string $newpassword 新密码
     * @param string $captcha 验证码
     */
    public function resetpwd()
    {
        $mobile = $this->request->request("mobile");
        $newpassword = $this->request->request("newpassword");
        $captcha = $this->request->request("code");
        if (!$newpassword || !$captcha) {
            $this->error(__('Invalid parameters'));
        }
        if (!Validate::regex($mobile, "^1\d{10}$")) {
            $this->error(__('Mobile is incorrect'));
        }
        $user = \app\common\model\User::getByMobile($mobile);
        if (!$user) {
            $this->error(__('User not found'));
        }
        $ret = Sms::check($mobile, $captcha, 'changepwd');
        if (!$ret) {
            $this->error(__('Captcha is incorrect'));
        }
        Sms::flush($mobile, 'changepwd');
        //模拟一次登录
        $this->auth->direct($user->id);
        $ret = $this->auth->changepwd($newpassword, '', true);
        if ($ret) {
            $this->success(__('Reset password successful'));
        } else {
            $this->error($this->auth->getError());
        }
    }

    /**
     * 绑定微信
     * @param $unionid
     * @param $openid
     */
    public function bindWechat()
    {
        $param = $this->request->param();
        if (!$param['openid'] || !$param['nickname']) {
            $this->error(__('Invalid parameters'));
        }
        $user_info = $this->auth->getUser();
        if ($user_info['openid'] != '') {  //判断是否绑定过微信
            $this->error('已经绑定过微信');
        }
        //判断openid 是否存在 TODO
//        $headerpic_path = 'headerpic_' . uniqid() . rand(10000, 99999) . '.png';
//        download($param['portrait'], $headerpic_path);
//        $result = (new Oss())->upload('user/' . $headerpic_path, $headerpic_path);
//        $userInfo['portrait'] = $result ? config('aliyun.OSS_BUCKET_DOMAIN') . '/user/' . $headerpic_path : '';
//        unlink($headerpic_path);
        $result = 1;
        if ($result) {
            $this->success('绑定成功！');
        } else {
            $this->success('绑定失败');
        }
    }

    /**
     * 去提现
     */
    public function towithdraw()
    {
        $user = $this->auth->getUser();
        $bank_info = \app\common\model\BankCard::info(['user_id' => $this->auth->id, 'is_default' => 1]);
        $data['bank_info'] = $bank_info['bank_name'] . '(' . substr($bank_info['bank_card_number'], -4) . ')';
        $data['bank_icon'] = '/assets/bank_icon/' . $bank_info['bank_code'] . '.png';
        $data['bank_id'] = $bank_info['id'];
        $data['max_out'] = $user['money'];
        $this->success('success！', $data);
    }

    /**
     * 申请提现
     */
    public function dowithdraw()
    {
        $money = $this->request->request('money');
        $bank_id = $this->request->request('bank_id');
        if (!$money || !$bank_id) {
            $this->error(__('Invalid parameters'));
        }
        $data = [
            'bank_id' => $bank_id,
            'money' => $money,
            'user_id' => $this->auth->id
        ];
        //提现金额不得少于1元 TODO
        if ($money < 1) {
            $this->error('提现金额不能少于1元');
        }
        //检测会员对应的银行卡信息
        $exsit = \app\common\model\BankCard::get(['user_id' => $this->auth->id, 'id' => $bank_id]);
        if (!$exsit) {
            $this->error('请选择正确的银行卡');
        }
        //判断账户资金是否大于等于提现金额
        $user = $this->auth->getUser();
        if ($money > $user['money']) {
            $this->error('提现金额不能高于账户金额');
        }
        if ($money > ($user['money'] - $user['freeze_money'])) {
            $this->error('部分资金已被冻结，无法提现');
        }
        Db::startTrans();
        try {
            //插入提现记录表
            WithdrawRecord::create($data);
            //冻结资金
            \app\common\model\User::update(['freeze_money' => $money], ['id' => $this->auth->id]);
            Db::commit();
        } catch (PDOException $e) {
            Db::rollback();
            return false;
        }
        $this->success('success！');
    }

    /**
     * 提现记录
     */
    public function withdraw_log()
    {
        $list = WithdrawRecord::all(['user_id' => $this->auth->id]);
        $data = [];
        foreach ($list as $key => $value) {
            $data[$key]['title'] = '提现';
            $data[$key]['money'] = $value['money'];
            $data[$key]['createtime'] = date('Y-m-d H:i:s', $value['createtime']);
            $data[$key]['status'] = $value['status'] == 0 ? '审核中' : ($value['status'] == 1 ? '提现成功' : '申请失败');
        }
        $this->success('success', $data);
    }

    /**
     * 累计收益
     */
    public function income()
    {

        $data['total_income'] = MoneyLog::money_info(['user_id' => $this->auth->id]);
        $list = MoneyLog::all(['user_id' => $this->auth->id]);
        foreach ($list as $key => $value) {
            $data['list'][$key]['money'] = $value['money'];
            $data['list'][$key]['createtime'] = date('Y-m-d H:i:s', $value['createtime']);;
        }

        $this->success('success', $data);

    }


}
