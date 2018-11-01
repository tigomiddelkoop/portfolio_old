<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Codelanguages extends Model
{
    public function skills()
    {

        return $this->hasMany(Skills::class);

    }
}
