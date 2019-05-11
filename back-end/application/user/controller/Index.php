<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/5
 * Time: 00:29
 */

namespace app\user\controller;


use think\Db;

class Index
{
    public function Index ()
    {
        $hosted = Db::query("SELECT count(R_Id) AS 'hosted' FROM rooms WHERE R_owner_Id = ?", [cookie('userId')])[0]['hosted'];
        $joined = Db::query("SELECT count(P_Id) AS 'joined' FROM players WHERE P_Id = ?", [cookie('userId')])[0]['joined'];
        return json(['hosted' => $hosted, 'joined' => $joined]);
    }
}