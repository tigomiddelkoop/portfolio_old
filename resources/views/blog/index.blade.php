@extends('index')

@section('content')
    <div class="container">
        <h1>Blog Home</h1>
        <div class="row">
            @foreach($posts as $post)
                @include('blog.allarticles')
            @endforeach
            <div class="col-md-3 pull-right">
                <div class="card">
                    <div class="card-header">Archive</div>
                    <div class="card-body">
                        This will be the archive panel!

                        This website is still in development!
                    </div>
                </div>
            </div>
        </div>

        <br/><br/><br/>

    </div>
@stop