<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/3
 * Time: 19:03
 */

namespace app\room\controller;


use think\Db;

class Comment
{
    public function __construct ()
    {
        if (!cookie('userId')) {
            return json('没有登录', 401);
        }
    }

    public function Index ()
    {
        $roomId = input('roomId');
        $content = input('content');
        $user = cookie('userId');
        Db::execute("INSERT INTO comments (C_create_userId, C_related_roomId, C_content) VALUES (?,?,?)", [$user, $roomId, $content]);
        return json('success');
    }
}