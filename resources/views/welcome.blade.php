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

                <img src="{{ asset('img/photo.png') }}" class="profilepicture">

            </div>
            <div class="col-md-9">
                <h1>{{ __('home.intro') }} Tigo Middelkoop</h1>
                <h5>{{ __('home.welcome_to_portfolio') }}</h5>
                <a class="btn btn-primary" href="{{ url('/TigoMiddelkoopCV.pdf') }}">{{ __('home.download_cv') }}</a>
                <br/>
                <a>Keep in mind that the language of the file is Dutch</a>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1 class="text--center">{{ __('home.code_knowledge') }}</h1>
                <h5 class="text--center">{{ __('home.legenda_skills') }}</h5>

                <br/>
            </div>
            <div class="col-md-12">
                <div class="card-columns">
                    @foreach($skills as $skill)
                        <div class="card">
                            <div class="card-header">
                                {{ $skill->language }}
                            </div>
                            <div class="card-body">
                                @foreach($skill->skills as $learning)
                                    <a class="card-text">{{$learning->skill}}
                                        @if($learning->learned == 0)
                                            <span class="fas fa-clock"></span>
                                        @elseif($learning->learned == 1)
                                            <span class="fas fa-check"></span>
                                        @endif
                                    </a>
                                    <hr/>
                                @endforeach
                                {{--<a href="#" class="btn btn-primary btn-sm">Go the projects written--}}
                                {{--in {{ $skill->language }}</a>--}}
                            </div>
                        </div>
                        <br/>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@stop

@section('scripts')
    <script src="js/typewriter.js"></script>


@stop
