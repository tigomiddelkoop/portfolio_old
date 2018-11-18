@extends('layouts.general')



@section('content')
    <div class="container">
        <h1>{{  __('projects.my_projects') }}</h1>
        <h5>{{ __('projects.projects_i_have_done') }}</h5>
        <a style="font-size: 12px">{{ __('projects.git_explanation') }}</a>
        <br/>
        <br/>
        <br/>


        @foreach($projects as $project)
            <div class="card">
                <div class="card-body">
                    <div class-="card-text">
                    <h2 class="">{{ $project->name }}</h2>
                    <h5 class="">{{ __('projects.written_in') }}: {{ $project->language }}</h5>
                    <a class="">{{ $project->short_description }}</a>
                    <br/>
                    </div>
                    <span class="pull-right stats-bars">
                    @include('project.gitbuttons')
                    <a class="btn btn-primary" role="button" href="{{ url('projects') }}/{{ $project->id }}">{{ __('projects.project_page') }}</a>
                    </span>
                </div>
            </div>
            <br/>

        @endforeach
    </div>
@stop
