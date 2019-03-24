<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Project;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::All();
        return view('admin.project.index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.project.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate(request(), [

            'name' => 'required',
            'language' => 'required',
            'shortDescription' => 'required',
            'description' => 'required',
            'story' => 'required',
            'thumbnail' => 'image',

        ]);

        $imageTargetFolder = "public/storage/";



        $project->thumbnail;

        $project = new Project;
        $project->name = $request->name;
        $project->short_description = $request->shortDescription;
        $project->description = $request->description;
        $project->story_behind = $request->story;
        $project->demo_url = $request->demoURL;
        $project->language = $request->language;
        $project->github = $request->githubURL;
        $project->genericgit = $request->genericgitURL;
        $project->visits = 1;
        $project->development_stage = '1';

        $project->save();

        return redirect(route('adminListProject'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return view('admin.project.edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int $id
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update($id, Request $request)
    {

        $this->validate(request(), [

            'name' => 'required',
            'language' => 'required',
            'shortDescription' => 'required',
            'description' => 'required',
            'story' => 'required',

        ]);


        $project = Project::find($id);
        $project->name = $request->name;
        $project->short_description = $request->shortDescription;
        $project->description = $request->description;
        $project->story_behind = $request->story;
        $project->demo_url = $request->demoURL;
        $project->language = $request->language;
        $project->github = $request->githubURL;
        $project->genericgit = $request->genericgitURL;
        $project->visits = 1;
        $project->development_stage = '1';

        $project->save();

        return redirect(route('adminListProject'));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        $project->delete();

        return redirect(route('adminListProject'));
    }
}
