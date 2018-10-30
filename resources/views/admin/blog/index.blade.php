@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">All blogs</h3>

                    <div class="box-tools">
                        {{--<div class="input-group input-group-sm" style="width: 150px;">--}}
                        {{--<input type="text" name="table_search" class="form-control pull-right" placeholder="Search">--}}

                        {{--<div class="" style="width: 150px;">--}}
                        <a type="button" href="{{ route('adminCreatePost') }}" class="btn btn-default">Create</a>
                        {{--</div>--}}
                        {{--</div>--}}
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th style="max-width: 100px">Posted at</th>
                            <th>Updated at</th>
                            <th style="min-width: 100px">Tools</th>
                        </tr>
                        @foreach($posts as $post)
                            <tr>
                                <td>{{ $post->id }}</td>
                                <td>{{ $post->title }}</td>
                                <td>{{ $post->author }}</td>
                                <td>{{ $post->created_at }}</td>
                                <td>

                                    @if(!$post->created_at === $post->updated_at)
                                        {{ $post->updated_at }}
                                        @else
{{--                                        {{ $post->updated_at }}--}}
                                    @endif

                                </td>
                                <td>

                                    {{--<div class="btn-group">--}}
                                    {{--<a type="button" href="#" class="btn btn-success btn-xs">View</a>--}}
                                    {{--<a type="button" href="{{ url('/') }}/admin/blog/edit/{{ $post->id }}" class="btn btn-warning btn-xs">Edit</a>--}}
                                    {{--<a type="button" href="" class="btn btn-danger btn-xs">Delete</a>--}}
                                    {{--</div>--}}
                                    <div class="btn-group">
                                        <a type="button" href="{{ route('adminEditPost', ['post'=>$post->id]) }}" class="btn btn-default">Edit</a>
                                        <a type="button" href="{{ route('viewPost', ['post'=>$post->id]) }}" class="btn btn-default">View</a>
                                        <a type="button" href="{{ route('adminDeletePost', ['post'=>$post->id]) }}" class="btn btn-danger">Delete</a>
                                    </div>


                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
@stop