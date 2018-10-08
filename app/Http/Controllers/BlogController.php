<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function showLatestPosts() {
        return view('blog.index');
    }

    public function viewPost() {


//        return view('blog');
    }
}
