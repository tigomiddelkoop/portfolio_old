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
            </div>
            <div class="col-md-3">
                Java:
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                         aria-valuenow="50%" aria-valuemin="0%" aria-valuemax="100%" style="width: 10%"></div>
                </div>
            </div>
            <div class="col-md-3">
                HTML/CSS/JavaScript:
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                         aria-valuenow="50%" aria-valuemin="0%" aria-valuemax="100%" style="width: 10%"></div>
                </div>
            </div>
            <div class="col-md-3">
                PHP:
                <div class="progress">
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                         aria-valuenow="50%" aria-valuemin="0%" aria-valuemax="100%" style="width: 50%">
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                C++:
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated" role="progressbar"
                         aria-valuenow="100%" aria-valuemin="0%" aria-valuemax="100%" style="width: 100%">NOT YET
                        STARTED ON
                    </div>
                </div>
            </div>
            {{--<h1>Hello {{ $name }} <-- This is to learn using laravel variables etc!</h1>--}}
        </div>
    </div>
@stop

@section('scripts')
    <script src="js/typewriter.js"></script>


@stop
