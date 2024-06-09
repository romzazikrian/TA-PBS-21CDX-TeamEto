<?php

use App\Http\Controllers\Saran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// route untuk tampil data
Route::get("/view",[Saran::class,'viewData']);

// route untuk pencarian
Route::get('/search/{keyword}',[Saran::class,'searchData']);

// route untuk tambah data
Route::post("/save",[Saran::class,'saveData']);

// route untuk delete data
Route::delete("/delete/{id}",[Saran::class,'deleteData']);

// route untuk detail data
Route::get('/detail/{id}',[Saran::class,'detailData']);

// route untuk edit data
Route::put("/edit/{id}",[Saran::class,'editData']);
