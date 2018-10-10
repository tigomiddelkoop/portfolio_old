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

        return redirect(route('adminListBlog'));


    }

    public function blogGetPost(Blogposts $post)
    {
        return view('admin.blog.edit', compact('post'));
    }

    public function blogSavePost($postid)
    {
        $this->validate(request(), [

            'title' => 'required',
            'body' => 'required',
            'author' => 'required'

        ]);

        $post = Blogposts::find($postid);
        $post->title = request()->title;
        $post->body = request()->body;

        $post->save();

        return redirect(route('adminListBlog'));
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

    public function blogDeletePost($postid)
    {

        $post = Blogposts::find($postid);

        $post->delete();

        return redirect(route('adminListBlog'));

    }
}












