function tambah(nilai) {
    let layar = document.getElementById('layar');

    if (layar.value === '0' || layar.value === 'Error') {
        layar.value = nilai;
    } else {
        layar.value += nilai;
    }
}

function hapus() {
    document.getElementById('layar').value = '0';
}

function mundur() {
    let layar = document.getElementById('layar');
    layar.value = layar.value.slice(0, -1) || '0';
}

function hitung() {
    let layar = document.getElementById('layar');

    try {
        let hasil = Function('"use strict"; return (' + layar.value + ')')();

        if (!Number.isFinite(hasil)) {
            layar.value = 'Error';
        } else {
            layar.value = hasil;
        }
    } catch {
        layar.value = 'Error';
    }
}

window.tambah = tambah;
window.hapus = hapus;
window.mundur = mundur;
window.hitung = hitung;