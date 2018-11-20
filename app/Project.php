<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'name', 'short_description','description', 'story_behind', 'demo_url', 'language', 'github', 'genericgit', 'visits'
    ];
    public $timestamps = false;

    public function picture(){
        return $this->hasMany(ProjectScreenshot::Class);
    }
}
