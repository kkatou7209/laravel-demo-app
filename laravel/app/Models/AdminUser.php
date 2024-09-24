<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class AdminUser extends Authenticatable
{
    use HasFactory;

    public function getAuthIdentifierName()
    {
        return 'id';
    }

    public function getAuthPasswordName()
    {
        return 'password';
    }

    public function getRememberTokenName()
    {
        return 'remember_token';
    }
}
