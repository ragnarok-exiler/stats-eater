<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('paladins', function () {
    return ['user' => 'Mirame', 'Status' => 'Como recorto en silueta!!!!'];
});

//Route::get('paladins/{id}', function ($id) {
//    return ['user' => 'Yo soy:'.$id, 'Status' => 'Quién eres tú?'];
//});

Route::get('paladins/{test}','Api\ApiController@test');
