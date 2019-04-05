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
                   data-type='[@foreach($frontPageLines as $line)"{{ $line->line }}"@if(!$loop->last),@endif @endforeach]'></a>
                                    <a class="">Developer</a>

                </span>
        </div>
    </div>
@stop

@section('content')
    <div id="app>"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-3">

                <img src="{{ asset('storage/img/photo.jpg') }}" class="profilepicture">

            </div>
            <div class="col-md-9">
                <h1 class="text--center">{{ __('home.intro') }} Tigo Middelkoop</h1>
                <h5 class="text--center">{{ __('home.welcome_to_portfolio') }}</h5>
                <div class="text--center">
                    <div class="btn-group">
                        <a class="btn btn-primary"
                           href="#about_me">{{ __('navbar.about_me') }}</a>
                        <a class="btn btn-secondary"
                           href="{{ url('/storage/pdf/TigoMiddelkoopCV.pdf') }}">{{ __('home.download_cv') }}</a>
                    </div>
                </div>
                {{--<br/>--}}
                <p class="text--center">Keep in mind that the language of the file is Dutch</p>
            </div>
        </div>
        <br/>
        <hr/>

        <br/>
        <section href="about_me" id="about_me">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="text--center" href="about_me">{{ __('home.about_me') }}</h1>
                </div>
            </div>
            <br/>
            <hr/>
        </section>
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
                <h1 class="text--center">{{ __('home.skills_section') }}</h1>
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
                            <div class="table table-responsive">
                                <table>
                                    @foreach($skill->skills as $learning)
                                        <tr>
                                            <td class="skills-text" style="width: 100%"><a class="card-text"
                                                                                           style=>{{$learning->skill}}</a>
                                            @if($learning->learned == 0)
                                                <td class="skills-status"><span class="fas fa-clock"></span></td>
                                            @elseif($learning->learned == 1)
                                                <td class="skills-status"><span class="fas fa-check"></span></td>
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

@section('requiredJS')
    <script src="js/typewriter.js"></script>


@stop
