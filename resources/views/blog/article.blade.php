@extends('layouts.general')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ $post->title }}<span
                                class="pull-right">Published on: {{ $post->created_at->toFormattedDateString() }}</span>
                    </div>
                    <div class="card-body">
                        {!! $post->body !!}
                    </div>
                </div>
                <br/>
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">A Comment<span
                                class="pull-right"></span>
                    </div>
                    <div class="card-body">
                        Just A Comment
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>

@stop