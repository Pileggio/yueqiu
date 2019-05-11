<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/1
 * Time: 19:39
 */

namespace app\room\controller;

use think\Db;

class Index
{
    public function Index ()
    {
        $room = Db::query("SELECT R_Id,(SELECT count(P_Id) FROM players WHERE R_Id=players.P_join_room_Id) AS 'joined',R_type,R_capacity,R_place,R_date,R_image,R_intro,U_name,U_head FROM rooms LEFT JOIN Users ON R_owner_Id=U_Id ORDER BY R_Id DESC LIMIT 5");
        $out = [];
        foreach ($room as $value) {
            $value['comments'] = Db::query("SELECT C_content,U_name FROM comments LEFT JOIN Users ON C_create_userId = U_Id WHERE C_related_roomId = ?", [$value['R_Id']]);
            $out[] = $value;
        }
        return json($out);
    }
}