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
Route::post('/contact', 'ContactController@store')->name('contactPageStore');

//Forum
Route::get('/forum', 'HomeController@forum');

//Blog
Route::get('/blog', 'BlogController@index')->name('blogPage');
Route::get('/blog/{post}', 'BlogController@show')->name('viewPost');


//User
Route::get('/user/profile', 'UserController@profile')->name('userProfile');



Route::prefix('admin')->group( function () {

    Route::get('/', 'Admin\DashboardController')->name('adminDashboard');

    Route::prefix('skills')->group( function () {

        Route::get('/', 'Admin\SkillsController@index')->name('adminSkillsList');

    });

    Route::prefix('project')->group( function () {

        Route::get('/', 'Admin\ProjectController@index')->name('adminListProject');

        Route::get('/create', 'Admin\ProjectController@create')->name('adminCreateProject');
        Route::post('/create', 'Admin\ProjectController@store')->name('adminSaveProject');

        Route::get('/edit/{project}', 'Admin\ProjectController@edit')->name('adminEditProject');
        Route::post('/edit/{project}', 'Admin\ProjectController@update')->name('adminUpdateProject');

        Route::get('/delete/{id}', 'Admin\ProjectController@destroy')->name('adminDeleteProject');

    });

    Route::prefix('blog')->group( function () {

        Route::get('/', 'Admin\BlogController@index')->name('adminListBlog');
        Route::get('/create', 'Admin\BlogController@create')->name('adminCreatePost');
        Route::post('/create', 'Admin\BlogController@store');

        Route::get('/edit/{post}', 'Admin\BlogController@edit')->name('adminEditPost');
        Route::post('/edit/{post}', 'Admin\BlogController@update');

        Route::get('/delete/{id}', 'Admin\BlogController@destroy')->name('adminDeletePost');

    });

});


    //Admin Skills





Auth::routes(['register' => true]);

Route::get('/home', 'HomeController@index')->name('home');
h