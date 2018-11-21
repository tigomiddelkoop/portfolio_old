@extends('layouts.admin')

@section('content')
    @include('admin.formerror')
    <form action="{{ route('adminSaveProject') }}" method="POST">
        @csrf
        <div class="row">
            <div class="col-md-3">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <div class="box-title">New Project</div>
                    </div>
                    <div class="box-body">
                        <label for="name">Project Name:</label>
                        <input id="name" name="name" type="text" class="form-control">
                        <br/>
                        <label for="language">Programming language:</label>
                        <input id="language" name="language" type="text" class="form-control">
                        <br/>
                        <label for="shortDescription">Short Description</label>
                        <input type="textarea" name="shortDescription" class="form-control">
                        <br/>
                        <label for="demoURL">Demo URL</label>
                        <input type="text" name="demoURL" class="form-control">
                        <br/>
                        <label for="githubURL">GitHub URL</label>
                        <textarea name="genericgitURL" class="form-control"></textarea>
                        <br/>
                        <label for="genericgitURL">GenericGit URL</label>
                        <input type="genericgitURL" name="genericgitURL" class="form-control">
                        <br/>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" name="saveAsDraft"> Save as Draft
                            </label>
                        </div>
                        <input class="btn btn-outline-primary btn-primary" type="submit"/>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <div class="box-title">Description</div>
                    </div>
                    <div class="box-body">
                        <textarea id="description" name="description" placeholder="Enter text ..."></textarea>

                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="box box-primary">
                    <div class="box-header with-border">
                        <div class="box-title">Story behind the project</div>
                    </div>
                    <div class="box-body">
                        <textarea id="story" name="story" placeholder="Enter text ..."></textarea>

                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection

@section('requiredJS')
    <script src="{{ url('adminlte') }}/bower_components/ckeditor/ckeditor.js"></script>

    <script>
        $(function () {
            // Replace the <textarea id="editor1"> with a CKEditor
            // instance, using default configuration.
            CKEDITOR.replace('description');
            CKEDITOR.replace('story');
        })
    </script>
@endsection
