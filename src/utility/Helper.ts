const Helper = {
    Pendidikan: (id: number | undefined | null) => {
        switch (id) {
            case 0:
                return "Tidak Ada Pendidikan";

            case 1:
                return "Taman Kanak-kanak";

            case 2:
                return "Sekolah Dasar";

            case 3:
                return "Sekolah Lanjutan Tingkat Pertama";

            case 4:
                return "Sekolah Lanjutan Tingkat Atas";

            case 5:
                return "Diploma 1";

            case 6:
                return "Diploma 2";

            case 7:
                return "Diploma 3";

            case 8:
                return "Diploma 4";

            case 9:
                return "Strata 1";

            case 10:
                return "Strata 2";

            case 11:
                return "Strata 3";

            default:
                return "Tidak Sekolah";
        }
    },

    Agama: (id: number | undefined) => {
        switch (id) {
            case 1:

                return "Islam";
            case 2:

                return "Protestan";

            case 3:

                return "Katolik";

            case 4:

                return "Budha";

            case 5:

                return "Hindu";

            case 7:

                return "Kong Hu Cu";

            default:
                return "Lainnya";
        }
    },

    KategoriBiaya: (id: number) => {
        switch (id) {
            case 1:
                return "Biaya Panjar Perkara";
            case 2:
                return "Sisa Panjar Perkara";
            case 3:
                return "Biaya Pengiriman";
            case 4:
                return "Biaya Panggilan";
            case 5:
                return "Biaya Sita";
            case 6:
                return "Biaya Pemberitahuan";
            case 7:
                return "Biaya Pemeriksaan Setempat";
            case 8:
                return "Biaya Meterai";
            case 9:
                return "Biaya Penyumpahan";
            case 10:
                return "Biaya Penerjemah";
            case 11:
                return "Penerimaan Negara Bukan Pajak";
            case 12:
                return "Biaya Alat Tulis Kantor";
            case 13:
                return "Hak-hak Kepaniteraan";
            default:
                return "Biaya Lain-lain";

        }
    },

    JenisTransaksi: (id: number) => {
        return (id <= 0) ? 'Transaksi Keluar' : 'Transaksi Masuk';
    },

    StatusPutusan: (id: number) => {
        if (id == 1) return "Dikabulkan                           "
        if (id == 2) return "Dikabulkan Sebagian                  "
        if (id == 3) return "Ditolak                              "
        if (id == 4) return "Tidak Dapat Diterima                 "
        if (id == 5) return "Perdamaian                           "
        if (id == 6) return "Dinyatakan Gugur                     "
        if (id == 7) return "Dicabut                              "
        if (id == 8) return "Mengabulkan Eksepsi                  "
        if (id == 11) return "Pidana Mati                          "
        if (id == 12) return "Pidana Penjara Seumur Hidup          "
        if (id == 13) return "Pidana Penjara Waktu Tertentu        "
        if (id == 14) return "Pidana Kurungan                      "
        if (id == 15) return "Pidana Bersyarat                     "
        if (id == 16) return "Pidana Denda                         "
        if (id == 17) return "Pidana Tambahan                      "
        if (id == 18) return "Dikembalikan Kepada Orang Tua        "
        if (id == 19) return "Diserahkan Kepada Pemerintah/Negara  "
        if (id == 20) return "Bebas Dari Dakwaan                   "
        if (id == 21) return "Lepas Dari Tuntutan                  "
        if (id == 23) return "Subsider Penjara                     "
        if (id == 24) return "Subsider Kurungan                    "
        if (id == 25) return "Subsider Denda                       "
        if (id == 26) return "Rehabilitasi                         "
        if (id == 27) return "Lain-lain                            "
        if (id == 29) return "Gugur                                "
        if (id == 30) return "Dikabulkan                           "
        if (id == 31) return "Dinyatakan Gugur                     "
        if (id == 32) return "Ditolak                              "
        if (id == 33) return "Tidak Dapat Diterima                 "
        if (id == 34) return "Dikabulkan                           "
        if (id == 35) return "Ditolak                              "
        if (id == 36) return "Tidak Dapat diterima                 "
        if (id == 37) return "Dicabut                              "
        if (id == 38) return "Gugur                                "
        if (id == 44) return "Pidana Penjara Seumur Hidup          "
        if (id == 45) return "Pidana Penjara                       "
        if (id == 46) return "Pidana Denda                         "
        if (id == 47) return "Pidana Percobaan                     "
        if (id == 48) return "Bebas Dari Dakwaan                   "
        if (id == 49) return "Lepas Dari Tuntutan                  "
        if (id == 50) return "In-Absentia                          "
        if (id == 51) return "Pidana Mati                          "
        if (id == 52) return "Dipecat Dari Dinas Militer           "
        if (id == 53) return "Rehabilisasi                         "
        if (id == 54) return "Pidana Tambahan                      "
        if (id == 55) return "Subsider Penjara                     "
        if (id == 56) return "Subsider Kurungan                    "
        if (id == 57) return "Subsider Denda                       "
        if (id == 58) return "Lain-lain                            "
        if (id == 59) return "Dilimpahkan                          "
        if (id == 60) return "Biaya Perkara                        "
        if (id == 61) return "Tidak dapat diterima                 "
        if (id == 62) return "Dikabulkan                           "
        if (id == 63) return "Ditolak                              "
        if (id == 64) return "Tidak Dapat Diterima                 "
        if (id == 65) return "Digugurkan                           "
        if (id == 66) return "Dicoret dari Register                "
        if (id == 67) return "Dicabut                              "
        if (id == 68) return "Cambuk                               "
        if (id == 69) return "Denda                                "
        if (id == 70) return "Kerja Sosial                         "
        if (id == 71) return "Pembinaan Oleh Negara                "
        if (id == 72) return "Pemutusan Perkawinan                 "
        if (id == 73) return "Pencabutan Izin dan Pencabutan Hak   "
        if (id == 74) return "Pengembalian Kepada Orang Tua/Wali   "
        if (id == 75) return "Penjara                              "
        if (id == 76) return "Perampasan Barang-Barang Tertentu    "
        if (id == 77) return "Restitusi                            "
        if (id == 78) return "Restitusi Oleh Orang Tua/Wali        "
        if (id == 79) return "Pengadilan Tidak Berwenang           "
        if (id == 80) return "Pengadilan Tidak Berwenang           "
        if (id == 81) return "Pengadilan Tidak Berwenang           "
        if (id == 82) return "Pengadilan Tidak Berwenang           "
        if (id == 83) return "Pengadilan Tidak Berwenang           "
        if (id == 84) return "Putusan NO                           "
        if (id == 85) return "Perdamaian                           "
        if (id == 86) return "Terdakwa Meninggal Dunia             "
        if (id == 87) return "Terdakwa Melarikan Diri              "
        if (id == 90) return "Pengembalian Berkas                  "
        if (id == 91) return "Penghentian Pemeriksaan Perkara      "
        if (id == 92) return "Dismissal                            "
        if (id == 93) return "Gugur                                "
        if (id == 94) return "Penawaran Diterima                   "
        if (id == 95) return "Penghentian Pemeriksaan Perkara      "
    },

    SumberHukum: (id: number) => {
        if (id == 1) return "  KUH Perdata (BW)                            "
        if (id == 2) return "  KUH Dagang                                  "
        if (id == 3) return "  Adat                                        "
        if (id == 4) return "  UU/PP                                       "
        if (id == 6) return "  Peraturan Perundangan-Undangan              "
        if (id == 7) return "  Asas-Asas Pemerintahan Yang Baik            "
        if (id == 8) return "  Kompilasi Hukum Islam                       "
        if (id == 9) return "  Kompilasi Hukum Ekonomi Syariah             "
        if (id == 10) return "  Fiqh Islam                                  "
        if (id == 11) return "  UU/PP                                       "
        if (id == 12) return "  Perpu dan Asas-Asas Pemerintahan Yang Baik  "
        if (id == 13) return "  Qanun Aceh                                  "
        if (id == 14) return "  Yurisprudensi                               "
        if (id == 15) return "  RV                                          "
        if (id == 16) return "  Yurisprudensi                               "
        if (id == 17) return "  HIR/RBg                                     "
    }
}

export default Helper