export interface ILoginResponse {
    message: string;
    token: string;
    user: IUserResponse
}

export interface IRegisterResponse {
    message: string;
    token: string;
    user: IUserResponse;
}

export interface IUserResponse {
    id: number;
    name: string;
    phone: string;
    created_at: string;
}

export interface IPerkaraResponse {
    perkara_id: number,
    jenis_acara: null,
    alur_perkara_id: number,
    tanggal_pendaftaran: string,
    jenis_perkara_id: number,
    jenis_perkara_kode: null,
    jenis_perkara_nama: string,
    jenis_perkara_text: string,
    nomor_urut_register: number,
    nomor_urut_perkara: number,
    nomor_perkara: string,
    nomor_indeks: string,
    tanggal_surat: string | null,
    nomor_surat: string | null,
    surat_dok: string | null,
    pihak1_text: string,
    pengacara_pihak1: string,
    pihak2_text: string,
    pengacara_pihak2: string,
    pihak3_text: string,
    pengacara_pihak3: string,
    pihak4_text: string | null,
    pengacara_pihak4: string | null,
    para_pihak: string,
    pihak_dipublikasikan: string,
    posita: string,
    petitum: string,
    petitum_dok: string,
    nomor_dakwaan: string | null,
    tanggal_dakwaan: string | null,
    dakwaan: string | null,
    pasal_dakwaan: string | null,
    dakwaan_dok: string,
    tanggal_rencana_perdamaian: string | null,
    tanggal_pengesahan_perdamaian: string | null,
    tanggal_penyelesaian_mediasi: string | null,
    tanggal_penyelesaian_konsiliasi: string | null,
    perkara_rujukan_id: string | null,
    nomor_perkara_rujukan: string | null,
    tanggal_pendaftaran_rujukan: string | null,
    catatan_pendaftaran: string | null,
    prodeo: number,
    terdakwa_anak: number,
    tahapan_terakhir_id: number,
    tahapan_terakhir_text: string,
    proses_terakhir_id: number,
    proses_terakhir_text: string,
    nilai_sengketa: number,
    diedit_oleh: string | null,
    diedit_tanggal: string | null,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: string,
    diperbaharui_tanggal: string
}

export interface IDataUmumResponse {
    perkara_id: number,
    jenis_acara: null,
    alur_perkara_id: number,
    tanggal_pendaftaran: string,
    jenis_perkara_id: number,
    jenis_perkara_kode: null,
    jenis_perkara_nama: string,
    jenis_perkara_text: string,
    nomor_urut_register: number,
    nomor_urut_perkara: number,
    nomor_perkara: string,
    nomor_indeks: string,
    tanggal_surat: string | null,
    nomor_surat: string | null,
    surat_dok: string | null,
    pihak1_text: string,
    pengacara_pihak1: string,
    pihak2_text: string,
    pengacara_pihak2: string,
    pihak3_text: string,
    pengacara_pihak3: string,
    pihak4_text: string | null,
    pengacara_pihak4: string | null,
    para_pihak: string,
    pihak_dipublikasikan: string,
    posita: string,
    petitum: string,
    petitum_dok: string,
    nomor_dakwaan: string | null,
    tanggal_dakwaan: string | null,
    dakwaan: string | null,
    pasal_dakwaan: string | null,
    dakwaan_dok: string,
    tanggal_rencana_perdamaian: string | null,
    tanggal_pengesahan_perdamaian: string | null,
    tanggal_penyelesaian_mediasi: string | null,
    tanggal_penyelesaian_konsiliasi: string | null,
    perkara_rujukan_id: string | null,
    nomor_perkara_rujukan: string | null,
    tanggal_pendaftaran_rujukan: string | null,
    catatan_pendaftaran: string | null,
    prodeo: number,
    terdakwa_anak: number,
    tahapan_terakhir_id: number,
    tahapan_terakhir_text: string,
    proses_terakhir_id: number,
    proses_terakhir_text: string,
    nilai_sengketa: number,
    diedit_oleh: string | null,
    diedit_tanggal: string | null,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: string,
    diperbaharui_tanggal: string,
    // saksi: ISaksiResponse[],
    data_pernikahan: IDataNikahResponse,
    // pihak_satu: IPihakResponse,
    // pihak_dua: IPihakResponse,
    tahapan_proses: ITahapanProsesResponse[],
}
export interface IDataUmumParaPihakResponse {
    perkara_id: number,
    jenis_acara: null,
    alur_perkara_id: number,
    tanggal_pendaftaran: string,
    jenis_perkara_id: number,
    jenis_perkara_kode: null,
    jenis_perkara_nama: string,
    jenis_perkara_text: string,
    nomor_urut_register: number,
    nomor_urut_perkara: number,
    nomor_perkara: string,
    nomor_indeks: string,
    tanggal_surat: string | null,
    nomor_surat: string | null,
    surat_dok: string | null,
    pihak1_text: string,
    pengacara_pihak1: string,
    pihak2_text: string,
    pengacara_pihak2: string,
    pihak3_text: string,
    pengacara_pihak3: string,
    pihak4_text: string | null,
    pengacara_pihak4: string | null,
    para_pihak: string,
    pihak_dipublikasikan: string,
    posita: string,
    petitum: string,
    petitum_dok: string,
    nomor_dakwaan: string | null,
    tanggal_dakwaan: string | null,
    dakwaan: string | null,
    pasal_dakwaan: string | null,
    dakwaan_dok: string,
    tanggal_rencana_perdamaian: string | null,
    tanggal_pengesahan_perdamaian: string | null,
    tanggal_penyelesaian_mediasi: string | null,
    tanggal_penyelesaian_konsiliasi: string | null,
    perkara_rujukan_id: string | null,
    nomor_perkara_rujukan: string | null,
    tanggal_pendaftaran_rujukan: string | null,
    catatan_pendaftaran: string | null,
    prodeo: number,
    terdakwa_anak: number,
    tahapan_terakhir_id: number,
    tahapan_terakhir_text: string,
    proses_terakhir_id: number,
    proses_terakhir_text: string,
    nilai_sengketa: number,
    diedit_oleh: string | null,
    diedit_tanggal: string | null,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: string,
    diperbaharui_tanggal: string,
    pihak_satu: IPihakResponse[],
    pihak_dua: IPihakResponse[]
}

export interface IPihakResponse {
    id: number,
    perkara_id: number,
    urutan: number,
    pihak_id: number,
    jenis_pihak_id: number,
    nama: string,
    alamat: string,
    keterangan: string,
    diedit_oleh: string | null,
    diedit_tanggal: string | null,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: string | null,
    diperbaharui_tanggal: string | null
}

export interface ISaksiResponse {
    id: number,
    perkara_id: number,
    urutan: number,
    saksi_pihak_ke: number,
    pihak_id: number,
    jenis_pihak_id: number,
    jenis_saksi: string,
    nama: string,
    alamat: string,
    pangkat: null | string,
    nrp: null | string,
    jabatan: null | string,
    kesatuan: null | string,
    keterangan: string,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: null | string,
    diperbaharui_tanggal: null | string,
    pihak: IIdentityResponse
}

export interface IDataNikahResponse {
    perkara_id: number,
    tgl_nikah: string,
    tgl_kutipan_akta_nikah: string,
    no_kutipan_akta_nikah: string,
    kua_tempat_nikah: string,
    diedit_oleh: string | null,
    diedit_tanggal: string | null,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: string | null,
    diperbaharui_tanggal: string | null
}

export interface IIdentityResponse {
    id: number,
    jenis_pihak_id: number,
    jenis_indentitas: number,
    nomor_indentitas: number,
    nama: string,
    tempat_lahir: string,
    tanggal_lahir: string,
    jenis_kelamin: string,
    golongan_darah: string | null,
    alamat: string,
    rtrw: null | string,
    kelurahan: null | string,
    kecamatan: null | string,
    kabupaten_id: null | string,
    kabupaten: null | string,
    propinsi_id: null | string,
    propinsi: null | string,
    telepon: number,
    fax: null | string,
    email: string,
    agama_id: number,
    agama_nama: null | string,
    status_kawin: number,
    pekerjaan: string,
    pendidikan_id: number,
    pendidikan: null | string,
    warga_negara_id: number,
    warga_negara: null | string,
    nama_ayah: null | string,
    nama_ibu: null | string,
    keterangan: number,
    foto: null | string,
    difabel: string,
    diedit_oleh: null | string,
    diedit_tanggal: null | string,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: string,
    diperbaharui_tanggal: string,
    pihak_satu: ICourtIdentityResponse
}

export interface ICourtIdentityResponse {
    id: number,
    perkara_id: number,
    urutan: number,
    pihak_id: number,
    jenis_pihak_id: number,
    nama: string,
    alamat: string,
    keterangan: string | null,
    diedit_oleh: null | string,
    diedit_tanggal: null | string,
    diinput_oleh: string,
    diinput_tanggal: string,
    diperbaharui_oleh: null | string,
    diperbaharui_tanggal: null
}

export interface ISidangResponse {
    id: number;
    perkara_id: number;
    verzet: string;
    keberatan: string;
    ikrar_talak: string;
    urutan: number;
    tanggal_sidang: string;
    jam_sidang: string;
    sampai_jam: string;
    agenda_id: null | number;
    agenda: string;
    ruangan_id: number;
    ruangan: string;
    sidang_keliling: string;
    dihadiri_oleh: string;
    ditunda: string;
    alasan_ditunda: number;
    sidang_ditempat: number;
    sifat_sidang: string;
    keterangan: string;
    edoc_bas: string;
    diedit_oleh: string
    diedit_tanggal: null | string;
    diinput_oleh: string;
    diinput_tanggal: string;
    diperbaharui_oleh: string;
    diperbaharui_tanggal: string;
}

export interface ITranasksiResponse {
    id: number;
    id_pembiayaan: number;
    perkara_id: number;
    tahapan_id: number;
    kategori_id: number;
    jenis_biaya_id: number;
    pihak_id: null | number;
    pihak_ke: null | number;
    urutan: number;
    jenis_transaksi: number;
    tanggal_transaksi: string;
    uraian: string;
    jumlah: string;
    sisa: null | string;
    keterangan: null | string;
    diedit_oleh: null | string;
    diedit_tanggal: null | string;
    diinput_oleh: string;
    diinput_tanggal: string;
    diperbaharui_oleh: null | string;
    diperbaharui_tanggal: null | string;
}

export interface IPutusanResponse {
    perkara_id: number;
    tanggal_putusan: string;
    putusan_verstek: string;
    sumber_hukum_id: number;
    status_putusan_id: number;
    status_putusan_kode: null | number;
    status_putusan_nama: null | string;
    status_putusan_text: null | string;
    tanggal_cabut: null | string;
    tanggal_gugur: null | string;
    amar_putusan: string;
    amar_putusan_dok: string;
    amar_putusan_anonimisasi_dok: string;
    penetapan_hakim_pengawas: null | string;
    nomor_penetapan_hakim_pengawas: null | string;
    hakim_pengawas_id: null | string;
    pengurus_id: null | string;
    tanggal_penetapan_kreditur: null | string;
    panitia_kreditur: null | string;
    kurator_id: null | string;
    tanggal_berita_putusan: null | string;
    nama_media_berita_putusan: null | string;
    tanggal_surat_kabar_putusan: null | string;
    nama_surat_kabar_putusan: null | string;
    tanggal_minutasi: string;
    pemberitahuan_putusan: null | string;
    pemberitahuan_putusan_pihak1: null | string;
    pemberitahuan_putusan_pihak2: null | string;
    pemberitahuan_putusan_pihak3: null | string;
    pemberitahuan_putusan_ankum: null | string;
    pemberitahuan_putusan_pepera: null | string;
    menerima_putusan_pihak1: null | string;
    menerima_putusan_pihak2: null | string;
    penerbitan_salinan_putusan: null | string;
    kirim_salinan_putusan_pihak1: null | string;
    kirim_salinan_putusan_pihak2: null | string;
    kirim_salinan_putusan_pihak3: null | string;
    kirim_salinan_putusan_penyidik: null | string;
    catatan_putusan: null | string;
    nilai_ganti_kerugian: null | string;
    tanggal_bht: null | string;
    diedit_oleh: null | string;
    diedit_tanggal: null | string;
    diinput_oleh: string;
    diinput_tanggal: string;
    diperbaharui_oleh: string;
    diperbaharui_tanggal: string;
}

export interface IAktaCeraiResponse {
    perkara_id: number;
    tahun_akta_cerai: null | string;
    nomor_urut_akta_cerai: null | string;
    nomor_akta_cerai: null | string;
    tgl_akta_cerai: null | string;
    no_seri_akta_cerai: null | string;
    jenis_cerai: null | string;
    faktor_perceraian_id: number;
    qobla_bada: null | string;
    perceraian_ke: null | string;
    keadaan_istri: number;
    tgl_penyerahan_akta_cerai: null | string;
    tgl_penyerahan_akta_cerai_pihak2: null | string;
    akta_cerai_dok: null | string;
    blangko_akta_cerai: number;
    diedit_oleh: null | string;
    diedit_tanggal: null | string;
    diinput_oleh: string;
    diinput_tanggal: string;
    diperbaharui_oleh: string;
    diperbaharui_tanggal: string;
}

export interface IKabKotaResponse {
    kabupaten_kota: string,
    kode_satker: number
}

export interface IRadiusResponse {

    id: number,
    nama_satker: string,
    kode_satker: number,
    kode_provinsi: number,
    nama_provinsi: string,
    kabupaten_kota: string,
    kecamatan: string,
    kelurahan: string,
    nomor_radius: number,
    biaya: string,
    created_at: Date,
    updated_at: Date
}

export interface ITahapanProsesResponse {
    perkara_id: number,
    general_id: number,
    tahapan_id: number,
    tahapan_nama: string,
    proses_id: 10,
    proses_nama: string,
    tanggal: string,
    keterangan: string,
    urutan: number,
    diinput_oleh: string,
    diinput_tanggal: Date,
    diperbaharui_oleh: null | string,
    diperbaharui_tanggal: null | string
}

export interface IKirimSurveyResponse {
    status: string;
    message: string;
}

export interface ISurveyCekResponse {
    ikm: number;
    ipk: number
}


export interface IKuesionerResponse {
    id: number,
    no: number,
    pertanyaan: string,
    jawaban: IJawabanResponse[]
}

export interface IJawabanResponse {
    id: number,
    id_quesioner: number,
    jawaban: string,
    bobot: number
}

export interface IKirimSurveyResponse {
    status: string;
    message: string;
}

export interface ISurveyCekResponse {
    ikm: number;
    ipk: number
}