<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blogposts;

class BlogController extends Controller
{
    public function showLatestPosts() {


        $posts = Blogposts::latest()->get()->take(5);


//        dd($posts);

        return view('blog.index', compact('posts'));

    }

    public function viewPost(Blogposts $post) {

        return view('blog.article', compact('post'));
    }
}
