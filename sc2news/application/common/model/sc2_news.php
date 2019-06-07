<?php

namespace app\common\model;

use think\Model;

class sc2_news extends Model
{
    public function setTitleAttr($value)
    {
        return strtolower($value);
    }

    public function setContentAttr($value)
    {
        return htmlentities($value);
    }
}
