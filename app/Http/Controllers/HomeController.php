<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\App;
use App\Projects;
use Illuminate\Support\Facades\DB;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

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


        $projects = Projects::All();

        return view('projects', compact('projects'));
    }

    public function viewProject(Projects $project)
    {

        return view('project', compact('project'));
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
    public function forum()
    {
        return redirect('https://forum.genericdevelopment.nl');
    }

}

