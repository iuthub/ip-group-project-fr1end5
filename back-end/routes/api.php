<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::get('quizzes/all', 'QuizController@getAll');
Route::get('questions/{id}', 'QuestionController@getOne');

Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('questions', 'QuestionController@getAll');
    Route::post('questions', 'QuestionController@store');
    Route::put('questions/{id}', 'QuestionController@update');
    Route::delete('questions/{id}', 'QuestionController@delete');

    Route::get('quizzes', 'QuizController@index');
    Route::get('quizzes/{id}', 'QuizController@show');
    Route::post('quizzes', 'QuizController@store');
    Route::put('quizzes/{id}', 'QuizController@update');
    Route::delete('quizzes/{id}', 'QuizController@delete');
});


