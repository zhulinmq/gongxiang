<?php
/**
 * Created by PhpStorm.
 * User: zhulin
 * Date: 2019-09-16
 * Time: 10:17
 */

namespace app\common\model;


use think\Model;

class WithdrawRecord extends Model
{

// 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';

    public static function getCount($where)
    {
        return self::where($where)->count('id');
    }

}