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
    <a class="btn btn-primary disabled" role="button" href="{{ $project->genericgit }}"
       disabled>GenericDevelopment
        Git</a>
@endif