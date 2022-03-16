<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', [HomeController::class, 'home']);
Route::get('/contactus', function(){
    return view('user.contact_us');
});
Route::get('/about', function(){
    return view('user.about_page');
});

Route::get('/news', function(){
    return view('user.news');
});




// Route::get('/test', function () {
//     return view('user.test');
// });

