@extends('index')



@section('content')
    <div class="container">
            <h1 class="text--center">{{  __('projects.my_projects') }}</h1>
            <h5 class="text--center">{{ __('projects.projects_i_have_done') }}</h5>
            <h5 class="text--center" style="font-size: 12px">{{ __('projects.git_explanation') }}</h5>
            <hr/>
            <br/>

        <div class="card-columns project-masonry">
            @foreach($projects as $project)
                <div class="card">
                    @if(!$project->thumbnail == "")
                        <img src="{{ $project->thumbnail }}"
                             class="card-img-top" alt="...">
                    @endif
                    <div class="card-body">
                        <h5 class="card-title">{{ $project->name }}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{ __('projects.written_in') }}
                            : {{ $project->language }}</h6>
                        <p class-="card-text">{{ $project->short_description }}</p>
                        <div class="btn-group" role="group" aria-label="Source Code">
                            <div class="btn-group dropup">
                                <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                    Sourcecode
                                </button>
                                <div class="dropdown-menu">
                                    @if(!$project->github == "")
                                        <a class="dropdown-item" target="_blank" rel="noopener noreferrer"
                                           href="{{ $project->github }}">GitHub</a>
                                    @endif
                                    @if(!$project->genericgit == "")
                                        <a class="dropdown-item" target="_blank" rel="noopener noreferrer"
                                           href="{{ $project->genericgit }}">Generic Git</a>
                                    @endif
                                </div>
                            </div>
                            <a class="btn btn-primary" role="button"
                               href="{{ url('projects') }}/{{ $project->id }}">{{ __('projects.project_page') }}</a>
                        </div>
                    </div>
                </div>

            @endforeach
        </div>
    </div>
@stop
