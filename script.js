
const dataGame = {
    1: {
        nama: "Batu, Gunting, Kertas",
        pilihan: ["Batu", "Gunting", "Kertas"],
        aturanMenang: [[1, 2], [2, 3], [3, 1]]
    },

    2: {
        nama: "Orang, Gajah, Semut",
        pilihan: ["Orang", "Gajah", "Semut"],
        aturanMenang: [[2, 1], [1, 3], [3, 2]]
    },

    3: {
        nama: "Suit Jari",
        pilihan: ["Jempol", "Telunjuk", "Kelingking"],
        aturanMenang: [[1, 2], [2, 3], [3, 1]]
    }
};

let gameAktif;

function pilihGame(nomor) {
    gameAktif = dataGame[nomor];

    document.getElementById("menu").classList.add("hidden");
    document.getElementById("permainan").classList.remove("hidden");

    document.getElementById("judulGame").textContent =
        gameAktif.nama;

    document.getElementById("hasil").innerHTML = "";

    const tempatPilihan = document.getElementById("pilihan");
    tempatPilihan.innerHTML = "";

    for (let i = 0; i < gameAktif.pilihan.length; i++) {
        const tombol = document.createElement("button");

        tombol.textContent = gameAktif.pilihan[i];
        tombol.className = "pilihan-btn";

        tombol.onclick = function() {
            mainGame(i + 1);
        };

        tempatPilihan.appendChild(tombol);
    }
}

function mainGame(pemain) {
    const komputer = Math.floor(Math.random() * 3) + 1;

    let hasil = "";

    if (pemain === komputer) {
        hasil = "seri";
    } else {
        for (let i = 0; i < gameAktif.aturanMenang.length; i++) {
            const aturan = gameAktif.aturanMenang[i];

            if (pemain === aturan[0] && komputer === aturan[1]) {
                hasil = "menang";
                break;
            }
        }

        if (hasil === "") {
            hasil = "kalah";
        }
    }

    const namaPemain = gameAktif.pilihan[pemain - 1];
    const namaKomputer = gameAktif.pilihan[komputer - 1];

    let pesan = "";

    if (hasil === "menang") {
        pesan = "KAMU MENANG!";
    } else if (hasil === "kalah") {
        pesan = "KAMU KALAH!";
    } else {
        pesan = "HASIL SERI!";
    }

    document.getElementById("hasil").innerHTML =
        "<p>Pilihan kamu: <b>" + namaPemain + "</b></p>" +
        "<p>Pilihan komputer: <b>" + namaKomputer + "</b></p>" +
        "<h3 class='" + hasil + "'>" + pesan + "</h3>";
}

function kembali() {
    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("permainan").classList.add("hidden");
}
