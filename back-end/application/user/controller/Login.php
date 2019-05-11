<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/9/29
 * Time: 21:30
 */

namespace app\user\controller;


use think\Controller;
use think\Db;

class Login
{
    public function Index ()
    {
        if (!input('phone') || !input('pwd')) {
            return json('缺少参数', 403);
        }
        if ($data = Db::query("SELECT * FROM Users WHERE U_phone = ? AND U_pwd = ?", [input('phone'), input('pwd')])) {
            cookie('userId',$data[0]['U_Id']);
            return json($data[0]);
        } else {
            return json('用户不存在', 401);
        }
    }
}