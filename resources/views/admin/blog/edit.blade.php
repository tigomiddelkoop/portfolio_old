@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">Editting Blog Post: {{ $post->title }}</h3>
                    <div class="box-tools pull-right">
                        <!-- Buttons, labels, and many other things can be placed here! -->
                        <!-- Here is a label for example -->
                        <span class="label label-primary">"Save Draft"</span>
                    </div>
                    <!-- /.box-tools -->
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    @foreach($errors->all() as $error)
                        <div class="alert alert-danger">
                            <ul>

                                {{ $error }}

                            </ul>
                        </div>
                    @endforeach
                    <form method="POST" action="/admin/blog/edit/{{ $post->id }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="author" value="Kerel{{--{{ Auth::user()->name }}--}}">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" name="title" value="{{ $post->title }}">
                        </div>

                        <div class="form-group">
                            <label for="post">Post</label>
                            <textarea name="post" id="post" class="form-control" rows="25">{{ $post->body }}</textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Publish</button>
                    </form>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
    </div>
    <!-- /.box -->
@stop

@section('requiredJS')
    <!-- CK Editor -->
    <script src="{{ url('adminlte') }}/bower_components/ckeditor/ckeditor.js"></script>

    <script>
        $(function () {
            // Replace the <textarea id="editor1"> with a CKEditor
            // instance, using default configuration.
            CKEDITOR.replace('post')
        })
    </script>
@stop