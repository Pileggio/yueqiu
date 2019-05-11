<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/1
 * Time: 20:33
 */

namespace app\room\controller;


use think\Db;

class Create
{
    public function __construct ()
    {
        if (!cookie('userId')) {
            return json('没有登录', 401);
        }
    }

    public function index ()
    {
        $capacity = input('capacity');
        $place = input('place');
        $date = input('date');
        $image = input('images');
        $intro = input('intro');
        $user = cookie('userId');
        if (!$capacity || !$place || !$date || !$image || !$intro) {
            return json('请填写所有内容', 403);
        }
        Db::execute('INSERT INTO rooms (R_type, R_capacity, R_place, R_Date, R_image, R_intro, R_owner_Id) VALUES (?,?,?,?,?,?,?)',
            ['篮球', $capacity, $place, $date, $image, $intro, $user]);
        Db::execute("INSERT INTO players (P_join_userId, P_join_room_Id) VALUES (?,?)", [$user, Db::getLastInsID()]);
        return json('success');
    }

    public function uploadIMG ()
    {
        $file = request()->file('image');
        if ($file) {
            $info = $file->move(ROOT_PATH . 'public' . DS . 'upload');
            if ($info) {
                // 成功上传后 获取上传信息
                return json('upload' . DS . $info->getSaveName());
            } else {
                // 上传失败获取错误信息
                return json('', 500);
            }
        }
        return json('', 403);
    }

}