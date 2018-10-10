<div class="col-md-9">
    <div class="card">
        <div class="card-header"><a href="{{ route('viewPost', ['post'=>$post->id]) }}">{{ $post->title }}</a><span class="pull-right">Published on: {{ $post->created_at->toFormattedDateString() }}</span>
        </div>
        <div class="card-body">
            {!! $post->body !!}
        </div>
    </div>
    <br/>
</div>