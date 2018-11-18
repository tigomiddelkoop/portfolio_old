<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blogpost extends Model
{
    protected $fillable = ['title', 'author', 'body'];

    public function comments()
    {

        return $this->hasMany(Comment::class);

    }
}
