const allQuestions = [
       {
           question: "Dalam perencanaan pemeliharaan peralatan elektromedik banyak hal yang harus dipertimbangkan dan dievaluasi sehingga didapatkan peralatan yang berkualitas dan tidak menjadi permasalahan di kemudian hari. Apakah pertimbangan teknis utama agar dipenuhi harapan tersebut?",
           options: ["A. Merk dari alat yang direncanakan", "B. Harga dari alat yang direncanakan", "C. Spesifikasi dari alat yang direncanakan", "D. Buku manual dari alat yang direncanakan", "E. Pelayanan marketing dari alat yang direncanakan"],
           answer: "D. Buku manual dari alat yang direncanakan"
       },
       {
           question: "Di unit Radiologi Rumah Sakit Type C terdapat permasalahan pada APF. Gambar yang dihasilkan oleh Automatic Processing Film bergaris sehingga merusak gambar pada film. Telah dilakukan pemeriksaan pada kaset dan cairan pada alat APF bagus, dilakukan pencucian ulang tetapi hasilnya tetap bergaris. Apa analisa pada alat Automatic Processing Film tersebut?",
           options: ["A. Air pada APF kosong.", "B. Roller pada APF rusak.", "C. Cairan Fixer bercampur dengan Developer.", "D. Cairan developer bercampur dengan air bersih.", "E. Drying pada APF mengalami kerusakan pada elemen pemanas."],
           answer: "B. Roller pada APF rusak."
       },
       {
           question: "Salah satu alat yang harus ada di ruangan ICU adalah bedside monitor atau patient monitor yang digunakan untuk memantau kondisi pasien. Salah satu parameter alat yaitu respirasi dan 4 parameter pengukuran. Apakah makna dari pengukuran parameter tersebut?",
           options: ["A. Pemeriksaan kesadaran pasien", "B. Pemeriksaan tekanan darah pasien", "C. Pengukuran gula dalam darah pasien", "D. Pemeriksaan irama napas pasien dalam satu menit", "E. Pemeriksaan kadar oksigen yang ada dalam pasien."],
           answer: "D. Pemeriksaan irama napas pasien dalam satu menit"
       },
       {
           question: "Salah satu alat yang harus ada di ruangan ICU adalah bedside monitor atau patient monitor yang digunakan untuk memantau kondisi pasien. Salah satu parameter alat yaitu respirasi dan 4 parameter pengukuran. Apakah keempat parameter utama yang harus dimiliki oleh setiap bedside monitor?",
           options: ["A. EKG, Respirasi, ECT, dan NIBP", "B. EKG, Respirasi, SpO2, dan ECT", "C. EKG, Respirasi, SpO2, dan NIBP", "D. EKG, Respirasi, NIBP, dan Darah", "E. EKG, Respirasi, SpO2, dan Temperature"],
           answer: "C. EKG, Respirasi, SpO2, dan NIBP"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda-elektroda tertentu pada permukaan kulit, hasil rekaman pada kertas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat tersebut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Apakah makna dari huruf T pada grafik yang ditempatkan oleh EKG?",
           options: ["A. Repolarisasi Ventrikel dan Atrium.", "B. Depolarisasi Ventrikel", "C. Repolarisasi Ventrikel", "D. Depolarisasi Atrium", "E. Repolarisasi Atrium"],
           answer: "C. Repolarisasi Ventrikel"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda-elektroda tertentu pada permukaan kulit, hasil rekaman pada kertas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat tersebut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Apakah yang direkam oleh alat EKG pada Lead III?",
           options: ["A. Lengan kanan (RA) yang bermuatan negatif (-) dengan lengan kiri (LA) yang bermuatan positif (+) (LEAD 1)", "B. Lengan kanan (RA) yang bermuatan negatif (-) dengan kaki kiri (LL) yang bermuatan positif (+)", "C. Lengan kiri (LA) yang bermuatan negatif (-) dengan kaki kiri (LL) yang bermuatan positif (+)", "D. Kaki kanan (RA) yang bermuatan negatif (-) dengan lengan kiri (LA) yang bermuatan positif (+)", "E. Kaki kiri (LL) yang bermuatan negatif (-) dengan kaki kanan (RL) yang bermuatan positif (+)"],
           answer: "C. Lengan kiri (LA) yang bermuatan negatif (-) dengan kaki kiri (LL) yang bermuatan positif (+)"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda-elektroda tertentu pada permukaan kulit, hasil rekaman pada kertas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat tersebut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Apakah nama lain dari kertas grafik yang digunakan untuk menggambarkan sinyal jantung alat tersebut?",
           options: ["A. Diagram", "B. Kardiologi", "C. Teleterapi", "D. Elektrokardiograf", "E. Elektrokardiogram"],
           answer: "E. Elektrokardiogram"
       },
       {
           question: "Micro Wave Diathermy adalah alat terapi yang memanfaatkan energi elektromagnetik yang dihasilkan oleh arus bolak balik dengan frekuensi 2450 Hz dengan panjang gelombang 12,25 cm. Hal ini akan menimbulkan efek fisiologis dan efek terapeutik terhadap tubuh manusia. Apakah efek terapeutik yang akan ditimbulkan pada tubuh manusia?",
           options: ["A. Gangguan ambang rangsangan jaringan syaraf", "B. Perubahan temperatur pada jaringan otot", "C. Penyembuhan luka pada jaringan lunak", "D. Gangguan Vaskularisasi", "E. Kontraktur jaringan"],
           answer: "A. Gangguan ambang rangsangan jaringan syaraf"
       },
       {
           question: "Menurut teori sinar-X dihasilkan karena adanya beda tegangan antara anoda dan katoda yang melebihi daya PLN (220 Volt) di dalam tabung rontgen. Untuk mengakomodir tegangan yang melebihi daya PLN tersebut digunakan suatu alat yang dapat mengubah tegangan rendah ke tegangan tinggi pada pesawat tersebut. Apakah nama alat yang dimaksud?",
           options: ["A. High Tension Transformator", "B. Auto Transformer", "C. Trafo Step Down", "D. Generator", "E. Osilator"],
           answer: "A. High Tension Transformator"
       },
       {
           question: "Di ruangan radiologi, Dokter Sp.Radiologi mengeluhkan kualitas gambar hasil prosesing film kurang baik. Hasil pengecekan alat prosesing film menggunakan alat APF dalam kondisi baik, dan suhu ruangan sesuai standar. Sikap apakah yang paling penting dibutuhkan untuk mengatasi keluhan di atas?",
           options: ["A. Mengusulkan mengganti alat APF dengan yang baru", "B. Mencatat dan melaporkan kepada atasan untuk masalah ini", "C. Mengganti cairan film fixer, developer, dan air dengan yang baru", "D. Memeriksa, menganalisa dan memperbaiki APF agar dapat berfungsi dengan baik", "E. Melaporkan ke atasan kalau alat APF sedang rusak kemudian memeriksa, menganalisa, dan memperbaiki APF agar dapat berfungsi dengan baik"],
           answer: "E. Melaporkan ke atasan kalau alat APF sedang rusak kemudian memeriksa, menganalisa, dan memperbaiki APF agar dapat berfungsi dengan baik"
       },
       {
           question: "Seorang Teknisi Elektromedis mendapatkan permohonan perbaikan tensimeter air raksa. Setelah diperiksa, kondisi fisik manset rusak, sedang stok suku cadang manset di gudang habis. Tindakan awal apa yang harus dilakukan?",
           options: ["A. Memeriksa", "B. Memelihara", "C. Memperbaiki", "D. Melapor ke atasan", "E. Mencatat di buku pemeliharaan"],
           answer: "E. Mencatat di buku pemeliharaan"
       },
       {
           question: "Sebuah RS akan menambahkan sebuah pesawat rontgen dengan spesifikasi daya 60 kVA, 2 phase, tegangan 200 Volt, sedangkan RS mempunyai daya 200 kVA, tegangan listrik 330 Volt 3 phase. Komponen pendukung untuk spesifikasi di atas yang paling penting dibutuhkan untuk alat tersebut adalah?",
           options: ["A. UPS", "B. Stabilisator", "C. Trafo Step Up", "D. Kabel ground", "E. Trafo Step Down"],
           answer: "E. Trafo Step Down"
       },
       {
           question: "Sebuah meja operasi elektrik dilaporkan mengalami kerusakan dimana kemiringan badan tidak berfungsi dengan baik. Meja tersebut menggunakan penggerak motor elektrik. Pergerakan bagian-bagian yang lainnya berfungsi dengan baik termasuk hand switch. Komponen apa yang paling memungkinkan mengalami kerusakan?",
           options: ["A. Motor penggerak", "B. Kontraktor relay", "C. Kapasitor", "D. Resistor", "E. Hidrolik"],
           answer: "E. Hidrolik"
       },
       {
           question: "Sebuah Suction Pump dilaporkan mengalami kerusakan dimana alat tidak dapat menyedot dengan maksimal. Dari hasil pemantauan sementara motor dalam kondisi baik, selang-selang masih dalam kondisi normal, filter masih baik dan tabung penampung masih bagus. Komponen apa yang paling memungkinkan kerusakan itu terjadi?",
           options: ["A. Karet seal pada gelas cairan", "B. Pressure gauge", "C. Kapasitor motor", "D. Pelumas motor", "E. Tali puli motor"],
           answer: "A. Karet seal pada gelas cairan"
       },
       {
           question: "Sebuah spygmomanometer air raksa dilaporkan hasil pengukurannya selalu tinggi oleh petugas. Setelah dilakukan pengecekan oleh tenaga elektromedis semua komponennya bagus. Apa yang harus dilakukan pertama kali untuk mengetahui kebenaran tersebut?",
           options: ["A. Dilakukan kalibrasi", "B. Mengurangi air raksa", "C. Penambahan air raksa", "D. Penggantian tabung ukur", "E. Penggantian seal tabung ukur"],
           answer: "A. Dilakukan kalibrasi"
       },
       {
           question: "Dilaporkan adanya kerusakan lampu operasi pada Ruang Operasi. Setelah dilakukan pemeriksaan oleh seorang elektromedis, diketahui bahwa salah satu bola lampu operasi tersebut tidak menyala. Diketahui bahwa terdapat 4 bola lampu lain dalam lampu operasi tersebut masih menyala. Untuk mengetahui spesifikasi bola lampu, maka 4 bola lampu operasi yang masih menyala dibuka. Ternyata tanda spesifikasi volt dan watt pada lampu sudah tidak terlihat baik di bola lampu maupun di name plate unit lampu operasi. Parameter apakah yang harus diukur untuk mengetahui tegangan kerja dari bola lampu tersebut?",
           options: ["A. Resistansi Lampu", "B. Arus Kerja Lampu", "C. Volume Bola Lampu", "D. Resistansi Konduktor", "E. Output Catu Daya Lampu"],
           answer: "A. Resistansi Lampu"
       },
       {
           question: "Dilaporkan adanya kerusakan lampu operasi pada Ruang Operasi. Setelah dilakukan pemeriksaan oleh seorang elektromedis, diketahui bahwa salah satu bola lampu operasi tersebut tidak menyala. Diketahui bahwa terdapat 4 bola lampu lain dalam lampu operasi tersebut masih menyala. Untuk mengetahui spesifikasi bola lampu, maka 4 bola lampu operasi yang masih menyala dibuka. Ternyata tanda spesifikasi volt dan watt pada lampu sudah tidak terlihat baik di bola lampu maupun di name plate unit lampu operasi. Alat Ukur apakah yang digunakan pada saat perbaikan tersebut?",
           options: ["A. Multimeter", "B. Flowmeter", "C. Tachometer", "D. Anemometer", "E. Pressure meter"],
           answer: "A. Multimeter"
       },
       {
           question: "Pada ruang PICU terdapat 5 patient monitor dengan merek dan type yang sama dengan tahun perolehan 2 tahun yang lalu. Selama berada di PICU, tidak pernah terjadi permasalahan yang serius dengan alat tersebut. Komponen apakah yang paling rawan rusak setelah pemakaian selama 2 tahun?",
           options: ["A. Battery", "B. Mainboard", "C. User Interface", "D. Digital Display", "E. Data Acquisition System Board"],
           answer: "A. Battery"
       },
       {
           question: "Kerusakan alat infant warmer di ruang PICU dilaporkan oleh USER. Setelah dilakukan pemeriksaan oleh teknisi, ternyata lampu penerangan (Lampu Tindakan) tidak menyala, sedangkan Heater lamp (Pemanas) berfungsi dengan Baik. Tidak ada pesan kesalahan (Error) yang muncul pada tampilan alat. Apakah alat Ukur yang Anda gunakan untuk melakukan Troubleshooting kerusakan alat tersebut?",
           options: ["A. Luxmeter", "B. Multimeter", "C. Tachometer", "D. Surveymeter", "E. Energy meter"],
           answer: "B. Multimeter"
       },
       {
           question: "Terdapat laporan dari Laboratorium Central bahwa alat Centrifuge tidak berfungsi. Setelah dilakukan Pemeriksaan, pada saat alat dihidupkan semua indikator berfungsi dengan baik. Setelah ditutup pintu centrifugenya dan ditekan tombol start, motor tidak berputar dan muncul kode kesalahan “LiD”. Apakah analisa kerusakan awal Centrifuge tersebut?",
           options: ["A. Kerusakan Motor", "B. Kerusakan Mainboard", "C. Kerusakan RPM Detector", "D. Kerusakan Pengunci Pintu", "E. Kerusakan Motor Mounting"],
           answer: "D. Kerusakan Pengunci Pintu"
       },
       {
           question: "Pada kamar Operasi dibutuhkan lampu Operasi. Lampu Operasi yang akan dipasang adalah jenis dual arm (2 Lengan). Setiap lengan menyerap arus listrik 10A dengan tegangan 24 V DC. Berapakah intensitas cahaya minimal tiap lengan lampu operasi tersebut sesuai dengan pedoman teknis ruang operasi RS?",
           options: ["A. 5000 LUX", "B. 4500 LUX", "C. 4250 LUX", "D. 4000 LUX", "E. 3500 LUX"],
           answer: "D. 4000 LUX"
       },
       {
           question: "Sebuah ventilator tidak dioperasikan selama 1 tahun dan disimpan dalam gudang. Tetapi tindakan pemeliharaan preventif rutin dikerjakan dengan hasil baik sehingga kondisi siap digunakan atau Ready For Use. Ventilator tersebut diperuntukkan untuk pemakaian pada ruang isolasi Flu Burung. Berapakah relative Humidity yang tepat untuk gudang tersebut?",
           options: ["A. Kurang atau sama dengan 95%", "B. Kurang atau sama dengan 96%", "C. Kurang atau sama dengan 97%", "D. Kurang atau sama dengan 98%", "E. Kurang atau sama dengan 99%"],
           answer: "C. Kurang atau sama dengan 97%"
       },
       {
           question: "Akan dilakukan instalasi lampu operasi pada sebuah kamar Operasi RS. Lampu operasi yang dipasang adalah jenis dual arm (2 lengan). Setiap menyerap arus listrik 10A dengan tegangan 24 V DC. Rangkaian power supply diletakkan di atas plafon kamar operasi dimana lampu tersebut akan dipasang. Apakah salah satu bahan yang harus Anda sediakan sebelum proses pemasangan?",
           options: ["A. Besi drat", "B. Baut 6mm", "C. Papan Tebal", "D. Semen Putih", "E. Plat Aluminium"],
           answer: "C. Papan Tebal"
       },
       {
           question: "Sebuah alat rontgen pada instalasi radiologi RS tidak berfungsi dengan baik. Bayangan radiografi pasien tidak muncul pada film setelah dilakukan penyinaran. Pada saat dilakukan pemeriksaan, diketahui bahwa semua indikator berfungsi dengan baik pada saat awal alat dihidupkan. Alarm terdengar pada saat tombol preparation ditekan. Apakah langkah pertama yang harus dapat dilakukan?",
           options: ["A. Memeriksa tegangan sumber daya utama pesawat sinar X", "B. Memeriksa tombol expose pesawat sinar X", "C. Memeriksa tegangan tinggi tabung sinar X", "D. Memeriksa fuse utama pesawat sinar X", "E. Memeriksa filamen tabung sinar X"],
           answer: "E. Memeriksa filamen tabung sinar X"
       },
       {
           question: "Seorang teknisi dengan melakukan pemeliharaan alat infrared 6 lampu. Alat ini sudah 3 tahun digunakan. Pada saat mengecek lampunya, ada 2 lampu yang pelapis/filternya terkelupas. Berapa jam waktu pakai/life time lampu infrared?",
           options: ["A. 100", "B. 200", "C. 300", "D. 400", "E. 500"],
           answer: "E. 500"
       },
       {
           question: "Seorang teknisi elektromedis sedang memasang Parafin Bath di RS X. Pada saat saklar on/off ditekan/dinyalakan ternyata lampu indikator power tidak menyala. Apa yang pertama kali diperiksa untuk menyelesaikan permasalahan tersebut?",
           options: ["A. Fuse", "B. Kabel power", "C. Power supply", "D. Sumber tegangan", "E. Instalasi di dalam alat"],
           answer: "E. Instalasi di dalam alat"
       },
       {
           question: "Seorang perawat sedang menggunakan alat EKG. Pada saat perekaman hasil pasien, ternyata grafiknya tidak beraturan. Apa penyebab utama untuk permasalahan tersebut?",
           options: ["A. Printer rusak", "B. Gel sedikit", "C. Sumber listrik tidak stabil", "D. Grounding tidak terpasang", "E. Elektroda tidak terpasang dengan benar"],
           answer: "E. Elektroda tidak terpasang dengan benar"
       },
       {
           question: "Seorang elektromedis mau memasang alat infrared 4 lampu di RS X. Pada saat alat mau dihidupkan ternyata lampu indikator power tidak menyala. Apa yang pertama kali diperiksa untuk menyelesaikan permasalahan tersebut?",
           options: ["A. Fuse", "B. Kabel power", "C. Saklar on/off", "D. Sumber tegangan", "E. Instalasi di dalam alat"],
           answer: "D. Sumber tegangan"
       },
       {
           question: "Seorang fisioterapis sedang memakai Parafin Bath. Setelah menunggu 5 jam ternyata parafin/lilinnya tidak mencair. Apakah penyebab utama permasalahan tersebut?",
           options: ["A. Heater rusak", "B. Sensor putus", "C. Lilin terlalu banyak", "D. Tegangan tidak stabil", "E. Rangkaian pengontrol suhu"],
           answer: "A. Heater rusak"
       },
       {
           question: "Seorang teknisi sedang melakukan pemeliharaan alat infrared 6 lampu. Alat ini sudah 3 tahun digunakan. Pada saat mengecek lampunya ada 2 lampu yang pelapis/filternya terkelupas. Apa yang harus pertama kali dilakukan untuk mengatasi permasalahan tersebut?",
           options: ["A. Dilem", "B. Tetap dipakai", "C. Melepas yang rusak", "D. Mengganti dengan yang baru", "E. Merekomendasikan tidak memakai alat"],
           answer: "D. Mengganti dengan yang baru"
       },
       {
           question: "Seorang elektromedis hendak melakukan pemeliharaan centrifuge. Disampaikan keluhan dari analis laboratorium bahwa putaran motor DC centrifuge tidak sesuai dengan setting yaitu lebih rendah kecepatannya daripada suhu setting. Apa tindakan yang harus dilakukan untuk mengatasi permasalahan tersebut?",
           options: ["A. Kalibrasi", "B. Mengecek motor", "C. Membersihkan rotor", "D. Mengganti sikat arang", "E. Memeriksa sumber tegangan"],
           answer: "C. Membersihkan rotor"
       },
       {
           question: "Baby incubator yang sedang digunakan terdapat 2 nilai suhu yang dapat diamati oleh user yaitu suhu bayi dalam ruang incubator. Namun ketika sebuah alat baby incubator sedang difungsikan tiba-tiba suhu dari bayi ini ternyata nilai suhunya tidak dapat ditampilkan pada display. Dari permasalahan di atas, analisa awal apa yang mengalami kerusakan?",
           options: ["A. Air probe sensor", "B. Skin probe sensor", "C. Humidity probe sensor", "D. Display pada air probe sensor", "E. Display pada skin air probe sensor"],
           answer: "B. Skin probe sensor"
       },
       {
           question: "Seorang analis sedang menggunakan waterbath, suhu yang diatur 37 derajat waktu yang diatur 10 menit. Pada waktu sudah tercapai 10 menit, ternyata yang tercapai hanya 28 derajat. Apa penyebab utama untuk kejadian tersebut?",
           options: ["A. Sensor putus", "B. Heater rusak", "C. Tutup tidak rapat", "D. Listrik tidak stabil", "E. Rangkaian pengontrol suhu"],
           answer: "E. Rangkaian pengontrol suhu"
       },
       {
           question: "Seorang analis sedang menggunakan spectrophotometer. Pada saat melakukan pemeriksaan larutan blank, hasil absorbance blank yang keluar 0,111. Apa yang pertama kali harus dilakukan untuk mengatasi permasalahan tersebut?",
           options: ["A. Mengkalibrasi", "B. Mengecek lampu", "C. Memeriksa detektor", "D. Membersihkan kuvet", "E. Mengganti aquades"],
           answer: "A. Mengkalibrasi"
       },
       {
           question: "Seorang analis sedang memakai spectrophotometer. Langkah pertama, analis tersebut membaca larutan blank dengan hasil 0,001. Kemudian melakukan pemeriksaan sampel, hasil yang keluar nolimit / error. Apa penyebab utama kejadian tersebut?",
           options: ["A. Detektor mati", "B. Photodiode rusak", "C. Monokromator kotor", "D. Lampu halogen putus", "E. Pemilihan filter yang salah"],
           answer: "A. Detektor mati"
       },
       {
           question: "Seorang teknisi mendapatkan laporan dari analis, tentang kerusakan photometer. Pada saat sampel dibaca 2 kali, hasil yang keluar berbeda jauh. Apa yang pertama kali diperiksa untuk mengatasi permasalahan tersebut?",
           options: ["A. Lampu", "B. Kuvet", "C. Sumber listrik", "D. Sistem penghisapan", "E. Monokromator / panjang gelombang"],
           answer: "E. Monokromator / panjang gelombang"
       },
       {
           question: "Seorang analis mau memakai mikroskop. Setelah tombol power ditekan, lampu halogen menyala. Pada saat akan melihat preparat, terlihat gelap. Bagian apa yang pertama kali diatur untuk mengatasi permasalahan tersebut?",
           options: ["A. Okuler", "B. Diafragma", "C. Kondenser", "D. Lensa objektif", "E. Lampu"],
           answer: "B. Diafragma"
       },
       {
           question: "Seorang teknisi mau memasang timbangan analitik di laboratorium X. Sebelum melakukan pemasangan, teknisi tersebut mengecek ruangan yang akan dijadikan tempat timbangan analitik tersebut dipasang. Apa syarat utama untuk tempat pemasangan alat tersebut?",
           options: ["A. Ber-AC", "B. Bersih", "C. Tidak bising", "D. Sirkulasi udara", "E. Meja tidak bergoyang"],
           answer: "E. Meja tidak bergoyang"
       },
       {
           question: "Seorang teknisi perusahaan mau memasang alat photometer. Pada saat mengecek sumber listriknya, ternyata listriknya tidak stabil. Alat apa yang harus dipasang untuk mengatasi permasalahan tersebut?",
           options: ["A. UPS", "B. Trafo", "C. Genset", "D. Stabilizer", "E. Grounding"],
           answer: "D. Stabilizer"
       },
       {
           question: "Seorang analis laboratorium melaporkan kepada teknisi RS bahwa ketika dia akan melakukan pemeriksaan sampel pada photometer, sampelnya tidak mau terhisap. Sehingga dilakukan pengecekan, namun hasilnya Peristaltic tube dikatakan baik. Berapa jam lifetime dari komponen tersebut?",
           options: ["A. 1000", "B. 2000", "C. 3000", "D. 4000", "E. 5000"],
           answer: "D. 4000"
       },
       {
           question: "Seorang analis laboratorium melaporkan kepada teknisi RS bahwa ketika dia akan melakukan pemeriksaan sampel pada photometer, sampelnya tidak mau terhisap. Sehingga dilakukan pengecekan, namun hasilnya Peristaltic tube dikatakan baik. Apa faktor utama menyebabkan kejadian tersebut?",
           options: ["A. Kotoran", "B. Aquades", "C. Botol limbah penuh", "D. Lemak pada serum", "E. Selang terlalu kecil"],
           answer: "D. Lemak pada serum"
       },
{
    question: "Seorang teknisi sedang melakukan pemeliharaan photometer. Pada saat membersihkan selang limbahnya, cairan limbah tersebut mengenai baju dan tangannya. Tindakan apa yang harus segera dilakukan untuk permasalahan tersebut?",
    options: ["A. Mengganti baju", "B. Mencuci dengan air", "C. Melanjutkan pekerjaan", "D. Membilas dengan cairan pembasmi bakteri", "E. Membersihkan sisa-sisa limbah yang ada di lantai"],
    answer: "B. Mencuci dengan air"
},
{
    question: "Seorang teknisi perusahaan X mau memasang Laboratory Incubator di laboratorium RS Y. Pada saat mau menghidupkan alat, ternyata lampu indikator power tidak menyala. Setelah dilakukan pengecekan, fuse tersambung, kabel power baik, sumber listrik ada. Apa penyebab utama peristiwa tersebut bisa terjadi?",
    options: ["A. Tegangan rendah", "B. MCB KWH meter turun", "C. Daya listrik tidak cukup", "D. Beban listrik alat besar", "E. Instalasi listrik tidak bagus"],
    answer: "A. Tegangan rendah"
},
{
    question: "Teknisi RS X sedang melakukan pemeliharaan Mixer. Pada saat kecepatan motor diatur 3000 rpm, ternyata kecepatan motor yang terukur di alat kalibrasi 1000 rpm. Apa tindakan yang harus dilakukan?",
    options: ["A. Memperbaiki", "B. Kalibrasi ulang", "C. Tidak memakai alatnya", "D. Mengganti dengan yang baru", "E. Memanggil teknisi perusahaan"],
    answer: "B. Kalibrasi ulang"
},
{
    question: "Teknisi RS X sedang melakukan pemeliharaan Mixer. Pada saat kecepatan motor diatur 3000 rpm, ternyata kecepatan motor yang terukur di alat kalibrasi 1000 rpm. Apa nama alat yang digunakan?",
    options: ["A. Avometer", "B. Barometer", "C. Tachometer", "D. Ampermeter", "E. Thermometer"],
    answer: "C. Tachometer"
},
{
    question: "Elektromedis sedang melakukan pemeliharaan Waterbath. Pada saat mengukur suhunya, ternyata lebih tinggi daripada suhu yang diatur. Setelah dilakukan pengecekan, tegangan listrik, heater dalam kondisi baik, sensor temperature berkarat. Untuk melakukan adjustment, seorang elektromedis harus membongkar alat tersebut. Langkah apa yang pertama kali dilakukan untuk mengatasi permasalahan tersebut?",
    options: ["A. Kalibrasi", "B. Mematikan alat", "C. Mengganti baru", "D. Membersihkan korosi", "E. Membawa ke ruangan IPSRS"],
    answer: "C. Mengganti baru"
},
{
    question: "Teknisi RS mau melakukan perencanaan pemeliharaan dan kalibrasi photometer di RS tersebut. Photometer dipakai selama 20 jam dalam 1 harinya. Jumlah pasien untuk pemeriksaan kimia klinik 60 orang dalam sehari. Berapa jumlah lampu halogen yang harus disiapkan dalam 1 tahun?",
    options: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
    answer: "B. 3"
},
{
    question: "Seorang teknisi RS akan melakukan pemeliharaan centrifuge. Pada saat mengecek rotor, terdapat tabung yang berisi darah. Akibat kurang hati-hati dalam memegangnya, maka darah tersebut tumpah dan mengenai tangan serta baju. Tindakan apa yang harus segera dilakukan?",
    options: ["A. Membilas baju", "B. Memanggil analis", "C. Melanjutkan pemeliharaan", "D. Mencuci tangan dengan cairan anti bakteri", "E. Membersihkan darah yang tercecer di lantai"],
    answer: "D. Mencuci tangan dengan cairan anti bakteri"
},
{
    question: "Teknisi perusahaan X sedang melakukan pemeliharaan dan kalibrasi centrifuge di RS. Pada saat kecepatan motor diatur 4000 rpm, ternyata yang terbaca pada alat kalibrasi 2000 rpm. Teknisi tersebut merekomendasikan untuk tidak memakai centrifuge tersebut. Alat ukur apa yang digunakan untuk mengukur kecepatan alat tersebut di atas?",
    options: ["A. Avometer", "B. Barometer", "C. Multimeter", "D. Tachometer", "E. Thermometer"],
    answer: "D. Tachometer"
},
{
    question: "Seorang analis laboratorium melakukan pemeriksaan serum control/quality control pada alat spektrofotometer. Hasil yang didapatkan untuk semua parameter berada di luar range yang telah ditentukan. Pada saat dilihat buku pemeliharaan alat, lampu halogen terakhir diganti dua tahun yang lalu. Apa prinsip dasar dari pembacaan dari sistem photometric pada spektrofotometer?",
    options: ["A. Refleksi", "B. Refraksi", "C. Absorbsi", "D. Difraksi", "E. Polarisasi"],
    answer: "C. Absorbsi"
},
{
    question: "Seorang teknisi perusahaan X sedang melakukan pemasangan alat Spektrofotometer. Setelah semua aksesori alat dipasang, kemudian alat dihidupkan untuk melakukan “warming up”. Seorang analis juga menghidupkan centrifuge untuk memisahkan serum dari darah yang dipakai untuk sample percobaan alat spektrofotometer. Setelah berjalan 1 menit, layar alat mengalami noise/bergoyang. Setelah dilakukan pengecekan, koneksi layar ke alat terkoneksi dengan baik, kondisi layar baik. Pada saat centrifuge dimatikan, ternyata layar spektrofotometer tidak bergoyang lagi. Tindakan apa yang harus dilakukan untuk permasalahan tersebut?",
    options: ["A. Memakai UPS", "B. Memasang Grounding", "C. Menghidupkan tidak bersamaan", "D. Menambahkan alat yang bisa menstabilkan tegangan", "E. Menjauhkan dari sumber gelombang elektromagnetik"],
    answer: "D. Menambahkan alat yang bisa menstabilkan tegangan"
},
{
    question: "Seorang teknisi perusahaan X sedang melakukan pemasangan alat Spektrofotometer. Setelah semua aksesori alat dipasang, kemudian alat dihidupkan untuk melakukan “warming up”. Seorang analis juga menghidupkan centrifuge untuk memisahkan serum dari darah yang dipakai untuk sample percobaan alat spektrofotometer. Setelah berjalan 1 menit, layar alat mengalami noise/bergoyang. Setelah dilakukan pengecekan, koneksi layar ke alat terkoneksi dengan baik, kondisi layar baik. Pada saat centrifuge dimatikan, ternyata layar spektrofotometer tidak bergoyang lagi. Apa penyebab utama permasalahan tersebut?",
    options: ["A. Ruangan panas", "B. Listrik tidak stabil", "C. Tidak menggunakan UPS", "D. Gelombang elektromagnetik", "E. Jumlah alat di ruangan terlalu banyak"],
    answer: "B. Listrik tidak stabil"
},
{
    question: "Alat Spektrofotometer di laboratorium. Pada saat dilakukan pengecekan ke ruangan tempat alat akan dipasang, suhu ruangan diukur sebesar 33 derajat celcius, tegangan listrik 230V. Alat apa yang digunakan supaya tegangan listrik yang masuk ke alat stabil sebesar 220V?",
    options: ["A. Trafo", "B. Adaptor", "C. Stabilizer", "D. UPS offline", "E. Power Supply"],
    answer: "A. Trafo"
},
{
    question: "Seorang analis sedang menggunakan mikroskop binokuler untuk memeriksa preparat pasien. Dia menggunakan lensa okuler 10X dan lensa objektif 40X. Pada saat dia memeriksa preparat, maka terlihat banyak sekali kotoran. Setelah dilakukan pengecekan, didapatkan bahwa lensa okuler bersih tetapi lensa objektif untuk pembesaran 40x kotor. Berapa x lensa objektif yang harus dipilih jika analis menginginkan hasil pembesaran 1000 kali?",
    options: ["A. 5X", "B. 10X", "C. 20X", "D. 40X", "E. 100X"],
    answer: "E. 100X"
},
{
    question: "Di laboratorium RS X seorang analis mau melakukan pemeriksaan glukosa. Setelah darah pasien diambil, kemudian serumnya dipisahkan dari sel-sel darah. Pada saat mau menghidupkan alat spektrofotometer, lampu indikator alat tidak menyala. Kemudian analis tersebut melaporkan ke bagian IPSRS. Setelah dilakukan pengecekan, kabel power dalam kondisi baik, fuse tersambung, power supply board tidak mengeluarkan tegangan.",
    options: ["A. Lampu indikator power putus", "B. Tegangan listrik naik turun", "C. Keluaran trafo tidak ada", "D. Dioda tidak berfungsi", "E. IC regulator rusak"],
    answer: "C. Keluaran trafo tidak ada"
},
{
    question: "Salah satu peralatan laboratorium adalah Centrifuge hematokrit untuk mempercepat berhentinya maka dibutuhkan sistem",
    options: ["A. Timer", "B. Break", "C. Lock", "D. Speed", "E. Power switch"],
    answer: "B. Break"
},
{
    question: "Salah satu peralatan laboratorium adalah Centrifuge hematokrit. Apakah kepanjangan dari RCF?",
    options: ["A. Radius Centrifuge Force", "B. Relative Centrifugal Force", "C. Rotation Centrifugal Force", "D. Revolution Centrifugal Force", "E. Reduction Centrifugal Force"],
    answer: "B. Relative Centrifugal Force"
},
{
    question: "Ketika menguji keluaran defibrillator, teknisi elektromedis harus berhati-hati karena besar tegangan yang ada pada kedua pedal dapat mencapai ribuan volt. Sebuah defibrillator memiliki kapasitor dengan spesifikasi 10uF dan disetting pada 125 Joule. Energi tersebut dapat disimpan pada sebuah kapasitor yang tertanam pada unit. Berapa tegangan yang akan timbul pada kedua ujung pedal tersebut jika unit defibrillator digunakan ke pasien?",
    options: ["A. 4000 V", "B. 4500 V", "C. 5000 V", "D. 5500 V", "E. 6000 V"],
    answer: "C. 5000 V"
},
{
    question: "Dengan menggunakan alat EKG, kegiatan listrik jantung dalam tubuh dapat direkam melalui elektroda-elektroda yang dipasang pada permukaan tubuh pasien. Elektrode apakah yang dipasang pada dada pasien pada alat tersebut?",
    options: ["A. Elektrokardiogram", "B. Elektropulmogram", "C. Elektrokardiografi", "D. Elektrokardiograf", "E. Elektromiogram"],
    answer: "D. Elektrokardiograf"
},
{
    question: "Dengan menggunakan alat EKG, kegiatan listrik jantung dalam tubuh dapat dicatat dan direkam melalui elektroda-elektroda yang dipasang pada permukaan tubuh pasien. Dinamakan apakah hasil gambaran rekaman alat tersebut?",
    options: ["A. Elektrokardiogram", "B. Elektropulmogram", "C. Elektrokardiografi", "D. Elektrokardiograf", "E. Elektromiogram"],
    answer: "A. Elektrokardiogram"
},
{
    question: "Alat rontgen adalah alat medik yang bekerja menghasilkan radiasi sinar X, baik untuk keperluan fluoroskopi maupun radiografi. Agar dapat menghasilkan suatu pencitraan, diperlukan beberapa komponen di antaranya bagian yang berfungsi menyerap hamburan radiasi sehingga gambar yang terbentuk lebih jelas. Apakah nama bagian dari alat tersebut?",
    options: ["A. Grid", "B. Film Badge", "C. Film Rontgen", "D. Filament Limiter", "E. Auto Transformator"],
    answer: "A. Grid"
},
{
    question: "Alat rontgen adalah alat medik yang bekerja menghasilkan radiasi sinar X, baik untuk keperluan fluoroskopi maupun radiografi. Agar dapat menghasilkan suatu pencitraan, diperlukan beberapa komponen di antaranya bagian yang berfungsi membatasi jumlah sinar X yang keluar sesuai dengan luas dari objek yang dirontgen. Apakah nama bagian dari alat rontgen tersebut?",
    options: ["A. Anoda", "B. Stator", "C. Katoda", "D. Kolimator", "E. kV Selector"],
    answer: "D. Kolimator"
},
{
    question: "Tabung sinar X merupakan bagian pesawat rontgen yang menghasilkan sinar X. Pada tabung ada bagian yang biasanya dibuat berputar supaya permukaannya tidak cepat rusak yang disebabkan tumbukan elektron. Apakah nama bagian dari tabung sinar X tersebut?",
    options: ["A. Anoda", "B. Stator", "C. Katoda", "D. Kolimator", "E. Focal Spot"],
    answer: "A. Anoda"
},
{
    question: "Tabung sinar X merupakan bagian alat rontgen yang menghasilkan sinar X. Pada tabung ada bagian di mana elektron-elektron dihasilkan dan terbuat dari tungsten. Apakah nama bagian tabung sinar X tersebut?",
    options: ["A. Focal spot", "B. Kolimator", "C. Anoda", "D. Katoda", "E. Stator"],
    answer: "D. Katoda"
},
{
    question: "Peralatan yang merupakan inventaris di ruangan Rehabilitasi Medik yaitu Short Wave Diathermy dan Micro Wave Diathermy. Alat tersebut berkaitan erat dengan teori gelombang. Apakah metode yang digunakan pada alat tersebut?",
    options: ["A. Doppler", "B. Radiasi", "C. Konduksi", "D. Elektromagnetik", "E. Gelombang Ultrasonik"],
    answer: "D. Elektromagnetik"
},
{
    question: "Seorang elektromedis sedang melakukan pemeliharaan alat Cardiotocograph yang memiliki dua buah transducer ultrasound, tocometer, fetal movement marker, disertai dengan display LCD monitor dan printer. Apakah langkah selanjutnya yang dilakukan setelah melakukan pengecekan fungsi tombol?",
    options: ["A. Cek dan bersihkan tocometer", "B. Cek sistem perekaman / printer", "C. Cek dan bersihkan transducer ultrasound", "D. Cek dan bersihkan fetal movement marker", "E. Cek keluaran volume suara, atur bila perlu"],
    answer: "E. Cek keluaran volume suara, atur bila perlu"
},
{
    question: "Seorang pengguna alat melakukan pemanasan pada alat defibrilator karena akan melakukan tindakan defibrilator pada pasien. Semua tombol dan aksesori sudah diperiksa dengan benar oleh pengguna alat tersebut. Manakah prosedur yang paling penting dalam kegiatan pemanasan alat tersebut setelah tombol power dinyalakan?",
    options: ["A. Cek kondisi baterai", "B. Memeriksa fungsi display monitor", "C. Memeriksa fungsi tombol pengaturan", "D. Memeriksa sistem perekaman / printer", "E. Melakukan uji fungsi charge dan discharge"],
    answer: "E. Melakukan uji fungsi charge dan discharge"
},
{
    question: "Hidroterapi merupakan alat terapi yang menggunakan 100% oksigen murni dengan tekanan tinggi sesuai tabel klinis dan mempunyai 6 sistem instalasi, yaitu: udara, oksigen, pendingin, pemadam, penerangan, dan komunikasi. Apa jenis pendingin yang digunakan pada alat untuk alat tersebut?",
    options: ["A. Ac Cassette", "B. Ac standing", "C. Ac ducted", "D. Ac chiller", "E. Ac split"],
    answer: "A. Ac Cassette"
},
{
    question: "Dental unit adalah alat diagnostik yang berhubungan atau kontak langsung pasien dan pengguna. Salah satu persyaratan di dalam pemasangan dental adalah adanya jaminan keselamatan pasien dan pengguna. Apa yang harus dipastikan untuk jaminan tersebut?",
    options: ["A. Tekanan udara yang stabil", "B. Daya listrik yang mencukupi", "C. Tegangan catu daya yang stabil", "D. Tegangan listrik dengan grounding", "E. Sekering yang sesuai kebutuhan arus listrik alat"],
    answer: "D. Tegangan listrik dengan grounding"
},
{
    question: "Dari ruangan laboratorium dilaporkan centrifuge bergetar hebat kemudian berhenti ketika digunakan. Pada pengamatan awal didapatkan data penempatan tabung sample dalam keadaan seimbang dan simetris, meja dari bahan cor. Sebagai teknisi elektromedik, apa yang harus dilakukan?",
    options: ["A. Mengecek sistem kelistrikan", "B. Mengecek kondisi tempat dipastikan datar dan rata", "C. Mengecek dan mengencangkan mur pada casing alat", "D. Mengecek bantalan karet pada sistem motor, ganti jika keras", "E. Mengecek kekuatan per dan sikat arang motor, ganti jika habis"],
    answer: "D. Mengecek bantalan karet pada sistem motor, ganti jika keras"
},
{
    question: "Lampu operasi dilaporkan rusak pada saat dilakukan pergeseran dengan menggunakan selling atau arm, nyala sinar mati dan hidup. Apa yang harus dilakukan untuk memperbaiki sebab kerusakan alat tersebut?",
    options: ["A. Menyetel baut pada bagian lengan", "B. Memeriksa kabel ke jala-jala PLN tidak ngefong", "C. Mengencangkan sambungan kabel pada bohlam", "D. Mengukur dan memastikan keluaran power supply dalam keadaan baik", "E. Memeriksa, melakukan perbaikan dan pembersihan pada fleksibel kontak rotation arm"],
    answer: "E. Memeriksa, melakukan perbaikan dan pembersihan pada fleksibel kontak rotation arm"
},
{
    question: "Suatu alat bed side monitor sedang digunakan pada pasien, tiba-tiba layar monitor mati. Hasil pemeriksaan pada aksesori semua berfungsi, kabel power, sumber catu daya listrik baik. Analisa awal, kemungkinan kerusakan terjadi pada bagian apa?",
    options: ["A. LCD", "B. Baterai", "C. Konektor", "D. Mainboard", "E. Tombol power"],
    answer: "E. Tombol power"
},
{
    question: "Seorang elektromedis melaksanakan tugasnya yaitu pada alat ECG. Dia memeriksa dengan seksama pada seluruh bagian alat tersebut yaitu power cord, steker, kabel pasien, kondisi baterai, dan kondisi recorder. Keseluruhan fisik juga dilakukan pemeriksaan yaitu troly penyangga dan roda troly, kegiatan apa yang dilakukan teknisi itu?",
    options: ["A. Pemantauan fungsi", "B. Pemeliharaan", "C. Pengujian", "D. Perbaikan", "E. Kalibrasi"],
    answer: "A. Pemantauan fungsi"
},
{
    question: "Alat Baby Incubator tidak berfungsi dengan baik. Dari informasi user memberikan keterangan, alat tersebut tidak mampu mencapai suhu setting, sehingga tidak ada kenaikan suhu. Pemeriksaan power supply, tombol, dan display berfungsi dengan baik. Pada komponen apakah kerusakan terjadi?",
    options: ["A. Thermostat", "B. Skin probe", "C. Air Filter", "D. Heater", "E. Blower"],
    answer: "D. Heater"
},
{
    question: "Seorang elektromedis sedang melakukan kegiatan perbaikan alat CTG. Informasi dari user, saat alat digunakan tiba-tiba alat mati sendiri. Dan ketika dinyalakan lagi alat dapat dilakukan kembali tetapi beberapa saat kemudian alat mati lagi. Dengan adanya kejadian ini mengganggu proses pemeriksaan. Pada bagian apakah kerusakan terjadi?",
    options: ["A. Adaptor", "B. Transduser", "C. Tocometer", "D. Paper print", "E. Kabel power"],
    answer: "A. Adaptor"
},
{
    question: "Sebuah alat ECG sedang digunakan, di mana lead yang direcord terdiri dari 12 lead. Tiba-tiba pada saat lead ke 3, paper record tidak keluar. Setelah dicek ternyata kerusakan terjadi pada motor paper. Penggantian komponen pada alat tersebut termasuk kegiatan?",
    options: ["A. Preventive Maintenance", "B. Troubleshooting", "C. Kalibrasi", "D. Inspection", "E. Repair"],
    answer: "E. Repair"
},
{
    question: "Sebuah alat ECG dilaporkan jarak interval antar grafiknya menurut user terlalu rapat sehingga menyulitkan dalam analisa pembacaan. Hal ini dapat diatasi dengan melakukan setting parameter. Setting pada bagian manakah yang dapat dilakukan untuk menangani masalah tersebut?",
    options: ["A. Filter", "B. Lead record I, II, III", "C. Sensitivity 0.5x, 1x, 2x", "D. Lead record aVR, aVL, aVF", "E. Paper speed 25mm/sec, 50mm/sec"],
    answer: "E. Paper speed 25mm/sec, 50mm/sec"
},
{
    question: "Sebuah alat defibrilator sedang digunakan dengan menggunakan mode Syncron, tiba-tiba alarm indicator error berbunyi. Setelah dilakukan pengamatan, ternyata muncul perintah untuk menghubungkan cable pada alat defibrilator untuk dipasang ke pasien agar mode syncron dapat dilaksanakan. Aksesori apakah yang harus terhubung ke pasien tersebut?",
    options: ["A. Temperature", "B. Skin Probe", "C. Lead ECG", "D. SPO2", "E. NIBP"],
    answer: "C. Lead ECG"
},
{
    question: "Sebelum digunakan, alat Infusion Pump terlebih dahulu disetting flow rate dan waktu sesuai dengan yang dibutuhkan, lalu tombol start ditekan. Ketika berjalan sekitar 3 detik, tiba-tiba indikator alarm AIR in Line berbunyi. Hal apa yang paling mungkin menjadi penyebab kejadian tersebut?",
    options: ["A. Battery low", "B. Door tidak tertutup rapat", "C. Letak Drip sensor yang salah", "D. Adanya gelembung udara pada IV set", "E. Kesalahan pada setting awal pemakaian"],
    answer: "D. Adanya gelembung udara pada IV set"
},
{
    question: "Seorang pasien di sebuah rumah sakit sedang dipasang alat Bed Side Monitor, di mana kondisi nilai sistole diastolenya antara 110 – 60. Tiba-tiba pasien tersebut mengalami kenaikan kondisi nilai sistole diastolenya menjadi 125 – 70 dengan disertai bunyi alarm dengan indicator Tool High. Perbaikan komponen apa yang bisa dilakukan untuk menanggulangi hal di atas?",
    options: ["A. Hi-low Temperature", "B. Kondisi pasien", "C. Hi-low SPO2", "D. Hi-low NIBP", "E. Hi-low ECG"],
    answer: "D. Hi-low NIBP"
},
{
    question: "Sebuah ECG yang mempunyai 12 lead sedang digunakan, tiba-tiba pada saat lead ke 3, paper tidak keluar. Sedang hasil print out menunjukkan kualitas yang bagus. Diulang lagi dari awal sudah tidak bisa mencetak hasil. Kerusakan apa yang paling mungkin terjadi?",
    options: ["A. Motor paper tidak berfungsi", "B. Roller print tidak berfungsi", "C. Print head bermasalah", "D. Cover print tidak rapat", "E. Paper tidak sesuai"],
    answer: "A. Motor paper tidak berfungsi"
},
{
  question: "Sebuah syringe pump di ruang perawatan dilaporkan tidak dapat digunakan. Pemeriksaan sumber jala-jala listrik bagus, alat kemudian dinyalakan. Namun setelah tombol ON ditekan, indikator lampu tidak menyala dan proses self-test tidak berjalan. Setelah dicek, fuse dan kabel power dalam kondisi baik. Analisis kerusakan pada bagian apa yang didapatkan pada permasalahan di atas?",
  options: ["A. Plunger", "B. LCD Display", "C. Syringe detector", "D. Board control motor", "E. Board power supply"],
  answer: "E. Board power supply"
},
{
  question: "Dalam perencanaan pembelian alat patient monitor baru di RS, fitur pemeriksaan tekanan darah akan digunakan di ruang operasi bedah jantung. Parameter tambahan apa yang diperlukan untuk memenuhi kebutuhan tersebut?",
  options: ["A. IBP", "B. NIBP", "C. SpO2", "D. EtCO2", "E. Temperature"],
  answer: "B. NIBP"
},
{
  question: "Sebuah ECG 12-lead sedang digunakan. Pada saat perekaman lead ke-3, tiba-tiba kertas rekam tidak keluar. Pemeriksaan fisik menunjukkan alat tetap menyala dan kabel pasien terhubung dengan baik. Apa kemungkinan penyebabnya?",
  options: ["A. Motor paper mengalami kerusakan", "B. Print head mengalami kerusakan", "C. Hasil rekaman tidak ada", "D. Stylus tidak berfungsi", "E. Kertas terbalik"],
  answer: "A. Motor paper mengalami kerusakan"
},
{
  question: "Alat suction pump mobile dilaporkan mengalami kerusakan (mati total). Hasil pengamatan menunjukkan bahwa sumber listrik, steker, fuse, board power supply, saklar ON/OFF, motor pompa, pengatur daya isap, filter bakteri, botol, tutup botol, dan tubing dalam kondisi baik, serta prosedur pengoperasian telah dilakukan dengan benar. Apa penyebab paling mungkin kerusakan alat tersebut?",
  options: ["A. Roda", "B. Body", "C. Cover", "D. Handle", "E. Kabel power supply"],
  answer: "E. Kabel power supply"
},
{
  question: "Alat suction pump mobile dilaporkan mengalami kerusakan (mati total). Hasil pengamatan menunjukkan bahwa terminal sumber listrik, steker, fuse, board power supply, saklar ON/OFF, motor pompa, pengatur daya isap, filter bakteri, botol, tutup botol, dan tubing dalam kondisi baik, serta prosedur pengoperasian telah dilakukan dengan benar. Apa penyebab paling mungkin kerusakan alat tersebut?",
  options: ["A. Fuse", "B. Kabel", "C. Switch", "D. Steker", "E. Handle"],
  answer: "B. Kabel"
},
{
  question: "Alat mikroskop dilaporkan mengalami kerusakan (mati total). Pemeriksaan menunjukkan bahwa sumber listrik tidak sampai ke input power supply. Fuse, saklar ON/OFF, lampu, fitting lampu, dan rangkaian elektronik dalam kondisi baik, serta pengoperasian alat sesuai prosedur. Apa penyebab paling mungkin kerusakan alat tersebut?",
  options: ["A. Body", "B. Steker", "C. Diafragma", "D. Lensa okuler", "E. Lensa objektif"],
  answer: "B. Steker"
},
{
  question: "Saat pemeriksaan berkala mikroskop laboratorium RS (usia alat 3 tahun, rata-rata 200 jam/bulan), ditemukan kondisi tombol ON/OFF, pengatur intensitas cahaya, dan diafragma berfungsi baik. Namun, cahaya yang muncul redup. Catatan pemeliharaan menunjukkan lampu halogen terakhir diganti setahun lalu. Apa tindakan pertama yang harus dilakukan?",
  options: ["A. Perbaikan catatan", "B. Penggantian lampu", "C. Pengukuran intensitas", "D. Pembersih lensa okuler", "E. Pembersih lensa objektif"],
  answer: "B. Penggantian lampu"
},
{
  question: "Dalam evaluasi lanjutan mikroskop dengan cahaya redup, bola lampu dalam kondisi baik, sumber tegangan sesuai, rangkaian elektronik baik, dan penempatan alat sudah standar. Bagian manakah yang paling mungkin menyebabkan gangguan tersebut?",
  options: ["A. Diafragma", "B. Lensa okuler", "C. Lensa objektif", "D. Pengatur fokus", "E. Pengatur intensitas cahaya"],
  answer: "A. Diafragma"
},
{
  question: "Pada evaluasi lampu operasi yang cahayanya gelap, bola lampu dalam kondisi baik, tegangan sesuai, rangkaian elektronik normal, dan penempatan alat standar. Bagian manakah yang paling mungkin menyebabkan gangguan tersebut?",
  options: ["A. Fuse", "B. Trafo", "C. Saklar ON/OFF", "D. Pengatur fokus", "E. Pengatur intensitas cahaya"],
  answer: "E. Pengatur intensitas cahaya"
},
{
  question: "Saat pengoperasian EKG, hasil perekaman lead 1 muncul, namun lead 2 dan 3 tidak merespons. Apa yang harus dilakukan?",
  options: ["A. Memperbaiki kabel V1 lepas", "B. Memperbaiki kabel kaki kanan terlepas", "C. Memperbaiki kabel kaki kiri terlepas", "D. Memperbaiki kabel tangan kanan terlepas", "E. Memperbaiki pemasangan kabel tangan kiri terlepas"],
  answer: "C. Memperbaiki kabel kaki kiri terlepas"
},
{
  question: "Sebuah pH meter di laboratorium tidak lagi digunakan karena hasil pengukuran tidak akurat meskipun larutan buffer masih dalam masa berlaku. Diketahui elektrode rusak. Bagaimana sebaiknya posisi penyimpanan elektrode setelah pemakaian?",
  options: ["A. Tegak lurus, ujung elektrode di bawah", "B. Tegak lurus, ujung elektrode di atas", "C. Miring, yang penting ujung elektrode di bawah", "D. Miring, yang penting ujung elektrode di atas", "E. Tidak perlu tegak lurus, asal tidak goyang"],
  answer: "A. Tegak lurus, ujung elektrode di bawah"
},
{
  question: "Saat inkubasi dengan waterbath, terjadi ledakan kecil pada heater. Hal ini akibat kelalaian operator/teknisi. Apa prosedur yang seharusnya dilakukan sebelum pengoperasian?",
  options: ["A. Memeriksa timer", "B. Memeriksa pengaturan panas", "C. Memeriksa level air di bak waterbath", "D. Memeriksa dan memperbaiki timer serta pengaturan panas", "E. Memeriksa pengaturan panas dan membersihkan bak air"],
  answer: "C. Memeriksa level air di bak waterbath"
},
{
  question: "Pada instalasi laboratorium, dilaporkan suhu chamber waterbath tidak sesuai dengan pengaturan. Apa yang harus dilakukan oleh tenaga elektromedis?",
  options: ["A. Memeriksa regulator kelembaban", "B. Memeriksa air aqua di reservoir", "C. Memeriksa dan memperbaiki rangkaian level air", "D. Memeriksa dan memperbaiki rangkaian catu daya", "E. Memeriksa dan memperbaiki rangkaian kontrol suhu"],
  answer: "E. Memeriksa dan memperbaiki rangkaian kontrol suhu"
},
{
  question: "Pada defibrillator, discharge mode sinkron tidak berfungsi. Apa yang harus dilakukan oleh tenaga elektromedis?",
  options: ["A. Memeriksa rangkaian penguat", "B. Memeriksa kemungkinan interferensi frekuensi", "C. Memeriksa rangkaian deteksi", "D. Memeriksa dan memperbaiki rangkaian speaker/buzzer", "E. Memeriksa dan memperbaiki rangkaian sinkron/asinkron"],
  answer: "E. Memeriksa dan memperbaiki rangkaian sinkron/asinkron"
},
{
  question: "Saat pemeliharaan EKG, ditemukan elektroda kotor karena bekas gel. Apa yang harus dilakukan oleh tenaga elektromedis?",
  options: ["A. Mengganti elektroda", "B. Memelihara bagian lain", "C. Menguji alat dengan phantom", "D. Menegur operator", "E. Membersihkan elektroda dan memberi pengarahan ke operator"],
  answer: "E. Membersihkan elektroda dan memberi pengarahan ke operator"
},
{
  question: "Sebuah alat dengan bio-amplifier menangkap sinyal jantung, namun terganggu oleh noise dari luar tubuh. Apa nama rangkaian yang dapat meredam noise tersebut?",
  options: ["A. ADC", "B. Filter", "C. Monitor", "D. Optocoupler", "E. Microcontroller"],
  answer: "B. Filter"
},
{
  question: "Saat proses sterilisasi dengan UV sterilizer, terdengar alarm menandakan lampu UV sudah melewati masa pakai. Apa langkah pertama tenaga elektromedis?",
  options: ["A. Mematikan alarm", "B. Mereset masa pakai", "C. Mematikan dan menyalakan ulang alat", "D. Mengganti lampu UV", "E. Mereset masa pakai dan mengganti lampu UV"],
  answer: "E. Mereset masa pakai dan mengganti lampu UV"
},
{
  question: "Rumah sakit menerima hibah alat anestesi dari WHO yang akan digunakan di kamar operasi. Apa tindakan yang harus dilakukan oleh tenaga elektromedis?",
  options: ["A. Melakukan pencatatan harian, mingguan, bulanan, dan tahunan", "B. Melakukan pencatatan, pemeriksaan, pemeliharaan dan evaluasi", "C. Melakukan pencatatan, pemeriksaan, pemeliharaan, dan evaluasi alat", "D. Mencatat data alat, uji fungsi dan uji coba", "E. Mencatat dan memonitor serta memelihara alat anestesi"],
  answer: "D. Mencatat data alat, uji fungsi dan uji coba"
},
        {
            question: "Seorang elektromedis mengoperasikan alat rontgen dengan nilai parameter exposure sebesar 60 kVp, 100 mA, dan 0,1 detik. Alat rontgen yang dioperasikan menggunakan sumber daya satu fase. Berapa konsumsi energi yang digunakan pada pesawat rontgen tersebut?",
            options: ["A. 6 joule", "B. 60 joule", "C. 0,6 joule", "D. 600 joule", "E. 6000 joule"],
            answer: "D. 600 joule"
        },
        {
            question: "Petugas laboratorium melaporkan bahwa terdapat permasalahan alat centrifuge di lab sentral yaitu getaran alat terlalu kencang. Setelah dilakukan pengukuran oleh tenaga elektromedis menggunakan alat ukur, hasilnya sesuai atau kesalahannya nol, penempatan sampel tidak beraturan. Analisa kerusakan apa yang ada pada permasalahan tersebut?",
            options: ["A. Kerusakan driver main board", "B. Kesalahan setting / pengaturan", "C. Peletakan kuvet tidak rata", "D. Tutup kurang rapat", "E. Motor overheating"],
            answer: "C. Peletakan kuvet tidak rata"
        },
        {
            question: "Di salah satu rumah sakit terdapat peralatan spektrofotometer yang baru datang untuk digunakan pada laboratorium. Sebagai tenaga elektromedis, langkah awal yang dilakukan untuk menangani peralatan baru tersebut adalah.",
            options: ["A. Melakukan pencatatan dan pelabelan", "B. Melakukan preventive maintenance", "C. Melakukan uji fungsi", "D. Melakukan kalibrasi", "E. Melakukan evaluasi."],
            answer: "A. Melakukan pencatatan dan pelabelan"
        },
        {
            question: "Untuk meningkatkan pelayanan kesehatan, sebuah rumah sakit akan melengkapi alat dengan peralatan bedside monitor yang baru, dengan kebutuhan 5 parameter pengukuran. Sebagai tenaga elektromedis, dapatkah Anda menyebutkan parameter tersebut?",
            options: ["A. ESU", "B. USG, arus, daya, suhu, tekanan", "C. EEG, panas, radiasi, tegangan, flow", "D. Defibrilator, luas, tekanan, berat, gaya", "E. EKG, SPO2, NIBP, Respiration, Heart Rate"],
            answer: "E. EKG, SPO2, NIBP, Respiration, Heart Rate"
        },
        {
            question: "Teknisi perusahaan X akan melakukan proses pemasangan alat USG di suatu rumah sakit. Alat ini sangat sensitif terhadap naik dan turunnya tegangan dari jala-jala PLN. Apa yang harus dilakukan untuk permasalahan tersebut?",
            options: ["A. Memasang trafo", "B. Memasang grounding", "C. Mengecek sumber tegangan", "D. Menambahkan stabilizer", "E. Membuat jalur listrik baru"],
            answer: "D. Menambahkan stabilizer"
        },
        {
            question: "Seorang elektromedis sedang melakukan kalibrasi bedside monitor, saat mengukur heart rate pada layar tidak muncul nilai heart rate. Apa yang harus dilakukan oleh elektromedis tersebut?",
            options: ["A. Memeriksa pemilihan lead", "B. Memeriksa pemasangan kabel EKG", "C. Memeriksa pengaturan simulator", "D. Memeriksa baterai simulator", "E. Memeriksa tegangan PLN"],
            answer: "B. Memeriksa pemasangan kabel EKG"
        },
        {
            question: "Seorang elektromedis sedang melakukan kajian pemanfaatan alat rontgen di rumah sakit. Alat tersebut harus memenuhi persyaratan proteksi radiasi, salah satunya adalah limitasi. Apakah yang dimaksud pernyataan tersebut?",
            options: ["A. Harus mengacu pada nilai batas dosis dan tidak terlampaui", "B. Harus dapat meningkatkan kualitas gambar yang dihasilkan", "C. Harus menerapkan teknik dan prosedur yang tepat", "D. Menentukan dosis radiasi yang sesuai dengan kondisi pasien", "E. Manfaat radiasi lebih besar daripada risiko yang ditimbulkan"],
            answer: "A. Harus mengacu pada nilai batas dosis dan tidak terlampaui"
        },
        {
            question: "Salah satu instrumen dental unit yang dapat mengeluarkan air dan udara serta gabungan keduanya adalah....",
            options: ["A. Micromotor", "B. Additional rocker", "C. Intra matrik motor", "D. Turbin", "E. Multi function handpiece"],
            answer: "E. Multi function handpiece"
        },
        {
            question: "Seorang elektromedis melakukan kegiatan kalibrasi pada alat electro surgery unit (ESU). Sesuai lembar kerja, setiap titik setting harus diambil 6 kali pengukuran. Pada saat melakukan pengukuran yang ke-3 pada setting terakhir, alat ESU menjadi panas. Sebagai seorang elektromedis, tindakan apa yang tepat yang harus dilakukan?",
            options: ["A. Memberikan label merah pada alat", "B. Menunggu sebentar kemudian dilakukan kalibrasi lagi dari awal", "C. Mengambil data di lain hari", "D. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili", "E. Melaporkan ke pihak rumah sakit bahwa alat tidak bisa dikalibrasi"],
            answer: "D. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili"
        },
        {
            question: "Penempatan alat spektrofotometer. Salah satu kegiatan penempatan alat spektrofotometer adalah?",
            options: ["A. Bersihkan bagian luar instrumen dengan potongan kain dibasahi dengan air suling", "B. Meja kerja yang stabil dan jauh dari peralatan yang menghasilkan getaran (sentrifugal, agitator).", "C. Gunakan semprit untuk membersihkan tempat sampel yang menyerap banyak cairan", "D. Matikan layar kontrol dan lakukan pembersihan", "E. Matikan spektrofotometer dan lepaskan kabel sambungan listrik"],
            answer: "B. Meja kerja yang stabil dan jauh dari peralatan yang menghasilkan getaran (sentrifugal, agitator)."
        },
        {
            question: "Seorang teknisi elektromedis sedang memeriksa bagian-bagian yang ada pada Hematology Analyzer antara lain: test tube; metering unit; pompa dan beberapa blok rangkaian lain. Apakah nama salah satu bagian dari alat tersebut yang dilewati oleh sel darah dan didesain dengan diameter yang setara dengan diameter sel darah?",
            options: ["a. Metering unit", "b. Oriface / aperture", "c. Pompa", "d. Threshold", "e. Test tube"],
            answer: "b. Oriface / aperture"
        },
        {
            question: "Seorang elektromedis ditugaskan untuk mendampingi petugas vendor peralatan radiologi guna melakukan uji fungsi digital radiography (DR) di instalasi Radiologi. Uji fungsi tersebut dilakukan untuk mengetahui kinerja alat sesuai dengan standar keamanan dan standar dari pabrik. Bagaimanakah pelaksanaan pada kasus tersebut?",
            options: ["a. pengujian pada komponen; kinerja output dan aspek keselamatan", "b. pengujian pada kinerja output; keselamatan listrik dan radiasi", "c. pengujian pada kinerja output; keselamatan radiasi; listrik dan mekanik", "d. pengujian pada pasien sebelum dilakukan uji kinerja alat", "e. pengujian pada pasien setelah dilakukan uji fungsi"],
            answer: "a. pengujian pada komponen; kinerja output dan aspek keselamatan"
        },
        {
            question: "Kegiatan pemeliharaan USG yang bersifat perbaikan yang mengalami kerusakan dengan atau tanpa penggantian suku cadang. Termasuk kegiatan pemeliharaan apakah hal tersebut di atas?",
            options: ["a. Korektif", "b. Tidak terencana", "c. Kuratif", "d. Breakdown", "e. Terencana"],
            answer: "a. Korektif"
        },
        {
            question: "Spektrofotometer adalah alat yang dipergunakan pada Laboratorium Klinik. Urutan blok diagram yang benar untuk pesawat spektrofotometer adalah lampu - ….?",
            options: ["a. Kuvet - Filter - Prisma - Amplifier - Meter", "b. Filter - Kuvet - Prisma - Amplifier - Meter", "c. Prisma - Kuvet - Filter - Amplifier - Meter", "d. Kuvet - Prisma - Filter - Amplifier - Meter", "e. Semua jawaban salah"],
            answer: "c. Prisma - Kuvet - Filter - Amplifier - Meter"
        },
        {
            question: "Sebuah centrifuge tiba-tiba mengalami perubahan kecepatan yang tidak stabil. Tindakan kita sebagai seorang teknisi adalah mengecek?",
            options: ["a. Pintu", "b. Kapasitor", "c. Kecepatan Motor", "d. Sikat Arang", "e. Tombol ON/OFF"],
            answer: "c. Kecepatan Motor"
        },
        {
            question: "Pada Centrifuge, lampu indikator menyala tetapi alat tidak berfungsi. Analisa kerusakannya adalah?",
            options: ["a. Saklar ON/OFF rusak", "b. Sikat arang habis, komutator rusak", "c. Sekring putus", "d. Mikroswitch door tidak berfungsi, lid kontrol tidak berfungsi, timer rusak, rangkaian pengatur kecepatan rusak", "e. Karet penahan getaran lemah"],
            answer: "d. Mikroswitch door tidak berfungsi, lid kontrol tidak berfungsi, timer rusak, rangkaian pengatur kecepatan rusak"
        },
        {
            question: "IPS pada sebuah rumah sakit menerima laporan ada alat lampu operasi terjadi sebuah kerusakan di ruangan rawat inap. Sebagai seorang elektromedis, langkah awal yang dilakukan adalah?",
            options: ["a. Menyiapkan bahan habis pakai", "b. Mendokumentasikan alat tersebut", "c. Memberikan laporan ke atasan atas kerusakan tersebut", "d. Melakukan respon sesuai SOP", "e. Meninventaris dulu alat yang rusak"],
            answer: "d. Melakukan respon sesuai SOP"
        },
        {
            question: "Sebuah alat bedside monitor di ruang IGD RSU memiliki beberapa parameter untuk memantau keadaan pasien. Seorang dokter yang bertugas memerintahkan kepada seorang perawat untuk menekan tombol pada alat tersebut untuk mengetahui tekanan darah pada pasien saat itu lewat tampilan yang ditunjukkan pada layar display pada alat bedside monitor tersebut. Di bawah ini adalah langkah yang bisa dipilih perawat untuk mengetahui tekanan darah pada pasien dengan cara menekan tombol parameter di bawah ini pada alat tersebut",
            options: ["a. NIBP", "b. SPO2", "c. IBP", "d. HR", "e. etCO2"],
            answer: "a. NIBP"
        },
        {
            question: "Seorang elektromedis bersama dengan petugas penyedia peralatan sedang melakukan uji fungsi general x-ray unit yang sudah terpasang tetap di instalasi Radiologi. Apakah tujuan pelaksanaan kegiatan tersebut?",
            options: ["a. memastikan alat sudah tersertifikasi sesuai dengan spesifikasi dari pabrik", "b. agar alat dapat berfungsi dan bermanfaat untuk pemeriksaan fluoroscopi", "c. memastikan alat sudah sesuai dengan spesifikasi dari standar dari pabrik", "d. agar alat dapat berfungsi dan bermanfaat untuk pemeriksaan radiografi", "e. memastikan kinerja alat sesuai standar keamanan dan standar dari pabrik."],
            answer: "e. memastikan kinerja alat sesuai standar keamanan dan standar dari pabrik."
        },
        {
            question: "Untuk traksi jenis lumbal, berapa maksimal berat beban tarikan?",
            options: ["a. 1/4 BB", "b. 1/7 BB", "c. 1/3 BB", "d. 1/6 BB", "e. 1/5 BB"],
            answer: "c. 1/3 BB"
        },
        {
            question: "Pengoperasian alat AAS dibutuhkan penggunaan gas asetilen. Apakah fungsi gas tersebut?",
            options: ["a. pembawa", "b. pereaksi", "c. pembakar", "d. pelarut", "e. pendorong"],
            answer: "c. pembakar"
        },
        {
            question: "Seorang perawat merasa tidak nyaman melihat perilaku tenaga elektromedis dalam hal memberikan pelayanan pemeliharaan alat baby incubator, karena alat tersebut kurang mendapatkan perawatan yang memadai. Sehingga dilaporkan ke atasannya. Tindakan apa yang akan dilakukan oleh kepala Instalasi Pemeliharaan Sarana Rumah Sakit?",
            options: ["a. Menegur secara tertulis tenaga elektromedis", "b. Menegur secara tertulis dan melakukan pembinaan", "c. Menegur keras kepada tenaga elektromedis", "d. Menegur secara lisan kepada tenaga elektromedis", "e. Memberi sanksi terhadap tenaga elektromedis"],
            answer: "d. Menegur secara lisan kepada tenaga elektromedis"
        },
        {
            question: "Seorang teknisi elektromedis melakukan kalibrasi alat spektrofotometer. Apa larutan yang digunakan pada kegiatan tersebut?",
            options: ["a. Larutan diluent", "b. Larutan KCl", "c. Larutan standar", "d. Reagen blanko", "e. Larutan buffer"],
            answer: "c. Larutan standar"
        },
        {
            question: "Sebuah pesawat rontgen di suatu rumah sakit tidak menghasilkan hasil radiograf ketika dilakukan exposure. Saat dilakukan pengecekan, filamen tidak putus dan bekerja normal. Apa yang harus dilakukan oleh seorang elektromedis untuk memperbaiki pesawat rontgen tersebut?",
            options: ["a. Melakukan pengecekan pada HTT", "b. Melakukan pengecekan pada timer", "c. Melakukan pengecekan pada trafo filamen", "d. Melakukan pengecekan pada auto trafo", "e. Melakukan pengecekan pada space charge compensator"],
            answer: "a. Melakukan pengecekan pada HTT"
        },
        {
            question: "Seorang tenaga laboratorium mengeluhkan penglihatan pada mikroskop cahaya yang kurang jelas. Akan tetapi secara kasat mata lensa okuler maupun objek dalam keadaan bersih. Sebagai tenaga elektromedis, apa yang akan dilakukan untuk menangani alat tersebut?",
            options: ["a. Mengganti lensa objek", "b. Mengganti lampu mikroskop", "c. Mengganti lensa okuler", "d. Mengatur kondensor", "e. Melakukan se ng ulang posisi lensa"],
            answer: "b. Mengganti lampu mikroskop"
        },
        {
            question: "Autoclave merk Hiclave HVP-50 merupakan alat sterilisator yang menghasilkan uap panas dengan tekanan uap yang mencapai 121 °C. Dengan tekanan uap yang cukup besar, perlu sebuah monitor yang dapat menginformasikan pengguna tentang keadaan suatu autoclave untuk meminimalisir adanya kecelakaan saat pengoperasian. Apabila terjadi suatu kerusakan pada display autoclave, apa yang harus dilakukan oleh seorang teknisi?",
            options: ["a. Memeriksa sumber panas pada autoclave", "b. Memeriksa tegangan input pada mainboard autoclave", "c. Mengganti timer pada autoclave", "d. Mengganti thermostat pada autoclave", "e. Memeriksa kondisi sekitar autoclave"],
            answer: "b. Memeriksa tegangan input pada mainboard autoclave"
        },
        {
            question: "Peralatan lifesupport yang pada saat ini sedang banyak dipakai untuk tindakan penanganan pasien Covid-19 yang mengalami gangguan pernapasan, alat ini juga bisa membantu napas pasien bertekanan negatif dan positif yang dapat mempertahankan ventilasi dan pemberian oksigenasi secara mekanis. Di bawah ini adalah nama dari alat life support tersebut yang digunakan untuk penanganan pasien Covid-19.",
            options: ["a. Oximeter", "b. Baby incubator", "c. Nebulizer", "d. Ventilator", "e. Defibrillator"],
            answer: "d. Ventilator"
        },
        {
            question: "Kontrol waktu pada waterbath berfungsi untuk membatasi waktu penyimpanan sampel. Bilamana kontrol tersebut mulai bekerja?",
            options: ["a. Setelah sampel dimasukkan", "b. Suhu sudah sesuai dengan suhu setting", "c. Heater mulai bekerja", "d. Suhu masih di bawah suhu setting", "e. Selesai penyimpanan sampel"],
            answer: "b. Suhu sudah sesuai dengan suhu setting"
        },
        {
            question: "Pengaturan pada panel kontrol alat water bath di antaranya adalah safety limit kontrol. Bilamana bagian kontrol tersebut mulai bekerja?",
            options: ["a. Suhu pada waterbath meningkat sangat lambat", "b. Suhu pada waterbath di bawah suhu setting", "c. Suhu melebihi suhu yang disetting", "d. Sampel belum dimasukkan sudah di start", "e. Waktu penyimpanan telah selesai, penutup membuka"],
            answer: "c. Suhu melebihi suhu yang disetting"
        },
        {
            question: "Pada flamefotometer terdapat salah satu bagian yang disebut nebulizer. Apakah fungsi bagian tersebut?",
            options: ["a. Merubah zat pada sampel menjadi partikel-partikel yang sangat halus", "b. Menghisap sampel", "c. Merubah zat pada sampel menjadi atom-atom", "d. Mencampur sampel dengan reagen", "e. Membakar sampel"],
            answer: "a. Merubah zat pada sampel menjadi partikel-partikel yang sangat halus"
        },
        {
            question: "Sebuah alat nebulizer digunakan pada instalasi gawat darurat, semua aksesori dan kabel telah terpasang. Setting alat sudah sesuai dengan SOP, saat ditekan tombol start ternyata tidak ada uap yang keluar. Apakah yang harus dilakukan untuk mengatasi masalah ini?",
            options: ["a. Lihat dan periksa masker pasien", "b. Lihat dan set waktu pada timer", "c. Lihat dan periksa kabel power", "d. Lihat dan periksa slang ke pasien", "e. Lihat dan periksa volume air pada chamber"],
            answer: "e. Lihat dan periksa volume air pada chamber"
        },
        {
            question: "Tekanan darah merupakan faktor yang amat penting pada sistem sirkulasi. Peningkatan atau penurunan tekanan darah akan mempengaruhi homeostasis di dalam tubuh. Tekanan darah selalu diperlukan untuk daya dorong mengalirnya darah di dalam arteri, arteriola, kapiler, dan sistem vena, sehingga terbentuklah suatu aliran darah yang menetap. Jika sirkulasi darah menjadi tidak memadai lagi, maka terjadilah gangguan pada sistem transportasi oksigen, karbondioksida, dan hasil-hasil metabolisme lainnya. Di lain pihak, fungsi organ-organ tubuh akan mengalami gangguan seperti gangguan pada proses pembentukan air seni di dalam ginjal ataupun pembentukan cairan cerebrospinalis dan lainnya. Terdapat dua macam kelainan tekanan darah, antara lain yang dikenal sebagai hipertensi atau tekanan darah tinggi dan hipotensi atau tekanan darah rendah. Berapakah tingkat kebocoran yang diijinkan pada sphygmomanometer menurut Emergency Care Research Institution?",
            options: ["a. 4 mmHg/menit", "b. 15 mmHg/menit", "c. 20 mmHg/menit", "d. 10 mmHg/menit", "e. 12 mmHg/menit"],
            answer: "b. 15 mmHg/menit"
        },
        {
            question: "Seorang elektromedis sedang melakukan pengoperasian waterbath. Manakah salah satu prosedur yang harus diperhatikan terlebih dahulu?",
            options: ["a. Isi waterbath dengan cairan untuk menjaga suhu konstan (air atau minyak). Pastikan bahwa setelah kontainer dipanaskan, tingkat cairan adalah antara 4 dan 5 cm dari atas tangki.", "b. Pastikan bahwa lokasi yang dipilih rata dan kuat untuk mendukung berat waterbath dengan aman ketika penuh cairan.", "c. Pilih suhu operasi menggunakan tombol untuk menyesuaikan parameter.", "d. Jika air digunakan sebagai pemanasan cairan, pastikan bahwa itu bersih. Beberapa produsen merekomendasikan menambahkan produk yang mencegah pembentukan jamur atau alga.", "e. Instal instrumen kontrol yang diperlukan, seperti termometer dan circulators. Gunakan suku cadang tambahan disediakan untuk tujuan ini. Verifikasi posisi bola termometer atau probe termal untuk memastikan bahwa pembacaan benar."],
            answer: "a. Isi waterbath dengan cairan untuk menjaga suhu konstan (air atau minyak). Pastikan bahwa setelah kontainer dipanaskan, tingkat cairan adalah antara 4 dan 5 cm dari atas tangki."
        },
        {
            question: "Sphygmomanometer digunakan untuk mengukur tekanan darah pasien yang dilakukan secara non-invasif. Apakah langkah pertama kali yang harus kita ambil pada saat pra-kalibrasi sebuah sphygmomanometer air raksa?",
            options: ["a. Tempatkan alat pada tempat yang rata/tidak miring.", "b. Siapkan alat ukur pembanding", "c. Catat spesifikasi alat", "d. Siapkan lembar kerja pengukuran", "e. Catat kondisi lingkungan tempat kalibrasi"],
            answer: "e. Catat kondisi lingkungan tempat kalibrasi"
        },
        {
            question: "Perawat melaporkan hasil perekaman EKG (elektrokardiogram) tidak tampil. Keluhan berupa lead III tampil, tetapi pada lead I dan lead II tidak tampil. Hasil pengamatan didapatkan adanya elektrode yang terlepas. Elektrode manakah yang memungkinkan penyebab permasalahan tersebut?",
            options: ["a. RL", "b. RA", "c. LL", "d. V1", "e. LA"],
            answer: "b. RA"
        },
        {
            question: "Saat mengoperasikan EKG, hasil perekaman EKG lead II muncul hasil perekaman (respon) akan tetapi pada lead I dan lead III tidak muncul tress (tidak respon). Bagaimana menurut saudara sebagai seorang elektromedis?",
            options: ["a. V1 terlepas", "b. Ekstrimitas RL terlepas", "c. Ekstrimitas RA terlepas", "d. Ekstrimitas LL terlepas", "e. Ekstrimitas LA terlepas"],
            answer: "e. Ekstrimitas LA terlepas"
        },
        {
            question: "Seorang elektromedis melakukan analisis kerusakan pesawat rontgen pada rangkaian filamen. Pada saat dilakukan identifikasi dengan melakukan pengukuran pada trafo filamen diperoleh nilai resistansi sebesar 3 ohm dengan induktansi sebesar 20 mH. Jika dioperasikan pada sistem jaringan 1 phase dengan frekuensi 50 Hz, berapakah nilai impedansi trafo filamen tersebut?",
            options: ["a. 6,959 ohm", "b. 0,3 ohm", "c. 3 ohm", "d. 7,699 ohm", "e. 5,989 ohm"],
            answer: "a. 6,959 ohm"
        },
        {
            question: "Pada ruang radiologi di suatu rumah sakit didapati foto rontgen hasil dari alat automatic processing masih dalam kondisi basah. Elektromedis yang melakukan pengecekan mendapati bahwa motor roller bekerja dengan normal. Apa yang harus dilakukan oleh tenaga elektromedis yang menangani peralatan tersebut?",
            options: ["a. Melakukan pengecekan pada elemen pemanas pada bagian developer", "b. Melakukan pengecekan pada elemen pemanas dan blower pada bagian dryer", "c. Melakukan pengecekan pada elemen pemanas pada bagian fixer", "d. Melakukan pengecekan pada elemen pemanas pada bagian dryer", "e. Melakukan pengecekan pada blower pada bagian dryer"],
            answer: "b. Melakukan pengecekan pada elemen pemanas dan blower pada bagian dryer"
        },
        {
            question: "Seorang elektromedis bersama-sama dengan tim pengadaan Rumah Sakit, sedang melakukan penilaian kebutuhan peralatan kesehatan yang akan digunakan untuk pelayanan di instalasi radiologi. Apakah faktor yang harus diperhatikan pada kasus tersebut?",
            options: ["a. Ketersediaan suku cadang, standar dokter radiologi, biaya pemeliharaan", "b. Ketersediaan suku cadang, standar keselamatan dan biaya pemeliharaan", "c. Ketersediaan suku cadang, standar manajemen dan biaya pemeliharaan", "d. Ketersediaan suku cadang, instruksi direktur, biaya pemeliharaan", "e. Ketersediaan suku cadang, standar radiographer dan biaya pemeliharaan"],
            answer: "b. Ketersediaan suku cadang, standar keselamatan dan biaya pemeliharaan"
        },
    {
        question: "Seorang dosen menerangkan pada mahasiswa cara pengoperasian alat infant warmer yang ditinjau dari aspek pengamanan. Aspek pengamanan apa saja yang dilakukan pada peralatan infant warmer?",
        options: ["a. Memasang rangkaian pengaman dioda", "b. Memasang sensor kelembaban", "c. Memperdalam grounding listrik", "d. Memasang sensor suhu", "e. Memasang trafo isolasi."],
        answer: "c. Memperdalam grounding listrik"
    },
    {
        question: "Di suatu puskesmas terdapat sebuah sterilisator kering. Para petugas di puskesmas mengaku jarang menggunakan sterilisator kering tersebut dikarenakan display pada sterilisator tidak mengalami perubahan sama sekali ketika digunakan. Setiap kali digunakan, display suhu selalu menunjukkan suhu yang tetap meskipun heater telah bekerja. Sebagai seorang tenaga teknik elektromedik, apa yang akan Anda lakukan?",
        options: ["a. Memeriksa sambungan kabel pada sterilisator", "b. Memeriksa tegangan input sterilisator", "c. Memeriksa sambungan pada display sterilisator", "d. Mengganti heater sterilisator", "e. Mengganti sensor suhu sterilisator"],
        answer: "e. Mengganti sensor suhu sterilisator"
    },
    {
        question: "Petunjuk disassembling alat hematology analyzer wajib dipahami oleh seorang teknisi. Di manakah pada umumnya petunjuk tersebut dicantumkan?",
        options: ["a. Instruction manual book", "b. Reagen book", "c. Hand book", "d. Service manual book", "e. Assembly book"],
        answer: "d. Service manual book"
    },
    {
        question: "Teknisi melakukan penggantian lampu (source lamp) pada spektrofotometer. Yang harus diperhatikan dan dilakukan teknisi di antaranya adalah?",
        options: ["a. Melakukan kalibrasi", "b. Melakukan uji fungsi", "c. Membersihkan alat", "d. Mematikan alat dan melepaskan dari tegangan supply", "e. Menyalakan alat"],
        answer: "a. Melakukan kalibrasi"
    },
    {
        question: "Sebuah alat inkubator yang digunakan untuk terapi di suatu rumah sakit, ternyata suhu udara di dalam alat tersebut tidak sesuai dengan kebutuhan suhu bayi yang seharusnya. Langkah apa yang dilakukan untuk menangani hal tersebut?",
        options: ["a. Melakukan pemeriksaan catu daya listrik inkubator", "b. Melakukan pemeliharaan rutin dan kalibrasi agar suhu heater/thermostat sesuai dengan standar", "c. Melakukan pemeriksaan, pengukuran, dan penggantian spare part heater/thermostat", "d. Melakukan pemeriksaan rangkaian heater/thermostat.", "e. Melakukan pemeriksaan seluruh rangkaian pada inkubator"],
        answer: "d. Melakukan pemeriksaan rangkaian heater/thermostat."
    },
    {
        question: "Sebuah alat rontgen di sebuah rumah sakit ditempatkan di instalasi radiologi. Alat tersebut berfungsi dengan baik dan telah digunakan selama 5 (lima) tahun dengan total penggunaan 20.000 kali ekspos, sedangkan usia teknis alat tersebut tertera 25.000 kali ekspos. Berapa persenkah usia manfaat alat tersebut?",
        options: ["a. 10", "b. 5", "c. 2", "d. 20", "e. 2,5"],
        answer: "d. 20"
    },
    {
        question: "Seorang elektromedis bersama-sama dengan tim perencana rumah sakit, sedang melakukan penilaian kebutuhan peralatan kesehatan yang akan digunakan untuk pelayanan di instalasi radiologi. Apakah tujuan penilaian pada kasus tersebut?",
        options: ["a. Pemenuhan alat sesuai keinginan dokter radiologi.", "b. Pemenuhan alat sesuai keinginan direktur rumah sakit", "c. Meningkatkan kinerja pelayanan kesehatan", "d. Meningkatkan kinerja peralatan radiologi", "e. Pemenuhan alat sesuai keinginan radiographer"],
        answer: "c. Meningkatkan kinerja pelayanan kesehatan"
    },
    {
        question: "Seorang pelaksana kalibrasi melaksanakan tugasnya mengkalibrasi ECG recorder. Pada saat pengecekan fisik terlihat indikator pemilihan lead (lead selector) tidak sesuai. Tindakan apa yang harus diambil oleh pelaksana kalibrasi tersebut?",
        options: ["a. Tetap melanjutkan kalibrasi pada pemilihan yang sesuai", "b. Mencoret dari daftar order", "c. Tetap melanjutkan kalibrasi dengan mencoba-coba lead selector yang sesuai", "d. Melaporkan ke pihak rumah sakit alatnya rusak", "e. Melaporkan ke pihak rumah sakit atau pelanggan bahwa alat tersebut tidak bisa dikalibrasi"],
        answer: "e. Melaporkan ke pihak rumah sakit atau pelanggan bahwa alat tersebut tidak bisa dikalibrasi"
    },
    {
        question: "Seorang petugas radiologi melaporkan permasalahan pada alat rontgen yang sedang digunakan untuk pemeriksaan seorang pasien. Menurut petugas, gambar yang dihasilkan tingkat kehitamannya tidak sesuai dengan yang diharapkan. Setelah dilakukan pemeriksaan dan dianalisis, terjadi kerusakan pada rangkaian space charge compensator. Apakah tujuan pemasangan rangkaian pada kasus tersebut?",
        options: ["a. Agar arus filamen sesuai setting meskipun ada perubahan kV", "b. Agar resistansi tabung sesuai dengan setting meskipun ada perubahan kV", "c. Agar tegangan filamen sesuai setting meskipun ada perubahan kV", "d. Agar arus tabung sesuai dengan setting meskipun ada perubahan pada kV", "e. Agar tegangan tabung sesuai dengan setting meskipun arus filamen berubah"],
        answer: "d. Agar arus tabung sesuai dengan setting meskipun ada perubahan pada kV"
    },
    {
        question: "Radiografer di RS Harapan Sentosa melaporkan bahwa terjadi kerusakan pesawat rontgen yaitu jarum penunjuk arus tabung tidak berfungsi ketika ditekan tombol exposure. Setelah dilakukan pengecekan, ternyata kabel penghubung penunjukan arus tabung terputus. Di manakah posisi kabel-kabel putus tersebut terhubung?",
        options: ["a. Sekunder trafo filamen", "b. Auto trafo", "c. Primer trafo filamen", "d. Sekunder HTT", "e. Primer HTT"],
        answer: "d. Sekunder HTT"
    },
    {
        question: "Rumah sakit berencana melakukan pengadaan peralatan endoskopi untuk melengkapi peralatan ruang bedah. Alat sterilisasi manakah yang digunakan untuk mensterilkan fiber optik endoskopi?",
        options: ["a. Cairan Desinfektan", "b. Oven", "c. Sterilisator basah", "d. Sterilisator kering", "e. Autoclave"],
        answer: "a. Cairan Desinfektan"
    },
    {
        question: "Seorang elektromedis sedang melakukan kajian pemanfaatan alat rontgen di rumah sakit. Alat tersebut harus memenuhi persyaratan proteksi radiasi, salah satunya adalah justifikasi. Apakah yang dimaksud persyaratan tersebut?",
        options: ["a. Harus menerapkan teknik dan prosedur yang tepat", "b. Menentukan dosis radiasi yang sesuai dengan kondisi pasien", "c. Harus dapat meningkatkan kualitas gambar yang dihasilkan", "d. Manfaat radiasi lebih besar daripada risiko yang ditimbulkan", "e. Harus mengacu pada nilai batas dosis dan terlampaui"],
        answer: "d. Manfaat radiasi lebih besar daripada risiko yang ditimbulkan"
    },
    {
        question: "Seorang petugas datang ke instalasi pemeliharaan sarana rumah sakit (IPSRS), melaporkan kerusakan alat dental x-ray panoramic yang berada di instalasi radiologi. Petugas mengatakan bahwa ketika dioperasikan alat bisa scanning tapi tidak keluar sinar-x. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut di atas?",
        options: ["a. Cek tegangan catu daya dan perbaiki rangkaian exposure", "b. Cek driver motor scanning dan perbaiki rangkaian exposure", "c. Cek tegangan autotrafo dan perbaiki rangkaian exposure", "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure", "e. Cek autotrafo dan perbaiki rangkaian exposure"],
        answer: "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure"
    },
    {
        question: "Alat yang dipergunakan untuk memisahkan suatu larutan berdasarkan beratnya, alat tersebut adalah?",
        options: ["a. Blood Shaker", "b. Stirer Pneumatik", "c. Waterbath", "d. Stirer Magnetik", "e. Centrifuge"],
        answer: "e. Centrifuge"
    },
    {
        question: "Seorang elektromedis sedang melakukan kegiatan instalasi alat spektrofotometer. Manakah salah satu dari kegiatan tersebut?",
        options: ["a. Gunakan semprit untuk membersihkan tempat sampel yang menyerap banyak cairan.", "b. Sertakan layar kontrol dan keyboard dalam pembersihan.", "c. Matikan spektrofotometer dan lepaskan kabel sambungan listrik.", "d. Gunakan meja kerja yang stabil dan jauhkan dari peralatan yang menghasilkan getaran (sentrifugal, agitator).", "e. Bersihkan bagian luar instrumen dengan potongan kain dibasahi dengan air suling."],
        answer: "d. Gunakan meja kerja yang stabil dan jauhkan dari peralatan yang menghasilkan getaran (sentrifugal, agitator)."
    },
    {
        question: "Sebuah pesawat rontgen di suatu rumah sakit tidak menghasilkan hasil radiograf ketika dilakukan exposure. Tenaga elektromedis tersebut ingin memastikan bahwa filamen tidak putus. Apa yang harus dilakukan oleh seorang elektromedis untuk memastikan kondisi tersebut?",
        options: ["a. Mengukur hambatan pada filamen, jika besar berarti putus.", "b. Membongkar kolimator untuk melihat kondisi filamen.", "c. Mengukur tegangan pada filamen, jika kecil berarti putus.", "d. Membongkar tube housing untuk melihat kondisi filamen.", "e. Mengukur arus pada filamen, jika besar berarti putus."],
        answer: "a. Mengukur hambatan pada filamen, jika besar berarti putus."
    },
    {
        question: "Seorang bidan yunior pada ruang NICU sedang menangani bayi prematur yang perlu perawatan intensif, dan dikejutkan dengan nilai kelembapan suhu bacaan pada display alat Baby Incubator yang digunakan dengan nilai yang sangat rendah melebihi standar kelembapan yang disarankan. Hal tersebut diketahui bidan pada saat akan melakukan pengecekan kesehatan pada tubuh bayi, kemudian melaporkan kasus tersebut ke seorang tenaga teknisi elektromedis. Langkah dan tindakan apakah yang harus dilakukan sebagai teknisi elektromedis?",
        options: ["a. Memeriksa heater dan memperbaikinya jika tidak bekerja", "b. Memeriksa motor blower dan memperbaikinya jika tidak bekerja", "c. Memeriksa kotak akrilik dan memperbaikinya jika ada keretakan", "d. Memeriksa buzzer dan memperbaikinya jika tidak bekerja", "e. Memeriksa reservoir tank dan menambahkan air suling jika habis"],
        answer: "e. Memeriksa reservoir tank dan menambahkan air suling jika habis"
    },
    {
        question: "Seorang elektromedis sedang melakukan pemeriksaan alat rontgen diagnostik di instalasi radiologi dan menganalisis kerusakan terjadi pada rangkaian filamen yang dipasok pada tegangan 100 volt. Setelah dilakukan pengukuran, nilai resistansi pada komponen SBR; mA control; mA limiter 10 ohm dan primer trafo filamen sebesar 3 ohm; sedangkan nilai induktansi pada primer trafo filamen terukur sebesar 628 µH. Berapakah seharusnya nilai arus yang terukur pada rangkaian filamen tersebut?",
        options: ["a. 7,69 amper", "b. 1,99 amper", "c. 3,33 amper", "d. 0,156 amper", "e. 0,151 amper"],
        answer: "b. 1,99 amper"
    },
    {
        question: "Seorang perawat melaporkan kepada Instalasi Pemeliharaan Sarana Rumah Sakit tentang alat Sphygmomanometer yang jarang dipantau fungsinya, sehingga dia merasa takut menggunakan alat tersebut. Apa yang dilakukan oleh tenaga elektromedis dalam kasus tersebut?",
        options: ["a. Kebocoran slang dan air raksa", "b. Kebocoran slang dan akurasi penunjukkan", "c. Kebocoran air raksa dan tekanan", "d. Kebocoran air raksa dan akurasi penunjukkan", "e. Kebocoran tekanan dan akurasi penunjukkan"],
        answer: "e. Kebocoran tekanan dan akurasi penunjukkan"
    },
    {
        question: "Di dalam penyusunan rencana kerja tahunan pemeliharaan alat rontgen di layanan kesehatan harus memenuhi aspek keselamatan, baik keselamatan listrik, mekanik dan utamanya adalah keselamatan radiasi. Apakah tujuan keselamatan radiasi pada pernyataan tersebut?",
        options: ["a. Untuk melindungi pasien, pekerja radiasi dan masyarakat", "b. Untuk mengurangi pengaruh radiasi pada pasien, pekerja radiasi dan lingkungan hidup", "c. Untuk melindungi pasien, pekerja radiasi dan lingkungan hidup", "d. Untuk mengurangi pengaruh radiasi pada pasien dan pekerja radiasi", "e. Untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"],
        answer: "e. Untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat Rontgen konvensional ke instalasi pemeliharaan sarana Rumah Sakit. Petugas mengatakan bahwa pengaturan kV pada posisi 60 dan 65 tidak dapat dilakukan, sedangkan untuk pengatur lainnya tidak ada masalah (dapat diatur). Bagaimana tindakan saudara terhadap kasus tersebut di atas?",
        options: ["a. Cek rangkaian primer tegangan tinggi - perbaiki tap-tap pada KV selector", "b. Cek rangkaian skunder tegangan tinggi - memperbaiki tap-tap pada HTT", "c. Cek rangkaian skunder tegangan tinggi - perbaiki tap-tap pada KV selector", "d. Cek rangkaian skunder tegangan tinggi - perbaiki tap-tap pada LVC", "e. Cek rangkaian primer tegangan tinggi - perbaiki tap-tap pada LVC"],
        answer: "a. Cek rangkaian primer tegangan tinggi - perbaiki tap-tap pada KV selector"
    },
    {
        question: "Seorang elektromedis yang baru saja bekerja melakukan pemeliharaan rutin pada fungsi pergerakan sliding dan tilting pada meja pasien. Elektromedis menggerakkan meja pasien arah kepala sampai posisi maksimal kemudian mencoba menggerakkan meja ke arah 90 derajat namun meja pasien tidak bergerak. Apa yang seharusnya dilakukan oleh elektromedis tersebut agar pergerakan tilting dapat dilakukan?",
        options: ["a. Menggerakkan sliding ke arah kaki terlebih dahulu", "b. Memeriksa limit switch sliding posisi kepala", "c. Menggerakkan tilting ke arah 45 derajat terlebih dahulu", "d. Memeriksa limit switch tilting 90 derajat.", "e. Memeriksa catu daya pada motor tilting"],
        answer: "a. Menggerakkan sliding ke arah kaki terlebih dahulu"
    },
    {
        question: "Monokromator atau filter pada alat spektrofotometer berfungsi untuk pemilihan panjang gelombang. Apakah yang harus disesuaikan untuk memilih panjang gelombang tersebut?",
        options: ["a. Detektor yang digunakan.", "b. Konsentrasi larutan standar.", "c. Suhu inkubasi.", "d. Lampu yang akan digunakan.", "e. Unsur yang akan diukur."],
        answer: "e. Unsur yang akan diukur."
    },
    {
        question: "Suction pump digunakan secara rutin oleh bagian bedah pada rumah sakit untuk menghisap cairan tubuh pasien. Untuk menjaga agar motor pump bekerja dengan baik, apa yang akan dilakukan oleh tenaga elektromedis?",
        options: ["a. Mengganti oli motor secara berkala.", "b. Memanasi motor sebelum penggunaan alat.", "c. Membersihkan motor dari cairan pasien secara berkala.", "d. Melilit ulang motor secara berkala.", "e. Ruangan sekitar motor harus dingin agar motor tidak cepat panas."],
        answer: "a. Mengganti oli motor secara berkala."
    },
    {
        question: "Seorang bidan di sebuah rumah sakit menanyakan kepada elektromedis tentang infant incubator yang baru, panasnya kapan stabil. Apa yang harus dilakukan elektromedis tersebut?",
        options: ["a. Mengukur daya pada heater yang digunakan", "b. Melihat buku service manual dari infant incubator", "c. Mengoperasikan sendiri dan diperhatikan display pada infant incubator", "d. Memberitahu ke bidan, bahwa panasnya stabil sama seperti infant incubator yang lain", "e. Melakukan pengukuran suhu dengan incu analyzer x"],
        answer: "b. Melihat buku service manual dari infant incubator"
    },
    {
        question: "Seorang perawat pada ruangan operasi melaporkan pada bagian IPS rumah sakit bahwa indikator (ON) peralatan suction pump berfungsi dengan baik tetapi tidak mau bekerja dengan optimal disebabkan karena alat tidak bisa menghisap cairan. Sebagai seorang teknisi alat kesehatan, langkah apa yang paling tepat untuk mengatasi masalah tersebut?",
        options: ["a. Mengadakan pembelian alat baru", "b. Menambal selang yang bocor", "c. Membersihkan motor dan memberikan minyak pada sistem piston", "d. Mengganti tabung dengan yang baru", "e. Mengecek fungsi bagian-bagian suction pump"],
        answer: "c. Membersihkan motor dan memberikan minyak pada sistem piston"
    },
    {
        question: "Melakukan pengukuran dengan menggunakan blanko adalah salah satu tahapan pengoperasian alat spektrofotometer. Apa parameter yang ingin didapatkan pada kegiatan tersebut?",
        options: ["a. Tegangan input detector sama dengan nol.", "b. Tegangan output detector sama dengan nol.", "c. Intensitas lampu sama dengan nol", "d. Intensitas sama dengan nol.", "e. Absorban sama dengan nol."],
        answer: "e. Absorban sama dengan nol."
    },
    {
        question: "Seorang elektromedis dilibatkan sebagai tim perencanaan pemenuhan kebutuhan peralatan radiologi yang berupa C-Arm Unit. Tim bersepakat bahwa sesuai standar pelayanan radiologi, setiap peralatan yang memanfaatkan radiasi pengion harus mempunyai izin pemanfaatan alat tersebut. Kemanakah usulan perizinan tersebut ditujukan?",
        options: ["a. LIPI", "b. BATAN", "c. KEMENKES", "d. LITBANGKES", "e. BAPETEN"],
        answer: "e. BAPETEN"
    },
    {
        question: "Berikut ini merupakan berbagai macam fotometer, kecuali?",
        options: ["a. AAS", "b. Flamefotometer", "c. Automatic Analyzer Spectrofotometer", "d. pH meter", "e. Spektrofotometer"],
        answer: "d. pH meter"
    },
    {
        question: "Rumah sakit merencanakan membuat ruang rehabilitasi medik, perkirakan alat kesehatan apa saja yang dibutuhkan untuk ruangan tersebut?",
        options: ["a. ECG, tensimeter, Defibrilator, suction Bedside monitor.", "b. Shortwave Diathermy, Microwave Diathermy, Infrared, stimulator, traksi", "c. Meja operasi, lampu operasi, electrosurgery, suction, anaesthesi", "d. Bedside monitor, defibrillator, ventilator, infuse pump, syringe pump", "e. Cardiotochograph, Doppler, Electrocardiograph"],
        answer: "b. Shortwave Diathermy, Microwave Diathermy, Infrared, stimulator, traksi"
    },
    {
        question: "Dokter bedah di suatu rumah sakit hendak melakukan pembedahan pada seorang pasien di ruang operasi menggunakan Electrosurgery Unit (ESU). ESU yang dioperasikan menggunakan mode monopolar. Namun ketika proses pembedahan berlangsung, terdapat arus bocor pada elektroda. Langkah pemeriksaan apakah yang sebaiknya dilakukan oleh pihak Instalasi Pemeliharaan Sarana Medik (IPS) Rumah Sakit?",
        options: ["a. Memeriksa masalah sambungan kabel elektroda", "b. Memastikan fuse masih bekerja", "c. Memeriksa catu daya yang didapat sesuai spesifikasi alat", "d. Melakukan pengukuran tegangan dari jala-jala PLN", "e. Memastikan elektroda ground terpasang"],
        answer: "e. Memastikan elektroda ground terpasang"
    },
    {
        question: "Seorang elektromedis sedang melakukan prosedur instalasi waterbath yang direkomendasikan oleh WHO. Manakah salah satu kegiatan tersebut?",
        options: ["a. Mengisi waterbath dengan cairan untuk menjaga suhu konstan (air atau minyak). Pastikan bahwa setelah kontainer dipanaskan ditempatkan, tingkat cairan adalah antara 4 dan 5 cm dari atas tangki.", "b. Memilih suhu operasi menggunakan tombol untuk menyesuaikan parameter.", "c. Memastikan bahwa lokasi yang dipilih rata dan kuat untuk mendukung berat waterbath dengan aman ketika penuh cairan.", "d. Jika air digunakan sebagai pemanasan cairan, pastikan bahwa itu adalah bersih. Beberapa produsen merekomendasikan menambahkan produk yang mencegah pembentukan jamur atau alga.", "e. Menyediakan instrumen kontrol yang diperlukan, seperti termometer dan circulators. Gunakan suku cadang tambahan disediakan untuk tujuan ini. Verifikasi posisi bola termometer atau probe termal untuk memastikan bahwa pembacaan benar."],
        answer: "c. Memastikan bahwa lokasi yang dipilih rata dan kuat untuk mendukung berat waterbath dengan aman ketika penuh cairan."
    },
    {
        question: "Pada saat dilakukan inkubasi di alat waterbath dengan menggunakan heater basah, tiba-tiba terjadi ledakan kecil di heater-nya. Apakah tindakan yang dilakukan untuk menghindari kejadian tersebut?",
        options: ["a. Melakukan pemeriksaan bagian timer", "b. Melakukan pemeriksaan bagian pengaturan panas.", "c. Melakukan pemeriksaan level (volume) air pada bak waterbath.", "d. Melakukan pemeriksaan bagian pengaturan panas dan membersihkan bak air pada waterbath.", "e. Melakukan pemeriksaan dan perbaikan bagian timer dan pengaturan panas."],
        answer: "c. Melakukan pemeriksaan level (volume) air pada bak waterbath."
    },
    {
        question: "Pada sebuah pesawat rontgen ditemukan permasalahan yaitu hasil foto radiograf yang tercetak pada film terdapat garis-garis putih. Apa yang harus dilakukan oleh elektromedis tersebut?",
        options: ["a. Mengganti kaset film dengan baru", "b. Memperbaiki posisi shutter.", "c. Mengecek posisi dari cermin kolimator.", "d. Memperbaiki lampu kolimator.", "e. Mengecek motor penggerak moving grid."],
        answer: "e. Mengecek motor penggerak moving grid."
    },
    {
        question: "Pada pemeriksaan gigi pasien diperlukan dental chair. Dental chair ini sangat membantu dokter dan perawat gigi untuk mendapatkan posisi pemeriksaan pasien yang nyaman dan tepat. Posisi duduk pasien dan sandaran punggungnya dapat digerakkan naik dan turun. Apakah teknik sistem pengungkitan yang digunakannya?",
        options: ["a. Pneumatic dan udara", "b. Hidraulic dan air", "c. Hidraulic dan udara", "d. Pneumatic dan hidraulic", "e. Hidraulic dan oli"],
        answer: "d. Pneumatic dan hidraulic"
    },
    {
        question: "Pada saat penempatan Balance sudah sesuai dengan syarat penempatan. Salah satunya diletakkan di tempat yang datar dan rata, Air bubble pada Level Indikator tidak tepat di tengah. Sebagai seorang teknisi, untuk merubah posisi bubble dengan cara mengatur/memutar?",
        options: ["a. Adjustment", "b. Enter", "c. Scroll Up dan Down", "d. Leveling Feet", "e. Print Out"],
        answer: "d. Leveling Feet"
    },
    {
        question: "Pada suatu ketika seorang perawat yang akan menggunakan alat suction pump. Sebelum mengoperasikan alat tersebut, perawat melakukan instalasi terlebih dahulu terhadap alat tersebut. Ketika semua bagian-bagian dari alat tersebut sudah terpasang, perawat melakukan kalibrasi atau pengecekan sebelum alat benar-benar digunakan. Ketika alat tersebut diuji coba menggunakan tangan perawat dengan cara menutup lubang kateter, ternyata terdapat masalah pada alat tersebut, suction pump tidak dapat menghisap dan juga pada meter indikator tekanan tidak terlihat adanya pergerakan jarum. Apa penyebab dari trouble di atas?",
        options: ["a. Terdapat kebocoran pada slang", "b. Adanya kerusakan pada regulator pengatur", "c. Fuse sudah tidak dapat berfungsi", "d. Rusaknya filter suction pump", "e. Pemasangan klep terbalik dan kurang rapatnya menutup tabung"],
        answer: "e. Pemasangan klep terbalik dan kurang rapatnya menutup tabung"
    },
    {
        question: "Seorang perawat di ICU menanyakan kepada petugas kalibrasi tentang hasil kalibrasi infusion pump di mana kesalahan flow rate-nya tinggi, padahal infusion pump-nya tidak pernah rusak. Analisa apa yang harus disampaikan oleh petugas kalibrasi?",
        options: ["a. Menjelaskan bahwa kesalahan flow rate tinggi karena usia alat", "b. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh tinggi cairan infus", "c. Menjelaskan bahwa kesalahan flow rate tinggi karena suhu ruangan yang tidak sesuai", "d. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh infusion set yang digunakan", "e. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh jenis cairan yang digunakan"],
        answer: "d. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh infusion set yang digunakan"
    },
    {
        question: "Seorang elektromedis sedang melakukan tugas pokoknya yaitu menyusun rencana kerja tahunan pemeliharaan alat rontgen di instalasi radiologi. Dia melakukan pemeriksaan, pembersihan dan pengukuran secara berkala agar kondisi alat tersebut selalu terjaga dan menghasilkan luaran yang stabil. Jenis kategori pemeliharaan manakah yang dilakukan petugas tersebut?",
        options: ["a. Corrective maintenance", "b. Safety inspections", "c. System upgrade", "d. Image quality check", "e. Preventive maintenance"],
        answer: "e. Preventive maintenance"
    },
    {
        question: "Sebuah alat USG dilaporkan mengalami hasil cetak yang tidak normal, di mana hasil yang biasanya dominan hitam dengan objek cenderung putih, menjadi terbalik dengan objek yang berwarna putih. Apa tindakan yang dilakukan dengan hal tersebut?",
        options: ["a. Mengganti thermal head pada printer", "b. Mengganti jenis kertas yang digunakan", "c. Memindahkan input data gambar pada printer", "d. Mengubah pengaturan positif/negatif hasil cetak pada printer", "e. Mengganti kabel data printer"],
        answer: "d. Mengubah pengaturan positif/negatif hasil cetak pada printer"
    },
    {
        question: "Pada Waterbath apabila ada keluhan suhu chamber tidak sesuai dengan suhu setting. Sebagai teknisi, analisa kerusakannya adalah?",
        options: ["a. Air aqua pada reservoir kosong, rangkaian blower rusak", "b. Rangkaian Power Supply rusak, Switch ON/OFF rusak", "c. Sensor rusak", "d. Regulator humidity rusak.", "e. Gangguan pada: sensor, temperatur kontrol, rangkaian display, rangkaian blower"],
        answer: "e. Gangguan pada: sensor, temperatur kontrol, rangkaian display, rangkaian blower"
    },
    {
        question: "Lampu operasi tidak sama dengan lampu-lampu pada umumnya, karena lampu operasi harus memiliki syarat: tidak boleh panas dan bayangan pada objek, karena dapat mengganggu proses tindakan operasi. Untuk itu lampu operasi memakai lampu halogen. Hal yang perlu diperhatikan dalam penggantian lampu halogen adalah?",
        options: ["a. Lampu harus sama tinggi.", "b. Warna lampu halogen kuning.", "c. Posisi lensa okuler dan objektif harus pada posisi menyilang", "d. Mengatur posisi lampu.", "e. Lampu tidak boleh disentuh dengan tangan langsung"],
        answer: "e. Lampu tidak boleh disentuh dengan tangan langsung"
    },
    {
        question: "Saat ini untuk pemantauan janin menggunakan Electronic Fetal Monitoring (EFM) atau yang dikenal juga sebagai Cardiotocograph (CTG) dapat dihubungkan melalui Wi-Fi atau bluetooth. Sehingga alat ini memungkinkan klien melakukan monitoring di rumah dan data dikirim kepada tenaga kesehatan yang menangani, klien juga dapat berkonsultasi segera dengan tenaga kesehatan yang menangani. Apa kekurangan menggunakan alat tersebut?",
        options: ["a. Dapat digunakan pada membran yang masih intak", "b. Alat bantu visual fetal heart rate", "c. Mencatat fetal heart rate", "d. Dapat digunakan dalam beberapa stage persalinan", "e. Untuk kehamilan multiple, tekniknya lebih sulit"],
        answer: "e. Untuk kehamilan multiple, tekniknya lebih sulit"
    },
    {
        question: "Petugas kalibrasi pada saat melakukan kalibrasi centrifuge melihat indikator baterai pada alat tachometer mengalami penurunan. Tindakan apa yang harus dilakukan oleh petugas kalibrasi tersebut?",
        options: ["a. Mengukur tegangan pada baterai", "b. Menghentikan kalibrasi", "c. Menghentikan kalibrasi dan data yang digunakan adalah data yang terakhir", "d. Mengganti baterai dan melanjutkan kalibrasi", "e. Melanjutkan kalibrasi"],
        answer: "b. Menghentikan kalibrasi"
    },
    {
        question: "Seorang elektromedis mendapat tugas menyusun rencana kerja tahunan pemeliharaan alat fluoroscopy di instalasi radiologi. Dia melakukan kegiatan inspeksi kuratif yang terjadwal rutin setiap tahun. Apa sajakah yang dilakukan pada kegiatan tersebut?",
        options: ["a. Mengecek semua kondisi lampu indikator", "b. Mengecek akurasi nilai tegangan tabung (KVp).", "c. Mengecek audible dan visual alarm", "d. Mengecek kondisi kabel power", "e. Mengecek sistem pergerakan tube stand."],
        answer: "b. Mengecek akurasi nilai tegangan tabung (KVp)."
    },
    {
        question: "Seorang elektromedis sedang melakukan kajian pemanfaatan alat rontgen di rumah sakit. Alat tersebut harus memenuhi persyaratan proteksi radiasi, salah satunya adalah optimisasi. Apakah yang dimaksud pernyataan tersebut?",
        options: ["a. Dosis radiasi yang sesuai dengan kondisi pasien", "b. Dosis radiasi serendah mungkin untuk mencapai tujuan diagnostik.", "c. Paparan radiasi serendah mungkin yang dapat dicapai", "d. Harus dapat meningkatkan kualitas gambar yang dihasilkan", "e. Harus menerapkan teknik dan prosedur yang tepat"],
        answer: "b. Dosis radiasi serendah mungkin untuk mencapai tujuan diagnostik."
    },
    {
        question: "Pada sebuah ESU (Electrosurgical Unit) telah dianalisa bahwa alat tersebut mengalami kerusakan, yaitu elektroda tidak mengeluarkan HF. Tindakan apa yang harus dilakukan untuk mengatasi hal tersebut?",
        options: ["a. Mengecek adanya HF", "b. Cek elektroda dan modul pembangkit HF", "c. Cek kabel power supply", "d. Cek sistem grounding di jaringan kabel (terputus atau tidak)", "e. Cek nilai grounding yang tidak bagus"],
        answer: "b. Cek elektroda dan modul pembangkit HF"
    },
    {
        question: "Seorang teknisi melakukan penggantian lampu (source lamp) pada alat spektrofotometer. Apakah yang harus diperhatikan dan dilakukan terlebih dahulu?",
        options: ["a. Menyalakan alat.", "b. Melakukan kalibrasi", "c. Melakukan uji fungsi", "d. Membersihkan alat", "e. Mematikan alat dan melepaskan dari tegangan supply"],
        answer: "e. Mematikan alat dan melepaskan dari tegangan supply"
    },
    {
        question: "Seorang petugas kalibrasi melakukan kalibrasi infant incubator. Dari hasil pengukuran terlihat bahwa ada noise suara yang cukup tinggi. Apa yang harus dilakukan elektromedis tersebut?",
        options: ["a. Memindahkan infant incubator", "b. Menutupi infant incubator dengan selimut", "c. Menganggap wajar kalau noise tinggi", "d. Memastikan tidak ada suara dari luar", "e. Meyakini itu hasil yang sangat valid"],
        answer: "d. Memastikan tidak ada suara dari luar"
    },
    {
        question: "Hematology analyzer berfungsi untuk menghitung sel darah yaitu RBC, WBC, dan Trombosit. Apakah metode yang dipakai pada pengukuran tersebut?",
        options: ["a. Pemisahan unsur", "b. Fotometri", "c. Absorpsi", "d. Electrical impedance", "e. Laser scattering"],
        answer: "d. Electrical impedance"
    },
    {
        question: "Seorang radiografer di RS. Hayati mengeluhkan kepada elektromedis bahwa pada pemilihan teknik radiografi didapati waktu yang dibutuhkan mulai tombol ready ditekan sampai lampu indikator ready menyala lebih lama dari biasanya. Sebagai seorang elektromedis yang harus melakukan analisis kerusakan, bagian apa yang mungkin mengalami kerusakan?",
        options: ["a. Shutter.", "b. Lampu indikator ready.", "c. Rectifier.", "d. Timer radiografi.", "e. Standby resistor."],
        answer: "e. Standby resistor."
    },
    {
        question: "Seorang radiografer di suatu rumah sakit mengeluhkan nilai arus tabung yang selalu berubah ketika dilakukan pengaturan tegangan tabung. Ketika tegangan tabung dinaikkan atau diturunkan maka nilai arus tabung juga mengikuti. Analisis kerusakan yang mungkin terjadi pada pesawat rontgen tersebut adalah?",
        options: ["a. KV selector", "b. Line voltage compensator.", "c. mA regulator.", "d. Space charge compensator.", "e. Line voltage selector"],
        answer: "d. Space charge compensator."
    },
    {
        question: "Pengukuran sampel pada pH meter harus dilakukan sesuai dengan prosedur supaya hasilnya akurat. Agar alat tersebut siap digunakan untuk pengukuran maka harus dilakukan kegiatan kalibrasi internal. Apakah metode yang paling tepat dilakukan?",
        options: ["a. 1 point dengan 2 jenis buffer", "b. 1 point dengan buffer pH 4", "c. 1 point dan 2 point dengan semua jenis buffer", "d. 1 point atau 2 point dengan nilai buffer yang direkomendasikan", "e. 1 point dengan buffer pH 7"],
        answer: "d. 1 point atau 2 point dengan nilai buffer yang direkomendasikan"
    },
    {
        question: "Setelah melalui proses pengadaan barang dan pemasangan alat rontgen mobile, selanjutnya dilakukan manajemen aset pada alat tersebut. Cara pengkodean yang terbaik adalah?",
        options: ["a. Menggunakan QRCODE.", "b. Menggunakan ECRI atau SIMAK BMN.", "c. Menggunakan RFID.", "d. Menggunakan kode warna.", "e. Menggunakan barcode"],
        answer: "b. Menggunakan ECRI atau SIMAK BMN."
    },
    {
        question: "Seorang elektromedis bersama tim penerima barang sedang melakukan proses penerimaan peralatan radiologi yaitu sebuah unit digital radiography (DR). Penerimaan alat tersebut melalui pemeriksaan yang meliputi penilaian fisik dan kelengkapan alat, salah satu di antaranya adalah kelengkapan dokumen teknis yang terdiri dari certificate of origin (CoO) dan buku petunjuk (pengoperasian, servis, instalasi dan wiring diagram). Apakah yang dimaksud CoO pada kasus tersebut?",
        options: ["a. Surat kelengkapan buku petunjuk DR", "b. Sertifikat kalibrasi DR", "c. Surat keterangan asal DR", "d. Sertifikat pengujian DR", "e. Surat keterangan spesifikasi DR"],
        answer: "c. Surat keterangan asal DR"
    },
    {
        question: "Seorang elektromedis bersama petugas penyedia peralatan sedang melakukan uji fungsi general x-ray unit yang terpasang tetap di instalasi radiologi. Kegiatan tersebut dilakukan untuk mengetahui kinerja alat sesuai dengan standar keamanan dan standar dari pabrik. Bagaimanakah pelaksanaan kegiatan tersebut?",
        options: ["a. Pengujian pada komponen; kinerja output dan aspek keselamatan", "b. Pengujian pada hasil paparan radiasi dan kualitas gambar", "c. Pengujian hasil paparan radiasi pada pasien dan kualitas gambar", "d. Pengujian pada pasien setelah dilakukan uji keselamatan alat", "e. Pengujian pada kualitas gambar setelah dilakukan pemeriksaan pasien"],
        answer: "a. Pengujian pada komponen; kinerja output dan aspek keselamatan"
    },
    {
        question: "Seorang teknisi elektromedis harus mampu melakukan penempatan dan penyimpanan peralatan elektromedik. Syarat penempatan timbangan analitik adalah?",
        options: ["a. Tidak boleh terkena cahaya matahari secara langsung", "b. Harus ditempatkan di tempat yang miring dan di meja yang rapuh", "c. Diletakkan di ruangan yang terkena hembusan angin/kipas secara langsung", "d. Diletakkan di ruangan dengan suhu dingin/lembab", "e. Diletakkan di ruangan dengan suhu panas"],
        answer: "a. Tidak boleh terkena cahaya matahari secara langsung"
    },
    {
        question: "Seorang tenaga elektromedis telah melakukan perawatan dan pemeliharaan rutin pada alat Infant Warmer yang telah selesai dipakai untuk tindakan penanganan pada seorang bayi yang telah lahir. Alat Infant Warmer tersebut akan dipakai kembali besok pagi sesuai jadwal akan dilakukan persalinan intensif yang tercatat pada Ruang NICU. Manakah di bawah ini yang termasuk perawatan dasar termasuk pemeliharaan pada alat tersebut setelah selesai digunakan?",
        options: ["a. Melakukan kalibrasi alat setiap hari", "b. Mengganti Fuse baru setelah alat digunakan", "c. Menutup alat dengan kain pelindung", "d. Mengganti heater baru setiap selesai penggunaan alat", "e. Melepas kabel power dari sumber tegangan PLN jika alat sudah selesai digunakan"],
        answer: "e. Melepas kabel power dari sumber tegangan PLN jika alat sudah selesai digunakan"
    },
    {
        question: "Sebagai seorang tenaga elektromedis tentunya mengenal beberapa kegunaan peralatan-peralatan Life Support beserta fungsinya, dan timbulnya permasalahan akan dideteksi oleh sensor kemudian menginformasikan lewat alarm/bunyi buzzer. Di bawah ini adalah alarm yang akan berbunyi bilamana alat Syringe Pump mengalami masalah",
        options: ["a. Low pressure", "b. High temperature", "c. Low Temperature", "d. Low tidal volume", "e. Occlusion"],
        answer: "e. Occlusion"
    },
    {
        question: "Suatu alat EKG ditempatkan di ruang ICU. Semua aksesori dan kabel telah terpasang dengan baik. Setting alat sudah sesuai SOP, saat ditekan tombol start ternyata kertas EKG tidak keluar. Apakah yang harus dilakukan oleh seorang teknisi elektromedik untuk mengatasi masalah ini?",
        options: ["a. Periksa apakah kertasnya terpasang", "b. Periksa apakah motornya rusak", "c. Periksa apakah sekringnya putus", "d. Periksa dan ukur apakah sumber tegangan ada", "e. Periksa dan ukur apakah kabel power putus"],
        answer: "b. Periksa apakah motornya rusak"
    },
    {
        question: "Defibrilator termasuk jenis peralatan Life Support yang digunakan untuk memberikan energi kejut listrik kepada pasien sehingga mengaktifkan kembali aktivitas jantung pada pasien yang mengalami gangguan denyut jantung tidak stabil. Terdapat beberapa pemeliharaan pada alat Defibrilator tersebut. Manakah yang termasuk pemeliharaan rutin yang harus dilakukan pada alat Defibrilator tersebut?",
        options: ["a. Mengecek kabel pasien EKG", "b. Mengecek fungsi eksternal paddle", "c. Mengecek kabel power dan grounding", "d. Mengecek fungsi internal paddle", "e. Mengecek fungsi semua bagian alat sebelum digunakan"],
        answer: "e. Mengecek fungsi semua bagian alat sebelum digunakan"
    },
    {
        question: "Seorang perawat sedang menggunakan alat Infus Pump untuk tindakan penanganan pasiennya yang pasca menjalani operasi. Terjadi masalah pada alat tersebut yaitu terjadi occlusion alarm, kemudian kejadian tersebut dilaporkan kepada Kepala IPSRS. Langkah dan tindakan apakah yang dapat dilakukan oleh tenaga elektromedis untuk menangani permasalahan tersebut agar alat Infus Pump bisa digunakan kembali?",
        options: ["a. Mengecek keypad alat", "b. Melepas selang infus dan membersihkan sumbatannya sampai cairan infus benar-benar mengalir lancar", "c. Melakukan kalibrasi ulang pada alat.", "d. Mengganti sensor occlusion pada alat", "e. Mengecek Motor peristaltik"],
        answer: "b. Melepas selang infus dan membersihkan sumbatannya sampai cairan infus benar-benar mengalir lancar"
    },
    {
        question: "Centrifuge adalah alat yang digunakan memisahkan suatu partikel larutan berdasarkan berat jenis dengan memanfaatkan gaya sentrifugal. Dengan centrifuge, gaya sentrifugal yang ditimbulkan dari putaran motor lebih besar dibandingkan dengan?",
        options: ["a. Gaya Gesek", "b. Gaya Sentripetal", "c. Kecepatan Putaran", "d. Gaya Gravitasi", "e. Jari-jari tabung"],
        answer: "d. Gaya Gravitasi"
    },
    {
        question: "Saat sedang mengoperasikan Hematology Analyzer, alat tersebut memunculkan pesan error. Apakah yang seharusnya dilakukan oleh teknisi user?",
        options: ["a. Membongkar alat dan mengecek di bagian.", "b. Mengecek di menu aplikasi software dan membaca petunjuk pada service manual book selanjutnya melakukan sesuai petunjuk tersebut.", "c. Mengecek di menu aplikasi software dan membaca petunjuk pada service manual book.", "d. Menghubungi pihak supplier", "e. Membongkar alat dan mengecek pada bagian sesuai pesan error"],
        answer: "b. Mengecek di menu aplikasi software dan membaca petunjuk pada service manual book selanjutnya melakukan sesuai petunjuk tersebut."
    },
    {
        question: "Pada sebuah Rumah Sakit Umum, sering kita jumpai peralatan Ventilator pada ruang Intensive Care Unit (ICU), di mana ruangan ini merupakan tempat perawatan yang membutuhkan perhatian khusus dan ekstra juga tenaga medisnya baik tenaga Dokter, Perawat juga Tenaga Elektromedis yang ahli di bidang tersebut. Apa yang termasuk tujuan penggunaan alat Ventilator secara general di bawah ini?",
        options: ["a. Membantu terhindarnya seseorang dari kematian", "b. Membantu meningkatkan volume paru-paru", "c. Membantu tekanan udara dalam tubuh", "d. Membantu stabilisasi ruang dada", "e. Membantu mencegah sesak napas"],
        answer: "b. Membantu meningkatkan volume paru-paru"
    },
    {
        question: "Seorang elektromedis bersama-sama dengan radiographer dan petugas penyedia peralatan radiologi sedang melakukan uji coba computed radiography (CR) yang terpasang di instalasi radiologi. Uji coba alat tersebut dilakukan untuk mengetahui kinerja alat sesuai dengan standar keamanan dan pelayanan radiologi. Bagaimanakah pelaksanaan pada kasus tersebut?",
        options: ["a. Pengujian pada pasien sebelum dilakukan uji kinerja alat", "b. Pengujian pada kinerja output; keselamatan listrik dan radiasi", "c. Pengujian pada kinerja output; keselamatan radiasi; listrik dan mekanik", "d. Pengujian pada pasien setelah dilakukan uji fungsi", "e. Pengujian pada komponen; kinerja output dan aspek keselamatan"],
        answer: "d. Pengujian pada pasien setelah dilakukan uji fungsi"
    },
    {
        question: "Sebuah Dental Unit dilaporkan rusak dengan keluhan tidak dapat digunakan untuk menghisap, sedang fungsi lainnya berfungsi dengan baik. Apakah langkah awal yang dilakukan?",
        options: ["a. Memeriksa saluran air", "b. Memeriksa saluran buang", "c. Memeriksa handpiece", "d. Memeriksa saluran angin", "e. Memeriksa valve di rangkaian control"],
        answer: "d. Memeriksa saluran angin"
    },
    {
        question: "Suction pump banyak digunakan pada saat kegiatan operasi di ruang bedah yaitu untuk menghisap cairan pada pasien. Seorang user sedang mengoperasikan suction pump. Suction pump tersebut sudah terhubung dengan sumber tegangan PLN dan saklar sudah pada posisi ON. Indikator tegangan tidak menyala sehingga alat gagal untuk dioperasikan. Penyebabnya adalah....",
        options: ["a. Tegangan yang putus atau kesalahan listrik", "b. Kebocoran pada tabung penghisap", "c. Pegangan lepas", "d. Katup pada suction pump tersumbat", "e. Karet penutup di vacuum regulator telah usang"],
        answer: "a. Tegangan yang putus atau kesalahan listrik"
    },
    {
        question: "Pada pesawat rontgen dijumpai kendala berupa tidak munculnya bayangan laten pada film saat dilakukan exposure. Pengecekan yang dilakukan oleh elektromedis didapati bahwa trafo filamen bekerja normal. Push button ready dan exposure juga bekerja normal. Apa tindakan yang harus dilakukan oleh tenaga elektromedis yang menangani kendala tersebut?",
        options: ["a. Mengecek trafo tegangan tinggi", "b. Mengecek line voltage compensator", "c. Mengecek auto trafo", "d. Mengecek stabilisator", "e. Mengecek space charge compensator"],
        answer: "a. Mengecek trafo tegangan tinggi"
    },
    {
        question: "Melakukan pengukuran dengan larutan standar adalah salah satu tahapan pengoperasian alat spektrofotometer. Apa tujuan dari kegiatan tersebut?",
        options: ["a. Kalibrasi internal.", "b. Nilai absorban sama dengan nol.", "c. Inkubasi sampel.", "d. Zero adjustment.", "e. Menstabilkan tegangan lampu."],
        answer: "a. Kalibrasi internal."
    },
    {
        question: "Berdasarkan analisa kerusakan terhadap alat Suction Pump Portable yang mengalami kurangnya daya hisap, sedangkan kondisi aksesori seperti selang dan botol penampungan dalam keadaan normal. Maka untuk mengatasi hal tersebut, tindakan apa yang dilakukan. Tindakan perbaikan yang harus dilakukan?",
        options: ["a. Mengganti selang dengan yang baru", "b. Memeriksa klep hisap & klep buang", "c. Mengganti Filter", "d. Mengganti oli", "e. Overhaul"],
        answer: "b. Memeriksa klep hisap & klep buang"
    },
    {
        question: "Seorang perawat melaporkan permasalahan pada alat Infant Warmer yang akan digunakan untuk tindakan terhadap bayi pasca dilahirkan. Pada display alat menunjukkan suhu ruang yang terbaca stabil sesuai setting suhu alat 35°C. Permasalahan terjadi setelah 25 menit berlalu, tiba-tiba pada display menunjukkan nilai bacaan suhu ruang lebih tinggi dari nilai setting suhu dan terjadi bunyi buzzer alarm. Sebagai tenaga elektromedis, langkah awal untuk menganalisa kerusakan yang terdapat pada alat Infant Warmer tersebut adalah",
        options: ["a. Kerusakan pada board", "b. Display tidak mendapatkan inputan", "c. Tombol setting tidak berfungsi", "d. Kerusakan pada sensor", "e. Tidak ada inputan yang masuk ke display"],
        answer: "d. Kerusakan pada sensor"
    },
    {
        question: "Faktor penting dalam pemasangan atau mempertahankan traksi yaitu...",
        options: ["a. Tali utama yaitu biasanya dipasang pada rangka sebaiknya menimbulkan gaya tarik yang segaris dengan sumbu panjang normal tulang yang patah", "b. Alat-alat penyongkongnya sebaiknya seimbang dengan pemberat untuk menjamin agar reduksi dapat dipertahankan secara stabil", "c. Tulang yang menonjol harus diberi perhatian khusus dengan memberikan lapisan secukupnya", "d. Tali traksi sebaiknya dapat bergerak bebas melalui kerekan", "e. Kontraksi harus dipertahankan agar traksi tetap efektif."],
        answer: "a. Tali utama yaitu biasanya dipasang pada rangka sebaiknya menimbulkan gaya tarik yang segaris dengan sumbu panjang normal tulang yang patah"
    },
    {
        question: "Sebuah alat Suction Pump Unit mengalami daya hisap yang tidak sesuai dengan pressure meter penunjukan pada indikator, sedangkan kondisi Motor hisap terkoreksi normal. Hasil pengujian menunjukkan: Pada pressure meter, jarum indikator menunjukkan tekanan yang besar, namun kemampuan daya hisap kecil. Sesuai dengan blok diagram berikut, bagian apa dari unit yang mengalami masalah. Diagram blok diagram aliran hisap. Pada bagian apakah yang mengalami kerusakan?",
        options: ["a. Filter", "b. Tabung penampungan", "c. Sumber Cairan", "d. Motor hisap", "e. Meter indikator hisap"],
        answer: "e. Meter indikator hisap"
    },
    {
        question: "Seorang elektromedis sedang melakukan kajian pemanfaatan alat rontgen di rumah sakit. Alat tersebut harus memenuhi aspek keselamatan, utamanya adalah keselamatan radiasi. Apakah tujuan aspek keselamatan tersebut?",
        options: ["a. Mengurangi pengaruh radiasi pada pasien dan pekerja radiasi", "b. Melindungi pasien, pekerja radiasi dan masyarakat", "c. Melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup", "d. Mengurangi pengaruh radiasi pada pasien, pekerja radiasi dan lingkungan hidup", "e. Melindungi pasien, pekerja radiasi dan lingkungan hidup"],
        answer: "c. Melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"
    },
    {
        question: "Dental unit adalah suatu alat yang dipakai di ruang poli gigi untuk membantu menegakkan diagnosa dan menegakkan terapi pada pasien yang dalam pengoperasiannya membutuhkan udara dan air. Apa pertimbangan Anda agar tekanan udara alat Dental Gigi tersebut dapat berjalan dengan baik?",
        options: ["a. Pemilihan sumber tegangan yang sesuai", "b. Pemilihan bangunan untuk ruang gigi yang baik", "c. Pemilihan kompresor yang baik", "d. Pemilihan grounding yang baik", "e. Mempertimbangkan tidak terjadinya kebocoran arus"],
        answer: "c. Pemilihan kompresor yang baik"
    },
    {
        question: "Seorang pelaksana kalibrasi, sedang melaksanakan tugasnya mengkalibrasi alat centrifuge. Pada alat tersebut tidak ada nilai yang tertera pada pengaturan kecepatan hanya ada minimal dan maksimal. Apa yang harus dilakukan oleh petugas kalibrasi tersebut?",
        options: ["a. Pada lembar kerja dicatat minimal dan maksimal", "b. Menguji kelistrikannya saja", "c. Menyatakan alat tersebut tidak layak untuk dikalibrasi", "d. Memberi label merah karena membahayakan", "e. Meminta buku manual kepada pelanggan untuk mencari nilai kecepatannya"],
        answer: "e. Meminta buku manual kepada pelanggan untuk mencari nilai kecepatannya"
    },
    {
        question: "Sebagai tenaga pelaksana kalibrasi, Anda mendapatkan hasil perekaman lebar pulsa pada setting ECG Simulator 120 bpm adalah 25 mm. Hasil perhitungan Anda seharusnya adalah 12.5 mm. ECG Simulator telah terkalibrasi dan kecepatan kertas yang sebelumnya diperiksa dalam keadaan baik dan memenuhi. Apakah langkah pemeriksaan yang Anda pastikan pertama kali untuk mengatasi masalah di atas?",
        options: ["a. Memastikan setting kertas ECG 25 mm/s", "b. Memastikan setting kertas ECG 50 mm/s", "c. Memastikan setting kertas ECG 10 mm/s", "d. Memastikan setting kertas ECG 100 mm/s", "e. Memastikan setting kertas ECG 5 mm/s"],
        answer: "a. Memastikan setting kertas ECG 25 mm/s"
    },
    {
        question: "Salah satu bagian pemeliharaan preventif adalah pemantauan, dengan pemantauan diharapkan peralatan medik dalam kondisi siap pakai. Untuk menyusun SOP pemeliharaan preventif, kita harus mengetahui hal-hal. Yang tidak termasuk dalam pemantauan adalah",
        options: ["a. Pemantauan kinerja alat.", "b. Pemantauan fisik alat.", "c. Pemantauan kondisi lingkungan.", "d. Pemantauan pengguna alat", "e. Pemantauan/pengukuran aspek pengukuran."],
        answer: "d. Pemantauan pengguna alat"
    },
    {
        question: "Ruang operasi membutuhkan beberapa peralatan yang spesifik. Oleh karena itu pada saat perencanaan kamar operasi dibutuhkan informasi teknis dari elektromedis agar peralatan yang dipilih sesuai dengan kebutuhan dan fungsinya. Pilihlah paket peralatan kesehatan di bawah ini yang diperlukan untuk perencanaan kebutuhan peralatan untuk ruang operasi",
        options: ["a. ESWL, USG, ECG, suction pump, Electro Surgical Unit, Mobile X-ray, CT Scan, Electro Surgical Unit", "b. Ventilator ICU, patient bed, tiang infuse, patient monitor, suction pump, Electro Surgical Unit", "c. Mobile X-ray, CT Scan, Mamography, Lampu Operasi, mesin Anaesthesi, Electro Surgical Unit", "d. Lampu Operasi, mesin Anaesthesi, meja operasi, patient monitor, suction pump, Electro Surgical Unit", "e. Autoclave, Sterilisator, Oven, Ventilator ICU, patient bed, Mobile X-ray, CT Scan, Electro Surgical Unit"],
        answer: "d. Lampu Operasi, mesin Anaesthesi, meja operasi, patient monitor, suction pump, Electro Surgical Unit"
    },
    {
        question: "Seorang elektromedis melakukan kegiatan kalibrasi pada alat Defibrilator. Sesuai lembar kerja, setiap titik setting harus diambil 6 kali pengukuran. Pada saat melakukan pengukuran yang ke-3 pada setting terakhir, alat ESU menjadi panas. Sebagai seorang elektromedis, tindakan apa yang tepat yang harus dilakukan?",
        options: ["a. Melaporkan ke pihak rumah sakit bahwa alat tidak bisa dikalibrasi", "b. Menunggu sebentar kemudian dilakukan kalibrasi lagi dari awal", "c. Mengambil data di lain hari", "d. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili", "e. Memberikan Label Merah pada alat"],
        answer: "d. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili"
    },
    {
        question: "Rumah sakit A membeli alat USG. Seorang tenaga elektromedis ditugaskan untuk membuat standard operational procedure (SOP). Tindakan apa yang tepat oleh seorang tenaga elektromedis sebelum membuat SOP yang baik?",
        options: ["a. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat", "b. Melakukan uji fungsi", "c. Membaca wiring diagram dan blok diagram alat tersebut", "d. Membuat SOP sendiri sesuai dengan pengalaman yang dimiliki", "e. Melakukan pengumpulan data tentang alat tersebut dan spesifikasinya"],
        answer: "a. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat"
    },
    {
        question: "Seorang radiografer RS. Kasih Ibu melihat percikan api di dalam tabung ketika dilakukan pemotretan terhadap pasien. Seluruh faktor eksposi telah diatur sesuai dengan standar namun percikan api tetap terjadi. Sebagai seorang elektromedis yang harus melakukan analisis, kerusakan apa yang terjadi pada pesawat rontgen tersebut?",
        options: ["a. Filamen putus.", "b. Rotating anoda tidak berputar.", "c. Permukaan target yang telah aus.", "d. Kebocoran tube housing.", "e. Kerusakan pada rectifier."],
        answer: "d. Kebocoran tube housing."
    },
    {
        question: "Pelaksana kalibrasi dari perusahaan kalibrasi PT ASM menerima permintaan dari rumah sakit, bahwa metode kerja yang digunakan diminta bukan dari perusahaan tapi menggunakan metode yang digunakan berasal dari Rumah Sakit. Sebagai pelaksana kalibrasi, apa yang harus dilakukan?",
        options: ["a. Menerima permintaan dan mengerjakan sesuai metode kerja dari Rumah Sakit", "b. Menolak melakukan kalibrasi dan dibuat berita acara", "c. Menolak melakukan kalibrasi dan melaporkan kepada atasan", "d. Menerima permintaan dan mengerjakan sesuai metode kerja dari Rumah Sakit beserta berita acara", "e. Mencoret dari daftar pekerjaan kalibrasi"],
        answer: "d. Menerima permintaan dan mengerjakan sesuai metode kerja dari Rumah Sakit beserta berita acara"
    },
    {
        question: "Seorang dokter spesialis kebidanan komplain kepada tenaga elektromedis tentang hasil gambar dari USG ternyata tidak sesuai dengan gambar yang dihasilkan banyak udara yang terekam. Langkah pertama apakah yang dilakukan oleh tenaga elektromedis?",
        options: ["a. Memeriksa posisi objek ada airnya tidak", "b. Memeriksa objek bergerak-gerak apa tidak", "c. Memeriksa Transducer pakai aquasonic gel", "d. Memeriksa Transducer bekerja apa", "e. Memeriksa dayanya cukup apa tidak"],
        answer: "c. Memeriksa Transducer pakai aquasonic gel"
    },
    {
        question: "Terjadi perbedaan pengukuran tekanan darah seorang pasien pada saat menggunakan sphygmomanometer dibandingkan dengan pengukuran tekanan darah menggunakan Non Invasive Blood Pressure (NIBP). Langkah pertama yang dilakukan oleh tenaga elektromedis?",
        options: ["a. Melakukan pengecekan interferensi frekuensi", "b. Melakukan pengukuran Arus Bocor", "c. Melakukan pemeriksaan catu daya listrik", "d. Melakukan pemeriksaan arde (Grounding)", "e. Melakukan kalibrasi"],
        answer: "e. Melakukan kalibrasi"
    },
    {
        question: "ESU adalah suatu alat bedah dengan memanfaatkan arus listrik frekuensi tinggi untuk membelah, membekukan dan mengeringkan kulit. Pada satu peristiwa, ESU pada elektroda panas namun tidak dapat digunakan untuk membelah, membekukan dan mengeringkan. Apa yang Anda lakukan sebagai teknisi elektromedis?",
        options: ["a. Mengecek rangkaian kontrol", "b. Mengecek thermofuse", "c. Mengecek rangkaian transducer", "d. Mengecek rangkaian osilator", "e. Mengecek rangkaian power supply"],
        answer: "d. Mengecek rangkaian osilator"
    },
    {
        question: "Sumber cahaya yang digunakan pada alat AAS dapat memancarkan panjang gelombang tertentu. Apakah nama sumber cahaya tersebut?",
        options: ["a. Hollow Cathode Lamp", "b. Lampu halogen", "c. Sinar UV", "d. LED", "e. Photo diode"],
        answer: "a. Hollow Cathode Lamp"
    },
    {
        question: "Sebelum melakukan pemeriksaan sampel pada alat spektrofotometer, dilakukan adjustment. Apa larutan yang digunakan pada kegiatan tersebut?",
        options: ["a. Air", "b. Larutan buffer", "c. Reagen blanko", "d. Reagen standar", "e. Larutan asam/basa/garam."],
        answer: "c. Reagen blanko"
    },
    {
        question: "Seorang elektromedis sedang melakukan kalibrasi bedside monitor. Saat mengukur nilai saturasi oksigen di bedside monitor, selalu muncul alarm yang sangat mengganggu. Apa yang harus dilakukan oleh elektromedis tersebut?",
        options: ["a. Menyatakan bedside monitor tidak laik", "b. Meminta ke pihak perawat untuk mengganti finger sensor", "c. Melakukan perbaikan finger sensor", "d. Mengecek posisi finger sensor di alat kalibrator", "e. Mematikan batas atas dan batas bawah alarm"],
        answer: "e. Mematikan batas atas dan batas bawah alarm"
    },
    {
        question: "Pada pesawat EKG recording dengan sistem stylus, dijumpai permasalahan pada hasil pemeriksaan pada kertas ECG yang tidak tampak jelas. Apa analisis kerusakan yang mungkin terjadi pada pesawat EKG tersebut?",
        options: ["a. Adjustment sensitivity", "b. Adjustment pada thermal circuit", "c. Motor kertas terlalu cepat", "d. Adjustment amplifier", "e. Elektrode kotor"],
        answer: "b. Adjustment pada thermal circuit"
    },
    {
        question: "Hematology analyzer selain berfungsi untuk menghitung sel darah juga dapat mengukur kadar hemoglobin (Hb). Apakah metode yang dipakai pada pengukuran tersebut?",
        options: ["a. Pemisahan unsur", "b. Laser scattering", "c. Electrical impedance", "d. Fotometri", "e. Absorpsi"],
        answer: "d. Fotometri"
    },
    {
        question: "Pada perbaikan pesawat rontgen konvensional ditemukan bahwa komponen standby resistor berwarna hitam seperti terbakar sehingga nilai hambatannya menjadi naik. Apa pengaruh dari kerusakan komponen tersebut?",
        options: ["a. Pemanasan filamen menjadi lebih lama", "b. Tidak terjadi pemanasan filamen", "c. Arus tabung (mA) menjadi lebih kecil", "d. Tombol ready menjadi tidak berfungsi", "e. Tegangan tabung (KV) menjadi lebih kecil"],
        answer: "a. Pemanasan filamen menjadi lebih lama"
    },
    {
        question: "Suatu alat autoclave (steam sterilisator) di RSU Dr. Soebandi sedang akan dioperasikan (ON). Lampu indikator alat ON sudah menyala, tekanan, timer dan suhu sudah diatur, tombol start sudah ditekan, suhu mengalami kenaikan dan timer berjalan saat suhu tercapai. Namun saat timer berjalan, suhu mengalami penurunan dan tidak kunjung naik kembali ke suhu setting. Apakah tindakan perbaikan yang harus dilakukan?",
        options: ["a. Cek display suhu setting, jika suhu setting berubah maka kembalikan sesuai setting awal", "b. Cek microswitch (SHG) jika tidak berfungsi maka ganti microswitch (SHG)", "c. Cek pengukur tekanan, apabila rusak maka ganti", "d. Cek tegangan sumber apakah sesuai dengan spesifikasi yang dibutuhkan alat atau tidak. Jika tidak maka cari tegangan sumber yang sesuai", "e. Cek timer, apabila tidak berfungsi maka gantilah timer-nya"],
        answer: "b. Cek microswitch (SHG) jika tidak berfungsi maka ganti microswitch (SHG)"
    },
    {
        question: "Berikut ini adalah kegiatan pemeliharaan pada Ultrasound Terapi periode frekuensi tahunan sesuai dengan rencana kinerja tahunan pemeliharaan alat elektromedik…",
        options: ["a. Mengecek dan memeriksa lampu indikator", "b. Melakukan kalibrasi dan uji kinerja alat", "c. Mengecek selector tombol switch", "d. Mengecek dan membersihkan seluruh bagian alat", "e. Mengecek sistem catu daya"],
        answer: "a. Mengecek dan memeriksa lampu indikator"
    },
    {
        question: "Mikroskop cahaya merupakan alat yang digunakan untuk melihat bagian-bagian yang sangat kecil pada suatu benda yang tidak dapat dilihat dengan mata telanjang. User mengeluhkan penglihatan pada mikroskop cahaya kurang jelas padahal sudah dibersihkan lensanya dan masih bagus. Apakah yang harus Saudara lakukan untuk menangani alat tersebut?",
        options: ["a. Mengganti lampu mikroskop.", "b. Mengganti lensa objektif.", "c. Mengatur kondensor.", "d. Melakukan setting ulang posisi lensa.", "e. Mengganti lensa okuler."],
        answer: "a. Mengganti lampu mikroskop."
    },
    {
        question: "Termasuk peralatan medis yang digunakan untuk penanganan pada pasien bayi yang mengalami permasalahan pada pernafasannya, contohnya pada alat bubble CPAP. Bagian manakah pada Bubble CPAP yang berfungsi sebagai pemberi kehangatan di bawah ini?",
        options: ["a. Generator peep", "b. O2 blend", "c. Chamber humidifier", "d. Breathing sirkuit", "e. Sensor suhu"],
        answer: "c. Chamber humidifier"
    },
    {
        question: "Heater merupakan komponen penting pada alat Waterbath. Untuk memelihara heater pada Waterbath supaya tidak rusak sebaiknya dilengkapi dengan?",
        options: ["a. Kontrol suhu", "b. Sensor level air", "c. Kontrol suhu dan waktu", "d. blower", "e. Kontrol waktu"],
        answer: "b. Sensor level air"
    },
    {
        question: "Berikut ini merupakan jenis mikroskop yang diklasifikasikan berdasarkan konstruksi dan kegunaannya. Yang merupakan jenis mikroskop yang diklasifikasikan berdasarkan konstruksi dan kegunaannya, kecuali mikroskop?",
        options: ["a. Elektron", "b. Stereo", "c. Metalurgi", "d. Klinik", "e. Biologis"],
        answer: "d. Klinik"
    },
    {
        question: "Cahaya tampak adalah salah satu sumber cahaya yang digunakan pada spektrofotometer. Berapakah panjang gelombangnya?",
        options: ["a. 780-3000 nm", "b. 200-280 nm", "c. 380-780 nm", "d. 10-200 nm", "e. 3000-20.000 nm"],
        answer: "c. 380-780 nm"
    },
    {
        question: "Untuk peningkatan kinerja alat, maka langkah yang dilakukan adalah pemeliharaan alat secara berkala. Sebutkan langkah apa saja untuk pemeliharaan alat Hematology Analyzer?",
        options: ["a. Cek fungsi-fungsi tombol, bersihkan alat, cek fungsi liquid syringe, bersihkan tombol.", "b. Bersihkan aspiration needle, cek fungsi liquid syringe, cek aspiration needle, bersihkan", "c. Cek fungsi-fungsi tombol, bersihkan aspiration needle, bersihkan tombol, bersihkan alat", "d. Cek fungsi-fungsi tombol, bersihkan aspiration needle, cek fungsi liquid syringe", "e. Cek fungsi-fungsi tombol, bersihkan aspiration needle, cek fungsi liquid syringe, bersihkan alat"],
        answer: "e. Cek fungsi-fungsi tombol, bersihkan aspiration needle, cek fungsi liquid syringe, bersihkan alat"
    },
    {
        question: "Seorang dosen menunjukkan jenis-jenis elektrode yang bersifat induktif pada peralatan Diathermy. Sebutkan jenis-jenis elektrode tersebut?",
        options: ["a. Elektrode Bantalan, Monode, dan Minode.", "b. Elektrode Piringan, Elektrode khusus, dan Monode", "c. Elektrode Bantalan, Elektrode piringan dan elektrode khusus", "d. Elektrode Kabel, Elektrode Bantalan, dan elektrode piringan.", "e. Elektrode kabel, Monode, dan Diplode"],
        answer: "e. Elektrode kabel, Monode, dan Diplode"
    },
    {
        question: "Seorang perawat merasa tidak nyaman melihat perilaku tenaga elektromedis dalam hal memberikan pelayanan pemeliharaan alat baby inkubator, karena alat tersebut kurang mendapatkan perawatan yang memadai. Sehingga dilaporkan ke atasannya. Tindakan apa yang akan dilakukan oleh kepala Instalasi Pemeliharaan Sarana Rumah Sakit?",
        options: ["a. Menegur secara lisan kepada tenaga elektromedis", "b. Memberi sanksi terhadap tenaga elektromedis", "c. Menegur secara tertulis tenaga elektromedis", "d. Menegur secara tertulis dan melakukan pembinaan", "e. Menegur keras kepada tenaga elektromedis"],
        answer: "a. Menegur secara lisan kepada tenaga elektromedis"
    },
    {
        question: "Rumah Sakit berencana melakukan pengadaan peralatan endoskopi untuk melengkapi peralatan ruang bedah. Alat sterilisasi manakah yang digunakan untuk mensterilkan fiber optik endoskopi?",
        options: ["a. Autoclave", "b. Oven", "c. Cairan Desinfektan", "d. Sterilisator basah", "e. Sterilisator kering"],
        answer: "c. Cairan Desinfektan"
    },
    {
        question: "Pada pemakaian alat Ventilator, set TV 600mL, RR 12, I:E Ratio 1:2, FiO2 80%, PEEP 5, error pada display Low gas supply. Bagaimana mengatasi masalah tersebut?",
        options: ["a. Set Oxygen blender ke ratio 50%", "b. Set Alarm Setting, Pindahkan mode ventilator ke CPAP dan set Oxygen blender ke ratio 50 %", "c. Periksa Tekanan supply udara tekan (Air) dan Oxygen, tambahkan tekanan gas tersebut", "d. Pindahkan mode ventilator ke CPAP", "e. Matikan alarm dengan menekan tombol reset, Set Oxygen blender ke ratio 50%."],
        answer: "c. Periksa Tekanan supply udara tekan (Air) dan Oxygen, tambahkan tekanan gas tersebut"
    },
    {
        question: "Rumah Sakit Anda melakukan pengadaan alat kesehatan baru berupa sebuah Sphygmomanometer. Kelengkapan apakah yang harus ada di Sphygmomanometer?",
        options: ["a. Manset", "b. Stetoskop", "c. Y Konektor", "d. Alkohol", "e. Air raksa"],
        answer: "a. Manset"
    },
    {
        question: "Autoclave sebagai alat pemanas tertutup yang digunakan untuk mensterilisasi suatu benda menggunakan uap bersuhu dan bertekanan tinggi. Alat ini harus melalui pengecekan bertahap sebelum digunakan. Jika pada autoclave terjadi kerusakan saat mematikan pemasokan uap, apa yang harus dilakukan oleh seorang teknisi?",
        options: ["a. Memastikan alat sudah terhubung pada sumber PLN", "b. Memeriksa timer yang dapat diprogram ON/OFF pada paket kontrol utilitas", "c. Memeriksa elemen, berfungsi atau tidak", "d. Memeriksa termostat yang terdapat pada Autoclave", "e. Memeriksa fuse yang terdapat pada Autoclave"],
        answer: "b. Memeriksa timer yang dapat diprogram ON/OFF pada paket kontrol utilitas"
    },
    {
        question: "Seorang radiografer datang ke IPSRS melaporkan bahwa alat rontgen tidak bisa dilakukan ekspos. Setelah dilakukan pemeriksaan, ternyata keping anoda tidak dapat berputar. Bagaimanakah langkah awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek catu daya pada keping anoda", "b. Cek catu daya pada driver ekspos", "c. Cek catu daya rangkaian ekspos", "d. Cek catu daya pada primer HTT", "e. Catu daya pada stator"],
        answer: "e. Catu daya pada stator"
    },
    {
        question: "Seorang perawat merasa tidak nyaman dengan perilaku tenaga elektromedis dalam hal memberikan pelayanan pelatihan pengoperasian alat baby inkubator karena berkali-kali alat tersebut kurang mendapatkan perawatan yang memadai. Tindakan apa yang akan dilakukan oleh kepala Instalasi Pemeliharaan Sarana Rumah Sakit?",
        options: ["a. Menegur secara lisan kepada tenaga elektromedis", "b. Memberi sanksi terhadap tenaga elektromedis", "c. Menegur secara tertulis dan melakukan pembinaan", "d. Menegur secara tertulis tenaga elektromedis", "e. Menegur keras kepada tenaga elektromedis"],
        answer: "c. Menegur secara tertulis dan melakukan pembinaan"
    },
    {
        question: "Pada ruangan OK sebuah rumah sakit akan mengadakan sebuah operasi laparoscopy. Sebagai seorang elektromedis diminta untuk menyiapkan alat bedah yang tepat adalah",
        options: ["a. Catter", "b. Elektro Surgery Unit", "c. Harmonik scapel", "d. Pisau bedah", "e. Gunting Bedah"],
        answer: "c. Harmonik scapel"
    },
    {
        question: "Sebuah alat inkubator yang digunakan untuk terapi di suatu rumah sakit, ternyata suhu udara di dalam alat tersebut tidak sesuai dengan kebutuhan suhu bayi yang seharusnya. Langkah apa yang dilakukan untuk menangani hal tersebut?",
        options: ["a. Melakukan pemeriksaan rangkaian heater/thermostat.", "b. Melakukan pemeriksaan, pengukuran, penggantian spare part heater/thermostat", "c. Melakukan pemeriksaan seluruh rangkaian pada inkubator", "d. Melakukan pemeriksaan catu daya listrik inkubator", "e. Melakukan pemeliharaan rutin dan kalibrasi agar suhu heater/thermostat sesuai dengan standar"],
        answer: "a. Melakukan pemeriksaan rangkaian heater/thermostat."
    },
    {
        question: "Suction pump banyak digunakan pada saat kegiatan operasi di ruang bedah yaitu untuk menghisap cairan pada pasien. Seorang user sedang mengoperasikan suction pump. Suction pump tersebut sudah terhubung dengan sumber tegangan PLN dan saklar sudah pada posisi ON. Indikator tegangan tidak menyala sehingga alat gagal untuk dioperasikan. Penyebabnya adalah....",
        options: ["a. Katup pada suction pump tersumbat", "b. Pegangan lepas", "c. Tegangan yang putus atau kesalahan listrik", "d. Karet penutup di vacuum regulator telah usang", "e. Kebocoran pada tabung penghisap"],
        answer: "c. Tegangan yang putus atau kesalahan listrik"
    },
    {
        question: "Peralatan Diathermy yang berada pada ruang fisioterapi memiliki radiasi frekuensi tinggi cukup besar yang dapat mempengaruhi tubuh dan peralatan diagnostik lainnya. Apa yang diperlukan untuk meminimalisasi efek radiasi tersebut?",
        options: ["a. Tembok yang tebal", "b. Tembok yang dilapisi Timbal", "c. Sangkar Faraday", "d. Pemberian peredam pada tembok", "e. Filter aktif pada panel listriknya"],
        answer: "c. Sangkar Faraday"
    },
    {
        question: "Dokter bedah di suatu rumah sakit hendak melakukan pembedahan pada seorang pasien di ruang operasi menggunakan Electrosurgery Unit (ESU). ESU yang dioperasikan menggunakan mode monopolar. Namun ketika proses pembedahan berlangsung, terdapat arus bocor pada elektroda. Langkah pemeriksaan apakah yang sebaiknya dilakukan oleh pihak Instalasi Pemeliharaan Sarana Medik (IPS) Rumah Sakit?",
        options: ["a. Memastikan fuse masih bekerja", "b. Memeriksa masalah sambungan kabel elektroda", "c. Melakukan pengukuran tegangan dari jala-jala PLN", "d. Memeriksa catu daya yang didapat sesuai spesifikasi alat", "e. Memastikan elektroda ground terpasang"],
        answer: "e. Memastikan elektroda ground terpasang"
    },
    {
        question: "Pada sebuah ESU (Electrosurgical Unit) telah dianalisa bahwa alat tersebut mengalami kerusakan, yaitu elektroda tidak mengeluarkan HF. Tindakan apa yang harus dilakukan untuk mengatasi hal tersebut?",
        options: ["a. Cek sistem grounding di jaringan kabel (terputus atau tidak)", "b. Cek elektroda dan modul pembangkit HF", "c. Cek kabel power supply", "d. Cek nilai grounding yang tidak bagus", "e. Mengecek adanya HF"],
        answer: "b. Cek elektroda dan modul pembangkit HF"
    },
    {
        question: "Pada pengoperasian pesawat panoramic dental X-ray, setelah kolimasi penyinaran pada pasien dilakukan dan faktor eksposure ditentukan. Tiba saatnya melakukan eksposure namun pada saat hand switch ditekan untuk melaksanakan eksposure, gantry panoramic tidak dapat berputar. Apa penyebab gantry panoramic tidak dapat berputar pada kasus di atas?",
        options: ["a. Lampu kolimasi mati", "b. Tabung X-ray rusak", "c. Kaset untuk film belum dimasukkan pada tempatnya", "d. Filamen pada tabung sinar X putus", "e. Pesawat panoramic dental belum dihidupkan"],
        answer: "b. Tabung X-ray rusak"
    },
    {
        question: "Pada alat suction pump pada sebuah rumah sakit dilaporkan terjadi rembesan cairan di sekitar body alat. Analisa awal sebagai seorang elektromedis adalah",
        options: ["a. Selang penghubung tidak rapat", "b. Terjadi kerusakan pada fuse", "c. Perlu dikalibrasi ulang", "d. Motor tidak bekerja dengan maksimal", "e. Daya tidak sesuai spesifikasi"],
        answer: "a. Selang penghubung tidak rapat"
    },
    {
        question: "Pada alat doppler, frekuensi detak jantung janin lebih tinggi dibandingkan dengan detak jantung sang ibu yaitu janin 120 - 160 denyut per menit/frekuensi detak 2-3 Hz sedangkan jantung sang ibu sekitar 80 - 90 denyut per menit. Maka alat doppler dibutuhkan bagian dari rangkaian alat untuk memisahkan frekuensi tersebut di atas. Apa nama rangkaian tersebut?",
        options: ["a. Notch filter", "b. High pass filter", "c. Low pass filter", "d. Band pass filter", "e. Bandwidth filter"],
        answer: "d. Band pass filter"
    },
    {
        question: "Seorang tenaga elektromedik diminta untuk menganalisa sekaligus memperbaiki kerusakan pada alat suction pump. Setelah menjalani pemeriksaan, ternyata alat tersebut diketahui mengalami masalah pada botol penampung cairan yaitu saat botol dalam keadaan penuh pompa hisap tidak berhenti dalam menghisap cairan sehingga cairan tumpah keluar dari botol penampungan. Diketahui kondisi botol penampung cairan tidak dalam keadaan bocor, tekanan dan suction regulator juga dalam keadaan baik. Tindakan apa yang harus dilakukan oleh tenaga elektromedik tersebut?",
        options: ["a. Mengganti motor", "b. Memeriksa tombol switch", "c. Memeriksa over flow protection", "d. Memeriksa pompa hisap", "e. Mengganti manometer dengan yang baru"],
        answer: "c. Memeriksa over flow protection"
    },
    {
        question: "Rumah sakit memiliki dental unit yang terletak di poli gigi. Dental unit merupakan alat untuk memeriksa dan menentukan pengobatan bagi pasien. Biasanya untuk menunjang perawatan gigi dan mulut (pengeboran, penambalan, pembersihan, dan pemeriksaan). Sebutkan yang bukan bagian dari pesawat dental unit yaitu?",
        options: ["a. Radiograph viewer", "b. Contraplanar", "c. Air turbine handpiece", "d. Foot controller", "e. Tray assembly"],
        answer: "b. Contraplanar"
    },
    {
        question: "Sebuah alat EKG yang digunakan untuk diagnostik di suatu rumah sakit, pada jarum stylus alat tersebut terlihat gambar/hasil yang tidak sesuai dengan standar. Langkah apa yang dilakukan untuk menangani hal tersebut?",
        options: ["a. Melakukan pemeriksaan rangkaian catu daya", "b. Melakukan pemeriksaan rangkaian penguat", "c. Melakukan pemeriksaan pemanas stylus.", "d. Melakukan penggantian jarum stylus dan mereset.", "e. Melakukan pemeriksaan rangkaian display"],
        answer: "c. Melakukan pemeriksaan pemanas stylus."
    },
    {
        question: "Seorang perawat hendak menyalakan alat tensimeter digital dikarenakan harus melakukan pemeriksaan, namun ketika tombol power pada alat ditekan, tidak terjadi apa-apa atau alat tidak menyala. Sebagai tenaga elektromedis, kemungkinan apa yang terjadi pada alat tensimeter digital tersebut?",
        options: ["a. Baterai habis", "b. Bulb bocor", "c. Alat rusak", "d. Manset bocor", "e. Sensor rusak"],
        answer: "a. Baterai habis"
    },
    {
        question: "Seorang dosen menerangkan pada mahasiswa cara pengoperasian alat infant warmer yang ditinjau dari aspek pengamanan. Aspek pengamanan apa saja yang dilakukan pada peralatan infant warmer?",
        options: ["a. Memasang sensor suhu", "b. Memasang trafo isolasi.", "c. Memperdalam grounding listrik", "d. Memasang rangkaian pengaman dioda", "e. Memasang sensor kelembaban"],
        answer: "c. Memperdalam grounding listrik"
    },
    {
        question: "Pada pemasangan Dental unit membutuhkan prainstalasi yang harus dikerjakan terlebih dahulu. Karena pada dental unit menggabungkan fungsi udara dan fungsi air secara bersamaan. Sebutkan langkah-langkah persiapan prainstalasi yang harus disiapkan oleh elektromedis dalam pemasangan peralatan dental unit pada suatu rumah sakit?",
        options: ["a. Menyiapkan tata udara, sumber air, menyiapkan saluran pembuangan", "b. Menyiapkan tata suara, menyiapkan saluran pembuangan, menyiapkan sumber elektrik (listrik)", "c. Membuat ruang operator, sumber air, saluran air, menyiapkan kompresor", "d. Menyiapkan sumber air dan pembuangan, sumber elektrik (listrik), menyiapkan kompresor", "e. Membuat ruang kedap suara, Saluran air, tegangan listrik menyiapkan kompresor"],
        answer: "b. Menyiapkan tata suara, menyiapkan saluran pembuangan, menyiapkan sumber elektrik (listrik)"
    },
    {
        question: "Sebuah alat rontgen, pada saat dilakukan proses ekspos akan membangkitkan radiasi sinar-x dengan panjang gelombang yang tidak homogen. Hal ini akan menyebabkan tingkat energi yang berbeda-beda. Adapun radiasi yang energi-nya lemah harus ditahan agar tidak keluar dari tabung sinar-x. Komponen apakah yang digunakan sebagai penahan pada kasus tersebut?",
        options: ["a. Plat alumunium yang terletak antara window dan kolimator.", "b. Moving grid yang terletak antara window dan kolimator.", "c. Stasioner grid yang terletak setelah window dan kolimator.", "d. Stasioner grid yang terletak antara window dan kolimator.", "e. Plat alumunium yang terletak setelah window dan kolimator."],
        answer: "a. Plat alumunium yang terletak antara window dan kolimator."
    },
    {
        question: "Seorang dokter PPDS kebidanan diminta untuk mempelajari cara mengoperasikan alat USG. Disebut apa sensor yang digunakan pada alat USG?",
        options: ["a. Ultrasound", "b. Mikrosound", "c. Mic condensor", "d. Transduser", "e. Mesin USG"],
        answer: "d. Transduser"
    },
    {
        question: "Seorang perawat mengeluh kepada tenaga elektromedis tentang keraguan dalam menggunakan alat Sphygmomanometer apakah alat ini baik atau tidak. Tindakan apa yang dilakukan untuk mengecek alat tersebut?",
        options: ["a. Mengecek permukaan air raksa pada saat dibuka penguncinya.", "b. Mengecek kebocoran tekanan slang", "c. Memompa manset secara berkala", "d. Memeriksa kebocoran air raksa melebihi 2 %.", "e. Membuka balon pemompa dan air raksa turun secara perlahan"],
        answer: "d. Memeriksa kebocoran air raksa melebihi 2 %."
    },
    {
        question: "Chamber pada alat suction pump sebuah rumah sakit dilaporkan pecah dan sudah tidak dapat menampung cairan dengan baik. Sebagai seorang elektromedis, hal apa saja yang perlu dilakukan?",
        options: ["a. Menginventaris dulu peralatan yang diperlukan", "b. Melaporkan kepada atasan", "c. Mengganti chamber yang sesuai dengan spesifikasi", "d. Mencari perusahaan penyedia yang harganya murah", "e. Mengganti dengan barang lain yang bisa dipakai"],
        answer: "c. Mengganti chamber yang sesuai dengan spesifikasi"
    },
    {
        question: "Pada saat pemakaian alat EKG, dokter menginginkan perekaman hanya pada Lead II dan V2. Bagaimana cara mengatasinya?",
        options: ["a. Set copy recording, Set mode ke Auto recording, Set muscle Filter", "b. Set mode ECG ke Auto Mode, Set Pengaturan ke Gain X ½, dan Set Copy recording.", "c. Set muscle Filter, Set copy recording, Set mode ECG Auto Mode", "d. Set mode ECG ke Manual Mode, pilih rekaman untuk LEAD II, lanjutkan dengan V2", "e. Set Pengaturan ke Gain X ½, Set mode ECG ke Manual Mode dan Set copy recording"],
        answer: "d. Set mode ECG ke Manual Mode, pilih rekaman untuk LEAD II, lanjutkan dengan V2"
    },
    {
        question: "Alat infusion Pump yang digunakan, telah selesai mengalirkan cairan infus, yang ditandai dengan infusion End, namun masih terdapat cairan infus yang ada di dalam infus container. Sebutkan langkah apa yang dilakukan untuk memeriksa ketepatan akurasi volume cairan infus yang telah dialirkan?",
        options: ["a. Cek fungsi sensor Tetes", "b. Cek Set Target volume", "c. Cek infus set", "d. Cek waktu kadaluarsa infus set", "e. Cek setting infus rate"],
        answer: "c. Cek infus set"
    },
    {
        question: "Alat USG penunjukan tanggal pada display tidak sesuai. Lalu operator mengatur ulang penanggalan. Setelah alat dimatikan dan dinyalakan kembali, tanggal yang ditampilkan menunjukkan tanggal ketika USG dibeli. Bagian apa yang harus diperiksa oleh tenaga elektromedis untuk menangani ketidaksesuaian tersebut?",
        options: ["a. Backlight", "b. Main Processor Board", "c. Keypad", "d. Transduser", "e. LCD Display"],
        answer: "b. Main Processor Board"
    },
    {
        question: "Patient Monitor merupakan suatu alat untuk pengukuran secara kontinu yang mempunyai beberapa parameter, salah satunya yaitu Tekanan Darah (NIBP) yang berfungsi untuk menampilkan hasil pengukuran tekanan darah pasien. Pada patient monitor, berapakah range tekanan darah yang menunjukkan bahwa pasien mengalami hipotensi?",
        options: ["a. <90", "b. 90 - 120", "c. 140 - 159", "d. 160 - 169", "e. 120 - 139"],
        answer: "a. <90"
    },
    {
        question: "Radiologi merupakan cabang ilmu yang berkaitan dengan penggunaan sinar X untuk kepentingan terapeutik dan diagnosa. Akan tetapi pihak Poli radiologi pada saat tenaga elektromedis melakukan perbaikan alat tersebut. Yang tidak termasuk sifat dari sinar-x adalah?",
        options: ["a. Dapat mengionisasi bahan", "b. Dapat terjadi hamburan bila menembus bahan", "c. Dapat menembus bahan.", "d. Dapat diserap bahan atau terjadi atenuasi", "e. Dapat menghasilkan efek photolistrik."],
        answer: "e. Dapat menghasilkan efek photolistrik."
    },
    {
        question: "Alat Anesthesi baru saja dibeli oleh rumah sakit. Sebagai tenaga elektromedis diminta untuk melakukan pemasangan awal alat tersebut. Perlengkapan manakah di bawah ini yang bukan termasuk bagian-bagian alat anesthesi tersebut?",
        options: ["a. Memasang Rangkaian Patient", "b. Memasang CO2 Absorber", "c. Memasang Anesthesi Gas Scavenging System", "d. Memasang Sphygmomanometer", "e. Memasang Vaporizer"],
        answer: "d. Memasang Sphygmomanometer"
    },
    {
        question: "Seorang petugas radiologi datang ke IPSRS melaporkan bahwa terdapat kerusakan pada alat rontgen diagnostik, yang tidak dapat dioperasikan sebagaimana mestinya. Sebagai langkah awal, petugas elektromedis akan menganalisis kemungkinan penyebab kasus yang terjadi. Bagaimanakah langkah awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek tegangan pada terminal masukan rectifier HTT", "b. Cek tegangan pada terminal masukan HTT.", "c. Cek tegangan pada terminal luaran HTT.", "d. Cek tegangan pada terminal masukan tabung sinar-x.", "e. Cek tegangan pada terminal luaran autotrafo."],
        answer: "b. Cek tegangan pada terminal masukan HTT."
    },
    {
        question: "Pada suatu ketika seorang perawat yang akan menggunakan alat suction pump. Sebelum mengoperasikan alat tersebut, perawat melakukan instalasi terlebih dahulu terhadap alat tersebut. Ketika semua bagian-bagian dari alat tersebut sudah terpasang, perawat melakukan kalibrasi atau pengecekan sebelum alat benar-benar digunakan. Ketika alat tersebut diuji coba menggunakan tangan perawat dengan cara menutup lubang kateter, ternyata terdapat masalah pada alat tersebut, suction pump tidak dapat menghisap dan juga pada meter indikator tekanan tidak terlihat adanya pergerakan jarum. Apa penyebab dari trouble di atas?",
        options: ["a. Rusaknya filter suction pump", "b. Fuse sudah tidak dapat berfungsi", "c. Adanya kerusakan pada regulator pengatur", "d. Pemasangan klep terbalik dan kurang rapatnya menutup tabung", "e. Terdapat kebocoran pada slang"],
        answer: "e. Terdapat kebocoran pada slang"
    },
    {
        question: "Rumah sakit mendapatkan alat Anesthesi baru datang hibah dari bantuan WHO dan pihak rumah sakit akan menggunakan alat tersebut di kamar operasi. Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertugas menangani alat tersebut?",
        options: ["a. Melakukan pencatatan dengan data-data yang tertera dalam alat, uji fungsi dan uji coba.", "b. Melakukan pencatatan harian, mingguan, bulanan dan tahunan.", "c. Melakukan pencatatan data alat monitoring, dan pemeliharaan pencatatan alat anesthesi.", "d. Melakukan pencatatan, pemeriksaan, pemeliharaan dan mengevaluasi", "e. Melakukan pencatatan, pemeriksaan, pemeliharaan dan mengevaluasi kondisi alat."],
        answer: "a. Melakukan pencatatan dengan data-data yang tertera dalam alat, uji fungsi dan uji coba."
    },
    {
        question: "ESU (Electro Surgery Unit) mengalirkan arus bolak-balik dengan frekuensi tinggi melalui elektroda ke jaringan tubuh. Sehingga dalam pemeliharaan alat perlu diperhatikan adanya pengaman terhadap luka bakar yang tidak diinginkan. Apa yang tepat dilakukan oleh tenaga elektromedik untuk pemeliharaan alat tersebut?",
        options: ["a. Melakukan pemeriksaan pada elektroda aktif harus selalu dalam keadaan baik.", "b. Melakukan pemeriksaan tombol dosis arus.", "c. Melakukan pemeriksaan bagian pembangkit frekuensi.", "d. Melakukan pemeriksaan Patient plate dan jack dalam keadaan baik dan bersih.", "e. Melakukan pemeriksaan bagian fuse."],
        answer: "d. Melakukan pemeriksaan Patient plate dan jack dalam keadaan baik dan bersih."
    },
    {
        question: "Seorang operator radiologi melaporkan permasalahan alat rontgen konvensional di instalasi radiologi. Petugas tersebut mengatakan bahwa alat rontgen yang digunakan memberikan hasil foto rontgen dengan tingkat kehitaman kurang optimal, padahal parameter yang digunakan sudah sesuai dengan standar. Setelah dilakukan pemeriksaan, ternyata masa kalibrasi masih belum kadaluwarsa. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut?",
        options: ["a. Cek arus tabung dan identifikasi penggunaan developer", "b. Cek developer dan identifikasi lama penggunaannya", "c. Cek arus filamen dan identifikasi penggunaan fixer", "d. Cek larutan fixer dan identifikasi lama penggunaannya", "e. Cek arus filamen dan identifikasi penggunaan film"],
        answer: "b. Cek developer dan identifikasi lama penggunaannya"
    },
    {
        question: "Suatu alat Electro Surgery Unit di ruang operasi telah dipersiapkan untuk melakukan tindakan operasi. Semua VCC telah terpasang dengan baik dan sesuai dengan spesifikasi alat. Saat ditekan tombol cutting, alat tidak bekerja, indikator Elektrode Netral berkedip. Tindakan apakah yang Anda lakukan untuk memperbaiki alat tersebut?",
        options: ["a. Mengukur tegangan listrik masuk", "b. Mengecek modul pembangkit HF", "c. Mengganti Elektrode dengan Elektrode yang layak", "d. Mengganti sekring alat", "e. Periksa kabel power"],
        answer: "c. Mengganti Elektrode dengan Elektrode yang layak"
    },
    {
        question: "Seorang dokter spesialis kebidanan mengoperasikan alat USG dengan menggunakan bermacam transduser untuk pemeriksaan janin dari trimester 1 sampai trimester ke 3. Transduser manakah yang digunakan untuk memeriksa janin di usia 1 bulan?",
        options: ["a. Transducer Transvaginal.", "b. Transducer Transperineal", "c. Transducer Transendent", "d. Transducer Transuperifisial.", "e. Transducer trans abdominal"],
        answer: "a. Transducer Transvaginal."
    },
    {
        question: "Digunakan untuk apakah warna kuning pada tombol elektroda tersebut Electro Surgery Unit (ESU)?",
        options: ["a. Monopolar", "b. Coagulating", "c. Bledding", "d. Bipolar", "e. Cut"],
        answer: "e. Cut"
    },
    {
        question: "Alat CTG, Doppler dan USG adalah alat diagnostik yang memiliki prinsip dasar yang sama, yaitu memanfaatkan gelombang ultrasound. Ketiga alat tersebut juga memiliki sebuah display yang dapat digunakan untuk melihat hasil pemeriksaan. Pada alat CTG terdapat display, ternyata display tidak tampil. Apa yang menyebabkan hal tersebut?",
        options: ["a. Probe yang kotor", "b. Ada masalah pada rangkaian display", "c. Gel yang kurang banyak", "d. Tegangan dari PLN yang tidak tetap", "e. Probe tidak sensitif lagi"],
        answer: "a. Probe yang kotor"
    },
    {
        question: "Bedside Monitor elektronik digunakan untuk mengumpulkan dan menampilkan data fisiologis pasien. Data tersebut dikumpulkan menggunakan sensor non-invasif dari pasien dan merekam data rutin. Berikut ini merupakan keuntungan dari pemakaian bedside monitor, kecuali?",
        options: ["a. Parameternya yang lengkap", "b. Lebih jelas menggambarkan monitoring tubuh, seperti NIPB, spo2, Respiration rate", "c. Digunakan untuk mengevaluasi keadaan tubuh pasien yang dipasang bedside monitor", "d. Sangat menguntungkan untuk memeriksa kelainan pada tubuh pasien", "e. Tidak bisa ditampilkan di dalam monitor"],
        answer: "e. Tidak bisa ditampilkan di dalam monitor"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem kapasitor discharge yang sedang digunakan cyto bed di ruang perawatan. Petugas mengatakan bahwa alat tersebut tidak dapat dilakukan ekspos karena kV meter tidak dapat menunjuk sesuai dengan pemilihan kV. Setelah dilakukan pemeriksaan dan dianalisis ada kerusakan pada sistem pengisian kapasitor. Apakah tindakan awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek catu rangkaian pengisian kapasitor dan tegangan filamen", "b. Cek catu daya dan rangkaian pengisian kapasitor", "c. Cek catu rangkaian pengisian dan tegangan kapasitor", "d. Cek catu daya dan tegangan kapasitor", "e. Cek catu rangkaian pengisian kapasitor dan tegangan tabung sinar-x"],
        answer: "b. Cek catu daya dan rangkaian pengisian kapasitor"
    },
    {
        question: "Seorang petugas melaporkan kerusakan peralatan rontgen sistem condensator discharge yang berada di instalasi radiologi. Petugas mengatakan bahwa hasil gambar pada film selalu terpotong pada area yang sama. Lebih lanjut petugas mengatakan bahwa selain hasil gambar yang terpotong, alat rontgen juga tidak bisa dilakukan proses pengosongan kapasitor. Apakah analisis kerusakan pada kasus tersebut?",
        options: ["a. Shutter membuka tidak sempurna dan tidak dapat kembali ke posisi awal", "b. Posisi window pada rumah tabung tidak dapat membuka secara sempurna", "c. Tombol discharge pada panel kontrol tidak berfungsi", "d. Pada window terdapat benda yang menghalangi keluarnya berkas sinar-x", "e. Ada benda pada kolimator yang menghalangi keluarnya berkas sinar-x"],
        answer: "a. Shutter membuka tidak sempurna dan tidak dapat kembali ke posisi awal"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat ESU yang ditinjau dari aspek pengamanan. Aspek pengamanan alat apa saja, jika terjadi arus bocor?",
        options: ["a. Memasang rangkaian rektifier", "b. Memasang stabilizer", "c. Memasang rangkaian pengaman dioda", "d. Memasang autotrafo.", "e. Memperdalam grounding listrik"],
        answer: "e. Memperdalam grounding listrik"
    },
    {
        question: "Alat suction pump pada sebuah rumah sakit yang masih baru dilaporkan terjadi kerusakan. Langkah apa saja sebagai seorang elektromedis yang perlu dilakukan?",
        options: ["a. Langsung membongkar alat sesuai dengan kewenangan", "b. Membeli alat baru agar bekerja maksimal", "c. Menginventaris alat tersebut untuk selanjutnya diperbaiki", "d. Mencari dokumen apabila alat tersebut dalam masa garansi", "e. Mengganti dengan spare part yang perlu diganti"],
        answer: "d. Mencari dokumen apabila alat tersebut dalam masa garansi"
    },
    {
        question: "Sebuah alat CTG sudah terhubung dengan sumber listrik, 2 transduser terpasang pada pasien, alat dihidupkan dan terdengar suara detak jantung janin (DJJ) yang tidak jernih (Noise). Kemungkinan apa yang tidak dilakukan pada saat persiapan pengoperasian?",
        options: ["a. Event mark probe tidak terpasang dengan benar", "b. Transduser belum diolesi ultrasound gel", "c. Baterai habis", "d. Printer kertas habis", "e. Transduser belt terlalu kencang"],
        answer: "b. Transduser belum diolesi ultrasound gel"
    },
    {
        question: "Terjadi perbedaan pengukuran tekanan darah seorang pasien pada saat menggunakan sphygmomanometer dibandingkan dengan pengukuran tekanan darah menggunakan Non Invasive Blood Pressure (NIBP). Langkah pertama yang dilakukan oleh tenaga elektromedis?",
        options: ["a. Melakukan pemeriksaan arde (Grounding)", "b. Melakukan pengukuran Arus Bocor", "c. Melakukan pengecekan interferensi frekuensi", "d. Melakukan pemeriksaan catu daya listrik", "e. Melakukan kalibrasi"],
        answer: "e. Melakukan kalibrasi"
    },
    {
        question: "Seorang elektromedis sedang melakukan pemeriksaan alat rontgen diagnostik di instalasi radiologi. Setelah diidentifikasi pada alat tersebut ternyata proses ekspos tidak diawali dengan pemanasan awal (pre-heating) pada filamen tabung sinar-x. Komponen apakah penyebab kerusakan pada kasus tersebut?",
        options: ["a. Filamen tabung sinar-x", "b. Standby resistor", "c. mA limiter", "d. mA control", "e. Trafo filamen"],
        answer: "b. Standby resistor"
    },
    {
        question: "Alat ventilator baru saja diterima oleh Rumah Sakit dan direncanakan akan segera digunakan. Di ruangan manakah penempatan alat tersebut di atas?",
        options: ["a. Ruang IGD", "b. Poli Kebidanan", "c. Poli paru", "d. Poli syaraf", "e. Poli Gigi"],
        answer: "a. Ruang IGD"
    },
    {
        question: "Sebuah Rumah Sakit melakukan pengadaan satu infant warmer baru yang akan dimanfaatkan untuk terapi bagi bayi. Di ruang manakah alat tersebut ditempatkan?",
        options: ["a. Ruang Ob-Gyn", "b. IGD", "c. Instalasi Rawat Inap", "d. Instalasi Rehab Medis", "e. NICU"],
        answer: "e. NICU"
    },
    {
        question: "Seorang teknisi yang melakukan perbaikan alat electrosurgery unit setiap 6 bulan sekali menemukan permasalahan pada alat tersebut. Saat teknisi memeriksa bagian high frequency outputnya terlalu tinggi, perbaikan atau tindakan apa yang dapat dilakukan pada alat tersebut?",
        options: ["a. Memeriksa generator high frekuensi", "b. Mengganti elektroda aktif dan pasif", "c. Memeriksa kembali sambungan power supply", "d. Mengganti komponen IC pada power supply", "e. Memeriksa rangkaian osilator sebagai pembangkit frekuensi"],
        answer: "a. Memeriksa generator high frekuensi"
    },
    {
        question: "Microtome Blades merupakan alat yang digunakan dalam pembuatan potongan histologi jaringan. Di manakah alat microtome blades ditempatkan?",
        options: ["a. Laboratorium Hematologi", "b. Laboratorium Mikrobiologi", "c. Laboratorium Fisika", "d. Laboratorium Patologi Anatomi", "e. Laboratorium Kimia Klinik"],
        answer: "d. Laboratorium Patologi Anatomi"
    },
    {
        question: "Pada RSUD Sidoarjo sebuah alat ESU yang digunakan untuk pendukung alat operasi. Kami mendapatkan keluhan dari operator bahwa alat tersebut tidak bekerja, setelah dilakukan pengecekan, jala-jala PLN sudah terhubung dengan baik, tidak ada arus yang bocor. Apa yang menyebabkan alat tersebut tidak dapat bekerja?",
        options: ["a. Pengatur frekuensi rusak", "b. Switch on/off mengalami kerusakan", "c. Elektroda bipolar putus", "d. Generator pada ESU mengalami kerusakan", "e. Kabel power putus"],
        answer: "d. Generator pada ESU mengalami kerusakan"
    },
    {
        question: "Seorang tenaga laboratorium mengeluhkan penglihatan pada mikroskop cahaya yang kurang jelas. Akan tetapi secara kasat mata lensa okuler maupun objek dalam keadaan bersih. Sebagai tenaga elektromedis, apa yang akan dilakukan untuk menangani alat tersebut?",
        options: ["a. Melakukan setting ulang posisi lensa.", "b. Mengganti lensa objektif.", "c. Mengatur kondensor.", "d. Mengganti lampu mikroskop.", "e. Mengganti lensa okuler."],
        answer: "d. Mengganti lampu mikroskop."
    },
    {
        question: "Salah satu bagian pemeliharaan preventif adalah pemantauan, dengan pemantauan diharapkan peralatan medik dalam kondisi siap pakai. Yang tidak termasuk dalam pemantauan adalah?",
        options: ["a. Pemantauan kinerja alat.", "b. Pemantauan pengguna alat", "c. Pemantauan kondisi lingkungan.", "d. Pemantauan/pengukuran aspek pengukuran.", "e. Pemantauan fisik alat."],
        answer: "b. Pemantauan pengguna alat"
    },
    {
        question: "Sebutkan langkah-langkah apa saja yang dilakukan untuk pengoperasian alat Infusion Pump?",
        options: ["a. Tekan tombol On/OFF, Set Rate, Set target volume", "b. Tekan tombol On/OFF, Set target volume, Tekan Tombol Start", "c. Tekan tombol On/OFF, Set Rate, tekan tombol start", "d. Tekan tombol On/OFF, Set Rate, Set target volume, tekan tombol start", "e. Tekan tombol On/OFF,"],
        answer: "d. Tekan tombol On/OFF, Set Rate, Set target volume, tekan tombol start"
    },
    {
        question: "Di sebuah rumah sakit, seorang dokter akan mengoperasi pasiennya menggunakan Electrosurgery Unit (ESU) dengan merk ERBE tipe D-72072 / ICC 350 E INT. Namun ketika mulai digunakan, display pada alat tidak menyala dan alat mengeluarkan asap. Tindakan apa yang harus dilakukan?",
        options: ["a. Mengganti elektroda", "b. Mengganti kabel power", "c. Mengecek modul pembangkit HF", "d. Mengganti saklar ON/OFF", "e. Mengecek fuse, supply, dan blok rangkaian display"],
        answer: "e. Mengecek fuse, supply, dan blok rangkaian display"
    },
    {
        question: "IPS menerima laporan ada alat suction pump terjadi sebuah kerusakan di ruangan rawat inap. Sebagai seorang elektromedis, langkah awal yang dilakukan adalah?",
        options: ["a. Menginventaris dulu alat yang rusak", "b. Menyiapkan bahan habis pakai", "c. Mendokumentasikan alat tersebut", "d. Memberikan laporan ke atasan atas kerusakan tersebut", "e. Melakukan respon sesuai SOP"],
        answer: "e. Melakukan respon sesuai SOP"
    },
    {
        question: "Pada alat suction pump pada sebuah rumah sakit dilaporkan cairan masuk kembali ke motor. Sebagai seorang elektromedis, analisa awal adalah",
        options: ["a. Selang penghubung bocor", "b. Perlu kalibrasi ulang", "c. Chamber tidak vacuum", "d. Motor tidak bekerja maksimal", "e. Pelampung pada chamber tidak bekerja"],
        answer: "e. Pelampung pada chamber tidak bekerja"
    },
    {
        question: "Seorang petugas medis sedang menggunakan alat suction pump. Ketika alat ditekan ON, alat berjalan normal bisa digunakan untuk menghisap cairan. Namun ketika diatur tekanannya, jarum pada indikator tekanan tidak berubah. Sebagai teknisi elektromedik, apa yang harus dilakukan?",
        options: ["a. Cek regulator", "b. Cek barometer", "c. Ganti katup pada pompa", "d. Ganti dengan alat yang baru", "e. Ganti selang vacuum suction"],
        answer: "b. Cek barometer"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat rontgen konvensional ke instalasi pemeliharaan sarana Rumah Sakit. Petugas mengatakan bahwa pengaturan kV pada posisi 60 dan 65 tidak dapat dilakukan, sedangkan untuk pengatur lainnya tidak ada masalah (dapat diatur). Bagaimana tindakan Anda terhadap kasus tersebut di atas?",
        options: ["a. Cek rangkaian skunder tegangan tinggi - perbaiki tap-tap pada KV selector", "b. Cek rangkaian primer tegangan tinggi - perbaiki tap-tap pada LVC", "c. Cek rangkaian primer tegangan tinggi - perbaiki tap-tap pada KV selector", "d. Cek rangkaian skunder tegangan tinggi - memperbaiki tap-tap HTT", "e. Cek rangkaian skunder tegangan tinggi - perbaiki tap-tap pada LVC"],
        answer: "c. Cek rangkaian primer tegangan tinggi - perbaiki tap-tap pada KV selector"
    },
    {
        question: "Ultrasonografi (USG) merupakan alat yang dapat menampilkan gambar atau citra dari kondisi bagian dalam tubuh. Alat ini memanfaatkan frekuensi tinggi untuk menampilkan citra dari dalam tubuh. Apakah fungsi dari bagian console pada alat USG?",
        options: ["a. Mencetak hasil USG", "b. Console berfungsi sebagai penampil hasil dari USG", "c. Sumber tegangan pada alat USG", "d. Untuk menggerakkan kursor pada USG", "e. Bagian yang merupakan tombol fungsi alat"],
        answer: "e. Bagian yang merupakan tombol fungsi alat"
    },
    {
        question: "Sebuah suction pump digunakan untuk menghisap cairan dengan jumlah yang banyak. Saat dalam pemakaian, alat tersebut tiba-tiba berhenti menghisap cairan tersebut. Masalah yang mungkin terjadi sehingga mengakibatkan suction pump berhenti menghisap cairan secara tiba-tiba yaitu:",
        options: ["a. Air sudah mencapai batas over flow protection", "b. Adanya kerusakan pada daya hisap manometer", "c. Motor pada suction pump harus diberi pelumas", "d. Membran karet pada penutup suction pump kurang rapat", "e. Adanya kerusakan pada ujung saluran selang penyedot"],
        answer: "a. Air sudah mencapai batas over flow protection"
    },
    {
        question: "Dental Unit adalah alat yang digunakan di klinik atau poli gigi untuk mendiagnosis dan melakukan perawatan pada pasien, di mana dalam pengoperasiannya memerlukan air dan angin/udara. Sumber tenaga udara pada pesawat dental unit diperoleh dari?",
        options: ["a. switch valve", "b. compressor", "c. turbine jet/bor jet", "d. scaler", "e. spray gun"],
        answer: "b. compressor"
    },
    {
        question: "Fetal Doppler digunakan untuk mendeteksi detak jantung janin di dalam kandungan. Fetal Doppler menggunakan baterai sebagai sumber listriknya. Pada saat fetal Doppler akan digunakan ternyata alat tidak dapat dihidupkan. Langkah pertama yang dilakukan seorang elektromedis untuk mengatasi masalah ini.",
        options: ["a. Mengganti probe", "b. Mengganti cover", "c. Mengganti baterai", "d. Mengganti speaker", "e. Mengganti tombol"],
        answer: "c. Mengganti baterai"
    },
    {
        question: "Di suatu puskesmas terdapat sebuah sterilisator kering. Para petugas di puskesmas mengaku jarang menggunakan sterilisator kering tersebut dikarenakan display pada sterilisator tersebut tidak mengalami perubahan sama sekali ketika digunakan. Setiap kali digunakan display suhu selalu menunjukkan suhu yang tetap meskipun heater telah bekerja. Sebagai seorang tenaga teknik elektromedik, apa yang akan Anda lakukan?",
        options: ["a. Memeriksa tegangan input sterilisator", "b. Memeriksa sambungan kabel pada sterilisator", "c. Memeriksa sambungan pada display sterilisator", "d. Mengganti heater sterilisator", "e. Mengganti sensor suhu sterilisator"],
        answer: "e. Mengganti sensor suhu sterilisator"
    },
    {
        question: "Rumah Sakit Anda melakukan pengadaan alat kesehatan baru berupa sebuah Sphygmomanometer. Kelengkapan alat manakah yang merupakan kelengkapan yang ada di Sphygmomanometer?",
        options: ["a. Stetoskop", "b. Y Konektor", "c. Manset", "d. Air raksa", "e. Alkohol"],
        answer: "c. Manset"
    },
    {
        question: "Autoclave sangat dibutuhkan untuk mensterilkan berbagai macam alat. Cara kerja dari autoclave adalah saat tombol ON autoclave ditekan, motor triway valve akan bekerja untuk mengalirkan air dalam tanki menuju chamber. Pada suatu saat user akan menggunakan alat tersebut, tetapi alat ini tidak dapat dihidupkan ketika tombol power dalam keadaan ON. Sebagai seorang teknisi, apa yang harus dilakukan untuk menyelesaikan masalah tersebut?",
        options: ["a. Melakukan pengecekan pada tegangan yang masuk pada alat dan mengecek tegangan stop kontak yang ada.", "b. Memeriksa motor triway valve", "c. Mengganti tombol ON yang ada pada tombol power.", "d. Mengganti motor triway valve dengan yang baru", "e. Mengganti dengan yang baru kabel yang digunakan untuk menghubungkan pada stop kontak."],
        answer: "a. Melakukan pengecekan pada tegangan yang masuk pada alat dan mengecek tegangan stop kontak yang ada."
    },
    {
        question: "Seorang dosen menerangkan secara garis besar dari blok diagram Peralatan Diathermy. Sebutkan urutan blok Diagram tersebut?",
        options: ["a. Rangkaian power supply, Rangkaian osilator, dan rangkaian komparator.", "b. Rangkaian Power Supply, Pembangkit frekuensi tinggi, dan Rangkaian Modulator", "c. Rangkaian power supply, Rangkaian Komparator, dan Rangkaian Keluaran", "d. Rangkaian Power supply, Rangkaian Timer, dan rangkaian keluaran.", "e. Rangkaian Power supply, Rangkaian Oscillator, dan rangkaian keluaran."],
        answer: "e. Rangkaian Power supply, Rangkaian Oscillator, dan rangkaian keluaran."
    },
  {
    question: "USG menggunakan gelombang suara berupa Ultrasound untuk menampilkan citra tubuh dalam manusia. Dengan menggunakan probe sebagai transduser yang berfungsi sebagai transmitter sekaligus juga sebagai receiver. Pada USG ini tidak dapat menampilkan citra gambar, tetapi karakter grafik seperti nama pasien, dll tetap muncul di layar monitor. Kerusakan tersebut disebabkan oleh?",
    options: ["a. Keyboard rusak", "b. Monitor bermasalah", "c. Kabel probe rusak", "d. Probe USG rusak", "e. Power supply rusak"],
    answer: "c. Kabel probe rusak"
  },
  {
    question: "ESU adalah suatu alat bedah dengan memanfaatkan arus listrik frekuensi tinggi untuk membelah, membekukan dan mengeringkan kulit. Pada satu peristiwa ESU pada elektroda panas namun tidak dapat digunakan untuk membelah, membekukan dan mengeringkan. Apa yang anda lakukan sebagai teknisi Elektromedis?",
    options: ["a. Mengecek rangkaian kontrol", "b. Mengecek thermofuse", "c. Mengecek rangkaian power supply", "d. Mengecek rangkaian transduser", "e. Mengecek rangkaian osilator"],
    answer: "e. Mengecek rangkaian osilator"
  },
  {
    question: "Pemanfaatan alat rontgen di layanan kesehatan harus memenuhi aspek keselamatan, baik keselamatan listrik, mekanik dan utamanya adalah keselamatan radiasi. Apakah tujuan keselamatan radiasi pada pernyataan tersebut?",
    options: ["a. untuk mengurangi pengaruh radiasi pada pasien, pekerja radiasi dan lingkungan hidup", "b. untuk melindungi pasien, pekerja radiasi dan lingkungan hidup", "c. untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup", "d. untuk melindungi pasien, pekerja radiasi dan masyarakat", "e. untuk mengurangi pengaruh radiasi pada pasien dan pekerja radiasi"],
    answer: "c. untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"
  },
  {
    question: "Pada ruang bayi sebuah rumah sakit meminta untuk didatangkan alat suction pump. Sebagai seorang elektromedis pertimbangan apa yang akan dilakukan?",
    options: ["a. Mencari alat yang berdaya hisap besar", "b. Memilihkan alat yang paling mahal", "c. Memilih alat yang sudah terkalibrasi", "d. Mencari alat yang sesuai spesifikasi ruang bayi", "e. Memasangkan alat yang portable"],
    answer: "d. Mencari alat yang sesuai spesifikasi ruang bayi"
  },
  {
    question: "Pada ruang OK sebuah rumah sakit akan melakukan operasi pembedahan. Keuntungan utama menggunakan harmonic scalpel adalah?",
    options: ["a. Memotong dan membakar secara bersamaan", "b. Tidak memerlukan anestesi", "c. Tidak menimbulkan bekas luka", "d. Pemotongan presisi", "e. Hasil pemotongan sangat rapi"],
    answer: "a. Memotong dan membakar secara bersamaan"
  },
  {
    question: "Pada alat suction pump pada sebuah rumah sakit dilaporkan daya hisap maksimal namun cairan yang masuk pada chamber tidak maksimal. Sebagai seorang elektromedis, analisa awal adalah?",
    options: ["a. Daya tidak sesuai", "b. Perlu kalibrasi ulang", "c. Karet pada chamber tidak elastis", "d. Motor tidak bekerja dengan maksimal", "e. Kerusakan fuse"],
    answer: "c. Karet pada chamber tidak elastis"
  },
  {
    question: "Dokter kandungan atau bidan menggunakan mesin USG dengan berbagai transduser untuk memeriksa janin pada trimester pertama sampai ketiga. Tujuan dari pemeriksaan USG pada Trimester Pertama, kecuali?",
    options: ["a. Melihat tali pusar", "b. Meyakinkan adanya hamil ektopik (hamil di luar rahim) atau hamil anggur", "c. Meyakinkan kemungkinan kehamilan", "d. Mengukur usia perkembangan atau panjang crown-rump", "e. Meyakinkan detak jantung"],
    answer: "a. Melihat tali pusar"
  },
  {
    question: "Seorang petugas radiologi melaporkan kerusakan X-Ray unit di instalasi Radiologi. Petugas mengatakan bahwa semua parameter pada meja kontrol dalam kondisi normal, namun saat dilakukan persiapan dengan menekan tombol (preparation), tidak muncul indikator ready pada meja kontrol tersebut sehingga ekspos tidak dapat dilakukan. Bagaimanakah langkah awal yang harus dilakukan pada kasus tersebut?",
    options: ["a. Mengidentifikasi kV meter, mA meter dan timer", "b. Mengidentifikasi tegangan, arus dan resistansi", "c. Mengidentifikasi kerja anoda putar, filamen dan time delay", "d. Mengidentifikasi tegangan, arus dan daya", "e. Mengidentifikasi tegangan, arus dan grounding"],
    answer: "c. Mengidentifikasi kerja anoda putar, filamen dan time delay"
  },
  {
    question: "Rumah Sakit anda tahun ini melakukan penambahan layanan baru, berupa poli syaraf. Peralatan mana sajakah yang ditempatkan di ruangan Poli Syaraf?",
    options: ["a. Stetoskop, Sphygmomanometer, EGG, Laparoscopy", "b. Stetoskop, Sphygmomanometer, USG, UST", "c. Stetoskop, Sphygmomanometer, EEG, EMG", "d. Stetoskop, Sphygmomanometer, ECG, Defibrillator", "e. Stetoskop, Sphygmomanometer, ENG, Slit Lamp"],
    answer: "c. Stetoskop, Sphygmomanometer, EEG, EMG"
  },
  {
    question: "Seorang Dosen menerangkan pada mahasiswa Blok Diagram alat Electro Surgery Unit secara rinci dan menerangkan fungsi dari masing-masing blok diagram. Bagian Blok manakah yang menghasilkan frekuensi untuk digunakan sebagai cutting?",
    options: ["a. Blok Pembangkit frekuensi blended", "b. Blok Pembangkit frekuensi kontinu", "c. Blok Pembangkit frekuensi spark gap", "d. Blok Modulator", "e. Blok Pembangkit frekuensi surge"],
    answer: "b. Blok Pembangkit frekuensi kontinu"
  },
  {
    question: "Seorang petugas datang ke instalasi pemeliharaan sarana Rumah Sakit (IPSRS), melaporkan kerusakan alat dental x-ray panoramic yang berada di instalasi Radiologi. Petugas mengatakan bahwa ketika dioperasikan alat bisa scanning tapi tidak keluar sinar-X. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut di atas?",
    options: ["a. Cek tegangan catu daya dan perbaiki rangkaian exposure", "b. Cek driver motor scanning dan perbaiki rangkaian exposure", "c. Cek tegangan autotrafo dan perbaiki rangkaian exposure", "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure", "e. Cek autotrafo dan perbaiki rangkaian exposure"],
    answer: "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure"
  },
{
    question: "Pada sebuah rumah sakit akan mengadakan pembelian alat suction pump baru. Sebagai seorang elektromedis, pertimbangan awal adalah?",
    options: ["a. Melihat tren yang ada di pasaran", "b. Mencari harga yang paling rendah", "c. Mencari tipe & model terbaru", "d. Menginventaris kebutuhan dan penempatan", "e. Mencari perusahaan yang diinginkan"],
    answer: "d. Menginventaris kebutuhan dan penempatan"
},
{
    question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat X-Ray yang dijauhi dari aspek faktor penyinaran. Faktor-faktor apakah yang mempengaruhi penyinaran sinar X?",
    options: ["a. Milli Ampere, Intensitas dan KV.", "b. Milli Ampere Second, KVp, dan SID", "c. Milli Ampere, SID dan KVp", "d. Milli Ampere, KV dan High Frequency", "e. Milli Ampere Second, KV dan Distance."],
    answer: "b. Milli Ampere Second, KVp, dan SID"
},
{
    question: "Seorang Elektromedis melakukan analisis kerusakan pesawat Rontgen yang terjadi pada trafo filamen. Dari hasil pengukuran pada trafo filamen diperoleh induktansi sebesar 20 mH. Jika dioperasikan pada sistem jaringan 1 phase dengan frekuensi 50 Hz, berapakah nilai reaktansi induktif pada trafo filamen tersebut?",
    options: ["a. 6,28 Ohm", "b. 3,14 Ohm", "c. 1 Ohm", "d. 10 Ohm", "e. 100 Ohm"],
    answer: "a. 6,28 Ohm"
},
{
    question: "Seorang Elektromedis sedang melakukan perbaikan kerusakan pada sebuah alat rontgen di instalasi radiologi. Setelah dilakukan pemeriksaan terhadap alat tersebut dan dianalisis bahwa filamen pada tabung sinar-X tersebut dipastikan rusak (putus). Apakah tindakan yang harus dilakukan pada kasus tersebut?",
    options: ["a. Memperbaiki tabung sinar-X sesuai dengan spesifikasi", "b. Mengganti filamen baru sesuai dengan spesifikasi", "c. Mengganti tabung sinar-X baru sesuai dengan spesifikasi", "d. Memperbaiki filamen tabung sinar-X yang putus", "e. Mensetting ulang filamen tabung sinar-X sesuai kondisi awal"],
    answer: "c. Mengganti tabung sinar-X baru sesuai dengan spesifikasi"
},
{
    question: "Dalam mengoperasikan alat medik ada beberapa persyaratan agar alat dioperasikan secara aman dan benar. Berikut ini yang termasuk aspek syarat pengoperasian adalah?",
    options: ["a. Sarana Ruangan", "b. Instalasi air", "c. Kelengkapan Alat.", "d. Keamanan pasien", "e. Sarana komputer."],
    answer: "c. Kelengkapan Alat."
},
{
    question: "Seorang dokter akan melakukan tindakan operasi minor pada pasiennya menggunakan alat electro surgery unit (ESU) agar pendarahan yang terjadi pada saat tindakan pembedahan dapat diminimalisir. Sebuah elektroda yang berbentuk pinset digunakan untuk menjepit jaringan yang tidak diinginkan, kemudian arus listrik dengan frekuensi tinggi mengalir dari ujung elektroda melewati jaringan tersebut. Apabila terjadi arus bocor pada elektroda, maka hal yang harus dilakukan adalah....",
    options: ["a. Cek modul pembangkit HF, jika rusak ganti modul tersebut", "b. Cek kabel power pastikan sudah terhubung dengan jaringan PLN", "c. Cek fuse, jika putus ganti yang baru", "d. Kalibrasi alat yang dilakukan oleh badan kalibrasi", "e. Cek apakah elektroda pasif/ground sudah terpasang atau belum"],
    answer: "e. Cek apakah elektroda pasif/ground sudah terpasang atau belum"
},
{
    question: "Suatu alat autoclave (steam sterilizer) di RSU Dr. Soebandi sedang akan dioperasikan (on). Lampu indikator alat on sudah menyala, tekanan, timer, dan suhu sudah diatur, tombol start sudah ditekan, suhu mengalami kenaikan dan timer berjalan saat suhu tercapai. Namun saat timer berjalan suhu mengalami penurunan dan tidak kunjung naik kembali ke suhu setting. Apakah tindakan perbaikan yang harus dilakukan?",
    options: ["a. Cek display suhu setting, jika suhu setting berubah maka kembalikan sesuai setting awal", "b. Cek timer, apabila tidak berfungsi maka gantilah timer-nya", "c. Cek microswitch (SHG) jika tidak berfungsi maka ganti microswitch (SHG)", "d. Cek tegangan sumber apakah sesuai dengan spesifikasi yang dibutuhkan alat atau tidak. Jika tidak maka cari tegangan sumber yang sesuai", "e. Cek pengukur tekanan, apabila rusak maka ganti"],
    answer: "c. Cek microswitch (SHG) jika tidak berfungsi maka ganti microswitch (SHG)"
},
{
    question: "Menurut organisasi kesehatan dunia (WHO), tekanan darah normal bagi orang dewasa adalah 120/80. Angka 120 menunjukkan tekanan sistolik, yaitu tekanan saat jantung memompa darah ke seluruh tubuh. Sementara angka 80 menunjukkan tekanan diastolik, yaitu tekanan saat otot jantung relaksasi dan menerima darah yang kembali dari seluruh tubuh. Satuan tekanan darah dalam WHO adalah?",
    options: ["a. BPM", "b. BO", "c. RR", "d. mmHg", "e. mL"],
    answer: "d. mmHg"
},
{
    question: "Seorang Perawat melaporkan kepada Instalasi Pemeliharaan Sarana Rumah Sakit tentang alat Sphygmomanometer yang jarang dipantau fungsinya, sehingga dia merasa takut menggunakan alat tersebut. Apa yang dilakukan oleh tenaga elektromedis dalam kasus tersebut?",
    options: ["a. Kebocoran slang dan akurasi penunjukkan", "b. Kebocoran slang dan air raksa", "c. Kebocoran air raksa dan akurasi penunjukkan", "d. Kebocoran tekanan dan akurasi penunjukkan", "e. Kebocoran air raksa dan tekanan"],
    answer: "d. Kebocoran tekanan dan akurasi penunjukkan"
},
{
    question: "Seorang petugas radiologi datang ke IPSRS melaporkan kerusakan alat rontgen diagnostik. Petugas mengatakan bahwa ketika alat tersebut digunakan untuk pemeriksaan pada seorang pasien, tiba-tiba muncul error. Setelah dilakukan pemeriksaan ternyata ada kerusakan komponen yang berupa trafo filamen. Jenis trafo yang bagaimanakah yang digunakan pada kasus tersebut?",
    options: ["a. trafo step-down", "b. trafo step-up", "c. trafo ferit step-down", "d. autotrafo step-down", "e. autotrafo step-up"],
    answer: "a. trafo step-down"
},
{
    question: "Seorang perawat belum mengetahui pengamanan penggunaan alat Infusion Pump dan menginginkan diajari oleh tenaga elektromedis. Bagaimanakah cara mengajarinya?",
    options: ["a. Pengamanan debu, cairan habis, dan gelembung udara", "b. Pengamanan cairan habis, gelembung udara, dan cairan mampat", "c. Pengamanan cairan mampat, aliran darah balik, dan cairan habis.", "d. Pengamanan aliran darah balik, gelembung udara, dan debu", "e. Pengamanan gelembung udara, debu, cairan habis."],
    answer: "b. Pengamanan cairan habis, gelembung udara, dan cairan mampat"
},
{
    question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem kapasitor discharge yang sedang digunakan cyto bed di ruang perawatan. Petugas mengatakan bahwa alat tersebut tidak dapat dilakukan ekspos karena kV meter tidak dapat menunjuk sesuai dengan pemilihan kV. Setelah dilakukan pemeriksaan dan dianalisis ada kerusakan pada sistem pengisian kapasitor. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut?",
    options: ["a. Cek catu daya dan tegangan kapasitor", "b. Cek catu rangkaian pengisian kapasitor dan tegangan filamen", "c. Cek catu daya dan rangkaian pengisian kapasitor", "d. Cek catu rangkaian pengisian kapasitor dan tegangan tabung sinar-X", "e. Cek catu rangkaian pengisian dan tegangan kapasitor"],
    answer: "c. Cek catu daya dan rangkaian pengisian kapasitor"
},
{
    question: "Seorang perawat pada ruangan operasi melaporkan pada bagian IPS rumah sakit bahwa indikator (ON) peralatan suction pump berfungsi dengan baik tetapi tidak mau bekerja dengan optimal disebabkan karena alat tidak bisa menghisap cairan. Sebagai seorang teknisi alat kesehatan, langkah apa yang paling tepat untuk mengatasi masalah tersebut?",
    options: ["a. Mengganti tabung dengan yang baru", "b. Membersihkan motor dan memberikan minyak pada sistem piston", "c. Mengecek fungsi bagian-bagian suction pump", "d. Menambal selang yang bocor", "e. Mengadakan pembelian alat baru"],
    answer: "b. Membersihkan motor dan memberikan minyak pada sistem piston"
},
{
    question: "Seorang Dokter spesialis kebidanan komplain kepada tenaga elektromedis tentang hasil gambar dari USG ternyata tidak sesuai dengan gambar yang dihasilkan, banyak udara yang terekam. Langkah pertama apakah yang dilakukan?",
    options: ["a. Memeriksa transducer pakai aguasonic gel.", "b. Memeriksa transducer bekerja atau tidak", "c. Memeriksa posisi objek ada airnya atau tidak", "d. Memeriksa dayanya cukup atau tidak.", "e. Memeriksa objek bergerak-gerak atau tidak"],
    answer: "a. Memeriksa transducer pakai aguasonic gel."
},
{
    question: "Seorang dokter melakukan pemeriksaan menggunakan alat CTG. Dalam penggunaannya, alat CTG memiliki 2 elektroda. Dimanakah letak kedua elektroda alat CTG akan digunakan?",
    options: ["a. Di perut ibu", "b. Di bagian punggung janin ibu", "c. Di mana saja bisa asal di daerah perut ibu", "d. Di bagian fundus ibu", "e. Di bagian punggung janin dan fundus ibu"],
    answer: "e. Di bagian punggung janin dan fundus ibu"
},
{
    question: "Sebuah alat EEG yang baru dibeli, membutuhkan ruangan untuk pengoperasian yang ideal. Sebagai seorang teknisi elektromedis, saudara diminta untuk memberikan informasi yang dibutuhkan. Apa saja persyaratan ruangan yang dibutuhkan?",
    options: ["a. Ruangan memiliki sumber tegangan, ber-AC, terhubung dengan ground", "b. Ruangan memiliki sumber ber-ground, medan magnet tidak mempengaruhi perekaman, kondisi ruang tertutup, ber-AC, pengaturan kelembaban dan tekanan udara sesuai dengan spesifikasi", "c. Ruangan memiliki sumber tegangan, ber-AC, terhubung dengan ground, memiliki meja periksa pasien, ruangan tertutup.", "d. Ruangan memiliki sumber tegangan, ber-AC, terhubung dengan ground, ada ruang tunggu keluarga pasien", "e. Ruangan memiliki sumber tegangan, ber-AC, terhubung dengan ground, memiliki meja periksa pasien"],
    answer: "b. Ruangan memiliki sumber ber-ground, medan magnet tidak mempengaruhi perekaman, kondisi ruang tertutup, ber-AC, pengaturan kelembaban dan tekanan udara sesuai dengan spesifikasi"
},
{
    question: "Keadaan sedang melakukan pengukuran alat (kalibrasi) dengan ventilator tester dengan setting TV 600mL, RR 12, I:E 1:2, PEEP: 5, hasil pada alat kalibrasi: TV: 600, RR: 12, I:E: 1:2, PEEP: 5 dan pada alat ventilator TV: 400, RR: 12, I:E: 1:2, terdapat perbedaan antara display alat dengan alat ukur. Langkah apa yang dilakukan oleh tenaga elektromedis untuk menangani alat tersebut?",
    options: ["a. Lakukan pemeriksaan pada tekanan gas supply dan patient circuit", "b. Lakukan pemeriksaan pada flow sensor dan lakukan penggantian", "c. Lakukan perubahan pada setting TV", "d. Lakukan pemeriksaan pada patient circuit", "e. Lakukan penggantian patient circuit"],
    answer: "b. Lakukan pemeriksaan pada flow sensor dan lakukan penggantian"
},
{
    question: "Seorang Dokter PPDS kebidanan belajar mengoperasikan alat USG dengan menggunakan bermacam transducer yang dipakai untuk pemeriksaan objek yang diam maupun yang bergerak. Untuk memeriksa objek yang diam dan transducernya diam, mode manakah yang akan digunakan?",
    options: ["a. Mode E Scanning", "b. Mode A Scanning.", "c. Mode M Scanning.", "d. Mode TM Scanning", "e. Mode B Scanning"],
    answer: "b. Mode A Scanning."
},
{
    question: "Rumah Sakit A membeli alat baru, sebuah Hematology Analyzer untuk bagian laboratorium. Cairan manakah yang digunakan untuk pengoperasian alat tersebut?",
    options: ["a. Cairan Pembilas", "b. Cairan Elektrolit", "c. Cairan Diluent", "d. Air", "e. Cairan Cleansing"],
    answer: "c. Cairan Diluent"
},
{
    question: "Sebagai upaya untuk meningkatkan fungsi dan kegunaan Alat Bedside Monitor, secara periodik dilakukan pencatatan terhadap kelengkapan Aksesori dan bahan habis pakai, sehingga saat alat digunakan sudah siap pakai. Aksesori apa saja yang dibutuhkan sebagai kelengkapan bedside monitor?",
    options: ["a. Patient Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, Adult NIBP cuff, Adult NIBP hose, Neonate NIBP cuff, Neonate NIBP Hose, Temperature Probe, Thermal Printing Paper", "b. Patient Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, NIBP cuff, NIBP Hose, Temperature Probe, Adult NIBP cut off, Thermal Printing Paper", "c. Patient Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, Adult NIBP cuff, Adult NIBP Hose, Neonate NIBP cuff, Neonate NIBP Hose, Temperature Probe.", "d. Patient Cable, Spo2 Sensor, NIBP cut off, NIBP Hose, Temperature Probe, Neonate SPO2 Sensor, Thermal Printing Paper", "e. Patient Cable, Spo2 Sensor, NIBP cuff, NIBP Hose, Temperature Probe, Thermal Paper, Neonate SPO2 Sensor, Adult NIBP cut off"],
    answer: "c. Patient Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, Adult NIBP cuff, Adult NIBP Hose, Neonate NIBP cuff, Neonate NIBP Hose, Temperature Probe."
},
{
    question: "Autoclave merk Hiclave HVP-50 merupakan alat sterilisator yang menghasilkan uap panas dengan tekanan uap yang mencapai 121 °C. Dengan tekanan uap yang cukup besar, perlu sebuah monitor yang dapat menginformasikan pengguna tentang keadaan suatu autoclave untuk meminimalisir adanya kecelakaan saat pengoperasian. Apabila terjadi suatu kerusakan pada display autoclave, apa yang harus dilakukan oleh seorang teknisi?",
    options: ["a. Memeriksa kondisi sekitar autoclave", "b. Memeriksa sumber panas pada autoclave", "c. Mengganti timer pada autoclave", "d. Memeriksa tegangan input pada mainboard autoclave", "e. Mengganti thermostat pada autoclave"],
    answer: "d. Memeriksa tegangan input pada mainboard autoclave"
},
{
    question: "Suction pump digunakan secara rutin oleh bagian bedah pada rumah sakit untuk menghisap cairan tubuh pasien. Untuk menjaga agar motor pump bekerja dengan baik, apa yang akan dilakukan oleh tenaga elektromedis?",
    options: ["a. Melilit ulang motor secara berkala.", "b. Ruangan sekitar motor harus dingin agar motor tidak cepat panas.", "c. Memanasi motor sebelum penggunaan alat.", "d. Membersihkan motor dari cairan pasien secara berkala.", "e. Mengganti oli motor secara berkala."],
    answer: "e. Mengganti oli motor secara berkala."
},
{
    question: "Pada alat suction pump sebuah rumah sakit dilaporkan daya hisap tersendat sehingga cairan yang masuk pada chamber tersendat. Motor dalam keadaan baik, selang ratap chamber tidak penuh. Analisa awal sebagai seorang elektromedis adalah",
    options: ["a. Terjadi sumbatan pada selang", "b. Perlu kalibrasi ulang", "c. Fisika rusak", "d. Motor tidak bekerja", "e. Chamber tidak vacuum"],
    answer: "a. Terjadi sumbatan pada selang"
},
{
    question: "Salah satu aksesoris dari USG adalah transduser. Transduser merupakan perangkat pemindaian genggam, di mana dapat memancarkan gelombang suara yang kemudian diperkuat dan dipantulkan saat mengenai benda padat. Mode ini dapat membantu melacak pergerakan sel darah saat ada nada pantulan gelombang suara berubah, yang dikenal sebagai efek Doppler. Berikut merupakan gelombang yang mempengaruhi efek Doppler, kecuali?",
    options: ["a. Gelombang bunyi", "b. Gelombang mikro", "c. Gelombang cahaya", "d. Gelombang bias", "e. Gelombang elektromagnetik"],
    answer: "d. Gelombang bias"
},
{
    question: "Sebuah Alat Auto Analyzer Spektrofotometer akan dipasang di sebuah laboratorium. Sebelum pemasangan diperlukan instalasi penunjang. Instalasi apa saja yang perlu dipersiapkan untuk alat tersebut?",
    options: ["a. Instalasi listrik dan Instalasi Gas Medik", "b. Instalasi Gas Medik dan Instalasi Air", "c. Instalasi listrik dan Instalasi Air", "d. Instalasi Gas Medik dan Jaringan Komputer", "e. Instalasi Listrik dan Jaringan Komputer"],
    answer: "d. Instalasi Gas Medik dan Jaringan Komputer"
},
{
    question: "Sebuah rumah sakit memutuskan menggunakan software manajemen pemeliharaan open-source yang gratis untuk mengelola aset dan pemeliharaannya. Kelebihan penggunaan manajemen pemeliharaan menggunakan teknologi informasi, di antaranya?",
    options: ["a. Mengikuti perkembangan zaman.", "b. Link dengan alat elektromedik.", "c. Mengurangi duplikasi pencatatan dan mempercepat pencarian informasi.", "d. Monitoring alat elektromedik jarak jauh.", "e. Lebih modern."],
    answer: "c. Mengurangi duplikasi pencatatan dan mempercepat pencarian informasi."
},
{
    question: "Alat Hematology Analyzer baru akan dipasang di Laboratorium. Sebutkan persyaratan apa saja yang diperlukan yang ideal?",
    options: ["a. Ruangan memiliki ruang pemeriksaan dan ruang tunggu pasien", "b. Ruangan memiliki Air Conditioning, terhubung dengan ground, ada kran air", "c. Ruangan memiliki sumber tegangan, terhubung dengan ground", "d. Ruangan memiliki sumber tegangan, ber-AC, terhubung dengan ground, ada kran air", "e. Ruangan memiliki sumber tegangan, terhubung ke ground dan ada ruang tunggu pasien"],
    answer: "d. Ruangan memiliki sumber tegangan, ber-AC, terhubung dengan ground, ada kran air"
},
{
    question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem kapasitor discharge yang sedang digunakan cyto bed di ruang perawatan. Petugas tersebut mengatakan bahwa setelah selesai digunakan, sisa muatan kapasitor tidak dapat dikosongkan, walaupun tombol pengosongan ditekan terus menerus. Apakah tindakan awal yang harus dilakukan pada kasus tersebut?",
    options: ["a. Cek shutter dan memperbaiki rangkaian pengosongan", "b. Cek kolimator dan memperbaiki rangkaian pengosongan", "c. Cek HTT dan memperbaiki rangkaian pengosongan", "d. Cek stator anode dan memperbaiki rangkaian pengosongan", "e. Cek filamen dan memperbaiki rangkaian pengosongan"],
    answer: "a. Cek shutter dan memperbaiki rangkaian pengosongan"
},
{
    question: "Dental Unit adalah alat yang digunakan di klinik atau poli gigi untuk mendiagnosis dan melakukan perawatan pada pasien, di mana dalam pengoperasiannya memerlukan air dan angin/udara. Pada peralatan dental unit terdapat bagian yang berfungsi menghisap air liur yaitu?",
    options: ["a. Handpiece", "b. Saliva Ejector", "c. Three way syringe", "d. Seperator", "e. Dental chair"],
    answer: "b. Saliva Ejector"
},
{
    question: "Pasien yang diterima di Instalasi Gawat Darurat sering kali memerlukan pengambilan foto Rontgen. Jenis Alat X-ray manakah yang digunakan di ruang Instalasi Gawat Darurat?",
    options: ["a. C-Arm X-ray", "b. Mobile X-ray", "c. General X-ray", "d. CT-Scan", "e. Simulator X-ray"],
    answer: "b. Mobile X-ray"
},
{
    question: "Seorang perawat ingin mengetahui bagaimana cara menghitung detak jantung per menit dengan menggunakan gambar ECG. Jika diketahui jarak R ke R yang ditunjukkan pada kertas ECG berjarak 3 kotak besar dengan menggunakan kecepatan kertas 25 mm/dt. Berapa jumlah detak jantung per menit?",
    options: ["a. 50 BPM", "b. 100 BPM", "c. 60 BPM", "d. 40 BPM", "e. 75 BPM"],
    answer: "b. 100 BPM"
},
{
    question: "Alat EEG baru di poli syaraf. Saat dilakukan uji fungsi dengan menggunakan phantom, ternyata hasil perekaman masih tampak sinyal gangguan, meskipun sudah dipasang sangkar Faraday. Apa yang tepat dilakukan oleh seorang tenaga elektromedis untuk itu?",
    options: ["a. Memperdalam grounding", "b. Memindahkan alat EEG ke ruangan lain.", "c. Mengukur kembali tahanan grounding ruangan", "d. Menambah rapat sangkar Faraday", "e. Mencari sumber interferensi"],
    answer: "c. Mengukur kembali tahanan grounding ruangan"
},
{
    question: "Mikroskop cahaya merupakan alat yang digunakan untuk melihat bagian-bagian yang sangat kecil pada suatu benda yang tidak dapat dilihat dengan mata telanjang. User mengeluhkan penglihatan pada mikroskop cahaya kurang jelas padahal sudah dibersihkan lensanya dan masih bagus. Apakah yang harus Saudara lakukan untuk menangani alat tersebut?",
    options: ["a. Melakukan setting ulang posisi lensa.", "b. Mengganti lensa objektif.", "c. Mengatur kondensor.", "d. Mengganti lampu mikroskop.", "e. Mengganti lensa okuler."],
    answer: "d. Mengganti lampu mikroskop."
},
{
    question: "Rumah sakit A membeli alat USG. Seorang tenaga elektromedis ditugaskan untuk membuat standard operasional prosedur (SOP). Tindakan apa yang tepat oleh seorang tenaga elektromedis sebelum membuat SOP yang baik?",
    options: ["a. Membuat SOP sendiri sesuai dengan pengalaman yang dimiliki", "b. Membaca wiring diagram dan blok diagram alat tersebut", "c. Melakukan uji fungsi", "d. Melakukan pengumpulan data tentang alat tersebut dan spesifikasinya", "e. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat"],
    answer: "e. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat"
},
{
    question: "RS Sumber Waras sedang melakukan pengadaan alat medis, salah satunya yakni mesin Doppler untuk memenuhi kebutuhan riset rumah sakit bersalin. Apa fungsi dari alat Doppler?",
    options: ["a. Alat yang digunakan untuk mendeteksi denyut jantung bayi yang menggunakan prinsip pantulan gelombang elektromagnetik", "b. Alat untuk terapi otot.", "c. Alat yang digunakan untuk penyembuhan penyakit asma", "d. Alat yang digunakan untuk terapi stroke", "e. Alat untuk mengukur tekanan darah"],
    answer: "a. Alat yang digunakan untuk mendeteksi denyut jantung bayi yang menggunakan prinsip pantulan gelombang elektromagnetik"
},
{
    question: "Tahapan akhir dari pengoperasian alat elektromedik adalah pengemasan, yang berpengaruh pada usia alat. Berikut yang tidak termasuk dalam pengemasan alat adalah?",
    options: ["a. Mencatat beban kerja", "b. Mematikan alat sesuai prosedur.", "c. Menghidupkan alat sesuai prosedur.", "d. Melepaskan hubungan alat dari catu daya.", "e. Membersihkan alat atau aksesoris setelah digunakan."],
    answer: "c. Menghidupkan alat sesuai prosedur."
},
{
    question: "Seorang perawat rumah sakit sedang melakukan pemeriksaan menggunakan tensimeter digital. Ketika alat tensimeter dinyalakan, tensimeter tersebut berjalan normal, akan tetapi manset tidak berkembang. Sebagai tenaga elektromedis, kemungkinan apa yang terjadi pada alat tensimeter digital tersebut?",
    options: ["a. Manset sudah lama", "b. Bulb sudah lama", "c. Bulb rusak", "d. Manset rusak", "e. Selang manset bocor"],
    answer: "e. Selang manset bocor"
},
{
    question: "Berdasarkan analisa kerusakan terhadap alat Suction Pump Portable yang mengalami kurangnya daya hisap, sedangkan kondisi aksesoris seperti selang dan botol penampungan dalam keadaan normal. Maka untuk mengatasi hal tersebut, tindakan apa yang dilakukan? Tindakan perbaikan yang harus dilakukan?",
    options: ["a. Mengganti selang dengan yang baru", "b. Memeriksa klep hisap & klep buang", "c. Mengganti filter", "d. Mengganti oli", "e. Overhaul"],
    answer: "b. Memeriksa klep hisap & klep buang"
},
{
    question: "Untuk melakukan pemeriksaan jantung dapat dilakukan di klinik ataupun rumah sakit. Banyak prosedur yang dapat dilakukan untuk melakukan pemeriksaan jantung. Pemeriksaan standar yakni menggunakan elektrokardiograf (EKG) dengan metode resting 12-Lead EKG menggunakan 12 elektroda. Pada dasarnya dari beberapa merek atau tipe EKG, dari segi tata cara hampir sama dimulai tahap pra operasional kecuali?",
    options: ["a. Cek power cord", "b. Cek lingkungan sekitar", "c. Cek kondisi kabel pasien", "d. Menentukan filter", "e. Cek kondisi elektroda"],
    answer: "d. Menentukan filter"
},
{
    question: "Seorang perawat sedang mengukur tekanan darah pasien menggunakan sphygmomanometer raksa. Perawat tersebut mengalami suatu kendala. Pada saat melakukan pengukuran tekanan darah, terjadi penurunan yang lambat pada air raksa. Sebagai tenaga elektromedis, langkah apa yang pertama kali dilakukan untuk menangani alat tersebut?",
    options: ["a. Membongkar alat untuk melakukan pengecekan", "b. Melakukan pemeriksaan pada tekanan bulb", "c. Melakukan pembersihan tabung", "d. Melakukan pengadaan alat yang baru", "e. Melakukan penggantian manset dengan manset yang baru"],
    answer: "a. Membongkar alat untuk melakukan pengecekan"
},
{
    question: "Tenaga elektromedis akan memasang alat USG di rumah sakit. Membutuhkan voltage 200V - 220V dan frekuensi 60Hz, ruangan yang terhindar dari interferensi frekuensi. Tindakan apakah yang tepat dilakukan untuk mempersiapkan kelengkapan ruangan yang memenuhi syarat?",
    options: ["a. Mengukur tahanan groundingnya.", "b. Mengukur dengan AVO Meter", "c. Mengukur tahanan kabel ruangan tersebut", "d. Mengukur sumber tegangan listrik dan frekuensinya.", "e. Mengukur tegangan chasis dan kabel power supply"],
    answer: "d. Mengukur sumber tegangan listrik dan frekuensinya."
},
{
    question: "Seorang operator radiologi datang ke IPSRS melaporkan permasalahan alat Rontgen (general X-Ray) di ruang Radiologi. Petugas mengatakan bahwa setelah dilakukan foto rontgen, hasilnya terdapat bayangan baris-baris yang melekat pada film. Apakah tindakan saudara terhadap kasus tersebut di atas?",
    options: ["a. Cek collimator - atur lapangan penyinaran", "b. Cek meja pasien - bersihkan meja pasien", "c. Cek window - bersihkan/ganti filter aluminium (Al)", "d. Cek collimator - bersihkan/ganti lampu collimator", "e. Cek moving grid - perbaiki rangkaian moving grid"],
    answer: "e. Cek moving grid - perbaiki rangkaian moving grid"
},
{
    question: "Pada alat suction pump pada sebuah rumah sakit dilaporkan suara dari motor bergetar keras. Sebagai seorang elektromedis, langkah awal pengecekan adalah?",
    options: ["a. Cek chamber apakah masih vacuum", "b. Cek sambungan selang ke chamber", "c. Cek fuse apakah masih bekerja", "d. Cek daya yang masuk pada motor", "e. Cek oli pada motor"],
    answer: "e. Cek oli pada motor"
},
{
    question: "Lampu operasi tidak sama dengan lampu-lampu pada umumnya, karena lampu operasi harus memiliki syarat: tidak boleh panas dan tidak ada bayangan pada objek, karena dapat mengganggu proses tindakan operasi. Untuk itu lampu operasi memakai lampu halogen. Hal yang perlu diperhatikan dalam penggantian lampu halogen adalah?",
    options: ["a. Mengatur posisi lampu.", "b. Lampu tidak boleh disentuh dengan tangan langsung", "c. Posisi lensa okuler dan objek harus pada posisi menyilang", "d. Lampu harus sama tinggi.", "e. Warna lampu halogen kuning."],
    answer: "b. Lampu tidak boleh disentuh dengan tangan langsung"
},
{
    question: "Seorang tenaga elektromedis mendapatkan komplain dari dokter spesialis kandungan mengenai hasil USG. Dokter mengatakan bahwa hasil citra USG tidak sesuai, terlalu banyak udara yang terekam. Bagian mana pada USG yang dapat digunakan untuk menampilkan hasil pemeriksaan pasien?",
    options: ["a. CPU", "b. Transduser", "c. Pulse control", "d. Display (LCD)", "e. Monitor"],
    answer: "d. Display (LCD)"
},
{
    question: "Hasil rekaman EKG tidak terdapat interpretasi dari pengukuran. Langkah awal apa yang dilakukan oleh tenaga elektromedis untuk kasus tersebut?",
    options: ["a. Memeriksa setting alat apakah sudah di set menu interpretasi", "b. Memeriksa hubungan grounding listrik", "c. Memeriksa pemakaian gel ke pasien", "d. Memeriksa kertas EKG apakah sudah sesuai dengan alat EKG", "e. Memeriksa kabel EKG apakah sudah terpasang dengan benar"],
    answer: "a. Memeriksa setting alat apakah sudah di set menu interpretasi"
},
{
    question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem kapasitor discharge yang sedang digunakan cyto bed di ruang perawatan. Petugas tersebut mengatakan bahwa setelah selesai digunakan, sisa muatan kapasitor tidak dapat dikosongkan, walaupun tombol pengosongan ditekan terus menerus. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut di atas?",
    options: ["a. Cek kolimator dan memperbaiki rangkaian pengosongan", "b. Cek stator anode dan memperbaiki rangkaian pengosongan", "c. Cek shutter dan memperbaiki rangkaian pengosongan", "d. Cek HTT dan memperbaiki rangkaian pengosongan", "e. Cek filamen dan memperbaiki rangkaian pengosongan"],
    answer: "c. Cek shutter dan memperbaiki rangkaian pengosongan"
},
{
    question: "Jika pada saat awal user mengoperasikan alat ESU, ternyata terdapat keluhan bahwa display pada alat tersebut tidak menyala dan alat mengeluarkan asap. Sebagai tenaga teknik elektromedik, analisis apa yang Anda lakukan?",
    options: ["a. Mengecek sambungan elektroda pasif terhadap grounding", "b. Mengganti fuse", "c. Mengecek pada footswitch", "d. Mengecek kerusakan pada blok power supply dan blok display", "e. Mengecek kerusakan pada blok pembangkit frekuensi"],
    answer: "d. Mengecek kerusakan pada blok power supply dan blok display"
},
{
    question: "Seorang Elektromedis melakukan analisis kerusakan pesawat rontgen yang terjadi pada rangkaian filamen. Setelah dilakukan analisis dengan melakukan pengukuran tegangan pada input trafo filamen, diperoleh tegangan yang sesuai dengan perhitungan. Tindakan apakah yang harus dilakukan selanjutnya?",
    options: ["a. Melakukan pengukuran konduktivitas kabel tegangan tinggi", "b. Melakukan pengukuran induktansi trafo filamen", "c. Melakukan pengukuran arus pada skunder trafo filamen", "d. Melakukan pengukuran konduktivitas trafo filamen", "e. Melakukan pengukuran tegangan pada skunder trafo filamen"],
    answer: "a. Melakukan pengukuran konduktivitas kabel tegangan tinggi"
},
{
    question: "Pada alat suction pump di sebuah rumah sakit dilaporkan tidak dapat menghisap dengan baik. Sebagai seorang elektromedis, analisa awal kerusakan adalah?",
    options: ["a. Daya listrik tidak sesuai", "b. Motor tidak maksimal bekerja", "c. Terjadi kerusakan pada fuse", "d. Manometer rusak", "e. Kerusakan pada kabel inputan"],
    answer: "b. Motor tidak maksimal bekerja"
},
{
    question: "Seorang perawat melaporkan kepada Bagian Instalasi Pemeliharaan Sarana Rumah Sakit bahwa alat phototherapy sudah tercatat pemakaiannya di display hourmeter sebanyak 1100 jam. Apa yang tepat dilakukan oleh tenaga elektromedis untuk hal tersebut?",
    options: ["a. Melakukan pemeriksaan catu daya listrik pada lampu dengan mengukur tegangan dan arus yang mengalir pada lampu.", "b. Melakukan pemeriksaan pada rangkaian hourmeter dan mereset agar display menunjukkan angka nol.", "c. Melakukan pengukuran tegangan dan arus yang mengalir pada lampu dan mereset agar display pada hourmeter menunjukkan angka nol", "d. Melakukan penggantian lampu dan mereset agar display pada hourmeter menunjukkan angka nol.", "e. Melakukan penggantian lampu dan mencatat penggunaan lampu baru pada posisi awal 1100 jam pada kartu pemeliharaan preventif."],
    answer: "e. Melakukan penggantian lampu dan mencatat penggunaan lampu baru pada posisi awal 1100 jam pada kartu pemeliharaan preventif."
},
{
    question: "Beberapa perusahaan menawarkan peralatan suction pump pada sebuah rumah sakit dan melibatkan seorang elektromedis. Sebagai seorang elektromedis, pertimbangan awal yang perlu diperhatikan adalah",
    options: ["a. Diskon yang diberikan", "b. Legalitas perusahaan penyedia", "c. Harga terendah yang ditawarkan", "d. Spesifikasi dan dokumentasi yang sesuai", "e. Masa usia alat"],
    answer: "d. Spesifikasi dan dokumentasi yang sesuai"
},
{
    question: "Bagi seorang Elektromedis, wajib melakukan pemeliharaan secara periodik terhadap semua peralatan medis sehingga dapat dijaga kondisinya pada saat diperlukan, salah satunya adalah pemeliharaan pada alat rontgen sistem kapasitor discharge. Bagaimanakah tindakan yang sesuai dengan SOP pemeliharaan pada alat tersebut?",
    options: ["a. Hubungkan alat ke catu daya - hidupkan alat - tekan tombol pengosongan elektrik - matikan alat - lepaskan catu daya - tarik tombol pengosongan manual - lakukan pemeliharaan", "b. Matikan alat - tekan tombol pengosongan elektrik - lepaskan catu daya - tarik tombol pengosongan manual - lakukan pemeliharaan", "c. Matikan alat - Lepaskan catu daya - tekan tombol pengosongan elektrik - tarik tombol pengosongan manual - lakukan pemeliharaan", "d. Matikan alat - Lepaskan catu daya - tekan tombol pengosongan elektrik - tarik tombol pengosongan manual - lakukan pemeliharaan", "e. Hubungkan alat ke catu daya - hidupkan alat - tarik tombol pengosongan manual - tekan tombol pengosongan elektrik - matikan alat - lepaskan catu daya - lakukan pemeliharaan"],
    answer: "a. Hubungkan alat ke catu daya - hidupkan alat - tekan tombol pengosongan elektrik - matikan alat - lepaskan catu daya - tarik tombol pengosongan manual - lakukan pemeliharaan"
},
{
    question: "Sterilisasi adalah prosedur yang harus dilakukan sebelum instrumen digunakan pada proses pembedahan, untuk itu pengoperasian alat autoclave harus dilakukan sebaik-baiknya. Sebutkan langkah-langkah pengoperasian alat?",
    options: ["a. Isi air pada kontainer, tekan tombol ON/OFF, atur timer, tekan start, masukkan instrumen", "b. Isi air pada kontainer, masukkan instrumen, tekan tombol ON/OFF, atur timer, tekan start", "c. Tekan tombol ON/OFF, atur timer, tekan start dan masukkan instrumen", "d. Tekan tombol ON/OFF, masukkan instrumen dan isi air pada kontainer", "e. Isi air pada kontainer, masukkan instrumen, tekan tombol ON/OFF, tekan start"],
    answer: "b. Isi air pada kontainer, masukkan instrumen, tekan tombol ON/OFF, atur timer, tekan start"
},
{
    question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat infant warmer yang dinilai dari aspek pengamanan. Aspek pengamanan apa yang harus dilakukan pada peralatan infant warmer?",
    options: ["a. Memasang rangkaian pengaman dioda", "b. Memasang trafo isolasi.", "c. Memasang sensor suhu", "d. Memasang sensor kelembaban", "e. Memperdalam grounding listrik"],
    answer: "e. Memperdalam grounding listrik"
},
{
    question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat ESU dengan beberapa efek yang dihasilkan oleh arus listrik frekuensi tinggi yang dialirkan ke dalam jaringan biologis. Efek apa saja yang terjadi pada peralatan ESU?",
    options: ["a. Efek panas, efek faradik dan efek elektrolitik", "b. Efek galvanik, efek panas, dan efek elektrolitik", "c. Efek panas, efek galvanik dan efek biologis.", "d. Efek galvanik, efek faradik, dan efek panas.", "e. Efek galvanik, efek faradik dan efek elektrolitik"],
    answer: "a. Efek panas, efek faradik dan efek elektrolitik"
},
{
    question: "Di salah satu rumah sakit terdapat peralatan spektrofotometer yang baru datang untuk digunakan pada laboratorium. Apa yang akan dilakukan untuk menangani peralatan baru?",
    options: ["a. Melakukan pencatatan harian, mingguan, bulanan dan tahunan.", "b. Melakukan preventive maintenance.", "c. Melakukan pencatatan merk alat.", "d. Melakukan pencatatan dan pelabelan", "e. Melakukan pencatatan, pemeriksaan, pemeliharaan dan mengevaluasi"],
    answer: "d. Melakukan pencatatan dan pelabelan"
},
{
    question: "Untuk meningkatkan pelayanan kesehatan, sebuah rumah sakit akan melengkapi alat dengan peralatan bedside monitor yang baru, dengan kebutuhan 5 parameter pengukuran. Dapatkah Anda menyebutkan parameter tersebut?",
    options: ["a. EKG, SPO2, NIBP, Temperature (2 channel)", "b. EKG, SPO2, NIBP, Temperature, Respiration", "c. EKG, SPO2, NIBP, Respiration, Heart Rate", "d. EKG (2 channel), SPO2, NIBP, Temperature", "e. EKG, SPO2, NIBP, Temperature, Heart Rate"],
    answer: "b. EKG, SPO2, NIBP, Temperature, Respiration"
},
{
    question: "Saudara akan menguji defibrillator pada model pasien. Dua buah elektrodanya harus ditempatkan/ditempelkan pada dua tempat di dada pasien. Di mana posisi elektroda ditempelkan?",
    options: ["a. Sisi kanan dan kiri jantung", "b. Di samping kiri dan kanan ventrikel", "c. Di samping kiri dan kanan atrium", "d. Di samping ventrikel kanan dan di atas atrium kanan", "e. Di bawah clavicula kanan dan bagian kiri di bawah pectoral muscle"],
    answer: "e. Di bawah clavicula kanan dan bagian kiri di bawah pectoral muscle"
},
{
    question: "Tegangan jala-jala (line) sangat berpengaruh pada kinerja alat rontgen, oleh sebab itu diperlukan komponen LVC yang berfungsi untuk mengkompensasi tegangan jala-jala (line) agar sesuai dengan tegangan yang dibutuhkan oleh alat. Bagaimanakah bila terjadi penurunan tegangan jala-jala (line) pada alat tersebut?",
    options: ["a. Menambah jumlah lilitan dengan memutar LVC berlawanan arah jarum jam", "b. Mengurangi jumlah lilitan dengan memutar LVC berlawanan arah jarum jam", "c. Menambah tegangan dengan memutar LVC berlawanan arah jarum jam", "d. Menambah jumlah lilitan dengan memutar LVC searah jarum jam", "e. Mengurangi jumlah lilitan dengan memutar LVC searah jarum jam"],
    answer: "e. Mengurangi jumlah lilitan dengan memutar LVC searah jarum jam"
},
{
    question: "Seorang petugas radiologi melaporkan kerusakan alat rontgen diagnostik. Petugas tersebut mengatakan bahwa ketika tombol ready ditekan, indikator ready tidak menyala, sehingga tidak dapat dilakukan ekspos. Setelah dilakukan pemeriksaan dan dianalisis ada kerusakan pada kontrol arus tabung. Sebagai langkah awal pada kasus tersebut adalah melakukan pengecekan....?",
    options: ["a. Konduktivitas filamen.", "b. Arus tabung sinar-X", "c. Impedansi filamen.", "d. Resistansi filamen.", "e. Resistansi mA Control"],
    answer: "e. Resistansi mA Control"
},
{
    question: "Pada alat suction pump di sebuah klinik dilaporkan kerusakan, daya masuk namun alat tidak bekerja. Sebagai seorang elektromedis, analisa awal kerusakan adalah?",
    options: ["a. Kalibrasi ulang", "b. Tabung tidak vacuum", "c. Kerusakan pada motor", "d. Periksa selang penghubung", "e. Periksa fuse pada alat"],
    answer: "e. Periksa fuse pada alat"
},
{
    question: "Pada suatu rumah sakit terdapat pengadaan peralatan kesehatan sebagai berikut: Opthalmoscope, Slit lamp, Trial Lens, Auto Chart Projector. Ditempatkan di ruang mana pada suatu rumah sakit untuk paket peralatan tersebut?",
    options: ["a. Laboratorium", "b. Poli Jantung", "c. Poli Penyakit Dalam", "d. Poli Mata", "e. Poli Anak"],
    answer: "d. Poli Mata"
},
{
    question: "Dokter mengeluhkan putaran motor bor dental unitnya tidak bekerja normal (lambat) sehingga tidak dapat digunakan untuk melakukan pemeriksaan. Alat apakah yang digunakan untuk menangani hal tersebut?",
    options: ["A. Handpiece", "B. Saluran air", "C. Saluran pembuangan air", "D. Saluran kompresor", "E. Valve di rangkaian kontrol"],
    answer: "A. Handpiece"
},
{
    question: "Pada pemasangan lampu operasi dan ketika akan digunakan, masalah yang terjadi apabila lampu tersebut ditarik menuju objek akan kembali lagi ke posisi semula. Apa yang dilakukan oleh teknisi agar lampu tersebut tidak kembali ke posisi semula saat ditarik kepada objek?",
    options: ["A. Cek hidraulik siku-siku body lampu", "B. Pasang kunci pada hidraulik", "C. Pasang tutup pemberat pada bagian kepala lampu", "D. Cek motor penggerak hidraulik", "E. Lakukan penginstalan ulang"],
    answer: "A. Cek hidraulik siku-siku body lampu"
},
{
    question: "Seorang elektromedis melakukan uji fungsi alat ultrasonography (USG) yang mengalami masalah yaitu pada saat alat diaktifkan, sistem yang berjalan tidak sesuai program. Apakah tindakan yang dilakukan untuk menormalkan alat tersebut?",
    options: ["A. Reinstall program", "B. Mengganti probe", "C. Menghapus sebagian data yang tersimpan", "D. Memperbaiki software penunjang", "E. Mengganti baterai BIOS"],
    answer: "A. Reinstall program"
},
{
    question: "Pada sebuah buku service manual & user manual alat pembangkit sinar-X terdapat petunjuk bahwa pembangkitan sinar-X membutuhkan beda potensial antara katoda & anoda. Kebutuhan tersebut diperlukan agar elektroda ... dipercepat energi kinetiknya ketika bertumbukan dengan target. Apakah jenis trafo yang dapat menghasilkan beda potensial listrik sesuai kebutuhan tersebut?",
    options: ["A. Trafo step down", "B. Trafo filament", "C. Trafo step up", "D. Trafo tabung", "E. Trafo distribusi daya"],
    answer: "C. Trafo step up"
},
{
    question: "Terdapat keluhan kerusakan ESU yang menimbulkan hasil tidak baik pada saat kalibrasi menggunakan ESU analyzer. Padahal pada saat digunakan bunyi alarm sedangkan ruangan instalasi bedah sudah terdapat instalasi grounding ruangan baik. Kerusakan pada komponen apa yang mungkin terjadi pada kasus tersebut?",
    options: ["A. Foot switch", "B. Finger tip switch", "C. Rangkaian output isolation", "D. Kabel netral electrode putus", "E. Rangkaian cutting dan coagulating"],
    answer: "D. Kabel netral electrode putus"
},
{
    question: "Pada alat Electrosurgery / ESU sering terjadi kebocoran arus pada alat tersebut dan hal ini perlu dilakukan pengukuran dan kalibrasi untuk kebocoran arusnya. Bagaimanakah cara yang Anda lakukan dalam melakukan pengukuran dan kalibrasi pada alat tersebut?",
    options: ["A. Menggunakan Incu Analyzer sebagai kalibratornya", "B. Menggunakan pressure meter sebagai kalibratornya", "C. Menggunakan Safety Analyzer sebagai kalibratornya", "D. Menggunakan fuse pasien sebagai kalibratornya", "E. Menggunakan Electrical Analyzer sebagai kalibratornya"],
    answer: "C. Menggunakan Safety Analyzer sebagai kalibratornya"
},
{
    question: "Seorang dokter melakukan pemeriksaan menggunakan alat ultrasonography. Setelah selesai pemeriksaan, hasil ultrasonography untuk di-print namun hasil tidak dapat tercetak. Tindakan apakah yang dilakukan elektromedis supaya alat tersebut dapat diprint?",
    options: ["A. Periksa dan hubungkan koneksi printer mesin dengan baik", "B. Menghubungkan keyboard dengan CPU, kabel keyboard putus", "C. Mengganti harddisk", "D. Grounding tidak baik", "E. Melakukan perbaikan pada LCD"],
    answer: "A. Periksa dan hubungkan koneksi printer mesin dengan baik"
},
{
    question: "Alat yang dikembangkan ini terdiri dari sebuah bio amplifier yang menguatkan sinyal-sinyal gelombang listrik yang berasal dari cantung dalam (potensial sinyal) tersebut dipengaruhi oleh banyak sinyal lain yang dikategorikan sebagai noise yang berasal dari banyak sumber di luar tubuh manusia. Yang sedang diamati, apa nama rangkaian yang dapat meredam noise pada kasus di atas?",
    options: ["A. ADC", "B. Filter", "C. Monitor", "D. Optocoupler", "E. Microcontroller"],
    answer: "B. Filter"
},
{
    question: "Perkembangan teknologi alat di rumah sakit sangat berkembang dengan cepat. Para dokter di rumah sakit biasanya akan meminta peralatan kesehatan yang baru dengan alasan bahwa alat yang dipakai sekarang sudah tidak akurat dan berstandar dengan baik. Apa yang Anda lakukan dalam menanggapi hal ini?",
    options: ["A. Memperbaiki dan mengkalibrasi alat", "B. Menservice dan inventaris alat", "C. Memberikan brosur alat baru", "D. Membuat berita acara palsu", "E. Memanggil distributor"],
    answer: "A. Memperbaiki dan mengkalibrasi alat"
},
{
    question: "Pada pengoperasian peralatan autoclave tidak terjadi sterilisasi. Teknisi melakukan pengecekan dengan menggunakan kertas lakmus dan hasilnya tetap tidak berubah. Apakah penyebab dari kerusakan tersebut?",
    options: ["A. Sensor suhu", "B. Kesalahan pengoperasian", "C. Membran solenoid valve", "D. Elemen putus", "E. Tekanan bocor"],
    answer: "C. Membran solenoid valve"
},
{
    question: "Seorang teknisi yang sedang melakukan kalibrasi pada pesawat EKG dengan menggunakan simulator EKG mendapatkan hasil amplitudo sinyal kotak yang dihasilkan. Ketika pemilihan 0,5 tidak mencapai satu kotak besar. Bagian apa dari alat yang perlu dilakukan penyesuaian?",
    options: ["A. Kecepatan motor kertas", "B. Sensitivity", "C. Filter", "D. Adjustment posisi stylus", "E. Suhu stylus"],
    answer: "B. Sensitivity"
},
{
    question: "Seorang teknisi melakukan kegiatan pemeliharaan lampu operasi. Setiap akan melakukan operasi atau sesudah melakukan operasi, kebersihan dan kelengkapan alat-alat operasi akan selalu dicek terlebih dahulu. Bagaimanakah cara melakukan pemeliharaan alat elektronik tersebut?",
    options: ["A. Dibersihkan dengan kain lap kasar", "B. Dibersihkan dengan kain lap basah", "C. Dibersihkan dengan kain lap halus", "D. Melakukan pelepasan pada lampu", "E. Melakukan penggantian lampu"],
    answer: "C. Dibersihkan dengan kain lap halus"
},
{
    question: "Seorang perawat mengeluhkan bahwa hasil perekaman EKG menunjukkan hanya Lead 1 yang baik, sedangkan lead yang lain menghasilkan banyak noise. Apakah yang harus diperiksa oleh teknisi elektromedik?",
    options: ["A. Periksa dan perbaikan kabel power", "B. Periksa dan perbaiki pemasangan kabel pasien", "C. Periksa dan perbaiki pemasangan kabel RA", "D. Periksa dan perbaiki pemasangan kabel LA", "E. Periksa dan perbaiki pemasangan kabel F"],
    answer: "B. Periksa dan perbaiki pemasangan kabel pasien"
},
{
    question: "Pada alat diathermy terdapat jenis-jenis elektroda yang bersifat induktif yang digunakan ke pasien dengan beberapa pilihan elektroda. Sebutkan jenis-jenis elektroda tersebut.",
    options: ["A. Elektrode kabel, monode dan diplode", "B. Elektronika aktif, pasif, netral", "C. Elektrode jarum, bola, lingkaran", "D. Elektrode transvaginal, linier, konveks", "E. Elektroda bantalan, elektroda pirin dan elektroda khusus"],
    answer: "E. Elektroda bantalan, elektroda pirin dan elektroda khusus"
},
{
    question: "Alat suction pump digunakan untuk menghisap cairan darah atau lendir. Pada umumnya ditempatkan di ruang yang vital dan penting, terutama salah satunya ruang di kamar operasi. Di ruang manakah ditempatkan selain ruang kamar operasi?",
    options: ["A. Gas central", "B. Perawatan", "C. Gawat darurat", "D. Poliklinik", "E. CSSD"],
    answer: "C. Gawat darurat"
},
{
    question: "Seorang perawat mengoperasikan alat CPAP. Pada saat alat digunakan, alat tersebut tidak dapat mengalirkan oksigen. Apakah tindakan yang dilakukan agar alat tersebut kembali normal?",
    options: ["A. Cek sumber tegangan", "B. Cek tubing", "C. Mengontrol konektor", "D. Humidifier", "E. Memperbaiki konektor tubing oksigen"],
    answer: "B. Cek tubing"
},
{
    question: "Seorang perawat menggunakan alat syringe pump untuk memasukkan obat ke pasien. Ternyata saat digunakan, syringe pump tersebut menunjukkan peringatan error pada bagian occlusion. Apakah yang harus dilakukan elektromedis?",
    options: ["A. Ada gelembung udara pada selang", "B. Baterai lobet", "C. Terjadinya kerusakan pada board", "D. Sumber arus tegangan tidak terhubung", "E. Mengganti syringe"],
    answer: "A. Ada gelembung udara pada selang"
},
{
    question: "Rumah sakit akan melakukan pengaturan traksi unit untuk peningkatan pelayanan di rumah sakit. Dalam pengadaan alat tersebut, teknisi elektromedik bertindak sebagai tim penerima barang. Di manakah penempatan alat tersebut?",
    options: ["A. Instalasi care unit", "B. Instalasi gawat darurat", "C. Ruang physiotherapy", "D. Poli penyakit dalam", "E. Ruang bedah"],
    answer: "C. Ruang physiotherapy"
},
{
    question: "Saat pemasangan tabung sampel centrifuge yang tidak simetris seimbang akan menimbulkan kerusakan pada centrifuge. Apa yang pertama kali dicek oleh seorang teknisi elektromedis?",
    options: ["A. Tabung", "B. Sampel", "C. Motor", "D. Tegangan", "E. Tabung dan sampel"],
    answer: "E. Tabung dan sampel"
},
{
    question: "Seorang elektromedis memiliki tugas untuk melakukan pemeliharaan alat CPAP. Pemeliharaan harian, mingguan, pemeliharaan bulanan dan pemeliharaan tahunan. Apa pemeliharaan bulanan pada alat tersebut?",
    options: ["A. Buang cairan dari water trap", "B. Periksa kondisi O2 dan air pressure, jangan sampai kosong atau habis", "C. Ganti selang dari ventilator", "D. Bersihkan ekspirasi valve", "E. Kalibrasi ventilator tersebut layak atau tidaknya dipakai"],
    answer: "D. Bersihkan ekspirasi valve"
},
{
    question: "Pada saat seorang teknisi elektromedik melakukan pemeliharaan rutin alat spektrofotometer UV-Vis, setelah melakukan pemeriksaan rutin tersebut ditemukan adanya error pada vacuum sample yang mengakibatkan tidak terhisapnya larutan yang akan diperiksa. Apa yang menyebabkan kerusakan tersebut?",
    options: ["A. Adanya penyumbatan pada selang.", "B. Vacuum rusak, vacuum harus diperbaiki.", "C. Selang rusak, selang harus diganti.", "D. Filter kotor, harus diganti dengan yang baru.", "E. Pompa rusak."],
    answer: "A. Adanya penyumbatan pada selang."
},
{
    question: "Seorang elektromedis mendapatkan laporan dari perawat bahwa ada CPAP yang mengalami kerusakan. Setelah dilakukan pengecekan pada CPAP tersebut, ternyata ada penyumbatan di bagian ekspirasi valve. Tindakan apa yang harus dilakukan elektromedis agar alat berfungsi dengan baik?",
    options: ["A. Periksa sumber tegangan", "B. Selang O2 bocor", "C. Cek O2 Cell", "D. Cek Flow Sensor", "E. Bersihkan ekspirasi valve"],
    answer: "E. Bersihkan ekspirasi valve"
},
{
    question: "Pada sebuah buku service manual & user manual pesawat sinar-X terdapat petunjuk bahwa pembangkitan sinar-X membutuhkan listrik dengan daya sebesar 100 KVA. Selain itu diperlukan kemampuan untuk mengetahui proyeksi dalam pemotretan pada tubuh pasien. Apakah sistem pengaturan faktor eksposur yang paling baik untuk menghasilkan gambar?",
    options: ["A. KV dan mA", "B. KV dan second", "C. KV, mA dan second", "D. mA dan second", "E. Watt, mA, detik"],
    answer: "C. KV, mA dan second"
},
{
    question: "Elektromedis mendapat laporan kerusakan alat blood warmer dari pengguna. Pengguna menyampaikan bahwa alat blood warmer telah dioperasikan sesuai dengan SOP, namun tidak terjadi perubahan suhu pada darah. Apakah yang harus dicek oleh elektromedis?",
    options: ["A. Kabel power", "B. Sensor suhu", "C. Heater", "D. Timer", "E. Fuse"],
    answer: "C. Heater"
},
{
    question: "ECG (Electrocardiograph) di klinik penyakit dalam dilaporkan mengalami kerusakan pada tampilan sinyal V1 yang tampak flat (lurus) dibanding sinyal lainnya. Tindakan apa yang harus dilakukan oleh seorang elektromedis untuk mengatasi permasalahan di atas?",
    options: ["A. Pemeriksaan grounding", "B. Posisi pasien dan meminta pasien agar lebih relax", "C. Menambahkan jelly pada bulb di patient cable", "D. Cek cable power dan melakukan verifikasi dengan ECG simulator", "E. Penggantian patient cable dan melakukan kalibrasi"],
    answer: "E. Penggantian patient cable dan melakukan kalibrasi"
},
{
    question: "Elektromedis mendapat laporan alat syringe pump mengalami kerusakan pada motor sehingga terjadi bunyi alarm. Bagian manakah pada alat ini yang mengalami masalah?",
    options: ["A. Flow Rate", "B. Low Battery", "C. Nearly Empty", "D. Occlusion Alarm", "E. Volume Delivered"],
    answer: "D. Occlusion Alarm"
},
{
    question: "Seorang dokter sedang melakukan pemeriksaan pasien dengan menggunakan USG. Pada saat pengoperasian timbul permasalahan yaitu monitor dari USG tersebut tidak menunjukkan warna pada hasil gambar. Apa yang harus dicek oleh teknisi pada kasus di atas?",
    options: ["A. Kabel power pada alat tersebut", "B. Kabel DVI", "C. Indikator pada alat tersebut", "D. Printer dari alat tersebut", "E. Sumber PLN"],
    answer: "B. Kabel DVI"
},
{
    question: "Elektromedis mendapat laporan dari perawat saat menggunakan patient monitor di ruangan IGD Rumah Sakit. Saat digunakan, tampilan Heart Rate pada monitor tidak muncul. Pengaturan apakah yang dilakukan elektromedis untuk mengatasi kasus tersebut?",
    options: ["A. Tampilan NIBP pada patient monitor", "B. ECG pada patient monitor", "C. Heart Rate pada patient monitor", "D. NIBP pada patient monitor", "E. SPO2 pada patient monitor"],
    answer: "B. ECG pada patient monitor"
},
{
    question: "Sebuah alat syringe pump yang sedang digunakan mengalami kerusakan. Saat difungsikan, alarm alat tersebut berbunyi secara terus menerus. Sesaat setelah dilakukan pemeriksaan, ternyata disimpulkan tidak terjadi penyumbatan dan cairan dapat berjalan lancar bila difungsikan secara manual. Apa yang harus dicek pertama kali untuk menangani kasus tersebut?",
    options: ["A. Cek Baterai", "B. Pemeriksaan flow rate", "C. Uji Fungsi tombol up/down", "D. Penggantian motor syringe pump", "E. Pengecekan ukuran syringe"],
    answer: "A. Cek Baterai"
},
{
    question: "Sebuah Rumah Sakit membeli beberapa alat waterbath, centrifuge dan spektrofotometer baru. Peralatan tersebut harus segera diletakkan di laboratorium. Langkah apa yang dilakukan seorang elektromedis untuk menangani peralatan baru?",
    options: ["A. Kalibrasi", "B. Pencatatan dan pelabelan", "C. Evaluasi alat", "D. Langsung diletakkan di ruangan", "E. Perbaikan pada alat"],
    answer: "B. Pencatatan dan pelabelan"
},
{
    question: "Pada dental unit terdapat lampu untuk membantu user dalam pemeriksaan. Jenis lampu yang digunakan yaitu lampu halogen. Terdapat SOP yang benar dalam mengganti bohlam lampu halogen yang putus atau mati. Bagaimana SOP mengganti lampu tersebut?",
    options: ["A. Memasang lampu halogen menggunakan tangan", "B. Melapisi lampu halogen dengan tisu kering", "C. Ditiup terlebih dahulu sebelum dipasang", "D. Digosok terlebih dahulu sebelum dipasang", "E. Memasang lampu halogen dengan kapas"],
    answer: "B. Melapisi lampu halogen dengan tisu kering"
},
{
    question: "Pemeriksaan Electrocardiograph di ruang Poliklinik Jantung sering menampilkan noise berupa artefak sinyal listrik AC. Tepat di sebelah ruang tersebut adalah ruang Radiologi. Tindakan apakah yang paling tepat dilakukan?",
    options: ["A. Memperdalam grounding listrik", "B. Memindahkan ruang poli jantung", "C. Memasang stabilizer di ruang poli jantung", "D. Mengganti General X-ray dengan Mobile X-ray", "E. Menjauhkan kabel tegangan tinggi dari poli jantung"],
    answer: "A. Memperdalam grounding listrik"
},
{
    question: "Sebuah alat baby incubator dioperasionalkan, namun display air temperature tidak mengalami kenaikan, bertahan pada suhu kamar, sedangkan skin temperature menampilkan angka yang normal, blower heater berputar dengan sempurna, dan tidak ada tanda alarm yang menyala. Berdasarkan observasi tersebut, kerusakan pada bagian mana yang terjadi?",
    options: ["A. Lampu indikator power heating mengalami short circuit", "B. Heater tidak bekerja", "C. Rangkaian display tidak bekerja", "D. Timer tidak bekerja", "E. Alarm tidak berfungsi"],
    answer: "B. Heater tidak bekerja"
},
{
    question: "Klinik bersalin meminta elektromedis untuk pengadaan sebuah alat elektromedis. Alat tersebut digunakan untuk bayi kondisi kuning. Bayi lahir prematur umumnya lebih rentan mengalami kondisi ini. Apakah alat elektromedik untuk menangani kasus tersebut?",
    options: ["A. Flame fotometer", "B. Bilirubin Meter", "C. Blue Light Phototherapy", "D. Infant Warmer", "E. Baby Incubator"],
    answer: "C. Blue Light Phototherapy"
},
{
    question: "Dokter bedah melakukan tindakan bedah pada daerah suhu 30 - 40 °C sekitar pin elektroda aktif. Untuk menghentikan perdarahan diperlukan pembekuan jaringan. Apa nama proses pembekuan pada ESU?",
    options: ["A. Cutting", "B. Coagulation", "C. Blend", "D. Bipolar", "E. Monopolar"],
    answer: "B. Coagulation"
},
{
    question: "Elektromedis mendapat laporan dari dokter obgyn. Saat mengoperasikan alat fetal doppler, tidak muncul suara (respon) pada alat fetal doppler tersebut. Apa penyebab dari kerusakan tersebut?",
    options: ["A. Volume", "B. Catu daya turun", "C. Kabel transduser", "D. Baterai lemah", "E. Speaker"],
    answer: "C. Kabel transduser"
},
{
    question: "Pada ruangan laboratorium klinik mempunyai beberapa alat blood glucose strip. Alat tersebut mempunyai suatu komponen yang akan membaca sampel darah dari test strip. Sensor apakah yang digunakan pada alat tersebut?",
    options: ["A. Transduser", "B. Photo dioda", "C. Suhu", "D. Jarak", "E. Berat"],
    answer: "B. Photo dioda"
},
{
    question: "Seorang teknisi sedang mengecek centrifuge. Pada saat alat centrifuge dihidupkan, lalu terjadi getaran yang sangat keras. Tindakan apakah yang seharusnya dilakukan oleh seorang teknisi pada kasus di atas?",
    options: ["A. Memeriksa posisi centrifuge", "B. Memeriksa carbon brush", "C. Menekan tombol lid", "D. Memeriksa pengunci pintu centrifuge", "E. Menurunkan kecepatan centrifuge"],
    answer: "A. Memeriksa posisi centrifuge"
},
{
    question: "Dokter melaporkan terjadi permasalahan pada hasil gambar yang muncul pada monitor USG, di mana gambar hasil USG yang muncul pada display monitor terdapat blank spot pada area tertentu. Sehingga mengakibatkan hasil pembacaan diagnosis terganggu. Apakah yang menyebabkan kerusakan pada kasus tersebut?",
    options: ["A. Keypad", "B. Probe", "C. Printer", "D. Hardisk", "E. Monitor"],
    answer: "B. Probe"
},
{
    question: "Seorang perawat di ruang rawat inap Rumah Sakit melaporkan adanya sphygmomanometer yang mengalami kerusakan. Dilaporkan bahwa air raksa tidak dapat naik setelah bulb dipompa. Teknisi melakukan pengecekan pada manset, bulb, dan valve. Setelah dilakukan pengecekan, teknisi menyimpulkan terdapat kerusakan pada sistem pemompa pada sphygmomanometer. Apa yang harus dilakukan teknisi untuk memperbaiki alat tersebut?",
    options: ["A. Mengganti bulb", "B. Mengganti valve", "C. Mengganti manset", "D. Menambah air raksa", "E. Mengganti tabung raksa"],
    answer: "A. Mengganti bulb"
},
{
    question: "Lampu operasi adalah lampu yang digunakan pada saat operasi yang tidak menimbulkan panas, cahayanya tidak menyilaukan sehingga memudahkan dan tidak mengganggu proses berjalannya operasi serta arah sinar mudah diatur posisinya. Operator kamar bedah melaporkan bahwa lampu operasi telah terjadi bayangan. Apakah yang Anda lakukan sebagai teknisi?",
    options: ["A. Mengatur reflector", "B. Dimmer", "C. Mengatur cup lampu", "D. Membuat fokus", "E. Tegangan trafo"],
    answer: "A. Mengatur reflector"
},
{
    question: "Blood bank merupakan alat yang digunakan untuk menyimpan darah yang diletakkan di ruang laboratorium darah. Berapa suhu yang diatur pada alat tersebut?",
    options: ["A. 2 - 6 °C", "B. 2 - 4 °C", "C. 4 - 8 °C", "D. 4 - 10 °C", "E. 2 - 12 °C"],
    answer: "A. 2 - 6 °C"
},
{
    question: "Pada layar alat hematologi analyzer muncul alarm background abnormal, platelet selalu berkisar 10 x 10^9/L pada saat dilakukan background check. Apakah penyebab terjadinya kasus tersebut?",
    options: ["A. Tidak dipasang stabilizer pada alat hematologi", "B. Terpengaruh frekuensi alat di sampingnya", "C. Terpengaruh getaran yang ditimbulkan alat di sampingnya", "D. Reagen diluent sudah kadaluarsa", "E. Reagen rinse kurang banyak"],
    answer: "D. Reagen diluent sudah kadaluarsa"
},
{
    question: "Pada ruang kebidanan terdapat alat ultrasonography (USG). Pada saat dokter menggunakan alat tersebut terdapat tanda seperti titik-titik hujan. Setelah dilakukan pengecekan, ternyata tidak ada masalah karena kabel grounding terpasang dan probe USG juga berfungsi dengan baik. Apa penyebab kerusakan alat tersebut?",
    options: ["A. Kristal pada probe rusak", "B. Noise dari peralatan elektronik lain", "C. Kabel VGA monitor rusak", "D. Kabel grounding putus", "E. Board power supply rusak"],
    answer: "B. Noise dari peralatan elektronik lain"
},
{
    question: "Untuk dapat menghasilkan sinar-X, terdapat persyaratan khusus yang harus dipenuhi sebuah tabung sinar-X antara lain adanya sumber elektron berupa filamen, ruang hampa udara dan anoda. Agar tabung sinar-X dapat menghasilkan sinar-X, dibutuhkan arus tabung dan tegangan tinggi antara katoda dan anoda. Fungsi utama tegangan tinggi antara katoda dan anoda adalah?",
    options: ["A. Menghasilkan elektron pada filamen", "B. Menghasilkan arus dari katoda menuju anoda", "C. Mempercepat elektron dari katoda menuju anoda", "D. Menahan laju elektron dari anoda ke katoda", "E. Menghasilkan bremsstrahlung"],
    answer: "C. Mempercepat elektron dari katoda menuju anoda"
},
{
    question: "Elektromedis mendapat laporan dari perawat terjadi permasalahan pada alat defibrillator. Saat dilakukan pengecekan oleh elektromedis, ternyata indikator low battery. Apakah yang dilakukan elektromedis untuk mengatasi permasalahan tersebut?",
    options: ["A. Bersihkan konektor charger baterai", "B. Periksa paddle, bersihkan konektor relay", "C. Cek aksesoris defibrillator", "D. Periksa kontaktor pada relay, tegangan baterai", "E. Periksa kapasitor"],
    answer: "D. Periksa kontaktor pada relay, tegangan baterai"
},
{
    question: "Dalam perencanaan pemasangan General X-Ray Unit 500 mA 150 kV, perlu diperhatikan instalasi listrik yang baik dan sesuai dengan standar yang berlaku. Salah satu yang harus diperhitungkan adalah terjadinya rugi tegangan listrik. Apakah penyebab terjadinya pada kasus tersebut?",
    options: ["A. Adanya line resistansi dan arus maksimal yang digunakan", "B. Panjangnya kabel power yang terpasang", "C. Besarnya penampang kabel power", "D. Adanya fluktuasi tegangan listrik yang dipakai", "E. Besarnya kemampuan generator"],
    answer: "A. Adanya line resistansi dan arus maksimal yang digunakan"
},
{
    question: "Terapi infra merah adalah pengobatan dengan sinar infra merah yang dapat meningkatkan proses penyembuhan, dengan cara merangsang fungsi sel-sel sehingga metabolisme sel berjalan lebih baik. Bersifat terapi apakah yang dilakukan pada kasus di atas?",
    options: ["A. Fisioterapi", "B. Fototerapi", "C. Radiografi", "D. Mekanik", "E. Non mekanik"],
    answer: "A. Fisioterapi"
},
{
    question: "Seorang terapis melaporkan bahwa alat Short Wave Diathermy (SWD) yang akan digunakan tidak dapat berfungsi. Lalu dilakukan pemeriksaan, ternyata kabel power sudah terhubung ke sumber power dan saklar utama diaktifkan (ON), tetapi lampu indikator tegangan input tidak menyala. Apakah penyebab terjadinya gangguan pada alat tersebut?",
    options: ["A. Sekering putus dan mengukur sekering dengan Ohm Meter", "B. Kabel power putus dan mengukur kabel dengan jangka sorong", "C. Lampu indikator putus dan mengukur lampu indikator dengan tachometer", "D. Stop kontak tidak ada tegangan dan mengukur stop kontak dengan Lux Meter", "E. Saklar utama rusak dan memeriksa serta mengukur tegangan saklar utama dengan Lux Meter"],
    answer: "A. Sekering putus dan mengukur sekering dengan Ohm Meter"
},
{
    question: "Seorang perawat ingin merekam LEAD III untuk mengukur aktivitas kelistrikan jantung dari pasien dengan menggunakan alat ECG. Alat tersebut juga dapat mengidentifikasi jika ada peredaran atau aliran darah yang tidak normal. Diambil dari titik manakah pengukuran di atas?",
    options: ["A. LA (-) dan LF (+)", "B. RA (-) dan LF (+)", "C. RA (-) dan LA (+)", "D. LF (-) dan RF (+)", "E. LF (-) dan LA (-)"],
    answer: "A. LA (-) dan LF (+)"
},
{
    question: "Perawat ruang rawat inap melaporkan bahwa pesawat EKG tidak menunjukkan hasil pada salah satu leadnya. User telah melakukan pembersihan pada elektrodanya. Apakah tindakan yang Anda lakukan sebagai seorang teknisi elektromedis terhadap kasus tersebut?",
    options: ["A. Pengukuran tegangan jala-jala listrik PLN", "B. Melakukan pengecekan baterai", "C. Pengecekan fisik dari kabel pasien", "D. Mengganti baterai pada EKG", "E. Mengganti kabel pasien"],
    answer: "C. Pengecekan fisik dari kabel pasien"
},
{
    question: "Sebuah rumah sakit memiliki infant warmer pada ruang NICU. Salah satu perawat sedang menggunakan alat tersebut dan saat dinyalakan suhu pada alat tersebut tidak dapat terbaca pada display. Apakah yang diperiksa sebagai tenaga elektromedik?",
    options: ["A. Kabel power", "B. Fuse", "C. Rangkaian suhu", "D. Elemen heater", "E. Relay"],
    answer: "C. Rangkaian suhu"
},
{
    question: "Melakukan pemeliharaan pada alat mikroskop sebaiknya mengikuti aturan SOP yang harus diperhatikan pengkondisian suhu, tempat, dan penyimpanan agar mikroskop bisa siap pakai. Bagaimana cara Anda melakukan pemeliharaan pada alat tersebut?",
    options: ["A. Menjaga kelembapan alat", "B. Menyimpan lensa okuler dengan baik", "C. Mencabut lampu setelah digunakan", "D. Menyimpan lensa okuler dengan baik dan dijaga suhunya", "E. Preparat dibiarkan selesai digunakan"],
    answer: "A. Menjaga kelembapan alat"
},
{
    question: "Sadapan pada alat ECG menghasilkan pulsa kompleks QRS jantung pada rekaman kertas yang disebut elektrokardiogram sebagai gambaran aktivitas jantung. Berupa Lead I, II, III, aVR, aVL, aVF, V1, V2, V3, V4, V5 dan V6. Untuk dapat bekerja, alat EKG menggunakan supply tegangan 220 VAC atau dapat juga menggunakan sumber tegangan battery. Bagian apa dari alat yang berfungsi untuk mengisolasi patient circuit terhadap hubungan langsung dengan catu daya listrik?",
    options: ["A. Pre-Amplifier", "B. High Pass Filter", "C. Low Pass Filter", "D. Isolated Power Supply", "E. Dumping Circuit"],
    answer: "D. Isolated Power Supply"
},
{
    question: "Sebuah alat blue light phototherapy tidak dapat menyala saat akan digunakan oleh perawat. Setelah dicek oleh seorang elektromedis, kabel powernya masih bagus dan fuse tidak putus. Sementara hours meter menunjukkan 950 jam. Apa tindakan yang paling tepat dalam mengganti spare part alat tersebut?",
    options: ["A. Lampu", "B. Ballast lampu", "C. Cek tegangan jala-jala", "D. Starter lampu", "E. Tombol on-off"],
    answer: "A. Lampu"
},
{
    question: "Bagian laboratorium melaporkan kepada Instalasi Pemeliharaan rumah sakit tentang salah satu alat centrifuge yang tidak berfungsi sama sekali. Pemeriksaan apakah yang akan dilakukan oleh tenaga elektromedis untuk menangani alat tersebut?",
    options: ["A. Motor", "B. Fuse power", "C. Kabel power", "D. Saklar On/Off", "E. Mikroswitch door"],
    answer: "C. Kabel power"
},
{
    question: "Sebuah unit radiologi general purpose konvensional dengan generator X-Ray masih menggunakan autotrafo. Alat tersebut mengalami masalah, yakni hasil pencitraan X-Ray tipis jika dilakukan expose di atas 80 kV dan pengaturan kondisi mA large focus/mA 150 atau lebih. Sumber listrik pada ruangan itu drop dan trafo pada tabel kontrol berdengung. Apa yang menyebabkan kasus tersebut di atas?",
    options: ["A. Berkurangnya sumber daya listrik untuk unit radiologi tersebut", "B. Autotrafo mengalami penurunan kinerja", "C. Kurangnya minyak pada housing tube", "D. Kurangnya daya hambat tegangan tinggi minyak trafo pada HTT", "E. Berkurangnya daya hantar kabel tegangan tinggi"],
    answer: "B. Autotrafo mengalami penurunan kinerja"
},
{
    question: "Teknisi elektromedik mendapat keluhan bahwa lampu pada film viewer tidak menyala. Kemudian teknisi datang dan mengganti lampu tersebut. Setelah diganti, ternyata lampu film viewer tetap tidak menyala. Penggantian spare part apakah yang dilakukan?",
    options: ["A. Starter lampu film viewer", "B. Melakukan kalibrasi", "C. Lampu yang baru lagi", "D. Switch on/off", "E. Saklar lampu film viewer"],
    answer: "A. Starter lampu film viewer"
},
{
    question: "Pada proses pemeliharaan unit ECG di ruang perawatan ICU diperoleh hasil print ECG. Jarak peak to peak pada kertas grafik tidak sesuai dengan hasil bpm pada tampilan display. Apa penyebab perbedaan hasil output pada alat tersebut?",
    options: ["A. Hilangnya salah satu sinyal kelistrikan dari elektroda", "B. Kertas grafik yang digunakan tidak sesuai dengan spesifikasi yang dibutuhkan oleh unit ECG", "C. Heater stylus sudah mengalami penurunan performa", "D. Motor printer mengalami penurunan performa", "E. Pre-amplifier unit rusak"],
    answer: "B. Kertas grafik yang digunakan tidak sesuai dengan spesifikasi yang dibutuhkan oleh unit ECG"
},
{
    question: "Saat menggunakan alat spektrofotometer, petugas lab mengeluhkan bahwa hasil pemeriksaan semakin tidak akurat padahal menggunakan sampel yang sama. Pemeriksaan apakah yang pertama kali dilakukan oleh teknisi elektromedik?",
    options: ["A. Kondisi lampu", "B. Kondisi kabel power", "C. Kondisi photo detector", "D. Kuvet", "E. Grounding"],
    answer: "A. Kondisi lampu"
},
{
    question: "Seorang petugas laboratorium menggunakan alat centrifuge dalam kondisi normal. Setelah selesai digunakan, petugas laboratorium tersebut mengambil larutan dari alat tersebut, namun penutup centrifuge tetap tidak terbuka. Penggantian apakah yang harus dilakukan elektromedis dalam kasus tersebut?",
    options: ["A. Motor", "B. Sensor", "C. Settingan baru", "D. Fuse", "E. Brake system"],
    answer: "B. Sensor"
},
{
    question: "Pada pesawat rontgen frekuensi tinggi, semua pengaturan bekerjanya rangkaian menggunakan frekuensi tinggi. Komponen yang dipakai untuk membangkitkan frekuensi tinggi. Rangkaian apa pada kasus di atas?",
    options: ["A. Inverter", "B. Pemanas filament", "C. Tegangan tinggi", "D. Catu daya", "E. Timer"],
    answer: "A. Inverter"
},
{
    question: "Seorang elektromedis mendapat laporan dari perawat, terjadi permasalahan saat mengoperasikan tensimeter. Saat tensimeter dipompa, hasilnya tidak rata naiknya dan penunjukan jarum pada aneroid. Apakah penyebab permasalahan pada alat tersebut?",
    options: ["A. Selang bocor", "B. Valve tidak terkunci", "C. Balon pecah", "D. Manset rusak", "E. Peer rusak"],
    answer: "A. Selang bocor"
},
{
    question: "Elektromedis melakukan pencatatan spesifikasi sebuah alat spektrofotometer. Cahaya tampak (Visible) adalah salah satu sumber cahaya yang digunakan pada spektrofotometer. Berapakah panjang gelombang pada kasus tersebut?",
    options: ["A. 200 - 280 nm", "B. 780 - 3000 nm", "C. 3000 - 20.000 nm", "D. 10 - 200 nm", "E. 380 - 780 nm"],
    answer: "E. 380 - 780 nm"
},
{
    question: "Pada saat pengoperasian alat X-Ray konvensional, ternyata indikator panel tegangan jala-jala kurang dari 220V. Apa yang harus dilakukan agar X-Ray dapat bekerja dengan baik?",
    options: ["A. Menambah kV", "B. Menambah mA", "C. Menambah kV dan mA", "D. Mengatur Line Kompensator", "E. Mengatur mAs"],
    answer: "D. Mengatur Line Kompensator"
},
{
    question: "Elektromedis sedang menyampaikan kepada user tentang pengoperasian sebuah waterbath. Pengaturan pada panel kontrol suhu alat waterbath. Saat kapan bagian kontrol tersebut mulai bekerja?",
    options: ["A. Suhu melebihi suhu yang disetting", "B. Sampel belum dimasukkan sudah di start", "C. Suhu pada waterbath di bawah suhu setting", "D. Suhu pada waterbath meningkat sangat lambat", "E. Waktu penyimpanan telah selesai, penutup membuka"],
    answer: "C. Suhu pada waterbath di bawah suhu setting"
},
{
    question: "Pada saat alat centrifuge diaktifkan, lampu indikator menyala tetapi alat tidak berfungsi, yaitu motor tidak berputar. Apa analisa awal kerusakannya?",
    options: ["A. Sikat arang habis, komutator rusak", "B. Rangkaian pengatur kecepatan rusak", "C. Saklar On/Off rusak", "D. Sekring putus", "E. Karet penahan getaran lemah"],
    answer: "D. Sekring putus"
},
{
    question: "Pemeliharaan berkala alat suction pump yang telah dilakukan, mengganti filter, membersihkan jar, mengeratkan sambungan slang. Setelah alat dipasang dan ketika diuji coba, ternyata alat tersebut tidak menghisap. Apa yang terjadi pada alat yang diperbaiki tersebut?",
    options: ["A. Selang penghisap tersumbat", "B. Motor suction rusak", "C. Jar terisi penuh air", "D. Pemasangan klep suction terbalik", "E. Selang penghisap terlalu besar"],
    answer: "D. Pemasangan klep suction terbalik"
},
{
    question: "Elektrocardiograph (EKG) adalah salah satu alat elektromedik yang digunakan untuk memeriksa aktivitas bioelektrik jantung dengan metode sadapan menggunakan 5 elektroda yang dipasang pada titik-titik tertentu pada tubuh manusia. Berdasarkan segitiga Einthoven, apa sadapan yang dihasilkan antara Right Arm (RA) dan Left Arm (LA)?",
    options: ["A. Lead II", "B. Lead III", "C. aVR", "D. aVL", "E. Lead I"],
    answer: "E. Lead I"
},
{
    question: "Seorang user melaporkan kepada Teknisi Elektromedis bahwa sebuah meja operasi pada ruang operasi rumah sakit, apabila tersentuh pada saat operasi sering terjadi kebocoran listrik. Apa yang harus dilakukan untuk mengatasi hal tersebut agar petugas operasi merasa nyaman saat bekerja?",
    options: ["A. Petugas operasi harus menggunakan alas kaki", "B. Dudukan meja operasi dihubungkan ke grounding", "C. Meja operasi harus diberi isolator", "D. Hindari instrumen lainnya bersentuhan dengan meja operasi", "E. Letak meja operasi dipindahkan ke tempat lain"],
    answer: "B. Dudukan meja operasi dihubungkan ke grounding"
},
{
    question: "Saat dilakukan pemeriksaan alat ESU di rumah sakit, alat masih tampak normal namun teknisi mengalami masalah ketika foot switch ditekan tidak terjadi apapun pada elektroda aktif atau dengan kata lain pada elektroda aktif tidak ada frekuensi tinggi. Sebagai seorang tenaga elektromedik, apa yang akan Anda lakukan pengecekan?",
    options: ["A. Tegangan yang masuk ke alat", "B. Konektor elektroda", "C. Elektroda aktif", "D. Foot switch", "E. Elektroda"],
    answer: "D. Foot switch"
},
{
    question: "Sebuah alat short wave diathermy yang digunakan untuk terapi tulang pasien harus diperhatikan dosis panas yang diperlukan dan akan dilakukan pemeliharaan rutin oleh teknisi elektromedik. Apa yang perlu diperhatikan saat melakukan pemeliharaan sebuah alat tersebut?",
    options: ["A. Rangkaian oscillator, pengatur daya", "B. Pengatur daya", "C. Control timer, pengatur daya", "D. Catu daya, power cord", "E. Rangkaian oscillator, power cord"],
    answer: "A. Rangkaian oscillator, pengatur daya"
},
{
    question: "Sebuah suction pump dilaporkan mengalami kerusakan, di mana daya hisapnya sangat lemah. Ketika dilakukan pengujian pada selang tidak ditemukan kebocoran. Kemungkinan terbesar kerusakan suction pump terletak pada?",
    options: ["A. Filter", "B. Vacuum manometer", "C. Vacuum klep", "D. Regulator", "E. Vacuum house"],
    answer: "C. Vacuum klep"
},
{
    question: "Pada ruangan laboratorium terdapat mikroskop. Pada alat tersebut ada bagian yang berfungsi untuk mengatur besar dan kecilnya cahaya yang masuk. Apakah nama bagian yang dimaksud?",
    options: ["A. Lensa objektif", "B. Lensa okuler", "C. Kondensor", "D. Cermin", "E. Diafragma"],
    answer: "E. Diafragma"
},
{
    question: "Seorang perawat meminta bantuan kepada teknisi elektromedik untuk melihatkan alat infant warmer yang ada di ruangannya. Keluhannya adalah tampilan suhu pada alat infant warmer tidak sesuai dengan yang sudah di-setting. Kerusakan pada bagian apa, analisa saudara sebagai elektromedis?",
    options: ["A. Kerusakan pada Board", "B. Kerusakan pada Sensor", "C. Tombol setting tidak berfungsi", "D. Display tidak mendapat inputan", "E. Tidak ada inputan yang masuk ke alat"],
    answer: "B. Kerusakan pada Sensor"
},
{
    question: "Sebuah Rumah Sakit melakukan pengadaan sebuah alat SPO Monitor. Sebagai petugas elektromedis, harus melakukan pengecekan kelengkapan aksesoris apa saja yang harus ada. Apa saja kelengkapan yang harus ada pada alat tersebut?",
    options: ["A. Elektrode SPO2", "B. Kertas SPO2", "C. Gel SPO2", "D. Finger Sensor SPO2", "E. Cairan SPO2"],
    answer: "D. Finger Sensor SPO2"
},
{
    question: "Salah satu peralatan elektromedik adalah ESU (electro surgery unit). ESU digunakan pada saat tindakan pembedahan. Dalam penggunaannya, user harus mengoperasikan sesuai SOP. Apakah teknik yang digunakan untuk proses tersebut?",
    options: ["A. Cutting", "B. Coagulating", "C. Blend", "D. Monopolar", "E. Bipolar"],
    answer: "A. Cutting"
},
{
    question: "Seorang teknisi elektromedik sedang melakukan uji fungsi terhadap sphygmomanometer. Sebelum alat dioperasikan, untuk melakukan uji fungsi, teknisi menggunakan phantom (lengan palsu). Langkah pertama apa yang harus dilakukan untuk mengoperasikan alat tersebut?",
    options: ["A. Membuka valve", "B. Memompa bulb", "C. Mengisi air raksa", "D. Memasang manset", "E. Memasang stetoskop"],
    answer: "D. Memasang manset"
},
{
    question: "Pada saat akan dilakukan pengukuran berat suatu sampel menggunakan Analytical Balance, user harus memastikan bahwa posisi air bubble harus berada tepat di tengah. Apakah nama bagian yang dimaksud?",
    options: ["A. Water pas", "B. Regulator", "C. Leveling Feet", "D. Kalibrasi", "E. Step Down"],
    answer: "C. Leveling Feet"
},
{
    question: "Seorang terapis melaporkan alat terapi diathermy yang digunakan rusak, dengan keluhan panas yang dikeluarkan dari elektroda tidak stabil, terkadang keluar panas dan terkadang tetap dingin. Pemeriksaan apakah yang dilakukan untuk menormalkan alat tersebut?",
    options: ["A. Kabel Power", "B. Saklar ON/OFF", "C. Konektor Elektroda", "D. Fuse", "E. Rangkaian pembangkit frekuensi"],
    answer: "E. Rangkaian pembangkit frekuensi"
},
{
    question: "Pada suatu laboratorium klinik di daerah terpencil ditemukan alat incubator amuba. Alat tersebut sudah tidak dapat berfungsi lagi. Untuk dapat menggunakan kembali incubator tersebut dibutuhkan beberapa komponen. Komponen apa saja yang harus Anda siapkan sebagai tenaga elektromedis?",
    options: ["A. Kabel catu daya, switch on/off, lampu, thermostat", "B. Kabel catu daya, switch on/off, lampu, thermometer", "C. Kabel catu daya, switch on/off, lampu, heater", "D. Kabel catu daya, switch on/off, thermostat, thermometer", "E. Switch on/off, thermometer, lampu, heater"],
    answer: "C. Kabel catu daya, switch on/off, lampu, heater"
},
{
    question: "Seorang dokter bedah akan melakukan tindakan pembedahan menggunakan elektrosurgery unit (ESU). Ternyata alat tidak melakukan pemotongan jaringan walaupun supply listrik sudah terhubung dan alat sudah menyala. Langkah awal apakah yang harus dilakukan oleh seorang teknisi untuk melakukan pemeriksaan?",
    options: ["A. Indikator Cutting", "B. Indikator Coagulating", "C. Koneksi elektroda", "D. Koneksi grounding", "E. Bunyi alarm"],
    answer: "C. Koneksi elektroda"
},
{
    question: "Alat radiant warmer baru sedang melakukan pemasangan oleh seorang elektromedis. Alat ini memiliki wadah untuk meletakkan matras bayi. Di atasnya terpasang sensor suhu udara. Tampak juga ada semacam jaring dari bahan logam yang dipasang tepat di bawah elemen pemanas. Apakah fungsi dipasangnya komponen tersebut?",
    options: ["A. Pengaman bagi bayi dari tertimpa komponen di bagian atas alat", "B. Penyebar panas supaya merata", "C. Sebagai kisi difraksi cahaya sinar biru", "D. Filter penyaring udara", "E. Pengaman bagi sensor suhu udara"],
    answer: "B. Penyebar panas supaya merata"
},
{
    question: "Pada saat alat baby incubator yang sedang digunakan, ketika sebuah baby incubator sedang berfungsi, tiba-tiba suhu dari pasien/bayi ini ternyata nilai suhunya tidak dapat ditampilkan. Apakah analisa kerusakan yang terjadi dari permasalahan tersebut?",
    options: ["A. Air probe sensor", "B. Humidity probe sensor", "C. Skin probe sensor", "D. Semua jawaban salah", "E. Semua jawaban benar"],
    answer: "C. Skin probe sensor"
},
{
    question: "Pesawat X-Ray sistem condensator discharge menggunakan tabung X-Ray jenis triode. Salah satu elektrodenya adalah grid pada tabung X-Ray sistem condensator discharge. Apa fungsi dari bagian alat tersebut?",
    options: ["A. Memfilter radiasi hambur", "B. Mengatur proses ready", "C. Mengatur laju elektron", "D. Mengatur tegangan pada tabung", "E. Mengatur tegangan"],
    answer: "C. Mengatur laju elektron"
},
{
    question: "Seorang elektromedis ditugaskan untuk melakukan pengujian output kinerja alat centrifuge. Kegiatan tersebut dilakukan dalam rangka melakukan inspeksi dan preventive maintenance (IPM). Manakah parameter yang perlu dikalibrasi pada kasus tersebut?",
    options: ["A. Waktu dan kecepatan", "B. Suhu dan kecepatan", "C. Suhu dan kelembaban", "D. Kecepatan dan kelembaban", "E. Waktu dan suhu"],
    answer: "A. Waktu dan kecepatan"
},
{
    question: "Alat bedside monitor ketika saat pengukuran BPM, grafik jantung yang dihasilkan atau yang ditampilkan ECG yang dihasilkan kurang bagus (terdapat ripple). Apa penyebab dari masalah tersebut?",
    options: ["A. Grounding kurang bagus", "B. Pemasangan lead yang salah", "C. Gel yang digunakan kurang banyak", "D. Transduser ECG-nya rusak", "E. Ada gangguan dari frekuensi lain"],
    answer: "A. Grounding kurang bagus"
},
{
    question: "Seorang Elektromedis diminta menyiapkan sebuah EKG 3 kanal standard 12 lead untuk digunakan dalam pelayanan UGD. Apakah kelengkapan aksesoris yang perlu dipersiapkan?",
    options: ["A. Kabel pasien dengan 12 elektroda; kertas rekam EKG, gel", "B. Kabel pasien dengan 10 elektroda; kertas rekam EKG, gel", "C. Kabel pasien dengan 8 elektroda; kertas rekam EKG, gel", "D. Kabel pasien dengan 6 elektroda; kertas rekam EKG, gel", "E. Kabel pasien dengan 4 elektroda; kertas rekam EKG, gel"],
    answer: "B. Kabel pasien dengan 10 elektroda; kertas rekam EKG, gel"
},
{
    question: "Pemasangan elektroda pada ECG harus sesuai dengan SOP. Salah satu lead yang sering digunakan untuk diagnosa adalah lead II. Pada bagian manakah pemasangan untuk pemeriksaan tersebut?",
    options: ["A. Tangan kiri dan kaki kiri", "B. Tangan kanan dan kaki kiri", "C. Tangan kanan dan tangan kiri", "D. Tangan kanan dan kaki kanan", "E. Kaki kanan dan kaki kiri"],
    answer: "B. Tangan kanan dan kaki kiri"
},
{
    question: "Alat sterilisator kering salah satunya berupa alat sterilisator dengan menggunakan generator Ozon, di mana memanfaatkan reaksi kimia terbentuknya Ozon sehingga lingkungan daya dukung hidup virus dan bakteri menjadi mati. Apakah nama istilah yang dimaksud pada reaksi tersebut?",
    options: ["A. Photolysis", "B. Photometri", "C. Fotosintesis", "D. Ozomysis", "E. Katalisis"],
    answer: "A. Photolysis"
},
{
    question: "Lampu infrared merupakan suatu alat terapi yang berfungsi untuk menghilangkan rasa nyeri yang diderita pasien. Lampu infrared harus diletakkan pada jarak 45 - 60 cm dengan sudut tertentu. Waktu yang diperlukan untuk terapi kurang lebih sekitar 10 - 30 menit. Bagaimana sudut pemasangan lampu pada pasien?",
    options: ["A. Tegak lurus dengan objek terapi", "B. Bersebelahan dengan objek terapi", "C. Pada sudut 30 derajat dari objek terapi", "D. Pada sudut 45 derajat dari objek terapi", "E. Pada sudut 180 derajat dari objek terapi"],
    answer: "A. Tegak lurus dengan objek terapi"
},
{
    question: "Laboratorium klinik akan melakukan salah satu parameter pengukuran pada peralatan laboratorium klinik yaitu alat pH meter. Pengukuran yang akan dilakukan adalah mengukur kadar asam-basa pada sampel urin yang sudah tersedia. Apa langkah awal yang dilakukan sebelum pengukuran?",
    options: ["A. Kalibrasi", "B. Mengelap ujung sensor dengan tisu", "C. Mengukur sampel", "D. Mengelap sensor dengan tisu basah", "E. Sensor pH meter ditiup biar bersih"],
    answer: "A. Kalibrasi"
},
{
    question: "Seorang perawat melaporkan bahwa alat ECG yang digunakan mengalami gangguan saat dilakukan perekaman, di mana hasil perekaman gelombang V1 dan V2 tidak tercetak pada kertas rekaman. Apa tindakan pemeriksaan yang seharusnya dilakukan sebagai elektromedis?",
    options: ["A. Pemasangan kabel ke pasien", "B. Penggunaan gel pada pasien", "C. Tegangan jala-jala PLN", "D. Sumber tegangan sudah terpasang di ground", "E. Kondisi kabel ECG dan elektrodanya"],
    answer: "E. Kondisi kabel ECG dan elektrodanya"
},
{
    question: "Alat suction pump piston dilaporkan mengalami kerusakan, yaitu motor tidak bergerak tapi ada suara mendengung pada motor. Apa bagian yang diperbaiki berdasarkan kasus tersebut?",
    options: ["A. Piston", "B. Klep", "C. Motor", "D. Filter", "E. Chamber cairan"],
    answer: "C. Motor"
},
{
    question: "Alat paraffin bath memanfaatkan lilin parafin yang dilelehkan sebagai media penghantar panas ke bagian tubuh yang diterapi. Ada beberapa syarat yang harus dipenuhi agar di ruangan penempatan alat ini tidak timbul kebakaran. Salah satunya adalah gas. Gas apa yang tidak boleh ada di ruangan tersebut?",
    options: ["A. Karbon dioksida", "B. Oksigen murni", "C. Udara", "D. Uap air", "E. Sulfur"],
    answer: "B. Oksigen murni"
},
{
    question: "Alat Elektrosurgery unit saat dioperasikan hidup, namun tidak dapat melakukan Cutting dan Coagulation. Pengecekan bagian apa yang dilakukan elektromedis sehingga alat tersebut berfungsi?",
    options: ["A. Foot control", "B. Rangkaian penguatan arus dan tegangan", "C. Kabel elektroda", "D. Tegangan jala-jala PLN", "E. Patient plate"],
    answer: "A. Foot control"
},
{
    question: "Sebuah lampu operasi dengan intensitas cahaya 160.000 lux terpasang di langit-langit ruang operasi. Alat tersebut terdiri dari 1 set lampu yang dapat bersuhu 4300 Kelvin. Seorang elektromedis diminta untuk melakukan kegiatan pemeliharaan lampu tersebut. Kegiatan apakah yang seharusnya dihindari saat melakukan pemeliharaan alat tersebut?",
    options: ["A. Menggunakan desinfektan semprot", "B. Membersihkan alat dengan kain lembab", "C. Sterilisasi uap pada handpiece", "D. Mengganti handpiece yang retak/rusak", "E. Dilakukan saat lampu sudah dingin"],
    answer: "A. Menggunakan desinfektan semprot"
},
{
    question: "Operating Lamp Ceiling Mounted adalah suatu alat yang digunakan untuk menerangi objek pada saat dilakukan operasi (pembedahan). Alat tersebut membutuhkan perawatan supaya alat tersebut selalu dalam keadaan baik berfungsi dan selalu siap pakai. Dokumen pemeliharaan sangat diperlukan agar waktu umur pemakaian termonitor. Apa tujuan kegiatan terhadap alat tersebut?",
    options: ["A. Pelayanan pada pasien", "B. Memudahkan untuk pengadaan baru", "C. Mencegah terjadinya permintaan baru", "D. Meminimalisasi atau mencegah terjadinya perpindahan alat", "E. Meminimalisasi atau mencegah terjadinya kerusakan yang fatal"],
    answer: "E. Meminimalisasi atau mencegah terjadinya kerusakan yang fatal"
},
{
    question: "Seorang terapis ingin menggunakan alat traksi untuk terapi kepada pasiennya. Terapis meminta bantuan teknisi rumah sakit untuk memasang alat tersebut. Apa yang harus dilakukan seorang teknisi agar alat tersebut terpasang dengan baik?",
    options: ["A. Pemberat harus cukup tinggi di atas permukaan lantai", "B. Hubungkan korset dengan pengait", "C. Setting timer untuk menentukan lama proses terapi pada pasien", "D. Bersihkan badan pesawat dari debu", "E. Setting berat badan yang didapat dari berat pasien"],
    answer: "A. Pemberat harus cukup tinggi di atas permukaan lantai"
},
{
    question: "Seorang elektromedis mendapat laporan dari user bahwa tensi digital yang sedang digunakan tidak mau berhenti memompa saat melakukan pemeriksaan. Kemudian dilakukan pengecekan untuk hal tersebut. Mengganti bagian apakah yang harus dilakukan pada kasus tersebut?",
    options: ["A. Selang tensi meter", "B. Air raksa", "C. Bulb", "D. Manset", "E. Sekring"],
    answer: "C. Bulb"
},
{
    question: "Seorang laboran akan menggunakan alat centrifuge. Pada saat alat digunakan ternyata alat tersebut tidak dapat memutar seperti biasa. Setelah dicek ternyata pengaman pada tutup alat centrifuge mengalami kerusakan. Apa yang harus dilakukan pada alat tersebut?",
    options: ["A. Mengecek tegangan motor", "B. Mengganti sensor kecepatan", "C. Mengganti fuse", "D. Mengganti switch", "E. Melakukan pembersihan"],
    answer: "D. Mengganti switch"
},
{
    question: "Sebuah alat spektrofotometer digunakan untuk mengetahui kandungan zat yang terdapat pada sebuah larutan atau darah. Dengan cara apakah alat tersebut bekerja sehingga menghasilkan nilai dari zat yang akan diketahui?",
    options: ["A. Mengaduk cairan sampel", "B. Memanaskan cairan sampel", "C. Mencairkan menggunakan air", "D. Mengukur banyaknya cairan sampel", "E. Mengukur kepekatan suatu larutan sampel"],
    answer: "E. Mengukur kepekatan suatu larutan sampel"
},
{
    question: "Di rumah sakit terdapat alat doppler. Alat tersebut juga sering digunakan pada pelayanan kesehatan baik di puskesmas maupun rumah sakit. Karena alat ini dapat mendengarkan detak jantung janin ketika masih berada dalam kandungan. Pada bidang pelayanan apakah alat tersebut digunakan?",
    options: ["A. Obgyn", "B. THT", "C. Bedah", "D. Saraf", "E. Fisioterapi"],
    answer: "A. Obgyn"
},
{
    question: "Sebuah alat defibrillator saat bekerja terkadang mengalami kendala dengan tidak dapat dilakukan pengisian charger. Apa analisa awal kerusakannya?",
    options: ["A. Tombol charger rusak; kapasitor rusak; rangkaian charger rusak", "B. Alat dalam kondisi di luar mode kalibrasi", "C. Rangkaian deteksi tidak berjalan", "D. Rangkaian sinkron/asinkron tidak bekerja", "E. Sekring putus"],
    answer: "A. Tombol charger rusak; kapasitor rusak; rangkaian charger rusak"
},
{
    question: "Seorang dokter melakukan pemeriksaan pasien dengan menggunakan USG. Pada saat pengoperasian timbul permasalahan yaitu monitor dari USG tersebut tidak menunjukkan warna pada hasil gambar. Apakah yang harus dicek oleh teknisi pada kasus tersebut?",
    options: ["A. Kabel power pada alat tersebut", "B. Kabel DVI", "C. Indikator pada alat tersebut", "D. Printer dari alat tersebut", "E. Sumber PLN"],
    answer: "B. Kabel DVI"
},
{
    question: "Seorang bayi lahir prematur di IGD RS dengan usia kehamilan 33 minggu dengan berat badan 1900 gr. Bayi tersebut berjenis kelamin laki-laki memiliki kulit yang tipis dan jaringan lemak sedikit. Alat bantu apakah yang digunakan untuk mempertahankan kondisi lingkungan sesuai kasus di atas?",
    options: ["A. Infant warmer", "B. NICU", "C. Pediatric", "D. UV Lamp", "E. Baby Incubator"],
    answer: "A. Infant warmer"
},
{
    question: "Seorang perawat gigi melaporkan bahwa Dental Unit di Poliklinik Gigi sering dilaporkan kerusakan di bagian kursi pasien, sehingga user kesulitan dalam melakukan pemeriksaan. Pemeriksaan apakah yang dilakukan elektromedis untuk kondisi tersebut?",
    options: ["A. Supply listrik di Poli Gigi", "B. Berat badan pasien", "C. Sistem hidrolik", "D. Foot switch", "E. Supply air di Poli Gigi"],
    answer: "C. Sistem hidrolik"
},
{
    question: "Sebuah Rumah Sakit baru membeli sebuah alat Baby Incubator melalui proses sesuai prosedur yang berlaku dengan masa garansi 1 tahun. Pada saat usia alat 3 bulan, alat tersebut mengalami error pada pembacaan suhunya. Apakah langkah yang diambil oleh elektromedis untuk menangani alat tersebut?",
    options: ["A. Menelepon perusahaan rekanan lain", "B. Menyalahkan user karena terjadi error", "C. Mengembalikan alat ke perusahaan", "D. Melakukan perbaikan semampunya", "E. Melaporkan keagenan karena masih garansi"],
    answer: "E. Melaporkan keagenan karena masih garansi"
},
{
    question: "Sebagai seorang elektromedis, Anda harus menyampaikan kepada user bahwa peralatan elektromedis harus dibersihkan setelah penggunaan. Salah satunya adalah alat analytical balance. Setelah selesai menggunakan, timbangan harus dibersihkan. Apakah bagian yang paling penting dari timbangan yang harus segera dibersihkan setelah digunakan?",
    options: ["A. Kaca penutup", "B. Anak timbangan", "C. Pan (piringan) tempat sampel", "D. Kabel power", "E. Tombol pada timbangan"],
    answer: "C. Pan (piringan) tempat sampel"
},
{
    question: "Seorang bidan menelpon ke IPS bahwa doppler yang sedang digunakan pada pasien tiba-tiba rusak. Untuk menyikapi laporan bidan tersebut, apa yang dilakukan oleh petugas elektromedis?",
    options: ["A. Mengganti sparepart", "B. Membuat laporan kerusakan", "C. Menghubungi agen alat tersebut", "D. Melakukan pemeriksaan awal", "E. Mengkalibrasi alat"],
    answer: "D. Melakukan pemeriksaan awal"
},
{
    question: "Di rumah sakit terdapat berbagai macam alat-alat medis sesuai dengan tipenya. Salah satu alat yang dimaksud adalah alat short wave diathermy (SWD). Pada saat alat digunakan untuk terapi pasien, pemberian waktunya tidak sesuai dengan yang diatur. Kerusakan apa yang dialami oleh alat tersebut?",
    options: ["A. Aplikator", "B. Kabel power", "C. Selector", "D. Timer", "E. Rangkaian penguat"],
    answer: "D. Timer"
},
{
    question: "Setiap pengadaan alat elektromedik, maka wajib adanya dilakukan pelatihan alat terhadap pengguna. Materi pelatihan berupa cara penggunaan, pemeliharaan rutin harian, prinsip keselamatan kerja bagi alat dan juga pengguna. Dan harus menyerahkan dokumen alat kepada pengguna. Apa dokumen yang harus Anda cantumkan langsung pada alat?",
    options: ["A. Standar operasional prosedur", "B. Petunjuk perbaikan", "C. Petunjuk pemeliharaan", "D. Tata cara membersihkan", "E. Buku petunjuk instalasi alat"],
    answer: "A. Standar operasional prosedur"
},
{
    question: "Rumah sakit baru saja mengadakan pembelian alat electro surgery unit (ESU) dan meminta kepada seorang teknisi elektromedis untuk mengajukan usulan dokumen teknik yang harus disertakan dalam pengadaan tersebut. Dokumen teknik apa saja yang dibutuhkan sebagai bahan referensi dalam melaksanakan kegiatan teknik?",
    options: ["A. Service manual dan operating manual", "B. Elektroda tambahan", "C. Jaminan purna jual", "D. Operating manual", "E. Service manual"],
    answer: "A. Service manual dan operating manual"
},
{
    question: "Sebuah suction pump dilaporkan mengalami kerusakan, di mana daya hisapnya sangat lemah. Ketika dilakukan pengujian pada selang tidak ditemukan kebocoran. Apakah kerusakan alat tersebut?",
    options: ["A. Regulator", "B. Filter", "C. Vacuum manometer", "D. Vacuum klep", "E. Vacuum house"],
    answer: "D. Vacuum klep"
},
{
    question: "Suatu alat laboratorium berupa blood glucose tester sesaat yang dapat memeriksa kandungan gula darah, kolesterol, dan asam urat dalam darah. Alat tersebut dapat mendeteksi tiga jenis inputan yang berbeda dari testrip tersebut. Agar inputan yang akan dikeluarkan menjadi satu keluaran maka dibutuhkan:",
    options: ["A. Decoder", "B. Op Amp", "C. ADC", "D. DCA", "E. MUX"],
    answer: "E. MUX"
},
{
    question: "Pada pesawat Ultrasonograph, pada buku manualnya dituliskan spesifikasi kelistrikannya sebagai berikut: tegangan AC input 90 to 240 Vac, Frekwensi: 47 to 63 Hz, ground impedance: 100 mΩ; load: I, 150 VA; AC output (including PC): non sinusoidal 120 Vrms, daya: 350 VA. Berapakah daya UPS yang diperlukan?",
    options: ["A. 250 VA", "B. 1000 VA", "C. 2500 VA", "D. 5000 VA", "E. 100 VA"],
    answer: "B. 1000 VA"
}
// {
//     question: "Seorang elektromedis yang sedang melakukan pemeliharaan pada pesawat rontgen. Dalam pemeriksaan tersebut dijumpai bahwa arus tabung yang ditunjukkan pada semua pemilihan arus tabung selalu lebih rendah dari nilai yang dipilih. Bagian manakah dari pesawat rontgen tersebut yang mengalami masalah?",
//     options: ["A. Standby resistor", "B. High Tension Transformer", "C. KV selector", "D. Line voltage compensator", "E. Rectifier"],
//     answer: "B. High Tension Transformer"
// },
// {
//     question: "Alat paraffin bath memanfaatkan lilin parafin yang dilelehkan sebagai media penghantar panas ke bagian tubuh yang diterapi. Ada beberapa syarat yang harus dipenuhi agar di ruangan penempatan alat ini tidak timbul kebakaran. Salah satunya adalah gas. Gas apa yang tidak boleh ada di ruangan tersebut?",
//     options: ["A. Karbon dioksida", "B. Oksigen murni", "C. Udara", "D. Uap air", "E. Sulfur"],
//     answer: "B. Oksigen murni"
// },
// {
//     question: "User  melaporkan alat dental unit ada keluhan air pada handpiece tidak dapat keluar. Sedangkan kompresor dan footswitch dalam kondisi baik. Apa analisa awal kerusakannya?",
//     options: ["A. Selang/tubing mampet, filter air kotor.", "B. Tekanan udara kurang, pressure regulator tersumbat", "C. Valve tidak bekerja, tidak ada aliran udara", "D. Footswitch rusak, mikromotor rusak", "E. Kompresor rusak, handpiece rusak"],
//     answer: "A. Selang/tubing mampet, filter air kotor."
// },
// {
//     question: "Perawat ruang rawat inap melaporkan bahwa pesawat EKG tidak menunjukan hasil pada salah satu leadnya. User telah melakukan pembersihan pada elektrodanya. Apakah tindakan yang Anda lakukan sebagai seorang teknisi elektromedis terhadap kasus tersebut?",
//     options: ["A. Pengukuran tegangan jala-jala listrik PLN", "B. Melakukan pengecekan baterai", "C. Pengecekan fisik dari kabel pasien", "D. Mengganti baterai pada EKG", "E. Mengganti kabel pasien"],
//     answer: "C. Pengecekan fisik dari kabel pasien"
// },
// {
//     question: "Perkembangan teknologi alat di rumah sakit sangat berkembang dengan cepat. Para dokter di rumah sakit biasanya akan meminta peralatan kesehatan yang baru dengan alasan bahwa alat yang dipakai sekarang sudah tidak akurat dan terstandar dengan baik. Apa yang Anda lakukan dalam menanggapi hal ini?",
//     options: ["A. Memperbaiki dan mengkalibrasi alat", "B. Menservis dan inventaris alat", "C. Memberikan brosur alat baru", "D. Membuat berita acara palsu", "E. Memanggil distributor"],
//     answer: "A. Memperbaiki dan mengkalibrasi alat"
// },
// {
//     question: "Teknisi elektromedik mendapat keluhan bahwa lampu pada film viewer tidak menyala. Kemudian teknisi datang dan mengganti lampu tersebut. Setelah diganti ternyata lampu film viewer tetap tidak menyala. Penggantian spare part apakah yang dilakukan?",
//     options: ["A. Starter lampu film viewer", "B. Melakukan kalibrasi", "C. Lampu yang baru lagi", "D. Switch on/off", "E. Saklar lampu film viewer"],
//     answer: "A. Starter lampu film viewer"
// },
// {
//     question: "Sebuah lampu operasi dengan intensitas cahaya 160.000 lux terpasang di langit-langit ruang operasi. Alat tersebut terdiri dari 1 set lampu yang dapat bersuhu 4300 Kelvin. Seorang elektromedis diminta untuk melakukan kegiatan pemeliharaan lampu tersebut. Kegiatan apakah yang seharusnya dihindari saat melakukan pemeliharaan alat tersebut?",
//     options: ["A. Menggunakan desinfektan semprot", "B. Membersihkan alat dengan kain lembab", "C. Sterilisasi uap pada handpiece", "D. Mengganti handpiece yang retak/rusak", "E. Dilakukan saat lampu sudah dingin"],
//     answer: "A. Menggunakan desinfektan semprot"
// },
// {
//     question: "Seorang teknisi melakukan kegiatan pemeliharaan lampu operasi. Setiap akan melakukan operasi atau sesudah melakukan operasi, kebersihan dan kelengkapan alat-alat operasi akan selalu dicek terlebih dahulu. Bagaimanakah cara melakukan pemeliharaan alat elektromedik tersebut?",
//     options: ["A. Dibersihkan dengan kain lap halus", "B. Melakukan pelepasan pada lampu", "C. Melakukan penggantian lampu", "D. Dibersihkan dengan kain lap kasar", "E. Dibersihkan dengan kain lap basah"],
//     answer: "A. Dibersihkan dengan kain lap halus"
// },
// {
//     question: "Sebuah dental unit yang telah digunakan dalam layanan selama 6 bulan, belum pernah dilakukan pemeliharaan. Unit ini menggunakan chair hydraulic, supaya chairnya bisa naik turun dengan baik. Pengecekan pada bagian apa yang harus dilakukan oleh seorang tenaga elektromedis?",
//     options: ["A. Turbin", "B. Chair dan diganti olinya", "C. Multifunction hand piece", "D. Selang air", "E. Kompresor"],
//     answer: "B. Chair dan diganti olinya"
// },
// {
//     question: "Pada dental unit terdapat lampu untuk membantu user dalam pemeriksaan. Jenis lampu yang digunakan yaitu lampu halogen. Terdapat SOP yang benar dalam mengganti bolam lampu halogen yang putus atau mati. Bagaimana SOP mengganti lampu halogen tersebut?",
//     options: ["A. Memasang lampu halogen menggunakan tangan", "B. Melapisi lampu halogen dengan tisu kering", "C. Ditiup terlebih dahulu sebelum dipasang", "D. Digosok terlebih dahulu sebelum dipasang", "E. Memasang lampu dengan kapas"],
//     answer: "B. Melapisi lampu halogen dengan tisu kering"
// },
// {
//     question: "Ketika seorang elektromedis melakukan pengoperasian patient monitor, power indicator menyala tetapi LCD screen tidak menyala/mati. Tindakan apakah yang dilakukan elektromedis tersebut?",
//     options: ["A. Kabel power dengan (PM)", "B. Kabel elektroda dengan pasien", "C. Kabel elektroda dengan PM", "D. Kabel LCD dengan PCB utama", "E. Kabel grounding"],
//     answer: "D. Kabel LCD dengan PCB utama"
// },
// {
//     question: "Petugas Laboratorium melaporkan bahwa water bath mereka sejak beberapa minggu belakangan terjadi kerusakan. Water bath tidak bisa menghasilkan panas. Apa penyebab kasus tersebut?",
//     options: ["A. Tegangan listrik PLN yang tidak stabil", "B. Terdapat gangguan pada sistem sirkulasi air", "C. Heater tidak bekerja", "D. Melakukan kalibrasi", "E. Alat bekerja di luar keadaan normalnya"],
//     answer: "C. Heater tidak bekerja"
// },
// {
//     question: "Pengoperasian water bath membutuhkan suhu dan waktu yang konstan agar larutan bisa sesuai dengan kebutuhan. Apa yang harus dilengkapi oleh seorang teknisi elektromedik pada alat water bath?",
//     options: ["A. Sensor level air", "B. Blower", "C. Kontrol suhu dan waktu", "D. Kontrol suhu", "E. Kontrol waktu"],
//     answer: "A. Sensor level air"
// },
// {
//     question: "Pada EKG recorder, gelombang EKG R - R (peak to peak) sejumlah 5 kotak besar pada kertas EKG. Kecepatan kertas 25 mm/s. Berapa nilai beat per minute (BPM) yang dihasilkan?",
//     options: ["A. 60", "B. 70", "C. 80", "D. 90", "E. 100"],
//     answer: "A. 60"
// },
// {
//     question: "Sebuah shaker dilaporkan rusak dengan keluhan tidak dapat berfungsi sama sekali. Pemeriksaan apakah yang Anda lakukan saat perbaikan?",
//     options: ["A. Kabel power", "B. Fuse", "C. Mikroswitch door", "D. Saklar On Off", "E. Motor"],
//     answer: "A. Kabel power"
// },
// {
//     question: "Rumah Sakit akan membeli sebuah alat x-ray mobile dengan spesifikasi 100kV 100mA. Dan akan ditempatkan satu bangsal dengan alat x-ray stationer yang memiliki 150kV 500mA. Sementara pada bangsal terdapat daya 150 kVA. Apa yang harus direncanakan pada instalasi listrik bangsal tersebut?",
//     options: ["A. Menambah daya menjadi 200kVA", "B. Mengganti sekring yang lebih besar kapasitas arusnya", "C. Mengganti perangkat listrik seperti kabel dan MCB", "D. Menginstal ulang jaringan listriknya", "E. Mengganti saklar engkel"],
//     answer: "C. Mengganti perangkat listrik seperti kabel dan MCB"
// },
// {
//     question: "Sebuah suction pump piston rusak tidak bisa digunakan, motor tidak bergerak, penggunaan terakhir satu minggu yang lalu. Apa yang harus kita lakukan pertama kali saat memperbaiki?",
//     options: ["A. Melakukan desinfektan terhadap alat", "B. Membuka bagian motor", "C. Memutar motor secara manual", "D. Merendam alat dengan cairan desinfektan", "E. Membersihkan alat"],
//     answer: "E. Membersihkan alat"
// },
// {
//     question: "Sebelum pesawat Autoclave digunakan terlebih dahulu kita mengatur bagian atau komponen yang terdapat pada autoclave. Apakah komponen atau bagian yang pertama kali diatur sebelum alat tersebut digunakan?",
//     options: ["A. Langsung dihubungkan ke tegangan jala-jala PLN", "B. Mengatur temperature sesuai dengan yang kita kehendaki", "C. Langsung menghidupkan autoclave", "D. Mengatur waktu/timer yang kita kehendaki", "E. Mengatur suhu setting dan waktu operasi"],
//     answer: "E. Mengatur suhu setting dan waktu operasi"
// },
// {
//     question: "Sebuah Rumah Sakit akan melakukan pengadaan lampu Infra Red yang akan dipasang di dalam sebuah ruang fisioterapi yang di dalamnya terdapat sebuah nebulizer. Lampu Infra Red tersebut digunakan untuk membantu terapi menggunakan nebulizer tersebut. Bagaimana rencana pemilihan lampu tersebut dan bagaimana pemasangannya?",
//     options: ["A. Lampu Infra Red Desk. Ditempatkan di Meja dokter", "B. Lampu Infra Red Desk, Ditempatkan di atas nebulizer", "C. Lampu Infra Red Stand. Ditempatkan di sekitar nebulizer", "D. Lampu Infra Red Stand. Ditempatkan di Sekitar Meja dokter", "E. Lampu Infra Red Wall. Ditempatkan di tembok sekitar nebulizer"],
//     answer: "C. Lampu Infra Red Stand. Ditempatkan di sekitar nebulizer"
// },
// {
//     question: "Seorang elektromedis melakukan pemeliharaan pada alat Electro Surgical Unit, dengan cara melakukan pengecekan hasil keluaran dengan mengukur tegangan elektrode positif dan negatif. Dengan hasil tidak keluar daya pada ESU analyzer. Apakah yang harus dilakukan elektromedis dalam kasus tersebut?",
//     options: ["A. Periksa kembali sambungan power supply", "B. Menaikkan frekuensi", "C. Memperbaiki Patient plate", "D. Memeriksa generator HF", "E. Periksa keluaran kabel power"],
//     answer: "D. Memeriksa generator HF"
// },
// {
//     question: "Di rumah sakit terdapat alat baby incubator. Alat tersebut dioperasikan dengan menekan tombol power switch ON. Akan tetapi pada saat alat digunakan ternyata display suhu tidak menyala dan indikator power mati. Apa yang harus diganti dalam mengatasi hal tersebut?",
//     options: ["A. Probe sensor", "B. Fuse", "C. Tombol", "D. Heater", "E. Humidity"],
//     answer: "B. Fuse"
// },
// {
//     question: "Pesawat Rontgen adalah suatu alat radiologi yang memanfaatkan kemampuan tabung Rontgen dalam memproduksi sinar-x dimana 99% energinya berubah menjadi panas, dan hanya 1% energi yang menghasilkan sinar-x. Disamping manfaat yang dihasilkannya, terdapat risiko terhadap penggunaan sinar-x yang berlebihan dan tidak tepat guna. Salah satu upaya pencegahan agar pemanfaatan sinar-x sesuai asas ALARA (as low as reasonably achievable) adalah",
//     options: ["A. Menganjurkan kepada operator agar menggunakan setting kV yang kecil", "B. Menganjurkan kepada operator agar menggunakan apron saat melakukan pemeriksaan", "C. Memasang Pb pada ruangan pemeriksaan", "D. Menghidupkan lampu merah saat melakukan ekspose", "E. Melakukan uji kesesuaian terhadap pesawat sinar-x secara berkala"],
//     answer: "E. Melakukan uji kesesuaian terhadap pesawat sinar-x secara berkala"
// },
// {
//     question: "Perawat melaporkan kendala pada ECG. Pada kertas hasil pemeriksaan, banyak noise sehingga mengganggu proses pembacaan sinyal EKG. Setelah diperiksa, kondisi fisik alat masih bagus. Apa yang harus Anda lakukan untuk pemeriksaan alat tersebut?",
//     options: ["A. Switch speed motor.", "B. Tombol HUM Filter.", "C. Tombol Sensitivity.", "D. Tombol Calibration 1 mV.", "E. Grounding pada alat."],
//     answer: "E. Grounding pada alat."
// },
// {
//     question: "Berdasarkan analisa kerusakan pada sebuah alat sterilisator kering dengan keluhan alat tidak dapat bekerja meskipun saklar sudah pada posisi ON. Tindakan perbaikan pertama yang harus dilakukan?",
//     options: ["A. Menghubungkan dengan sumber tegangan", "B. Mengecek tegangan yang masuk", "C. Mengganti kabel power supply", "D. Mengganti saklar", "E. Mengganti fuse"],
//     answer: "E. Mengganti fuse"
// },
// {
//     question: "Salah satu jenis alat terapi yang menggunakan frekuensi tinggi yang menghasilkan panas untuk disalurkan ke bagian tubuh pasien adalah SWD yang sering digunakan oleh terapis untuk menyembuhkan pasien cedera. Apakah nama bagian yang menyalurkan frekuensi tinggi tersebut?",
//     options: ["A. Elektrode", "B. Pedal", "C. Transduser", "D. Kabel pasien", "E. Reflektor"],
//     answer: "A. Elektrode"
// },
// {
//     question: "Seorang perawat di ruang NICU menyampaikan keluhan kepada elektromedis bahwa ada alat infant warmer yang setelah di-setting ternyata suhunya tidak tercapai atau tidak panas. Apa pemeriksaan pertama yang akan dilakukan oleh tenaga elektromedik untuk menangani hal tersebut?",
//     options: ["A. Tegangan pada rangkaian driver", "B. Tegangan pada heater", "C. Tegangan pada semua rangkaian", "D. Tegangan pada power supply", "E. Tegangan pada sensor suhu"],
//     answer: "B. Tegangan pada heater"
// },
// {
//     question: "Ultrasonography merupakan alat yang digunakan untuk mengetahui bagian dalam tubuh dengan menggunakan pancaran frekuensi suara. Alat ini digunakan untuk diagnosa suatu penyakit sehingga harus ditempatkan pada ruangan khusus agar tidak mengganggu proses diagnosa pasien. Berdasarkan fungsinya, harus ditempatkan di ruangan manakah alat tersebut?",
//     options: ["A. Kedap suara", "B. Terbuka", "C. Banyak ventilasi", "D. Dilengkapi dengan HEPA filter", "E. Dinding dan pintu yang dilapisi timbal"],
//     answer: "A. Kedap suara"
// },
// {
//     question: "Pada sebuah rumah sakit akan dilakukan instalasi autoclave table top dengan spesifikasi input 110 VAC. Dengan menggunakan alat apakah seorang elektromedis untuk mengatasi masalah tersebut?",
//     options: ["A. Trafo step down", "B. Trafo step up", "C. Stabilizer", "D. Inverter", "E. UPS"],
//     answer: "A. Trafo step down"
// },
// {
//     question: "Seorang dokter akan melakukan tindakan pembedahan di sebuah rumah sakit. Peralatan yang digunakan adalah elektrosurgery unit (ESU). Apakah prosedur pertama yang diperhatikan pada kasus tersebut?",
//     options: ["A. Kebocoran gas", "B. Penempatan return elektroda pada pasien", "C. Penggunaan footswitch", "D. Penggunaan handswitch", "E. Safety grounding"],
//     answer: "B. Penempatan return elektroda pada pasien"
// },
// {
//     question: "Saat dilakukan pengecekan pada sphygmomanometer air raksa atas laporan dari pengguna didapati bahwa nilai tekanan yang tampil pada sphygmomanometer terbaca 100 mmHg. Saat dilakukan kalibrasi pada alat tersebut nilai tekanan yang terbaca melebihi ambang batas yang diperkenankan yaitu 3 mmHg. Apakah tindakan yang harus dilakukan elektromedis untuk memperbaiki hal tersebut?",
//     options: ["A. Penggantian manset", "B. Penggantian Y konektor", "C. Penggantian tabung gelas ukur", "D. Pembersihan tabung gelas ukur", "E. Pengurangan volume air raksa"],
//     answer: "E. Pengurangan volume air raksa"
// },
// {
//     question: "Seorang perawat merawat pasien dan memasang infus di ruangan ICU setelah dilakukan pemanasan infus, ternyata infus tidak bisa menetes. Tindakan apakah yang dilakukan elektromedis?",
//     options: ["A. Memperbaiki karena adanya sumbatan pada selang infus", "B. Memeriksa motor penggerak actuator jika perlu diganti", "C. Pada saat selang diluruskan kurang bagus sehingga ada udara masuk", "D. Lepas selang infus dan bersihkan sumbatannya.", "E. Membuka infus pump"],
//     answer: "D. Lepas selang infus dan bersihkan sumbatannya."
// },
// {
//     question: "Seorang petugas laboratorium mengeluhkan alat mikroskop yang mereka pakai, pencahayaan tidak maksimal, sehingga petugas laboratorium tidak dapat melihat obyek dengan jelas. Apa yang harus dilakukan elektromedis untuk mengecek kasus tersebut?",
//     options: ["A. Lensa objektif", "B. Bagian diafragma", "C. Posisi cermin", "D. Bagian makrometer", "E. Bagian revolver"],
//     answer: "C. Posisi cermin"
// },
// {
//     question: "Kepala Ruangan di Ruang Operasi Rumah Sakit melaporkan kerusakan meja operasi yaitu meja operasi tidak dapat dioperasikan untuk naik turun. Apakah tindakan yang dilakukan berdasarkan kasus tersebut?",
//     options: ["A. Pengatur posisi", "B. Remote", "C. Aksesoris", "D. Sistem Hidrolik/elektrik", "E. Rem"],
//     answer: "D. Sistem Hidrolik/elektrik"
// },
// {
//     question: "Sebuah alat harmonic scalpel baru saja dibeli oleh rumah sakit. Seorang elektromedis akan melakukan pencatatan kelengkapan alat yang diterima. Ternyata ada kelengkapan yang terdapat pada kardus alat. Apakah nama kelengkapan alat harmonic scalpel yang tidak ada?",
//     options: ["A. Elektroda Passive", "B. Foot Switch", "C. Elektroda Active", "D. Monopolar electrode", "E. Forceps"],
//     answer: "A. Elektroda Passive"
// },
// {
//     question: "Seorang terapis melaporkan bahwa alat terapi inframerah yang digunakan mengalami masalah. Setelah dicek oleh elektromedis, ternyata lampu tidak menyala. Tindakan apa yang dilakukan oleh elektromedis?",
//     options: ["A. Memasang bola lampu & memutar starter", "B. Mencari kabel pengganti", "C. Mengecek arus", "D. Ganti kabel power supply", "E. Cek kabel power"],
//     answer: "A. Memasang bola lampu & memutar starter"
// },
// {
//     question: "Setiap rumah sakit memiliki instalasi radiologi, salah satu alatnya adalah General X-Ray, alat tersebut perlu mendapatkan perawatan yang sangat intens agar bisa bertahan lama dalam penggunaannya. Apakah yang dilakukan sehingga hal tersebut dapat dilaksanakan?",
//     options: ["A. Menghidupkan alat seketika saat ada pemeriksaan pasien", "B. Menghidupkan alat lebih awal untuk pemanasan sebelum pemeriksaan pasien dilakukan", "C. Membiarkan alat hidup walaupun tidak ada pemeriksaan", "D. Tidak menghidupkan alat dalam waktu lama walaupun tidak ada pemeriksaan pasien", "E. Mematikan alat setiap habis pemeriksaan pasien dan menghidupkan ketika ada pemeriksaan pasien"],
//     answer: "B. Menghidupkan alat lebih awal untuk pemanasan sebelum pemeriksaan pasien dilakukan"
// },
// {
//     question: "Seorang teknisi harus dapat melakukan pemasangan alat traksi pada tali utama sehingga dapat memiliki gaya tarik. Traksi harus dapat bergerak bebas pada katrol. Berat ekstremitas dengan alat penyokong harus seimbang dengan pemberat agar reduksi dapat dipertahankan. Dimanakah seharusnya teknisi memasang komponen tersebut?",
//     options: ["A. Di tengah, sejajar dengan tubuh pasien", "B. Tinggi di atas permukaan lantai", "C. Di bawah, sejajar dengan lantai", "D. Di samping kanan pasien", "E. Di samping kiri pasien"],
//     answer: "B. Tinggi di atas permukaan lantai"
// },
// {
//     question: "Seorang perawat sedang melakukan pemeriksaan tekanan darah terhadap pasien. Setelah tensimeter terpasang, manset tidak mengembang meskipun valve sudah ditutup. Apa permasalahan yang terjadi pada alat tersebut?",
//     options: ["A. Balon bocor", "B. Posisi manset tidak tepat", "C. Manset bocor", "D. Selang bocor", "E. Manometer gauge perlu diperbaiki"],
//     answer: "A. Balon bocor"
// },
// {
//     question: "Gelombang Microwave yang dihasilkan oleh alat MWD dapat menimbulkan interferensi elektromagnetik yang akan mempengaruhi kerja alat lain. Berapakah minimal jarak (meter) yang aman antara alat tersebut dengan alat kesehatan lainnya?",
//     options: ["A. 2", "B. 1", "C. 5", "D. 10", "E. 15"],
//     answer: "B. 1"
// },
// {
//     question: "Seorang pasien yang mengalami kecelakaan membutuhkan 2 kantong darah, sebelum ditransfusikan ke pasien tersebut biasanya kantong darah tersebut dihangatkan dengan alat blood warmer. Berapa pengaturan suhu pada kasus alat tersebut?",
//     options: ["A. 3 - 5", "B. 3 - 7", "C. 4 - 3", "D. 10 - 0", "E. 2 - 6"],
//     answer: "A. 3 - 5"
// },
// {
//     question: "Seorang elektromedis ingin menguji alat secara keseluruhan melalui bagian alat dengan kemampuan maksimum. Pada saat diuji alat tersebut dihubungkan tanpa beban, sehingga dapat diketahui secara keseluruhan bahwa alat tersebut dapat dioperasikan dengan baik. Apakah uji yang paling tepat pada alat tersebut?",
//     options: ["A. Fungsi", "B. Kinerja", "C. Teknis", "D. Operasional", "E. Terencana"],
//     answer: "B. Kinerja"
// },
// {
//     question: "Seorang teknisi elektromedis, melakukan pemeliharaan harian di Rumah Sakit. Ketika di ruangan operasi, teknisi tersebut mendapatkan suction pump dengan masa lah tempat penampungan cairan suction pump yang berlebihan, sehingga cairan pasien yang terhisap tertumpah. Apakah bagian yang harus diperbaiki pada hal tersebut?",
//     options: ["A. Selang penghisap", "B. Pengaman motor", "C. Manometer", "D. Sensor pengaman overflow protection", "E. Regulator"],
//     answer: "D. Sensor pengaman overflow protection"
// },
// {
//     question: "Ada sebuah instrument ceiling operation lamp yang masih belum dipasang di kamar operasi dan masih menunggu seorang teknisi elektromedik untuk memasangnya. Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertugas menangani alat tersebut?",
//     options: ["A. Melakukan pemasangan di langit-langit/plafon kamar operasi", "B. Melakukan pemasangan di dinding kamar operasi", "C. Melakukan pemasangan di kamar operasi cadangan", "D. Tidak perlu melakukan pemasangan karena sudah mempunyai roda", "E. Tidak perlu melakukan pemasangan karena dapat berpindah-pindah"],
//     answer: "A. Melakukan pemasangan di langit-langit/plafon kamar operasi"
// },
// {
//     question: "Seorang laboran memanggil saudara sebagai teknisi untuk memperbaiki alat lab stirrer dengan keluhan saat dioperasikan tidak mampu mengaduk sampel. Bagaimanakah tindakan saudara melakukan pengecekan perbaikan pada alat stirrer tersebut?",
//     options: ["A. Pengaduk dan motor", "B. Casing dan pengaduk", "C. Timer dan sikat arang", "D. Magnet dan pengaduk", "E. Sikat arang dan motor"],
//     answer: "A. Pengaduk dan motor"
// },
// {
//     question: "RSUD tipe C di Provinsi Jawa Tengah berencana mengadakan pembelian sebuah alat medis berupa lampu operasi Ceiling. Staf IPSRS ditugaskan untuk survei sebuah ruangan yang akan dipasang lampu operasi. Penempatan di ruang manakah alat tersebut akan diinstall?",
//     options: ["A. ICU", "B. IGD", "C. Operasi", "D. Rehab Medik", "E. Laboratorium"],
//     answer: "C. Operasi"
// },
// {
//     question: "Pesawat autoclave pada saat proses sterilisasi mengalami kerusakan yaitu suhu uap air tidak dapat panas, dan akhirnya tidak dapat digunakan untuk sterilisasi. Apa yang dilakukan dalam pemeriksaan dan perbaikan alat tersebut?",
//     options: ["A. Filter", "B. Timer", "C. Casing", "D. Heater", "E. Gasket"],
//     answer: "D. Heater"
// },
// {
//     question: "User  menyampaikan terjadi kerusakan alat spektrofotometer. Saat mengoperasikan alat spektrofotometer, probe pada alat tidak dapat mengambil sampel. Apakah kerusakan yang terjadi pada kasus tersebut?",
//     options: ["A. Kerusakan pada pompa servo", "B. Tersumbatnya probe", "C. Kabel power rusak", "D. Fuse terputus.", "E. Pompa sudah berkarat"],
//     answer: "B. Tersumbatnya probe"
// },
// {
//     question: "Seorang teknisi elektromedis menemukan peralatan Infusion Pump terjadi kerusakan pada pompa peristaltic dengan kondisi, tidak mampu mengalirkan cairan sedangkan kondisi motor bekerja dengan baik. Apakah analisa kerusakan dari kasus tersebut?",
//     options: ["A. Rangkaian sensor rusak", "B. Kontrol board rusak", "C. Karet finger rusak, motor rusak", "D. Gear pada motor rusak", "E. Fuse putus"],
//     answer: "C. Karet finger rusak, motor rusak"
// },
// {
//     question: "Dalam melakukan pemeliharaan pada pesawat suction pump yang harus diperhatikan daya hisapnya. Apakah yang mempengaruhi daya hisap dari suction pump?",
//     options: ["A. Tekanan", "B. Selang", "C. Regulator", "D. Tabung", "E. Tutup botol"],
//     answer: "A. Tekanan"
// },
// {
//     question: "Infusion pump adalah salah satu alat yang banyak digunakan di ruang ICU yang berfungsi untuk memberikan nutrisi/makanan dan obat ke pasien. Oleh karena itu manajemen rumah sakit harus melakukan pemeliharaan rutin. Bagian apakah dari alat tersebut yang memerlukan perhatian dan pemeliharaan khusus?",
//     options: ["A. Acclusion sensor", "B. Air sensor", "C. Door sensor", "D. Bubble sensor", "E. Drip Sensor"],
//     answer: "A. Acclusion sensor"
// },
// {
//     question: "Seorang petugas laboratorium mengeluhkan penggunaan mikroskop pada perbesaran x100 tidak menemukan gambar objek yang jelas. Sedangkan pada perbesaran x10 dan x40 tidak mengalami masalah. Untuk mengatasi masalah tersebut komponen yang harus dipersiapkan oleh seorang elektromedis adalah",
//     options: ["A. Okuler pengganti", "B. Objektif pengganti", "C. Bola lampu pengganti", "D. Lens Cleaner", "E. Immersion Oil"],
//     answer: "B. Objektif pengganti"
// },
// {
//     question: "Salah satu komponen dasar dari blood glucose menggunakan enzim glukosa oksidase dan didasarkan pada teknologi biosensor yang spesifik untuk pengukuran glukosa. Komponen dasar tersebut adalah:",
//     options: ["A. Blood Lancet", "B. Pen Blood", "C. Glucose Meter", "D. Test Strip", "E. Screen"],
//     answer: "D. Test Strip"
// },
// {
//     question: "Seorang teknisi sedang melakukan pemeliharaan alat, dengan banyaknya permasalahan pada peralatan terapi yang terkait dengan kinerja alat. Apa yang harus dilakukan dengan masalah tersebut?",
//     options: ["A. Dibersihkan (dilap)", "B. Membuat laporan perbaikan", "C. Memanggil User", "D. Kalibrasi alat", "E. Pemantauan Fungsi Alat"],
//     answer: "D. Kalibrasi alat"
// },
// {
//     question: "Apabila setelah dilakukan exposure tapi tidak menghasilkan gambar/bayangan pada film X-ray. Maka perlu dilakukan tindakan untuk mengetahui ada/tidaknya sinar-X. Apa yang harus dilakukan untuk mengetahui ada/tidaknya X-ray?",
//     options: ["A. Exposure pada kondisi ruang gelap", "B. Exposure ulang", "C. Exposure pada kaset terbuka", "D. Exposure ke kaset terbuka pada ruang gelap", "E. Exposure pada ruang terang"],
//     answer: "D. Exposure ke kaset terbuka pada ruang gelap"
// },
// {
//     question: "Ultrasonic dari harmonic scalpel bergerak secara longitudinal dapat bergetaran untuk memotong jaringan sambil bersamaan melakukan hemostasis. Berapa getaran per detik yang digunakan pada alat tersebut?",
//     options: ["A. 1.000", "B. 3.500", "C. 4.500", "D. 10.000", "E. 55.500"],
//     answer: "E. 55.500"
// },
// {
//     question: "Pada sebuah buku service manual & User manual alat pembangkit sinar-X, terdapat pernyataan bahwa tabung sinar-X akan menghasilkan panas yang tinggi saat terjadi sinar-X. Sehingga ditambahkan oli trafo di dalam tabung tersebut. Apakah fungsi pemberian Oli Trafo tersebut?",
//     options: ["A. Pendingin dan isolator tegangan", "B. Isolator tegangan dan pengaman", "C. Pendingin tabung dan pelicin", "D. Pelumas dan isolator", "E. Pengerak motor anoda"],
//     answer: "A. Pendingin dan isolator tegangan"
// },
// {
//     question: "Jika pada saat awal user mengoperasikan alat ESU, ternyata terdapat keluhan bahwa display pada alat tersebut tidak menyala dan alat mengeluarkan asap. Sebagai tenaga teknik elektromedik analisis apa yang Anda lakukan?",
//     options: ["A. Mengganti fuse", "B. Mengecek kerusakan pada blok power supply dan blok display", "C. Mengecek sambungan elektroda pasif terhadap grounding", "D. Mengecek kerusakan pada blok pembangkit frekuensi", "E. Mengecek pada footswitch"],
//     answer: "B. Mengecek kerusakan pada blok power supply dan blok display"
// },
// {
//     question: "Seorang perawat datang ke instalasi pemeliharaan sarana (IPS) Rumah sakit melaporkan kerusakan nebulizer unit yang tidak dapat dioperasikan. Untuk menyikapi perawat tersebut apa yang harus dilakukan oleh petugas elektromedis?",
//     options: ["A. Membuat Laporan Kerusakan", "B. Menghubungi Agen Alat tersebut", "C. Membawa Alat keluar ruangan", "D. Mengganti spare part yang rusak", "E. Melakukan pemeriksaan awal"],
//     answer: "E. Melakukan pemeriksaan awal"
// },
// {
//     question: "Salah satu sifat sinar X adalah menghasilkan efek biologis sehingga peralatan radiologi yang menghasilkan radiasi sinar X harus ditempatkan pada ruang/bangunan yang sesuai ketentuan standar. Apa persyaratan fasilitas ruang radiologi yang sesuai untuk peralatan tersebut?",
//     options: ["A. Dinding beton ketebalan 20cm", "B. Ruang berada pada lantai bawah tanah", "C. Ruang dilengkapi dengan sangkar Faraday", "D. Dinding dilapisi timah hitam (Pb) dengan ketebalan 1mm", "E. Dipasang lampu berwarna merah, peringatan tanda adanya bahaya radiasi"],
//     answer: "D. Dinding dilapisi timah hitam (Pb) dengan ketebalan 1mm"
// },
// {
//     question: "Prosedur pengoperasian alat suction pump diawali dengan menghubungkan kabel power pada sumber jala-jala listrik kemudian menekan tombol ON. Indikator lampu ON menyala, dari dalam alat terdengar suara motor bekerja, namun ketika ujung selang ditutup dengan jari terasa daya hisap pompa kurang kuat. Tindakan apa yang dilakukan untuk memastikan permasalahan tersebut?",
//     options: ["A. Test dengan pressure gauge", "B. Tutup selang menggunakan stopper", "C. Matikan alat kemudian hidupkan kembali", "D. Cek sistem kelistrikan", "E. Lepaskan wadah pembuangan dari unit"],
//     answer: "A. Test dengan pressure gauge"
// },
// {
//     question: "Tabung rontgen dikatakan rusak tidak bisa dipakai sama sekali dan harus diganti. Identifikasi apakah yang dikatakan tabung rusak?",
//     options: ["A. Filamen pada tabung putus", "B. Lampu kolimator pada tabung putus", "C. Stator motor anode putus", "D. Konektor tegangan tinggi ke anode tabung putus", "E. Konektor tegangan tinggi ke katode tabung putus"],
//     answer: "A. Filamen pada tabung putus"
// },
// {
//     question: "Seorang perawat menggunakan alat cardiotocograph. Saat dioperasikan alat tersebut gambar tidak nampak jelas. Sebagai elektromedis bagian manakah yang perlu diperiksa pada alat tersebut?",
//     options: ["A. Cek kabel konektor probe", "B. Cek kabel catu daya", "C. Kabel power tidak terhubung", "D. Membersihkan probe", "E. Setting tampilan display"],
//     answer: "A. Cek kabel konektor probe"
// },
// {
//     question: "Aksesori infusion pump, IV Tubing set adalah salah satu aksesori habis pakai. Pemeliharaan yang harus dilakukan adalah penggantian IV tubing set. Berapa lamakah penggantinya?",
//     options: ["A. 1 minggu", "B. 1 hari", "C. 2 hari", "D. 2 minggu", "E. Setiap pasien"],
//     answer: "E. Setiap pasien"
// },
// {
//     question: "Electrosurgical adalah aplikasi elektronika yang dipakai pada pembedahan di rumah sakit dengan cara memotong, membekukan, dan mengeringkan darah pada jaringan biologis. Keluaran apakah yang dihasilkan pada penggunaan peralatan ESU?",
//     options: ["A. Frekuensi tinggi dan arus listrik", "B. Panas dan arus listrik", "C. Tegangan listrik dan cahaya", "D. Mekanik dan arus listrik", "E. Cahaya dan spare gap"],
//     answer: "A. Frekuensi tinggi dan arus listrik"
// },
// {
//     question: "Jumlah Rumah sakit merupakan tempat berbagai macam jenis alat medis. Salah satu alat medis di rumah sakit yaitu pesawat rontgen. Salah satu bagian dari alat tersebut ada yang berfungsi dalam menghasilkan sinar-X. Syarat sinar-X dibutuhkan awan elektron yang akan dihasilkan pada katoda tabung sinar-X. Bagian manakah yang dimaksud pada alat tersebut?",
//     options: ["A. Focusing cup", "B. Filamen", "C. Target", "D. Anoda", "E. Katoda"],
//     answer: "B. Filamen"
// },
// {
//     question: "Lampu operasi adalah lampu yang digunakan pada saat operasi yang tidak menimbulkan panas, cahayanya tidak menyilaukan sehingga memudahkan dan tidak mengganggu proses berjalannya operasi serta arah sinar mudah diatur posisinya. Operator kamar bedah melaporkan bahwa lampu operasi telah terjadi bayangan. Apakah yang Anda lakukan sebagai teknisi?",
//     options: ["A. Mengatur Reflector", "B. Dimmer", "C. Mengatur Cup lampu", "D. Membuat fokus", "E. Tegangan Trafo"],
//     answer: "A. Mengatur Reflector"
// },
// {
//     question: "Elektromedis mendapat laporan dari perawat saat menggunakan patient monitor di ruangan IGD Rumah Sakit. Saat digunakan tampilan Heart Rate pada monitor tidak muncul. Pengaturan apakah yang dilakukan elektromedis untuk mengatasi kasus tersebut?",
//     options: ["A. Tampilan NIBP pada patient monitor", "B. ECG pada patient monitor", "C. Heart Rate pada patient monitor", "D. NIBP pada patient monitor", "E. SPO2 pada patient monitor"],
//     answer: "B. ECG pada patient monitor"
// },
// {
//     question: "Setelah dalam jangka waktu yang cukup lama tidak digunakan, pada tabung sinar-X akan timbul gas, sehingga akan menghasilkan molekul gas dalam tabung hampa udara. Untuk mencegah kerusakan pada tabung X-ray seharusnya dilakukan?",
//     options: ["A. Inspeksi alat", "B. Kalibrasi", "C. Pemanasan pada tabung", "D. Exposure", "E. Pemasangan grounding"],
//     answer: "C. Pemanasan pada tabung"
// },
// {
//     question: "Dokter melaporkan kepada bagian pemeliharaan sarana medis bahwa alat mikroskop mengalami kerusakan yaitu pada bagian lensa yang disekitar mata sang dokter. Lensa tersebut terlihat berdebu. Dokter tersebut meminta kepada teknisi agar lensa tersebut dibersihkan. Lensa apakah yang dimaksud?",
//     options: ["A. Objektif", "B. Okuler", "C. Prisma", "D. Lensa Cembung", "E. Kondenser"],
//     answer: "B. Okuler"
// },
// {
//     question: "Elektromedis melakukan pemeliharaan pada peralatan ESU. Dengan adanya perencanaan yang baik, diharapkan tidak akan terjadi kegagalan penggunaan dan membahayakan pasien. Pemeliharaan berkala diperlukan dengan memperhatikan bahaya terhadap luka bakar pada kulit pasien yang tidak diinginkan. Pemeliharaan apa yang dilakukan elektromedis agar tidak terjadi hal tersebut?",
//     options: ["A. Memeriksa dan mengganti bagian fuse", "B. Pengecekan tegangan yang masuk", "C. Patient plate dan konektor dalam keadaan baik", "D. Elektroda aktif dalam kondisi bersih", "E. Pemeriksaan bagian pembangkit frekuensi"],
//     answer: "C. Patient plate dan konektor dalam keadaan baik"
// },
// {
//     question: "Perawat melaporkan bahwa tensimeter digital pembacaannya menyimpang dari nilai standar. Tensimeter tersebut telah dipakai lebih dari satu bulan. Apakah tindakan yang dilakukan pada kasus tersebut?",
//     options: ["A. Mengganti manset", "B. Mengganti baterai", "C. Mengkalibrasi alat tersebut", "D. Mengecek manset", "E. Mengukur tegangan baterai"],
//     answer: "C. Mengkalibrasi alat tersebut"
// }
   ];
   
