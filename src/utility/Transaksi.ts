import { ITranasksiResponse } from "../interfaces/ResponseInterface";

export function countPemasukan(data: ITranasksiResponse[]) {
    let count = 0;
    data.forEach(i => {
        if (i.jenis_transaksi == 1) {
            count += parseFloat(i.jumlah);
        }
    })
    return count;
}

export function countPengeluaran(data: ITranasksiResponse[]) {
    let count = 0;
    data.forEach(i => {
        if (i.jenis_transaksi !== 1) {
            count += parseFloat(i.jumlah);
        }
    })
    return count;
}

export function countSisa(data: ITranasksiResponse[]) {
    let countPlus = 0;
    data.forEach(i => {
        if (i.jenis_transaksi == 1) {
            countPlus += parseFloat(i.jumlah);
        }
    })

    let countMin = 0;
    data.forEach(i => {
        if (i.jenis_transaksi !== 1) {
            countMin += parseFloat(i.jumlah);
        }
    })

    return countPlus - countMin;

}