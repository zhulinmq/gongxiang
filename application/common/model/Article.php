<?php
/**
 * Created by PhpStorm.
 * User: zhulin
 * Date: 2019-09-16
 * Time: 16:57
 */

namespace app\common\model;


use think\Model;

class Article extends Model
{


    // 开启自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
}