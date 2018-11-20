@extends('layouts.general')

@section('content')
    <div class="container">
        <h1>Contact</h1>
        <h3>{{ __('contact.ways_to_contact') }}</h3>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header">Contact Info</div>
                    <div class="card-body">

                        <strong>{{ __('contact.contact_options') }}</strong>
                        <p>
                            Skype: tigograaflol<br/>
                            Discord: __Tigo__#2015<br/>
                            Email: tigo.middelkoop@gmail.com<br/>
                        </p>

                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="card">
                    <div class="card-header">{{ __('contact.contact_form_title') }}</div>
                    <div class="card-body">
                        <form>
                            @csrf
                            <label for="name">{{ __('contact.contact_form_name') }}:</label>
                            <input type="text" class="form-control" name="name">
                            <br />
                            <label for="email">{{ __('contact.contact_form_email_address') }}:</label>
                            <input type="email" class="form-control" name="email">
                            <br />
                            <label for="subject">{{ __('contact.contact_form_subject') }}:</label>
                            <input type="text" class="form-control" name="subject">
                            <br />
                            <label for="message">{{ __('contact.contact_form_message') }}:</label>
                            <textarea class="form-control" name="message" rows="25"></textarea>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@stop