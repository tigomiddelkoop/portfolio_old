<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\App;
use App;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('welcome', [

            'name' => 'Tigo',

        ]);
    }

    public function projects()
    {


        $projects = App\Projects::All();

        return view('projects', [

            'projects' => $projects,

        ]);
    }

    public function viewProject($id)
    {

        $project = App\Projects::find($id);
        return view('project', [

            'project' => $project,

        ]);
    }

    public function about()
    {
        return view('aboutme');
    }

    public function contact()
    {
        return view('contact');
    }

    public function faq()
    {
        return view('faq');
    }
}
