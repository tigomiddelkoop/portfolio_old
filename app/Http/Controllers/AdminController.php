<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Blogposts;

class AdminController extends Controller
{
    public function __construct()
    {
        //   $this->middleware('auth');
    }

    public function dashboard()
    {
        return view('admin.dashboard');
    }


    //BLOG
    public function listPublishedPosts()
    {
        $posts = Blogposts::all();
        return view('admin.blog.index', [

            'posts' => $posts,

        ]);
    }

    public function blogCreatePost()
    {
        return view('admin.blog.create');
    }

    public function blogPublishPost()
    {
        return (request()->all());
    }

    public function blogGetPost($id)
    {
        $post = Blogposts::find($id);
        return view('admin.blog.edit',
            [

                'post' => $post,

            ]);
    }
    public function blogSavePost()
    {
        return (request()->all());
    }
}












