<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Codelanguages extends Model
{
    public function comments()
    {

        return $this->hasMany(Skills::class);

    }
}
