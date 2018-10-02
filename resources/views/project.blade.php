@extends('layouts.general')



@section('content')
    <div class="container">
        @foreach($projects as $project)
        <h1>{{ $project->name }}</h1>
        <h5>This project is written in: {{ $project->language }}</h5>
        <br/>



            <div class="card">
                <div class="card-body">
                    <h2 class="">{{ $project->name }}</h2>
                    <h5 class="">Written in: {{ $project->language }}</h5>
                    <a class="">{{ $project->long_description }}</a>
                    <br/>
                    <span class="pull-right stats-bars">
                    @if( !$project->github == "" )
                        <a class="btn btn-primary" role="button" href="{{ $project->github }}">GitHub</a>
                    @else
                        <a class="btn btn-primary disabled" role="button" href="{{ $project->github }}"
                           disabled>GitHub</a>
                    @endif

                    @if( !$project->genericgit == "" )
                        <a class="btn btn-primary" role="button" href="{{ $project->genericgit }}">GenericDevelopment
                            Git</a>
                    @else
                        <a class="btn btn-primary disabled" role="button" href="{{ $project->genericgit }}" disabled>GenericDevelopment
                            Git</a>
                    @endif
                    <a class="btn btn-primary" role="button" href="{{ url('projects') }}/{{ $project->id }}">Go
                        to Project
                        Page</a>
                    </span>
                </div>
            </div>
            <br/>

        @endforeach
    </div>
@stop
