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
    <meta property="og:description" content="I make Generic applications for Generic people">
    <meta property="og:image" content="https://images.genericdevelopment.nl/logoGD.png">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/main-style.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('css/fontawesome.css') }}" rel="stylesheet" type="text/css">
    @yield('css')
    <title>{{ config('app.name') }}</title>
</head>
<body>
@yield('pagetop')

@include('layouts.general.navbar')

<main class="py-4">
        @yield('content')
</main>
@yield('scripts')
<script src="{{ asset('js/app.js') }}" defer></script>


</body>
</html>