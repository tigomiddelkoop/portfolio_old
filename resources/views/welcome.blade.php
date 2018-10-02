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

                <img src="gif/profilepicture.gif"
                     style="height: 100%; max-height:250px; width: 100%; max-width: 250px; border-radius: 100%; margin: auto; display: block;">

            </div>
            <div class="col-md-9">
                <h1>Tigo Middelkoop</h1>
                <h5>This is my portfolio site! It is still in development</h5>
                <h5>The sitetheme is definitely going to change soon</h5>d
                <a style="font-size: 10px">It is not going to be using a template. I swear! Well to be fair it is going
                    to
                    be my template that is going to be here.</a>
            </div>
            {{--<h1>Hello {{ $name }} <-- This is to learn using laravel variables etc!</h1>--}}
        </div>
    </div>
@stop

@section('scripts')
    <script src="js/typewriter.js"></script>


@stop
