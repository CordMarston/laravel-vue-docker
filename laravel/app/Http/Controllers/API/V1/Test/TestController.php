<?php

namespace App\Http\Controllers\API\V1\Test;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test() {
        return 'test';
    }
}
