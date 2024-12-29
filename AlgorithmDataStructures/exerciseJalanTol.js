class GerbangTol {
  name;
  mobil;
  bus;
  truk;
  constructor(nama, hargaMobil, hargaBus, hargaTruk) {
    this.name = nama;
    this.mobil = hargaMobil;
    this.bus = hargaBus;
    this.truk = hargaTruk;
  }
}

const surabaya = new GerbangTol("Surabaya", 125000, 150000, 160000);
const ngawi = new GerbangTol("Ngawi", 55000, 60000, 70000);
const solo = new GerbangTol("Solo", 35000, 50000, 55000);
const batang = new GerbangTol("Batang", 155000, 160000, 190000);
const palimanan = new GerbangTol("Palimanan", 90000, 110000, 130000);
const cikampek = new GerbangTol("Cikampek", 35000, 40000, 50000);
const jakarta = new GerbangTol("Jakarta", 0, 0, 0);

var collectionTol = [
  surabaya,
  ngawi,
  solo,
  batang,
  palimanan,
  cikampek,
  jakarta,
];

let choice = 0;
let gerbangMasuk = "";
let gerbangKeluar = "";

function EnterTheMenu() {
  do {
    gerbangMasuk = prompt(
      `Silahkan isi dari gerbang tol mana anda memulai perjalanan\n\nPilihan:\n1. Surabaya\n2. Ngawi\n3. Solo\n4. Batang\n5. Palimanan\n6. Cikampek\n7. Jakarta\n\nKetik angka sesuai dengan gerbang tol Anda:`
    );
  } while (
    (Number(gerbangMasuk) < 1 || Number(gerbangMasuk) > 7) &&
    Number(gerbangMasuk) !== 0
  );
  do {
    gerbangKeluar = prompt(
      `Silahkan isi gerbang tol mana anda mengakhiri perjalanan\n\nPilihan:\n1. Surabaya\n2. Ngawi\n3. Solo\n4. Batang\n5. Palimanan\n6. Cikampek\n7. Jakarta\n\nKetik angka sesuai dengan gerbang tol Anda:`
    );
  } while (
    (Number(gerbangKeluar) < 1 || Number(gerbangKeluar) > 7) &&
    Number(gerbangKeluar) !== 0
  );
  calculateRuasTol(
    Number(gerbangMasuk),
    Number(gerbangKeluar),
    Number(choice) - 1
  );
}

function calculateRuasTol(awal, akhir, kendaraan) {
  let tempCounter = [];
  let tempHarga = 0;
  let angkutan = kendaraan === 0 ? "mobil" : kendaraan === 1 ? "bus" : "truk";
  console.log(angkutan);

  tempCounter.push(awal - 1, akhir - 1);

  for (let i = Math.min(...tempCounter); i < Math.max(...tempCounter); i++) {
    tempHarga += collectionTol[i][angkutan];
    console.log(tempHarga);
  }
  //return tempHarga;
  console.log(tempHarga);
  if (tempCounter[0] !== tempCounter[1]) {
    alert(
      `Anda memulai perjalanan menggunakan ${angkutan} dari gerbang ${
        collectionTol[tempCounter[0]].name
      } dan mengakhiri perjalanan di ${
        collectionTol[tempCounter[1]].name
      } dengan total harga ${tempHarga.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      })}`
    );
  } else {
    alert(
      `Anda memasukkan gerbang tol yang sama untuk awal dan akhir perjalanan! Tidak dapat kalkulasi biaya.`
    );
  }
}

//Main Program
do {
  choice = prompt(
    `Selamat Datang!\nAnda sedang menggunakan kalkulator perjalanan Ruas Tol TransJawa!\n\nSilahkan pilih kendaraan yang anda gunakan:\n1. Mobil\n2. Bus\n3. Truk\n\nUntuk keluar dari program, silahkan ketik 0`
  );
  switch (Number(choice)) {
    case 1:
      EnterTheMenu();
      choice = -1;
      break;
    case 2:
      EnterTheMenu();
      choice = -1;
      break;
    case 3:
      EnterTheMenu();
      choice = -1;
      break;
    case 0:
      alert(`You are exiting the program!`);
      break;
    default:
      alert(`Invalid Input`);
      break;
  }
} while ((Number(choice) < 1 || Number(choice) > 3) && Number(choice) !== 0);
