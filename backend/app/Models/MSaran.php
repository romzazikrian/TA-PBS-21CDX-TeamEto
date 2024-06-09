<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MSaran extends Model
{
    // buat variabel untuk inisialisasi tabel
    protected $table = "saran";

    // buat fungsi untuk menampilkan data saran
    function viewData()
    {
        $query = $this->select("id AS id_saran", "isi AS isi_saran", "tanggal AS tanggal_saran")->from($this->table)->orderBy("id");

        return $query->get();
    }

    // buat fungsi untuk pencarian data saran
    function searchData($keyword)
    {
        $query = $this->select("id AS id_saran", "isi AS isi_saran", "tanggal AS tanggal_saran")->from($this->table)
        // pencarian isi saran harus sesuai dengan data
        ->where('isi', $keyword)
        // pencarian tanggal saran sesuai dengan karakter yang ada pada data
        ->orWhereRaw('tanggal LIKE ?',["%$keyword%"])
        ->orderBy("id");

        return $query->get();
    }

    // buat fungsi untuk cek simpan data
    function checkSaveData($isi)
    {
        $query = $this->select("isi")->from($this->table)->where("isi", "=", $isi);

        return $query->get();
    }

    // buat fungsi untuk simpan data
    function saveData($isi, $tanggal)
    {
        $this->insert([
            "isi" => $isi,
            "tanggal" => $tanggal,
        ]);
    }

    // buat fungsi untuk check data (berdasarkan isi)
    function checkData($isi)
    {
        $query = $this->select("id")
        ->whereRaw("TO_BASE64(isi) = '$isi'");

        return $query->get();
    }

    // buat fungsi untuk hapus data
    function deleteData($isi)
    {
        $this->whereRaw("TO_BASE64(isi) = '$isi'")->delete();
    }

    // buat fungsi untuk detail data
    function detailData($isi)
    {
        $query = $this->select("id AS id_saran", "isi AS isi_saran", "tanggal AS tanggal_saran")->from($this->table)->whereRaw("TO_BASE64(isi) = '$isi'");

        return $query->get();
    }

    // buat fungsi untuk cek edit data
    function checkEditData($isi_lama, $isi)
    {
        $query = $this->select("id")->where("isi","=",$isi)->whereRaw("TO_BASE64(isi) != '$isi_lama'")->get();

        return $query;

    }

    // buat fungsi untuk edit data
    function editData($isi, $tanggal, $isi_lama)
    {
        $this->whereRaw("TO_BASE64(isi) = '$isi_lama'")->update([
            "isi" => $isi,
            "tanggal" => $tanggal,
        ]);
    }
}
