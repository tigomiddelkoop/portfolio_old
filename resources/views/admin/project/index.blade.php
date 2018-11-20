@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <h3 class="box-title">All projects</h3>
                    <div class="box-tools">
                        <a type="button" href="{{ route('adminCreateProject') }}" class="btn btn-default">Create</a>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th style="min-width: 100px">Tools</th>
                        </tr>
                        @foreach($projects as $project)
                            <tr>
                                <td>{{ $project->id }}</td>
                                <td>{{ $project->name }}</td>
                                <td>

                                    <div class="btn-group">
                                        <a type="button" href="{{ route('adminEditProject', ['project'=>$project->id]) }}"
                                           class="btn btn-default">Edit</a>
                                        <a type="button" href="{{ route('projectPage', ['project'=>$project->id]) }}"
                                           class="btn btn-default">View</a>
                                        <a type="button" href="{{ route('adminDeleteProject', ['project'=>$project->id]) }}"
                                           class="btn btn-danger">Delete</a>
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