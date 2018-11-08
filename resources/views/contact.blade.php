@extends('layouts.general')

@section('content')
    <div class="container">
        <h1>Contact</h1>
        <h3>There are multiple ways to contact me.</h3>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="card-header">Contact Info</div>
                    <div class="card-body">

                        <strong>Contact options</strong>
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
                    <div class="card-header">Contact me via this form</div>
                    <div class="card-body">
                        <form>
                            @csrf
                            <label for="name">Your name:</label>
                            <input type="text" class="form-control" name="name">
                            <br />
                            <label for="email">Email adres:</label>
                            <input type="email" class="form-control" name="email">
                            <br />
                            <label for="subject">Subject:</label>
                            <input type="text" class="form-control" name="subject">
                            <br />
                            <label for="message">Your message:</label>
                            <textarea class="form-control" name="message" rows="25"></textarea>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
@stop