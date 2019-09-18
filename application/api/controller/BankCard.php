<?php
/**
 * Created by PhpStorm.
 * User: zhulin
 * Date: 2019-09-11
 * Time: 14:37
 */

namespace app\api\controller;


use app\common\controller\Api;
use think\Db;

class BankCard extends Api
{

    /**
     * 绑定银行卡
     */
    public function bind()
    {
        $cardholder = $this->request->request('cardholder'); //持卡人姓名
        $idcard = $this->request->request('idcard');  //身份证号
        $bank_card_number = $this->request->request('bank_card_number'); //银行卡号
        $bank_name = $this->request->request('bank_name');  //开户行
        $reserved_mobile = $this->request->request('reserved_mobile');//银行预留手机号
        if (!$cardholder || !$idcard || !$bank_card_number || !$bank_name || !$reserved_mobile) {
            $this->error(__('Invalid parameters'));
        }
        $exsit = \app\common\model\BankCard::where('bank_card_number', $bank_card_number)->find();
        if ($exsit) {
            $this->error('该银行卡已被绑定');
        }
        $data = [
            'user_id' => $this->auth->id,
            'cardholder' => $cardholder,
            'idcard' => $idcard,
            'bank_card_number' => $bank_card_number,
            'bank_name' => $bank_name,
            'reserved_mobile' => $reserved_mobile,
            'is_default' => 1
        ];
        Db::startTrans();
        try {
            \app\common\model\BankCard::update(['is_default' => 0], ['user_id' => $this->auth->id]);
            \app\common\model\BankCard::create($data, true);
            Db::commit();
        } catch (Exception $e) {
            $this->setError($e->getMessage());
            Db::rollback();
            return false;
        }
        $this->success('绑定成功');
//        if ($result) {
//            $this->success('绑定成功');
//        } else {
//            $this->error('绑定失败');
//        }
    }

    /**
     * 我的银行卡
     */
    public function index()
    {
        $list = \app\common\model\BankCard::getList($this->auth->id);
        $data = [];
        foreach ($list as $key => $value) {
            $data[$key]['bank_name'] = $value['bank_name'];
            $data[$key]['bank_full_name'] = $value['bank_name'] . '(' . substr($value['bank_card_number'], -4) . ')';
            $data[$key]['bank_card_number'] = $value['bank_card_number'];
            $data[$key]['bank_icon'] = '/assets/bank_icon/' . $value['bank_code'] . '.png';
        }
        $this->success($data);

    }


}