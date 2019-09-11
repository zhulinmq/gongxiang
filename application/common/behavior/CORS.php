<?php


namespace app\common\behavior;


use think\Response;

class CORS
{
    public function moduleInit(&$params)
    {
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: token,Origin, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Methods: POST,GET');
//        if(request()->isOptions()){
//            exit();
//        }
    }
}