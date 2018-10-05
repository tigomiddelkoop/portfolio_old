<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
     //   $this->middleware('auth');
    }

    public function dashboard() {
        return view('admin.dashboard');
    }



    //BLOG
    public function blogCreatePost() {
        return view('admin.blog.create');
    }

    public function blogPublishPost() {
        return (request()->all());
    }
}












