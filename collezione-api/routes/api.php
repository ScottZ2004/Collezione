<?php

use App\Http\Controllers\Api\V1\CollectionController;
use App\Http\Controllers\Api\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('collection', CollectionController::class);
});

Route::post('v1/users/register', [UserController::class, 'register']);
Route::post('v1/users/login', [UserController::class, 'login']);
Route::get('v1/users/get', [UserController::class, 'get']);
