<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'welcome');

Route::view('/signup', 'signup');

Route::prefix('admin')->group(function () {
    Route::view('/', 'admin.index');
});
