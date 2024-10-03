<?php

namespace App\Providers;

use App\Providers\Auth\AdminUserProvider;
use App\Providers\Auth\CustomerUserProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Facades\App;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {

        Auth::provider('customers', function ($app, array $config) {
            return new CustomerUserProvider();
        });

        Auth::provider('admins', function ($app, array $config) {
            return new AdminUserProvider();
        });
    }
}
