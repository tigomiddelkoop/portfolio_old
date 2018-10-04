<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ForumController extends Controller
{
    public function showCategories() {
//        abort(404);
        abort(500 , 'Unauthorized action.');
        return "yo";
    }
}
