function gambarPuzzle(id_puzzle, gambar, koloms, bariss, lebar, tinggi){
    let image = '';
    let ctx = ''; // canvas content
    let lebars = lebar ? lebar : '';
    let tinggis = tinggi ? tinggi : '';
    let selesai_id = '';
    let koloms = koloms;
    let bariss = bariss;
    let ukuran_potongan = '';
    let ukuran_wadah = '';
    let posisi_potongan = [];
    let posisi_wadah = [];
    let hovered_wadah = -1;
    let clicked_wadah = -1;
    let selesai = 0;
    this.clicks = 0;

    function aturIsi(id_puzzle, gambar){
        image = gambar;
        if (width='') width = image.width;
        if (height='') height = image.height;


    }

}


function buatPuzzle(selector_css, koloms, bariss, selesai, callback){
    let gambars = document.querySelectorAll(selector_css);
    for (let i = 0; i<gambars.length; i++){
        let puzzle = new KotakPuzzle('puz'+i, gambars[i], bariss, koloms);
        if (selesai == 0) puzzle.kelar();
        if (callback) puzzle.terselesaikan = callback;
    }
}
