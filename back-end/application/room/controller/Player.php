<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/3
 * Time: 23:36
 */

namespace app\room\controller;


use think\Db;

class Player
{
    public function Index ()
    {
        $players = Db::query("SELECT P_join_userId AS 'playerId',U_name FROM players LEFT JOIN Users ON P_join_userId=U_Id WHERE P_join_room_Id = ?", [input('roomId')]);
        $owner = Db::query("SELECT R_owner_Id FROM rooms WHERE R_Id = ?", [input('roomId')])[0]['R_owner_Id'];

        foreach ($players as &$player) {
            $player['owner'] = $player['playerId'] == $owner;
        }

        return json($players);
    }
}