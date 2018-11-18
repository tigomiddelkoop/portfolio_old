<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public function blogpost()
    {

        return $this->belongsTo(Blogpost::class);

    }
}
