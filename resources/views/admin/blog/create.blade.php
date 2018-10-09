@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-header with-border">
                    <h3 class="box-title">New Blog Post</h3>
                    <div class="box-tools pull-right">
                        <!-- Buttons, labels, and many other things can be placed here! -->
                        <!-- Here is a label for example -->
                        <span class="label label-primary">"Save Draft"</span>
                    </div>
                    <!-- /.box-tools -->
                </div>
                <!-- /.box-header -->
                <div class="box-body">
                    <div class="alert alert-danger">
                        <ul>
                            @foreach($errors->all() as $error)

                                {{ $error }}

                            @endforeach
                        </ul>
                    </div>
                    <form method="POST" action="/admin/blog/create">
                        {{ csrf_field() }}
                        <input type="hidden" name="author" value="Appelsap{{--{{ Auth::user()->name }}--}}">
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" name="title" required>
                        </div>

                        <div class="form-group">
                            <label for="post">Post</label>
                            <textarea name="body" id="body" class="form-control" rows="25" required></textarea>
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
            CKEDITOR.replace('body')
        })
    </script>
@stop