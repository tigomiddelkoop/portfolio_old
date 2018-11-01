@extends('layouts.general')

@section('css')
    <link href="css/homepage.css" rel="stylesheet" type="text/css">
@stop

@section('pagetop')
    <div class="filler bghome"></div>
    <div class="flex-center position-ref full-height">
        <div class="content">
                <span class="home-center title">
                    <a>Hi, my name is Tigo Middelkoop and I am</a>
                    <br/>
                <a class="typewrite" data-period="2000"
                   data-type='["A Creative", "An Amateurish", "A Innovative", "A Driven", "A Happy" ]'></a>
                                    <a class="">Developer</a>

                </span>
        </div>
    </div>
@stop

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-3">

                <img src="gif/profilepicture.gif" class="profilepicture">

            </div>
            <div class="col-md-9">
                <h1>Hello! I am Tigo Middelkoop</h1>
                <h5>And welcome to my portfolio</h5>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1 class="text--center">How I qualify myself in terms of code knowledge</h1>
                <br/>
            </div>
            @foreach($skills as $skill)
                <div class="col-md-3">
                    <div class="card">
                        <div class="card-header">
                            {{ $skill->language }}
                        </div>
                        <div class="card-body">
                            @foreach($skill->skills as $learning)
                                <a class="card-text">{{$learning->skill}}
                                    @if($learning->learned == 0)
                                        <span class="fas fa-times"></span>
                                    @elseif($learning->learned == 1)
                                        <span class="fas fa-check"></span>
                                    @endif
                                </a>
                                <hr/>
                            @endforeach
                            <a href="#" class="btn btn-primary btn-sm">Go the projects written
                                in {{ $skill->language }}</a>
                        </div>
                    </div>
                    <br/>
                </div>
            @endforeach
            {{--<h1>Hello {{ $name }} <-- This is to learn using laravel variables etc!</h1>--}}
        </div>
    </div>
@stop

@section('scripts')
    <script src="js/typewriter.js"></script>


@stop
