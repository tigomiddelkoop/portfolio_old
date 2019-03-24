@extends('layouts.general')
@section('requiredJS')

    {!!  GoogleReCaptchaV3::render(['contact_us_id'=>'contact_us']) !!}
    {!!  GoogleReCaptchaV3::init() !!}

@endsection


@section('content')
    <div class="container">
        <h1 class="text--center">Contact</h1>
        <h5 class="text--center">{{ __('contact.contact_me') }}</h5>
        <hr/>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">{{ __('contact.contact_form_title') }}</div>
                    <div class="card-body">
                        @if(null !== session()->get( 'result' ))
                            @if (session()->get( 'result' ))
                                <div class="alert alert-success">
                                    Response saved!
                                </div>
                            @endif
                        @endif
                        @if ($errors->any())
                            @foreach ($errors->all() as $error)
                                <div class="alert alert-danger">
                                    {{ $error }}
                                </div>
                            @endforeach
                        @endif
                        <form action="{{ route('contactPageStore') }}" method="POST">
                            @csrf
                            <label for="name">{{ __('contact.contact_form_name') }}:</label>
                            <input type="text" class="form-control" name="name">
                            <br/>
                            <label for="emailaddress">{{ __('contact.contact_form_email_address') }}:</label>
                            <input type="email" class="form-control" name="emailaddress">
                            <br/>
                            <label for="subject">{{ __('contact.contact_form_subject') }}:</label>
                            <input type="text" class="form-control" name="subject">
                            <br/>
                            <label for="message">{{ __('contact.contact_form_message') }}:</label>
                            <textarea class="form-control" name="message" rows="25"></textarea>
                            <br/>
                            <div class="form-check">
                                <input type="checkbox" name="request_copy" class="form-check-input" />
                                <label class="form-check-label" for="request_copy" disabled>Send me a copy of the message (Does not work at this moment)</label>
                            </div>
                            <br/>
                            <div id="contact_us_id"></div>
                            <input type="submit" class="btn btn-primary" name="form_send"
                                   value="{{ __('contact.contact_form_send') }}">
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection