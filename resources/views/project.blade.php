@extends('layouts.general')



@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">{{ $project->name }}</div>
                    <div class="card-body">

                        @lang('projects.written_in'): {{ $project->language }}


                    </div>
                    <div class="card-footer">

                        @include('project.gitbuttons')

                    </div>
                </div>
                <br />
            </div>
            <div class="col-md-6">
                <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                        <li data-target="#carousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        @foreach($project->picture as $picture)
                            @if($picture->first_picture == TRUE)
                                <div class="carousel-item active">
                                    @else
                                        <div class="carousel-item">
                                            @endif
                                            <img class="d-block w-100" src="{{ $picture->picture }}" alt="First slide">
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>{{ $picture->title }}</h5>
                                                <p>{{ $picture->description }}</p>
                                            </div>
                                        </div>
                                        @endforeach
                                </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <br />
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">{{ __('projects.project_description') }}</div>
                    </div>
                    <br />
                </div>
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">{{ __('projects.story_behind_project') }}</div>
                    </div>
                </div>

            </div>
        </div>
@stop
