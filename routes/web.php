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

Route::get('/', 'HomeController@index');
Route::get('/projects', 'HomeController@projects');
Route::get('/projects/{id}', 'HomeController@viewProject');
Route::get('/about', 'HomeController@about');
Route::get('/faq', 'HomeController@faq');

//Contact
Route::get('/contact', 'ContactController@contact');
Route::post('/contact', 'ContactController@sendForm');

//Blog
Route::get('/blog', 'BlogController@showLatestPosts');
Route::get('/blog/{id}', 'BlogController@viewPost');


Route::get('/blog/create', 'BlogController@createPost');

//Forum
Route::get('/forum', 'ForumController@showCategories');

//Admin
Route::get('/admin/dashboard', 'AdminController@dashboard');



Route::get('/admin/blog/', 'AdminController@listPublishedPosts');
Route::get('/admin/blog/create', 'AdminController@blogCreatePost');
Route::post('/admin/blog/create', 'AdminController@blogPublishPost');

Route::get('/admin/blog/edit/{id}', 'AdminController@blogGetPost');
Route::post('/admin/blog/edit/{id}', 'AdminController@blogSavePost');

Route::get('/admin/blog/delete{id}');


