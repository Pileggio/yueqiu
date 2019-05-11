<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/5
 * Time: 00:37
 */

namespace app\user\controller;


use think\Db;

class Joined
{
    public function Index ()
    {
        $joined = Db::query("SELECT P_join_date AS 'result',P_join_room_Id as 'roomId' FROM players WHERE P_Id = ?", [cookie('userId')]);
        return json($joined);
    }
}