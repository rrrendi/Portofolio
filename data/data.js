// ===== ISI PORTOFOLIO: edit TEKS di sini =====
// Foto dan dokumen TIDAK ditulis di sini. Taruh di folder aset/ lalu klik 2x UPDATE.bat (lihat PANDUAN.md).
// Folder tiap item = id-nya, contoh id:"freelance" -> aset/pengalaman/freelance/
const D={
 nama:"L.M. Rendi Gumilar Saputra",
 peran:"Web Developer & IT Support",
 lokasi:"Margaasih, Bandung, Jawa Barat, Indonesia",

 // ---------- STATUS: ganti satu kata saja ----------
 // mode:"cari"  = terbuka untuk pekerjaan   |   mode:"kerja" = sedang bekerja
 // Seluruh teks di bawah (lencana, hero, kotak status, info HR) ikut berganti otomatis.
 status:{mode:"cari",
  cari:{badge:"Tersedia untuk pekerjaan",cincin:"TERBUKA UNTUK PEKERJAAN",judul:"Terbuka untuk pekerjaan",
   teks:"Kuliah saya sudah selesai dan saya tinggal menunggu wisuda pada Desember 2026. Saat ini saya belum terikat pekerjaan dan terbuka untuk berbagai peran, di bidang IT maupun bidang lain yang menarik. Saya cepat beradaptasi dan senang belajar.",
   sedang:[{judul:"Belajar dan meningkatkan kemampuan",ket:"Saat ini tidak ada pekerjaan lain, jadi waktu saya dipakai untuk belajar dan mengasah skill."},{judul:"Menunggu wisuda",ket:"Wisuda D3 dijadwalkan Desember 2026."}],
   jam:"Fleksibel, bisa menyesuaikan jam kerja perusahaan. Wawancara atau telepon bisa dijadwalkan lewat WhatsApp atau email.",
   hero:" Terbuka untuk berbagai peran.",tombol:"Ajak saya bekerja sama",
   ringkas:[["Posisi yang dicari","Terbuka untuk berbagai peran: junior web developer, IT support, administrasi, atau bidang lain yang menarik"],["Ketersediaan","Siap kerja, jam kerja fleksibel"]]},
  kerja:{badge:"Sedang ada pekerjaan",cincin:"SEDANG BEKERJA",judul:"Kesibukan saya saat ini",
   teks:"Saat ini saya sedang bekerja. Saya tetap senang berdiskusi soal kolaborasi atau proyek freelance di luar jam kerja.",
   sedang:[], // contoh isi: [{judul:"Junior Web Developer di PT Contoh",ket:"Mengerjakan sistem internal."}]
   jam:"Di luar jam kerja. Hubungi saya lewat WhatsApp atau email.",
   hero:"",tombol:"Hubungi saya",
   ringkas:[["Status","Sedang bekerja"],["Ketersediaan","Terbuka untuk diskusi dan proyek freelance di luar jam kerja"]]}},

 statistik:[["1000+","siswa pernah saya foto"],["3","kali magang"],["3,56","IPK, lulus cum laude"],["Tertinggi","nilai sidang Tugas Akhir se-angkatan D3 Teknik Informatika"]],
 tentang:[
  "Saya Rendi, lulusan D3 Teknik Informatika dari Bandung. Kuliah saya sudah selesai dan saya tinggal menunggu wisuda pada Desember 2026. Saya terbiasa bekerja di depan komputer: membuat sistem web, mengurus administrasi dan entry data, mengelola toko di marketplace, dan menangani masalah dasar komputer.",
  "Saya pernah membuat beberapa sistem web sampai siap dipakai, termasuk untuk klien dan saat magang. Saya juga pernah memotret lebih dari 1000 siswa dan mengelola komunitas online. Saya belum memutuskan satu bidang utama, jadi saya terbuka mencoba peran yang berbeda dan cepat belajar.",
  "Saya lulus dengan IPK 3,56 (cum laude) dan mendapat penghargaan nilai sidang Tugas Akhir tertinggi dalam satu angkatan D3 Teknik Informatika.",
  "Saya memakai AI sebagai alat bantu, lalu memeriksa hasilnya sendiri sebelum dipakai."],
 // Info singkat untuk HR. Baris "posisi" dan "ketersediaan" otomatis ikut status di atas.
 ringkasan:[["Nama lengkap","Laode Muhammad Rendi Gumilar Saputra"],["Pendidikan","D3 Teknik Informatika, STMIK Mardira Indonesia. IPK 3,56 (cum laude), wisuda Desember 2026"],["Prestasi","Nilai sidang Tugas Akhir tertinggi dalam satu angkatan D3 Teknik Informatika"],["Pengalaman","Magang web developer, sistem web untuk klien, admin dan entry data, fotografer sekolah, komunitas Web3"],["Lokasi","Margaasih, Bandung"]],
 email:"rrendi6923@gmail.com", wa:"6282119992162", waTampil:"+62 821-1999-2162",
 sosmed:[["Instagram","@_rrrendi","https://instagram.com/_rrrendi"],["TikTok","@ztoneresolve","https://www.tiktok.com/@ztoneresolve"],["LinkedIn","lmrendigumilarsaputra","https://www.linkedin.com/in/lmrendigumilarsaputra"],["GitHub","rrrendi","https://github.com/rrrendi"]],

 // ---------- RIWAYAT KERJA (yang terbaru paling atas) ----------
 // Pekerjaan yang masih berjalan: selesai:"sekarang". Foto: aset/pengalaman/<id>/
 pengalaman:[
  {id:"freelance",tag:["web"],peran:"Full-Stack Mobile & Web Developer",org:"Freelance (Wiraswasta)",tipe:"Freelance",mulai:"Feb 2026",selesai:"Sep 2026",durasi:"8 bulan",lokasi:"Jarak jauh, dari rumah",
   ringkas:"Membuat sistem web untuk klien dengan Laravel dan MySQL, dari kebutuhan sampai siap dipakai.",
   poin:["Mengerjakan lebih dari 7 sistem web sesuai kebutuhan klien.","Memperbaiki bug dan fitur selama implementasi.","Memakai AI sebagai alat bantu menulis kode dan mencari solusi."],projects:["taf-wedding","4g-cake-cookies","jukase"],
   alur:[["Diskusi kebutuhan","Memahami masalah dan prioritas klien."],["Perancangan","Membuat UML dan BPMN untuk memetakan proses."],["Desain database dan tampilan","Menyusun tabel MySQL dan prototipe tampilan."],["Pengembangan","Membangun fitur dengan Laravel per modul."],["Pengujian","Menguji alur utama dan memperbaiki bug."],["Serah terima","Menjelaskan cara pakai ke klien."]]},
  {id:"pt-inti",tag:["web"],peran:"Web Developer",org:"PT Industri Telekomunikasi Indonesia (Persero)",tipe:"Magang",mulai:"Okt 2025",selesai:"Des 2025",durasi:"3 bulan",lokasi:"Bandung, di lokasi",
   ringkas:"Di bagian koperasi pengelola refurbish, saya membuat Website Manajemen Refurbish sampai siap dipakai.",
   poin:["Membuat website untuk alur barang: kedatangan, uji fungsi, repair, service handling, rekondisi, sampai packing.","Menyesuaikan fitur agar mudah dipakai staf."],projects:["refurbish-inti"],
   alur:[["Observasi di koperasi","Melihat langsung proses refurbish."],["Pemetaan alur","Menggambar urutan barang dari datang sampai packing."],["Pembuatan sistem","Membangun satu modul untuk tiap tahap."],["Uji bersama staf","Staf mencoba, saya mencatat kendala."],["Penyesuaian","Memperbaiki fitur sesuai kegiatan harian."],["Siap digunakan","Sistem diserahkan dan dipakai."]]},
  {id:"fotografer-sekolah",tag:["desain"],peran:"Fotografer Sekolah",org:"Berbagai sekolah",tipe:"Musiman",mulai:"Jun 2025",selesai:"Sep 2025",durasi:"4 bulan",lokasi:"Jawa Barat, di lokasi",
   ringkas:"Memotret dan mencetak foto lebih dari 1000 siswa untuk ijazah dan kartu identitas.",
   poin:["Memotret siswa dengan pose dan ukuran standar.","Mencetak foto sesuai kebutuhan sekolah."],projects:[],
   alur:[["Persiapan","Menyiapkan alat, latar, dan daftar siswa."],["Pemotretan","Memotret siswa per kelas."],["Seleksi dan edit","Memilih dan merapikan foto."],["Cetak dan serah","Mencetak lalu menyerahkan ke sekolah."]]},
  {id:"web3",tag:["desain","admin"],peran:"Kontributor WEB3 Independen",org:"#Web3",tipe:"Lepas",mulai:"Mei 2022",selesai:"Sep 2024",durasi:"2 tahun 5 bulan",lokasi:"Asia, jarak jauh",
   ringkas:"Mengelola komunitas, membalas pertanyaan anggota, dan membuat desain konten untuk promosi dan event.",
   poin:["Menjawab pertanyaan dan kebutuhan anggota.","Membuat desain konten promosi, informasi, komunitas, dan event.","Mengerjakan task lain untuk mendapat reward."],projects:[],
   alur:[["Pantau komunitas","Memeriksa pertanyaan anggota."],["Merespons","Menjawab dan mengarahkan anggota."],["Membuat konten","Mendesain dengan Canva atau Photoshop."],["Mendukung event","Menyiapkan materi event."]]},
  {id:"office-admin",tag:["admin"],peran:"Office Administrator",org:"Startup",tipe:"Magang",mulai:"Des 2021",selesai:"Jan 2022",durasi:"2 bulan",lokasi:"Ngamprah, di lokasi",
   ringkas:"Mengelola marketplace dan memasukkan data dengan akurat.",poin:["Mengelola toko di marketplace.","Entry data dengan teliti."],projects:[],
   alur:[["Mengelola toko","Memperbarui produk dan memproses pesanan."],["Entry data","Memasukkan data dengan akurat."]]},
  {id:"telemarketer",tag:["admin"],peran:"Telemarketer",org:"PT Kontak Perkasa Futures",tipe:"Magang",mulai:"Jun 2021",selesai:"Jul 2021",durasi:"2 bulan",lokasi:"Bandung, di lokasi",
   ringkas:"Menawarkan produk, melayani pelanggan, dan membangun kepercayaan klien.",poin:["Menawarkan produk lewat telepon.","Melayani dan mengarahkan pelanggan."],projects:[],
   alur:[["Menawarkan","Menghubungi calon pelanggan."],["Melayani","Menjawab pertanyaan dan memberi arahan."],["Menjaga hubungan","Membangun kepercayaan klien."]]},
  {id:"pkl-len",peran:"Praktik Kerja Lapangan",org:"PT LEN Industri",tipe:"PKL",mulai:"Nov 2020",selesai:"Jan 2021",durasi:"3 bulan",lokasi:"",
   ringkas:"Memimpin tim PKL berisi 4 orang, lalu menyusun laporan dan presentasi.",poin:["Membagi tugas dan mengarahkan anggota tim untuk mencapai target.","Mempresentasikan hasil di sidang PKL dan menjawab semua pertanyaan."],projects:[],
   alur:[["Membagi tugas","Mengatur pekerjaan 4 anggota tim."],["Pelaksanaan","Mengarahkan tim sampai target tercapai."],["Laporan","Menyusun laporan PKL."],["Sidang","Presentasi dan tanya jawab."]]}
 ],

 // ---------- SKILL: ubah angka (0-100) atau tambah baris ----------
 // tag = web | it | admin | desain (dipakai tombol "Anda sedang mencari apa?")
 skill:[
  {grup:"Web dan sistem",tag:"web",item:[["HTML dan CSS",70],["PHP dan Laravel",60],["MySQL",60],["JavaScript",45]]},
  {grup:"Administrasi dan kantor",tag:"admin",item:[["Entry data",85],["Microsoft Office",80]]},
  {grup:"Komputer dan IT support",tag:"it",item:[["Troubleshooting dasar PC/laptop",70],["Perakitan PC",70],["Perawatan software dan hardware",70]]},
  {grup:"Desain dan kreatif",tag:"desain",item:[["Canva",80],["CapCut",70],["Adobe Photoshop",65],["Fotografi",70]]}
 ],

 // ---------- HASIL KERJA / PROJECT. Foto: aset/project/<id>/ ----------
 project:{
  "taf-wedding":{nama:"TAF Wedding: pemesanan dan keuangan",tag:"Tugas Akhir",ket:"Sistem web untuk mengelola pemesanan dan laporan keuangan jasa wedding organizer, dengan notifikasi WhatsApp.",fitur:["Form pemesanan bertahap","Portal klien","Laporan keuangan PDF","Notifikasi WhatsApp"],stack:["Laravel","MySQL","Tailwind CSS"],link:""},
  "4g-cake-cookies":{nama:"4G Cake & Cookies: toko online",tag:"Tugas Akhir",ket:"Website toko dan pemesanan untuk usaha kue rumahan, menggantikan pencatatan manual lewat WhatsApp.",fitur:["Katalog, keranjang, checkout","Panel admin pesanan dan pengiriman","Modul keuangan dan laporan"],stack:["Laravel","MySQL","Tailwind CSS"],link:""},
  "jukase":{nama:"Jukase: toko sepatu",tag:"Proyek pribadi",ket:"Toko sepatu online dengan panel admin, stok per ukuran, dan pelacakan pesanan.",fitur:["Keranjang belanja","Stok per ukuran","Pelacakan pesanan"],stack:["Laravel","Tailwind CSS"],link:""},
  "refurbish-inti":{nama:"Website Manajemen Refurbish",tag:"Magang di PT INTI",ket:"Sistem untuk bagian koperasi yang mengatur alur refurbish barang agar lebih terstruktur.",fitur:["Kedatangan barang","Uji fungsi dan repair","Service handling dan rekondisi","Packing"],stack:["PHP","Laravel","MySQL"],link:""}
 },

 // ---------- HOBI YANG NYAMBUNG KE PEKERJAAN. Foto: aset/hobi/<id>/ ----------
 // Langkah (alur) di bawah adalah draf. Sesuaikan dengan yang benar-benar Anda lakukan, tambahkan contoh kasus nyata.
 hobi:[
  {id:"solder-speaker",label:"Elektronik",tag:["it"],judul:"Menyolder ulang speaker",
   ringkas:"Suara speaker saya tidak seimbang antara kiri dan kanan. Saya membongkarnya dan menyolder ulang sambungannya sampai suara kiri dan kanan presisi.",
   relevan:"Melatih ketelitian tangan, membaca masalah dari gejalanya, dan memastikan hasil perbaikan benar-benar teruji sebelum dipakai.",
   skill:["Menyolder","Troubleshooting hardware","Ketelitian"],
   alur:[["Gejala","Suara kiri dan kanan tidak seimbang."],["Pemeriksaan","Membongkar speaker dan memeriksa kabel serta titik solder."],["Perbaikan","Menyolder ulang sambungan yang bermasalah."],["Pengujian","Memutar suara uji kiri-kanan sampai seimbang."]]},
  {id:"servis-hp",label:"Hardware dan software",tag:["it"],judul:"Memperbaiki HP teman",
   ringkas:"Teman sering minta bantuan saat HP-nya bermasalah. Saya periksa dulu apakah masalahnya di software atau hardware, lalu memperbaikinya.",
   relevan:"Sama seperti IT support: memahami keluhan pengguna, mencari sumber masalah, memperbaiki, lalu menjelaskan hasilnya dengan bahasa awam.",
   skill:["Troubleshooting software","Perbaikan hardware","Melayani pengguna"],
   alur:[["Mendengar keluhan","Bertanya apa yang terjadi dan sejak kapan."],["Diagnosis","Memisahkan masalah software dari hardware."],["Perbaikan","Memperbaiki sesuai penyebabnya."],["Uji dan serah","Mengecek HP berfungsi normal, lalu menjelaskan ke pemiliknya."]]},
  {id:"rakit-pc",label:"Perakitan PC",tag:["it"],judul:"Merakit PC",
   ringkas:"Saya merakit PC dari komponen: memilih komponen yang cocok, memasang, sampai sistem siap dipakai.",
   relevan:"Memahami cara kerja tiap komponen membuat saya lebih cepat menemukan penyebab masalah pada PC dan laptop.",
   skill:["Perakitan PC","Instalasi OS dan driver","Kompatibilitas komponen"],
   alur:[["Kebutuhan","Menentukan kegunaan PC dan anggarannya."],["Pemilihan komponen","Memilih komponen yang saling cocok."],["Perakitan","Memasang komponen dan merapikan kabel."],["Instalasi","Memasang sistem operasi dan driver."],["Pengujian","Memastikan PC menyala dan stabil."]]}
 ],

 // ---------- GRAFIK IPK ----------
 ipk:{judul:"Perkembangan IPK saya",sub:"IPS tiap semester dan IPK kumulatif, sesuai portal akademik.",
  ips:[3.00,3.29,3.86,3.86,3.65,3.83], ipk:3.56,
  catatan:[{dari:1,sampai:2,teks:"Materi terasa mengulang SMK"}], // area yang diberi catatan di grafik
  cerita:["Di awal kuliah saya jarang masuk kelas karena materinya terasa seperti mengulang pelajaran SMK RPL yang sudah saya kuasai. Itu terlihat pada IPS semester 1 dan 2 (3,00 dan 3,29).","Begitu materinya mulai baru, saya kembali serius: IPS naik menjadi 3,86 di semester 3 dan 4, lalu 3,65 dan 3,83. IPK akhir saya 3,56 (cum laude)."]},
 // Foto/sertifikat penghargaan: taruh di aset/prestasi/<id>/
 penghargaan:[{id:"sidang-ta",judul:"Nilai Sidang Tugas Akhir Tertinggi",pemberi:"D3 Teknik Informatika, STMIK Mardira Indonesia",tahun:"2026",
  ket:"Nilai sidang Project Tugas Akhir saya adalah yang tertinggi dalam satu angkatan D3 Teknik Informatika."}],

 pendidikan:[["Diploma 3 (D3) Teknik Informatika","STMIK Mardira Indonesia, Bandung","2023 - 2026 (wisuda Desember 2026). IPK 3,56, cum laude."],["SMK Rekayasa Perangkat Lunak (RPL)","SMK MARHAS, Bandung","2018 - 2021"]],

 // ---------- SERTIFIKAT ----------
 // id = nama file tanpa ekstensi di aset/sertifikat/ (pasangan .pdf dan .jpg). File tanpa entri di sini tetap tampil, judulnya dari nama file.
 sertifikat:[
  {id:"html-css",nama:"Belajar Dasar-dasar HTML dan CSS",penerbit:"CODEPOLITAN (Kelas Online)",tahun:"27 Mei 2025",berlaku:"Berlaku sampai 27 Mei 2028",link:"https://codepolitan.com/c/LTSWDBA"},
  {id:"javascript-dasar",nama:"Belajar JavaScript Dasar",penerbit:"CODEPOLITAN (Kelas Online)",tahun:"27 Mei 2025",berlaku:"Berlaku sampai 27 Mei 2028",link:"https://codepolitan.com/c/XEPR9FU"}],

 hero:"Lulusan D3 Teknik Informatika dari Bandung, IPK 3,56 (cum laude).",
 cy:["membuat sistem web","merakit dan memperbaiki PC","merapikan dan mengentri data","memotret ribuan siswa","mengelola komunitas online"],
 fm:{semua:"Menampilkan semuanya, dari yang terbaru.",web:"Magang web developer di PT INTI dan 7+ sistem web dengan Laravel dan MySQL. Level skill web saya: cukup.",it:"Bisa merakit PC dan menangani masalah dasar software dan hardware. Lihat bagian Hobi: menyolder speaker, memperbaiki HP teman, dan merakit PC.",admin:"Pernah menjadi office administrator, mengelola marketplace, dan entry data.",desain:"Pernah memotret 1000+ siswa dan membuat desain konten komunitas dengan Canva dan Photoshop."}
};
