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

                <img src="{{ asset('img/photo.jpg') }}" class="profilepicture">

            </div>
            <div class="col-md-9">
                <h1 class="text--center">{{ __('home.intro') }} Tigo Middelkoop</h1>
                <h5 class="text--center">{{ __('home.welcome_to_portfolio') }}</h5>
                <a class="btn btn-primary align-content-center" href="{{ url('/TigoMiddelkoopCV.pdf') }}">{{ __('navbar.about_me') }}</a>
                <a class="btn btn-primary align-content-center" href="{{ url('/TigoMiddelkoopCV.pdf') }}">{{ __('home.download_cv') }}</a>
                <br/>
                <a class="align-content-center">Keep in mind that the language of the file is Dutch</a>
            </div>
        </div>
        <br/>
        <hr/>

        <br/>
        <div class="row">
            <div class="col-md-12">
                <h1 class="text--center">{{ __('home.about_me') }}</h1>
            </div>
        </div>
        <br/>
        <hr/>

        <br/>
        <div class="row">
            <div class="col-md-12">
                <h1 class="text--center">{{ __('home.timeline') }}</h1>
            </div>
        </div>
        <br/>
        <hr/>

        <br/>
        <div class="row">
            <div class="col-md-12">
                <h1 class="align-content-center">{{ __('home.skills_section') }}</h1>
                <h5 class="align-content-center">{{ __('home.legenda_skills') }}</h5>

                <br/>
            </div>
            <div class="col-md-12">
                <div class="card-columns">
                    @foreach($skills as $skill)
                        <div class="card">
                            <div class="card-header">
                                {{ $skill->language }}
                            </div>
                            <div class="table table-responsive">
                                <table>
                                    @foreach($skill->skills as $learning)
                                        <tr>
                                            <td style="width: 95%;"><a lass="card-text">{{$learning->skill}}</a>
                                            @if($learning->learned == 0)
                                                <td style="width: 5%;"><span class="fas fa-clock"></span></td>
                                            @elseif($learning->learned == 1)
                                                <td style="width: 5%;"><span class="fas fa-check"></span></td>
                                            @endif
                                        </tr>
                                    @endforeach
                                </table>
                                {{--<hr />--}}
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
