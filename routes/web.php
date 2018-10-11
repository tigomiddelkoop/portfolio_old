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

//MOCK LOGIN
Route::get('/fakelogin', function() {
    return redirect('/');
})->name('login');



Route::get('/', 'HomeController@index')->name('homePage');
Route::get('/projects', 'HomeController@projects')->name('projectsPage');
Route::get('/projects/{id}', 'HomeController@viewProject')->name('projectPage');
Route::get('/about', 'HomeController@about')->name('aboutPage');
Route::get('/faq', 'HomeController@faq')->name('faqPage');

//Contact
Route::get('/contact', 'ContactController@contact')->name('contactPage');
Route::post('/contact', 'ContactController@sendForm');

//Forum
Route::get('/forum', 'HomeController@forum');

//Blog
Route::get('/blog', 'BlogController@showLatestPosts')->name('blogPage');
Route::get('/blog/{post}', 'BlogController@viewPost')->name('viewPost');


//Admin
Route::get('/admin/dashboard', 'AdminController@dashboard')->name('adminDashboard');

    //Admin Blog
Route::get('/admin/blog/', 'AdminController@listPublishedPosts')->name('adminListBlog');
Route::get('/admin/blog/create', 'AdminController@blogCreatePost')->name('adminCreatePost');
Route::post('/admin/blog/create', 'AdminController@blogPublishPost');

Route::get('/admin/blog/edit/{post}', 'AdminController@blogGetPost')->name('adminEditPost');
Route::post('/admin/blog/edit/{post}', 'AdminController@blogSavePost');

Route::get('/admin/blog/delete/{id}', 'AdminController@blogDeletePost')->name('adminDeletePost');



