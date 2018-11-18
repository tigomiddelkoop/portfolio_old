<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function picture(){
        return $this->hasMany(ProjectScreenshot::Class);
    }
}
