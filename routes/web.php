<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/





Route::get('/', 'HomeController@index')->name('homePage');
Route::get('/projects', 'ProjectController@index')->name('projectsPage');
Route::get('/projects/{project}', 'ProjectController@show')->name('projectPage');
Route::get('/about', 'HomeController@about')->name('aboutPage');
Route::get('/faq', 'HomeController@faq')->name('faqPage');

//Contact
Route::get('/contact', 'ContactController@index')->name('contactPage');
Route::post('/contact', 'ContactController@store');

//Forum
Route::get('/forum', 'HomeController@forum');

//Blog
Route::get('/blog', 'BlogController@index')->name('blogPage');
Route::get('/blog/{post}', 'BlogController@view')->name('viewPost');


//User
Route::get('/user/profile', 'UserController@profile')->name('userProfile');



Route::prefix('admin')->group( function () {

    Route::get('/', 'AdminController@dashboard')->name('adminDashboard');

    Route::prefix('skills')->group( function () {

        Route::get('/', 'AdminController@adminSkillsList')->name('adminSkillsList');

    });

    Route::prefix('blog')->group( function () {

        Route::get('/', 'AdminController@listPublishedPosts')->name('adminListBlog');
        Route::get('/create', 'AdminController@blogCreatePost')->name('adminCreatePost');
        Route::post('/create', 'AdminController@blogPublishPost');

        Route::get('/edit/{post}', 'AdminController@blogGetPost')->name('adminEditPost');
        Route::post('/edit/{post}', 'AdminController@blogSavePost');

        Route::get('/delete/{id}', 'AdminController@blogDeletePost')->name('adminDeletePost');

    });

});


    //Admin Skills





Auth::routes(['register' => true]);

Route::get('/home', 'HomeController@index')->name('home');
