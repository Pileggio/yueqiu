<?php
/**
 * Created by PhpStorm.
 * User: wanqianjun
 * Date: 2017/10/5
 * Time: 00:37
 */

namespace app\user\controller;


use think\Db;

class Hosted
{
    public function Index ()
    {
        $hosted = Db::query("SELECT R_Date AS 'result',R_Id as 'roomId' FROM rooms WHERE R_owner_Id = ?", [cookie('userId')]);
        return json($hosted);
    }
}