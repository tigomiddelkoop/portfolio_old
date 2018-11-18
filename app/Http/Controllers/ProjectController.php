<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;
use App;

class ProjectController extends Controller
{
    public function __construct()
    {
        App::setLocale('en');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::All();

        return view('projects', compact('projects'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {

        return view('project', compact('project'));

    }
}
