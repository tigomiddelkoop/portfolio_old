<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta property="og:title" content="GenericDevelopment">
    <meta property="og:site_name" content="GenericDevelopment">
    <meta property="og:site_url" content="https://genericdevelopment.nl">
    <meta property="og:description" content="We make generic applications for generic people">
    <meta property="og:image" content="https://images.genericdevelopment.nl/logoGD.png">

    <meta name="description" content="I make generic application for generic people">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/main-style.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/fontawesome.css') }}" rel="stylesheet" type="text/css">
    @yield('css')
    <title>{{ config('app.name') }}</title>
</head>
<body>
<div id="app"></div>
<script src="{{ mix('js/index.js') }}"></script>


</body>
</html>