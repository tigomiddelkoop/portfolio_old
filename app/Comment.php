<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function Blogpost()
    {

        return $this->belongsTo(Blogposts::class);

    }
}
