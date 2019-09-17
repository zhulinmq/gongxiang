<?php
/**
 * Created by PhpStorm.
 * User: zhulin
 * Date: 2019-09-11
 * Time: 14:48
 */

namespace app\common\model;


use think\Model;

class BankCard extends Model
{
    // 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'create_time';

    public static function getList($user_id)
    {
        return self::where('user_id', $user_id)->field('bank_card_number,bank_name,bank_code')->select();
    }
    public static function info($where){
        return self::where($where)->find();
    }

}