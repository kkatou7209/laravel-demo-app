<?php

namespace App\Providers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

use App\Services\Guards\AdminTokenGuard;
use App\Services\Guards\UserTokenGurd;

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
        Auth::extend('api_user', function ($app, $name, array $config) {
            return new UserTokenGurd();
        });

        Auth::extend('api_admin', function ($app, $name, array $config) {
            return new AdminTokenGuard();
        });
    }
}
