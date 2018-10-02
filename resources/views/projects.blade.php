@extends('layouts.general')



@section('content')
    <div class="container">
        <h1>My projects</h1>
        <h5>On this page are all the projects I have done</h5>
        <h5>You can click on the button to go to the GitHub repository</h5>
        <a style="font-size: 12px">There are two Git servers I use, GitHub and my own so there can be two links to the
            corresponding repo's</a>
        <br/>
        <br/>
        <br/>


        @foreach($projects as $project)
            <div class="card">
                <div class="card-body">
                    <h2 class="">{{ $project->name }}</h2>
                    <h5 class="">Built in: {{ $project->language }}</h5>
                    <a class="">{{ $project->short_description }}</a>
                    <br/>
                    {{--            @if( isset($project->github) )--}}
                    @if( !$project->github == ""  )
                        <a class="pull-right btn btn-primary" role="button" href="{{ $project->github }}">GitHub</a>
                    @else
                        <a class="pull-right btn btn-primary disabled" role="button" href="{{ $project->github }}"
                           disabled>GitHub</a>
                    @endif

                    @if( !$project->genericgit == "" )
                        <a class="pull-right btn btn-primary" role="button" href="{{ $project->genericgit }}">GenericDevelopment
                            Git</a>
                    @else
                        <a class="pull-right btn btn-primary disabled" role="button" href="{{ $project->genericgit }}" disabled>GenericDevelopment
                            Git</a>
                    @endif
                    <a class="pull-right btn btn-primary" role="button" href="{{ url('projects') }}/{{ $project->id }}">Go
                        to Project
                        Page</a>
                </div>
            </div>
            <br/>

        @endforeach
    </div>
@stop
