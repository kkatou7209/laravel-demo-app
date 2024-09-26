<?php

namespace App\Providers;

use App\Models\AdminUserProvider;
use App\Models\CustomerUserProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

use App\Services\Guards\AdminTokenGuard;
use App\Services\Guards\UserTokenGurd;
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
        App::bind(AdminUserProvider::class, function (Application $app) {
            return new AdminUserProvider();
        });

        App::bind(CustomerUserProvider::class, function (Application $app) {
            return new CustomerUserProvider();
        });

        Auth::provider('customers', function ($app, array $config) {
            return new CustomerUserProvider();
        });

        Auth::provider('admins', function ($app, array $config) {
            return new AdminUserProvider();
        });
    }
}
