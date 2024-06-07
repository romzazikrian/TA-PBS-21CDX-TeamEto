<?php

use App\Http\Controllers\Mahasiswa;
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
Route::get("/view",[Mahasiswa::class,'viewData']);

// route untuk pencarian
Route::get('/search/{keyword}',[Mahasiswa::class,'searchData']);

// route untuk tambah data
Route::post("/save",[Mahasiswa::class,'saveData']);

// route untuk delete data
Route::delete("/delete/{npm}",[Mahasiswa::class,'deleteData']);

// route untuk detail data
Route::get('/detail/{npm}',[Mahasiswa::class,'detailData']);

// route untuk edit data
Route::put("/edit/{npm}",[Mahasiswa::class,'editData']);
