<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});







$router->group(['prefix' => 'api', ], function () use ($router) {
   
   $router->group(['prefix' => 'posts'], function () use ($router) {
    $router->get('/', 'PostController@getAllPosts'); 

    $router->post('/', [
        'middleware' => 'auth:api',
        'uses' => 'PostController@createPost'
    ]);
});

    $router->group(['prefix' => 'auth'], function () use ($router) {
        $router->post('register', 'AuthController@register');
        $router->post('login', 'AuthController@login');
    });
});




