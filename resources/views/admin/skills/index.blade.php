@extends('layouts.admin')

@section('content')
    <div class="row">
        @foreach($codelanguages as $codelanguage)
            <div class="col-md-4 col-xs-12 col-sm-6 col-lg-3">
            {{--<div class="col-md-4 col-xs-12 col-sm-6 col-lg-3">--}}
                <div class="box">
                    <div class="box-header">
                        <h3 class="box-title">{{ $codelanguage->language }}</h3>

                        <div class="box-tools">
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover">
                            <tr>
                                <th>Skill</th>
                                <th style="width: 25px;"></th>
                            </tr>
                            @foreach($codelanguage->skills as $skills)
                                <tr>

                                    <th>{{ $skills->skill }}</th>
                                    <th>
                                        <form action method="POST">
                                            @csrf
                                            <div class="material-switch">
                                                @if($skills->learned == 1)
                                                    <input id="{{ $codelanguage->language }}{{ $skills->skill }}"
                                                           name="{{ $skills->id }}"
                                                           type="checkbox" checked/>
                                                @else
                                                    <input id="{{ $codelanguage->language }}{{ $skills->skill }}"
                                                           name="{{ $skills->id }}"
                                                           type="checkbox"/>
                                                @endif
                                                <label for="{{ $codelanguage->language }}{{ $skills->skill }}"
                                                       class="label-success"></label>
                                            </div>
                                        </form>
                                    </th>
                                </tr>
                            @endforeach
                            <tr>
                                <form action="" method="">
                                    @csrf
                                    <th>
                                        <input type="text" class="form-control">
                                    </th>
                                    <th>
                                        <button type="submit" class="btn btn-primary" style="width: 100%">Add</button>
                                    </th>
                                </form>
                            </tr>
                        </table>
                    </div>
                    <!-- /.box-body -->
                </div>
                <!-- /.box -->
            </div>
        @endforeach
    </div>
@stop