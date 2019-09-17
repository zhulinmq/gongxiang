<?php
/**
 * Created by PhpStorm.
 * User: zhulin
 * Date: 2019-09-16
 * Time: 16:53
 */

namespace app\api\controller;


use app\common\controller\Api;

class Article extends Api
{

    protected $noNeedLogin = '*';

    /**
     * 公司简介
     */
    public function info()
    {

        $data = \app\common\model\Article::get(['cat_id' => 1]);

        $this->success('success', $data);
    }

}