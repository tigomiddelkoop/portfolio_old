<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blogposts;

class BlogController extends Controller
{
    public function showLatestPosts() {


        $posts = Blogposts::orderBy('id', 'desc')->take(5)->get();

//        dd($posts);

        return view('blog.index', compact('posts'));

    }

    public function viewPost() {


//        return view('blog');
    }
}
