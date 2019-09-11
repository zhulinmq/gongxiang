<?php
/**
 * Created by PhpStorm.
 * User: zhulin
 * Date: 2019-09-10
 * Time: 13:48
 */
class Third extends \think\Model{
    // 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';


}
