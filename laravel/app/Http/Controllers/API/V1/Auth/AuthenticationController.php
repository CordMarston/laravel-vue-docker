<?php

namespace App\Http\Controllers\API\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    // public function login(Request $request) {
    //     $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);
     
    //     $user = User::where('email', $request->email)->first();
     
    //     if (! $user || ! Hash::check($request->password, $user->password)) {
    //         throw ValidationException::withMessages([
    //             'email' => ['The provided credentials are incorrect.'],
    //         ]);
    //     }
     
    //     return $user->createToken($request->email)->plainTextToken;
    // }
    public function login() {
        $credentials = request()->validate([
           'email' => 'required|email',
           'password' => 'required'
        ]);
        
        if (Auth::attempt($credentials)) {
           $token = auth()->user()->createToken('authToken')->plainTextToken;
           return response()->json([
              'user' => auth()->user(),
              'token' => $token
           ]);
        }
        throw ValidationException::withMessages([
           'email' => 'Invalid credentials'
         ]);
     }
}
