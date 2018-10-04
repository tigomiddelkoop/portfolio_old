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

Auth::routes(['register'=>false]);

Route::get('/', 'HomeController@index')->name('home');
Route::get('/projects', 'HomeController@projects')->name('home');
Route::get('/projects/{id}', 'HomeController@viewProject')->name('id');
Route::get('/about', 'HomeController@about')->name('home');
Route::get('/faq', 'HomeController@faq')->name('home');

//Contact
Route::get('/contact', 'ContactController@contact');
Route::post('/contact', 'ContactController@sendForm');

//Blog
Route::get('/blog', 'BlogController@showLatestPosts');

//Forum
Route::get('/forum', 'ForumController@showCategories');

Route::get('/admin/dashboard', 'AdminController@dashboard')->name('home');


