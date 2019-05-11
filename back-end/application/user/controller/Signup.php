<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/4
 * Time: 01:15
 */

namespace app\user\controller;


use think\Db;

class Signup
{
    public function Index ()
    {
        $user_name = input('username');
        $phone = input('phone');
        $password = input('password');
        $tall = input('tall');
        $weight = input('weight');
        $gender = input('gender');
        if (!$user_name || !$phone || !$password || !$tall || !$weight) {
            return json('请填写所有内容', 403);
        } elseif (!empty(Db::query("SELECT U_phone FROM Users WHERE U_phone = ?", [$phone]))) {
            return json('手机号已存在', 403);
        }
        Db::execute("INSERT INTO Users (U_name, U_phone, U_pwd, U_tall, U_weight,U_gender) VALUES (?,?,?,?,?,?)", [$user_name, $phone, $password, $tall, $weight,$gender]);
        return json('success');
    }
}