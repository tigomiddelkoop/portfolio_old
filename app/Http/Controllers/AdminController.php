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
        return view('admin.blog.index', compact('posts'));
    }

    public function blogCreatePost()
    {
        return view('admin.blog.create');
    }

    public function blogPublishPost()
    {

        $this->validate(request(), [

            'title' => 'required',
            'body' => 'required',
            'author' => 'required'

        ]);

        Blogposts::create(request(['title', 'author', 'body']));

        return redirect('admin/blog');


    }

    public function blogGetPost(Blogposts $post)
    {
        return view('admin.blog.edit', compact('post'));
    }
    public function blogSavePost($post)
    {

//        return $post;
//
//        $Blogpost->title = request('title');
//        $Blogpost->author = request('author');
//        $Blogpost->body = request('post');
//
//        $Blogpost->
//
//        return redirect('admin/blog');

    }
}












