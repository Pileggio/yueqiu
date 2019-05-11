<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/3
 * Time: 19:54
 */

namespace app\room\controller;


use think\Db;

class Join
{
    public function __construct ()
    {
        if (!cookie('userId')) {
            return json('没有登录', 401);
        }
    }

    public function Index ()
    {
        $userId = cookie('userId');
        $roomId = input("roomId");
        if (!empty(Db::query("SELECT P_Id FROM players WHERE P_join_room_Id = ? AND P_join_userId = ?", [$roomId, $userId]))) {
            return json('这个房间你已经加入了~', 403);
        }
        Db::execute("INSERT INTO players (P_join_userId, P_join_room_Id) VALUES (?,?)", [$userId, $roomId]);
        return json('success');
    }
}