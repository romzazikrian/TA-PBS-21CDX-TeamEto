<?php

namespace App\Http\Controllers;

use App\Models\MSaran;
use Illuminate\Http\Request;

class Saran extends Controller
{
    // buat inisialisasi untuk pengambilan model
    protected $model;

    // buat konstruktor
    function __construct()
    {
        // isi nilai variabel "$model"
        $this->model = new MSaran();
    }

    // buat fungsi untuk tambah data
    function viewData()
    {
        // jika data saran tidak ada
        if (count($this->model->viewData()) == 0) {
            $data = [];
            $error = 1;
            $message = "Data Saran Tidak Ditemukan !";
        }
        // jika data saran ada / tersedia
        else {
            // ambil method "viewData" dari model "MSaran"
            $data = $this->model->viewData();
            $error = 0;
            $message = "";
        }

        return response(["saran" => $data, "error" => $error, "message" => $message], http_response_code());
    }

    // buat fungsi untuk pencarian data
    function searchData($keyword)
    {
        // isi nilai variabel "data" dari fungsi "searchData" dari model "MSaran" sesuai dengan isi parameter "keyword"
        $data = $this->model->searchData($keyword);

        // kembalikan nilai variabel "result" ke dalam object "saran"
        return response(["saran" => $data], http_response_code());
    }

    // buat fungsi untuk tambah data
    function saveData(Request $req)
    {
        // ambil data judul
        $saran = $req->saran;

        // jika judul sudah ada
        if (count($this->model->checkSaveData($saran)) != 0) {
            $error = 1;
            $message = "Data Gagal Disimpan (Judul Sudah Terpakai !)";
        }
        // jika judul belum ada
        else {
            // ambil request
            $saran = $req->saran;

            // proses simpan data
            $this->model->saveData($saran);

            $error = 0;
            $message = "Data Berhasil Disimpan";
        }

        return response(["error" => $error, "message" => $message], http_response_code());
    }

    // buat fungsi hapus data
    function deleteData($id)
    {
        // cek apakah data saran (id) tersedia/tidak pada model checkData
        // jika data tersedia
        if (count($this->model->checkData($id)) == 1) {
            // panggil model "deleteData"
            $this->model->deleteData($id);

            $error = 0;
            $message = "Data Berhasil Dihapus";
        }
        // jika data tidak tersedia
        else {
            $error = 1;
            $message = "Data Gagal Dihapus !";
        }
        return response(["error" => $error, "message" => $message], http_response_code());
    }

    // buat fungsi untuk detail data
    function detailData($id)
    {
        // isi nilai variabel "result" dari fungsi "detailData" dari model "MSaran" sesuai dengan isi parameter "id"
        $data = $this->model->detailData($id);

        // kembalikan nilai variabel "result" ke dalam object "saran"
        return response(["saran" => $data], http_response_code());
    }

    // buat fungsi untuk edit data
    // function editData($id_lama, Request $req)
    // {
    //     // ambil data judul
    //     $judul = $req->saran;

    //     // cek apakah data saran (judul) tersedia/tidak pada model checkEditData
    //     // jika data tersedia
    //     if (count($this->model->checkEditData($id_lama, $judul)) == 0) {
    //         $isi = $req->isi;

    //         // panggil model "editData"
    //         $this->model->editData($judul, $isi, $id_lama);

    //         $error = 0;
    //         $message = "Data Berhasil Diubah";
    //     }
    //     // jika data tidak tersedia
    //     else {
    //         $error = 1;
    //         $message = "Data Gagal Diubah (Judul Sudah Terpakai !)";
    //     }

    //     return response(["error" => $error, "message" => $message], http_response_code());
    // }
}
