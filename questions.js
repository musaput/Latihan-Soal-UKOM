   const allQuestions = [
       {
           question: "Elektron yang bergerak menuju anoda sebagaian mengenai sasaran (target), dan sebagian lagi mengenai bagaian anoda lainnya. Elektron yang tidak mengenai target menyebabkan terjadinya radiasi sinar - x dengan arah yang tidak menentu. Kejadian tersebut disebut dengan?",
           options: ["A. Heat", "B. Gassy", "C. Hill effect", "D. Heat effect", "E. Heat storage"],
           answer: "C. Hill effect"
       },
       {
           question: "Alat ECG di ruang IGD dil aporkan hasil cetaknya kriting dan blok hitam. Hasil pengamatan seorang elektromedis menyatakan kabel elektroda tidak ada yang putus, tegangan masukan 220V, grounding terukur 0.2 ohm, mode demo pada alat normal, elektroda dalam kondisi baik. Pembersih apa yang harus dilakukan ?",
           options: ["A. Filter", "B. Konektor", "C. Elektroda", "D. Head Printer", "E. Kabel pembumian"],
           answer: "D. Head Printer"
       },
       {
           question: "Perawat Rumah Sakit akan melakukan pemeriksaan jantung pasien. Untuk keperluan hal tersebut diperlukan alat ECG. Pada manual book alat ecg terdapat spesifikasi alat yang tertulis 3 channel. Apa yang dimaksud dengan istilah 3 channel pada pesawat tersebut?",
           options: ["A. ECG tersebutmempunyai 3 Filter", "B. ECG tersebutmempunyai 3 kabelmasukan", "C. ECG tersebutmampumerekam 3 lead sekaligus", "D. ECG tersebutmampumemeriksa 3 pasiensekaligus", "E. ECG tersebutmampumenyimpan 3 data perekam"],
           answer: "C. ECG tersebut mampu merekam 3 lead sekaligus"
       },
       {
           question: "Pada unit Waterbath, heater/pemanas adalah komponen utama untuk bekerja atau tidaknya alat ini. Untuk mencegah kerusakan pada heater, adahal yang harus diperhatikan dalam penggunaan air yang dipakai. Apa kriteria air yang harus digunaka n pada waterbath tersebut?",
           options: ["A. Air yang sudahdiprosespenguapan (Aquades)", "B. Air banyakmengandung mineral", "C. Air harusbersihdanjernih", "D. Air yang sudah di rebus", "E. Air suling"],
           answer: "A. Air yang sudahdiprosespenguapan (Aquades)"
       },
       {
           question: "Seorang pasien dianjurkan melakukan pemotretan dengan menggunakan pesawat dental x - ray untuk pemeriksaan seluruh gigi. Yang saudara ketahui, pesawat apa yang dimaksud?",
           options: ["A. Dental X - ray intra oral", "B. Dental micro source", "C. Dental panoramix", "D. Dental chromatic", "E. Dental chair"],
           answer: "C. Dental Panoramix"
       },
       {
           question: "Unit radiologi bergerak dapat beroperasional tetapi memuncul error pada unit setelah 15 – 20 kali exposure. Ketika error code munculmaka x - ray ti dak terjadi. Error code menjelaskan tentanga danya over current pada filament circuit. Apa yang harus dilakukan elektromedis dalam masalah tersebut?",
           options: ["A. Perbaikanrangkaian mA kemudian kalibrasi", "B. Perbaikanrangkaian KV kemudiankalibrasi", "C. Perbaikanrangkaianspace ch arge kemudiankalibrasi", "D. Perbaikanrangkaian over protection kemudian kalibrasi", "E. Perbaikanrangkaian control charging kemudiankalibrasi"],
           answer: "D. Perbaikanrangkaian over protection kemudian kalibrasi"
       },
       {
           question: "Sebuah alat infuse pump tidak bekerja dengan baik dengan keluhan terjadi gelembung udara pada tubing/selang. Perawat belum mengerti penggunaan alat karena alat baru beberapa hari dibeli. Sudah dilakukan penyetelan ulang oleh elektromedis untuk mengeluarkan bubble namun terjadi lagi adanya bubble pada cubing inf use pump. Apa prosedur yang harus dijelaskan oleh elektromedis ke pada perawat?",
           options: ["A. Prosedurpengoperasian", "B. Prosedurpenyimpanan", "C. Prosedurpemeliharaan", "D. Prosedurpenempatan", "E. Prosedurkalibrasi"],
           answer: "C. Prosedur pengoperasian"
       },
       {
           question: "Radiographer menyampaikan laporan keluhan kinerja unit radiologi bergerak di instalasinya. Setelah 10 - 15 kali exposure, unit tidak mampu menghasilkan x - ray. Hasil kalibrasi pada semua nilai mA nilainya out of tolerance dan mencapai +20% dari setting. Apa yang harus dilakukan elektromedis dalam masalah ter sebut?",
           options: ["A. Perbaikanrangkaian KV kemudiankalibrasi", "B. Perbaikanrangkaian exposure kemudiankalibrasi", "C. Perbaikanrangkaian over current kemudiankalibrasi", "D. Perbaikan rangkaian arus tabung kemudian kalibrasi", "E. Perbaikanrangkaian space charge kemudiankalibrasi"],
           answer: "E. Perbaikan rangkaian arus tabung kemudian kalibrasi"
       },
       {
           question: "Unit infuse pump yang baru saja dibeli tidak bekerja dengan baik dengan keluhan gelembung udara pada tubing. Saat uji fungsi pertama kali berjalan normal. Tenaga elektromedis sudah berkali - kali menangani keluhan tersebut dengan mempraktekan bagaimana mengeluarkan bubble dari tubing kepada perawat. Hanya saja keluhan yang sama terjadi lagi. Apakah prosedur yang harus di susun oleh elektromedis yang dapat membantu pe rawat menangani masalah tersebut?",
           options: ["A. Prosedurkalibrasi", "B. Prosedurperbaikan", "C. Prosedurpemantauan", "D. Prosedurpemeliharaan", "E. Prosedur pengoperasian"],
           answer: "E. Prosedur pengoperasian"
       },
       {
           question: "Dilaporkan oleh teknisi pelksana elektromedik pemula, bahwa ada laporan kerusakan alat roentgenhasil film yang di but radiogra fer kadang tidak sesuai dengan ukuran yang dibuat saat preposisi kolimasi penyinaran pada kolimator. Dari 11 - 15 preposisi kolimasi yang dilakukan 1 - 2 salah pengukuran. Apa prosedur yang harus dilakukan oleh teknisi elektromedis?",
           options: ["A. kalibrasi", "B. perbaikan", "C. penggantian", "D. pemantauan", "E. pemeliharaan"],
           answer: "A. Kalibrasi"
       },
       {
           question: "Sebuah defibrilator diletakkan di ruang igd rumah sakit. Catatan pada buku pemeliharaan berkala di bulan mei 2016 adalah terdapat penggantian baterai dengan spesifikasinya yaitu 14,4 VDC/ 3,0 AH/ NICD. berapa taunkah idealnya penggantian baterai pada alat tersebut?",
           options: ["A. 1 tahun", "B. 2 tahun", "C. 3 tahun", "D. 4 tahun", "E. 5 tahun"],
           answer: "B. 2 tahun"
       },
       {
           question: "Seorang teraps akan melakukan terapi terhadap pasien berpenyakit asma dengan menggunakan nebulizer ultrasound, tetapi pesawat dinyalakan tidak terjadi aerosol/penguapan padahal obat sudah dimasukkan. Setelah diamati kabel power sudah terpasang, lampu indikator menyala dan timer sudah disetting. Dari permasalahan di atas selaku pra ktisi elektromedis apa yang saudara akan lakukan?",
           options: ["A. Mengecek kipas", "B. Mengecek piezoelektrik", "C. Mengecek Kabel supplay", "D. Mengecek rangkaian timer", "E. Mengecek rangkaian osilator"],
           answer: "B. Mengecek Piezoelektrik"
       },
       {
           question: "Saat dilakukan inkubasi di alat inkubator heater basah ternyata heater tidak bekerja sehingga air di bejana tidak hangat sedangkan indikator lampu power sudah menyala, timer sudah diputar sesuai waktu yanng sudah diinginkan. Apakah yang harus dilakukan selaku elektromedik mengenai kasus tersebut?",
           options: ["A. melakukan pemeriksaan bagian timer", "B. melakukan pemeriksaan bagian pengatur panas", "C. melakukan pemeriksaan level (volume) air pada bak waterbath", "D. melakukan pemeriksaan dan perbaikan bagian timer", "E. melakukan pemeriksan bagian pengatur panas d a n membersihkan bak air pada waterbath"],
           answer: "D. melakukan pemeriksaan bagian pengatur panas"
       },
       {
           question: "Pada saat seorang operator mengoperasikan alat centrifugeterjadi getaran dan gerakan yang keras pada alat centrifuge tersebut. Apakah yang pertama kali harus dilakukan seo rang operator?",
           options: ["A. memeriksa kondisi tabung", "B. memeriksa motor pada centrifuge", "C. memeriksa tegangan jala - jala PLN", "D. mengatur kembali pengaturan kecepatan", "E. memeriksa rnagkaian kecepatan motor"],
           answer: "A. memeriksa kondisi tabung"
       },
       {
           question: "Seorang perawat mengoperasikan syringe pump de ngan kecepatan 120 mL/jam dan menggunakan spuit 30 cc dan jumlah obat yang disuntikkan adalah 20 mL. Berapa waktu diperlukan untuk obat tersebut habis?",
           options: ["A. 10 menit", "B. 20 menit", "C. 40 menit", "D. 60 menit", "E. 90 menit"],
           answer: "A. 10 menit"
       },
       {
           question: "pada alat ECG recorder dengan kondisi elektroda baik, kalibrasi 1 mV hasil baik. Tetapi jika digunakan pada pasien, grafik Lead 2 dan Lead 3 muncul interverensi. Sedangkan pada Lead 1 hasil grafik baik. Kemungkinan alat tersebut mengalami gangguan pada kabel pasien Bagian manakah kabel yang mengalami gangguan terssebut?",
           options: ["A. Arde", "B. Kaki kiri", "C. Kaki kanan", "D. Tangan kiri", "E. Tangan kanan"],
           answer: "B. Kaki kiri"
       },
       {
           question: "baby incubator yang digunakan terdapat 2 nilai suhu yang dapat diamati oleh user yaitu suhu bayi dan suhu di dalam ruangan inkubator. Namun ketika sebuah alat baby incubator sedang difungsikan tiba - tiba suhu di dalam ruang bayi ini ternyata nilai suhunya tidak dapat ditampilkan pada display. Dari permasalahan di atas analisa awal apa yang mengalami kerusakan?",
           options: ["A. Air probe sensor", "B. Skin probe sensor", "C. Humidt y probe sensor", "D. Display dan air probe sensor", "E. Display pada skin probe sensor"],
           answer: "D. Display dan air probe sensor"
       },
       {
           question: "Perawat mera g ukan hasil ukur sebuah sphygmomanometer air raksa.Ketika teknisi elektromedik melakukan pengukuran tekanan air raksa pada alat tersebut didapat selisih nilai antara alat ukur dan sphygmomanometer tersebut. Setelah alat di periksa terdapat tumpahan air raksa di sekitarnyan sphygmomanometer. Apakah yang harus saudara dilakukan pertama kali untuk menangani alat tersebut ?",
           options: ["A. Melakukan kalibrasi", "B. Menambahkan air raksa", "C. Melakukan perbaikan", "D. memeriksa Kebocoran air raksa", "E. Memasukkan kembali air tumpahan air raksa"],
           answer: "B. Menambahkan Air Raksa"
       },
       {
           question: "ECG Rekam dalam potensial listrik otot jantung mengenal dengan sistem bipolar atau segiti ga Einthoven. Untuk megukur LEAD III. Pengukruan diambil di titik.",
           options: ["A. RF ( - ) dan LF (+)", "B. LA ( - ) dan LF (+)", "C. LF ( - ) dan LA (+)", "D. RA ( - ) dan LF (+)", "E. RA ( - ) dan LA (+)"],
           answer: "D. RA ( - ) dan LF (+)"
       },
       {
           question: "Pelayanan kesehatan dibagian fisiotherapi menggunakan peralatan infra red untuk terapi pasien yang nyeri sendi, radang saraf, meningkatakan sirkulasi darah. Berapa jarak antara lampu infrared dengan area therapi pada pasien ?",
           options: ["A. 15 - 25 cm", "B. 25 - 50 cm", "C. 50 - 75 cm", "D. 75 - 100 cm", "E. 100 - 125 cm"],
           answer: "B. 25 - 50 cm"
       },
       {
           question: "Pelayanan kesehatan di bagian fisioterapi menggunakan peralatan infra red untuk terapi pasien yang nyeri sendi, radang saraf, meningkatkan sirkulasi darah Berapa panjang gelombang elektromagnetik lampu tersebut ?",
           options: ["A. 0,75 nm – 40 nm", "B. 7, 5 nm – 400 nm", "C.75 nm – 4000 nm", "D. 750 nm – 40.000 nm", "E. 7500 nm – 400.000 nm"],
           answer: "D. 750 nm – 40.000 nm"
       },
       {
           question: "Ultra Sono Grafi yang sering di singkat USG sebagai alat radiologi untuk melihat pencitraan di dalam tubuh dengan menggunakan system piezo elektrik. Bila dalam pencitraan scaning di monitor USG tidak bisa penuh, ada sebagaian yang tidak terdeteksi. Dibagian mana kerusakkan alat terjadi ?",
           options: ["A. System TX", "B. System RX", "C. Tranduser", "D. B - Mode", "E. Gain"],
           answer: "C. Tranduser"
       },
       {
           question: "Foto terapi merupakan salah satu alat untuk men gobati bayi lahir dengan tingkat kadar bilirubin yang tinggi melalui cahaya lampu Berapa panjang gelombang cahaya lampu tersebut ?",
           options: ["A. 430 – 440 nm", "B. 440 – 450 nm", "C. 450 – 460 nm", "D. 470 – 480 nm", "E. 720 – 780 nm"],
           answer: "C. 450 - 460 nm"
       },
       {
           question: "Dilaporkan terjadi permasalahan pada centrifuge dimana alat tersebut tidak dapat memisahkan partikel padat pada darah, padahal motor centrifuge dapat berputar seperti biasanya. Terkait dengan laporan tersebut, tenaga elektromedis melakukan pengecekan pada motor centrifuge. Apa langkah awal yang perlu dilakukan untuk kasus tersebut ?",
           options: ["A. kalibrasi", "B. Perbaikan", "C. Adjustment", "D. Pemantauan", "E. Pemeliharaan"],
           answer: "B. Perbaikan"
       },
       {
           question: "Perawat melaporkan hasil perekaman pada pesawat RCG mengalami permasalahan dimana gambar yang dihasilkan dari LEAD I, II, III terjadi noise, saat dilakukan pengecekkan kabel electrode ternyata terdapat kabel yang kendor. Kabel apakah yang menyebabkan masalah tersebut terjadi ?",
           options: ["A. LF", "B. RL", "C. LA dan atau LF", "D. RA dan atau LF", "E. LA dan atau RA"],
           answer: "C. RL"
       },
       {
           question: "Perawat melaporkan hasil perekaman pada pesawat RCG mengalami permasalahan dimana gambar yang dihasilkan dari LEAD III terjadi noise, saat dilakukan pengecekkan kabel electrode ternyata terdapat kabel yang kendor. Kabel apakah yang menyebabkan masal ah tersebut terjadi ?",
           options: ["A. LF", "B. C1", "C. LA dan atau LF", "D. RA dan atau LF", "E. LA dan atau RA"],
           answer: "C. LA dan atau LF"
       },
       {
           question: "Perawat melaporkan hasil perekaman pada pesawat RCG mengalami permasalahan dimana gambar yang dihasilkan dari LEAD I terjadi noise, saat dilakukan pengecekkan kabel electrode ternyata terdapat kabel yang kendor. Kabel apakah yang menyebabkan masalah tersebut terjadi ?",
           options: ["A. LF", "B. C1", "C. LA dan atau LF", "D. RA dan atau LF", "E. LA dan atau RA"],
           answer: "D. LA dan atau RA"
       },
       {
           question: "Perawat melaporkan hasil perekaman pada pesawat ECG mengalami permasalahan dimana gambar yang dihasilkan dari lead C5 dan C6 terjadi noise, saat dilakukan pengecekan kabel elektrode, kabel dalam kondisi baik, kabel grounding juga terpasang dengan baik. Factor kerusakan apakah yang biasanya menjadi penyebab masalah tersebut?",
           options: ["a. Rangkaian buffer", "b. Rangkaian amplifier", "c. Rangkaian heat stylus", "d. Kabel grouding lepas", "e. Connector ke pasien buruk"],
           answer: "e. Connector ke pasien buruk"
       },
       {
           question: "Perawat melaporkan hasil perekaman pada pesawat ECG mengalami permasalahan dimana gambar dari seluruh lead yang dihasilkan mengalami noise, saat dilakukan pengecekan kabel elektrode, kabel dalam kondisi baik. Connector electrode dengan pasien juga dalam kondisi yang baik. Kabel grounding juga terpasang dengan baik. F aktor kerusakan apakah yang biasanya menjadi penyebab masalah tersebut?",
           options: ["A. Rangkaian filter", "B. Rangkaian amplifier", "C. Rangkaian heat stylus", "D. Kabel electrode putus", "E. Kabel grounding lepas"],
           answer: "A. Rangkaian filter"
       },
       {
           question: "Pada saat dilakukan kalibrasi pada output gas O2 mesin anasth esia, dari kalibrasi yang dilakukan menunjukkan nilai output dari mesin anasthesi menunjukkan nilai kurang dari ambang batas nilai toleransi minimum yang diijinkan. Kerusakan pada komponen apakah yang terkait dengan permasalahan tersebut?",
           options: ["A. Kebocoran tabung gas", "B. Vaporizer rusak", "C. Tekanan udara", "D. Valve bocor", "E. Gas O2"],
           answer: "D. Valve bocor"
       },
       {
           question: "Saat terjadi pemadaman listrik, alat baby incubator juga ikut padam padahal seharusnya alat tersebut tidak boleh padam saat terjadi pemadaman listrik dar PLN. Kemudian perawat melaporkan hal tersebut kebagian teknik medis. Apakah tindakan awal pemeriksaan yang harus dilakukan terkait dengan permasalahan tersebut ?",
           options: ["A. Power supply", "B. Muatan bateray back up", "C. Rangkaian alarm bateray", "D. Rangkaian charging bateray", "E. Rangkaian switch pemindahan t egangan"],
           answer: "E. Rangkaian switch pemindahan tegangan"
       },
       {
           question: "Alat buble CPAP merupakan suatu alat yang digunakan untuk mempertahankan tekanan positif pada saluran napas neonatus selama pernafasan spontan. CPAP merupakan suatu alat sederhana dan efektif untuk terlaksananya respiratory distress pada neonatus. Diruang manakah pada umumnya alat tersebut diletakkan ?",
           options: ["A. ICU", "B. IGD", "C. HND", "D. ICCU", "E. NICU"],
           answer: "E. NICCU"
       },
       {
           question: "Dokter melaporkan terjadi permasalahan pada hasil gambar yang muncul pada monitor USG, dimana gambar hasil USG yang muncul pada display monitor terdapat blank spot pada area tertentu. Sehingga menyebabkan hasil pembacaan diagnose terganggu dengan adanya permasalahan tersebut. Faktor utama apakah yang menyebabkan kerusakan pada kasus tersebut?",
           options: ["A. Probe", "B. Printer", "C. Key pad", "D. Hardisk", "E. Monitor"],
           answer: "A. Probe"
       },
       {
           question: "Setiap alat elektromedik memerlukan pemeliharaan agar alat selalu dalaamm keadaan laik pakai. Apakah nama pemeliharaan yang dilakukan setelah alat mengalami kerusakan ?",
           options: ["A. Daily", "B. Montly", "C. Yearly", "D. Corrective", "E. Preventive"],
           answer: "E. Corrective"
       },
       {
           question: "Alat CTG,Doppler dan USG adalah alat diagnostik yang memiliki prinsip dasar yang sama, yaitu memanfaatkan gelombang ultrasound. Bagian mana dari ketiga alat tersebut yang harus sering dibersihkan setelah digunakan pada pasien ?",
           options: ["A. Kabel", "B. Transducer", "C. Layar peraga", "D. Alat perekam", "E. Kontrol konsol"],
           answer: "B. Tranduser"
       },
       {
           question: "Perawatan gigi tidak terlepas dari alat yang disebut Dental Unit. Alat tersebut memanfaatkan mixer dari air dan angin dari kompresor unit Berapakah tekanan kompresor yang dibutuhkan untuk alat tersebut ?",
           options: ["A. 2, 5 - 3 atm", "B. 2,5 - 4 atm", "C. 2 - 3 atm", "D. 3 - 5 atm", "E. 3 – 7 atm"],
           answer: "B. 2.5 – 4 atm"
       },
       {
           question: "sebuah suction pump di IGD tidak berfungsi, setelah dilakukan pengecekan tekanan output sesuai spesifikasi. Pemeriksaan kondisi tabung wall suction tidak terdapat keratakan atau pecah. Sambungan antara wall suction dengan outlet tidak ada kebocoran, hanya terdengar suara desis. Namun test fungsi tabung suction tidak berhasil, tetapi bila digunakan tabung wall suction lain, alat berfungsi dengan baik. Apakah yang menjadi penyebab gangguan pada alat tersebut?",
           options: ["A. Kebocoran pada konektor", "B. Kebocoran valve seal", "C. Kerusakan manometer", "D. Kerusakan regulator", "E. Kerusakan selang"],
           answer: "B. Kebocoran valve seal"
       },
       {
           question: "J antung merupakan organ yang mampu memproduksi impuls listrik secara mandir i. Karena tubuh merupakan konduktor yang cukup baik,maka impuls yang dihasilkan dapat menjalar keseluruh tubuh, sehingga potensial aksinya yang timbul saat jantung berkontraksi dapat diukur melalui galvanometer melalui elektroda yang dipasang pada berbagai posisi, gambaran grafik yang dihasilkan oleh galvanometer ini sangan membantu menegakkan diagnosa kesehatan jantung. Ketika akan memasang elektroda, kulit pasien dibersihkan dan diberi jelly khusus, apa fungsi jelly tersebut?",
           options: ["A. Agar kulit pasien tidak rusak karena elektroda bermuatan listrik", "B. Agar elektroda tidak cepat rusak karena kulit pasien berkeringat", "C. Agar resistansi antar elektroda dan kulit pasien menjadi seminimal mungkin", "D. Agar resistansi antara elektroda dan kulit pasien menjadi semaksimal mungkin", "E. Agar capasistance antara elektroda dan kulit pasien menjadi seminimal mungkin"],
           answer: "C. Agar resistansi antar electrode dan kulit pasien menjadi seminimal mungkin"
       },
       {
           question: "suatu rumah sakit akan membangun ruangan operasi, dan akan mambeli mesin anastesi untuk mengoperasikanya dibutuhkan intsalasi gas medis Apa jenis compressor untuk menghasilkan fresh air yang akan digunakan untuk alat ini?",
           options: ["A. Oil free compressor", "B. Compressor dua tank", "C. Compressor satu tank", "D. Bubble free compressor", "E. Stepper motor compressor"],
           answer: "E. Stepper motor compressor"
       },
       {
           question: "seorang laboran melakukan kegiatan praktek dilaboratorium, alat yang digunakan untuk praktek adalah blood warmer. Apa prinsip kerja dari blood warmer?",
           options: ["A. Menggunakan rotor untuk memulai sampel darah", "B. Memanfaatkan heater sebagai energi panas", "C. Menggunakan elektroda sebagai sensor", "D. Menggunakan elektroda referensi", "E. Menggunakan strip pengukuran"],
           answer: "B. Memanfaatkan heater sebagai energi panas"
       },
       {
           question: "suatu klinik rontgen membeli pesawat rontgen general purpose dari suatu rumah sakit umum dengan kapasitas 125 KV, 500 mA, satu fasa, dengan full wave rectifier memiliki beberapa jenis teknik pemotretan, proses pembelian sampai dengan pemasangan memakan waktu sampai dua bulan Termasuk kategori kelas apa alat rontgen yang dibeli tersebut?",
           options: ["A. Super exclusive", "B. Exclusive", "C. Medium", "D. Ringan", "E. Berat"],
           answer: "C. Medium"
       },
       {
           question: "suatu klinik rontgen membeli pesawat rontgen general purpose dari suatu rumah sakit umum dengan kapasitas 125 KV, 500 mA, satu fasa, dengan full wave rectifier memiliki beberapa jenis teknik pemotretan, proses pembelian sampai dengan pemasangan memakan waktu sampai dua bulan Apakah langkah pertama yang harus dilakukan dalam mengoperasikan pesawat tersebut?",
           options: ["A. Memanaskan tabung pesawatrontgen secara bertahap mulai dari 50 KV, 1 mA selama 0,1 detik, dengan kenaikan tegangan setiap tahap 10 KV sampai tegangan 80 KV, dengan waktu istirahat 1 menit", "B. Memanaskan tabung pesawatrontgen secara bertahap mulai dari 60 KV, 1 mA selama 0,1 det ik, dengan kenaikan tegangan setiap tahap 10 KV sampai tegangan 80 KV, dengan waktu istirahat 1 menit", "C. Memanaskan tabung pesawatrontgen secara bertahap mulai dari 70 KV, 1 mA selama 0,1 detik, dengan kenaikan tegangan setiap tahap 10 KV sampai tegangan 80 K V, dengan waktu istirahat 1 menit", "D. Memanaskan tabung pesawatrontgen secara bertahap mulai dari 80 KV, 1 mA selama 0,1 detik,", "E. Tidak perlu pemanasan"],
           answer: "A. Memanaskan tabung pesawatrontgen secara bertahap mulai dari 50 KV, 1 mA selama 0,1 detik, dengan kenaikan teg angan setiap tahap 10 KV sampai tegangan 80 KV, dengan waktu istirahat 1 menit"
       },
       {
           question: "pada sat petugas melakukan pemeriksaan pasien dengan menggunakan patient monitor ternyata tidak ada data pada layar monitor, kondisi layar keadaan on. Apakah penyebab uta ma kondisi layar tersebut?",
           options: ["A. Kabel daya listrik dengan pasien monitor kurang baik", "B. Kabel elektroda dengan pasien kurang baik", "C. Kabel monitor dengan PCB kurang baik", "D. Kabel grounding kurang baik", "E. Baterai kurang baik"],
           answer: "D. Kabel grounding kurang baik"
       },
       {
           question: "Pada saat petugas elektromedis melakukan proses pemanasan pada alat ECG dibagian UGD suatu rumah sakit, dengan spesifikasi antara lain ECG single lead, menggunakan Hot stylus pen, kkertas perekam (paper graph) khusus ternyata tidak terjadi hasil rekaman (trace). Apa kah penyebab tidak terjadi hasil rekaman ?",
           options: ["A. Ujung stylus pen pemanasnya kurang atau ujung stylus kurang menekan kertas", "B. Posisi roller kertas perekam turun", "C. Kertas perekam", "D. Pada elektroda", "E. Jenis pena"],
           answer: "A. Ujung stylus pen pemanasnya kurang atau ujung stylus kurang m enekan kertas"
       },
       {
           question: "Ketika a l at ECG dipergunakan, setelah diprint ternyata jarak interval antar grafik menurut user/pemakai terlalu rapat sehingga menyulitkan dalam analisa pembacaan. Untuk penanganan hal ini dapat dilakukan dengan melakukan setting parameter Setting apa yang dapat dilakukan untuk menangani permasalahan diatas ?",
           options: ["A. Filter", "B. Lead record I, II, III", "C. Lead record aVR, aVL, aVF", "D. Parameter sensitifity 0.5x, 1x, 2x", "E. Paper speed 25mm/sec, 50mm/sec"],
           answer: "E. Paper speed 25mm/sec, 50mm/sec"
       },
       {
           question: "Ketika sebuah alat syrin ge pump akan digunakan, maka hal pertama yang dilakukan adalah menghubungkan kabel power pada sumber jala - jala listrik kemudian menekan tombol ON. Namun setelah tombol ON ditekan, indikator lampu on tidak menyala dan preparing self test tidak berjalan. Set elah dicek fuse, sumber jala - jala listrik dan power cord cable dalam kondisi baik. Analisa awal yang dilakukan, kerusakan terdapat pada bagian apa ?",
           options: ["A. Handling/Plunger syringe bermasalah", "B. Board control motor bermasalah", "C. Board power supply bermasalah", "D. Syringe de tector bermasalah", "E. Display LCD bermasalah"],
           answer: "C. Board power supply bermasalah"
       },
       {
           question: "Ketika Drip sensor/Detector pada alat infus pump tidak terpasang/dipasang, maka sebelum difungsikan alat ini harus disetting OFF pada setting Drip sensor/detectornya. Secara umum alat ini akan berfungsi, tapi ada pembacaan yang tidak dapat ditampilkan Pembacaan apakan yang tidak bisa ditampilkan dari kejadian diatas ?",
           options: ["A. Time & Date", "B. Setting awal flow rate", "C. Jumlah mL cairan yang su dah keluar", "D. Gelembung udara pada tubing di IV set", "E. Elastifitas pressure pada tubing di IV set"],
           answer: "C. Jumlah mL cairan yang sudah keluar"
       },
       {
           question: "Seorang dokter spesialis ortopedic mengajukan permintaan ruangan operasi untuk bedah tulang. Manajemen menyampaikan agar teknisi elektromedic dapat membuat perencanaan alat yang dibutuhkan mulai dari instruumen ortopedic set, meja operasi ortopedic, illuminator, bor ortopedic set, elektrosurgery unit, monitor pasien, mesin anastesi dan suction pump. Untuk mensuport dokter dalam me lakukan bedah tulang diperlukan alat radiologi. Apa peralatan radiologi yag dibutuhkan untuk mensupport dokter ortopedis diruang ooperasi",
           options: ["A. X - ray konvensional dengan 500mA", "B. Mobile X - ray High Frecuency", "C. Portable X - ray unit", "D. Alat C - Arm", "E. Alat USG"],
           answer: "D. Alat C - Arm"
       },
       {
           question: "Pencegahan terjadinya kontak badan akibat arus bocor dari peralatan medik perlu dilakukan agar dapat mencegah bahaya bagi pasien, user/pengguna alat dan elektromedis. Apa yang harus dilakukan dalam mengatasi permasalahan tersebut?",
           options: ["A. Memasang filter pada jaringan listrik", "B. Memasang stabilisator tregangan pada alat", "C. Memasang handle switch agar bisa dimatikan", "D. Memasang volt meetr dan amper meter pada setiap panel listrik", "E. Memasang grounding/ pembumian dengan tahanan dibawah 2m"],
           answer: "E. Memasang grounding/ pembumian dengan tahanan dibawah 2m"
       },
       {
           question: "Dalam perencanaa ruangan radiologi untuk peswat rontgen harus dipasang lampu indikator berwarna merah dan tanda/ marka bahaya radiasi sehingga operator dan pengunjung dapat mengetahui bahaya dari radiasi. Hal ini menjadi standar dari akreditasi rumah sakit dan K3 RS. Apa fungsi dari indikator lampu merah pada ruang tersebut?",
           options: ["A. Sudah mulai pelayanan di ruang rotgen", "B. Operator sudah berada di ruang rontgen", "C. Alat sedang menghasilkjan radiasi sinar X", "D. Alat rontgen sudah dalam keadaan hidup", "E. Pasien sudah selesai difoto"],
           answer: "A. Sudah mulai pelayanan di ruang rotgen"
       },
       {
           question: "Dalam perencanaan pemeliharaan peralatan elektromedik banyak hal yang harus dipertimbangkan dan di evaluasi sehingga di dapatkan peralatan yang berkualitas dan tidak me njadi permasalahan di kemudian hari Apakah pertimbangan teknis untama agar dipenuhi harapan tesebut",
           options: ["A. Merk dari alat yang direncanakan", "B. Harga dari alat yang direncanakan", "C. Spesifikasi dari alat yang dkirencanakan", "D. Buku manual dari alat yang direncanakan", "E. Pelayanan marketing dari alat yang dkirencanakan"],
           answer: "D. Buku manual dari alat yang direncanakan"
       },
       {
           question: "Diunit Radiologi Rumah Sakit Type C terdapat permasalahan pada APF. Gambar yang dihasilkan oleh Automatic Processing Film bergaris sehingga merusak g ambar pada film. Telah dilakukan pemeriksaan pada kaset dan cairan pada alat APF bagus, dilakukan pencucian ulang tetapi hasilnya tetap bergaris. Apa analisa pada alat Automatic Processing Film tersebut ?",
           options: ["A. Air pada APF kosong.", "B. Roller pada APF rusak.", "C. Cairan Fixer bercampur dengan Developer.", "D. Cairan developer bercampur dengan air bersih.", "E. Drying pada APF mengalami kerusakan pada elemen pemanas."],
           answer: "B. Roller pada APF rusak."
       },
       {
           question: "Selain di ICU bedside monitor atau patient monitor juga bisa digunakan di kamar operasi dengan parameter yang lebih komplit dari ruangan ICU. Selain ada 4 parameter utama, akan ada parameter utama, akan ada parameter lainnya yaitu tCo2. Apakah makna dari pengukiran tCo2 pada bedside monitor?",
           options: ["A. Kadar karbondioksida dalam pembuluh darah vena pasi en", "B. Kadar karbondioksida dalam pembuluh darah aorta pasien", "C. Kadar karbondioksida dan sistem pernafasan pasien", "D. Kadar karbondioksida dalam paru - paru pasien", "E. Kadar karbondioksida jantung pasien."],
           answer: "C. Kadar karbondioksida dan sistem pernafasan pasien"
       },
       {
           question: "Salah satu alat yang harus ada di ruangan ICU adalah bedside monitor atau patient monitor yang digunakan untuk memantau kondisi pasien. Salah satu parameter alat yaitu respirasi dan 4 parameter pengukuran. Apakah makna dari pengukuran parameter tersebut?",
           options: ["A. Pemeriksaan kesad aran pasien", "B. Pemeriksaan tekanan darah pasien", "C. Pengukuran gula dalam darah pasien", "D. Pemeriksaan irama nafas pasien dalam satu menit", "E. Pemeriksaan kadar oksigen yang ada dalam pasien."],
           answer: "D. Pemeriksaan irama nafas pasien dalam satu menit"
       },
       {
           question: "Salah satu alat yang harus ada di ruangan ICU adalah bedside monitor atau patient monitor yang digunakan untuk memantau kondisi pasien. Salah satu parameter alat yaitu respirasi dan 4 parameter pengukuran. Apakah keempat parameter utama yang harus dimiliki oleh setiap bedside monitor?",
           options: ["A. EKG, Respirasi, ECT, dan NIBP", "B. EKG, Respirasi, SpO2, dan ECT", "C. EKG, Respirasi, SpO2, dan NIBP", "D. EKG, Respirasi, NIBP, dan Darah", "E. EKG, Respirasi, SpO2, dan Temperature"],
           answer: "C. EKG, Respirasi, SpO2, dan NIBP"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda - elektroda tertentu pada permukaan kulit, hasil rekaman pada kertas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat tersebut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Apakah makna dari huruf T pada grafik yang ditempatkan oleh EKG?",
           options: ["A. Repolarisasi Ventrikel dan Atrium.", "B. Depolarisasi Ventrikel", "C. Repolarisasi Ventrikel", "D. Depolarisasi Atrium", "E. Repolarisasi Atrium"],
           answer: "C. Repolarisasi Ventrikel"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda - elektroda tertentu pada permukaan kulit, hasil rekaman pada kertas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat terseb ut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Pada sadapan aVL bagian tubuh manakah yang diukur untuk mendapatkan beda potensial listrik yang akan direkam oleh EKG?",
           options: ["A. Lengan kanan (RA) yang bermuatan positif (+) d an elektroda negatif ( - ) Gabungan lengan kiri dan kaki kiri)", "B. Lengan Kiri (LA) yang bermuatan positif (+) dan elektroda negatif ( - ) Gabungan lengan kanan dan kaki kiri) X", "C. Lengan Kanan (RA) yang bermuatan positif (+) dan elektroda negatif ( - ) Gabungan lengan kiri dan kaki kanan)", "D. Lengan Kiri (LA) yang bermuatan positif (+) dan elektroda negatif ( - ) Gabungan lengan kiri dan kaki kiri)", "E. Kaki Kanan (RL) yang bermuatan positif (+) dan elektroda negatif ( - ) Gabungan lengan kanan dan lengan kiri)"],
           answer: "C. Lengan Kanan (RA) yang bermuatan positif (+) dan elektroda negatif ( - ) Gabungan lengan kiri dan kaki kanan)"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda - elektroda tertentu pada permukaan kulit, hasil rekaman pada ker tas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat tersebut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Apakah yang direkam oleh alat EKG pada Lead III?",
           options: ["A. Lengan kanan (RA ) yang bermuatan negatif ( - ) dengan lengan kiri (LA) yang bermuatan positif (+) (LEAD 1)", "B. Lengan kanan (RA) yang bermuatan negatif ( - ) dengan kaki kiri (LL ) yang bermuatan positif (+)", "C. Lengan kiri (LA) yang bermuatan negatif ( - ) dengan kaki kiri (LL) yang be rmuatan positif (+)", "D. Kaki kanan (RA) yang bermuatan negatif ( - ) dengan lengan kiri (LA) yang bermuatan positif (+)", "E. Kaki kiri (LL) yang bermuatan negatif ( - ) dengan kaki kanan (RL) yang bermuatan positif (+)"],
           answer: "C. Lengan kiri (LA) yang bermuatan negatif ( - ) deng an kaki kiri (LL) yang bermuatan positif (+)"
       },
       {
           question: "Fungsi utama dari EKG adalah mencatat elektrisitas jantung melalui pemasangan elektroda - elektroda tertentu pada permukaan kulit, hasil rekaman pada kertas grafik berupa sinyal PQRST merupakan representasi dari tiga jenis sadapan utama dari alat tersebut yang digunakan sebagai salah satu acuan bagi dokter dalam menganamnesa suatu penyakit. Apakah nama lain dari kertas grafik yang digunakan untuk mengg ambarkan sinyal jantung alat tersebut ?",
           options: ["A. Diagram", "B. Cardiologi", "C. Teleterapi", "D. Electrocardiograph", "E. Electrocardiogram"],
           answer: "E. Electrocardiogram"
       },
       {
           question: "Pada pengoperasian alat radiologi konvensional mempunyai tiga tahanan utama yaitu preparation, ready dan expose. Ketiga tahapan ini harus dilakukan secara seksama agar pelaksanaan penyinaran dapat berjalan sesuai dengan prosedur yang telah ditetapkan. Apakah tujuan utama dari pengaturan Line Voltage Regulator (LVR) pada alat radiologi tersebut?",
           options: ["A. Mendapatkan tegangan yang sesuai dengan kebutuhan pesawat", "B. Menentukan lamanya penyinaran", "C. Mengaktifkan lampu charge", "D. Mengaktifkan kV meter ."],
           answer: "A. Mendapatkan tegangan yang sesuai dengan kebutuhan pesawat"
       },
       {
           question: "Micro Wave Diathermy adalah alat terapi yang memanfaatkan energi elektromagnetik yang dihasilkan oleh arus bolak balik dengan frekuensi 2450 Hz dengan panjang gelombang 12,25 cm. Hal ini akan menimbulkan efek fisiologis dan efek terapeutik terhadap tubuh manusia. Apakah efek terapeutik yang ak an ditimbulkan pada tubuh manusia ?",
           options: ["A. Gangguan ambang rangsangan jaringan syaraf", "B. Perubahan temperatur pada jaringan otot", "C. Penyembuhan luka pada jaringan lunak", "D. Gangguan Vascularisasi", "E. Kontraktur jaringan"],
           answer: "A. Gangguan ambang rangsangan jaringan syaraf"
       },
       {
           question: "Menurut teori sinar - X dihasilkan karena adanya beda tegangan antara anoda dan katoda yang melebihi daya PLN (220 Volt) didalam tabung rontgen. Untuk mengakomidir tegangan yang melebihi daya PLN tersebut digunakan suatu alat yang dapat mengubah tegangan rendah ke tegang an tinggi pada pesawat tersebut. Apakah nama alat yang dimaksud ?",
           options: ["A. High Tention Transformator", "B. Auto Transfomer", "C. Trafo Step Down", "D. Generator", "E. Osilator"],
           answer: "A. High Tention Transformator"
       },
       {
           question: "Di ruangan radiologi, Dokter Sp.Radiologi mengeluhkan kualitas gambar hasil prosesing film kurang baik. Hasil pengecekan alat prosesing film menggunakan alat APF dalam kondisi baik, dan suhu ruangan sesuai standart. Sikap apakah yang paling penting dibutuhkan untuk mengatasi keluhan diatas ?",
           options: ["A. Mengusulkan mengganti alat APF dengan yang baru", "B. Mencatat dan melaporkan kepada atasan untuk masalah ini", "C. Mengganti cairan film fixer, developer, dan air dengan yang baru", "D. Memeriksa, menganalisa dan memperbaiki APF agar dapat berfungsi dengan baik", "E. Melaporkan ke atasan kalau alat APF sedang rusak kemudian memeriksa, menganalisa, dan memperbaiki APF agar dapat berfungsi dengan baik"],
           answer: "E. Melaporkan ke atasan kalau alat APF sedang rusak kemudian memeriksa, menganalisa, dan memperbaiki APF agar dapat berfungsi dengan baik"
       },
       {
           question: "Seorang Teknisi Elektromedis mendapatkan permohonan perbaikan tensimeter air raksa. Setelah di periksa, kondisi fisik manset rusak, sedang stok suku cadang manset di gudang habis. Tindakan awal apa yang harus dilakukan ?",
           options: ["A. Memeriksa", "B. Memelihara", "C. Memperbaiki", "D. Melapor ke atasan", "E. Mencatat di buku pemeliharaan"],
           answer: "E. Mencatat di buku pemeliharaan"
       },
       {
           question: "Sebuah RS akan menambahkan sebuahpesawat rontgen dengan spesifikasi daya 60 kVA, 2 phase, tegangan 200 Volt, sedangkan RS mempunyai daya 200 kVA, tegangan listrik 330 Volt 3 phase. Komponen pendukung untuk spesifikasi diatas yang paling penting dibutuhkan untuk alat tersebut adalah ?",
           options: ["A. UPS", "B. Stabilisator", "C. Trafo StepUP", "D. Kabel ground", "E. Trafo StepDown"],
           answer: "E. Trafo StepDown"
       },
       {
           question: "Sebuah meja operasi elektrik dilaporkan mengalami kerusakan dimana kemiringan badan tidak berfungsi dengan baik. Meja tersebut menggunakan penggerak motor elektrik. Pergerakan bagian - bagian yang lainnya berfungsi dengan baik termasuk hand switch. Komponen apa yang paling memungkinkan mengalami kerusakan?",
           options: ["A. Motor penggerak", "B. Kontraktor relay", "C. Kapasitor", "D. Resistor", "E. Hydrolik"],
           answer: "E. Hydrolik"
       },
       {
           question: "Sebuah Suction Pump dilaporkan mengalami kerusakan dimana alat tidak dapat menyedot dengan maksimal. Dari hasil pemantauan sementara motor dalam kondisi baik, selang - selang masih dalam kondisi normal, filter masih baik dan tabung penampung masih bagus. Komponen apa yang paling memungkinkan kerusakan itu terjadi ?",
           options: ["A. Karet sea l pada gelas cairan", "B. Pressure gauge", "C. Kapasitor motor", "D. Pelumas motor", "E. Tali puli motor"],
           answer: "A. Karet seal pada gelas cairan"
       },
       {
           question: "Sebuah centrifuge dilaporkanketikadihidupkantidakbisaberputar, setelah dilakukan pengecekan awal sumber listrik normal 220 Volt, indikator on/off disaklar menyala, rotor diputar manual normal Bagaimanakah langkah pengecekan yang paling efektif dan efisien pada alat tersebut?",
           options: ["A. PengecekanKabel - kabel, sikatarang/coolboster, gulungan motor dankapasitor", "B. Pengecekansikatar ang/coolboster, kabel - kebel, gulungan motor dankapasitor", "C. Pengecekangulungan motor, sikatarang/coolboster, kabel - kabeldankapasitor", "D. Pengecekankapasitor, gulungan motor, sikatarang/coolbosterdankabel - kabel", "E. Pengecekankabel - kabel , sikatarang/coolboster, kapasi tordangulungan motor"],
           answer: "A. / E. PecekanKabel - kabel, sikatarang/coolboster, gulungan motor dankapasitor"
       },
       {
           question: "Sebuah spygmomanometer air raksa dilaporkan hasil pengukurannya selalu tinggi oleh petugas. Setelah dilakukan pengecekan oleh tenaga elekromedis semua kom ponennya bagus. Apa yang harusdilakukan pertama kali untuk mengetahui kebenaran tersebut ?",
           options: ["A. Dilakukankelibrasi", "B. Mengurangi air raksa", "C. Penambahan air raksa", "D. Penggantiantabungukur", "E. Penggantian seal tabungukur"],
           answer: "A. Dilakukankelibrasi"
       },
       {
           question: "Dilaporkan adanya kerusakan lampu operasi pada Ruang Operasi. Setelah dilakukan pemeriksaan oleh seorang elektromedis, diketahui bahwa salah satu bola lampu operasi tersebut tidak menyala. Diketahui bahwa terdapat 4 bola lampu lain dalam lampun operasi tersebut masih menyala. Untuk mengetahui spesifikasi bola lampu, maka 4 bola lampu operasi yang masih menyala dibuka. Ternyata tanda spesifikasi volt dan watt pada lampu sudah tidak terlihat baik di bola lampu maupun di name plate unit lampu operasi. Parameter apakah yang harus di ukur untuk mengetahui tegangan kerja dari bola lampu tersebut ?",
           options: ["A. Resistansin Lampu", "B. Arus Kerja Lampu", "C. Volume Bola Lampu", "D. Resistansi Konduktor", "E. Output Catu Daya Lampu"],
           answer: "A. Resistansin Lampu"
       },
       {
           question: "Dilaporkan adanya kerusakan lampu operasi pada Ruang Operasi. Setelah dilakukan pemeriksaan oleh seorang elektromedis, diketahui bahwa salah satu bola lampu operasi tersebut tidak menyala. Diketahui bahwa terdapat 4 bola lampu lain dalam lampun operasi tersebut masih menyala. Untuk mengetahui spesifikasi bola lampu, maka 4 bola lampu operasi yang masih menyala dibuka. Ternyata tanda spesifikasi volt dan watt pada lamp u sudah tidak terlihat baik di bola lampu maupun di name plate unit lampu operasi. Alat Ukur apakah yang digunakan pada saat perbaikan tersebut ?",
           options: ["A. Multimeter", "B. Flowmeter", "C. Tachometer", "D. Anemometer", "E. Pressure meter"],
           answer: "A. Multimeter"
       },
       {
           question: "Pada ruang PICU terdapat 5 patient monitor dengan merek dan type yang sama dengan tahun perolehan 2 tahun yang lalu. Selama berada di PICU, tidak pernah terjadi permasalahan yang serius dengan alat tersebut. Komponen apakan yang paling rawan rusak setelah pemakaian selama 2 tahun ?",
           options: ["A. Battery", "B. Mainboard", "C. User Interface", "D. Digital Display", "E. Data Acqusution System Board"],
           answer: "A. Battery"
       },
       {
           question: "Kerusakan alat infant warmer di ruang PiCU dilaporkan oleh USER. Setelah dilakukan pemeriksaan oleh teknisi, ternyata lampu penerangan (Lampu Tindakan) tidak meny ala, sedangkan Heater lamp (Pemanas) berfungsi dengan Baik. Tidak ada pesan kesalahan (Error) yang muncul pada tampilan alat. Apakah alat Ukur yang anda gunakan untuk melakukan Troubleshooting kerusakan alat tersebut ?",
           options: ["A. Luxmeter", "B. Multimeter", "C. Tachometer", "D. Surveymeter", "E. Energy meter"],
           answer: "B. Multimeter"
       },
       {
           question: "Terdapat laporan dari Laboratorium Central bahwa alat Centrifuge tidak berfungsi. Setelah dilakukan Pemeriksaan, pada saat alat dihidupkan semua indikator berfungsi dengan baik. Setelah ditutup pintu centrifuge nya dan ditekan tombol start, motor tidak berputar dan muncul kode kesalahan “LiD” Apakah analisa Keruskan awal Centrifuge tersebut ?",
           options: ["A. Kerusakan Motor", "B. Kerusakan Mainboard", "C. Kerusakan RPM Detector", "D. Kerusakan Pengunci Pintu", "E. Kerusakan Mot or Mounting"],
           answer: "D. Kerusakan Pengunci Pintu"
       },
       {
           question: "Pada kamar Operasi dibutuhkan lampu Operasi. Lampu Operasi yang akan dipasang adalah jenis dual arm (2 Lengan). Setiap lengan menyerap arus listrik 10A dengan tegangan 24 V DC Berapakah intensitas cahaya minimal t iap lengan lampu operasi tersebut sesuai dengan pedoman teknis ruang operasi RS ?",
           options: ["A. 500 0 LUX", "B. 4500 LUX", "C. 4250 LUX", "D. 4000 LUX", "E. 3500 LUX"],
           answer: "D. 4000 LUX"
       },
       {
           question: "sebuah ventilator tidak di operasikan selama 1 tahun dan disimpan dalam gudang. Tetapi tindakan pemeliharaan prefentif rutin dikerjakan dengan hasil baik sehingga kondisi siap digunakan atau Ready For Use. Ventilator tersebut diperuntukkan untuk pemakaian pada ruang isolasi Flu Burung. Berapakah relative Humidity yang tepat untuk gudang tersebut ?",
           options: ["A. Ku rang atau sama dengan 95%", "B. Kurang atau sama dengan 96%", "C. Kurang atau sama dengan 97%", "D. Kurang atau sama dengan 98%", "E. Kurang atau sama dengan 99%"],
           answer: "C. Kurang atau sama dengan 97%"
       },
       {
           question: "akan dilakukan instalasin lampu operasi pada sebuah kamar Operasi RS. Lampu operasi yang dipasang adalah jenis dual arm (2 lengan). Setiap menyerap arus listrik 10A dengan tegangan 24 V DC. Rangkaian power supply diletakkan diatas plafon kamar operasi dimana lampu tersebut akan dipasang. Apakah salah satu bahan yang harus anda se diakan sebelum proses pemasangan ?",
           options: ["A. Besi drat", "B. Baut 6mm", "C. Papan Tebal", "D. Semen Putih", "E. Plat Aluminium"],
           answer: "C. Papan Tebal"
       },
       {
           question: "Sebuah centrifuge dioperasikan dengan beberapa kecepatan putar yang berbeda - beda.Pada saat diputar dengan kecepatan 2000RPM, alat berfungsi dengan baik. Pada saat dioperasikan dengan kecepatan putar 3000RPM, terdenganr suara bising dan unit bergetar. Pada kecepatan 4000RPM getaran semakin keras dan muncul pesan kesalahan. Apakah saran terbaik yang dapat disampaikan kepada user tentang kondisi tersebut ?",
           options: ["A. Mengoperasikan alat dengan jumlah sampel ½ dari kapasitas alat", "B. M elakukan pemanasan alat sebelum menggunakan alat tersebut", "C. Tidak mengoperasikan alat hingga selesai dilakukan perbaikan", "D. Mengoperasikan alat pada RPM dibawah 3000", "E. Meletakkan centrifug e pada permukaan datar"],
           answer: "B. Tidak mengoperasikan alat hingga selesai dilakukan perbaikan"
       },
       {
           question: "Sebuah alat rontgen pada instalasi radiologi RS tidak berfungsi dengan baik. Bayangan radiografi pasien tidak muncul pada film setelah dilakukan penyinaran. Pada saat dilakukan pemeriksaan, diketahui bahwa semua indikator berfungsi dengan baik pada saat awal alat dihidupkan. Alarm terdenga r pada saat tombol preparation ditekan. Apakah langkah pertama yang harus dapat dilakukan?",
           options: ["A. Memeriksa tegangan sumber daya utama pesawat sinar X", "B. Memeriksa tombol expose pesawat sinar X", "C. Memeriksa tegangan tinggi tabung sinar X", "D. Memeriksa fuse utama pesawat sinar X", "E. Memeriksa filamen tabung sinar X"],
           answer: "E. Memeriksa filamen tabung sinar X"
       },
       {
           question: "Seorang teknisi dengan melakukan pemeliharaan alat infr ared 6 lampu. Alat ini sudah 3 tahun digunakan. Pada saat mengecek lampunya, ada 2 lampu yang pelapis/filternya terkelupas. Berapa jam waktu pakai/life time lampu infrared?",
           options: ["A. 100", "B. 200", "C. 300", "D. 400", "E. 500"],
           answer: "E. 500"
       },
       {
           question: "Seorang teknisi elektromedis sedang memasang Parafin Bath di RS X. Pada saat saklar on/off ditekan/dinyalakan ternyata lampu indikator power tidak menyala. Apa yang pertama kali diperiksa untuk menyelesaikan permasalahan tersebut?",
           options: ["A. Fuse", "B. Kabel power", "C. Power supply", "D. Sumber tegangan", "E. Instalasi didalam alat"],
           answer: "E. Instalasi didalam alat"
       },
       {
           question: "Seorang perawat sedang menggunakan alat EKG. Pada saat perekaman hasil pasien, ternyata grafiknya tidak beraturan. Apa penyebab utama untuk permasalahan tersebut?",
           options: ["A. Printer rusak", "B. Gel sedikit", "C. Sumber listrik ti dak stabil", "D. Grounding tidak terpasang", "E. Elektroda tidak terpasang dengan benar"],
           answer: "E. Elektroda tidak terpasang dengan benar"
       },
       {
           question: "Seorang elektromedis mau memasang alat infrared 4 lampu di RS x. Pada saat alat mau dihidupkan ternyata lampu indikator power tidak menyala. Apa yang p ertama kali diperikasa untuk menyelesaikan permasalahan tersebut?",
           options: ["A. Fuse", "B. Kabel power", "C. Saklar on/off", "D. Sumber tegangan", "E. Instalasi didalam alat"],
           answer: "D. Sumber tegangan"
       },
       {
           question: "Seorang fisioterapis sedang memakai Parafin Bath. Setelah menunggu 5jam ternyata parafin/ lilinnya tidak mencair. Apakah penyebab utama permasalahan tersebut?",
           options: ["A. Heater rusak", "B. Sensor putus", "C. Lilin terlalu banyak", "D. Tegangan tidak stabil", "E. Rangkaian pengontrol suhu"],
           answer: "A. Heater rusak"
       },
       {
           question: "seorang teknisi sedang melakukan pemeliharaan alat infrared 6 lampu. Alat ini sudah 3 tahun digunakan. Pada saat mengecek lampunya ada 2 lampu yang pelapis/filternya terkelupas. Apa yang harus pertama kali dilakukan untuk mengatasi permasalahan tersebut?",
           options: ["A. Dilem", "B. Tetap dipakai", "C. Melepas yang rusak", "D. Mengganti dengan yang baru", "E. Merekomendasikan tidak memakai alat"],
           answer: "D. Mengganti dengan yang baru"
       },
       {
           question: "Seorang elektromedis hendak melakukan pemeliharaan centrifuge. Disampaikan keluhan dari analis laboratorium bahwa putaran motor DC centrifuge tidak sesuai denga n setting yaitu lebih rendah kecepatannya daripada suhu setting. Apa tindakan yang harus dilakukan untuk mengatasi permasalahan tersebut?",
           options: ["A. Kalibrasi", "B. Mengecek motor", "C. Membersihkan rotor", "D. Mengganti sikat arang", "E. Memeriksa sumber tegangan"],
           answer: "C. Membersihkan rotor"
       },
       {
           question: "baby incubator yang sedang digunakan terdapat 2 nilai suhu yang dapat diamati oleh user yaitu suhu bayi dalam ruang incubator. Namun ketika sebuah alat baby incubator sedang difungsikan tiba - tiba suhu dari bayi ini ternyata nilai su hunya tidak dapat ditampilkan pada display. Dari permasalahan diatas, analisa awal apa yang mengalami kerusakan",
           options: ["A. Air probe sensor", "B. Skin probe sensor", "C. Humidity probe sensor", "D. Display pada air probe sensor", "E. Display pada skin air probe sensor"],
           answer: "B. Skin probe sensor"
       },
       {
           question: "seorang anali sedang menggunakan waterbath, suhu yang diatur 37 derajat waktu yang diatur 10 menit. Pada waktu sudah tercapai 10 menit, ternyata yang tercapai hanya 28 derajat. Apa penyebab utama untuk kejadian tersebut?",
           options: ["A. Sensor putus", "B. Heate rusak", "C. Tutup tidak rapat", "D. Listrik tidak stabil", "E. Rangkaian pengontrol suhu"],
           answer: "E. Rangkaian pengontrol suhu"
       },
       {
           question: "Seorang analis sedang menggunakan spectrophotometer. Pada saat melakukan pemeriksaan larutan blank, hasil absorbance blank yang keluar 0,111. Apa yang pertama ka li harus dilakukan untuk mengatasi permasalahan tersebut ?",
           options: ["A. Mengkalibrasi", "B. Mengeceklampu", "C. Memeriksadetektor", "D. Membersihkankuvet", "E. Menggantiaquabedes"],
           answer: "A. Mengkalibrasi"
       },
       {
           question: "Seorang analis sedang memakai spectrophotometer. Langkah pertama, analis tersebut membaca larutan blank dengan hasil 0,001. Kemudian melakukan pemeriksaan sampel, hasil yang keluarnolimit / eror. Apa penyebab utama kejadian tersebut ?",
           options: ["A. Detektormati", "B. Photodiode rusak", "C. Monokromatorkotor", "D. Lampu halogen putus", "E. Pemilihan filter yang salah"],
           answer: "A. Detektormati"
       },
       {
           question: "Seorang teknisi mendapatkan laporan dari analis, tentang kerusakan photometer. Pada saat sampel dibaca 2 kali, hasil yang keluar berbeda jauh. Apa yang pertama kali diperiksa untuk mengatasi permasalahan tersebut ?",
           options: ["A. Lampu", "B. Kuvet", "C. Sumberlistrik", "D. S ystem penghisapan", "E. Monokromator / panjanggelombang"],
           answer: "E. Monokromator / panjanggelombang"
       },
       {
           question: "Seorangan alis mau memakai mikroskop. Setelah tombol power ditekan, lampu halogen menyala. Pada saat akan melihat preparat, terlihat gelap. Bagian apa yang pertama kali dia tur untuk mengatasi permasalahan tersebut ?",
           options: ["A. Okuler", "B. Diafragma", "C. Condenser", "D. Lensaobjektif", "E. Lampu"],
           answer: "B. Diafragma"
       },
       {
           question: "Seorang analis laboratorium sedang menggunakan centrifuge. Kecepatan 4000 rpm dan waktunya diatur 5 menit. Padasaat tombol “start” ditekan motor tidak mau berputar, tapi pada saat dibantu digerakan dengan tangan mau berputar. Apa penyebab utama kejadian tersebut ?",
           options: ["A. Rotor kotor", "B. Teganganrendah", "C. Sikatarangmenipis", "D. Sampelterlalubanyak", "E. Sumberlistriktidakstabil", "F. Rotor kotor"],
           answer: "F. Rotor kotor"
       },
       {
           question: "Seorang teknisi mau memasang timbangan analitik di laboratorium X. Sebelum melakukan pemasangan, teknisi tersebut mengecek ruangan yang akan di jadikan tempat timbangan analitik tersebut dipasang. Apasyaratutamauntuktempatpemasanganalattersebut ?",
           options: ["A. berAC", "B. Bersih", "C. Tidakbising", "D. Sirkulasiudara", "E. Meja tidak bergoyang"],
           answer: "E. Meja tidak bergoyang"
       },
       {
           question: "Seorangteknisiperusahaanmaumemasangalat photometer. Padasaatmengeceksumberlistriknya, ternyatalistriknyatidakstabil. Alatapa yang harusdipasanguntukmengatasipermasalahantersebut ?",
           options: ["A. UPS", "B. Trafo", "C. Genset", "D. Stabilizer", "E. Grounding"],
           answer: "D. Stabilizer"
       },
       {
           question: "Seorang analis laboratorium melaporkan kepada teknisi RS bahwa ketika dia akan melakukan pemeriksaan sampel pada photometer, sampelnya tidak mau terhisap. Sehingga dilakukan pengecekan, namun hasilnya Peristaltic tube di katakan baik. Berapa jam lifetime dari komponen tersebut ?",
           options: ["A. 1000", "B. 2000", "C. 3000", "D. 4000", "E. 5000"],
           answer: "D. 4000"
       },
       {
           question: "Seorang analisla boratorium melaporkan kepada teknisi RS bahwa ketika dia akan melakukan pemeriksaan sampel pada photometer, sampelnya tidak mau terhisap. Sehingga dilakukan pengecekan, namunhasilnya Peristaltic tube dikatakanbaik. Apa factor utama menyebabkan kejadian tersebut ?",
           options: ["A. Kotoran", "B. Aquades", "C. Botollimbahpenuh", "D. Lemakpada serum", "E. Selangterlalukecil"],
           answer: "D. Lemakpada serum"
       },
       {
           question: "Seorang teknisi sedang melakukan pemeliharaan photometer. Pada saat membersihkan selang limbahnya, cairan limbah tersebut mengenai baju dan tangannya. Tindakan apa yang harus segera dilakukan untuk permasalahan tersebut?",
           options: ["A. Menggantibaju", "B. Mencucidengan air", "C. Melanjutkanpekerjaan", "D. Membilasdengancairanpembasmibakteri", "E. Membersihkansisa – sisalimbah yang adadilantai"],
           answer: "B. Mencucidengan air"
       },
       {
           question: "Seorang teknisi perusahaan x mau memasang Laboratory Incubator di laboratorium RS Y. Pada saat mau menghidupkan alat, ternyata lampu indikator power tidak menyala. Setelah dilakukan pengecekan, fuse tersambung, kabel power baik, sumberlistrik ada. Apa penyebab utama peristiwa tersebut bisa terjadi?",
           options: ["A. Teganganrendah", "B. MCB KWHmeterturun", "C. Dayalistriktidakcukup", "D. Bebanlistrikalatbesar", "E. Instalasilistriktidakbagus"],
           answer: "A. Teganganrendah"
       },
       {
           question: "Teknisi RS X sedangmelakukanpemeliharaan Mixer. Padasaatkecepatan motor diatur 3000 rpm ternyatakecepatan motor yang terukurdialatkalibrasi 1000 rpm. Apa tindakan yang harus dilakukan?",
           options: ["A. Memperbaiki", "B. Kalibrasi ulang", "C. Tidakmemakaialatnya", "D. Mengganti dengan yang baru", "E. Memanggil teknisi perusahaan"],
           answer: "B. Kalibrasi ulang"
       },
       {
           question: "Teknisi RS X sedangmelakukanpemeliharaan Mixer. Padasaatkecepatan motor diatur 3000 rpm ternyatakecepatan motor yang terukurdialatkalibrasi 1000 rpm. Apanamaalat yang digunakan",
           options: ["A. Avometer", "B. Barometer", "C. Tachometer", "D. Ampermeter", "E. Thermometer"],
           answer: "C. Tachometer"
       },
       {
           question: "Elektromedis sedang melakukan pemeliharaan Waterbath. Pada saat mengukur suhunya ternyata lebih tinggi dari pada suhu yang diatur. Setelah dilakukan pngecekan ,teganganlistrik, heater dalam kondisi baik, sensor temperature berkarat. Untukmelakukanadjustmenseorangelektromedisharusmembongkaralattersebut. Langkahapa yang pertama kali dila kukanuntukmengatasipermasalahantersebut?",
           options: ["A. Kalibrasi", "B. Mematikanalat", "C. Mengganti baru", "D. Membersihkankorosi", "E. Membawakeruangan IPSRS"],
           answer: "C. Mengganti baru"
       },
       {
           question: "Teknis RS maumelakukan perencanaan pemeliharaan dan kalibrasi photometer di RS tersebut photometer dipakai selama 20 jam dalam 1 harinya jumlah pasien untuk pemeriksaan kimia klinik 60 orang dalam sehari. Berapajumlahlampu halogen yang harusdisiapkandalam 1 tahun.",
           options: ["A. 2", "B. 3", "C. 4", "D. 5", "E. 6"],
           answer: "B. 3"
       },
       {
           question: "Seorangteknisi RS akanmelakukanpemeliharaan centrifuge. Padasaatmengecek rotor terdapattabung yang berisidarah. Akibatkuranghati - hatidalammemegangnya, makadarahterseb uttumpahdanmengenaitangansertabaju. Tindakanapa yang harussegeradilakukan?",
           options: ["A. Membilasbaju", "B. Memanggilanalis", "C. Melanjutkanpemeliharaan", "D. Mencucitangandengancairan anti bakteri", "E. Membersihkandarah yang tercecerdilantai"],
           answer: "D. Mencucitangandengancairan anti bakteri"
       },
       {
           question: "Teknisiperusahaan X sedangmelakukanpemeliharaandankalibrasi centrifuge di RS. Padasaatkecepatan motor diatur 4000rpm ternyata yang terbacapadaalatkalibrasi 2000rpm. Teknisitersebutmerekomendasikanuntuktidakmemakai centrifuge tersebut. Alatukurapa yang digunakanuntukmengukurkecepatanalattersebutdiatas?",
           options: ["A. Avometer", "B. Barometer", "C. Multimeter", "D. Tachometer", "E. Thermometer"],
           answer: "D. Tachometer"
       },
       {
           question: "Seorang analis laboratorium melakukan pemeriksaan serum control/quality control padaalat spektrofotometer. Hasil yang didapatkan untuk semua parameter berada diluar range yang telah ditentukan pada saat dilihat buku pemeliharaan alat, lampu halogen terakhir diganti dua tahun yang lalu Apa prinsip dasar dari pembacaan dari system photometric padas pektrophotometer",
           options: ["A. Refleksi", "B. Reflaksi", "C. Absorbsi", "D. Difraksi", "E. Polarisasi"],
           answer: "C. Absorbsi"
       },
       {
           question: "Seorangte knisi perusaahan X sedang melakukan pemasangan alat Spektrophotometer. Setelah semua accesoris alat dipasang, kemudian alat dihidupkan untuk melakukan “warming up”. Seorang analis juga menghidupkan centrifuge untuk memisahkan serum dari darah yang dipakai untuk sample percobaan alat spektrophotometer. Setel ah berjalan 1 menitl ayara latmen g alami noise/bergoyang. Setelah dilakukan pengecekan, koneksilayar ke alat terkoneksi dengan baik, kondisi layarbaik. Pada saat centrifuge dimatikan ternyata layer spectrophotometer tidak bergoyang lagi. Tindakanapa yang harusdilakukanuntukpermasalahantersebut?",
           options: ["A. Memakai UPS", "B. Memasang Grounding", "C. Menghidupkantidakbersamaan", "D. Menambahkan alat yang bisa menstabilkan tegangan", "E. Menjauhkandarisumbergelombangelektromagnetik"],
           answer: "D. Menambahkan alat yang bisa menstabilkan tegangan"
       },
       {
           question: "Seorangteknisiperusaahan X sedangmelakukanpemasanganalatSpektrophotometer. Setelahsemuaaccesorisalatdipasang, kemudianalatdihidupkanuntukmelakukan “warming up”. Seoranganalisjugamenghidupkan centrifuge untukmemisahkan serum daridarah yang dipakaiuntuk sample percobaanalatspektrophotometer. Setelahberjalan 1 menitlayaralatmenalami noise/bergoyang. Setelahdilakukanpengecekan, koneksilayarkealatterkoneksidenganbaik, kondisilayarbaik. Padasaat centrifuge dimatikanternyatalayarspe ktrophotometertidakbergoyanglagi. Apapenyebabutamapermasalahantersebut",
           options: ["A. Ruanganpanas", "B. Listrik tidakstabil", "C. Tidak menggunakan UPS", "D. Gelombang elektromagnetik", "E. Jumlah alat diruangan terlalu banyak"],
           answer: "B. Listrik tidak stabil"
       },
       {
           question: "AlatSpektrophotometerdilaboratorium. Padasaatdilakukanpengecekankeruangantempatalatakandipasang, suhuruangandiukursebesar 33 derajatcelcius, teganganlistrik 230V. Alatapa yang digunakansupayateganganlistrik yang masukkealatstabilsebesar 220V",
           options: ["A. Trafo", "B. Adaptor", "C. Stabilizer", "D. UPS offline", "E. Power Supplay"],
           answer: "A. Trafo"
       },
       {
           question: "Seorang analis sedang menggunakan mikroskop binokuler untuk memeriksa preparat pasien. Dia menggunakan lensa okuler 10X dan lensa objektif 40X. Padasaatdiamemeriksapreparatmakaterlihatbanyaksekalikotoran. Setelahdilakukanpengecekan, didapatkanbahwalensaokulerbesihtetapilensaobjektifuntukpembesaran 40x kotor. Berapa x lensaobjektif yang harusdipilihjikaanalismenginginkanhasilpembesaran 1000 kali?",
           options: ["A. 5X", "B. 10X", "C. 20X", "D. 40X", "E. 100X"],
           answer: "E. 100X"
       },
       {
           question: "Dilaboratorium rs x seorang analis mau melakukan pemeriksaan glucose. Setelah darah pasien diambil kemudian serumnya dipisahkan dari sel - sel darah. Pada saat mau menghidupkan alat spectrophotometer lampu indukator alat tidak menyala. Kemudian analis tersebut melaporkan kebagian ipsrs. Setelah dilakukan pengecekan, kabel power dalam kondisi baik, fuse tersambung, power supplay board tidak mengeluarkan tegangan.",
           options: ["A. Lampu indicator power putus", "B. Tegangan listrik naik turun", "C. Kelua ran trafo tidak ada", "D. Dioda tidak berfungsi", "E. IC regulator rusak"],
           answer: "C. Keluaran trafo tidak ada"
       },
       {
           question: "salah satu perlatan laboratorium adalah Centrifuge hematrocit untuk mempercepat berhentinya maka dibutuhkan sistem",
           options: ["A. Timer", "B. Break", "C. Lock", "D. Speed", "E. Power switch"],
           answer: "B. Break"
       },
       {
           question: "satu perlatan laboratorium adalah Centrifuge hematrocit Apakah kepanjangan dari RCF",
           options: ["A. Radius Centrifuge Force", "B. Relative Centrifugal Force", "C. Rotation Centrifugal Force", "D. Revolution Centrifugal Force", "E. Reduction Centrifugal Force"],
           answer: "B. Relativie Centrifugal Force"
       },
       {
           question: "Pelayanan kesehatan memeerlukan EKG untuk mendiagnosa keadaan jantung pasien. EKG sering ditempatkan di IGD, Bangsal, ICU maupun IBS. Bagian dari peralatan apakah EKG?",
           options: ["A. Peralatan hematologi", "B. Peralatan neurologi", "C. Peralatan kardiologi", "D. Peralat an radiologi", "E. Peralatan obstetric"],
           answer: "C. Peralatan Kardiologi"
       },
       {
           question: "Rumah sakit memasang peralatan USG untuk menunjang kegiatan pelayanan rawat jalan. USG yang dipasang dengan kapasitas daya 800 Watt disertai dengan monitor dan printer nya. Diperlukan UPS yang secara otomatis dapat melakukan stabilisasi tegangan ketika terjadi perubahan tegangan pada input sehingga tegangan output yang digunakan stabil. Hasil pemeriksaan pasien dengan penggunaan salah satu probe didapatkan pada tampilan monitor timbul garis berbayang.",
           options: ["A. Menyiapkan gell", "B. Menyediakan spare part", "C. Merencanakan biaya kalibrasi", "D. Pemeliharaan peralatan berkala", "E. Merencanakan desinfektan untuk cairan pembersih peralatan"],
           answer: "B. Menyediakan Sparepart"
       },
       {
           question: "ketika menguji keluaran defibrillator, teknisi elektromedis harus berhati - hati karena besar tegangan yang ada pada kedua pedal dapat mencapai ribuan volt. Sebuah defibrillator memiliki kapasitor dengan spesifikasi 10uF dan disetting pada 125 Joule. Energy tersebut dapat disimpan pada sebuah kapasitor y ang tertanam pada unit. Berapa tegangan yang akan timbul pada kedua ujung pedal tersebut jika unit defibrillator digunakan ke pasien?",
           options: ["A. 4000 V", "B. 4500 V", "C. 5000 V", "D. 5500 V", "E. 6000 v"],
           answer: "C. 5000 V"
       },
       {
           question: "sebuah waterbath digunakan untuk menjaga sampel darah pasien dengan menempatkan sampel darah tersebut pada lingkungan yang suhunya terjaga pada titik suhu tertentu dan dengan penyimpanan selama selang waktu tertentu. Kapan kintrol timer pada waterbath tersebut akan aktif?",
           options: ["A. Pada saat pertam a kali alat dihidupkan", "B. Pada saat su hu setting pada waterbath sudah tercapai", "C. Pada saat detector level air berada pada level yang sesuai", "D. Pada saat suhu ukur pada waterbath berada di atas suhu setting", "E. Pada saat suhu ukur pada waterbath berada di bawah suhu setting"],
           answer: "B. Pada saat suhu setting waterbath sudah tercapai"
       },
       {
           question: "dengan menggunakan alat EKG kegiatan listrik jantung dalam tubuh dapat direkam melalui elektroda - elektroda yang dipasang pada permukaan tubuh pasien. Electrode apakah yang dipasang pada dada pasien pada alat tersebut?",
           options: ["A. Elektrokardiogram", "B. Elektropulmogram", "C. Elektrokardriografi", "D. Elektrokardigraf", "E. Elektromiogram"],
           answer: "D. Elektrokardigraf"
       },
       {
           question: "Dengan menggunakan alat EKG kegiatan listrik jantung dalam tubuh dapat dicatat dan direkam melalui elektroda – elektroda yang dipasang pada permukaan tubuh pasien. Dinamakan apakah hasil gambaran rekaman alat tersebut?",
           options: ["A. Elektrokardiogram", "B. Elektropulmogram", "C. Elektrokar diografi", "D. Elektrokardiograf", "E. Elektromiogram"],
           answer: "A. Elektrokardiogram"
       },
       {
           question: "Alat rontgen adalah alat medik bekerja menghasilkan radiasi sinar X, baik untuk keperluan fluoroskopi maupun radiografi. Agar dapat menghasilkan suatu pencitraan diperlukan beberapa komponen diantaranya bagian berfungsi menyerap hamburan radiasi sehingga gambar yang terbentuk lebih jelas. Apakah nama bagian dari alat tersebut?",
           options: ["A. Grid", "B. Film Badge", "C. Film Rontgen", "D. Filament Limiter", "E. Auto Transformator"],
           answer: "A. Grid"
       },
       {
           question: "Alat rontgen adalah alat medik bekerja menghasilkan radiasi sinar X, baik untuk keperluan fluoroskopi maupun radiografi. Agar dapat menghasilkan suatu pencitraan diperlukan beberapa komponen diantaranya bagian berfungsi membatasi jumlah sinar X yang keluar sesuai dengan luas dari objek yang dirontgen. Apakah nama bagian dari alat rontgen tersebut?",
           options: ["A. Anoda", "B. Stator", "C. Katoda", "D. Kolimator", "E. kV Selector"],
           answer: "D. Kolimator"
       },
       {
           question: "Tabung sinar X merupakan bagian pesawat rontgen yang menghasilkan sinar X. Pada tabung ada bagian dimana biasanya dibuat berputar supaya permukaannya tidak cepat rusak yang disebabkan tumbukan elektron. Apakah nama bagian dari tabung sinar X tersebut?",
           options: ["A. Anoda", "B. Stator", "C. Katoda", "D. Kolimator", "E. Focal Spot"],
           answer: "A. Anoda"
       },
       {
           question: "Tabung sinar x merupakan bagian alat rontgen yang menghasilkan sinar X. Pada tabung ada bagian dimana elektron - elektron dihasilkan dan terbuat dari tungstens. Apakah nama bagian tabung sinar X tersebut?",
           options: ["A. Focal spot", "B. Kolimator", "C. Anoda", "D. Katoda", "E. Stator"],
           answer: "D. Katoda"
       },
       {
           question: "Peralatan yang merupakan inventaris di ruangan Rehabilitasi Medik yaitu Short Wave Diathermy dan Micro Wave Diathermy. Alat tersebut berkaitan erat dengan teori gelombang. Apakah metode yang digunakan pada alat tersebut?",
           options: ["A. Doppler", "B. Radiasi", "C. Konduksi", "D. Elektromagnetik", "E. Gelombang Ultrasonik"],
           answer: "D. Elektromagnetik"
       },
       {
           question: "Seorang elektromedis sedang melakukan pemeliharaan alat Cardiotocograph yang memiliki dua buah transducer ultrasound, tocometer, fetal movement marker, disertai dengan display LCD monitor dan printer. Apakah langkah selanjutnya yang dilaku kan setelah melakukan pengecekan fungsi tombol?",
           options: ["A. Cek dan bersihkan tocometer", "B. Cek sistem perekaman / printer", "C. Cek dan bersihkan transducer ultrasound", "D. Cek dan bersihka fetal movement marker", "E. Cek keluaran volume suara, atur bila perlu"],
           answer: "E. Cek keluaran volume suara, atur bila perlu"
       },
       {
           question: "Seorang pengguna alat melakukan pemanasan pada alat defibrilator karena akan melakukan tindakan defibrilator pada pasien. Semua tombol dan asesoris sudah diperiksa dengan benar oleh pengguna alat tersebut. Manakah prosedur yang paling penting dalam kegiatan pemanasan alat tersebut setelah tombol power dinyalakan?",
           options: ["A. Cek kondisi baterai", "B. Memeriksa fungsi display monitor", "C. Memeriksa fungsi tombol pengaturan", "D. Memeriksa sistem perekaman / printer", "E. Melakukan uji fungsi charge dan discharge"],
           answer: "E. Melakukan uji fungsi charge dan discharge"
       },
       {
           question: "Hydroterapi merupakan alat terapi yang menggunakan 100% oksigen murni dengan tekanan tinggi sesuai tabel klinis dan mempunyai 6 sistem instalasi, yaitu : udara, oksigen, pendingin, pemadam, penerangan, dan komunikasi. Apa jenis pendingin yang digunakan pada alat untuk alat tersebut?",
           options: ["A. Ac Cassett e", "B. Ac standng", "C. Ac ducted", "D. Ac chiller", "E. Ac split"],
           answer: "A. Ac Cassette"
       },
       {
           question: "Dental unit adalah alat diagnostik yang berhubungan atau kontak langsung pasien dan pengguna. Salah satu persyaratan didalam pemasangan dental adalah adanya jaminan keselamatan pasien dan pengguna. Apa yang harus dipastikan untuk jaminan tersebut?",
           options: ["A. Tekanan udara yang stabil", "B. Daya listrik yang mencukupi", "C. Tegangan catu daya yang stabil", "D. Tegangan listrik dengan grounding", "E. Sekering yang sesuai kebutuhan arus listrik alat"],
           answer: "D. Tegangan listrik dengan grounding"
       },
       {
           question: "Dari ruangan laboratorium dilaporkan centrifuge bergetar h ebat kemudian berhenti ketika digunakan. Pada pengamatan awal didapatkan data penempatan tabung sample dalam keadaan seimbang dan simetris, meja dari bahan cor. Sebagai teknisi elektromedik, apa yang harus dilakukan?",
           options: ["A. Mengecek sistem kelistrikan", "B. Mengecek kondisi tempat dipastikan datar dan rata", "C. Mengecek dan mengencangkan mur pada casing alat X", "D. Mengecek bantalan karet pada sistem motor, ganti jika keras", "E. Mengecek kekuatan per dan sikat arang motor, ganti jika habis"],
           answer: "D. Mengecek bantalan karet pada sistem motor, ganti jika keras"
       },
       {
           question: "Lampu operasi dilaporkan rusak pada saat dilakukan pergeseran dengan menggunakan selling atau arm, nyala sinar mati dan hidup Apa yang harus dilakukan untuk memperbaiki sebab kerusakan alat tersebut.?",
           options: ["A. Menyetel baut pada bagi an lengan", "B. Memeriksa kabel kejala jala PLN tidak ngefong", "C. Mengencangkan sambungan kabel pada bohlam", "D. Mengukur dan memastikan keluaran power suplly dalam keadaan baik", "E. Memeriksa, melakukan perbaikan dan pembersihan pada fleksible kontak rotation arm"],
           answer: "E. Memeriksa, melakukan perbaikan dan pembersihan pada fleksibel kontak rotation arm"
       },
       {
           question: "Suatu alat bed side monitor sedang digunakan pada pasien, tiba tiba layar monitor mati. Hasil pemeriksaan pada asesoris semua berfungsi, kabel power, sumber catu daya listrik baik. Analisa awal, kemungkinan kerusakan terjadi pada bagian apa.?",
           options: ["A. LCD", "B. Batery", "C. Conector", "D. Mainboard", "E. Tombol power"],
           answer: "E. Tombol power"
       },
       {
           question: "Seorang elektromedis melaksanakn tugasnya yaitu pada alat ECG. Dia memeriksa dengan seksama pad a seluruh bagian alat tersebut yaitu power cord, steker, kabel pasien, kondisi batery, dan kondisi recorder. Keseluruhan fisik juga dilakukan pemeriksaan yaitu troly penyangga dan roda troly, kegiatan apa yang dilakukan teknisi itu.?",
           options: ["A. Pemantauan fungsi", "B. Pemeliharaan", "C. Pengujian", "D. Perbaikan", "E. Kalibrasi"],
           answer: "A. Pemantauan fungsi"
       },
       {
           question: "Alat Baby Incubator tidak berfungsi dengan baik. Dari informasi user memberikan ke t erangan, alat tersebut tidak mampu mencapai suhu setting, sehingga tidak ada kenaikan suhu. Pemeriksaan power supply, tombol, dan display berfungsi dengan baik. Pada komponen apakah kerusakan terjadi?",
           options: ["A. Thermostat", "B. Skin probe", "C. Air Filter", "D. Heater", "E. Blower"],
           answer: "D. Heater"
       },
       {
           question: "Seorang elektromedis sedang melakukan kegiatan perbaikan alat CTG. Informasi dari user, saat alat digunan tiba - tiba alat mati sendiri. dan ketika dinyalakan lagi alat dapat dilakukan kembali tetapi beberapa saat kemudian alat mati lagi. Dengan adanya kejadian ini mengganggu proses pemeriksaan. Pada bagian apakah kerusakan terjadi?",
           options: ["A. Ada ptor", "B. Tranduser", "C. Tocometer", "D. Paper print", "E. Kabel power"],
           answer: "E. Adaptor"
       },
       {
           question: "S e buah alat ECG sedang digunakan,dimana lead yang direcord terdiri dari 12 lead. Tiba - tiba pada saat lead ke 3, paper record tidak keluar. Setelah dicek ternyata kerusakan terjadi pada Motor paper. Penggantian komponen pada alat tersebut termasuk kegiatan?",
           options: ["A. Preventive Maintenance", "B. Trouble shooting", "C. Calli b ration", "D. Inspection", "E. Repair"],
           answer: "E. Repair"
       },
       {
           question: "Sebuah alat ECG dilaporkan jarak interval antar grafiknya menurut user terlalu rapat sehingga menyulitkan dalam analisa pembacaan. Hal ini dapat diatasi dengan melakkan setting parameter. Setting pada bagian manakah yang dapat dilakukan untuk menangani masalah tersebut?",
           options: ["A. Filter", "B. Lead record I, II, III", "C. Sensitivity 0.5x, 1x, 2x", "D. Lead record a VR, aVL, aVF", "E. Paper speed 25mm/sec, 50mm/sec"],
           answer: "E. Paper speed 25mm/sec, 50mm/sec"
       },
       {
           question: "Sebuah alat defibrilator sedang digunakan dengan menggunakan mode Syncron tiba - tiba alarm indicator error berbunyi. Setelah dilakukan pengamatan, ternyata muncul perintah untuk menghubungkan cable pada alat defibrilator untuk dipasang ke pasien agarmode syncron dapat dilaksanakan. Aksesoris apakah yang harus terhubung ke pasien tersebut?",
           options: ["A. Temperaure", "B. Skin Probe", "C. Lead ECG", "D. SPO2", "E. NIBP"],
           answer: "C. Lead ECG"
       },
       {
           question: "Sebelum digunakan alat Infusion Pum p terlebih dahulu disetting flow rate dan waktu sesuai dengan yang dibutuhkan lalu tombol start ditekan. Ketika berjalan sekitar 3 detik tibatiba indikator alarm AIR in Line berbunyi. Hal apa yang paling mungkin menjadi penyebab kejadian tersebut?",
           options: ["A. Battery low", "B. Door tidak tertutup rapat", "C. Letak Drip sensor yang salah", "D. Adanya gelembung udara pada IV set", "E. Kesalahan pada setting awal pemakaian"],
           answer: "D. Adanya gelembung udara pada IV set"
       },
       {
           question: "Seorang pasien di sebuah rumah sakit sedang dipasang alat Bed Side Monitor dimana kondisi nilai sistole diastolenya antara 110 – 60. Tiba - tiba pasien tersebut mengalami kenaikan kondisi nilai sistole diastolenya menjadi 125 – 70 dengan disertai bunyi alarm dengan indicator Tool High. Perbaikan komponen apa yang bisa dilakukan untuk menanggulangi hal di atas?",
           options: ["A. Hi - low Temperature", "B. Kondisi pasien", "C. Hi - low SPO2", "D. Hi - low NIBP", "E. Hi - low ECG"],
           answer: "D. Hi - low NIBP"
       },
       {
           question: "Sebuah ECG yang mempunyai 12 lead sedang digunakan, tiba - tiba pada saat lead ke 3, paper tidak keluar. Sedang hasil print out menunjukkan kualitas yang bagus. Diulang lagi dari awal sudah tidak bisa mencetak hasil. Kerusakan apa yang peling mungkin terjadi?",
           options: ["A. Motor paper tidak berfungsi", "B. Roller print tidak berfungsi", "C. Print head bermasalah", "D. Cover print tidak rapat", "E. Paper tidak sesuai"],
           answer: "A. Motor paper tidak berfungsi"
       },
       {
           question: "Sebuah Syringe Pump di ruang perawatan dilaporkan tidak dapat digunakan. Pemeriksaan sumber jala - jala listrik bagus, alat kemudian dinyalakan. Namun setelah tombol ON ditekan, indicator lamp tidak menyala dan preparing self test tidak berjalan. Setelah dicek fuse, power cord cable dalam kondisi baik. Analisa kerusakan pada bagian apa yang dapatkan pada permasalahan diatas?",
           options: ["A. Plunger", "B. LCD Display", "C. Syringe detector", "D. Board control motor", "E. Board power supply"],
           answer: "E. Board power supply"
       },
       {
           question: "Dalam perencanaan alat pasien monitor baru di RS, fitur pemeriksaan blood pressurenya akan dipakai di ruang operasi bedah jantung. Parameter tambahan apa yang diperlukan untuk memenuhi kebutuhan tersebut?",
           options: ["A. IBP", "B. NIBP", "C. SPO2", "D. EtCO2", "E. Temperature"],
           answer: "B. NIBP"
       },
       {
           question: "Sebuah ECG 12 lead sedang digunakan, pada saat perekaman lead ke 3, tiba - tiba paper record tidak keluar. Hasil pemeriksaan fisik alat tetap dalam keadaan menyala, kabel pasien juga terhubung dengan baik. Apa yang paling mungkin terjadi pada keadaan tersebut?",
           options: ["A. Motor paper mengalami kerusakan", "B. Print head mengalami kerusakan", "C. Hasil rekaman tidak ada", "D. Stylus tidak berfungsi", "E. Kertas terbalik"],
           answer: "A. Motor paper mengalami kerusakan"
       },
       {
           question: "Alat suction pump mobile dilaporkan mengalami kerusakan alat mati total. Hasil pengamatan didapat informasi sumber listrik, steker, fuse, power supply board, saklar ON/OFF, motor pump, pengaturan daya isap, bacteria filter, botol, tutup botol, tubing baik, pem asangan dan pengoperasian alat sudah memenuhi prosedur Apa penyebab paling mungkin kerusakan alat tersebut?",
           options: ["A. Roda", "B. Body", "C. Cover", "D. Handle", "E. Kabel power supply"],
           answer: "E. Kabel power supply"
       },
       {
           question: "Alat suction pump mobile dilaporkan mengalami kerusakan alat mati total. Hasil pengamatan didapat informasi terminal sumber listrik, steker, fuse, power supply board, saklar ON/OFF, motor pump, pengaturan daya isap, bacteria filter, botol, tutup botol, tubing baik, pemasangan dan pengoperasian alat sudah memenuhi prosed ur Apa penyebab paling mungkin kerusakan alat tersebut?",
           options: ["A. Fuse", "B. Kabel", "C. Switch", "D. Steker", "E. Handle"],
           answer: "B. Kabel"
       },
       {
           question: "Alat mikroskop dilaporkan mengalami kerusakn alat mati total. Hasil pengamatan didapat informasi sumber listrik, input power supply tidak terdeteksi, fuse, saklar, ON/OFF, lampu, fitting lampu, modul rangkaian elektronik baik, pengoperasian alat sudah memenuhi prosedur. Apa penyebab paling mungkin kerusakan alat tersebut?",
           options: ["A. Body", "B. Steker", "C. Diafragma", "D. Lensa okuler", "E. Lensa obyektif"],
           answer: "B. Steker"
       },
       {
           question: "Pada pemeriksaan berkala sebuah mikroskop di laboratorium RS diketahui usia alat 3 tahun. Rata - rata pemakaian mikroskop sebanyak 200 jam perbulan. Hasil pemeriksaan fisik terdapat tombol power ON/OFF, pengaturan intensitas cahaya, dan diafragma berfungsi baik. Saat pengoperasian alat terlihat sumber cahaya, dan diafragma berfungsi baik. Saat pengoperasian alat terlihat sumber cahaya redup. Informasi pada kartu pemeliharaan penggantian lampu halogen sudah dilakukan 1 tahun yang lalu. Apa tindakan pertama ya ng harus dilakukan pada alat tersebut?",
           options: ["A. Perbaikan catatan", "B. Penggantian lampu", "C. Pengukuran intensitas", "D. Pembersih lensa okuler", "E. Pembersih Lensa obyektif"],
           answer: "B. Penggantian lampu"
       },
       {
           question: "Tindak lanjut evaluasi penggunaan alat mikroskop yang sumber cahayanya gelap, didapatkan pengamatan bola lampu dalam keadaan masih baik, sumber tegangan sesuai yang dibutuhkan, rangkaian elektronik baik dan penempatan alat sudah memenuhi standart. Bagian manakah yang paling mungkin menyebabkan gangguan tersebut?",
           options: ["A. Diaftagma", "B. Lensa okuler", "C. Lensa obyektif", "D. Pengatur focus", "E. Pengatur intensitas cahaya"],
           answer: "A. Diaftagma"
       },
       {
           question: "Tindak lanjut evaluasi penggunaan alat lampu operasi yang sumber cahaanya gelap, didapatkan pengamatan bola lampu dalam keadaan masih baik, sumber tegangan sesuai y ang dibutuhkan, rangkaian elektronik baik dan penempatan alat sudah memenuhi standart. Bagian manakah yang paling mugkin menyebabkan gangguan tersebut?",
           options: ["A. Fuse", "B. Trafo", "C. Saklar on/off", "D. Pengatur focus", "E. Pengatur intensitas cahaya", "F. Pengatur intensitas cahaya"],
           answer: "F. Pengatur intensitas cahaya"
       },
       {
           question: "Pada pengoperasian EKG pada pasien, hasil perekaman lead 1 muncul akan tetap pada lead 2 dan lead 3 tidak ada respon. Apakah yang saudara lakukan apabila terjadi hal terebut?",
           options: ["A. Memperbaiki kabel V1 lepas", "B. Memperbaiki kabel kaki kanan terlepas", "C. Memperbaiki kabe l kaki kiri terlepas", "D. Memperbaiki kabel tangan kanan terlepas", "E. Memperbaiki pemasangan kabel tangan kiri terlepas."],
           answer: "C. Memperbaiki kabel kaki kiri terlepas"
       },
       {
           question: "Di dalam sebuah laboratorium ditemukan sebuah alat pH meter yang sudah tidak dipakai lagi karena hasil pengukurannya selalu tidak tepat saat di adjusment dengan larutan buffer. Sedangkan alat tersebut belum terlalu lama masa penggunaanya dan larutan bufer yang dipakai maih lamamasa kadaluarsanya. Setelah diteliti ternyata ada kerusakan pada elektrode pH meter. Bagaimana seharusnta cara menempatkan elektrode pada sat penyimpanan (setelah pemakaian)?",
           options: ["A. Tegak lurus, ujug elektrode dibawah, pangkal elektrode di atas", "B. Tegak lurus, ujung elektrode diatas, pangkal e lektroda dibawah", "C. Miring, yang penting ujung elektrode dibawah", "D. Miring, yang penting ujung elektrode diatas", "E. Tidak perlu tegak lurus, asal tidak goyang"],
           answer: "A. Tegak lurus, ujug elektrode dibawah, pangkal elektrode di atas"
       },
       {
           question: "Pada saat dilakukan inkubasi di alat waterbath dengan mengunakan heater basah tiba tiba terjadi ledakan kecil di heaternya dan ternyata hal tersebut merupakan kelalaian dari operator dan teknisi pemeliharaan. Kegiatan apa yang seharusnyta dilakukan tetapi ditinggalkan oleh operator atau tekni si sebelum mengoperasikan alat waterbath tersebut?",
           options: ["A. Melakukan pemeriksaan bagian timer", "B. Melakukan pemeriksaan bagian pengaturan panas", "C. Melakukan pemeriksaan level (volume) air pada bak waterbath", "D. Melakukan pemeriksaan dan perbaikan bagian timer dan pengaturan panas", "E. Melakukan pemeriksaan bagian pengaturan panas dan membersihkan bak air pada waterbath"],
           answer: "C. Melakukan pemeriksaan level (volume) air pada bak waterbath"
       },
       {
           question: "Pada instalasi laboratorium dilaporkan keluhan bahwa waterbath suhu chamber tidak sesuai dengan suhu setting. Apa yang harus dilakukan oleh tenaga elektromedis yang menangani peralatan tersebut?",
           options: ["A. Memeriksa regulator humidity", "B. Memeriksa air aqua pada resevoir kosong", "C. Memeriksa dan memperbaiki rangkaian level air", "D. Memeriksa dan memperbaiki rangkaian catu daya", "E. Memeriksa dan memperbaiki rangkaian kontrol suhu"],
           answer: "E. Memeriksa dan memperbaiki rangkaian kontrol suhu"
       },
       {
           question: "Pada sebuah alat difibrilator ada keluhan bahwa dischargepada mode sinkron tidak dapat digunakan. Apa yang harus dilakuka n oleh tenaga elektromeis yang menangani peralatan tersebut?",
           options: ["A. Memerisa rangkaian enguat", "B. Memeriksa kemungkinan adanya interferensi frekuensi", "C. Melakukan kemungkinan ada perbaikan pada rangkaian deteksi", "D. Melakukan pemeriksaan dan perbaikan pada rangkaian speaker /buzzer", "E. Melakukan pemeriksaan dan perbaikan pada rangkaian sinkron/ asinkron tidak bekerja"],
           answer: "E. Melakukan pemeriksaan dan perbaikan pada rangkaian sinkron/ asinkron tidak bekerja"
       },
       {
           question: "Pada saat melakukan pemeliharaan pesawat elektrokardiograf, seorang tenaga elektromedis menjumpai elektroda yang kotor karena bekas gel. Apa yang harus dilakukan oleh tenaga elektromedis yang menangani peralatan tersebut?",
           options: ["A. Mengganti elektroda tersebut dengan yang baru", "B. Melakukan pemeliharaan bagian bagian lain selain elektro da", "C. Melakukan pengoperasian alat dengan menggunakan phantoim", "D. Memrahi operator karena tidak melakukan pembersihan secara rutin", "E. Membersihkan elektroda tersebut dan memberikan pengarahan kepada operator"],
           answer: "E. Membersihkan elektroda tersebut dan memberikan pengarahan kepada operator"
       },
       {
           question: "Alat yang dikembangkan ini terdiri dari sebuah bio - amplifier yang menguatkan sinal – sinyal gelombang listrik yang berasal dari jantung (biopotential). Sinyal tersebut dipengaruhi oleh banyak sinyal lain yang dikategor ikan sebagai noise yang berasal dari banyak sumber di luar tubuh manusia yang diamati. Apa nama rangkaian yang dapat meredam noise pada kasus diatas?",
           options: ["A. ADC", "B. Filter", "C. Monitor", "D. Optocoupler", "E. Microcontroller"],
           answer: "B. Filter"
       },
       {
           question: "Saat seorang tenaga elektromedis sedang melakukan sterilisasi ruangan bedah instalasi menggunakan alat UV sterilisator, tiba – tiba terdengan suara alarm di tengah – tengah proses sterilisasi. Setelah dilihat, ternyata usia life time lampu UV sterilisatornya sudah habis. Langkah pertama apakah y ang akan dilakukanb oleh tenaga elektromedis untuk menangani alat tersebut?",
           options: ["A. Mematikan bunyi alarm", "B. Melakukanb reset life time kembali", "C. Mematikan dan menghidupkan alat UV sterilisator", "D. Melakukan penggantian lampu UV dengan yang baru", "E. Mereset life time dan mngganti lampu UV yang baru"],
           answer: "E. Mereset life time dan mngganti lampu UV yang baru"
       },
       {
           question: "Seorang fisioterapi melaporkan kepada bagian instalasi pemeliharaan sarana bahwa alat ultrasonic terapi tidak keluar outputnya. Langkah pertama apakah yang akan dilakukan oleh tenaga elektromedis untuk menangani alat tersebut?",
           options: ["A. Melakukan pemeriksaan sekring", "B. Melakukan penggantian transducer", "C. Melakukan pemeriksaan pada transducer", "D. Melakukan pemeriksaan rangkaian power supply", "E. Melakukan rangkaian pemeriksaan r angakain penguat amplifier"],
           answer: "B. Melakukan penggantian transducer"
       },
       {
           question: "Perawat rumah sakit melaporkan kepada instalasi pemeliharaan sarana, bahwa alat ultrasounic nebulizer terdapat kerusakan pada output pengkabutan tidak sesuai dengan yang diinginkan. Langkah pertama yang dilakukan oleh tenaga elektromedis untuk menangani alat tersebut?",
           options: ["A. Melakukanpemeriksaanpada Kristal", "B. Melakukanpemeriksaan fuse alat", "C. Melakukanpemeriksaankabel power supply", "D. Melakukanpemeriksaanpadarangkaian power supply", "E. Melakukanpemeriksaa npadarangkaianpengatur blower"],
           answer: "E. Melakukan pemeriksaan pada rangkaian pengatur blower"
       },
       {
           question: "Rumah sakit mendapaatkan alat anastesi baru dating hibah dari bantuan WHO dan pihak rumah sakit akan menggunakan alat tersebut di kamar operasi Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertugas menangani alat tersebut?",
           options: ["A. Melakukan pencatatan harian, mingguan, bulanan dan tahunan", "B. Melakukan pencatatan, pemeriksaan, pemeliharan, pemeliharaan dan mengevaluasi", "C. Melakukan pencatatan, pemeriksaan, pe meliharaan, dan mengevaluasi kondisi alat", "D. Melakukan pencatatan dengan data - data yang tertera dalam alat, uji fungsi dan uji coba", "E. Melakukan pencatatan data alat memonitoring, dan pemeliharaan pencatatan alat anastesi"],
           answer: "D. Melakukan pencatatan dengan data - data yang tertera dalam alat, uji fungsi dan uji coba"
       },
       {
           question: "Seorang elektromedis mengoperasikan alat rontgen dengan nilai parameter expouser sebesar 60 KVp, 100 mA, dan 0,1detik. Alat rontgen yang dioperasikan menggunakan sumber daya satu phase Berapa kons umsi energy yang digunakan pada pesawat rontgen tersebut?",
           options: ["A. 6 joule", "B. 60 joule", "C. 0,6 joule", "D. 600 joule", "E. 6000 joule"],
           answer: "D. 600 joule"
       },
       {
           question: "Hasil uji kalibrasi alat photo terapy secara kwalitas ... Bagian manakah yang harus diganti / diperbaiki dari alat tersebut?",
           options: ["A. Timer", "B. Heater", "C. Pump / fan", "D. Battery charger", "E. Control / Switches"],
           answer: "D. Battery charger"
       },
       {
           question: "Petugas laboratorium melaporkan bahwa terdapat permasalahan alat centrifuge di lab sentral yaitu getaran alat terlalu kencang. Setelah dilakukan pengukuran oleh tenaga elektromedis menggunakan alat ukur hasilnya sesuai atau kesalahannya nol, penempatan sample tidak beraturan. Analisa kerusakan apa yang ada pada permasa lahan tersebut?",
           options: ["A. Kerusakan driver main board", "B. Kesalahan setting / pengaturan", "C. Peletakan kuvet tidak rata", "D. Tutup kurang rapat", "E. Motor overheating"],
           answer: "C. Peletakan kuvet tidak rata"
       },
       {
           question: "Di salah satu rumah sakit terdapat peralatan spektrofotometer yang baru datang untuk digunakan pada laboratorium. Sebagai tenaga elektromedis langkah awal yang dilakukan untuk menangani peralatan baru tersebut adalah.",
           options: ["A. Melakukan pencatatan dan pelabelan", "B. Melakukan preventif maintenance", "C. Melakukan uji fungsi", "D. Melakukan kalibrasi", "E. Melakukan evaluasi."],
           answer: "A. Melakukan pencatatan dan pelabelan"
       },
       {
           question: "Untuk meningkatkan pelayanan kesehatan, sebuah rumah sakit akan melengkapi alat dengan peralatan bedside monitor yang baru, dengan kebutuhan 5 parameter pengukuran. Sebagai tenaga elektromedis. Dapat kah anda menyebutkan parameter tersebut?",
           options: ["A. ESU", "B. USG, arus, daya, suhu, tekanan", "C. EEG, panas, radiasi, tegangan, flow", "D. Defibrilator, luas, tekanan, berat, gaya", "E. EKG, SPO2, NIBP, Respiration, Heart Rate"],
           answer: "E. EKG, SPO2, NIBP, Respiration , Heart Rate"
       },
    {
        question: "Teknisi perusahaan X akan melakukan proses pemasangan alat USG di suatu Rumah Sakit. Alat ini sangat sensitif terhadap naik dan turunnya tegangan dari jala - jala PLN.Apa yang harus dilakukan untuk permasalahan tersebut?",
        options: ["a. Memasang Trafo", "b. Memasang grounding", "c. Mengecek sumber tegangan", "d. Menambahkan stabilizer", "e. Membuat jalur listrik baru"],
        answer: "d. Menambahkan stabilizer"
    },
    {
        question: "Seorang elektromedis sedang melakukan kalibrasi bedside monitor, saat mengukur Heart Rate pada layar tidak muncul nilai heart rate Apa yang harus dilakukan oleh elektromedis tersebut",
        options: ["a. Memeriksa pemilihan Lead", "b. Memeriksa pemasangan kabel EKG", "c. Memeriksa Pengaturan Simulator", "d. Memeriksa Baterai Simulator", "e. Memeriksa Tegangan PLN"],
        answer: "b. Memeriksa pemasangan kabel EKG"
    },
    {
        question: "Seorang Elektromedis sedang melakukan kajian pemanfaatan alat rontgen di Rumah Sakit. Alat tersebut harus memenuhi persyaratan proteksi radiasi, salah satunya adalah limitasi. Apakah yang dimaksud pernyataan tersebut?",
        options: ["a. harus mengacu pada nilai batas dosis dan tidak terlampaui", "b. harus dapat meningkatkan kualitas gambar yang dihasilkan0o", "c. harus menerapkan teknik dan prosedur yang tepat", "d. menentukan dosis radiasi yang sesuai dengan kondisi pasien", "e. manfaat radiasi lebih besar daripada risiko yang ditimbulkan"],
        answer: "a. harus mengacu pada nilai batas dosis dan tidak terlampaui"
    },
    {
        question: "Salah satu instrumen dental unit yang dapat mengeluarkan air dan udara serta gabungan keduanya adalah....",
        options: ["a. Micromotor", "b. Additional Rocker", "c. Intra Matrik Motor", "d. Turbin", "e. Multi Function Hand piece"],
        answer: "e. Multi Function Hand piece"
    },
    {
        question: "Seorang elektromedis melakukan kegiatan kalibrasi pada alat electro surgery unit (ESU). Sesuai lembar kerja setiap titik setting harus diambil 6 kali pengukuran. Pada saat melakukan pengukuran yang ke 3 pada setting terakhir alat ESU menjadi panas. sebagai seorang elektromedis tindakan apa yang tepat yang harus dilakukan",
        options: ["a. Memberikan Label Merah pada alat", "b. Menunggu sebentar kemudian dilakukan kalibrasi lagi dari awal", "c. Mengambil data di lain hari", "d. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili", "e. Melaporkan ke pihak rumah sakit bahwa alat tidak bisa dikalibrasi"],
        answer: "d. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili"
    },
    {
        question: "Penempatan alat spektrofotometer. Salah satu kegiatan penempatan alat spektrofotometer adalah ?",
        options: ["a. Bersihkan bagian luar instrumen dengan potongankain dibasahi dengan air suling", "b. Meja kerja yang stabil dan jauh dari peralatan yang menghasilkan getaran (sentrifugal, agitator).", "c. Gunakan semprit untuk membersihkan tempat sampel.yang menyerap banyak cairan", "d. Matikan layar kontrol dan lakukan pembersihan", "e. Matikan spektrofotometer dan lepaskan kabel sambungan listrik"],
        answer: "b. Meja kerja yang stabil dan jauh dari peralatan yang menghasilkan getaran (sentrifugal, agitator)."
    },
    {
        question: "Seorang teknisi elektromedis sedang memeriksa bagian- bagian yang ada pada Hematology Analyzer antara lain :test tube ; metering unit; pompa dan beberapa blok rangkaian lain . Apakah nama salah satu bagian dari alat tersebut yang dilewati oleh sel darah dan didesign dengan diameter yang setara dengan diameter sel darah ?",
        options: ["a. Metering unit", "b. Oriface /aperture", "c. Pompa", "d. Threshold", "e. Test tube"],
        answer: "b. Oriface /aperture"
    },
    {
        question: "Seorang elektromedis ditugaskan untuk mendampingi petugas vendor peralatan radiologi guna melakukan uji fungsi digital radiography (DR) di instalasi Radiologi. Uji fungsi tersebut dilakukan untuk mengetahui kinerja alat sesuai dengan standard keamanan dan standard dari pabrik. Bagaimanakah pelaksanaan pada kasus tersebut ?",
        options: ["a. pengujian pada komponen; kinerja output dan aspek keselamatan", "b. pengujian pada kinerja output; keselamatn listrik dan radiasi", "c. pengujian pada kinerja output; keselamatn radiasi; listrik dan mekanik", "d. pengujian pada pasien sebelum dilakukan uji kinerja alat", "e. pengujian pada pasien setelah dilakukan uji fungsi"],
        answer: "a. pengujian pada komponen; kinerja output dan aspek keselamatan"
    },
    {
        question: "Kegiatan pemeliharaan USG yang bersifat perbaikan yang mengalami kerusakan dengan atau tanpa penggantian suku cadang.Termasuk kegiatan pemeliharaan apakah hal tersebut diatas?",
        options: ["a. Korektif", "b. Tidak terencana", "c. Kuratif", "d. Breakdown", "e. Terencana"],
        answer: "a. Korektif"
    },
    {
        question: "Spektrofotometer adalah alat yang dipergunakan pada Laboratorium Klinik. Urutan blok diagram yang benar untuk pesawat spektrofotometer adalah lampu - ….? ",
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
        options: ["a. Saklar ON)/Off rusak", "b. Sikat arang habis, komutator rusak", "c. Sekring Putus", "d. Mikroswitch door tidak berfungsi,Lid kontrol tidak berfungsi, Timer rusak, Rangkaian pengatur kecepatan rusak", "e. Karet penahan getaran lemah"],
        answer: "d. Mikroswitch door tidak berfungsi,Lid kontrol tidak berfungsi, Timer rusak, Rangkaian pengatur kecepatan rusak"
    },
    {
        question: "Ips pada sebuah rumah saki tmenerima laporan ada alat lampu operasi terjadi sebuah kerusakan ruangan rawat inap. Sebagai seorang elektromedis Langkah awal yang dilakukan adalah?",
        options: ["a. Menyiapkan bahasn habis pakai", "b. Mendokumentasikan alat tersebut", "c. Memberikan laporan ke atasan atas kerusakan tersebut", "d. Melakukan respon sesuai SOP", "e. Meninventaris dulu alat yang rusak"],
        answer: "d. Melakukan respon sesuai SOP"
    },
    {
        question: "Sebuah alat bed side monitor di ruang IGD RSU memiliki beberapa parameter untuk memantau keadaan pasien. Seorang Dokter yang bertugas memerintahkan kepada seorang perawat untuk menekan tombol pada alat tersebut untuk mengetahui tekanan darah pada pasien saat itu lewat tampilan yang ditunjukan pada layar display pada alat bed side monitor tersebut. Dibawah ini adalah langka yang bisa dipilih perawat untuk mengetahui tekanan darah pada pasien dengan cara menekan tombol parameter dibawah ini pada alat tersebut",
        options: ["a. NIBP", "b. SPO2", "c. IBP", "d. HR", "e. etCO2"],
        answer: "a. NIBP"
    },
    {
        question: "Seorang Elektromedis bersama dengan petugas penyedia peralatan sedang melakukan uji fungsi general x-ray unit yang sudah terpasang tetap di instalasi Radiologi. Apakah tujuan pelaksanaan kegiatan tersebut ?",
        options: ["a. memastikan alat sudah tersertifikasi sesuai dengan spesifikasi dari pabrik", "b. agar alat dapat berfungsi dan bermanfaat untuk pemeriksaan fluoroscopi", "c. memastikan alat sudah sesuai dengan spesifikasi dari standard dari pabrik", "d. agar alat dapat berfungsi dan bermanfaat untuk pemeriksaan radiograpi", "e. memastikan kinerja alat sesuai standard keamanan dan standard dari pabrik."],
        answer: "e. memastikan kinerja alat sesuai standard keamanan dan standard dari pabrik."
    },
    {
        question: "Untuk Traksi jenis lumbal, berapa maksimal berat beban tarikan?",
        options: ["a. 1/4 BB", "b. 1/7 BB", "c. 1/3 BB", "d. 1/6 BB", "e. 1/5 BB"],
        answer: "c. 1/3 BB"
    },
    {
        question: "Pengoperasian alat AAS dibutuhkan penggunaan gas aseteline. Apakah fungsi gas tersebut?",
        options: ["a. pembawa", "b. pereaksi", "c. pembakar", "d. pelarut", "e. pendorong"],
        answer: "c. pembakar"
    },
    {
        question: "Seorang perawat merasa tidak nyaman melihat perilaku tenaga elektromedis dalam hal memberikan pelayanan pemeliharan alat baby inkubator, karena alat terebut kurang mendapatkan perawatan yang memadai. Sehingga dilaporkan keatasannya. Tindakan apa yang akan dilakukan oleh kepala Instalasi Pemeliharaan Sarana Rumah Sakit.",
        options: ["a. Menegur secara tertulis tenaga elektromedis", "b. Menegur secara tertulis dan melakukan pembinaan", "c. Menegur keras kepada tenaga elektromedis", "d. Menegur secara lisan kepada tenaga elektromedis", "e. Memberi sangsi terhadap tenaga elektromedis"],
        answer: "d. Menegur secara lisan kepada tenaga elektromedis"
    },
    {
        question: "Seorang teknisi elektromedis melakukan kalibrasi alat spektrofotometer . Apa larutan yang digunakan pada kegiatan tersebut?",
        options: ["a. Larutan diluent", "b. larutan KCL", "c. laruran standar", "d. Reagen blanko", "e. larutan buffer"],
        answer: "c. laruran standar"
    },
    {
        question: "Sebuah pesawat rontgen di suatu rumah sakit tidak menghasilkan hasil radiograf ketika dilakukan exposure. Saat dilakukan pengecekan filamen tidak putus dan bekerja normal. Apa yang harus dilakukan oleh seorang elektromedis untuk memperbaiki pesawat rontgen tersebut?",
        options: ["a. Melakukan pengecekan pada HTT", "b. Melakukan pengecekan pada timer", "c. Melakukan pengecekan pada trafo filamen", "d. Melakukan pengecekan pada auto trafo", "e. Melakukan pengecekan pada space charge compensator"],
        answer: "a. Melakukan pengecekan pada HTT"
    },
    {
        question: "Seorang tenaga Laboratorium mengeluhkan pengelihatan pada mikroskop cahaya yang kurang jelas . akan tetapi secara kasat mata lensa okuler maupun obyek k dalam keadaan bersih. Sebagai Tenaga Elektromedis apa yang akan di lakukan untuk menangani alat tersebut ?",
        options: ["a. Menggan lensa objec f.", "b. Menggan lampu mikroskop.", "c. Menggan lensa okuler", "d. Mengatur kondesor", "e. Melakukan se ng ulang posisi lensa."],
        answer: "b. Menggan lampu mikroskop."
    },
    {
        question: "Autoclave merk Hiclave HVP-50 merupakan alat sterilisator yang menghasilkan uap panas dengan tekanan uap yang mencapai 121 C, dengan tekanan uap yang cukup besar perlu sebuah monitor yang dapat menginformasikan pengguna tentang keadaan suatu autoclave untuk meminimalisir adanya kecelakaan saat pengoperasian. Apabila terjadi suatu kerusakan pada display autoclave, apa yang harus dilakukan oleh seorang teknisi?",
        options: ["a. Memeriksa sumber panas pada autoclave", "b. Memeriksa tegangan input pada mainboard autoclave", "c. Mengganti timer pada autoclave", "d. Mengganti thermostat pada autoclave", "e. Memeriksa kondisi sekitar autoclave o"],
        answer: "b. Memeriksa tegangan input pada mainboard autoclave"
    },
    {
        question: "Peralatan Lifesupport yang pada saat ini sedang banyak dipakai untuk tindakan penanganan pasien Covid 19 yang mengalami gangguan pernafasan, alat ini juga bisa membantu nafas pasien bertekanan negatif dan positif yang dapat mempertahankan ventilasi dan pemberian oksigenasi secara mekanis. Dibawah ini adalah nama dari alat Life Support tersebut yang digunakan untuk penanganan pasien Covid 19",
        options: ["a. Oximetrii", "b. Baby incubator", "c. Nebulizer", "d. Ventilator", "e. Defibrilator"],
        answer: "d. Ventilator"
    },
    {
        question: "Kontrol waktu pada waterbath berfungsi untuk membatasi waktu penyimpanan sampel. Bilamana kontrol tersebut mulai bekerja ?:",
        options: ["a. Setelah sampel dimasukkan", "b. Suhu sudah sesuai dengan suhu setting.", "c. Heater mulai bekerja", "d. Suhu masih dibawah suhu setting.", "e. Selesai penyimpanan sampel."],
        answer: "b. Suhu sudah sesuai dengan suhu setting."
    },
    {
        question: "Pengaturan pada panel kontrol alat water bath diantaranya adalah savety limit kontrol Bilamana bagian kontrol tersebut mulai bekerja ?",
        options: ["a. Suhu pada waterbath meningkat sangat lambat", "b. Suhu pada waterbath dibawah suhu setting", "c. Suhu melebihi suhu yang disetting .", "d. Sampel belum dimasukkan sudah di start", "e. Waktu penyimpanan telah selesai , penutup membuka."],
        answer: "c. Suhu melebihi suhu yang disetting ."
    },
    {
        question: "Pada flamefotometer terdapat salah satu bagian yang disebut nebulizer. Apakah fungsi bagian tersebut?",
        options: ["a. Merubah zat pada sampel menjadi pertikel-partikel yang sangat halus.", "b. Menghisap sampel", "c. Merubah zat pada sampel menjadi atom-atom", "d. Mencampur sampel dengan reagen", "e. Membakar sampel"],
        answer: "a. Merubah zat pada sampel menjadi pertikel-partikel yang sangat halus."
    },
    {
        question: "Suatau alat Nebulizer digunakan pada instalasi gawat darurat, semua accessories dan kabel telah terpasang. Setting alat sudah sesuai dengan SOP, saat ditekan tombol start ternyata tidak ada uap yg keluar. Apakah yang harus dilakukan oleh untuk mengatasi masalah ini?",
        options: ["a. Lihat dan periksa masker pasien", "b. Lihat dan set waktu pada timer", "c. Lihat dan Periksa kabel power", "d. Lihat dan periksa slang ke pasien", "e. Lihat dan periksa volume air pada chamber"],
        answer: "e. Lihat dan periksa volume air pada chamber"
    },
    {
        question: "Tekanan darah merupakan faktor yang amat penting pada system sirkulasi. Peningkatan atau penurunan tekanan darah akan mempengaruhi homeostatsis di dalam tubuh. Tekanan darah selalu diperlukan untuk daya dorong mengalirnya darah di dalam arteri, arteriola, kapiler dan sistem vena, sehingga terbentuklah suatu aliran darah yang menetap. Jika sirkulasi darah menjadi tidak memadai lagi, maka terjadilah gangguan pada system transportasi oksigen, karbondioksida, dan hasil- hasil metabolisme lainnya. Di lain pihak fungsi organ-organ tubuh akan mengalami gangguan seperti gangguan pada proses pembentukan air seni di dalam ginjal ataupun pembentukan cairan cerebrospinalis dan lainnya. Terdapat dua macam kelainan tekanan darah, antara lain yang dikenal sebagai hipertensi atau tekanan darah tinggi dan hipotensi atau tekanan darah rendah. Berapakah tingkat kebocoran yang diijinkan pada sphygmomanometer menurut Emergency Care Reseach institution?",
        options: ["a. 4 mmHg/menit", "b. 15 mmHg/menit", "c. 20 mmHg/menit", "d. 10 mmHg/menit", "e. 12 mmHg/menit"],
        answer: "b. 15 mmHg/menit"
    },
    {
        question: "Seorang elektromedis sedang melakukan pengoperasian waterbath . Manakah salah satu prosedur yang harus diperhatikan terlebih dahulu?",
        options: ["a. Isi waterbath dengan cairan untuk menjaga suhu konstan (air atau minyak). Pastikan bahwa setelah kontainer dipanaskan ditempatkan, tingkat cairan adalah antara 4 dan 5 cm dari atas tangki.", "b. Pastikan bahwa lokasi yang dipilih rata dan kuat untuk mendukung berat waterbath dengan aman ketika penuh cairan.", "c. Pilih suhu operasi menggunakan tombol untuk menyesuaikan parameter.", "d. Jika air digunakan sebagai pemanasan cairan, pastikan bahwa itu adalah bersih. Beberapa produsen merekomendasikan menambahkan produk yang mencegah pembentukan jamur atau alga.", "e. Instal instrumen kontrol yang diperlukan, seperti termometer dan circulators. Gunakan suku cadang tambahan disediakan untuk tujuan ini. Verifikasi posisi bola termometer atau probe termal untuk memastikan bahwa pembacaan benar."],
        answer: "a. Isi waterbath dengan cairan untuk menjaga suhu konstan (air atau minyak). Pastikan bahwa setelah kontainer dipanaskan ditempatkan, tingkat cairan adalah antara 4 dan 5 cm dari atas tangki."
    },
    {
        question: "Sphygmomanometer digunakan untuk mengukur tekanan darah pasien yang dilakukan secara non invasive. Apakah langkah pertama kali yang harus kita ambil pada saat pra-kalibrasi sebuah Sphygmomanometer air raksa?",
        options: ["a. Tempatkan alat pada tempat yang rata/ tidak miring.", "b. Siapkan alat ukur pembanding", "c. Catat spesifikasi alat", "d. Siapkan lembar kerja pengukuran", "e. Catat kondisi lingkungan tempat kalibrasi"],
        answer: "e. Catat kondisi lingkungan tempat kalibrasi"
    },
    {
        question: "Perawat melaporkan hasil perekaman EKG (elektrocardiogram) tidak tampil. Keluhan berupa lead III tampil, tetapi pada lead I dan lead II tidak tampil. Hasil pengamatan didapatkan adanya elektrode yang terlepas. Elektrode manakah yang memungkinkan penyebab permasalahan tersebut?",
        options: ["a. RL", "b. RA", "c. LL", "d. V1", "e. LA"],
        answer: "b. RA"
    },
    {
        question: "Saat mengoperasikan EKG, hasil perekaman EKG lead II muncul hasil perekaman (respon) akan tetapi pada lead I dan lead III tidak muncul tress (tidak respon).Bagaimana menurut saudara sebagai seorang elektromedis?",
        options: ["a. V1 terlepas", "b. Ekstrimitas RL terlepas", "c. Ekstrimitas RA terlepas", "d. Ekstrimitas LL terlepas", "e. Ekstrimitas LA terlepas"],
        answer: "e. Ekstrimitas LA terlepas"
    },
    {
        question: "Seorang Elektromedis melakukan analisis kerusakan pesawat rontgen pada rangkaian filamen. Pada saat dilakukan identifikasi dengan melakukan pengukuran pada trafo filamen diperoleh nilai resistansi sebesar 3 ohm dengan induktansi sebesar 20 mH. Jika dioperasikan pada sistim jaringan 1 phase dengan frekeunsi 50 hz Berapakah nilai impedansi trafo filamen tersebut?",
        options: ["a. 6,959 ohm", "b. 0,3 ohm", "c. 3 ohm", "d. 7,699 ohm", "e. 5,989 ohm"],
        answer: "a. 6,959 ohm"
    },
    {
        question: "Pada ruang radiologi di suatu rumah sakit didapati foto rontgen hasil dari alat automatic processing masih dalam kondisi basah. Elektromedis yang melakukan pengecekan mendapati bahwa motor roller bekerja dengan normal. Apa yang harus dilakukan oleh tenaga elektromedis yang menangani peralatan tersebut?",
        options: ["a. Melakukan pengecekan pada elemen pemanas pada bagian developer", "b. Melakukan pengecekan pada elemen pemanas dan blower pada bagian dryer", "c. Melakukan pengecekan pada elemen pemanas pada bagian fixer", "d. Melakukan pengecekan pada elemen pemanas pada bagian dryer", "e. Melakukan pengecekan pada blower pada bagian dryer"],
        answer: "b. Melakukan pengecekan pada elemen pemanas dan blower pada bagian dryer"
    },
    {
        question: "Seoarang elektromedis bersama-sama dengan tim pengadaan Rumah Sakit, sedang melakukan penilaian kebutuhan peralatan kesehatan yang akan digunakan untuk pelayanan di instalasi radiologi Apakah faktor yang harus diperhatikan pada kasus tersebut?",
        options: ["a. ketersediaan suku cadang, standar dokter radiologi, biaya pemeliharaan", "b. ketersediaan suku cadang, standard keselamatan dan biaya pemeliharaan", "c. ketersediaan suku cadang, standar manajemen dan biaya pemeliharaan.", "d. ketersediaan suku cadang, instruksi direktur, biaya pemeliharaan.", "e. ketersediaan suku cadang, standar radiographer dan biaya pemeliharaan"],
        answer: "b. ketersediaan suku cadang, standard keselamatan dan biaya pemeliharaan"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat infan warmer yang di njau dari aspek pengamanan. Aspek pengamanan apa saja yang dilakukan pada peralatan infan warmer ?",
        options: ["a. Memasang rangkaian pengaman dioda", "b. Memasang sensor kelembaban", "c. Memperdalam grounding listrik", "d. Memasang sensor suhu", "e. Memasang trafo isolasi."],
        answer: "c. Memperdalam grounding listrik"
    },
    {
        question: "Di suatu puskesmas terdapat sebuah sterilisator kering. Para petugas di puskesmas mengaku jarang menggunakan sterilisator kering tersebut dikarenakan display pada sterilisator tersebut tidak mengalami perubahan sama sekali ketika digunakan. Setiap kali digunakan display suhu selalu menunjukkan suhu yang tetap meskipun heater telah bekerja. Sebagai seorang tenaga teknik elektromedik apa yang akan anda lakukan?",
        options: ["a. Memeriksa sambungan kabel pada sterilisator", "b. Memeriksa tegangan input sterilisator", "c. Memeriksa sambungan pada display sterilisator", "d. Mengganti heater sterilisator", "e. Mengganti sensor suhu sterilisator"],
        answer: "e. Mengganti sensor suhu sterilisator"
    },
    {
        question: "Petunjuk disassembling alat hematology analyzer wajib dipahami oleh seorang teknisi . Dimanakah pada umumnya petunjuk tersebut dicantumkan ?",
        options: ["a. Instruction manual book", "b. Reagen book", "c. Hand book", "d. Service manual book", "e. Assembly book"],
        answer: "d. Service manual book"
    },
    {
        question: "Teknisi melakukan penggantian lampu (source lamp) pada spektrofotometer. Yang harus diperhatikan dan dilakukan teknisi diantaranya adalah ?",
        options: ["a. Melakukan kalibrasi", "b. Melakukan Uji fungsi", "c. Membersihkan alat", "d. Mematikan alat dan melepaskan dari tegangan supply", "e. Menyalakan alat"],
        answer: "a. Melakukan kalibrasi"
    },
    {
        question: "Sebuah alat Inkubator yang digunakan untuk Terapi di suatu rumah sakit, ternyata suhu udara di dalam alat tersebut dak sesuai dengan kebutuhan suhu bayi yang seharusnya.Langkah Apa yang dilakukanuntuk menangani menangani tersebut ?",
        options: ["a. Melakukan pemeriksaan catu daya listrik Inkubator", "b. Melakukan pemeliharaan ru n dan kalibrasi agar suhu heater/thermostat sesuai dengan standar", "c. Melakukan pemeriksaan, pengukuran, gan an spare part heater/termostat", "d. Melakukan pemeriksaan rangkaian heater/termostat.", "e. Melakukan pemeriksaan seluruh rangkaian pada inkubator"],
        answer: "d. Melakukan pemeriksaan rangkaian heater/thermostat."
    },
    {
        question: "Sebuah alat rontgen di sebuah Rumah Sakit ditempatkan di instalasi radiologi, alat tersebut berfungsi dengan baik dan telah digunakan selama 5 (lima) tahun dengan total penggunaan 20.000 kali ekspos, sedangkan usia teknis alat tersebut tertera 25.000 kali ekspos. Berapa persen-kah usia manfaat alat tersebut ?",
        options: ["a. 10", "b. 5", "c. 2", "d. 20", "e. 2,5"],
        answer: "d. 20"
    },
    {
        question: "Seoarang elektromedis bersama-sama dengan tim perencana Rumah Sakit, sedang melakukan penilaian kebutuhan peralatan kesehatan yang akan digunakan untuk pelayanan di instalasi radiologi Apakah tujuan penilaian pada kasus tersebut.?",
        options: ["a. pemenuhan alat sesuai keinginan dokter radiologi.", "b. pemenuhan alat sesuai keinginan direktur Rumah Sakit", "c. meningkatkan kinerja pelayanan kesehatan", "d. meningkatkan kinerja peralatan radiologi", "e. pemenuhan alat sesuai keinginan Radiograper"],
        answer: "c. meningkatkan kinerja pelayanan kesehatan"
    },
    {
        question: "Seorang pelaksana kalibrasi melaksanakan tugasnya mengkalibrasi ECG recorder. pada saat pengecekan fisik terliat indikator pemilihan lead ( lead selektor) tidak sesuai. tindakan apa yang harus diambil oleh pelaksana kalibrasi tersebut?",
        options: ["a. Tetap melanjutkan kalibrasi pada pemilihan yang sesuai", "b. Mencoret dari daftar order", "c. Tetap melanjutkan kalibrasi dengan mencoba-coba lead selektor yang sesuai", "d. Melaporakan ke pihak rumah sakit alatnya rusak", "e. Melaporkan ke pihak rumah sakit atau pelanggan bahwa alat tersebut tidak bisa dikalibrasi"],
        answer: "e. Melaporkan ke pihak rumah sakit atau pelanggan bahwa alat tersebut tidak bisa dikalibrasi"
    },
    {
        question: "Seorang petugas radiologi melaporkan permasalahan pada alat rontgen yang sedang digunakan untuk pemerisaan seoarang pasien. Menurut petugas bahwa gambar yang dihasilkan tingkat kehitamannya tidak sesuai dengan yang diharapkan. Setelah dilakukan pemeriksaan dan dianalisis terjadi kerusakan pada rangkaian space chareges compensator. Apakah tujuan pemasangan rangkaian pada kasus tersebut?",
        options: ["a. Agar arus filamen sesuai seting meskipun ada perubahan kV", "b. Agar resistansi tabung sesuai dengan seting meskipun ada perubahan kV", "c. Agar tegangan filamen sesuai seting meskipun ada perubahan kV", "d. Agar arus tabung sesuai dengan seting meskipun ada perubahan pada kV", "e. Agar tegangan tabung sesuai dengan seting meskipun arus filamen berubah"],
        answer: "d. Agar arus tabung sesuai dengan seting meskipun ada perubahan pada kV"
    },
    {
        question: "Radiografer di RS Harapan Sentosa melaporkan bahwa terjadi kerusakan pesawat rontgen yaitu jarum penunjuk arus tabung tidak berfungsi ketika ditekan tombol exposure. Setelah dilakukan pengecekan ternyata kabel penghubung penunjukan arus tabung terputus. Dimanakah posisi kabel-kabel putus tersebut terhubung?",
        options: ["a. Skunder trafo filamen", "b. Auto trafo", "c. Primer trafo filamen", "d. Sekunder HTT", "e. Primer HTT"],
        answer: "d. Sekunder HTT"
    },
    {
        question: "Rumah Sakit berencana melakukan pengadaan peralatan endoskopi untuk melengkapi peralatan ruang bedah. Alat Sterilisasi manakah yang digunakan untuk mensterilkan fi ber op k endoskopi ?",
        options: ["a. Cairan Desinfectan", "b. Oven", "c. Sterilisator basah", "d. Sterilisator kering", "e. Autoclave"],
        answer: "a. Cairan Desinfectan"
    },
    {
        question: "Seorang Elektromedis sedang melakukan kajian pemanfaatan alat rontgen di Rumah Sakit. Alat tersebut harus memenuhi persyaratan proteksi radiasi, salah satunya adalah justifikasi. Apakah yang dimaksud persyaratan tersebut?",
        options: ["a. harus menerapkan teknik dan prosedur yang tepat", "b. menentukan dosis radiasi yang sesuai dengan kondisi pasien", "c. harus dapat meningkatkan kualitas gambar yang dihasilkan", "d. manfaat radiasi lebih besar daripada risiko yang ditimbulkan", "e. harus mengacu pada nilai batas dosis dan terlampaui"],
        answer: "d. manfaat radiasi lebih besar daripada risiko yang ditimbulkan"
    },
    {
        question: "Seorang petugas datang ke instalasi pemeliharaan sarana Rumah Sakit (IPSRS), melaporkan kerusakan alat dental x-ray panoramic yang berada di instalasi Radiologi, petugas mengatakan bahwa ketika di operasikan alat bisa scaning tpi tidak keluar sinar-x. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut diatas ?",
        options: ["a. Cek tegangan catu daya dan perbaiki rangkaian exposure", "b. Cek driver motor scaning dan perbaiki rangkaian exposure", "c. Cek tegangan autotrafo dan perbaiki rangkaian exposure", "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure", "e. Cek autotrafo dan perbaiki rangkaian exposure"],
        answer: "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure"
    },
    {
        question: "Alat yang dipergunakan untuk memisahakan suatu larutan berdasarkan beratnya, Alat Tersebut adalah?",
        options: ["a. Blood Shaker", "b. Stirer Pneumatik", "c. Waterbath", "d. Stirer Magnetik", "e. Centrifuge"],
        answer: "e. Centrifuge"
    },
    {
        question: "Seorang elektromedis sedang melakukan kegiatan instalasi alat spektrofotometer. Manakah salah satu dari kegiatan tersebut ?",
        options: ["a. Gunakan semprit untuk membersihkan tempat sampel.yang menyerap banyak cairan .", "b. Sertakan layar kontrol dan keyboard dalam pembersihan.", "c. Matikan spektrofotometer dan lepaskan kabel sambungan listrik.", "d. Gunakan meja kerja yang stabil dan jauhkan dari peralatan yang menghasilkan getaran (sentrifugal, agitator).", "e. Bersihkan bagian luar instrumen dengan potongan kain dibasahi dengan air suling."],
        answer: "d. Gunakan meja kerja yang stabil dan jauhkan dari peralatan yang menghasilkan getaran (sentrifugal, agitator)."
    },
    {
        question: "Sebuah pesawat rontgen di suatu rumah sakit tidak menghasilkan hasil radiograf ketika dilakukan exposure. Tenaga elektromedis tersebut ingin memastikan bahwa filamen tidak putus.Apa yang harus dilakukan oleh seorang elektromedis untuk memastikan kondisi tersebut?",
        options: ["a. Mengukur hambatan pada filamen, jika besar berarti putus.", "b. Membongkar kolimator untuk melihat kondisi filamen.", "c. Mengukur tegangan pada filamen, jika kecil berarti putus.", "d. Membongkar tube housing untuk melihat kondisi filamen.", "e. Mengukur arus pada filamen, jika besar berarti putus."],
        answer: "a. Mengukur hambatan pada filamen, jika besar berarti putus."
    },
    {
        question: "Seorang Bidan yunior pada ruang NICU sedang menangani bayi prematur yang perlu perawatan intensif, dan dikejutkan dengan nilai kelebapan suhu bacaan pada display alat Baby Incubator yang digunakan dengan nilai yang sangat rendah melebihi standart kelembapan yang disarankan, hal tersebut diketahui Bidan pada saat akan melakukan pengecekan kesehatan pada tubuh Bayi, kemudian melaporkan kasus tersebut ke seorang Tenaga Tenknisi Elektromedis . Langkah dan tindakan apakah yang harus dilakukan Sebagai Teknisi Elektromedis ?",
        options: ["a. Memeriksa heater dan memperbaikinya jika tidak bekerja", "b. Memeriksa motor blower dan memperbaikinya jika tidak bekerja", "c. Memeriksa kotak akrilik dan memperbaikinya jika ada keretakan", "d. Memeriksa buzzer dan memperbaikinya jika tidak bekerja", "e. Memeriksa reservoir tank dan menambahkan air suling jika habis"],
        answer: "e. Memeriksa reservoir tank dan menambahkan air suling jika habis"
    },
    {
        question: "Seorang Elektromedis sedang melakukan pemeriksaan alat rontgen diagnostik di instalasi radiologi dan menganalisis kerusakan terjadi pada rangkaian filamen. yang dipasok pada tegangan 100 volt. Setelah dilakukan pengukuran nilai risistansi pada komponen SBR; mA control; mA limiter 10 ohm dan primer trafo filamen sebesar 3 ohm; sedangakan nilai induktansi pada primer trafo filamen terukur sebesar 628 ìH. Berapakah seharusnya nilai arus yang terukur pada rangkaian filamen tersebut?",
        options: ["a. 7,69 amper", "b. 1,99 amper", "c. 3,33 amper", "d. 0,156 amper", "e. 0,151 ampare"],
        answer: "b. 1,99 amper"
    },
    {
        question: "Seorang Tenaga elektromedis akan melakukan pemantauan fungsi alat Infusion Pump yang sesuai dengan Standar pengukuran dan kalibrasi. Peralatan apa saja yang dipersiapkan untuk kegiatan tersebut ?",
        options: ["a. Peralatan Tool kit, AVO meter, Pengukur kebocoran infus.", "b. Peralatan AVO meter, Tool kit, Leaked current meter dan cairan habis.", "c. Peralatan pemantau cairan habis, gelembung udara, dan AVO meter", "d. Peralatan Tool Kit, pemantau cairan habis, Mul meter dan thermohygrometer.", "e. Peralatan Mul meter, Tool Kit, Leaked current dan thermohygrometer"],
        answer: "e. Peralatan Mul meter, Tool Kit, Leaked current dan thermohygrometer"
    },
    {
        question: "Seorang Perawat melaporkan kepada Instalasi Pemeliharaan Sarana Rumah Sakit tentang alat Sphygmomanometer yang jarang di pantau fungsinya, sehingga dia merasa takut menggunakan alat tersebut. Apa yang dilakukan oleh tenaga elektromedis dalam kasus tersebut ?",
        options: ["a. Kebocoran slang dan air raksa", "b. Kebocoran slang dan akurasi penunjukkan", "c. Kebocoran air raksa dan tekanan", "d. Kebocoran Air raksa dan akurasi penunjukkan", "e. Kebocoran tekanan dan Akurasi penunjukkan"],
        answer: "e. Kebocoran tekanan dan Akurasi penunjukkan"
    },
    {
        question: "Di dalam Penyusunan rencana kerja tahunan pemeliharaan alat rontgen di layanan kesehatan harus memenuhi aspek keselamatan, baik keselelamatan listrik, mekanik dan utamanya adalah keselamatan radiasi. Apakah tujuan keselamatan radiasi pada pernyataan tersebut?",
        options: ["a. untuk melindungi pasien, pekerja radiasi dan masyarakat", "b. untuk mengurangi pengaruh radiasi pada pasien, pekerja radiasi dan lingkungan hidup", "c. untuk melindungi pasien, pekerja radiasi dan lingkungan hidup", "d. untuk mengurangi pengaruh radiasi pada pasien dan pekerja radiasi", "e. untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"],
        answer: "e. untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat Rontgen konvensional ke instalasi pemeliharaan sarana Rumah Sakit, petugas mengatakan bahwa pengaturan kV pada posisi 60 dan 65 tidak dapat dilakukan, sedangkan untuk pengatur lainnya tidak ada masalah (dapat diatur). Bagaimana tindakan sudara terhadap kasus tersebut diatas ?",
        options: ["a. Cek rangkaian primer tegangan tinggi -perbaiki tap-tap pada KV selector", "b. Cek rangkaian skunder tegangan tinggi - memperbaiki tap-tap pada HTT", "c. Cek rangkaian skunder tegangan tinggi -perbaiki tap-tap pada KV selector", "d. Cek rangkaian skunder tegangan tinggi -perbaiki tap-tap pada LVC", "e. Cek rangkaian primer tegangan tinggi -perbaiki tap-tap pada LVC"],
        answer: "a. Cek rangkaian primer tegangan tinggi -perbaiki tap-tap pada KV selector"
    },
    {
        question: "Seorang elektromedis yang baru saja bekerja melakukan pemaliharaan rutin pada fungsi pergerakan sliding dan tilting pada meja pasien. Elektromedis menggerakkan meja pasien arah kepala sampai posisi maksimal kemudian mencoba menggerakkan meja ke arah 90 derajat namun meja pasien tidak bergerak. Apa yang seharusnya dilakukan oleh elektromedis tersebut agar pergerakan tilting dapat dilakukan?",
        options: ["a. Menggerakkan sliding ke arah kaki terlebih dahulu", "b. Memeriksa limit switch sliding posisi kepala", "c. Menggerakkan tilting ke arah 45 derajat terlebih dahulu", "d. Memeriksa limit switch tilting 90 derajat.", "e. Memeriksa catu daya pada motor tilting"],
        answer: "a. Menggerakkan sliding ke arah kaki terlebih dahulu"
    },
    {
        question: "Monokromator atau filter pada alat spektrofotometer berfungsi untuk pemlihan panjang gelombang . Apakah yang harus disesuaikan untuk memilih panjang gelombang tersebut?",
        options: ["a. Detektor yang digunakan.", "b. Konsentrasi larutan standar.", "c. Suhu inkubasi.", "d. Lampu yang akan digunakan.", "e. Unsur yang akan diukur."],
        answer: "e. Unsur yang akan diukur."
    },
    {
        question: "Suc on pump digunakan secara ru n oleh bagian bedah pada rumah sakit untuk menghisap cairan tubuh pasien. Untuk menjaga agar motor pump bekerja dengan baik, apa yang akan dilakukan oleh tenaga elektromedis ?",
        options: ["a. Menggan oli motor secara berkala.", "b. Memanasi motor sebelum penggunan alat.", "c. Membersihkan motor dari cairan pasien secara berkala.", "d. Melilit ulang motor secara berkala.", "e. Ruangan sekitar motor harus dingin agar motor dak cepat panas."],
        answer: "a. Menggan oli motor secara berkala."
    },
    {
        question: "Seorang bidan di sebuah rumah sakit menanyakan kepada elektromedis tentang infant incubator yang baru, panasnya kapan stabil. Apa yang harus dilakukan elektromedis tersebut?",
        options: ["a. Mengukur daya pada heater yang digunakan", "b. Melihat buku service manual dari infant incubator", "c. Mengoperasikan sendiri dan diperhatikan display pada infant incubator", "d. Memberitahu ke bidan, bahwa panasnya stabil sama seperti infant incubator yang lain", "e. Melakukan pengukuran suhu dengan incu analyzer x"],
        answer: "b. Melihat buku service manual dari infant incubator"
    },
    {
        question: "Seorang perawat pada ruangan operasi melaporkan pada bagian IPS rumah sakit bahwa indicator ( ON ) peralatan suction pump berfungsi dengan baik tetapi tidak mau bekerja dengan optimal disebabkan karena alat tidak bisa menghisap cairan. Sebagai seorang teknisi alat kesehatan langkah apa yang paling tepat untuk mengatasi masalah tersebut ?",
        options: ["a. Mengadakan pembelian alat baru", "b. Menambal selang yang bocor", "c. Membersihkan motor dan memberikan minyak pada sistem piston", "d. Mengganti tabung dengan yang baru", "e. Mengecek fungsi bagian - bagian suction pump"],
        answer: "c. Membersihkan motor dan memberikan minyak pada sistem piston"
    },
    {
        question: "Melakukan pengukuran dengan menggunakan blanko adalah salah satu tahapan pengoperasian alat spektrofotometer . Apa parameter yang ingin didapatkan pada kegiatan tersebut?",
        options: ["a. Tegangan input detector sama dengan nol.", "b. Tegangan output detector sama dengan nol.", "c. Intensitas lampu sama dengan nol", "d. Intensitas sama dengan nol.", "e. Absorban sama dengan nol."],
        answer: "e. Absorban sama dengan nol."
    },
    {
        question: "Seoarng Elektromedis dilibatkan sebagai tim perencanaan pemenuhan kebutuahan perlatan radiologi yang berupa C-Arm Unit. Tim bersepakat bahwa sesuai standar pelayanan radiologi setiap peralatan yang memanfaatkan radiasi pengion harus mempunyai izin pemanfaatan alat tersebut. Kemanakah usulan perijinan tersebut ditujukan?",
        options: ["a. LIPI", "b. BATAN", "c. KEMENKES", "d. LITBANGKES", "e. BAPETEN"],
        answer: "e. BAPETEN"
    },
    {
        question: "Berikut ini merupakan berbagai macam fotometer. kecuali ?",
        options: ["a. AAS", "b. Flamefotometer", "c. Automatic Analyzer Spectrofotometer", "d. pH meter", "e. Spektrofotometer"],
        answer: "d. pH meter"
    },
    {
        question: "Rumah sakit merencanakan membuat ruang rehabilitasi medic, perkirakan alat kesehatan apa saja yang dibutuhkan untuk ruangan tersebut?",
        options: ["a. Ecg , tensimeter , Defibrilator , suction Bedside monitorl.", "b. Shortwave Diathermy , Microwave Diathermy , Infrared , stimulator , traksi", "c. Meja operasi , lampu operasi , electrosurgery , suction, anaesthesi", "d. Bedside monitor , defibrillator , ventilator , infuse pump ,syringe pump", "e. Cardiotochograph , Doppler , Electrocardiograph"],
        answer: "b. Shortwave Diathermy , Microwave Diathermy , Infrared , stimulator , traksi"
    },
    {
        question: "Dokter bedah di suatu Rumah Sakit hendak melakukan pembedahan pada seorang pasien di ruang operasi menggunakan Electrosurgery Unit (ESU). ESU yang dioperasikan menggunakan mode monopolar. Namun ketika proses pembedahan berlangsung terdapat arus bocor pada elektroda. Langkah pemeriksaan apakah yang sebaiknya dilakukan oleh pihak Instalasi Pemeliharaan Sarana medik (IPS) Rumah Sakit ?",
        options: ["a. Memeriksa masalah sambungan kabel elektroda", "b. Memastikan fuse masih bekerja", "c. Memeriksa catu daya yang didapat sesuai spesifikasi alat", "d. Melakukan pengukuran tegangan dari jala-jala PLN", "e. Memastikan elektroda ground terpasang"],
        answer: "e. Memastikan elektroda ground terpasang"
    },
    {
        question: "Seorang elektromedis sedang melakukan prosedur instalasi waterbath yang direkomendasikan oleh WHO . Manakah salah satu kegiatan tersebut? :",
        options: ["a. Mengisi waterbath dengan cairan untuk menjaga suhu konstan (air atau minyak). Pastikan bahwa setelah kontainer dipanaskan ditempatkan, tingkat cairan adalah antara 4 dan 5 cm dari atas tangki.", "b. Memilih suhu operasi menggunakan tombol untuk menyesuaikan parameter.", "c. Memastikan bahwa lokasi yang dipilih rata dan kuat untuk mendukung berat waterbath dengan aman ketika penuh cairan.", "d. Jika air digunakan sebagai pemanasan cairan, pastikan bahwa itu adalah bersih. Beberapa produsen merekomendasikan menambahkan produk yang mencegah pembentukan jamur atau alga.", "e. Menyediakan instrumen kontrol yang diperlukan, seperti termometer dan circulators. Gunakan suku cadang tambahan disediakan untuk tujuan ini. Verifikasi posisi bola termometer atau probe termal untuk memastikan bahwa pembacaan benar."],
        answer: "c. Memastikan bahwa lokasi yang dipilih rata dan kuat untuk mendukung berat waterbath dengan aman ketika penuh cairan."
    },
    {
        question: "Pada saat dilakukan inkubasi di alat waterbath dengan menggunakan heater basah tiba-tiba terjadi ledakan kecil di heater nya . Apakah tindakan yang dilakukan untuk menghindari kejadian tersebut?",
        options: ["a. Melakukan pemeriksaan bagian timer", "b. Melakukan pemeriksaan bagian pengaturan panas.", "c. Melakukan pemeriksaan level (volume) air pada bak waterbath.", "d. Melakukan pemeriksaan bagian pengaturan panas dan membersihkan bak air pada waterbath.", "e. Melakukan pemeriksaan dan perbaikan bagian timer dan pengaturan panas."],
        answer: "c. Melakukan pemeriksaan level (volume) air pada bak waterbath."
    },
    {
        question: "Pada sebuah pesawat rontgen ditemukan permasalahan yaitu hasil foto radiograf yang tercetak pada film terdapat garis- garis putih. Apa yang harus dilakukan oleh elektromedis tersebut?",
        options: ["a. Mengganti kaset film dengan baru", "b. Memperbaiki posisi shutter.", "c. Mengecek posisi dari cermin kolimator.", "d. Memperbaiki lampu kolimator.", "e. Mengecek motor penggerak moving grid."],
        answer: "e. Mengecek motor penggerak moving grid."
    },
    {
        question: "Setelah melakukan proses pemeliharaan adalah pencatatan. Pencatatan yang perlu dilakukan adalah?",
        options: ["a. Mencatat di kartu pemeliharaan alat.", "b. Meminta tanda tangan pengguna, bukti pekerjaan alat telah dilakukan", "c. Mencatat pekerjaan alat lain yang akan dilakukan berikutnya.", "d. Mengisi Lembar kerja pemeliharaan/ workorder.", "e. Mengisi laporan kerja pemeliharaan."],
        answer: "c. Mencatat pekerjaan alat lain yang akan dilakukan berikutnya."
    },
    {
        question: "Pada pemeriksaan gigi pasien diperlukan dental chair. Dental chair ini sangat membantu dokter dan perawat gigi untuk mendapatkan posisi pemeriksaan pasien yang nyaman dan tepat. Posisi duduk pasien dan sandaran punggungnya dapat digerakan naik dan turun. Apakah teknik sistem pengungkitan yang digunakannya ?",
        options: ["a. Pneumatic dan udara", "b. Hidraulic dan air", "c. Hidraulic dan udara", "d. Pneumatic dan hidraulic", "e. Hidraulic dan oli"],
        answer: "d. Pneumatic dan hidraulic"
    },
    {
        question: "Pada saat penempatan Balance sudah sesuai dengan syarat penempatan. Salah satunya diletakkan di tempat yang datar dan rata, Air bubble pada Level Indikator tidak tepat di tengah. Sebagai seorang teknisi, untuk merubah posisi bubble dengan cara mengatur/memutar?",
        options: ["a. Adjustment", "b. Enter", "c. Scroll Up dan Down", "d. Leveling Feet", "e. Print Out"],
        answer: "d. Leveling Feet"
    },
    {
        question: "Pada suatu ketika seorang perawat yang akan menggunakan alat suction pump. Sebelum mengoperasikan alat tersebut perawat melakukan instalasi terlebih dahulu terhadap alat tersebut ketika semua bagian-bagian dari alat tersebut sudah terpasang perawat melakukan kalibrasi atau pengecekan sebelum alat benar-benar digunakan. Ketika alat tersebut diuji coba menggunakan tangan perawat dengan cara menutup lubang chateter, ternyata terdapat masalah pada alat tersebut, suction pump tidak dapat menghisap dan juga pada meter indikator tekanan tidak terlihat adanya pergerakan jarum. Apa penyebab dari trouble diatas?",
        options: ["a. Terdapat kebocoran pada slang", "b. Adanya kerusakan pada regulator pengatur", "c. Fuse sudah tidak dapat berfungsi", "d. Rusaknya filter suction pump", "e. Pemasangan klep terbalik dan kurang rapatnya menutup tabung"],
        answer: "e. Pemasangan klep terbalik dan kurang rapatnya menutup tabung"
    },
    {
        question: "Seorang perawat di ICU menanyakan kepada petugas kalibrasi tentang hasil kalibrasi infusion pump dimana kesalahan flow ratenya tinggi, padahal infusion pumpnya gak pernah rusak. Analisa apa yang harus disampaikan oleh petugas kalibrasi",
        options: ["a. Menjelaskan bahwa kesalahan flow rate tinggi karena usia alat", "b. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh tinggi cairan infus", "c. Menjelaskan bahwa kesalahan flow rate tinggi karena suhu ruangan yang tidak sesuai", "d. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh infusion set yang digunakan", "e. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh jenis cairan yang digunakan"],
        answer: "d. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh infusion set yang digunakan"
    },
    {
        question: "Seorang elektromedis sedang melakukan tugas pokoknya yaitu Menyusun rencana kerja tahunan pemeliharaan alat rontgen di instalasi radiologi. Dia melakukan pemeriksaan, pembersihan dan pengukuran secara berkala agar kondisi alat tersebut selalu terjaga dan menghasilkan luaran yang stabil. Jenis katagori pemeliharaan manakah yang dilakukan petugas tersebut?",
        options: ["a. corrective maintenance", "b. safety inspections", "c. system upgrade", "d. image quality check", "e. preventive maintenance"],
        answer: "e. preventive maintenance"
    },
    {
        question: "Sebuah alat USG dilaporkan mengalami hasil cetak yang tidak normal, dimana hasil yang biasanya dominan hitam dengan objek cenderung putih, menjadi terbalik dengan objek yang berwarna putih. Apa tindakan yang dilakukan dengan hal tersebut?",
        options: ["a. Menganti thermal head pada printer", "b. Menganti jenis kertas yang digunakan", "c. Memindahkan input data gambar pada printer", "d. Mengubah pengaturan positif/negatif hasil cetak pada printer", "e. Menganti kabel data printer"],
        answer: "d. Mengubah pengaturan positif/negatif hasil cetak pada printer"
    },
    {
        question: "Pada Waterbath apabila ada keluhan suhu chamber tidak sesuai dengan suhu setting. Sebagai teknisi analisa kerusakannya adalah?",
        options: ["a. Air aqua pada resevoir kosong, rangkaian blower rusak", "b. Rangkaian Power Suply rusak, Switch ON/Off rusak", "c. Sensor rusak", "d. Regulator humidity rusak.", "e. Gangguan pada : sensor, temperatur kontrol, rangkaian display, rangkaian blower"],
        answer: "e. Gangguan pada : sensor, temperatur kontrol, rangkaian display, rangkaian blower"
    },
    {
        question: "Lampu operasi dak sama dengan lampu-lampu pada umumnya, karena lampu operasi harus memiliki syarat : dak boleh panas dan bayangan pada obyek, karena dapat mengganggu proses ndakan operasi, untuk itu lampu operasi memakai lampu halogen. Hal yang perlu diperha kan dalam penggan an lampu halogen adalah ?",
        options: ["a. Lampu harus sama nggi.", "b. Warna lampu halogen kuning.", "c. Posisi lensa okuler dan obyek f harus pada posisi menyilang", "d. Mengatur posisi lampu.", "e. Lampu Tidak boleh disentuh dengan tangan langsung"],
        answer: "e. Lampu Tidak boleh disentuh dengan tangan langsung"
    },
    {
        question: "Saat ini untuk pemantuan janin menggunakan Electronic Fetal Monitoring (EFM) atau yang di kenal juga sebagai Cardiotocograph (CTG) dapat dihubungkan melalui Wi-Fi atau bluetooth. Sehingga alat ini memungkinkan klien melakukan monitoring di rumah dan data di kirim kepada tenaga kesehatan yang menangani, klien juga dapat berkonsultasi segera dengan tenaga kesehatan yang menangani. Apa kekurangan menggunakan alat tersebut?",
        options: ["a. Dapat digunakan pada membran yang masih intak", "b. Alat bantu visual fetal heart rate", "c. Mencatat fetal heart rate", "d. Dapat digunakan dalam beberapa stage persalinan", "e. Untuk kehamilan multiple tekniknya lebih sulit"],
        answer: "e. Untuk kehamilan multiple tekniknya lebih sulit"
    },
    {
        question: "Petugas kalibrasi pada saat melakukan kalibrasi centrifuge melihat indikator baterai pada alat tachometer mengalami penurunan. Tindakan apa yang harus dilakukan oleh petugas kalibrasi tersebut?",
        options: ["a. Mengukur tegangan pada baterai", "b. Menghentikan kalibrasi", "c. Menghentikan kalibrasi dan data yang digunakan adalah data yang terakhir", "d. Mengganti baterai dan melanjutkan kalibrasi", "e. Melanjutkan kalibrasi"],
        answer: "b. Menghentikan kalibrasi"
    },
    {
        question: "Seorang Elektromedis mendapat tugas Menyusun rencana kerja tahunan pemeliharaan alat fluoroscopi di instalasi radiologi. Dia melakukan kegiatan inspekai kuratif yang terjadwal rutin setiap tahun. Apa sajakah yang dilakukan pada kegiatan tersebut ?",
        options: ["a. mengecek semua kondisi lampu indikator", "b. mengecek akurasi nilai tegangan tabung (KVp).", "c. mengecek audible dan visual alarm", "d. mengecek kondisi kabel power", "e. mengecek sistem pergerakan tube stand."],
        answer: "b. mengecek akurasi nilai tegangan tabung (KVp)."
    },
    {
        question: "Seorang Elektromedis sedang melakukan kajian pemanfaatan alat rontgen di Rumah Sakit. Alat tersebut harus memenuhi persyaratan proteksi radiasi, salah satunya adalah optimisasi Apakah yang dimaksud pernyataan tersebut?",
        options: ["a. dosis radiasi yang sesuai dengan kondisi pasien", "b. dosis radiasi serendah mungkin untuk mencapai tujuan diagnostik.", "c. paparan radiasi serendah mungkin yang dapat dicapai", "d. harus dapat meningkatkan kualitas gambar yang dihasilkan", "e. harus menerapkan teknik dan prosedur yang tepat"],
        answer: "b. dosis radiasi serendah mungkin untuk mencapai tujuan diagnostik."
    },
    {
        question: "Pada sebuah ESU (Electrosurgical Unit) telah dianalisa bahwa alat tersebut mengalami kerusakan, yaitu electrode tidak mengeluarkan HF. Tindakan apa yang harus dilakukan untuk mengatasi hal tersebut ?",
        options: ["a. Mengecek adanya HF", "b. Cek electrode dan modul pembangkit HF", "c. Cek kabel power supply", "d. Cek sistem grounding di jaringan kabel (terputus atau tidak)", "e. Cek nilai grounding yang tidak bagus"],
        answer: "b. Cek electrode dan modul pembangkit HF"
    },
    {
        question: "Seorang teknisi melakukan penggantian lampu (source lamp) pada alat spektrofotometer.Apakah yang harus diperhatikan dan dilakukan terlebih dahulu?",
        options: ["a. Menyalakan alat.", "b. Melakukan kalibrasi", "c. Melakukan Uji fungsi", "d. Membersihkan alat", "e. Mematikan alat dan melepaskan dari tegangan supply"],
        answer: "e. Mematikan alat dan melepaskan dari tegangan supply"
    },
    {
        question: "Seorang petugas kalbrasi melakukan kalibrasi infant incubator, dari hasil pengukuran terlihat bahwa ada noise suara yang cukup tinggi. Apa yang harus dilakukan elektromedis tersebut?",
        options: ["a. Memindahkan infant incubator", "b. Menutupi infant incubator dengan selimut", "c. Mengganggap wajar kalau noise tinggi", "d. Memastikan tidak ada suara dari luar", "e. Meyakini itu hasil yang sangat valid"],
        answer: "d. Memastikan tidak ada suara dari luar"
    },
    {
        question: "Hematology analyzer berfungsi untuk menghitung sel darah yaitu RBC,WBC dan Trombosit .Apakah metode yang dipakai pada pengukuran tersebut ?",
        options: ["a. pemisahan unsur", "b. fotometri", "c. absorpsi", "d. electrical impedance", "e. laser scattering"],
        answer: "d. electrical impedance"
    },
    {
        question: "Seorang radiografer di RS. Hayati mengeluhkan kepada elektromedis bahwa pada pemilihan teknik radiografi didapati waktu yang dibutuhkan mulai tombol ready ditekan sampai lampu indikator ready menyala lebih lama dari biasanya. Sebagai seorang elektromedis yang harus melakukan analisis kerusakan, bagian apa yang mungkin mengalami kerusakan?",
        options: ["a. Shutter.", "b. Lampu indikator ready.", "c. Rectifier.", "d. Timer radiografy.", "e. Standby resistor."],
        answer: "e. Standby resistor."
    },
    {
        question: "Seorang radiografer di suatu rumah sakit mengeluhkan nilai arus tabung yang selalu berubah ketika dilakukan pengaturan tegangan tabung. Ketika tegangan tabung dinaikkan atau diturunkan maka nilai arus tabung juga mengikuti. Analisis kerusakan yang mungkin terjadi pada pesawat rontgen tersebut adalah?",
        options: ["a. KV selector", "b. Line voltage compesator.", "c. mA regulator.", "d. Space charge compensator.", "e. Line voltage selector"],
        answer: "d. Space charge compensator."
    },
    {
        question: "Pengukuran sample pada pH meter harus dilakukan sesuai dengan prosedur supaya hasilnya akurat . Agar alat tersebut siap digunakan untuk pengukuran maka harus dilakukan kegiatan kalibrasi internal. Apakah metode yang paling tepat dilakukan?",
        options: ["a. 1point dengan 2 jenis buffer", "b. 1point dengan buffer pH 4", "c. 1point dan 2point dengan semua jenis buffer", "d. 1point atau 2point dengan nilai buffer yang direkomendasikan", "e. 1point dengan buffer pH 7"],
        answer: "d. 1point atau 2point dengan nilai buffer yang direkomendasikan"
    },
    {
        question: "Setelah melalui proses pengadaan barang dan pemasangan alat rontgen mobile,selanjutnya dilakukan manajemen asset pada alat tersebut . Cara pengkodean yang terbaik adalah?",
        options: ["a. Menggunakan QRCODE.", "b. Menggunakan ECRI atau SIMAK BMN.", "c. Menggunakan RFID.", "d. Menggunakan kode warna.", "e. Menggunakan barcode"],
        answer: "b. Menggunakan ECRI atau SIMAK BMN."
    },
    {
        question: "Seorang elektromedis bersama tim penerima barang sedang melakukan proses penerimaan peralatan radiologi yaitu sebuah unit digital radiography (DR). Penerimaan alat tersebut melalui pemeriksaan yang meliputi penilaian fisik dan kelengkapan alat, salah satu diantaranya adalah kelengkapan dokumen teknis yang terdiri dari certificate of origin (CoO) dan buku petunjuk ( pengopersaian, servis, instalsi dan wiring diagram). Apakah yang dimaksud CoO pada kasus tersebut?",
        options: ["a. Surat kelengkapan buku petunjuk DR", "b. Sertifikat kalibrasi DR", "c. Surat keterangan asal DR", "d. Sertifikat pengujian DR", "e. Surat keterangan spesifikasi DR"],
        answer: "c. Surat keterangan asal DR"
    },
    {
        question: "Seorang Elektromedis bersama petugas penyedia peralatan sedang melakukan uji fungsi general x-ray unit yang terpasang tetap di instalasi Radiologi. Kegiatan tersebut dilakukan untuk mengetahui kinerja alat sesuai dengan standard keamanan dan standard dari pabrik. Bagaimanakah pelaksanaan kegiatan tersebut ?",
        options: ["a. pengujian pada komponen; kinerja output dan aspek keselamatan", "b. pengujian pada hasil paparan radiasi dan kualitas gambar", "c. pengujian hasil paparan radiasi pada pasien dan kualitas gambar", "d. pengujian pada pasien setelah dilakukan uji keselamatan alat", "e. pengujian pada kualitas gambar setelah dilakukan pemeriksaan pasien"],
        answer: "a. pengujian pada komponen; kinerja output dan aspek keselamatan"
    },
    {
        question: "Seorang Teknisi Elektromedis harus mampu melakukan penempatan dan penyimpanan peralatan elektromedik. Syarat Penempatan Timbangan Analitik adalah?",
        options: ["a. Tidak boleh terkena cahaya matahari secara langsung", "b. Harus ditempatkan ditempat yang miring dan di meja yang rapuh", "c. Diletakkan di ruangan yang terkena hembusan angin/kipas secara langsung", "d. Diletakkan di ruangan dengan suhu dingin/lembab", "e. Diletakkan di ruangan dengan suhu panas"],
        answer: "a. Tidak boleh terkena cahaya matahari secara langsung"
    },
    {
        question: "Seorang tenaga Elektromedis telah melakukan Perawatan dan pemeliharaan rutin pada alat Infant Warmer yang telah selesai dipakai untuk tindakan penanganan pada seorang bayi yang telah lahir, alat Infant Warmer tersebut akan dipakai kembali besok pagi sesuai jadwal akan dilakukan persalinan intensif yang tercatat pada Ruang NICU. Manakah dibawah ini yang termasuk perawatan dasar termasuk pemeliharaan pada alat tersebut setelah selesai digunakan ?",
        options: ["a. Melakukan kalibrasi alat setiap hari", "b. Mengganti Fuse baru setelah alat digunakan", "c. Menutup alat dengan kain pelindung", "d. Mengganti heater baru setiap selesai penggunaan alat", "e. Melepas kabel power dari sumber tegangan PLN jika alat sudah selesai digunakan"],
        answer: "e. Melepas kabel power dari sumber tegangan PLN jika alat sudah selesai digunakan"
    },
    {
        question: "Sebagai seorang tenaga Elektromedis tentunya mengenal beberapa kegunaan peralatan-peralatan Life Support beserta fungsinya, dan timbulnya permasalahan akan dideteksi oleh sensor kemudian menginformasikan lewat alarm / bunyi buser. Dibawah ini adalah alarm yang akan berbunyi bila mana alat Syringe Pump mengalami masalah",
        options: ["a. Low pressure", "b. High temperature", "c. Low Temperature", "d. Low tidal volume", "e. Occlusion"],
        answer: "e. Occlusion"
    },
    {
        question: "Suatu alat EKG ditempatkan di ruang ICU. Semua aksesoris dan kabel telah terpasang dengan baik. Setting alat sudah sesuai SOP, saat ditekan tombol start ternyata kertas EKG tidak keluar. Apakah yang harus dilakukan oleh seorang teknisi elektromedik untuk mengatasi masalah ini ?",
        options: ["a. Periksa apakah kertasnya terpasang", "b. Periksa apakah motornya rusak", "c. Periksa apakah sekringnya putus", "d. Periksa dan ukur apakah sumber tegangan ada", "e. Periksa dan ukur apakah kabel power putus"],
        answer: "b. Periksa apakah motornya rusak"
    },
    {
        question: "Defibrilator termasuk jenis peralatan Life Support yang digunakan untuk memberikan energi kejut listrik kepasien sehingga mengaktifkan kembali aktivitas jantung pada pasien yang mengalami gangguan denyut jantung tidak stabil. Terdapat beberapa Pemeliharaan pada Alat Defibrilator tersebut. Manakah yang termasuk pemeliharaan rutin yang harus dilakukan pada alat Defibrilator tersebut ?",
        options: ["a. Mengecek kabel pasien EKG", "b. Mengecek fungsi eksternal paddle", "c. Mengecek kabel power dan grounding", "d. Mengecek fungsi internal paddle", "e. Mengecek fungsi semua bagian alat sebelum digunakan"],
        answer: "e. Mengecek fungsi semua bagian alat sebelum digunakan"
    },
    {
        question: "Seorang Perawat sedang menggunakan alat Infus Pump untuk tindakan penanganan pasiennya yang pasca menjalani operasi terjadi masalah pada alat tersebut yaitu terjadi occlusion alarm, kemudian kejadian tersebut dilaporkan kepada Kepala IPSRS. Langkah dan tindakan apakah yang dapat dilakukan oleh tenaga Elektromedis untuk menangani permasalahan tersebut agar alat Infus Pump bisa digunakan Kembali?",
        options: ["a. Mengecek keypad alat", "b. Melepas selang infus dan membersihkan sumbatannya sampai cairan infus benar-benar mengalir lancar", "c. Melakukan Kalibrasi ulang pada alat.", "d. Mengganti sensor occlusion pada alat", "e. Mengecek Motor pearstaltic"],
        answer: "b. Melepas selang infus dan membersihkan sumbatannya sampai cairan infus benar-benar mengalir lancar"
    },
    {
        question: "centrifuge adalah alat yang digunakan memisahkan suatu partikel larutan berdasarkab berat jenis dengan memanfaatkan gaya centrifugal.Dengan centrifuge gaya sentrifugal yang ditimbulkan dari putaran motor lebih besar dibandingkan dengan?",
        options: ["a. Gaya Gesek", "b. Gaya Sentrifetal", "c. Kecepatan Putaran", "d. Gaya Gravitasi", "e. Jari-jari tabung"],
        answer: "d. Gaya Gravitasi"
    },
    {
        question: "Saat sedang mengoperasikan Hematology Analyzer ada alat tersebut memunculkan pesan error. Apakah yang seharusnya dilakukan oleh teknisi user ?",
        options: ["a. Membongkar alat dan mengecek dibagian .", "b. Mengecek di menu aplikasi software dan membaca petunjuk pada service manual book selanjutnya melakukan sesuai petunjuk tersebut.", "c. Mengecek di menu aplikasi software dan membaca petunjuk pada service manual book.", "d. Menghubungi pihak supplier", "e. Membongkar alat dan mengecek pada bagian sesuai pesan error"],
        answer: "b. Mengecek di menu aplikasi software dan membaca petunjuk pada service manual book selanjutnya melakukan sesuai petunjuk tersebut."
    },
    {
        question: "Pada sebuah Rumah Sakit Umum sering kita jumpai Peralatan Ventilator pada ruang Intensive Care Unit (ICU), dimana ruangan ini merupakan tempat perawatan yang membutuhkan perhatian khusus dan ekstra juga tenaga medisnya baik tenaga Dokter, Perawat juga Tenaga Elektromedis yang ahli dibidang tersebut. Apa yang termasuk tujuan penggunaan alat Ventilator secara general dibawah ini",
        options: ["a. Membantu terhindarnya seseorang dari kematian", "b. Membantu meningkatkan volume paru-paru", "c. Membantu tekanan udara dalam tubuh", "d. Membantu stabilisasi ruang dada", "e. Membantu mencegah sesak nafas"],
        answer: "b. Membantu meningkatkan volume paru-paru"
    },
    {
        question: "Seorang Elektromedis bersama-sama dengan Radiographer dan petugas penyedia peralatan radiologi sedang melakukan uji coba computed radiography (CR) yang terpasang di instalasi Radiologi. Uji coba alat tersebut dilakukan untuk mengetahui kinerja alat sesuai dengan standard keamanan dan pelayanan radiologi. Bagaimanakah pelaksanaan pada kasus tersebut ?",
        options: ["a. pengujian pada pasien sebelum dilakukan uji kinerja alat", "b. pengujian pada kinerja output; keselamatn listrik dan radiasi", "c. pengujian pada kinerja output; keselamatn radiasi; listrik dan mekanik", "d. pengujian pada pasien setelah dilakukan uji fungsi", "e. pengujian pada komponen; kinerja output dan aspek keselamatan"],
        answer: "d. pengujian pada pasien setelah dilakukan uji fungsi"
    },
    {
        question: "Sebuah Dental Unit dilaporkan rusak dengan keluhan tidak dapat digunakan untuk menghisap, sedang fungsi lainnya berfungsi dengan baik. Apakah langkah awal yang dilakukan ?",
        options: ["a. Memeriksa saluran air", "b. Memeriksa Saluran buang", "c. Memeriksa handpiece", "d. Memeriksa saluran angin", "e. Memeriksa valve di rangkaian control"],
        answer: "d. Memeriksa saluran angin"
    },
    {
        question: "Suction pump banyak digunakan pada saat kegiatan operasi di ruang bedah yaitu untuk menghisap cairan pada pasien. Seorang user sedang mengoperasikan suction pump. Section pump tersebut sudah terhubung dengan sumber tegangan PLN dan saklar sudah pada posisi ON . Indikator tegangan tidak menyala sehingga alat gagal untuk dioperasikan. Penyebabnya adalah....",
        options: ["a. Tegangan yang putus atau kesalahan listrik", "b. Kebocoran pada tabaung penghisap", "c. Pegangan lepas", "d. Katup pada suction pump tersumbat", "e. Karet penutup di vacum regulator telah usang"],
        answer: "a. Tegangan yang putus atau kesalahan listrik"
    },
    {
        question: "Rumah sakit Soedono Kota Madiun memiliki alat sterilisator basah, yaitu alat autoclave. Alat tersebut mengalami kerusakan atau terdapat masalah pada saat dioperasikan. Masalah yang terdapat pada alat tersebut yaitu alat diak dapat panas dan tidak bertekanan tinggi atau dapat dikatakan alat tidak dapat bekerja. Apa yang harus dilakukan oleh seorang teknisi elektromedik dalam perbaikan alat tersebut?",
        options: ["a. Chamber berkerak atau terjadi kebocoran", "b. Fuse rusak", "c. Termostat rusak", "d. Kurangnya air yang ada di dalam tabung autoclave", "e. Butuh restart ulang pada alat autoclave"],
        answer: "b. Fuse rusak"
    },
    {
        question: "Pada peswat rontgen dijumpai kendala berupa tidak munculnya bayangan laten pada film saat dilakukan exposure. Pengecekan yang dilakukan oleh elektromedis didapati bahwa trafo filamen bekerja normal. Push button ready dan exposure juga bekerja normal. Apa tindakan yang harus dilakukan oleh tenaga elektromedis yang menangani kendala tersebut?",
        options: ["a. Mengecek trafo tegangan tinggi", "b. Mengecek line voltage compensator", "c. Mengecek auto trafo", "d. Mengecek stabilisator", "e. Mengecek space charge compesantor"],
        answer: "a. Mengecek trafo tegangan tinggi"
    },
    {
        question: "Melakukan pengukuran dengan larutan standar adalah salah satu tahapan pengoperasian alat spektrofotometer . Apa tujuan dari kegiatan tersebut?",
        options: ["a. Kalibrasi internal.", "b. Nilai absorban sama dengan nol.", "c. Inkubasi sampel.", "d. Zero adjustment.", "e. Menstabilkan tegangan lampu."],
        answer: "a. Kalibrasi internal."
    },
    {
        question: "Berdasarkan analisa kerusakan terhadap alat Suction Pump Portable yang mengalami kurangnya daya hisap, sedangkan kondisi accessories seperti selang dan botol penampungan dalam keadaan normal. Maka untuk mengatasi hal tersebut, tindakan apa yang dilakukan. Tindakan perbaikan yang harus dilakukan?",
        options: ["a. Mengganti selang dengan yang baru", "b. Memeriksa klep hisap & klep buang", "c. Mengganti Filter", "d. Mengganti oli", "e. Overhaull"],
        answer: "b. Memeriksa klep hisap & klep buang"
    },
    {
        question: "Seorang Perawat melaporkan permasalahan pada alat Infan Warmer yang akan digunakan untuk tindakan terhadap bayi pasca dilahirkan, pada display alat menunjukkan suhu ruang yang terbaca stabil sesuai setting suhu alat 35*C, permasalahan terjadi setelah 25 menit berlalu tiba-tiba pada dispaly menunjukkan nilai bacaan suhu ruang lebih tinggi dari nilai setting suhu dan terjadi bunyi buser alarm . Sebagai tenaga Elektromedis langka awal untuk menganalisa kerusakan yang terdapat pada Alat Infan Warmer tersebut adalah",
        options: ["a. Kerusakan pada board", "b. Display tidak mendapatkan inputan", "c. Tombol setting tidak berfungsi", "d. Kerusakan pada sensor", "e. Tidak ada inputan yang masuk ke display"],
        answer: "d. Kerusakan pada sensor"
    },
    {
        question: "Faktor penting dalam pemasangan atau mempertahankan traksi yaitu...",
        options: ["a. Tali utama yaitu biasanya dipasang pada rangka sebaiknya menimbulkan gaya tarik yang segaris dengan sumbu panjang normal tulang yang patah", "b. Alat-alat penyongkongnya sebaiknya seimbang dengan pemberat untuk menjamin agar reduksi dapat diperthankan secara stabil", "c. Tulang yang menonjol harus diberi perhatian khusus dengan memberikan lapisan secukupnya", "d. Tali traksi sebaiknya dapat bergerak bebas melalui kerekan", "e. Kontraksi harus dipertahankan agar traksi tetap efektif."],
        answer: "a. Tali utama yaitu biasanya dipasang pada rangka sebaiknya menimbulkan gaya tarik yang segaris dengan sumbu panjang normal tulang yang patah"
    },
    {
        question: "Sebuah alat Suction Pump Unit mengalami daya hisap yang tidak sesuai dengan presure meter penunjukan pada indicator,Sedangkan kondisi Motor hisap terkoreksi normal. Hasil pengujian menunjukkan : Pada pressure meter, jarum indicator menunjukkan tekanan yang besar, namun kemampuan daya hisap kecil. Sesuai dengan blok diagram berikut bagian apa dari unit yang mengalami masalah. Diagram blok diagram aliran hisap Pada bagian apakah yang mengalami kerusakan?",
        options: ["a. Filter", "b. Tabung penampungan", "c. Sumber Cairan", "d. Motor hisap", "e. Meter indicator hisap"],
        answer: "e. Meter indicator hisap"
    },
    {
        question: "Seorang Elektromedis sedang melakukan kajian pemanfaatan alat rontgen di Rumah Sakit. Alat tersebut harus memenuhi aspek keselamatan, utamanya adalah keselamatan radiasi. Apakah tujuan aspek keselamatan tersebut?",
        options: ["a. mengurangi pengaruh radiasi pada pasien dan pekerja radiasi", "b. melindungi pasien, pekerja radiasi dan masyarakat", "c. melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup", "d. mengurangi pengaruh radiasi pada pasien, pekerja radiasi dan lingkungan hidup", "e. melindungi pasien, pekerja radiasi dan lingkungan hidup"],
        answer: "c. melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"
    },
    {
        question: "Dental unit adalah suatu alat yang dipakai di ruang poli gigi untuk membantu menegakkan diagnosa dan menegakkan terapi pada pasien yang dalam pengoperasiannya membutuhkan udara dan air.Apa pertimbangan Anda agar tekanan udara alat Dental Gigi tersebut dapat berjalan dengan baik?",
        options: ["a. Pemilihan suber tegangan yang sesuai", "b. Pemilihan bangunan untuk ruang gigi yang baik", "c. Pemilihan kompresor yang baik", "d. Pemilihan grounding yang baik", "e. Mempertimbangkan tidak terjadinya kebocoran arus"],
        answer: "c. Pemilihan kompresor yang baik"
    },
    {
        question: "Seorang pelaksana kalibrasi, sedang melaksanakan tugasnya mengkalibrasi alat centrifuge. Pada alat tersebut tidak ada nilai yang tertera pada pengaturan kecepatan hanya ada minimal dan maksimal. Apa yang harus dilakukan oleh petugas kalibrasi tersebut?",
        options: ["a. Pada lembar kerja dicatat minimal dan maksimal", "b. Menguji kelistrikannya saja", "c. Menyatakan alat tersebut tidak layak untuk dikalibrasi", "d. Memberi label merah karena membahayakan", "e. Meminta buku manual kepada pelanggan untuk mencari nilai kecepatanya"],
        answer: "e. Meminta buku manual kepada pelanggan untuk mencari nilai kecepatanya"
    },
    {
        question: "Sebagai tenaga pelaksana kalibrasi Anda mendapatkan hasil perekaman lebar pulsa pada setting ECG Simulator 120 bpm adalah 25 mm. Hasil perhitungan Anda seharusnya adalah 12.5 mm. ECG Simulator telah terkalibrasi dan kecepatan kertas yang sebelumnya diperiksa dalam keadaan baik dan memenuhi. Apakah langkah pemeriksaan yang Anda pastikan pertama kali untuk mengatasi masalah diatas?",
        options: ["a. Memastikan setting kertas ECG 25 mm/s", "b. Memastikan setting kertas ECG 50 mm/s", "c. Memastikan setting kertas ECG 10 mm/s", "d. Memastikan setting kertas ECG 100 mm/s", "e. Memastikan setting kertas ECG 5 mm/s"],
        answer: "a. Memastikan setting kertas ECG 25 mm/s"
    },
    {
        question: "Salah satu bagian pemeliharaan preventif adalah pemantauan, dengan pemantauan diharafkan peralatan medik dalam kondisi siap pakai.? Untuk Menyusun SOP pemeliharaan preventif kita harus mengetahui hal-hal Yang tidak termasuk dalam pemantauan adalah",
        options: ["a. Pemantauan kinerja alat.", "b. Pemantauan fisik alat.", "c. Pemantauan kondisi lingkungan.", "d. Pemantauan pengguna alat", "e. Pemantauan /pengukuran aspek pengukuran."],
        answer: "d. Pemantauan pengguna alat"
    },
    {
        question: "Pada ruang ICU di rumah sakit type A terdapat kerusakan pada mesin Ven lator. Setelah dilakukan pemeriksaan oleh elektromedis terjadi kerusakan pada control unitnya namun setelah menghubungi distributor alat tersebut spare part yang dibutuhkan sudah dak diproduksi lagi. Sementara banyak pasien yang memerlukan bantuan pernafasan dengan menggunakan ven lator. Langkah pertama apa yang akan dilakukan oleh elektromedis untuk menangani permasalahan tersebut ?",
        options: ["a. Menyarankan pada menejemen untuk pengadaan veb lator baru", "b. Memberikan saran kepada pihak manajemen agar dak membeli ven lator dari distributor tersebut", "c. Membuat catatan kronologis krerusakan", "d. Melakukan pemeriksaan pada ven lator yang lain untuk mencegah kerusakan yang sama", "e. Memberikan penjelasan kepada manajemen tentang kondisi purna jual spare part"],
        answer: "e. Memberikan penjelasan kepada manajemen tentang kondisi purna jual spare part"
    },
    {
        question: "Ruang operasi membutuhkan beberapa preralatan yang spesi fi k. Oleh karena itu pada saat perencaan Kamar operasi dibutuhkan informasi teknis dari elektromedis agar peralatan yang dipiilih sesuai dengan kebutuhan dan fungsinya. Pilihlah paket peralatan kesehatan dibawah ini yang diperlukan untuk perencanaan kebutuhan peralatan untuk ruang operasi",
        options: ["a. ESWL, USG, ECG, suc on pump, Elec ro Surgical Unit, Mobile X-ray, CT Scan , Elec ro Surgical Unit", "b. Ven lator ICU, pa ent bed, ang infuse, pa ent monitor, suc on pump , Elec ro Surgical Unit", "c. Mobile X-ray, CT Scan, Mamography, Lampu Operasi, mesin Anaesthesi , Elec ro Surgical Unit", "d. Lampu Operasi, mesin Anaesthesi, meja operasi, pa ent monitor, suc on pump, Elec ro Surgical Unit", "e. Autoclave, Setrilisator, Oven, Ven lator ICU, pa ent bed, Mobile X-ray, CT Scan ,Elec ro Surgical Unit"],
        answer: "d. Lampu Operasi, mesin Anaesthesi, meja operasi, pa ent monitor, suc on pump, Elec ro Surgical Unit"
    },
    {
        question: "Seorang elektromedis melakukan kegiatan kalibrasi pada alat Defibrilator. Sesuai lembar kerja setiap titik setting harus diambil 6 kali pengukuran. Pada saat melakukan pengukuran yang ke 3 pada setting terakhir alat ESU menjadi panas. Sebagai seorang elektromedis tindakan apa yang tepat yang harus dilakukan",
        options: ["a. Melaporkan ke pihak rumah sakit bahwa alat tidak bisa dikalibrasi", "b. Menunggu sebentar kemudian dilakukan kalibrasi lagi dari awal", "c. Mengambil data di lain hari", "d. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili", "e. Memberikan Label Merah pada alat"],
        answer: "d. Menghentikan kegiatan kalibrasi dan data yang ada sudah mewakili"
    },
    {
        question: "Rumah sakit A membeli alat USG Seorang tenaga elektromedis di tugaskan untuk membuat standard operasional prosedure (SOP). Tindakan apa yang tepat oleh seorang tenaga elektromedis sebelum membuat SOP yang baik?",
        options: ["a. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat", "b. Melakukan uji fungsi", "c. Membaca wirring diagram dan blok diagram alat tersebut", "d. Membuat SOP sendiri sesuai dengan pengalaman yang dimiliki", "e. Melakukan pengumpulan data tentang alat tersebut dan spesifikasi nya"],
        answer: "a. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat"
    },
    {
        question: "Seorang radiografer RS. Kasih Ibu melihat percikan api di dalam tabung ketika dilakukan pemotretan terhadap pasien. Seluruh faktor eksposi telah diatur sesuai dengan standar namun percikan api tetap terjadi.Sebagai seorang elektromedis yang harus melakukan analisis, kerusakan apa yang terjadi pada pesawat rontgen tersebut?",
        options: ["a. Filamen putus.", "b. Rotating anoda tidak berputar.", "c. Permukaan target yang telah aus.", "d. Kebocoran tube housing.", "e. Kerusakan pada rectifier."],
        answer: "d. Kebocoran tube housing."
    },
    {
        question: "Pelaksana kalibrasi dari perusahaan kalibrasi PT ASM menerima permintaan dari rumah sakit, bahwa metoda kerja yang digunakan diminta bukan dari perusahaan tapi menggunakan metoda yang digunakan berasal dari Rumah Sakit. Sebagai pelaksana kalibrasi apa yang harus dilakukan?",
        options: ["a. Menerima permintaan dan mengerjakan sesuai Metoda kerja dari Rumah Sakit", "b. Menolak melakukan kalibrasi dan dibuat berita acara", "c. Menolak melakukan kalibrasi dan melaporkan kepada atasan", "d. Menerima permintaan dan mengerjakan sesuai metoda kerja dari Rumah sakit deserta berita acara", "e. Mencoret dari daftar pekerjaan kalibrasi"],
        answer: "d. Menerima permintaan dan mengerjakan sesuai metoda kerja dari Rumah sakit deserta berita acara"
    },
    {
        question: "Seorang Dokter spesialis kebidan komplain kepada tenaga elektromedis tentang hasil gambar dari USG ternyata tidak sesuai dengan gambar yang dihasilkan banyak udara yang terekam . Langkah pertama apakah yang dilakukan oleh tenaga elektromedis ?",
        options: ["a. Memeriksa posisi obyek ada airnya tidak", "b. Memeriksa obyek bergerak-gerak apa tidak", "c. Memeriksa Traducer pakai aguasonic gel", "d. Memeriksa Transduce bekerja apa", "e. Memeriksa dayanya cukup apa tidak"],
        answer: "c. Memeriksa Traducer pakai aguasonic gel"
    },
    {
        question: "Terjadi perbedaan pengukuran tekanan darah seorang pasien pada saat menggunakan sphygmomanometer dibandingkan dengan pengukuran tekanan darah menggunakan Non Invasive Blood Pressure (NIBP). Langkah pertama yang dilakukan oleh tenaga elektromedis?",
        options: ["a. Melakukan pengecekan interfensi frekuensi", "b. Melakukan pengukuran Arus Bocor", "c. Melakukan pemeriksaan catu daya listrik", "d. Melakukan pemeriksaan arde ( Grounding )", "e. Melakukan kalibrasi"],
        answer: "e. Melakukan kalibrasi"
    },
    {
        question: "ESU adalah suatu alat bedah dengan memanfaatkan arus listrik frekuensi tinggi untuk membelah, membekukan dan mengeringkan kulit. Pada satu peristiwa ESU pada elektroda panas namun tidak dapat digunakan untuk membelah, membekukan dan menggeringkan. Apa yang anda lakukan sebagai teknisi Elektromedis?",
        options: ["a. Mengecek rangkaian kontrol", "b. Mengecek thermofuse", "c. Mengecek rangkaian tranduser", "d. Mengecek rangkaian osilator", "e. Mengecek rangkaian power supply"],
        answer: "d. Mengecek rangkaian osilator"
    },
    {
        question: "Sumber cahaya yang digunakan pada alat AAS dapat memancarkan panjang gelombang tertentu .Apakah nama sumber cahaya tersebut?",
        options: ["a. Hollow Cathode Lamp", "b. lampu halogen", "c. sinar UV", "d. LED", "e. photo diode"],
        answer: "a. Hollow Cathode Lamp"
    },
    {
        question: "Sebelum melakukan pemeriksaan sampel pada alat spektrofotometer dilakukan adjustment . Apa larutan yang digunakan pada kegiatan tersebut?",
        options: ["a. Air", "b. Larutan buffer", "c. Reagen blanko", "d. Reagen standar", "e. Larutan asam/basa/garam."],
        answer: "c. Reagen blanko"
    },
    {
        question: "Seorang elektromedis sedang melakukan kalibrasi bedside monitor, saat mengukur nilai saturasi oksigen di bedside monitor selalu muncul alarm yang sangat mengganggu. Apa yang harus dilakukan oleh elektromedis tersebut",
        options: ["a. Menyatakan bedside monitor tidak laik", "b. Meminta ke pihak perawat untuk mengganti finger sensor", "c. Melakukan perbaikan finger sensor", "d. Mengecek posisi finger sensor di alat kalibrator", "e. Mematikan batas atas dan batas bawah alarm"],
        answer: "e. Mematikan batas atas dan batas bawah alarm"
    },
    {
        question: "Pada pesawat EKG recording dengan sistem stylus dijumpai permasalahan pada hasil pemeriksaan pada kertas ECG yang tidak tampak jelas. Apa analisis kerusakan yang mungkin terjadi pada pesawat EKG tersebut?",
        options: ["a. Adjusment sensitivity", "b. Adjusment pada themal circuit", "c. Motor kertas terlalu cepat", "d. Adjusment amplifier", "e. Elektrode kotor"],
        answer: "b. Adjusment pada themal circuit"
    },
    {
        question: "Hematology analyzer selain berfungsi untuk menghitung sel darah juga dapat mengukur kadar hemoglobin (Hb). Apakah metode yang dipakai pada pengukuran tersebut?",
        options: ["a. pemisahan unsur", "b. laser scattering", "c. electrical impedance", "d. fotometri", "e. absorpsi"],
        answer: "d. fotometri"
    },
    {
        question: "Pada perbaikan pesawat rontgen konvensional ditemukan bahwa komponen standby resistor berwarna hitam seperti terbakar sehingga nilai hambatannya menjadi naik. Apa pengaruh dari kerusakan komponen tersebut?",
        options: ["a. Pemanasan filamen menjadi lebih lama", "b. Tidak terjadi pemanasan filamen", "c. Arus tabung (mA) menjadi lebih kecil", "d. Tombol ready menjadi tidak berfungsi", "e. Tegangan tabung (KV) menjadi lebih kecil"],
        answer: "a. Pemanasan filamen menjadi lebih lama"
    },
    {
        question: "Suatu alat autoclave (stem sterilisator) di RSU Dr. Soebandi sedang akan dioperasikan ( on ). Lampu indikator alat on sudah menyala, tekanan, timer dan suhu sudah diatur, tombol start sudah ditekan, suhu mengalami kenaikan dan timer berjalan saat suhu tercapai. Namun saat timer berjalan suhu mengalami penurunan dan tidak kunjung naik kembali ke suhu setting . Apakah tindakan perbaikan yang harus dilakukan ?",
        options: ["a. Cek display suhu setting , jika suhu setting berubah maka kembalikan sesuai setting awal", "b. Cek microswitch (SHG) jika tidak berfungsi maka ganti mikroswitch (SHG)", "c. Cek pengukur tekanan, apabila rusak maka ganti", "d. Cek tegangan sumber apakah sesuai dengan spesifikasi yang dibutuhkan alat atau tidak. Jika tidak maka cari tegangan sumber yang sesuai", "e. Cek timer , apabila tidak berfungsi maka gantilah timer nya"],
        answer: "b. Cek microswitch (SHG) jika tidak berfungsi maka ganti mikroswitch (SHG)"
    },
    {
        question: "Berikut ini adalah kegiatan pemeliharaan pada Ultrasound Terapi periode frekuensi tahunan sesuai dengan rencana kinerja tahunan pemeliharaan alat elektromedik…",
        options: ["a. Mengecek dan memeriksa lampu indicator", "b. Melakukan kalibrasi dan uji kinerja alat", "c. Mengecek selector tombol switch", "d. Mengecek dan membersihkan seluruh bagian alat", "e. Mengecek sisitem catu daya"],
        answer: "a. Mengecek dan memeriksa lampu indicator"
    },
    {
        question: "Microscope cahaya merupakan alat yang digunakan untuk melihat bagian-bagian yang sangat kecil pada suatu benda yang dak dapat dilihat dengan mata telanjang. User mengeluhkan pengelihatan pada mikroskop cahaya kurang jelas padahal sudah dibersihkan lensanya dan masih bagus. Apakah yang harus Saudara lakukan untuk menangani alat tersebut ?",
        options: ["a. Menggan lampu mikroskop.", "b. Menggan lensa objec f.", "c. Mengatur kondesor.", "d. Melakukan se ng ulang posisi lensa.", "e. Menggan lensa okuler."],
        answer: "a. Menggan lampu mikroskop."
    },
    {
        question: "Termasuk Peralatan medis yang digunakan untuk penanganan pada pasien bayi yang mengalami permasalahan pada pernafasanya, contohnya pada alat bubble CPAP.Bagian manakah pada Bubble CPAP yang berfungsi sebagai pemberi kehangatan dibawah ini?",
        options: ["a. Generator peep", "b. O2 blend", "c. Chamber humidifier", "d. Breathing sirkuit", "e. Sensor suhu"],
        answer: "c. Chamber humidifier"
    },
    {
        question: "Suatu alat EKG ditempatkan di ruang ICCU. Semua aksesoris dan kabel telah terpasang dengan baik. Setting alat sudah sesuai SOP, saat ditekan tombol start ternyata hasil kertas EKG terdapat trilling pada beberapa lead. Apakah yang harus dilakukan oleh seorang teknisi elektromedik untuk mengatasi masalah ini ?",
        options: ["a. Periksa dan perbaiki pemasangan kabel pasien", "b. Periksa dan perbaiki pemasangan kabel F", "c. Periksa apakah filter sudah aktif", "d. Periksa apakah kabel pasien sudah terlumasi gel", "e. Periksa apakah kabel ground terbalik"],
        answer: "e. Periksa apakah kabel ground terbalik"
    },
    {
        question: "Heater merupakan komponen penting pada alat Waterbath. Untuk memelihara heater pada Waterbath supaya tidak rusak sebaiknya dilengkapi dengan?",
        options: ["a. Kontrol suhu", "b. Sensor leval air", "c. Kontrol suhu dan waktu", "d. blower", "e. Kontrol waktu"],
        answer: "b. Sensor leval air"
    },
    {
        question: "Berikut ini merupakan jenis mikroskop yang diklasifikasikan berdasarkan kontruksi dan kegunaannya. Yang merupakan jenis mikroskop yang diklasifikasikan berdasarkan kontruksi dan kegunaannya, kecuali mikroskop?",
        options: ["a. Elektron", "b. Stereo", "c. Metalurgi", "d. Klinik", "e. Biologis"],
        answer: "d. Klinik"
    },
    {
        question: "Cahaya tampak adalah salah satu sumber cahaya yang digunakan pada spektrofotometer . Berapakah panjang gelombangnya?",
        options: ["a. 780-3000 nm", "b. 200-280 nm", "c. 380-780 nm", "d. 10-200 nm", "e. 3000-20.000 nm"],
        answer: "c. 380-780 nm"
    },
    {
        question: "Pada ESU terdapat kerusakan yaitu ESU tegangan pada pembangkit frekuensi terlalu tinggi. Diketahui power supply bekerja dengan normal dan kabel tidak ada yang terputus. Dari masalah tersebut, apakah penyebab terjadinya kerusakan pada ESU?",
        options: ["a. Kerusakan pada generator High Frekuensi.", "b. Terbalik saat pemasangan elektroda.", "c. Kerusakan pada footswitch .", "d. Kesalahan dalam instalasi ESU.", "e. Fuse terputus."],
        answer: "a. Kerusakan pada generator High Frekuensi."
    },
    {
        question: "Sebagai Seorang Elektromedis harus mengenal jenis-jenis peralatan kesehatan salah satunya adalah jenis Peralatan life Support. Dibawah ini termasuk jenis peralatan Life Support dan alat ini biasanya dipergunakan untuk mengoreksi aktifitas irama jantung, dan alat ini juga bisa digunakan untuk mengirimkan kejutan listrik kejantung pasien untuk mendapatkan kestabilan detak jantung kembali normal. Apa nama dari alat Life Support tersebut menurut saudara?",
        options: ["a. Ventilator", "b. Oximeter", "c. Nebulizer", "d. Defibrilator", "e. ECG"],
        answer: "d. Defibrilator"
    },
    {
        question: "Disain ruang perawatan Intensive Coronary Care Unit (ICCU), terdapat meja atau rak disebelah tempat tidur pasien yang di peruntukan bagi bedside monitor. Dalam bedside monitor ada 5 (lima) parameter yang diperiksa. Salah satunya adalah pemeriksaan kadar oksigen didalam darah. Apa nama pemeriksaan tersebut?",
        options: ["a. Respirasi", "b. ECG", "c. Suhu", "d. NIBP", "e. Saturasi darah"],
        answer: "e. Saturasi darah"
    },
    {
        question: "Di suatu puskesmas terdapat sebuah sterilisator kering. Para petugas di puskesmas mengaku jarang menggunakan sterilisator kering tersebut dikarenakan display pada sterilisator tersebut tidak mengalami perubahan sama sekali ketika digunakan. Setiap kali digunakan display suhu selalu menunjukkan suhu yang tetap meskipun heater telah bekerja. Sebagai seorang tenaga teknik elektromedik apa yang akan anda lakukan agar anda dapat Menyusun rencana kerja tahunan pemeliharaan alat sterilisator?",
        options: ["a. Memeriksa tegangan input sterilisator", "b. Mengganti heater sterilisator", "c. Memeriksa sambungan pada display sterilisator", "d. Memeriksa sambungan kabel pada sterilisator", "e. Mengganti sensor suhu sterilisator"],
        answer: "e. Mengganti sensor suhu sterilisator"
    },
    {
        question: "Sumber cahaya visible light yang umum digunakan pada alat spektrofotometer adalah lampu halogen. Apakah sumber cahaya lain yang bisa digunakan pada alat tersebut ?",
        options: ["a. Sinar gamma", "b. Lampu ultra violet", "c. Sinar X", "d. Lampu Helium", "e. Lampu infra red"],
        answer: "b. Lampu ultra violet"
    },
    {
        question: "Jenis-jenis Elektrode yang bersifat induktif pada peralatan diathermy ?",
        options: ["a. Electrode transvaginal, linier, konveks", "b. Electrode aktif, pasif, netral", "c. Elektrode kabel, monode, dan diplode", "d. Electrode jarum, bola, lingkaran", "e. Electrode bantalan, electrode piringan, dan electrode khusus"],
        answer: "e. Electrode bantalan, electrode piringan, dan electrode khusus"
    },
    {
        question: "Seorang Radiograper melaporkan permasalahan pada alat rontgen di instalasi Radiologi yang sedang digunakan untuk pemeriksaan seoarang pasien. Menurut petugas semua parameter eksposi dalam keadaan normal, namun ketika tombol preparation ditekan pada panel tidak terindikasi ready sehingga ekspos tidak dapat dilakukan. Setelah dilkukan pemeriksanan dan dianalisis terjadi kerusakan rangkaian rotating anoda putar. Apakah langkah awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek kabel tegangan tinggi", "b. Cek tegangan pada rotor", "c. Cek tegangan pada anoda putar", "d. Cek tegangan pada tabung sinar-x", "e. Cek tegangan pada stator"],
        answer: "e. Cek tegangan pada stator"
    },
    {
        question: "Pada saat pengoperasian alat autoclave dijumpai kendala bahwa suhu dan tekanan uap air untuk sterilisasi tidak tercapai. Setelah dilakukan pengecekan terdapat uap air yang keluar dari celah-celah pintu. Apa tindakan awal yang harus dilakukan oleh tenaga elektromedis yang menangani peralatan tersebut?",
        options: ["a. Mengecek door interlock", "b. Mengecek door gasket", "c. Mengecek pressure gauge", "d. Mengecek kontrol suhu", "e. Mengecek catu daya elemen"],
        answer: "b. Mengecek door gasket"
    },
    {
        question: "Sebuah rumah sakit meminta teknisi eletromedis untuk menyusun rencana kerja tahunan pemeliharaan alat elektromedik dan meng edukasi operator agar alat terpelihara dengan baik, Sebagai seorang eletromedis hal apa saja yang perlu disampaikan dalam kegiatan tersebut?",
        options: ["a. Memberika pemahaman alat sesuai dengan SOP", "b. Meminta operator untuk menyimpan dan membersihkan", "c. Meminta operator untuk melakuakan perawatan berkala", "d. Meminta operator untuk melakukan kalibrasi", "e. Meminta operator untuk merawat sendiri alat yang digunakan"],
        answer: "a. Memberika pemahaman alat sesuai dengan SOP"
    },
    {
        question: "Pada saat seorang perawat menggunakan alat SWD, ia mengalami kendala yaitu lampu indikator tidak menyala tetapi intensitas display lampu menyala. Kemudian ia melaporkan hal tersebut kepada teknisi. Bagian apakah yang mengalami kerusakan ?",
        options: ["a. Lampu Indikator", "b. Rangkaian power supply", "c. Kabel elektroda", "d. Tegangan Masuk", "e. Kabel suplai"],
        answer: "c. Kabel elektroda"
    },
    {
        question: "Instrumen Dental Unit pada suatu layanan kesehatan mengalami kerusakan yaitu tidak dapat mengeluarkan air dan udara serta gabungan keduanya pada hand piece. Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertugas menangani alat tersebut ?",
        options: ["a. Melakukan pemeriksaan dan perbaikan bagian additional rocker.", "b. Melakukan pemeriksaan dan perbaikan bagian multifunction hand piece.", "c. Melakukan pemeriksaan dan perbaikan bagian intra matrik motor.", "d. Melakukan pemeriksaan dan perbaikan bagian turbin.", "e. Melakukan pemeriksaan dan perbaikan bagian footswitch."],
        answer: "b. Melakukan pemeriksaan dan perbaikan bagian multifunction hand piece."
    },
    {
        question: "Seorang elektromedis melakukan penggantian komponen transformator filamen pada pesawat rontgen konvensional yang mengalami kerusakan karena terendam air saat banjir. Sebagai bagian dari pesawat rontgen, dimanakan letak dari komponen tersebut?",
        options: ["a. X-ray tube", "b. Pasien table", "c. HTT tank", "d. Control table", "e. Control panel"],
        answer: "c. HTT tank"
    },
    {
        question: "Instalasi Rehabilitasi Medis di Rumah sakit, memiliki Alat Terapi SWD (Short Wave Dhiathermy). Agar alat tersebut selalu dalam performa maksimal saat di gunakan maka anda sebagai seorang teknisi elektromedik di minta untuk menyusun rencana kerja pemeliharaan tahunan alat SWD tersebut. Berikut adalah pemeliharaan alat terapi SWD periode frekuensi 1 bulanan adalah….",
        options: ["a. Mengecek dan memeriksa fungsi pewaktu dan fungsi intensitas", "b. Mengecek rangkaian HTT", "c. Memeriksa apakah waktu treatment sudah disetting", "d. Mengecek rangakaian osilasi", "e. Mengecek dan membersihkan elektroda"],
        answer: "a. Mengecek dan memeriksa fungsi pewaktu dan fungsi intensitas"
    },
    {
        question: "Terdapat Kebocoran arus pada dental unit setelah dilekukan pengujian kelistrikan menggunakan Electrical Safety Analyzer. Rencanakan Tindakan yang akan dilakukan oleh seorang teknisi?",
        options: ["a. Memperbaiki grounding alat", "b. Mengganti kabel", "c. Mengecek kabel grounding", "d. Membuat grounding baru", "e. Mengecek kabel isolasi"],
        answer: "c. Mengecek kabel grounding"
    },
    {
        question: "Instrumen yang terdapat pada Dental Unit mengalami kerusakan yaitu tidak dapat mengeluarkan air dan udara.Apa yang harus dilakukan terhadap instrument tersebut?",
        options: ["a. Melakukan pemeriksaan dan perbaikan bagian turbin.", "b. Melakukan pemeriksaan dan perbaikan bagian footswitch.", "c. Melakukan pemeriksaan dan perbaikan bagian additional rocker.", "d. Melakukan pemeriksaan dan perbaikan bagian multifunction hand piece.", "e. Melakukan pemeriksaan dan perbaikan bagian intra matrik motor."],
        answer: "a. Melakukan pemeriksaan dan perbaikan bagian turbin."
    },
    {
        question: "Sebuah alat CTG ( Cardio Toco Graphy ) sudah digunakan dalam jangka waktu 1 tahun, pada saat awal menghidupkan alat secara otomatis akan melakukan test print pada hasil test print terdapat garis yang terputus - putus. Langkah apa yang harus anda lakukan utuk menangani kasus tersebut? OPSI JAWABAN :",
        options: ["a. Mengganti kertas printer", "b. Membersihan rol printer", "c. Membersih transduser", "d. Membersihkan unit", "e. Mengecek power suply"],
        answer: "b. Membersihan rol printer"
    },
    {
        question: "Pada RSUD Sidoarjo sebuah alat ESU yang digunakan untuk pendukung alat operasi. Kami mendapatkan keluhan dari operator bahwa alat tersebut tidak bekerja, setelah dilakukan pengecekan jala- jala PLN sudah terhubung dengan baik, tidak ada arus yang bocor. Apa yang menyebabkan alat tersebut tidak dapat bekerja ?",
        options: ["a. pengatur frekuensi rusak", "b. generator pada ESU mengalami kerusakan", "c. elektroda bipolar putus", "d. switch on/off mengalami kerusakan", "e. kabel power putus"],
        answer: "c. elektroda bipolar putus"
    },
    {
        question: "Seorang Elektromedis sedang melakukan pemeliharaan preventif pada sebuah alat rontgen di instalasi Radiologi. Dia melakukan pemeriksaan dan pengukuran beberapa parameter, salah satunya pada sistem pembumian (grounding) Berapakah nilai parameter yang dijinkan pada kasus tersebut?",
        options: ["a. ", "b. ", "c. ", "d. ", "e. "], // Opsi ini kosong di PDF, perlu diisi jika ada nilai spesifik
        answer: "" // Jawaban juga kosong, perlu diisi
    },
    {
        question: "Seorang melakukan identifikasi pada sebuah alat rontgen di instalasi radiologi yang telah digunakan selama 5 (lima) tahun dengan total penggunaan 20.000 kali ekspos, sedangkan usia teknis alat tersebut tertera 25.000 kali ekspos. Berapa persen-kah usia manfaat alat tersebut ?",
        options: ["a. 2,5", "b. 5", "c. 20", "d. 10", "e. 2"],
        answer: "c. 20"
    },
    {
        question: "Seorang Elektromedis bersama tim pengadaan alat rontgen sedang melakukan analisis pemenuhan peralatan radiologi yang sesuai dengan klasifikasi rumah sakit. Selanjutnya tim tersebut melakukan penilaian kebutuhan peralatan yang melibatkan pihak-pihak yang terkait. Siapa sajakah pihak terkait pada kasus tersebut?",
        options: ["a. Direktur Rumah Sakit, tenaga teknis dan tenaga administrasi", "b. Direktur Rumah Sakit, Radiolog dan Elektromedis", "c. Radiolog, Radiogrper dan Elektromedis", "d. Pengguna, tenaga teknis dan manajemen rumah sakit", "e. Direktur Rumah Sakit, pengguna dan tenaga teknis"],
        answer: "d. Pengguna, tenaga teknis dan manajemen rumah sakit"
    },
    {
        question: "Seorang Elektromedis mendapat tugas pemeliharaan alat fuoroscopi di instalasi radiologi. Dia melakukan kegiatan inspekai kuratif yang terjadwal rutin setiap tahun. Apa sajakah yang dilakukan pada kegiatan tersebut ?",
        options: ["a. mengecek sistem pergerakan tube stand.", "b. mengecek audible dan visual alarm", "c. mengecek kondisi kabel power", "d. mengecek akurasi nilai tegangan tabung (KVp).", "e. mengecek semua kondisi lampu indikator"],
        answer: "d. mengecek akurasi nilai tegangan tabung (KVp)."
    },
    {
        question: "ESU (Electro Surgery Unit) mengalirkan arus bolak-balik dengan frekuensi nggi melalui electroda ke jaringan tubuh. Sehingga dalam pemeliharaan alat perlu diperha kan adanya pengaman terhadap luka bakar yang dak diinginkan. Apa yang tepat dilakukan oleh tenaga elektromedik untuk pemeliharaan alat tersebut ?",
        options: ["a. Melakukan pemeriksaan pada electroda ak f harus selalu dalam keadaan baik.", "b. Melakukan pemeriksaan bagian fuse.", "c. Melakukan pemeriksaan Pa ent plate dan jack dalam keadaan baik dan bersih.", "d. Melakukan pemeriksaan bagian pembangkit frekuensi.", "e. Melakukan pemeriksaan tombol dosis arus."],
        answer: "c. Melakukan pemeriksaan Pa ent plate dan jack dalam keadaan baik dan bersih."
    },
    {
        question: "Pemeliharaan berkala alat hematology analyzer salah satunya dilakukan pada bagian metering unit . Apakah fungsi dari metering unit tersebut?",
        options: ["a. menampilkan hasil jumlah RBC, WBC dan platelet", "b. memompa darah menuju ke breaker.", "c. membaca tegangan RBC,WBC dan platelet.", "d. membedakan tegangan RBC, WBC dan platelet.", "e. membatasi volume darah yang akan diukur"],
        answer: "e. membatasi volume darah yang akan diukur"
    },
    {
        question: "Seorang Bidan menanyakan kepada petugas kalibrasi tentang hasil kalibrasi infant incubator dimana tertera suhu matras tinggi, padahal suhu ruangan infant incubator sudah sesuai. Analisa apa yang harus disampaikan oleh petugas kalibrasi",
        options: ["a. Menjelaskan bahwa suhu matra tinggi karena faktor usia alat", "b. Menjelaskan bahwa suhu matras tinggi karena suhu ruangan", "c. Menjelaskan bahwa suhu matras tinggi karena heaternya tidak stabil", "d. Menjelaskan bahwa suhu matras tinggi tergantung dari bahan matrs", "e. Menjelaskan bahwa suhu matras tinggi karena sirkulasi di matras tidak bagus"],
        answer: "d. Menjelaskan bahwa suhu matras tinggi tergantung dari bahan matrs"
    },
    {
        question: "Seorang Kepala IPSRS mendapat laporan dari Seorang Dokter tentang permasalahan alat Defibrilator yang sedang di gunakan dalam menangani pasienya dilaporan rusak, disampaikan alat tersebut bisa di Charge tetapi alat tidak bisa mengeluarkan energinya saat digunakan shook terapi kepasien yang ditanganinya. Pada SOP alat Defibrilator terdapat keterangan jika impedance pasien tidak baik akan dapat menyebabkan tidak adanya energy yang keluar pada paddle. Pilihan langka yang tepat dibawah ini untuk mejawab permasalahan diatas sesuai SOP pengoperasian alat Defibrilator adalah?",
        options: ["a. Melakukan kalibrasi pada alat", "b. Memasang dan mengkoneksikan paddle pada pasien dengan benar", "c. Mengganti semua rangkaian pada alat", "d. Mengganti Kabel power yang baru pada alat", "e. Menginstal ulang program pada alat"],
        answer: "b. Memasang dan mengkoneksikan paddle pada pasien dengan benar"
    },
    {
        question: "Autoclave sangat dibutuhkan untuk mensterilkan berbagai macam alat . Cara kerja dari autoclave adalah saat tombol ON autoclave ditekan, motor triway valve akan bekerja untuk mengalirkan air dalam tanki menuju chamber. Pada suatu saat user akan menggunakan alat tersebut akan tetapi alat ini tidak dapat dapat dihidupkan ketika tombol power dalam keadaan ON. Sebagai seorang teknisi apa yang harus dilakukan untuk menyelesaikan masalah tersebut ?",
        options: ["a. Mengganti tombol ON yang ada pada tombol power.", "b. Memeriksa motor triway valve", "c. Melakukan pengecekan pada tegangan yang masuk pada alat dan mengecek tegangan stop kontak yang ada.", "d. Mengganti dengan yang baru kabel yang digunakan untuk menghubungkan pada stop kontak.", "e. Mengganti motor triway valve dengan yang baru"],
        answer: "c. Melakukan pengecekan pada tegangan yang masuk pada alat dan mengecek tegangan stop kontak yang ada."
    },
    {
        question: "Seorang teknisi yang melakukan perbaikan alat electrosurgery unit setiap 6 bulan sekali menemukan permasalahan pada alat tersebut, saat teknisi memeriksa bagian high frequensi outputnya terlalu tinggi, perbaikan atau tindakan apa yang dapat dilakukan pada alat tersebut?",
        options: ["a. Memeriksa rangkaian osilator sebagai pembangkit frekuensi", "b. Mengganti komponen IC pada power supply", "c. Memeriksa generator high frekuensi", "d. Memeriksa kembali sambungan power supply", "e. Mengganti elektroda aktif dan pasif"],
        answer: "c. Memeriksa generator high frekuensi"
    },
    {
        question: "Seorang radiografer senior melaporakan kepada teknisi di RS. Ken Arok bahwa dalam kurun waktu sebulan terakhir dia harus menekan tombol ready lebih lama dari biasanya sampai lampu indikator ready menyala. Selain itu foto rontgen derajat kehitaman foto rontgen yang dihasilkan rendah. Sebagai seorang elektromedis yang harus melakukan analisis kerusakan, bagian apa yang mungkin mengalami kerusakan?",
        options: ["a. Shutter.", "b. mA meter.", "c. Timer radiografy.", "d. mA regulator.", "e. Lampu indikator ready."],
        answer: "d. mA regulator."
    },
    {
        question: "Sebuah dental unit yang sudah terpasang digunakan utk pasien, saat kontra anggle dihidupkan ternyata bor tidak berputar. Apa yang perlu diperiksa untuk mengatasi masalah ini ?",
        options: ["a. Periksa tekanan angin", "b. Periksa tekanan air", "c. Periksa lampu sorot", "d. Periksa kondisi oli hidraulic", "e. Periksa hidraulic motor"],
        answer: "a. Periksa tekanan angin"
    },
    {
        question: "Seorang elektromedis sedang melakukan tugas pokoknya yaitu merawat alat rontgen di instalasi radiologi. Dia melakukan pemeriksaan, pembersihan dan pengukuran secara berkala agar kondisi alat tersebut selalu terjaga dan menghasilkan luaran yang stabil. Jenis katagori pemeliharaan manakah yang dilakukan petugas tersebut?",
        options: ["a. image quality check", "b. corrective maintenance", "c. preventive maintenance", "d. system upgrade", "e. safety inspections"],
        answer: "c. preventive maintenance"
    },
    {
        question: "Sebuah alat EKG yang digunakan untuk diagnos k di suatu rumah sakit, pada jarum stylus alat tersebut terlihat gambar/hasil yang dak sesuai dengan standar. Langkah Apa yang dilakukanuntuk menangani menangani tersebut ?",
        options: ["a. Melakukan pemeriksaan rangkaian display", "b. Melakukan pemeriksaan, pemanas stylus.", "c. Melakukan pemeriksaan rangkaian catu daya", "d. Melakukan pemeriksaan rangkaian penguat", "e. Melakukan penggan jarum stylus dan mereset."],
        answer: "b. Melakukan pemeriksaan, pemanas stylus."
    },
    {
        question: "Seorang Radiograper melaporkan permasalahan pada alat rontgen sistem condensator discharges yang sedang digunakan pemeriksaan seoarang pasien. Menurut petugas semua parameter eksposi dalam keadaan normal, namun ekspos tidak dapat dilakukan. Setelah dilkukan pemeriksanan dan dianalisis ternyata ada kerusakan pada rangkaian yang mensuplai elektrode grid pada tabung sinar-x Apakah fungsi elektrode pada alat tersebut?",
        options: ["a. mengatur laju arus listrik dari katode ke anoda", "b. mengatur pergerakan elektron dari anoda ke katode", "c. mengatur laju arus dari katode ke grid", "d. mengatur emisi elektron pada karode dan anoda", "e. mengatur pergerakan elektron dari katode ke anoda"],
        answer: "e. mengatur pergerakan elektron dari katode ke anoda"
    },
    {
        question: "Seorang perawat di ICU menanyakan kepada petugas kalibrasi tentang hasil kalibrasi infusion pump dimana kesalahan flow ratenya tinggi, padahal infusion pumpnya gak pernah rusak. Analisa apa yang harus disampaikan oleh petugas kalibrasi",
        options: ["a. Menjelaskan bahwa kesalahan flow rate tinggi karena suhu ruangan yang tidak sesuai", "b. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh jenis cairan yang digunakan", "c. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh infusion set yang digunakan", "d. Menjelaskan bahwa kesalahan flow rate tinggi karena usia alat", "e. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh tinggi cairan infus"],
        answer: "c. Menjelaskan bahwa kesalahan flow rate tinggi karena pengaruh infusion set yang digunakan"
    },
    {
        question: "Pesawat sinar X pada Poli Radiologi mengalami kerusakan ternyata setelah dilakukan pemeriksaan diketahui fi lament pada tabung dak melaporkan kepada Instalasi Pemeliharaan Sarana Rumah Sakit bahwa menyala. Apa yang terjadi apabila pesawat sinar X tersebut dilakukan exposure ?",
        options: ["a. Akan terjadi short circuit", "b. Terjadi penambahan penyerapan daya listrik", "c. Menyebabkan kerusakan pada tabung sinar X", "d. Pesawat dak dapat menghasilkan sinar X", "e. Pesawat tetap dapat menghasilkan sinar X"],
        answer: "d. Pesawat dak dapat menghasilkan sinar X"
    },
    {
        question: "Di sebuah rumah sakit, seorang dokter akan mengoperasi pasiennya mengunakan Electrosurgery Unit (ESU) dengan merk ERBE tipe D-72072 / ICC 350 E INT. Namun ketika mulai digunakan, display pada alat tidak menyala dan alat mengeluarkan asap. Tindakan apa yang harus dilakukan?",
        options: ["a. Mengecek fuse , supply , dan blok rangkaian display", "b. Mengecek modul pembangkit HF", "c. Mengganti elektroda", "d. Mengganti saklar ON/OFF", "e. Mengganti kabel power"],
        answer: "a. Mengecek fuse , supply , dan blok rangkaian display"
    },
    {
        question: "Pada saat alat analytic balance yang akan digunakan, terdapat seberkas partikel debu atau kotoran-kotoran kecil yang menempel pada sebuah pan (tempat penimbangan sample) dan pelindung kaca alat tersebut. Apa tindakan pemeliharaan yang harus dilakukan oleh tenaga elektromedis dalam kasus ini?",
        options: ["a. Membersihkannya dengan kain fiber atau kuas dengan cairan basa", "b. Membersihkannya dengan kain fiber atau kuas dengan cairan asam", "c. Membersihkannya dengan kain fiber atau kuas dengan cairan soda", "d. Membersihkannya dengan kain fiber atau kuas dengan cairan alkohol murni", "e. Membersihkannya dengan kain fiber atau kuas dengan cairan kaporit"],
        answer: "d. Membersihkannya dengan kain fiber atau kuas dengan cairan alkohol murni"
    },
    {
        question: "Rumah sakit mendapatkan alat Anesthesi baru datang hibah dari bantuan WHO dan pihak rumah sakit akan menggunakan alat tersebut di kamar operasi. Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertugas menangani alat tersebut agar dapat Menyusun rencana kerja tahunan pemeliharaan alat elektromedik ?",
        options: ["a. Melakukan pencatatan, pemeriksaan, pemeliharaan dan mengevaluasi kondisi alat.", "b. Melakukan pencatatan, pemerikasaan, pemeliharaan dan mengevaluasi", "c. Melakukan pencatatan dengan data-data yang tertera dalam alat, uji fungsi dan uji coba.", "d. Melakukan pencatatan data alat monitoring, dan pemeliharaan pencatatan alat anaesthesi.", "e. Melakukan pencatatan harian, mingguan, bulanan dan tahunan."],
        answer: "c. Melakukan pencatatan dengan data-data yang tertera dalam alat, uji fungsi dan uji coba."
    },
    {
        question: "Pada pengaturan amplitude test 1 mv, hasil test menunjukkan tidak tercapai 1 mv. Pengaturan apa yang saudara lakukan bila terjadi hal tersebut?",
        options: ["a. Filter", "b. Gain control", "c. Posisi stylus", "d. Damping", "e. Kecepatan motor"],
        answer: "b. Gain control"
    },
    {
        question: "Seorang petugas datang ke IPSRS melaporkan kerusakan alat rontgen konvensional di instalasi radiologi. Petugas mengatakan bahwa alat tersebut tidak dapat dioperasikan pada pengaturan 65 kV. Setelah dilakukan pemeriksaan ternyata pada pengaturan 65 kV indikator pada meter menunjukkan 0 sedangkan pengaturan kV lainnya normal. Apakah tindakan saudara pada kasus tersebut?",
        options: ["a. Periksa tap kV selektor pada high tention-tank", "b. Periksa tap kV selektor pada autotrafo bagian skunder", "c. Periksa tap kV selektor pada autotrafo bagian primer", "d. Periksa tap kV selektor pada HTT bagian skunder", "e. Periksa tap kV selektor pada trafo filamen bagian primer"],
        answer: "b. Periksa tap kV selektor pada autotrafo bagian skunder"
    },
    {
        question: "Pesawat sinar X pada Poli Radiologi mengalami kerusakan ternyata setelah dilakukan pemeriksaan diketahui fi lament pada tabung dak melaporkan kepada Instalasi Pemeliharaan Sarana Rumah Sakit bahwa menyala. Apa yang terjadi apabila pesawat sinar X tersebut dilakukan exposure ?",
        options: ["a. Akan terjadi short circuit", "b. Menyebabkan kerusakan pada tabung sinar X", "c. Pesawat tetap dapat menghasilkan sinar X", "d. Pesawat dak dapat menghasilkan sinar X", "e. Terjadi penambahan penyerapan daya listrik"],
        answer: "d. Pesawat dak dapat menghasilkan sinar X"
    },
    {
        question: "Setiap tabung sinar-x yang digunakan pada alat rontgen memiliki sudut anode tertentu. Menurut informasi pada manual book bahwa sudut anode akan berpengaruh terhadap gambar yang dihasilkan. Bagaimanakah penguruh sudut anode tersebut terhadap gambar yang dihasilkan?",
        options: ["a. Sudut semakin kecil focal spot semakin besar", "b. Sudut semakin kecil gambar semakin kurang baik", "c. Sudut semakin besar focal spot semakin mengecil", "d. Sudut semakin kecil gambar semakin membaik", "e. Sudut semakin besar gambar semakin membaik"],
        answer: "d. Sudut semakin kecil gambar semakin membaik"
    },
    {
        question: "Alat CTG, Doppler dan USG adalah alat diagnostik yang memiliki prinsip dasar yang sama, yaitu memanfaatkan gelombang ultrasound. Bagian mana dari ketiga alat tersebut yang harus sering dibersihkan setelah digunakan pada pasien?",
        options: ["a. Transducer", "b. Kontrol konsol", "c. Kabel", "d. Layar peraga", "e. Alat perekam"],
        answer: "a. Transducer"
    },
    {
        question: "Sebuah alat rontgen yang disuplai dengan sumber tegangan 1 phase 220 volt/50 Hz, dioperasikan selama 2 detik pada kondisi tegangan tabung sinar-x sebesar 80 kV dan arus tabung 50 mA. Berapa joule-kah energi yang terbangkit pada tabung sinar x ?",
        options: ["a. 7000", "b. 8000", "c. 7", "d. 0,7", "e. 0,8"],
        answer: "b. 8000"
    },
    {
        question: "Dokter kandungan atau bidan menggunakan mesin USG dengan berbagai transduser untuk memeriksa janin pada trimester pertama sampai ketiga. Pemeriksaan yang dilakukan pada trimester kedua yakni, kecuali?",
        options: ["a. Minggu ke-18 sampai ke-20 untuk cacat kongenital", "b. Meyakinkan kematian dalam rahim", "c. Meyakinkan kehamilan kembar", "d. Minggu ke-13 dan ke14 untuk karakteristik kemungkinan down syndrom", "e. Diagnosa cacat pada janin"],
        answer: "b. Meyakinkan kematian dalam rahim"
    },
    {
        question: "Sebuah alat ultrasound therapy akan digunakan oleh user, namun setelah dilakukan penye ngan alat, ternyata alat tersebut dak berfungsi, dimana dak keluar panas dari tranducer tersebut. Bagaimana saudara menangani masalah tersebut",
        options: ["a. Mengecek tranducer dengan tetesan air", "b. Gan probe ultrasound dari 1 MHz dengan 3 MHz", "c. Set alat ultrasound pada mode con nuous.", "d. Pas kan alat sudah terhubung dengan sumber tegangan listrik", "e. Lakukan pemeriksaan terhadap fuse"],
        answer: "a. Mengecek tranducer dengan tetesan air"
    },
    {
        question: "Hasil rekaman Elektro Encephalograph terganggu oleh interferensi dari tegangan AC maupun gelombang frekuensi radio yang melintas di sekitar ruangan . Berapakah tahanan grounding yang diijinkan ?",
        options: ["a. 25 W", "b. 150 W", "c. 5 W", "d. 100 W", "e. 50 W"],
        answer: "c. 5 W"
    },
    {
        question: "Pada ESU terdapat kerusakan yaitu ESU tegangan pada pembangkit frekuensi terlalu tinggi. Diketahui power supply bekerja dengan normal dan kabel tidak ada yang terputus. Dari masalah tersebut, apakah penyebab terjadinya kerusakan pada ESU?",
        options: ["a. Terbalik saat pemasangan elektroda.", "b. Kerusakan pada footswitch .", "c. Fuse terputus.", "d. Kesalahan dalam instalasi ESU.", "e. Kerusakan pada generator High Frekuensi."],
        answer: "e. Kerusakan pada generator High Frekuensi."
    },
    {
        question: "Untuk meningkatkan pelayanan kesehatan, sebuah rumah sakit akan melengkapi alat dengan peralatan bedside monitor yang baru. Oleh karena itu diperlukan tata cara instalasi yang sesuai supaya bedside monitor dapat bekerja secara efektif. Dari keterangan diatas, merupakan cara instalasi bedside monitor, kecuali?",
        options: ["a. Pindahkan bedside monitor", "b. Hubungkan alat ke ground", "c. Lepaskan penutup debu pada bedside", "d. Perhatikan protap pelayanan", "e. Hubungkan alat ke catu daya"],
        answer: "a. Pindahkan bedside monitor"
    },
    {
        question: "Doppler adalah alat medis yang menggunakan gelombang suara berfrekuensi tinggi untuk memantau aliran darah dan kondisi pembuluh darah. Biasanya, Doppler digunakan dokter untuk pemindaian atau mendiagnosis kondisi pasien. Sebutkan bagian - bagain dari alat Doppler?",
        options: ["a. Tranduser, transmiter, rangkaian penyadap", "b. Tranduser, settingan volume, speaker, display", "c. Sensor mic, tranduser, display, arduino", "d. Transmiter, kabel, power supply", "e. Tranduser, display, speaker"],
        answer: "b. Tranduser, settingan volume, speaker, display"
    },
    {
        question: "Setelah melakukan proses pemeliharaan adalah pencatatan. Pencatatan yang perlu dilakukan adalah?",
        options: ["a. Mencatat pekerjaan alat lain yang akan dilakukan berikutnya.", "b. Mengisi laporan kerja pemeliharaan.", "c. Mengisi Lembar kerja pemeliharaan/ workorder.", "d. Meminta tanda tangan pengguna, buk pekerjaan alat telah dilakukan", "e. Mencatat di kartu pemeliharaan alat."],
        answer: "a. Mencatat pekerjaan alat lain yang akan dilakukan berikutnya."
    },
    {
        question: "Untuk peningkatan kinerja Alat, maka langkah yang dilakukan adalah pemeliharaan alat secara berkala. Sebutkan langkah apa saja untuk pemeliharaan alat Hematology Analyzer?",
        options: ["a. Cek fungsi-fungsi tombol, bersihkan alat, cek fungsi liquid syringe, bersihkan tombol.", "b. bersihkan aspira on needle, cek fungsi liquid syringe, cek aspira on nedle, bersihkan", "c. Cek fungsi-fungsi tombol, bersihkan aspira on needle, bersihkan tombol, bersihkan alat", "d. Cek fungsi-fungsi tombol, bersihkan aspira on needle, cek fungsi liquid syringe", "e. Cek fungsi-fungsi tombol, bersihkan aspira on needle, cek fungsi liquid syringe, bersihkan alat"],
        answer: "e. Cek fungsi-fungsi tombol, bersihkan aspira on needle, cek fungsi liquid syringe, bersihkan alat"
    },
    {
        question: "Seorang dosen menunjukkan jenis-jenis elektrode yang bersifat induk f pada Peralatan Diathermy. Sebutkan Jenis-jenis elektrode tersebut ?",
        options: ["a. Elektrode Bantalan, Monode, dan Minode.", "b. Elektrode Piringan,Elektrode khusus, dan Monode", "c. Elektrode Bantalan, Elektrode piringan dan elektrode khusus", "d. Elektrode Kabel, Elektrode Bantalan, dan elektrode piringan.", "e. Elektrode kabel, Monode, dan Diplode"],
        answer: "e. Elektrode kabel, Monode, dan Diplode"
    },
    {
        question: "Seorang perawat merasa dak nyaman melihat perilaku tenaga elektromedis dalam hal memberikan pelayanan pemeliharan alat baby inkubator, karena alat terebut kurang mendapatkan perawatan yang memadai. Sehingga dilaporkan keatasannya. Tindakan apa yang akan dilakukan oleh kepala Instalasi Pemeliharaan Sarana Rumah Sakit?",
        options: ["a. Menegur secara lisan kepada tenaga elektromedis", "b. Memberi sangsi terhadap tenaga elektromedis", "c. Menegur secara tertulis tenaga elektromedis", "d. Menegur secara tertulis dan melakukan pembinaan", "e. Menegur keras kepada tenaga elektromedis"],
        answer: "a. Menegur secara lisan kepada tenaga elektromedis"
    },
    {
        question: "Rumah Sakit berencana melakukan pengadaan peralatan endoskopi untuk melengkapi peralatan ruang bedah. Alat Sterilisasi manakah yang digunakan untuk mensterilkan fi ber op k endoskopi?",
        options: ["a. Autoclave", "b. Oven", "c. Cairan Desinfectan", "d. Sterilisator basah", "e. Sterilisator kering"],
        answer: "c. Cairan Desinfectan"
    },
    {
        question: "Pada pemakaian alat Ven lator, set TV 600mL, RR 12, I:E Ra o 1:2, FiO2 80%, PEEP 5, error pada display Low gas supply. Bagaimana mengatasi masalah tersebut",
        options: ["a. Set Oxygen blender ke ra o 50%", "b. Set Alarm Se ng, Pindahkan mode ven lator ke CPAP dan set Oxigen blender ke ra o 50 %", "c. Periksa Tekanan supply udara tekan (Air) dan Oxygen, tambahkan tekanan gas tersebut", "d. Pindahkan mode ven lator ke CPAP", "e. Ma kan alarm dengan menekan tombol reset, Set Oxigen blender ke ra o 50%."],
        answer: "c. Periksa Tekanan supply udara tekan (Air) dan Oxygen, tambahkan tekanan gas tersebut"
    },
    {
        question: "Rumah Sakit anda melakukan pengadaan alat kesehatan baru berupa sebuah Sphygmomanometer. Kelengkapan apakah yang harus ada di Sphygmomanometer ?",
        options: ["a. Manset", "b. Stetoskop", "c. Y Konektor", "d. Alkohol", "e. Air raksa"],
        answer: "a. Manset"
    },
    {
        question: "Autoclave sebagai alat pemanas tertutup yang digunakan untuk mensterilisasi suatu benda menggunakan uap bersuhu dan bertekanan tinggi. Alat ini harus melalui pengecekan bertahap sebelum digunakan. Jika pada autoclave terjadi kerusakan saat mematikan pemasokan uap, apa yang harus dilakukan oleh seorang teknisi?",
        options: ["a. Memastikan alat sudah terhubung pada sumber PLN", "b. Memeriksa timer yang dapat diprogram ON/OFF pada paket kontrol utilitas", "c. Memeriksa elemen, berfungsi atau tidak", "d. Memeriksa termostat yang terdapat pada Autoclave", "e. Memeriksa fuse yang terdapat pada Autoclave"],
        answer: "b. Memeriksa timer yang dapat diprogram ON/OFF pada paket kontrol utilitas"
    },
    {
        question: "Seorang radiografer datang ke IPSRS melaporkan bahwa alat rontgen tidak bisa dilakukan ekspos. Setelah dilakukan pemeriksaan ternyata keping anoda tidak dapat berputar. Bagaiamanakah langkah awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek catu daya pada keping anoda", "b. Cek catu daya pada driver ekspos", "c. Cek catu daya rangkaian ekspos", "d. Cek catu daya pada primer HTT", "e. Catu daya pada stator"],
        answer: "e. Catu daya pada stator"
    },
    {
        question: "Seorang perawat merasa dak nyaman dengan perilaku tenaga elektromedis dalam hal memberikan pelayanan pela han pengoperasian alat bay inkubator karena berkali-kali alat terebut kurang mendapatkan perawatan yang memadai. Tindakan apa yang akan dilakukan oleh kepala Instalasi Pemeliharaan Sarana Rumah Sakit.",
        options: ["a. .Menegur secara lisan kepada tenaga elektromedis", "b. Memberi sangsi terhadap tenaga elektromedis", "c. Menegur secara tertulis dan melakukan pembinaan", "d. Menegur secara tertulis tenaga elektromedis", "e. Menegur keras kepada tenaga elektromedis"],
        answer: "c. Menegur secara tertulis dan melakukan pembinaan"
    },
    {
        question: "Pada ruangan OK sebuah rumah sakit akan mengadakan sebuah operasi laparoscopy. Sebagai seorang elektromedis diminta untuk menyiapkan alat bedah yang tepat adakan",
        options: ["a. Catter", "b. Elektro Surgery Unit", "c. Harmonik scapel", "d. Pisau bedah", "e. Gunting Bedah"],
        answer: "c. Harmonik scapel"
    },
    {
        question: "Sebuah alat Inkubator yang digunakan untuk Terapi di suatu rumah sakit, ternyata suhu udara di dalam alat tersebut dak sesuai dengan kebutuhan suhu bayi yang seharusnya. Langkah Apa yang dilakukanuntuk menangani menangani tersebut ?",
        options: ["a. Melakukan pemeriksaan rangkaian heater/termostat.", "b. Melakukan pemeriksaan, pengukuran, penggan an spare part heater/termostat", "c. Melakukan pemeriksaan seluruh rangkaian pada inkubator", "d. Melakukan pemeriksaan catu daya listrik Inkubator", "e. Melakukan pemeliharaan ru n dan kalibrasi agar suhu heater/thermostat sesuai dengan standar"],
        answer: "a. Melakukan pemeriksaan rangkaian heater/termostat."
    },
    {
        question: "Suction pump banyak digunakan pada saat kegiatan operasi di ruang bedah yaitu untuk menghisap cairan pada pasien. Seorang user sedang mengoperasikan suction pump. Section pump tersebut sudah terhubung dengan sumber tegangan PLN dan saklar sudah pada posisi ON . Indikator tegangan tidak menyala sehingga alat gagal untuk dioperasikan. Penyebabnya adalah....",
        options: ["a. Katup pada suction pump tersumbat", "b. Pegangan lepas", "c. Tegangan yang putus atau kesalahan listrik", "d. Karet penutup di vacum regulator telah usang", "e. Kebocoran pada tabaung penghisap"],
        answer: "c. Tegangan yang putus atau kesalahan listrik"
    },
    {
        question: "Peralatan Diathermy yang berada pada ruang fi sioterapi memiliki radiasi frekuensi nggi cukup besar yang dapat mempengaruhi tubuh dan peralatan diagnos k lainnya. Apa yang diperlukan untuk meminimalisasi efek radiasi tersebut ?",
        options: ["a. Tembok yang tebal", "b. Tembok yang dilapisi Timbal", "c. Sangkar Faraday", "d. Pemberian peredam pada tembok", "e. Filter ak f pada panel listriknya"],
        answer: "c. Sangkar Faraday"
    },
    {
        question: "Dokter bedah di suatu Rumah Sakit hendak melakukan pembedahan pada seorang pasien di ruang operasi menggunakan Electrosurgery Unit (ESU). ESU yang dioperasikan menggunakan mode monopolar. Namun ketika proses pembedahan berlangsung terdapat arus bocor pada elektroda. Langkah pemeriksaan apakah yang sebaiknya dilakukan oleh pihak Instalasi Pemeliharaan Sarana medik (IPS) Rumah Sakit ?",
        options: ["a. Memastikan fuse masih bekerja", "b. Memeriksa masalah sambungan kabel elektroda", "c. Melakukan pengukuran tegangan dari jala-jala PLN", "d. Memeriksa catu daya yang didapat sesuai spesifikasi alat", "e. Memastikan elektroda ground terpasang"],
        answer: "e. Memastikan elektroda ground terpasang"
    },
    {
        question: "Pada sebuah ESU (Electrosurgical Unit) telah dianalisa bahwa alat tersebut mengalami kerusakan, yaitu electrode tidak mengeluarkan HF. Tindakan apa yang harus dilakukan untuk mengatasi hal tersebut ?",
        options: ["a. Cek sistem grounding di jaringan kabel (terputus atau tidak)", "b. Cek electrode dan modul pembangkit HF", "c. Cek kabel power supply", "d. Cek nilai grounding yang tidak bagus", "e. Mengecek adanya HF"],
        answer: "b. Cek electrode dan modul pembangkit HF"
    },
    {
        question: "Pada pengoperasian pesawat panoramic dental X-ray, setelah kolimasi penyinaran pada pasien dilakukan dan faktor eksposure ditentukan. Tiba saatnya melakukan eksposure namun pada saat hand swicth ditekan untuk melaksanakan eksposure, gantry panoramic dak dapat dapat berputar. Apa penyebab gantry panoramic dak dapat berputar pada kasus diatas ?",
        options: ["a. Lampu kolimasi ma", "b. Tabung X-ray rusak", "c. Kaset untuk fi lm belum dimasukan pada tempatnya", "d. Filament pada tabung sinar X putus", "e. Pesawat panoramic dental belum dihidupkan"],
        answer: "b. Tabung X-ray rusak"
    },
    {
        question: "Pada alat suction pum pada sebuah rumah sakit dilaporkan terjadi rembesan cairan di sekitar body alat. Analisa awal sebagai seorang eletromedis adalah",
        options: ["a. Selang penghubung tidak rapat", "b. Terjaadi kerusakan pada fius", "c. Perlu dikalibrasi ulang", "d. Motor tidak bekerja dengan maskimal", "e. Daya tidak sesuai spesifikasi"],
        answer: "a. Selang penghubung tidak rapat"
    },
    {
        question: "Pada alat doppler Frekuensi detak jantung janin lebih tinggi dibandingkan dengan detak jantung sang ibu yaitu janin 120 - 160 denyut permenit/ frekuensi detak 2-3 hz sedangkan jantung sang ibu sekitar 80 - 90 denyut per menit), maka alat doppler dibutuhkan bagian dari rangkaian alat untuk memisahkan frekuensi tersebut diatas. Apa nama rangkaian tersebut?",
        options: ["a. Notch filter", "b. High pass filter", "c. Low pass filter", "d. Band pass filter", "e. Bandwith filter"],
        answer: "d. Band pass filter"
    },
    {
        question: "Seorang tenaga elektromedik diminta untuk menganalisa sekaligus memperbaiki kerusakan pada alat suction pump , setelah menjalani pemeriksaan ternyata alat tersebut diketahui mengalami masalah pada botol penampung cairan yaitu saat botol dalam keadaan penuh pompa hisap tidak berhenti dalam menghisap cairan sehingga cairan tumpah keluar dari botol penampungan. Diketahui kondisi botol penampung cairan tidak dalam keadaan bocor, tekanan dan suction regulator juga dalam keadaan baik. Tindakan apa yang harus dilakukan oleh tenaga elektromedik tersebut ?",
        options: ["a. Mengganti motor", "b. Memeriksa tombol switch", "c. Memeriksa over flow protection", "d. Memeriksa pompa hisap", "e. Mengganti manometer dengan yang baru"],
        answer: "c. Memeriksa over flow protection"
    },
    {
        question: "Rumah sakit memiliki dental unit yang terletak di poli gigi. Dental unit merupakan alat untuk memeriksa dan menentukan pengobatan bagi pasien. Biasanya untuk menunjang perawatan gigi dan mulut (pengeboran, penambalan, pembersihan, dan pemeriksaan). Sebutkan yang bukan bagian dari pesawat dental unit yaitu?",
        options: ["a. Radiograph viewer", "b. Contraplanar", "c. Air turbine handpiece", "d. Foot controller", "e. Tray assembly"],
        answer: "b. Contraplanar"
    },
    {
        question: "Sebuah alat EKG yang digunakan untuk diagnos k di suatu rumah sakit, pada jarum stylus alat tersebut terlihat gambar/hasil yang dak sesuai dengan standar. Langkah Apa yang dilakukanuntuk menangani menangani tersebut ?",
        options: ["a. Melakukan pemeriksaan rangkaian catu daya", "b. Melakukan pemeriksaan rangkaian penguat", "c. Melakukan pemeriksaan, pemanas stylus.", "d. Melakukan penggan an jarum stylus dan mereset.", "e. Melakukan pemeriksaan rangkaian display"],
        answer: "c. Melakukan pemeriksaan, pemanas stylus."
    },
    {
        question: "Seorang perawat hendak menyalakan alat tensimeter digital dikarenakan harus melakukan pemeriksaan, namun ketika tombol power pada alat ditekan, tidak terjadi apa-apa atau alat tidak menyala. Sebagai tenaga elektromedis, kemungkinan apa yang terjadi pada alat tensimeter digital tersebut?",
        options: ["a. Baterai habis", "b. Bulb bocor", "c. Alat rusak", "d. Manset bocor", "e. Sensor rusak"],
        answer: "a. Baterai habis"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat infan warmer yang di njau dari aspek pengamanan. Aspek pengamanan apa saja yang dilakukan pada peralatan infan warmer?",
        options: ["a. Memasang sensor suhu", "b. Memasang trafo isolasi.", "c. Memperdalam grounding listrik", "d. Memasang rangkaian pengaman dioda", "e. Memasang sensor kelembaban"],
        answer: "c. Memperdalam grounding listrik"
    },
    {
        question: "Pada pemasangan Dental unit membutuhkan prainstalasi yang harus dikerjakan terlebih dahulu. Karena pada dental unit menggabungkan fungsi udara dan fungsi air secara bersamaan. Sebutkan langkah-langkah persiapan prainstalasi yang harus disiapkan oleh eleltromedis dalam pemasangan peralatan dental unit pada suatu rumah sakit ?",
        options: ["a. Menyiapkan tata udara, sumber air, menyiapkan saluran pembuangan", "b. Menyiapkan tata suara, menyiapkan saluran pembuangan, menyiapkan sumber elektrik (listrik)", "c. Membuat ruang operator,sumber air, saluran air, menyiapkan kompressor", "d. Menyiapkan sumber air dan pembuangan, sumber elektrik (listrik), menyiapkan compressor", "e. Membuat ruang kedap suara, Saluran air, tegangan listrik menyiapkan compressor"],
        answer: "b. Menyiapkan tata suara, menyiapkan saluran pembuangan, menyiapkan sumber elektrik (listrik)"
    },
    {
        question: "Sebuah alat rontgen, pada saat dilakukan proses ekspos akan membangkitkan radiasi sinar-x dengan panjang gelombang yang tidak homogen, hal ini akan menyebabkan tingkat energi yang berbeda-beda, adapun radiasi yang energi-nya lemah harus ditahan agar tidak keluar dari tabung sinar-x. Komponen apakah yang digunakan sebagai penahan pada kasus tersebut?",
        options: ["a. Plat alumunium yang terletak antara window dan colimator.", "b. Moving grid yang terletak antara window dan colimator.", "c. Stasioner grid yang terletak setelah window dan colimator.", "d. Sationer grid yang terletak antara window dan colimator.", "e. Plat alumunium yang terletak setelah window dan colimator."],
        answer: "a. Plat alumunium yang terletak antara window dan colimator."
    },
    {
        question: "Seorang dokter PPDS kebidanan diminta untuk mempelajari cara mengoperasikan alat USG. Disebut apa sensor yang digunakan pada alat USG?",
        options: ["a. Ultrasound", "b. Mikrosound", "c. Mic condensor", "d. Tranduser", "e. Mesin USG"],
        answer: "d. Tranduser"
    },
    {
        question: "Seorang perawat mengeluh kepada tenaga elektromedis tentang keraguan dalam menggunakan alat Sphygmomanometer apakah alat ini baik atau dak. Tindakan apa yang dilakukan untuk mengecek alat tersebut ?",
        options: ["a. Mengecek permukaan air raksa pada saat dibuka penguncinya.", "b. Mengecek Kebocoran tekanan slang", "c. Memompa manset secara berkala", "d. Memeriksa Kebocoran air raksa melebihi 2 %.", "e. Membuka balon pemompa dan air raksa turun secara pelahan"],
        answer: "d. Memeriksa Kebocoran air raksa melebihi 2 %."
    },
    {
        question: "Camber pada alat suction pum sebuah rumah sakit dilaporkan pecah dan sdh tidak dapat menampung cairan dengan baik. Sebagai seorang elektromedis hal apa saja yang perlu dilakukan?",
        options: ["a. Menginfentaris dulu peralatan yang diperlukan", "b. Melaporkan kepada atasan", "c. Memngganti camber yang sesuai dengan spesifikasi", "d. Mencari perusahaan penyedia yang harganya murah", "e. Mengganti dengan barang lain yang bisa dipakai"],
        answer: "c. Memngganti camber yang sesuai dengan spesifikasi"
    },
    {
        question: "Pada saat pemakaian alat EKG, dokter menginginkan perekaman hanya pada Lead II dan V2. Bagaimana cara mengatasinya ?",
        options: ["a. Set copy recording, Set mode ke Auto recvording, Set muscle Filter", "b. Set mode ECG ke Auto Mode, Set Pengaturan ke Gain X ½, dan Set Copy recording.", "c. Set muscle Filter, Set copy recording, Set mode ECG Auto Mode", "d. Set mode ECG ke Manual Mode, pilih rekaman untuk LEAD II, lanjutkan dengan V2", "e. Set Pengaturan ke Gain X ½, Set mode ECG ke anual Mode dan Set copy recording"],
        answer: "d. Set mode ECG ke Manual Mode, pilih rekaman untuk LEAD II, lanjutkan dengan V2"
    },
    {
        question: "Alat infusion Pump yang digunakan, telah selesai mengalirkan cairan infus, yang ditandai dengan infusion End, namun masih terdapat cairan infus yang ada didalam infus container. Sebutkan langkah- apa yang dilakukan untuk memeriksa kepas an akurasi volume cairan infus yang telah dialikan",
        options: ["a. Cek fungsi sensor Tetes", "b. Cek Set Target volume", "c. Cek infus set", "d. Cek waktu kadaluarsa infus set", "e. Cek se ng infus rate"],
        answer: "c. Cek infus set"
    },
    {
        question: "Alat USG penunjukan tanggal pada display tidak sesuai. Lalu operator mengatur ulang penanggalan. Setelah alat dimatikan dan dinyalakan kembali, tanggal yang ditampilkan menunjukkan tanggal ketika USG dibeli. Bagian apa yang harus diperiksa oleh tenaga elektromedis untuk menangani ketidaksesuaian tersebut?",
        options: ["a. Backlight", "b. Main Prosessor Board", "c. Keypad", "d. Transduser", "e. LCD Display"],
        answer: "b. Main Prosessor Board"
    },
    {
        question: "Patient Monitor merupakan suatu alat untuk pengukuran secara continue yang mempunyai beberapa parameter, salah satunya yaitu Tekanan Darah (NIBP) yang berfungsi untuk menampilkan hasil pengukuran tekanan darah pasien. Pada patient monitor, berapakah range tekanan darah yang menunjukkan bahwa pasien mengalami hipotensi?",
        options: ["a. <90", "b. 90 - 120", "c. 140 - 159", "d. 160 - 169", "e. 120 - 139"],
        answer: "a. <90"
    },
    {
        question: "Radiologi merupakan cabang ilmu yang berkaitan dengan penggunaan sinar X untuk kepen ngan terapu k dan diagnosa.akan tetapi pihak Poli radiologi pada saat tenaga elektromedis melakukan perbaikan alat tersebut. Yang dak termasuk sifat dari sinar-x adalah?",
        options: ["a. Dapat mengionisasi bahan", "b. Dapat terjadi hamburan bila menembus bahan", "c. Dapat menembus bahan.", "d. Dapat diserap bahan atau terjadi atenuasi", "e. Dapat menghasilkan efek photolistrik."],
        answer: "e. Dapat menghasilkan efek photolistrik."
    },
    {
        question: "Alat Anesthesy baru saja dibeli oleh rumah sakit, sebagai tenaga elektromedis diminta untuk melakukan pemasangan awal alat tersebut. Perlengkapan manakah dibawah ini yang bukan termasuk bagian-bagian alat anesthesy tersebut ?",
        options: ["a. Memasang Rangkaian Pa ent", "b. Memasang CO2 Absorber", "c. Memasang Anesthesy Gas Scavenging System", "d. Memasang Sphygmomanometer", "e. Memasang Vaporizer"],
        answer: "d. Memasang Sphygmomanometer"
    },
    {
        question: "Seorang petugas radiologi datang ke IPSRS melaporkan bahwa terdapat kerusakan pada alat rontgen diagnostik, yang tidak dapat dioperasikan sebagaimana mestinya. Sebagai langkah awal, petugas elektromedis akan menganalisis kemungkinan penyebab kasus yang terjadi. Bagaiamanakah langkah awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek tegangan pada rerminal masukan rectifier HTT", "b. Cek tegangan pada terminal masukan HTT.", "c. Cek tegangan pada terminar luaran HTT.", "d. Cek tegangan pada terminal masukan tabung sinar-x.", "e. Cek tegangan pada terminal luaran autotrafo."],
        answer: "b. Cek tegangan pada terminal masukan HTT."
    },
    {
        question: "Pada suatu ketika seorang perawat yang akan menggunakan alat suction pump. Sebelum mengoperasikan alat tersebut perawat melakukan instalasi terlebih dahulu terhadap alat tersebut ketika semua bagian-bagian dari alat tersebut sudah terpasang perawat melakukan kalibrasi atau pengecekan sebelum alat benar-benar digunakan. Ketika alat tersebut diuji coba menggunakan tangan perawat dengan cara menutup lubang chateter, ternyata terdapat masalah pada alat tersebut, suction pump tidak dapat menghisap dan juga pada meter indikator tekanan tidak terlihat adanya pergerakan jarum. Apa penyebab dari trouble diatas?",
        options: ["a. Rusaknya filter suction pump", "b. Fuse sudah tidak dapat berfungsi", "c. Adanya kerusakan pada regulator pengatur", "d. Pemasangan klep terbalik dan kurang rapatnya menutup tabung", "e. Terdapat kebocoran pada slang"],
        answer: "e. Pemasangan klep terbalik dan kurang rapatnya menutup tabung"
    },
    {
        question: "Rumah sakit mendapatkan alat Anesthesi baru datang hibah dari bantuan WHO dan pihak rumah sakit akan menggunakan alat tersebut di kamar operasi. Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertugas menangani alat tersebut ?",
        options: ["a. Melakukan pencatatan dengan data-data yang tertera dalam alat, uji fungsi dan uji coba.", "b. Melakukan pencatatan harian, mingguan, bulanan dan tahunan.", "c. Melakukan pencatatan data alat monitoring, dan pemeliharaan pencatatan alat anaesthesi.", "d. Melakukan pencatatan, pemerikasaan, pemeliharaan dan mengevaluasi", "e. Melakukan pencatatan, pemeriksaan, pemeliharaan dan mengevaluasi kondisi alat."],
        answer: "a. Melakukan pencatatan dengan data-data yang tertera dalam alat, uji fungsi dan uji coba."
    },
    {
        question: "ESU (Electro Surgery Unit) mengalirkan arus bolak-balik dengan frekuensi nggi melalui electroda ke jaringan tubuh. Sehingga dalam pemeliharaan alat perlu diperha kan adanya pengaman terhadap luka bakar yang dak diinginkan. Apa yang tepat dilakukan oleh tenaga elektromedik untuk pemeliharaan alat tersebut?",
        options: ["a. Melakukan pemeriksaan pada electroda ak f harus selalu dalam keadaan baik.", "b. Melakukan pemeriksaan tombol dosis arus.", "c. Melakukan pemeriksaan bagian pembangkit frekuensi.", "d. Melakukan pemeriksaan Pa ent plate dan jack dalam keadaan baik dan bersih.", "e. Melakukan pemeriksaan bagian fuse."],
        answer: "d. Melakukan pemeriksaan Pa ent plate dan jack dalam keadaan baik dan bersih."
    },
    {
        question: "Seorang operator radiologi melaporkan permasalahan alat rontgen konvensional di instalasi Radiologi. Petugas tersebut mengatakan bahwa alat rontgen yang digunakan memberikan hasil foto rontgen dengan tingkat kehitaman kurang optimal, padahal parameter yang digunakan sudah sesuai dengan standar. Setelah dilakukan pemeriksaan ternyata masa kalibrasi masih belum kadaluwarsa. Apakah tindakan awal yang harus sudara lakukan terhadap kasus tersebut?",
        options: ["a. Cek arus tabung dan identifikasi penggunaan developer", "b. Cek developer dan identifikasi lama penggunaannya", "c. Cek arus filamen dan identifikasi penggunaan fixer", "d. Cek larutan fixer dan identifikasi lama penggunaannya", "e. Cek arus filamen dan identifikasi penggunaan film"],
        answer: "b. Cek developer dan identifikasi lama penggunaannya"
    },
    {
        question: "Suatu alat Electro Surgery Unit di ruang operasi telah telah dipersiapkan untuk melakukan tindakan operasi, semua VCC telah terpasang dengan baik dan sesuai dengan spesifikasi alat, saat ditekan tombol cutting alat tidak bekerja, indicator Elektrode Netral berkedip. Tindakan apakah yang anda lakukan untuk memperbaiki alat tersebut?",
        options: ["a. Mengukur tegangan listrik masuk", "b. Mengecek modul pembangkit HF", "c. Mengganti Elektrode dengan Elektrode yang layak", "d. Mengganti sekring alat", "e. Periksa kabel power"],
        answer: "c. Mengganti Elektrode dengan Elektrode yang layak"
    },
    {
        question: "Seorang Dokter spesialis kebidanan mengoperasikan alat USG dengan menggunakan bermacam tranduser untuk pemeriksaan janin dari trimester 1 sampai trimester ke 3. Tranduser manakah yang digunakan untuk memeriksa janin di usia 1 bulan ?",
        options: ["a. Transducer Transvaginal.", "b. Traducer Tranperineal", "c. Tranducer Transendent", "d. .Tranducer Transuperi fi sial.", "e. Tranduser trans abdominal"],
        answer: "a. Transducer Transvaginal."
    },
    {
        question: "Digunakan untuk apakah warna kuning pada tombol elektroda tersebut Electro Surgery Unit (ESU)?",
        options: ["a. Monopolar", "b. Coagula ng", "c. Bledding", "d. Bipolar", "e. Cut"],
        answer: "e. Cut"
    },
    {
        question: "Alat CTG, Doppler dan USG adalah alat diagnostik yang memiliki prinsip dasar yang sama, yaitu memanfaatkan gelombang ultrasound. Ketiga alat tersebut juga memiliki sebuah display yang dapat digunakan untuk melihat hasil pemeriksaan. Pada alat CTG terdapat display, ternyata display tidak tampil. Apa yang menyebabkan hal tersebut?",
        options: ["a. Probe yang kotor", "b. Ada masalah pada rangkaian display", "c. Gel yang kurang banyak", "d. Tegangan dari PLN yang tidak tetap", "e. Probe tidak sensitif lagi"],
        answer: "a. Probe yang kotor"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat Baby Inkubator yang di njau dari aspek pengamanan. Jika terjadi arus bocor aspek pengamanan apa saja yang perlu dilengkapi",
        options: ["a. Memasang kelembaban, kulit dan oksigen.", "b. Memasang sensor udara, suhu dan kelembaban", "c. Memasang sensor udara, kelembaban dan oksigen", "d. Memasang sensor suhu, Kelembaban, dan kulit.", "e. Memasang sensor suhu,oksigen dan kelembaban"],
        answer: "d. Memasang sensor suhu, Kelembaban, dan kulit."
    },
    {
        question: "Bedside Monitor elektronik digunakan untuk mengumpulkan dan menampilkan data fisiologis pasien. Data tersebut dikumpulkan menggunakan sensor non-invasif dari pasien dan merekam data rutin. Berikut ini merupakan keuntungan dari pemakaian bedside monitor, kecuali?",
        options: ["a. Parameternya yang lengkap", "b. Lebih jelas menggambarkan monitoring tubuh, seperti NIPB, spo2, Respiration rate", "c. Digunakan untuk mengevaluasi keadaan tubuh pasien yang dipasag bedside monitor", "d. Sangat menguntungkan untuk memeriksa kelainan pada tubuh pasien", "e. Tidak bisa ditampilkan di dalam monitor"],
        answer: "e. Tidak bisa ditampilkan di dalam monitor"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem capasitor dischrge yang sedang digunakan cyto bed di ruang perawatan, petugas mengatakan bahwa alat tersebut tidak dapat dilakukan ekspos karena kV meter tidak dapat menunjuk sesuai dengan pemilihan kV. Setelah dilakukan pemeriksaan dan dianalais ada kerusakan pada sistem pengisian capasitor. Apakah tindakan awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek catu rangkaian pengisian capasitor dan tegangan filamen", "b. Cek catu daya dan rangkaian pengisian capasitor", "c. Cek catu rangkaian pengisian dan tegangan capsitor", "d. Cek catu daya dan tegangan capsitor", "e. Cek catu rangkaian pengisian capasitor dan tegangan tabung sinar-x"],
        answer: "b. Cek catu daya dan rangkaian pengisian capasitor"
    },
    {
        question: "Seorang petugas melaporkan kerusakan pealatan rontgen sistem condensator discharges yang berada di instalasi radiologi. Petugas mengatakan bahwa hasil gambar pada film selalu terpotong pada area yang sama. Lebih lanjut petugas mengatkan bahwa selain hasil gambar yang terpotong, alat rontgen juga tidak bisa dilakukan proses pengosongan capasitor. Apakah analisis kerusakan pada kasus tersebut?",
        options: ["a. Shutter membuka tidak sempurna dan tidak dapat kembali ke posisi awal", "b. Posisi window pada rumah tabung tidak dapat membuka secara sempurna", "c. Tombol discharges pada panel kontrol tidak berfungsi", "d. Pada window terdapat benda yang menghalangi keluarnya berkas sinar-x", "e. Ada benda pada kolimator yang menghalangi keluarnya berkas sinar-x"],
        answer: "a. Shutter membuka tidak sempurna dan tidak dapat kembali ke posisi awal"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat ESU yang di njau dari aspek pengamanan. Aspek pengamanan alat apa saja, jika terjadi arus bocor ?",
        options: ["a. Memasang rangkaian rek fi er", "b. Memasang stabilizer", "c. Memasang rangkaian pengaman dioda", "d. Memasang autotrafo.", "e. Memperdalam grounding listrik"],
        answer: "e. Memperdalam grounding listrik"
    },
    {
        question: "Alat suction pum pada sebuah rumah sakit yang masih baru dilaporkan terjadi kerusakan. Langkah apa saja sebagai seorang elektromedis yang perlu dilakukan",
        options: ["a. Langsung membongkar alat sesuai dengan kewenangan", "b. Membeli alat baru agar bekerja maksimal", "c. Menginfentaris alat tersebut untuk selanjutnya diperbaiki", "d. Mencari dokumen apabila alat tersebut dalam masa garansi", "e. Mengganti dengan sprare part yang perlu diganti"],
        answer: "d. Mencari dokumen apabila alat tersebut dalam masa garansi"
    },
    {
        question: "Sebuah alat CTG sudah terhubung dengan sumber listrik, 2 transduser terpasang pada pasien, alat dihidupkan dan terdengan suara detuk jantung janin (DJJ) yang tidak jernih (Noise). Kemungkinan apa yang tidak dilakukan pada saat persiapan pengoperasian?",
        options: ["a. Event mark probe tidak terpasang dengan benar", "b. Transduser belum diolesi ultrasound gel", "c. Baterai habis", "d. Printer kerta habis", "e. Transduser belt terlalu kencang"],
        answer: "b. Transduser belum diolesi ultrasound gel"
    },
    {
        question: "Terjadi perbedaan pengukuran tekanan darah seorang pasien pada saat menggunakan sphygmomanometer dibandingkan dengan pengukuran tekanan darah menggunakan Non Invasive Blood Pressure (NIBP). Langkah pertama yang dilakukan oleh tenaga elektromedis?",
        options: ["a. Melakukan pemeriksaan arde ( Grounding )", "b. Melakukan pengukuran Arus Bocor", "c. Melakukan pengecekan interfensi frekuensi", "d. Melakukan pemeriksaan catu daya listrik", "e. Melakukan kalibrasi"],
        answer: "e. Melakukan kalibrasi"
    },
    {
        question: "Seorang Elektromedis sedang melakukan pemeriksaan alat rontgen diagnostik di instalasi radiologi. Setelah di identifikasi pada alat tersebut ternyata proses ekpose tidak diawali dengan pemanasan awal ( pre-heating ) pada filamen tabung sinar-x. Komponen apakah penyebab kerusakan pada kasus tersebut?",
        options: ["a. Filamen tabung sinar-x", "b. Standby resistor", "c. mA limiter", "d. mA control", "e. Trafo filamen"],
        answer: "b. Standby resistor"
    },
    {
        question: "Alat ven lator baru saja diterima oleh Rumah Sakit dan direncanakan akan segera digunakan. Di Ruangan manakah penempatan alat tersebut diatas",
        options: ["a. Ruang IGD", "b. Poli Kebidanan", "c. Poli paru", "d. Poli syaraf", "e. Poli Gigi"],
        answer: "a. Ruang IGD"
    },
    {
        question: "Sebuah Rumah Sakit Melakukan Pengadaan Satu Infan warmer baru yang akan dimanfaatkan untuk terapi bagi bayi. Di ruang manakah alat tersebut ditempatkan ?",
        options: ["a. Ruang Ob- Gyn", "b. IGD", "c. Instalasi Rawat Inap", "d. Instalasi Rehab Medis", "e. NICU"],
        answer: "a. Ruang Ob- Gyn"
    },
    {
        question: "Seorang teknisi yang melakukan perbaikan alat electrosurgery unit setiap 6 bulan sekali menemukan permasalahan pada alat tersebut, saat teknisi memeriksa bagian high frequensi outputnya terlalu tinggi, perbaikan atau tindakan apa yang dapat dilakukan pada alat tersebut ?",
        options: ["a. Memeriksa generator high frekuensi", "b. Mengganti elektroda aktif dan pasif", "c. Memeriksa kembali sambungan power supply", "d. Mengganti komponen IC pada power supply", "e. Memeriksa rangkaian osilator sebagai pembangkit frekuensi"],
        answer: "a. Memeriksa generator high frekuensi"
    },
    {
        question: "Microtome Blades merupakan alat yang digunakan dalam pembuatan potongan histologi jaringan. Dimanakah alat microtome blades ditempatkan?",
        options: ["a. Laboratorium Hematologi", "b. Laboratorium Mikrobiologi", "c. Laboratorium Fisika", "d. Laboratorium Patologi Anatomi", "e. Laboratorium Kimia Klinik"],
        answer: "d. Laboratorium Patologi Anatomi"
    },
    {
        question: "Pada RSUD Sidoarjo sebuah alat ESU yang digunakan untuk pendukung alat operasi. Kami mendapatkan keluhan dari operator bahwa alat tersebut tidak bekerja, setelah dilakukan pengecekan jala- jala PLN sudah terhubung dengan baik, tidak ada arus yang bocor. Apa yang menyebabkan alat tersebut tidak dapat bekerja ?",
        options: ["a. pengatur frekuensi rusak", "b. switch on/off mengalami kerusakan", "c. elektroda bipolar putus", "d. generator pada ESU mengalami kerusakan", "e. kabel power putus"],
        answer: "d. generator pada ESU mengalami kerusakan"
    },
    {
        question: "Seorang tenaga Laboratorium mengeluhkan pengelihatan pada mikroskop cahaya yang kurang jelas . akan tetapi secara kasat mata lensa okuler maupun obyek k dalam keadaan bersih. Sebagai Tenaga Elektromedis apa yang akan di lakukan untuk menangani alat tersebut ?",
        options: ["a. . Melakukan se ng ulang posisi lensa.", "b. Menggan lensa objec f.", "c. Menggan lensa okuler", "d. Menggan lampu mikroskop.", "e. Mengatur kondesor"],
        answer: "d. Menggan lampu mikroskop."
    },
    {
        question: "Salah satu bagian pemeliharaan preven f adalah pemantauan, dengan pemantauan dihara an peralatan medik dalam kondisi siap pakai. Yang dak termasuk dalam pemantauan adalah?",
        options: ["a. Pemantauan kinerja alat.", "b. Pemantauan pengguna alat", "c. Pemantauan kondisi lingkungan.", "d. Pemantauan /pengukuran aspek pengukuran.", "e. Pemantauan fi sik alat."],
        answer: "b. Pemantauan pengguna alat"
    },
    {
        question: "Sebutkan langkah-langkah apa saja yang dilakukan untuk pengoperasian alat Infusion Pump",
        options: ["a. Tekan tombol On/OFF, Set Rate, Set target volume", "b. Tekan tombol On/OFF, Set target volume, Tekan Tombol Start", "c. Tekan tombol On/OFF, Set Rate, tekan tombol start", "d. Tekan tombol On/OFF, Set Rate, Set target volume, tekan tombol start", "e. Tekan tombol On/OFF,"],
        answer: "d. Tekan tombol On/OFF, Set Rate, Set target volume, tekan tombol start"
    },
    {
        question: "Di sebuah rumah sakit, seorang dokter akan mengoperasi pasiennya mengunakan Electrosurgery Unit (ESU) dengan merk ERBE tipe D-72072 / ICC 350 E INT. Namun ketika mulai digunakan, display pada alat tidak menyala dan alat mengeluarkan asap. Tindakan apa yang harus dilakukan?",
        options: ["a. Mengganti elektroda", "b. Mengganti kabel power", "c. Mengecek modul pembangkit HF", "d. Mengganti saklar ON/OFF", "e. Mengecek fuse , supply , dan blok rangkaian display"],
        answer: "e. Mengecek fuse , supply , dan blok rangkaian display"
    },
    {
        question: "Ips menerima laporan ada alat suction pum terjadi sebuah kerusakan ruangan rawat inap. Sebagai seorang elektromedis Langkah awal yang dilakukan adalah?",
        options: ["a. Meninfentaris dulu alat yang rusak", "b. Menyiapkan bahasn habis pakai", "c. Mendokumentasikan alat tersebut", "d. Memberikan laporan ke atasan atas kerusakan tersebut", "e. Melakukan respon sesuai SOP"],
        answer: "e. Melakukan respon sesuai SOP"
    },
    {
        question: "Pada alat suction pum pada sebuah rumah sakit dilaporkan cairan masuk Kembali kemotor. Sebagai seorang eletromedis Analisa awal adalah",
        options: ["a. Selang penghubung bocor", "b. Perlu kalibrasi ulang", "c. Cember tidak vacuum", "d. Motor tidak bekerja maksimal", "e. Pelampung pada cember tidak bekerja"],
        answer: "e. Pelampung pada cember tidak bekerja"
    },
    {
        question: "Seorang petugas medis sedang menggunakan alat suction pump. Ketika alat d tekan ON, alat berjalan normal bisa digunakan untuk menghisap cairan. Namun ketika di atur tekanannya, jarum pada indikator tekanan tidak berubah. Sebagai teknisi elektromedik apa yang harus dilakukan ?",
        options: ["a. Cek regulator", "b. Cek barometer", "c. Ganti katub pada pompa", "d. Ganti dengan alat yg baru", "e. Ganti selang vacum suction"],
        answer: "b. Cek barometer"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat Rontgen konvensional ke instalasi pemeliharaan sarana Rumah Sakit, petugas mengatakan bahwa pengaturan kV pada posisi 60 dan 65 tidak dapat dilakukan, sedangkan untuk pengatur lainnya tidak ada masalah (dapat diatur). Bagaimana tindakan sudara terhadap kasus tersebut diatas ?",
        options: ["a. Cek rangkaian skunder tegangan tinggi -perbaiki tap-tap pada KV selector", "b. Cek rangkaian primer tegangan tinggi -perbaiki tap-tap pada LVC", "c. Cek rangkaian primer tegangan tinggi -perbaiki tap-tap pada KV selector", "d. Cek rangkaian skunder tegangan tinggi - memperbaiki tap-tap HTT", "e. Cek rangkaian skunder tegangan tinggi -perbaiki tap-tap pada LVC"],
        answer: "c. Cek rangkaian primer tegangan tinggi -perbaiki tap-tap pada KV selector"
    },
    {
        question: "Ultrasonografi (USG) merupakan alat yang dapat menampilkan gambar atau citra dari kondisi bagian dalam tubuh. Alat ini memanfaatkan frekuensi tinggi untuk menampilkan citra dari dalam tubuh. Apakah fungsi dari bagian console pada alat USG?",
        options: ["a. Mencetak hasil USG", "b. Console berfungsi sebagai penampil hasil dari USG", "c. Sumber tegangan pada alat USG", "d. Untuk menggerakkan kursor pada USG", "e. Bagian yang merupakan tombol fungsi alat"],
        answer: "e. Bagian yang merupakan tombol fungsi alat"
    },
    {
        question: "Sebuah suction pump digunakan untuk menghisap cairan dengan jumlah yang banyak. Saat dalam pemakaian, alat tersebut tiba - tiba berhenti menghisap cairan tersebut. Masalah yang mungkin terjadi sehingga mengakibatkan suction pump berhenti menghisap cairan secara tiba - tiba yaitu :",
        options: ["a. Air sudah mencapai batas over flow protection", "b. Adanya kerusakan pada daya hisap manometer", "c. Motor pada suction pumps harus diberi pelumas", "d. Membran karet pada penutup suction pump kurang rapat", "e. Adanya kerusakan pada ujung saluran selang penyedot"],
        answer: "a. Air sudah mencapai batas over flow protection"
    },
    {
        question: "Dental Unit adalah alat yang digunakan di klinik atau poli gigi untuk mendiagnosis dan melakukan perawatan pada pasien , dimana dalam pengoperasiannya memerlukan air dan angin/udara. Sumber tenaga udara pada pesawat dental unit diperoleh dari?",
        options: ["a. switch valve", "b. compressor", "c. turbine jet/bor jet", "d. scaller", "e. spray git"],
        answer: "b. compressor"
    },
    {
        question: "Fetal Doppler digunakan untuk mendeteksi detak jantung janin didalam kandumgan. Fetal Doppler menggunakan baterai sebagai sumber listriknya. Pada saat fetal Doppler akan digunakan ternyata alat dak dapat dihidupkan. Langkah pertama yang dilakukan seorang elektromedis untuk mengatasi masalah ini.",
        options: ["a. Menggan probe", "b. Menggan cover", "c. Menggan baterai", "d. Menggan speaker", "e. Menggan tombol"],
        answer: "c. Menggan baterai"
    },
    {
        question: "Di suatu puskesmas terdapat sebuah sterilisator kering. Para petugas di puskesmas mengaku jarang menggunakan sterilisator kering tersebut dikarenakan display pada sterilisator tersebut tidak mengalami perubahan sama sekali ketika digunakan. Setiap kali digunakan display suhu selalu menunjukkan suhu yang tetap meskipun heater telah bekerja. Sebagai seorang tenaga teknik elektromedik apa yang akan anda lakukan?",
        options: ["a. Memeriksa tegangan input sterilisator", "b. Memeriksa sambungan kabel pada sterilisator", "c. Memeriksa sambungan pada display sterilisator", "d. Mengganti heater sterilisator", "e. Mengganti sensor suhu sterilisator"],
        answer: "e. Mengganti sensor suhu sterilisator"
    },
    {
        question: "Rumah Sakit anda melakukan pengadaan alat kesehatan baru berupa sebuah Sphygmomanometer. Kelengkapan alat manakah yang merupakan kelengkapan yang ada di Sphygmomanometer ?",
        options: ["a. Stetoskop", "b. Y Konektor", "c. Manset", "d. Air raksa", "e. Alkohol"],
        answer: "c. Manset"
    },
    {
        question: "Autoclave sangat dibutuhkan untuk mensterilkan berbagai macam alat . Cara kerja dari autoclave adalah saat tombol ON autoclave ditekan, motor triway valve akan bekerja untuk mengalirkan air dalam tanki menuju chamber. Pada suatu saat user akan menggunakan alat tersebut akan tetapi alat ini tidak dapat dapat dihidupkan ketika tombol power dalam keadaan ON. Sebagai seorang teknisi apa yang harus dilakukan untuk menyelesaikan masalah tersebut ?",
        options: ["a. Melakukan pengecekan pada tegangan yang masuk pada alat dan mengecek tegangan stop kontak yang ada.", "b. Memeriksa motor triway valve", "c. Mengganti tombol ON yang ada pada tombol power.", "d. Mengganti motor triway valve dengan yang baru", "e. Mengganti dengan yang baru kabel yang digunakan untuk menghubungkan pada stop kontak."],
        answer: "a. Melakukan pengecekan pada tegangan yang masuk pada alat dan mengecek tegangan stop kontak yang ada."
    },
    {
        question: "Seorang dosen menerangkan secara garis besar dari blok diagram Peralatan Diathermy. Sebutkan urutan blok Diagram tersebut ?",
        options: ["a. Rangkain power suply, Rangkaian osilator, dan rangkaian komparator.", "b. RangkaianPawer Supply,Pembangkit frekuensi nggi, dan Rangkaian Modulator", "c. Rangkaian pawer suply, Rangkaian Komparator, dan Rangkaian Keluaran", "d. Rangkaian Power suply, Rangkaian Timer,dan rangkaian keluaran .", "e. Rangkaian Power suply, Rangkaian Oscillator, dan rangkaian keluaran."],
        answer: "e. Rangkaian Power suply, Rangkaian Oscillator, dan rangkaian keluaran."
    },
    {
        question: "USG menggunakan gelombang suara berupa Ultrasound untuk menampilkan citra tubuh dalam manuasia. Dengan menggunakan probe sebagai transduser yang berfungsi sebagai transmi er sekaligus juga sebagai receiver . Pada USG ini dak dapat menampilkan citra gambar, tetapi karakter graphik seper nama pasien, dll tetap muncul di layar monitor. Kerusakan tersebut disebabkan oleh ?",
        options: ["a. Keyboard rusak", "b. Monitor bermasalah", "c. Kabel probe rusak", "d. Probe USG rusak", "e. Power supply rusak"],
        answer: "c. Kabel probe rusak"
    },
    {
        question: "ESU adalah suatu alat bedah dengan memanfaatkan arus listrik frekuensi tinggi untuk membelah, membekukan dan mengeringkan kulit. Pada satu peristiwa ESU pada elektroda panas namun tidak dapat digunakan untuk membelah, membekukan dan menggeringkan. Apa yang anda lakukan sebagai teknisi Elektromedis?",
        options: ["a. Mengecek rangkaian kontrol", "b. Mengecek thermofuse", "c. Mengecek rangkaian power supply", "d. Mengecek rangkaian tranduser", "e. Mengecek rangkaian osilator"],
        answer: "e. Mengecek rangkaian osilator"
    },
    {
        question: "Sterilisator kering berfungsi untuk mensterilkan alat dengan cara merusak sel mikroorganisme pada suhu antara 160 C - 180 C. Pada sebuah sterilisator kering alat tidak dapat menyala saat akan digunakan, apa yang harus dilakukan oleh seorang teknisi?",
        options: ["a. Memeriksa circulating fan", "b. Menyambung fuse thermal", "c. Memastikan alat sudah terhubung dengan jala-jala PLN", "d. Memeriksa tegangan pada alat menggunakan multimeter", "e. Mengganti heater o o"],
        answer: "b. Menyambung fuse thermal"
    },
    {
        question: "Pemanfaatan alat rontgen di layanan kesehatan harus memenuhi aspek keselamatan, baik keselelamatan listrik, mekanik dan utamanya adalah keselamatan radiasi. Apakah tujuan keselamatan radiasi pada pernyataan tersebut?",
        options: ["a. untuk mengurangi pengaruh radiasi pada pasien, pekerja radiasi dan lingkungan hidup", "b. untuk melindungi pasien, pekerja radiasi dan lingkungan hidup", "c. untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup", "d. untuk melindungi pasien, pekerja radiasi dan masyarakat", "e. untuk mengurangi pengaruh radiasi pada pasien dan pekerja radiasi"],
        answer: "c. untuk melindungi pasien, pekerja radiasi, masyarakat dan lingkungan hidup"
    },
    {
        question: "Pada ruang bayi sebuah rumah sakit meminta untuk didatangkan alat suction pum. Sebagai seorang elektromedis pertimbangan apa yang akan dilakukan?",
        options: ["a. Mencari alat yang ber daya hisap besar", "b. Memilihkan alat yang paling mahal", "c. Memilih alat yang sudah terkalibrasi", "d. Mencari alat yang sesuai spesifikasi ruang bayi", "e. Memasangkan alat yang portable"],
        answer: "d. Mencari alat yang sesuai spesifikasi ruang bayi"
    },
    {
        question: "Pada ruang Ok sebuah rumah sakit akan melakukan operasi pembedahan. Keuntungan utama menggunakan harmonic scapel adalah?",
        options: ["a. Memotong dan membakar secara bersamaan", "b. Tidak memerlukan annastesi", "c. Tidak menimbulkan bekas luka", "d. Pemotongan presisi", "e. Hasil pemotongan sangat rapi"],
        answer: "a. Memotong dan membakar secara bersamaan"
    },
    {
        question: "Pada alat suction pum pada sebuah rumah sakit dilaporkan daya hisap maksimal namun cairan yang masuk pada cember tidak maksimal. Sebagai eorang elektromedis Analisa awal adalah?",
        options: ["a. Daya tidak sesuai", "b. Perlu kalibrasi ulang", "c. Karet pada cember tidak elastis", "d. Motor tidak bekerja dengan maksimal", "e. Kerusakan fius"],
        answer: "c. Karet pada cember tidak elastis"
    },
    {
        question: "Dokter kandungan atau bidan menggunakan mesin USG dengan berbagai transduser untuk memeriksa janin pada trimester pertama sampai ketiga. Tujuan dari pemeriksaan USG pada Trimester Pertama, kecuali?",
        options: ["a. Melihat tali pusar", "b. Meyakinkan adanya hamil ektopik ( hamil di luar rahim ) atau hamil anggur", "c. Meyakinkan kemungkinan kehamilan", "d. Mengukur usia perkembangan atau panjang crown-rump", "e. Meyakinkan detak jantung"],
        answer: "a. Melihat tali pusar"
    },
    {
        question: "Seorang petugas radiologi melaporkan kerusakan X-Ray unit di di instalasi Radiologi. Petugas mengatakan bahwa semua parameter pada meja kontrol dalam kondisi normal, namun saat dilakukan persiapan dengan menekan tombol ( preperation ), tidak muncul indikator ready pada meja kontrol tersebut sehingga ekspos tidak dapat dilakukan. Bagaiamanakah langkah awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Mengidentifikasi kV meter, mA meter dan timer", "b. Mengidentifikasi tegangan, arus dan resistansi .", "c. Mengidentifikasi kerja anoda putar, filamen dan time deley .", "d. Mengidentifikasi tegangan, arus dan daya", "e. Mengidentifikasi tegangan, arus dan grounding ."],
        answer: "c. Mengidentifikasi kerja anoda putar, filamen dan time deley ."
    },
    {
        question: "Rumah Sakit anda tahun ini melakukan penambahan layanan baru, berupa poli syaraf. Peralatan mana sajakah yang ditempatkan di ruangan Poli Syaraf?",
        options: ["a. Stetoskop, Sphygmomanometer, EGG, Laparoscopy.", "b. Stetoskop, Sphygmomanometer, USG, UST.", "c. Stetoskop, Sphygmomanometer, EEG, EMG.", "d. Stetoskop, Sphygmomanometer, ECG, De fi brillator.", "e. Stetoskop, Sphygmomanometer, ENG, Slit Lamp."],
        answer: "c. Stetoskop, Sphygmomanometer, EEG, EMG."
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa Blok Diagram alat Elektro Surgery Unit secara rinci dan menerangkan fungsi dari masing-masing blok diagram. Bagian Blok manakah yang menghasilkan frekuensi untuk digunakan sebagai cu ng ?",
        options: ["a. Blok Pembangkit frekuensi blended", "b. Blok Pembangkit frekuensi kon nu", "c. Blok Pembangkit frekuensi spark gap.", "d. Blok Modulator.", "e. Blok Pembangkit frekuesi surge."],
        answer: "b. Blok Pembangkit frekuensi kon nu"
    },
    {
        question: "Seorang petugas datang ke instalasi pemeliharaan sarana Rumah Sakit (IPSRS), melaporkan kerusakan alat dental x-ray panoramic yang berada di instalasi Radiologi, petugas mengatakan bahwa ketika di operasikan alat bisa scaning tpi tidak keluar sinar-x. Apakah tindakan awal yang harus saudara lakukan terhadap kasus tersebut diatas ?",
        options: ["a. Cek tegangan catu daya dan perbaiki rangkaian exposure", "b. Cek driver motor scaning dan perbaiki rangkaian exposure", "c. Cek tegangan autotrafo dan perbaiki rangkaian exposure", "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure", "e. Cek autotrafo dan perbaiki rangkaian exposure"],
        answer: "d. Cek rangkaian primer tegangan tinggi dan perbaiki rangkaian exposure"
    },
    {
        question: "Pada sebuah rumah sakit akan mengadakan pembelian alat suction pump baru. Sebagai seorang eletromedis pertimbangan pertimbangan awal adalah?",
        options: ["a. Melihat tren yang ada dipasaran", "b. Mencari harga yang paling rendah", "c. Mencari tipe & model terbaru", "d. Meinfentaris kebutuhan dan penempatan", "e. Mencari perusahaan yang diinginkan"],
        answer: "d. Meinfentaris kebutuhan dan penempatan"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat X Ray yang di njau dari aspek Factor penyinaran. Factor-faktor apakah yang mempengaruhi penyinaran sinar X ?",
        options: ["a. Milli Ampere , Intensitas dan KV.", "b. Milli Ampere Second, KVp, dan SID", "c. Milli Ampere, SID dan KVp", "d. Milli Ampere , KV dan High Frequency", "e. Milli Ampere Second, KV dan Distance."],
        answer: "b. Milli Ampere Second, KVp, dan SID"
    },
    {
        question: "Seorang Elektromedis melakukan analisis kerusakan pesawat Rontgen terjadi pada trafo filamen, Dari hasil pengukuran pada trafo filamen diperoleh induktansi sebesar 20 m H. Jika dioperasikan pada sistim jaringan 1 phase dengan frekeunsi 50 hz Berapakah nilai reaktansi induktif pada trafo filamen tersebut",
        options: ["a. 6,28 Ohm", "b. 3,14 Ohm", "c. 1 Ohm", "d. 10 Ohm", "e. 100 Ohm"],
        answer: "a. 6,28 Ohm"
    },
    {
        question: "Seorang Elektromedis sedang melakukan perbaikan kerusakan pada sebuah alat rontgen di instalasi radiologi, setelah dilakukan pemeriksaan terhadap alat tersebut dan dianalisis bahwa filamen pada tabung sinar-x tersebut dipastikan rusak (putus). Apakah tindakan yang harus dilakukan pada kasus tersebut?",
        options: ["a. Memperbaiki tabung sinar-x sesuai dengan spesifikasi", "b. Mengganti filamen baru sesuai dengan spesifikasi", "c. Mengganti tabung sinar-x baru sesuai dengan spesifikasi", "d. Memperbaiki filamen tabung sinar-x yang putus", "e. Menseting ulang filamen tabung sinar-x sesuai kondisi awal"],
        answer: "c. Mengganti tabung sinar-x baru sesuai dengan spesifikasi"
    },
    {
        question: "Dalam mengoperasikan alat medik ada beberap persyaratan agar alat dioperasikan secara aman dan benar. Berikut ini yang termasuk aspek syarat pengoperasian adalah?",
        options: ["a. Sarana Ruangan", "b. Instalasi air", "c. Kelengkapan Alat.", "d. Keamanan pasien", "e. Sarana komputer."],
        answer: "c. Kelengkapan Alat."
    },
    {
        question: "Seorang dokter akan melakukan tindakan operasi minor pada pasiennya menggunkan alat electro surgary unit (ESU) agar pendarahan yang terjadi pada saat tindakan pembedahan dapat diminimalisir. Sebuah elektroda yang berbentuk pinset digunakan untuk menjepit jaringan yang tidak diinginkan, kemudian arus listrik dengan frekuensi tinggi mengalir dari ujung elektroda melewati jaringan tersebut. Apabila terjadi arus bocor pada elektroda,maka hal yang harus dilakukan adalah....",
        options: ["a. Cek modul pembangkit HF, jika rusak ganti modul tersebut", "b. Cek kabel power pastikan sudah terhubung dengan jala-jala PLN", "c. Cek fuse , jika putus ganti yang baru", "d. Kalibrasi alat yang dilakukan oleh badan kalibrasi", "e. Cek apakah elektroda pasif / ground sudah terpasang atau belum"],
        answer: "e. Cek apakah elektroda pasif / ground sudah terpasang atau belum"
    },
    {
        question: "Suatu alat autoclave (stem sterilisator) di RSU Dr. Soebandi sedang akan dioperasikan ( on ). Lampu indikator alat on sudah menyala, tekanan, timer dan suhu sudah diatur, tombol start sudah ditekan, suhu mengalami kenaikan dan timer berjalan saat suhu tercapai. Namun saat timer berjalan suhu mengalami penurunan dan tidak kunjung naik kembali ke suhu setting . Apakah tindakan perbaikan yang harus dilakukan ?",
        options: ["a. Cek display suhu setting , jika suhu setting berubah maka kembalikan sesuai setting awal", "b. Cek timer , apabila tidak berfungsi maka gantilah timer nya", "c. Cek microswitch (SHG) jika tidak berfungsi maka ganti mikroswitch (SHG)", "d. Cek tegangan sumber apakah sesuai dengan spesifikasi yang dibutuhkan alat atau tidak. Jika tidak maka cari tegangan sumber yang sesuai", "e. Cek pengukur tekanan, apabila rusak maka ganti"],
        answer: "c. Cek microswitch (SHG) jika tidak berfungsi maka ganti mikroswitch (SHG)"
    },
    {
        question: "Menurut organisasi kesehatan dunia (WHO), tekanan darah normal bagi orang dewasa adalah 120/80. Angka 120 menunjukkan tekanan sistolik, yaitu tekanan saat jantung memompa darah ke seluruh tubuh. Sementara angka 80 menunjukkan tekanan diastolik, yaitu tekanan saat otot jantung relaksasi dan menerima darah yang kembali dari seluruh tubuh. Satuan tekanan darah dalam WHO adalah?",
        options: ["a. BPM", "b. BO", "c. RR", "d. mmHg", "e. mL"],
        answer: "d. mmHg"
    },
    {
        question: "Seorang Perawat melaporkan kepada Instalasi Pemeliharaan Sarana Rumah Sakit tentang alat Sphygmomanometer yang jarang di pantau fungsinya, sehingga dia merasa takut menggunakan alat tersebut. Apa yang dilakukan oleh tenaga elektromedis dalam kasus tersebut?",
        options: ["a. Kebocoran slang dan akurasi penunjukkan", "b. Kebocoran slang dan air raksa", "c. Kebocoran Air raksa dan akurasi penunjukkan", "d. Kebocoran tekanan dan Akurasi penunjukkan", "e. Kebocoran air raksa dan tekanan"],
        answer: "d. Kebocoran tekanan dan Akurasi penunjukkan"
    },
    {
        question: "Seorang petugas radiologi datang ke IPSRS melaporkan kerusakan alat rontgen diagnostik. Petugas mengatakan bahwa ketika alat tersebut digunakan untuk pemeriksaan pada seorang pasien, tiba-tiba muncul error. Setelah dilakukan pemeriksaan ternyata ada kerusakan komponen yang berupa trafo filamen. Jenis trafo yang bagaimanakah yang digunakan pada kasus tersebut?",
        options: ["a. trafo step-down", "b. trafo step-up", "c. trafo ferit step-down", "d. autotrafo step-down", "e. autotrafo step-up"],
        answer: "a. trafo step-down"
    },
    {
        question: "Seorang perawat belum mengetahui pengamanan penggunaan alat Infusion Pump dan menginginkan diajari oleh tenaga elektromedis. Bagaimanakan cara mengajarinya?",
        options: ["a. Pengamanan debu , cairan habis, dan gelembung udara", "b. Pengamanan cairan habis, gelembung udara, dan cairan mampat", "c. Pengamanan Cairan mampat, aliran darah balik dan cairan habis.", "d. Pengamanan aliran darah balik, gelembung udara dan debu", "e. Pengamanan Gelembung udara, debu, cairan habis."],
        answer: "b. Pengamanan cairan habis, gelembung udara, dan cairan mampat"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem capasitor dischrge yang sedang digunakan cyto bed di ruang perawatan, petugas mengatakan bahwa alat tersebut tidak dapat dilakukan ekspos karena kV meter tidak dapat menunjuk sesuai dengan pemilihan kV. Setelah dilakukan pemeriksaan dan dianalais ada kerusakan pada sistem pengisian capasitor. Apakah tindakan awal yang harus sudara lakukan terhadap kasus tersebut diatas ?",
        options: ["a. Cek catu daya dan tegangan capsitor", "b. Cek catu rangkaian pengisian capasitor dan tegangan filamen", "c. Cek catu daya dan rangkaian pengisian capasitor", "d. Cek catu rangkaian pengisian capasitor dan tegangan tabung sinar-x", "e. Cek catu rangkaian pengisian dan tegangan capsitor"],
        answer: "c. Cek catu daya dan rangkaian pengisian capasitor"
    },
    {
        question: "Seorang perawat pada ruangan operasi melaporkan pada bagian IPS rumah sakit bahwa indicator ( ON ) peralatan suction pump berfungsi dengan baik tetapi tidak mau bekerja dengan optimal disebabkan karena alat tidak bisa menghisap cairan. Sebagai seorang teknisi alat kesehatan langkah apa yang paling tepat untuk mengatasi masalah tersebut ?",
        options: ["a. Mengganti tabung dengan yang baru", "b. Membersihkan motor dan memberikan minyak pada sistem piston", "c. Mengecek fungsi bagian - bagian suction pump", "d. Menambal selang yang bocor", "e. Mengadakan pembelian alat baru"],
        answer: "b. Membersihkan motor dan memberikan minyak pada sistem piston"
    },
    {
        question: "Seorang Dokter spesialis kebidan komplain kepada tenaga elektromedis tentang hasil gambar dari USG ternyata dak sesuai dengan gambar yang dihasilkan banyak udara yang terekam. Langkah pertama apakah yang dilakukan?",
        options: ["a. Memeriksa Traducer pakai aguasonic gel.", "b. Memeriksa Transduce bekerja apa", "c. Memeriksa posisi obyek ada airnya dak", "d. Memeriksa dayanya cukup apa dak.", "e. Memeriksa obyek bergerak-gerak apa dak"],
        answer: "a. Memeriksa Traducer pakai aguasonic gel."
    },
    {
        question: "Seorang dokter melakukan pemeriksaan menggunakan alat CTG. Dalam penggunaannya, alat CTG memiliki 2 elektroda. Dimanakah letak kedua lektroda alat CTG akan digunakan?",
        options: ["a. Di perut ibu", "b. Di bagian punggung janin ibu", "c. Di mana saja bisa asal di daerah perut ibu", "d. Di bagian fundus ibu", "e. Di bagian punggung janin dan fundus ibu"],
        answer: "e. Di bagian punggung janin dan fundus ibu"
    },
    {
        question: "Sebuah alat EEG yang baru dibeli, membutuhkan ruangan untuk pengoperasian yang ideal, sebagai seorang teknisi elektromedis saudara diminta untuk memberikan informasi yang dibutuhkan. Apa saja persyaratan ruangan yang dibutuhkan",
        options: ["a. Ruangan memiliki sumber tegangan, ber AC, terhubung dengan ground", "b. Ruangan memiliki sumber ber ground, medan magnet dak mempengaruhi perekaman, kondisi ruang tertutup, ber AC, pengaturan kelembaban dan tekanan udara sesuai dengan spesi fi kasinya", "c. Ruangan memiliki sumber tegangan, ber AC, terhubung dengan ground, memiliki meja periksa pasien, Ruangan tertutup.", "d. Ruangan memiliki sumber tegangan, ber AC, terhubung dengan ground ada ruang tunggu keluarga pasien", "e. Ruangan memiliki sumber tegangan, ber AC, terhubung dengan ground, memiliki meja periksa pasien"],
        answer: "b. Ruangan memiliki sumber ber ground, medan magnet dak mempengaruhi perekaman, kondisi ruang tertutup, ber AC, pengaturan kelembaban dan tekanan udara sesuai dengan spesi fi kasinya"
    },
    {
        question: "Ke ka sedang melakukan pengukuran alat (kalibrasi) dengan ven lator tester dengan se ng Set TV 600mL, RR 12, I:E 1:2, PEEP : 5, hasil pada alat kalibrasi : TV : 600, RR 12, I:E 1:2, PEEP : 5 dan pada alat ven lator TV 400, RR 12, I:E 1:2, terdapat perbedaan antara display alat dengan alat ukur. Langkah apa yang dilakukan oleh tenaga elektromedis menangani alat tersebut ?",
        options: ["a. Lakukan pemeriksaanpada tekanan gas supply dan pa ennt circuit", "b. Lakukan pemeriksaan pada fl ow sensor dan lakukan penggan an", "c. Lakukan perubahan pada se ng TV", "d. Lakukan Pemeriksaan pada pa ent circui", "e. Lakukan Penggan an pa ent circuit"],
        answer: "b. Lakukan pemeriksaan pada fl ow sensor dan lakukan penggan an"
    },
    {
        question: "Seorang Dokter ppds kebidanan belajar mengoperasikan alat USG dengan menggunakan bermacam tranduser yang dipakai untuk pemeriksaan objek yang diam maupun yang bergerak . Untuk memeriksa obyek yang diam dan tranducernya diam, mode manakah yang akan digunakan?.",
        options: ["a. Mode E Scanning", "b. Mode A scanning.", "c. Mode M scaning.", "d. Mode TM Scanning", "e. Mode B Scanning"],
        answer: "b. Mode A scanning."
    },
    {
        question: "Rumah Sakit A membeli alat baru sebuah Hematology Analyzer untuk bagian laboratorium. Cairan manakah yang digunakan untuk pengoperasian alat tersebut ?",
        options: ["a. Cairan Pembilas", "b. Cairan Elektrolit", "c. Cairan Diluent", "d. Air", "e. Cairan Cleansing"],
        answer: "c. Cairan Diluent"
    },
    {
        question: "Sebagai upaya untuk meningkatkan fungsi dan kegunaan Alat Bedside Monitor, secara periodik dilakukan pencatatan terhadap kelengkapan Acessories dan bahan habis pakai , sehingga saat alat digunakan sudah siap pakai. Acessories apa saja yang dibutuhkan sebagai kelengkapan bedside monitor",
        options: ["a. Pa ent Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, Adult NIBP cu ff , Adult NIBP nose, Neonate NIBP cu ff , Nenonate NIBP Hose, Temperature Probe ,Thermal Prin ng Paper", "b. Pa ent Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, NIBP cu ff , NIBP Hose, Temperature Probe, Adult NIBP cut o ff , Thermal Prin ng Paper", "c. Pa ent Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, Adult NIBP cu ff , Adult NIBP Hose, Neonate NIBP cu ff , Nenonate NIBP Hose, Temperature Probe.", "d. Pa ent Cable, Spo2 Sensor, NIBP cut o ff , NIBP Hose, Temperature Probe, Neonate SPO2 Sensor, Thermal Prin ng Paper", "e. Pa ent Cable, Spo2 Sensor, NIBP cu ff , NIBP Hose, Temperature Probe, Thermal Paper , Neonate SPO2 Sensor, Adult NIBP cut o ff"],
        answer: "c. Pa ent Cable, Adult Spo2 Sensor, Neonate SPO2 Sensor, Adult NIBP cu ff , Adult NIBP Hose, Neonate NIBP cu ff , Nenonate NIBP Hose, Temperature Probe."
    },
    {
        question: "Autoclave merk Hiclave HVP-50 merupakan alat sterilisator yang menghasilkan uap panas dengan tekanan uap yang mencapai 121 C, dengan tekanan uap yang cukup besar perlu sebuah monitor yang dapat menginformasikan pengguna tentang keadaan suatu autoclave untuk meminimalisir adanya kecelakaan saat pengoperasian. Apabila terjadi suatu kerusakan pada display autoclave, apa yang harus dilakukan oleh seorang teknisi?",
        options: ["a. Memeriksa kondisi sekitar autoclave", "b. Memeriksa sumber panas pada autoclave", "c. Mengganti timer pada autoclave", "d. Memeriksa tegangan input pada mainboard autoclave", "e. Mengganti thermostat pada autoclave"],
        answer: "d. Memeriksa tegangan input pada mainboard autoclave"
    },
    {
        question: "Suc on pump digunakan secara ru n oleh bagian bedah pada rumah sakit untuk menghisap cairan tubuh pasien. Untuk menjaga agar motor pump bekerja dengan baik, apa yang akan dilakukan oleh tenaga elektromedis?",
        options: ["a. Melilit ulang motor secara berkala.", "b. Ruangan sekitar motor harus dingin agar motor dak cepat panas.", "c. Memanasi motor sebelum penggunan alat.", "d. Membersihkan motor dari cairan pasien secara berkala.", "e. Menggan oli motor secara berkala."],
        answer: "e. Menggan oli motor secara berkala."
    },
    {
        question: "Pada alat suction pum sebuah rumah sakit dilaporkan daya hisap tersendat sehingga cairan yang masuk pada cember tersendat, motor dalam keadaan baik, selang ratap cember tidak penuh. Analisa awal sebagai seorang eletromedis adalah",
        options: ["a. Terjadi sumbatan pada selang", "b. Perlu kalibrasi ulang", "c. Fisu rusak", "d. Motor tidak bekerja", "e. Cember tidak vacuum"],
        answer: "a. Terjadi sumbatan pada selang"
    },
    {
        question: "Salah satu aksesoris dari USG adalah transduser. Transduser merupakan perangkat pemindaian genggam, dimana dapat memancarkan gelombang suara yang kemudian diperkuat dan dipantulkan saat mengenai benda padat. Mode ini dapat membantu melacak pergerakan sel darah saat ada nada pantulan gelombang suara berubah, yang dikenal sebagai efek Doppler. Berikut merupakan gelombang yang mempengaruhi efek dopler, kecuali?",
        options: ["a. Gelombang bunyi", "b. Gelombang mikro", "c. Gelombang cahaya", "d. Gelombang bias", "e. Gelombang elektromagnetik"],
        answer: "d. Gelombang bias"
    },
    {
        question: "Sebuah Alat Auto Analyzer Spektrofotometer akan dipasang di sebuah laboratorium. Sebelum pemasangan diperlukan instalasi penunjang. Instalasi apa saja yang perlu dipersiapkan untuk alat tersebut ?",
        options: ["a. Instalasi listrik dan Instalasi Gas Medik", "b. Instalasi Gas Medik dan INstalasi Air", "c. Instalasi listrik dan Instalasi Air", "d. Instalasi gas Medik dan Jaringan Komputer", "e. Instalasi Listrik dan Jaringan Komputer"],
        answer: "d. Instalasi gas Medik dan Jaringan Komputer"
    },
    {
        question: "Sebuah rumah sakit memutuskan menggunakan so ware manajemen pemeliharaan opensource yang gra s untuk mengelola asset dan pemeliharaannya . Kelebihan penggunaan manajemen pemeliharaan menggunakan teknologi informasi, diantaranya ?",
        options: ["a. Mengiku pekembangan jaman.", "b. Link dengan alat elektromedik.", "c. Mengurangi duplikasi pencatatan dan mempercepat pencarian informasi.", "d. Monitoring alat elektromedik jarak jauh.", "e. Lebih Modern."],
        answer: "c. Mengurangi duplikasi pencatatan dan mempercepat pencarian informasi."
    },
    {
        question: "Alat Hematology Analyzer baru akan di pasang di Laboratorium. Sebutkan persyaratan apa saja diperlukan yang ideal ?.",
        options: ["a. Ruangan memiliki ruang pemeriksaan dan ruang tunggu pasien", "b. Ruangan memiliki Air Condi on, terhubung dengan ground, ada kran air", "c. Ruangan memiliki sumber tegangan, terhubung dengan ground", "d. Ruangan memiliki sumber tegangan, ber AC, terhubung dengan ground, ada kran air,", "e. Ruangan memiliki sumber tegangan, terhubung ke ground dan ada ruang tunggu pasien"],
        answer: "d. Ruangan memiliki sumber tegangan, ber AC, terhubung dengan ground, ada kran air,"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem capasitor dischrge yang sedang digunakan cyto bed di ruang perawatan, petugas tersebut mengatakan bahwa setelah selesai digunakan sisa muatan capasitor tidak dapat dikosongkan, walaupun tombol pengosongan ditekan terus menerus. Apakah tindakan awal yang harus dilakukan pada kasus tersebut?",
        options: ["a. Cek shutter dan memperbaiki rangkaian pengosongan", "b. Cek kolimator dan memperbaiki rangkaian pengosongan", "c. Cek HTT dan memperbaiki rangkaian pengosongan", "d. Cek stator anode dan memperbaiki rangkaian pengosongan", "e. Cek filamen dan memperbaiki rangkaian pengosongan"],
        answer: "a. Cek shutter dan memperbaiki rangkaian pengosongan"
    },
    {
        question: "Dental Unit adalah alat yang digunakan di klinik atau poli gigi untuk mendiagnosis dan melakukan perawatan pada pasien , dimana dalam pengoperasiannya memerlukan air dan angin/udara. Pada peralatan dental unit terdapat bagian yang berfungsi menghisap air liur yaitu?",
        options: ["a. Handpiece", "b. Saliva Ejector", "c. Three way syringe", "d. Seperator", "e. Dental chair"],
        answer: "b. Saliva Ejector"
    },
    {
        question: "Pasien yang diterima di Instalasi Gawat Darurat sering kali memerlukan pengambilan foto Rontgen. Jenis Alat X-ray manakah yang digunakan di ruang Instalasi Gawat Darurat ?",
        options: ["a. C- Arm X-ray", "b. Mobile X-ray", "c. General X-ray", "d. CT- Scan", "e. Simulator X-ray"],
        answer: "b. Mobile X-ray"
    },
    {
        question: "Seorang perawat ingin mengetahui bagaimana cara menghitung detak jantung per menit dengan menggunakan gambar ECG, jika diketahui jarak k R ke R yang ditunjukkan pada kertas ECG berjarak 3 kotak besar dengan menggunakan kecepatan kertas 25 mm/dt. Berapa jumlah detak jantung per menit ?",
        options: ["a. 50 BPM", "b. 100 BPM", "c. 60 BPM", "d. 40 BPM", "e. 75 BPM"],
        answer: "b. 100 BPM"
    },
    {
        question: "Alat EEG baru di poli syaraf. Saat dilakukan uji fungsi dengan menggunakan phantom, ternyata hasil perekaman masih tampak sinyal gangguan, meskipun sudah dipasang sangkar faraday. Apa yang tepat dilakukan oleh seorang tenaga Elektromedis untuk itu ?",
        options: ["a. Memperdalam Grounding", "b. Memindahkan alat EEG ke ruangan lain.", "c. Mengukur kembali tahanan grounding ruangan", "d. Menambah rapat sangkar faraday", "e. Mencari sumber Interferensi"],
        answer: "c. Mengukur kembali tahanan grounding ruangan"
    },
    {
        question: "Microscope cahaya merupakan alat yang digunakan untuk melihat bagian-bagian yang sangat kecil pada suatu benda yang dak dapat dilihat dengan mata telanjang. User mengeluhkan pengelihatan pada mikroskop cahaya kurang jelas padahal sudah dibersihkan lensanya dan masih bagus. Apakah yang harus Saudara lakukan untuk menangani alat tersebut ?",
        options: ["a. Melakukan se ng ulang posisi lensa.", "b. Menggan lensa objec f.", "c. Mengatur kondesor.", "d. Menggan lampu mikroskop.", "e. Menggan lensa okuler."],
        answer: "d. Menggan lampu mikroskop."
    },
    {
        question: "Rumah sakit A membeli alat USG Seorang tenaga elektromedis di tugaskan untuk membuat standard operasional prosedure (SOP). Tindakan apa yang tepat oleh seorang tenaga elektromedis sebelum membuat SOP yang baik?",
        options: ["a. Membuat SOP sendiri sesuai dengan pengalaman yang dimiliki", "b. Membaca wirring diagram dan blok diagram alat tersebut", "c. Melakukan uji fungsi", "d. Melakukan pengumpulan data tentang alat tersebut dan spesi fi kasi nya", "e. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat"],
        answer: "e. Membaca terlebih dahulu SOP dari pabrik kemudian melakukan uji kinerja alat"
    },
    {
        question: "Seorang Tenaga elektromedis akan melakukan pemantauan fungsi alat Infusion Pump yang sesuai dengan Standar pengukuran dan kalibrasi. Peralatan apa saja yang dipersiapkan untuk kegiatan tersebut?",
        options: ["a. Peralatan AVO meter, Tool kit, Leaked current meter dan cairan habis.", "b. Peralatan Mul , Tool Kit, Leaked current dan thermohygrometer", "c. Peralatan Tool kit, AVO meter, Pengukur kebocoran infus.", "d. Peralatan Tool Kit, pemantau cairan habis, Mul meter dan thermohygrometer.", "e. Peralatan pemantau cairan habis, gelembung udara, dan AVO meter"],
        answer: "b. Peralatan Mul , Tool Kit, Leaked current dan thermohygrometer"
    },
    {
        question: "RS Sumber Waras sedang melakukan pengadaan alat medis, salah satunya yakni mesin doppler untuk memenuhi kebutuhan riset rumah sakit bersalin. Apa fungsi dari alat Doppler?",
        options: ["a. Alat yang digunakan untuk mendeteksi denyet jantung bayi yang menggunkan prinsip pantulan gelombang elektromagnetik", "b. Alat untuk terapi otot.", "c. Alat yang digunakan untuk penyembuhan penyakit asma", "d. Alat yang digunakan untuk terapi stroke", "e. Alat untuk mengukur tekanan darah"],
        answer: "a. Alat yang digunakan untuk mendeteksi denyet jantung bayi yang menggunkan prinsip pantulan gelombang elektromagnetik"
    },
    {
        question: "Tahapan akhir dari pengoperasian alat elektromedik adalah, pengemasan, yang berpengaruh pada usia alat. Berikut Yang dak termasuk dalam pengemasan alat adalah ?",
        options: ["a. Mencatat beban kerja", "b. Mema kan alat sesuai prosedur .", "c. Menghidupkan alat, sesuai prosedur.", "d. Melepaskan hubungan alat dari catu daya.", "e. Membersihkan alat atau asesori setelah digunakan."],
        answer: "c. Menghidupkan alat, sesuai prosedur."
    },
    {
        question: "Seorang perawat rumah sakit sedang melakukan pemeriksaan menggunakan tensimeter digital. Ketika alat tensimeter dinyalakan, tensimeter tersebut berjalan normal akan tetapi manset tidak berkembang. Sebagai tenaga elektromedis, kemungkinan apa yang terjadi pada alat tensimeter digital tersebut?",
        options: ["a. Manset sudah lama", "b. Bulb sudah lama", "c. Bulb rusak", "d. Manset rusak", "e. Selang manset bocor"],
        answer: "e. Selang manset bocor"
    },
    {
        question: "Berdasarkan analisa kerusakan terhadap alat Suction Pump Portable yang mengalami kurangnya daya hisap, sedangkan kondisi accessories seperti selang dan botol penampungan dalam keadaan normal. Maka untuk mengatasi hal tersebut, tindakan apa yang dilakukan. Tindakan perbaikan yang harus dilakukan?",
        options: ["a. Mengganti selang dengan yang baru", "b. Memeriksa klep hisap & klep buang", "c. Mengganti Filter", "d. Mengganti oli", "e. Overhaull"],
        answer: "b. Memeriksa klep hisap & klep buang"
    },
    {
        question: "Untuk melakukan pemeriksaan jantung dapat dilakukan di klinik ataupun rumah sakit. Banyak prosedur yang dapat dilakukan untuk melakukan pemeriksaan jantung. Pemeriksaan standard yakni menggunakan elektrokardiograf (EKG) dengan metode resting 12-Lead EKG menggunakan 12 elektroda. Pada dasarnya dari beberapa merek atau tipe EKG, dari segi tata cara hampir sama di mulai tahap pra operasional kecuali?",
        options: ["a. Cek power cord", "b. Cek Lingkungan sekitar", "c. Cek kondisi kabel pasien", "d. Menentukan filter", "e. Cek kondisi electrode"],
        answer: "d. Menentukan filter"
    },
    {
        question: "Seorang perawat sedang mengukur tekanan darah pasien menggunakan spymomanometer raksa, perawat tersebut mengalami suatu kendala. Pada saat melakukan pengukuran tekanan darah, terjadi penurunan yang lambat pada air raksa. Sebagai tenaga elektromedis, langkah apa yang pertama kali di lakukan untuk menangani alat tersebut?",
        options: ["a. Membongkar alat untuk melakukan pengecekan", "b. Melakukan pemeriksaan pada tekanan bulb", "c. Melakukan pembersihan tabung", "d. Melakukan pengadaan alat yang baru", "e. Melakukan penggantian manset dengan manset yang baru"],
        answer: "a. Membongkar alat untuk melakukan pengecekan"
    },
    {
        question: "Tenaga elektromedis akan memasang alat USG di rumah sakit. membutuhkan voltage 200V - 220V dan frekuensi 60Hz, ruangan yang terhindar dari interfensi frekuensi. Tindakan apakah yang tepat dilakukan untuk mempersiapkan kelengkapan ruangan yang memenuhi syarat ?",
        options: ["a. Mengukur tahanan groundingnya.", "b. Mengukur dengan Avo Meter", "c. Mengukur tahanan kabel ruangan tersebut", "d. Mengukur sumber tegangan listrik dan frekuensinya.", "e. Mengukur tegangan chasis dan kabel power suply"],
        answer: "d. Mengukur sumber tegangan listrik dan frekuensinya."
    },
    {
        question: "Seorang operator radiologi datang ke IPSRS melaporkan permasalahan alat Rontgen (general X-Ray) di ruang Radiogi, petugas mengatakan bahwa setelah dilakukan foto rontgen, hasil-nya terdapat bayangan baris-baris yang melekat pada film. Apakah tindakan sudara terhadap kasus tersebut diatas ?",
        options: ["a. Cek collimator -atur lapangan penyinaran", "b. Cek meja pasien -bersihkan meja pasien", "c. Cek window -bersihkan/ganti filter alumunium (Al)", "d. Cek collimator -bersihkan/ganti lampu colimator", "e. Cek moving grid -perbaiki rangkaian moving grid"],
        answer: "e. Cek moving grid -perbaiki rangkaian moving grid"
    },
    {
        question: "Pada alat suction pum pada sebuah rumah sakit dilaporkan suara dari motor bergetar keras. Sebagai seorang elektromedis Langkah awal pengecekan adalah?",
        options: ["a. Cek cember apaka masih vacum", "b. Cek sambungan selang ke cember", "c. Cek fius apakah masih bekerja", "d. Cek daya yang masuk pada motor", "e. Cek oli pada motor"],
        answer: "e. Cek oli pada motor"
    },
    {
        question: "Lampu operasi dak sama dengan lampu-lampu pada umumnya, karena lampu operasi harus memiliki syarat: dak boleh panas dan bayangan pada obyek, karena dapat mengganggu proses ndakan operasi, untuk itu lampu operasi memakai lampu halogen. Hal yang perlu diperha kan dalam penggan an lampu halogen adalah?",
        options: ["a. Mengatur posisi lampu.", "b. Lampu Tidak boleh disentuh dengan tangan langsung", "c. Posisi lensa okuler dan obyek f harus pada posisi menyilang", "d. Lampu harus sama nggi.", "e. Warna lampu halogen kuning."],
        answer: "b. Lampu Tidak boleh disentuh dengan tangan langsung"
    },
    {
        question: "Seorang tenaga elektromedis mendapatkan komplain dari dokter spesialis kandungan mengenai hasil USG. Dokter mengatakan bahwa hasil citra USG tidak sesuai, terlalu banyak udara yang terekam. Bagian mana pada USG yang dapat digunakan untuk menampilkan hasil pemeriksaan pasien?",
        options: ["a. CPU", "b. Tranduser", "c. Pulse control", "d. Display (LCD)", "e. Monitor"],
        answer: "d. Display (LCD)"
    },
    {
        question: "Hasil rekaman ekg dak terdapat interpretasi dari pengukuran. Langkah awal apa yang dilakukan oleh tenaga elektromedis untuk kasus tersebut ?",
        options: ["a. Memeriksa se ng alat apakah sudah di set menu interpretasi", "b. Memeriksa hubungan grounding listrik", "c. Memeriksa pemakaian gel ke pasien", "d. Memeriksa Kertas EKG apakah sudah sesuai dengan alat EKG", "e. Memeriksa kabel EKG apakah sudah terpasang dengan benar"],
        answer: "a. Memeriksa se ng alat apakah sudah di set menu interpretasi"
    },
    {
        question: "Seorang operator radiologi melaporkan kerusakan alat rontgen sistem capasitor dischrge yang sedang digunakan cyto bed di ruang perawatan, petugas tersebut mengatakan bahwa setelah selesai digunakan sisa muatan capasitor tidak dapat dikosongkan, walaupun tombol pengosongan ditekan terus menerus. Apakah tindakan awal yang harus sudara lakukan terhadap kasus tersebut diatas ?",
        options: ["a. Cek kolimator dan memperbaiki rangkaian pengosongan", "b. Cek stator anode dan memperbaiki rangkaian pengosongan", "c. Cek shutter dan memperbaiki rangkaian pengosongan", "d. Cek HTT dan memperbaiki rangkaian pengosongan", "e. Cek filamen dan memperbaiki rangkaian pengosongan"],
        answer: "c. Cek shutter dan memperbaiki rangkaian pengosongan"
    },
    {
        question: "Jika pada saat awal user mengoperasikan alat ESU, ternyata terdapat keluhan bahwa display pada alat tersebut tidak menyala dan alat mengeluarkan asap. Sebagai tenaga teknik elektromedik analisis apa yang anda lakukan ?",
        options: ["a. Mengecek sambungan elektroda pasif terhadap grounding", "b. Mengganti fuse", "c. Mengecek pada footswitch", "d. Mengecek kerusakan pada blok power supply dan blok display", "e. Mengecek kerusakan pada blok pembangkit frekuensi"],
        answer: "d. Mengecek kerusakan pada blok power supply dan blok display"
    },
    {
        question: "Seorang Elektromedis melakukan analisis kerusakan pesawat rontgen terjadi pada rangkaian filamen. Setelah dilakukan analisis dengan melakukan pengukuran tegangan pada input trafo filamen diperoleh tegangan yang sesuai dengan perhitungan. Tindakan apakah yang harus dilakukan selanjutnya?",
        options: ["a. Melakukan pengukuran kunduktifitas kabel tegangan tinggi", "b. Melakukan pengukuran induktansi tarafo filamen", "c. Melakukan pengukuran arus pada skunder trafo filamen", "d. Melakukan pengukuran kunduktifitas tarafo filamen", "e. Melakukan pengukuran tegangan pada skunder trafo filamen"],
        answer: "a. Melakukan pengukuran kunduktifitas kabel tegangan tinggi"
    },
    {
        question: "Pada Lata suction Pum pada sebuah rumah sakit dilaporkan tidak dapat menghisap dengan baik. Sebagai seorang elektromedis Analisa wal kerusakan adalah?",
        options: ["a. Daya listrik tidak sesuai", "b. Motor tidak maksimal bekerja", "c. Terjadi kerusakan pada fius", "d. Manometer rusak", "e. Kerusakan pada kabel inputan"],
        answer: "b. Motor tidak maksimal bekerja"
    },
    {
        question: "Seorang perawat melaporkan kepada Bagian Instalasi Pemeliharaan Sarana Rumah Sakit bahwa Alat photo terapi sudah tercatat pemakaiannya di display hourmeter sebanyak 1100 jam. Apa yang tepat dilakukan oleh tenaga elektromedis untuk hal tersebut?",
        options: ["a. Melakukan pemeriksaan catu daya listrik pada lampu dengan mengukur tegangan dan arus yang mengalir pada lampu.", "b. Melakukan pemeriksaan pada rangkaian hourmeter dan mereset agar display menunjukkan angka nol.", "c. Melakukan pengukuran tegangan dan arus yang mengalir pada lampu dan mereset agar display pada hourmeter menunjukkan angka nol", "d. Melakukan penggan an lampu dan mereset agar display pada hourmeter menunjukkan angka nol.", "e. Melakukan penggan an lampu dan mencatat penggunaan lampu baru pada posisi awal 1100 jam pada kartu pemeliharaan preven ve."],
        answer: "e. Melakukan penggan an lampu dan mencatat penggunaan lampu baru pada posisi awal 1100 jam pada kartu pemeliharaan preven ve."
    },
    {
        question: "Rumah sakit Soedono Kota Madiun memiliki alat sterilisator basah, yaitu alat autoclave. Alat tersebut mengalami kerusakan atau terdapat masalah pada saat dioperasikan. Masalah yang terdapat pada alat tersebut yaitu alat diak dapat panas dan tidak bertekanan tinggi atau dapat dikatakan alat tidak dapat bekerja. Apa yang harus dilakukan oleh seorang teknisi elektromedik dalam perbaikan alat tersebut?",
        options: ["a. Fuse rusak", "b. Termostat rusak", "c. Butuh restart ulang pada alat autoclave", "d. Chamber berkerak atau terjadi kebocoran", "e. Kurangnya air yang ada di dalam tabung autoclave"],
        answer: "a. Fuse rusak"
    },
    {
        question: "Beberapa perusahaan menawarkan peralatan suction pum pada sebuah rumah sakit dan melibatkan seorang elektromedis. Sebagai seorang eletromedis pertimbangan wal yang perlu diperhatikan adalah",
        options: ["a. Diskon yang diberikan", "b. Legalitas perusahaan penyedia", "c. Harga terendah yang ditawarkan", "d. Spesifikasi dan domukentasi yang sesuai", "e. Masa usia alat"],
        answer: "d. Spesifikasi dan domukentasi yang sesuai"
    },
    {
        question: "Bagi seorang Elektromedis wajib melakukan pemeliharaan secara periodik terhadap semua peralatan medis sehingga dapat dijaga kondisinya pada saat diperlukan, salah satunya adalah pemeliharaan pada alat rontgen sistem capasitor dischrge . Bagaimanakah tindakan yang sesuai dengan SOP pemeliharaan pada alat tersebut?",
        options: ["a. Hubungkan alat ke catu daya - hidupkan alat - tekan tombol pengosongan elektrik - matikan alat - lepaskan catu daya - tarik tombol pengosongan manual - lakukan pemeliharaan", "b. Matikan alat - tekan tombol pengosongan elektrik - lepaskan catu daya - tarik tombol pengosongan manual - lakukan pemeliharaan", "c. Matikan alat - Lepaskan catu daya - tekan tombol pengosongan elektrik - tarik tombol pengosongan manual - lakukan pemeliharaan", "d. Matikan alat - Lepaskan catu daya - tekan tombol pengosongan elektrik - tarik tombol pengosongan manual - lakukan pemeliharaan", "e. Hubungkan alat ke catu daya - hidupkan alat - tarik tombol pengosongan manual - tekan tombol pengosongan elektrik - matikan alat - lepaskan catu daya - lakukan pemeliharaantarik tombol pengosongan manual"],
        answer: "a. Hubungkan alat ke catu daya - hidupkan alat - tekan tombol pengosongan elektrik - matikan alat - lepaskan catu daya - tarik tombol pengosongan manual - lakukan pemeliharaan"
    },
    {
        question: "Sterilisasi adalah prosedur yang harus dilakukan sebelum instrument digunakan pada proses pembedahan, untuk itu pengoperasian alat autoclave harus dilakukan sebaik-baiknya. Sebutkan langkah-langkah pengoperasian alat ?",
        options: ["a. Isi Air pada kontainer, Tekan Tombol ON/OFF, Atur Timer, Tekan Start Masukan instrument", "b. Isi Air pada kontainer, Masukan instrument, Tekan Tombol ON/OFF, Atur Timer, Tekan Start", "c. Tekan Tombol ON/OFF, Atur Timer, Tekan Start dan Masukan instrument", "d. Tekan Tombol ON/OFF , Masukan instrument dan Isi Air pada kontainer", "e. Isi Air pada kontainer, Masukan instrument, Tekan Tombol ON/OFF, Tekan Start"],
        answer: "b. Isi Air pada kontainer, Masukan instrument, Tekan Tombol ON/OFF, Atur Timer, Tekan Start"
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat infan warmer yang di njau dari aspek pengamanan. Aspek pengamanan apa yang harus dilakukan pada peralatan infan warmer ?",
        options: ["a. Memasang rangkaian pengaman dioda", "b. Memasang trafo isolasi.", "c. Memasang sensor suhu", "d. Memasang sensor kelembaban", "e. Memperdalam grounding listrik"],
        answer: "e. Memperdalam grounding listrik"
    },
    {
        question: "Berikut prosedur Pengoperasian alat nebulizer. · Alat Mikro Nebulizer diisi dengan larutan sesuai dengan dosis dan diencerkan dengan ml NaCl 0,9%. · Sambungkan kabel power ke stop kontak. · Hidupkan saklar \"ON\" dan cek alat berfungsi atau dak keluar \"O ff \". · Pasangkan masker Nebulizer kepada pasien. · Apabila obat dalam tabung habis, ma kan saklar pada posisi \"O ff \". Kekurangan dari prosedur pengoperasian diatas adalah ?",
        options: ["a. Setelah obat habis jangan langsung O ff", "b. Pasang masker Harus yang pertama", "c. Kurang item Pengemasan setelah penggunaan.", "d. Isi larutan setelah saklar ON.", "e. Hidupan siaklar ON yang pertama harus dilakukan ."],
        answer: "c. Kurang item Pengemasan setelah penggunaan."
    },
    {
        question: "Seorang Dosen menerangkan pada mahasiswa cara pengoperasian alat ESU dengan beberapa efek yang di mbulkan oleh arus listrik frekuensi nggi yang dialirkan ke dalam jaringan biologis. Efek apa saja yang terjadi pada peralatan ESU ?",
        options: ["a. Efek Panas, efek faradik dan efek elektroli k", "b. Efek Galvanik, Efek Panas , dan Efek elektroli k", "c. Efek Panas , efek Galvanik dan efek biologis.", "d. Efek Galvanik, Efek faradik, dan Efek panas.", "e. Efek Galvanik, efek faradik dan efek elektroli k"],
        answer: "a. Efek Panas, efek faradik dan efek elektroli k"
    },
    {
        question: "Di salah satu rumah sakit terdapat peralatan spektrofotometer yang baru datang untuk digunakan pada laboratorium. Apa yang akan dilakukan untuk menangani peralatan baru ?",
        options: ["a. Melakukan pencatatan harian, mingguan, bulanan dan tahunan.", "b. Melakukan preven f maintenance.", "c. Melakukan pencatatan merk alat.", "d. Melakukan pencatatan dan pelabelan", "e. Melakukan pencatatan, pemerikasaan, pemeliharaan dan mengevaluasi"],
        answer: "d. Melakukan pencatatan dan pelabelan"
    },
    {
        question: "Untuk meningkatkan pelayanan kesehatan, sebuah rumah sakit akan melengkapi alat dengan peralatan bedside monitor yang baru, dengan kebutuhan 5 parameter pengukuran. Dapatkah anda menyebutkan parameter tersebut ?",
        options: ["a. EKG, SPO2, NIBP, Temperature (2 channel)", "b. EKG, SPO2, NIBP, Temperature, Respira on", "c. EKG, SPO2, NIBP, Respira on, Heart Rate", "d. EKG (2 channel), SPO2, NIBP, Temperature", "e. EKG, SPO2, NIBP, Temperature, Heart Rate"],
        answer: "b. EKG, SPO2, NIBP, Temperature, Respira on"
    },
    {
        question: "Saudara akan menguji de fi brillator pada model pasien. Dua buah elektrodanya harus ditempatkan / ditempelkan pada dua tempat di dada pasien. Dimana posisi elektroda ditempelkan ?",
        options: ["a. Sisi kanan dan kiri jantung", "b. Disamping kiri dan kana ventrikel", "c. Disamping kiri dan kana atrium", "d. Disamping ventrikel kanan dan diatas atrium kanan", "e. Di bawah clavicula kanan dan bagian kiri dibawah pectoral muscle"],
        answer: "e. Di bawah clavicula kanan dan bagian kiri dibawah pectoral muscle"
    },
    {
        question: "Tegangan jala-jala (line) sangat berpengaruh pada kinerja alat rontgen, oleh sebab itu diperlukan komponen LVC yang berfungsi untuk mengkompensasi tegangan jala-jala (line) agar sesuai dengan tegangan yang dibutuhkan oleh alat. Bagaimanakah bila terjadi penurunan tegangan jala-jala (line) pada alat tersebut?",
        options: ["a. Menambah jumlah lilitan dengan memutar LVC berlawanan arah jarum jam", "b. Mengurangi jumlah lilitan dengan memutar LVC berlawanan arah jarum jam", "c. Menambah tegangan dengan memutar LVC berlawanan arah jarum jam", "d. Menambah jumlah lilitan dengan memutar LVC searah jarum jam", "e. Mengurangi jumlah lilitan dengan memutar LVC searah jarum jam"],
        answer: "e. Mengurangi jumlah lilitan dengan memutar LVC searah jarum jam"
    },
    {
        question: "Seorang petugas radiologi melaporkan kerusakan alat rontgen diagnostik, petugas tersebut mengatakan bahwa ketika tombol ready ditekan, indikator ready tidak menyala, sehingga tidak dapat dilakukan ekspos. Setelah dilakukan pemeriksaan dan dianalisis ada kerusakan pada kontrol arus tabung. Sebagai langkah awal pada kasus tersebut adalah melakukan pengecekan....?",
        options: ["a. konduktifitas filamen.", "b. arus tabung sinar-x", "c. impedansi filamen.", "d. resistansi filamen.", "e. resistansi mA Control"],
        answer: "e. resistansi mA Control"
    },
    {
        question: "Pada alat suction pum sebuah klinik dilaporkan kerusakan, daya masuk namun alat tidak bekerja. Swbagai seorang elektromedis Analisa awal kerusakan adalah?",
        options: ["a. Kalibrasi ulang", "b. Tabung tidak vacuum", "c. Kerusakan pada motor", "d. Periksa selang penghubung", "e. Periksa fius pada alat"],
        answer: "e. Periksa fius pada alat"
    },
    {
        question: "Pada suatu rumah sakit terdapat pengadaan peralatan kesehatan sebagai berikut : Opthalmoscope. Slit lamp, Trial Lens, Auto Chart Projector. Ditempatkan di ruang mana pada suatu rumah sakit untuk paket peralatan tersebut ?",
        options: ["a. Laboratorium", "b. Poli Jantung", "c. Poli Penyakit Dalam", "d. Poli Mata", "e. Poli Anak"],
        answer: "d. Poli Mata"
    },
    {
        question: "Dokter mengeluhkan putaran motor bor dental unitnya tidak bekerja normal (lambat) sehingga tidak dapat digunakan untuk melakukan pemeriksaan. Alat apakah yang digunakan untuk menangani hal tersebut?",
        options: ["A. Handpiece", "B. Saluran air", "C. Saluran pembuangan air", "D. Saluran kompresor", "E. Valve di rangkaian control"],
        answer: "A. Handpiece"
    },
    {
        question: "Pada pemasangan lampu operasi dan ketika akan digunakan … masalah yang terjadi apabila lampu tersebut ditarik menuju objek akan kembali lagi ke posisi semula. Apa yang dilakukan oleh teknisi agar lampu tersebut tidak kembali ke posisi semula saat ditarik kepada objek?",
        options: ["A. Cek hidraulik siku - siku body lampu", "B. Pasang kunci pada hidraulik", "C. Pasang tutup pemberat pada bagian kepala lampu", "D. Cek motor penggerak hidraulik", "E. Lakukan penginstalan ulang"],
        answer: "A. Cek hidraulik siku - siku body lampu"
    },
    {
        question: "Seorang elektromedis melakukan uji fungsi alat ultrasonography (USG) yang mengalami masalah yaitu pada saat alat diaktifkan system yang berjalan tidak sesuai program. Apakah tindakan yang dilakukan untuk menormalkan alat tersebut?",
        options: ["A. Reinstall program", "B. Mengganti probe", "C. Menghapus sebagian dat a yang tersimpan", "D. Memperbaiki sotware penunjang", "E. Mengganti baterai bios"],
        answer: "A. Reinstall program"
    },
    {
        question: "Pada sebuah buku service manual & user manual alat pembangkit sinar - X terdapat petunjuk bahwa pembangkitan sinar - X membutuhkan beda potensial antara katoda & anoda. Kebutuhan tersebut di perlukan agar elektroda … di percepat energy kinetiknya ketika bertumbukan dengan target. Apakah jenis trafo yang dapat menghasilkan beda potensial listrik sesuai kebutuhan tersebut?",
        options: ["A. Trafo step down", "B. Trafo filament", "C. Trafo step up", "D. Trafo tabung", "E. Trafo distribus i daya"],
        answer: "C. Trafo step up"
    },
    {
        question: "Terdapat keluhan kerusakan ESU yang menimbulkan hasil tidak baik pada saat kalibrasi menggunakan ESU analyzer. Padahal pada saat digunakan bunyi alarm sedangkan ruangan instalasi bedah sudah terdapat instalasi grounding ruangan baik. Kerusakan pada komponen apa yang mungkin terjadi pada kasus tersebut?",
        options: ["A. Foot switch", "B. Finger tip switch", "C. Rangkaian output isolation", "D. Kabel netral electrode putus", "E. Rangkaian cutting dan coagulating"],
        answer: "D. Kabel netral electrode putus"
    },
    {
        question: "Pada alat Electrosurgery / ESU sering terjadi kebocoran arus pada alat tersebut d an hal ini perlu dilakukan pengukuran dan Kalibrasi untuk kebocoran arusnya. Bagaimanakah cara yang saudara lakukan dalam melakukan pengukuran dan Kalibrasi pada alat tersebut?",
        options: ["A. Menggunakan Incu Analyzer sebagai kalibratornya", "B. Menggunakan pressure meter seba gai kalibratornya", "C. Menggunakan Safety Analyzer sebagai kalibratornya", "D. Menggunakan fuse pasien sebagai kalibratornya", "E. Menggunakan Electrical Analyzer sebagai kalibratornya"],
        answer: "C. Menggunakan Safety Analyzer sebagai kalibratornya"
    },
    {
        question: "Seorang dokter melakukan pemeriksaan menggunakan alat ultrasonography, setelah selesai p emeriksaan hasil ultrasonography, setelah selesai pemeriksaan hasil Ultrasonografi untuk di Print namun hasil tidak dapat tercetak.Tindakan apakah yang dilakukan elektro medis supaya alat tersebut dapat diprint?",
        options: ["A. Periksa dan hubungkan koneksi printer mesin dengan baik", "B. Menghubungkan keyboard dengan CPU. kabel keyboard putus", "C. Mengganti harddisk", "D. Grounding tidak baik", "E. Melakukan perbaikan pada LCD"],
        answer: "A. Periksa dan hubungkan koneksi printer mesin dengan baik"
    },
    {
        question: "Alat yang dikembangkan ini terdiri dari sebuah bio amplifier yang menguatkan sinyal sinyal gelombang listrik yang beras al dari Cantung dalam (potensial sinyal) tersebut dipengaruhi oleh banyak sinyal lain yang dikategorikan sebagai noise yang berasal dari banyak sumber di luar tubuh manusia. Yang sedang diamati apa nama rangkaian yang dapat meredam noise pada kasus di atas ?",
        options: ["A. ADC", "B. Filter", "C. Monitor", "D. Optocoupler", "E. Microcontroller"],
        answer: "B. Filter"
    },
    {
        question: "Perkembangan teknologi alat di rumah sakit sangat berkembang dengan cepat. Para dokter di rumah sakit biasanya akan meminta peralatan kesehatan yang baru dengan alasan bahwa alat yang dipakai sekarang sudah tidak akurat dan berstandar dengan baik. Apa yang Anda lakukan dalam menanggapi hal ini?",
        options: ["A. Memperbaiki dan mengkalibrasi alat", "B. Menservice dan inventaris alat", "C. Memberikan brosur alat baru", "D. Membuat berita acara palsu", "E. Memanggil distributor"],
        answer: "A. Memperbaiki dan mengkalibrasi alat"
    },
    {
        question: "Pada pengoprasian perala tan autoclave tidak terjadi Sterilisasi. Teknisi melakukan pengecekan dengan menggunakan kertas Lakmus dan hasilnya tetap tidak berubah. Apakah penyebab dari kerusakan tersebut?",
        options: ["A. Sensor suhu", "B. Kesalahan pengoperasian", "C. Membran Solenoid valve", "D. Elemen putus", "E. Tekana n bocor"],
        answer: "C. Membran Solenoid valve"
    },
    {
        question: "Seorang teknisi yang sedang melakukan Kalibrasi pada pesawat EKG dengan menggunakan Simulator EKG mendapatkan hasil amplitudo sinyal kotak yang dihasilkan. Ketika pemilihan 0,5 tidak mencapai satu kotak besar. Bagian apa dari alat yang perlu dilaku kan penyesuayan?",
        options: ["A. Kecepatan motor kertas", "B. Sensitivity", "C. Filter", "D. adjusment posisi stylus", "E. suhu stylus"],
        answer: "B. Sensitivity"
    },
    {
        question: "Seorang teknisi melakukan kegiatan pemeliharaan lampu operasi. Setiap akan melakukan operasi atau sesudah melakukan operasi kebersihan dan kelengkapan alat - ala t operasi akan selalu dicek terlebih dahulu. Bagaimanakah cara melakukan pemeliharaan alat elektronik tersebut.",
        options: ["A. Dibersihkan dengan kain lap kasar", "B. Dibersihkan dengan kain lap basah", "C. Dibersihkan dengan kain lap halus", "D. Melakukan Pelepasan pada lampu", "E. Melakukan p enggantian lampu"],
        answer: "C. Dibersihkan dengan kain lap halus"
    },
    {
        question: "Seorang Perawat mengeluhkan bahwa hasil perekaman EKG menunjukkan hanya Lead 1 yang baik sedangkan lead yang lain menghasilkan banyak noisenya. Apakah yang harus diperiksa oleh teknisi Elektromedik?",
        options: ["A. Periksa dan perbaikan kabel power", "B. Periks a dan perbaiki pemasangan kabel pasien", "C. Periksa dan perbaiki pemasangan kabel RA", "D. Periksa dan perbaiki pemasangan kabel LA", "E. Periksa dan perbaiki pemasangan kabel F"],
        answer: "B. Periks a dan perbaiki pemasangan kabel pasien"
    },
    {
        question: "Pada alat diathermy terdapat jenis - jenis Elektroda yang bersifat induktif yang digunakan ke pas ien dengan beberapa pilihan Elektroda. Sebutkan jenis jenis Elektroda tersebut",
        options: ["A. Elektrode kabel, monode dan diplode", "B. Elektronika aktif, pasif, netral", "C. Electrode jarum, bola, lingkaran", "D. Electrode transvaginal, linier, konveks", "E. Elektroda bantalan, Elektroda piri ngan dan Elektrode khusus"],
        answer: "E. Elektroda bantalan, Elektroda piri ngan dan Elektrode khusus"
    },
    {
        question: "Alat suction Pump digunakan untuk menghisap cairan darah atau lendir. Pada umumnya ditempatkan di ruang yang vital dan penting terutama salah satunya ruang di kamar operasi. Di ruang manakah ditempatkan selain ruang kamar operasi",
        options: ["A. Gas central", "B. Perawatan", "C. Gawat darurat", "D. Poliklinik", "E. CSSD"],
        answer: "C. Gawat darurat"
    },
    {
        question: "Seorang Perawat mengoperasikan alat CPAP. Pada saat alat digunakan alat tersebut tidak dapat mengalirkan oksigen. Apakah tindakan yang dilakukan agar alat tersebut kembali normal",
        options: ["A. Cek sumber tegangan", "B. Cek tubing", "C. Mengontrol konektor", "D. Humidifier", "E. Memperbaiki konektor tubing oksigen"],
        answer: "B. Cek tubing"
    },
    {
        question: "Seorang Perawat menggunakan alat syringe pump untuk memasukkan obat ke pasien. Ternyata saat digunakan syringe pump tersebut menunjukkan peringatan error pada bagian occlution. Apak ah yang harus dilakukan elektromedis?",
        options: ["A. Ada gelembung udara pada selang", "B. Baterai lobet", "C. Terjadinya kerusakan pada board", "D. Sumber arus tegangan tidak terhubung", "E. Mengganti syringe"],
        answer: "A. Ada gelembung udara pada selang"
    },
    {
        question: "Rumah sakit akan melakukan pengaturan traksi unit untuk peningkatan pelayanan di ruma h sakit. Dalam pengadaan alat tersebut teknisi elektromedik bertindak sebagai Tim penerima barang. Dimanakah penempatan alat tersebut?",
        options: ["A. Instalasi care unit", "B. Instalasi gawat darurat", "C. Ruang physioteraphy", "D. Poli penyakit dalam", "E. Ruang bedah"],
        answer: "C. Ruang physioteraphy"
    },
    {
        question: "Saat pemasangan tabung sa mpel centrifuge yang tidak simetris seimbang akan menimbulkan kerusakan pada centrifuge. Apa yang pertama kali dicek oleh seorang teknisi Elektromedis?",
        options: ["A. Tabung", "B. Sampel", "C. Motor", "D. Tegangan", "E. Tabung dan sampel"],
        answer: "E. Tabung dan sampel"
    },
    {
        question: "Seorang elektromedis memiliki tugas untuk melakukan pemel iharaan alat CPAP. Pemeliharaan harian, mingguan, pemeliharaan bulanan dan pemeliharaan tahunan. Apa pemeliharaan bulanan pada alat tersenut?",
        options: ["A. Buang cairan dari water trap", "B. Periksa kondisi O2 dan Air pressure, jangan sampai kosong atau habis", "C. Ganti selang dar i ventilator", "D. Bersihkan ekspirasi valve", "E. Kalibrasi ventilator tersebut layak atau tidaknya dipakai"],
        answer: "D. Bersihkan ekspirasi valve"
    },
    {
        question: "Pada saat Seorang teknisi elektromedik melakukan pemeliharaan rutin alat spektrophotometer UV Vis, setelah melakukan pemeriksaan rutin tersebut ditemukan adany a error pada vacuum sample yang mengakibatkan tidak terhisapnya larutan yang akan diperiksa. Apa yang menyebabkan kerusakan tersebut?",
        options: ["A. Adanya penyumbatan pada selang.", "B. Vacum rusak, vacuum harus diperbaiki.", "C. Selang rusak, selang harus diganti.", "D. Filter kotor, harus diganti dengan yang baru.", "E. Pompa rusak."],
        answer: "A. Adanya penyumbatan pada selang."
    },
    {
        question: "Seorang elektromedis mendapatkan laporan dari perawat bahwa ada CPAP yang mengalami kerusakan, setelah dilakukan pengecekan pada CPAP tersebut ternyata ada penyumbatan di bagian ekspirasi valve. Tindakan apa yan g harus dilakukan elektromedis agar alat berfungsi dengan baik?",
        options: ["A. Periksa sumber tegangan", "B. Selang 02 bocor", "C. Cek 02 Cell", "D. Cek Flow Sensor", "E. Bersihkan ekspirasi valve"],
        answer: "E. Bersihkan ekspirasi valve"
    },
    {
        question: "Pada sebuah buku service manual & user manual pesawat sinar - x terdapat petunjuk bahwa pembangkitan sinar - x membutuhkan listrik dengan daya sebesar 100 KVA. Selain itu diperlukan kemampuan untuk mengetahui proyeksi dalam pemotretan pada tubuh pasien. Apakah sistem pengaturan faktor eksposi yang paling baik untuk menghasilkan gambar?",
        options: ["A. KV dan mA", "B. KV dan Sec ond", "C. KV, mA dan second", "D. mA dan second", "E. Watt, mA, detik"],
        answer: "C. KV, mA dan second"
    },
    {
        question: "Elektromedis mendapat laporan kerusakan alat blood warmer dari pengguna. Pengguna menyampaikan bahwa alat blood warmer telah dioperasikan sesuai dengan SOP, namun tidak terjadi perubahan suhu pada darah. Apakah yang harus dicek oleh elektromedis?",
        options: ["A. Kabel power", "B. Sensor suhu", "C. Heater", "D. Timer", "E. Fuse"],
        answer: "C. Heater"
    },
    {
        question: "ECG (Electro cardiograph) di klinik penyakit dalam dilaporkan mengalami kerusakan pada tampilan sinyal V1 yang tampak flat (lurus) dibanding sinyal lainnya. Tindakan apa y ang harus dilakukan oleh seorang Elektromedis untuk mengatasi permasalahan diatas ?",
        options: ["A. Pemeriksaan grounding", "B. posisi pasien dan meminta pasien agar lebih relax", "C. Menambahkan jelly pada bulb di patient cable", "D. Cek cable power dan melakukan verifikasi dengan ECG Si mulator", "E. Penggantian patient cable dan melakukan kalibrasi"],
        answer: "E. Penggantian patient cable dan melakukan kalibrasi"
    },
    {
        question: "Elektromedis mendapat laporan alat syringe pump mengalami kerusakan pada motor sehingga terjadi bunyi alarm. Bagian manakah pada alat ini yang mengalami masalah?",
        options: ["A. Flow Rate", "B. Low Battery", "C. Nearly Empty", "D. O cclusion Alarm", "E. Volume Delivered"],
        answer: "D. O cclusion Alarm"
    },
    {
        question: "Seorang dokter sedang melakukan pemeriksaan pasien dengan menggunakan USG, pada saat pengoperasian timbul permasalahan yaitu monitor dari USG tersebut tidak menunjukkan warna pada hasil gambar. Apa yang harus dichek oleh tek nisi pada kasus diatas ?",
        options: ["A. kabel power pada alat tersebut", "B. kabel DVI", "C. indikator pada alat tersebut", "D. printer dari alat tersebut", "E. sumber PLN"],
        answer: "B. kabel DVI"
    },
    {
        question: "Elektromedis mendapat laporan dari perawat saat menggunakan patien monitor di ruangan IGD Rumah Sakit. Saat digunakan tampi lan Heart Rate pada monitor tidak muncul. Pengaturan apakah yang dilakukan elektromedis untuk mengatasi kasus tersebut?",
        options: ["A. Tampilan NIBP pada patien monitor", "B. ECG pada patien monitor", "C. Heart Rate pada patien monitor", "D. NIBP pada patien monitor", "E. SPO2 pada patien moni tor"],
        answer: "B. ECG pada patien monitor"
    },
    {
        question: "Sebuah alat syringe pump yang sedang digunakan mengalami kerusakan. Saat difungsikan alarm alat tersebut berbunyi secara terus menerus. Sesaat setelah dilakukan pemeriksaan ternyata disimpulkan tidak terjadi penyumbatan dan cairan dapat berjalan lancar bila difungsikan secara manual. Apa yang harus dicek pertama kali untuk menangani kasus tersebut?",
        options: ["A. Cek Baterai", "B. Pemeriksaan flow rate", "C. Uji Fungsi tombol up/down", "D. Penggantian motor syiringe pump", "E. Pengecekan ukuran syringe"],
        answer: "A. Cek Baterai"
    },
    {
        question: "Sebuah Rumah Sakit membeli beberapa al at waterbath, centrifuge dan spektrofotometer baru. Peralatan tersebut harus segera diletakkan di laboratorium. Langkah apa yang dilakukan seorang elektromedis untuk menangani peralatan baru?",
        options: ["A. Kalibrasi", "B. pencatatan dan pelabelan", "C. Evalusi Alat", "D. Langsung dileta kkan di ruangan", "E. perbaikan pada alat"],
        answer: "B. pencatatan dan pelabelan"
    },
    {
        question: "Pada dental unit terdapat lampu untuk membantu user dalam pemeriksaan. Jenis lampu yang digunakan yaitu lampu halogen. Terdapat SOP yang benar dalam mengganti bohlam lampu halogen yang putus atau mati. Bagaimana SOP men gganti lampu tersebut?",
        options: ["A. Memasang lampu halogen menggunakan tangan", "B. Melapisi lampu halogen dengan tisu kering", "C. Di tiup terlebih dahulu sebelum di pasang", "D. Di gosok terlebih dahulu sebelum di pasang", "E. Memasang lampu halogen dengan kapas"],
        answer: "B. Melapisi lampu halogen dengan tisu kering"
    },
    {
        question: "Pemeriksaan Electrocardiog raph di ruang Poliklinik Jantung sering menampilkan noise berupa artefak sinyal listrik AC. Tepat di sebelah ruang tersebut adalah ruang Radiologi. Tindakan apakah yang paling tepat dilakukan?",
        options: ["A. Memperdalam grounding listrik", "B. Memindahkan ruang poli jantung", "C. M emasang stabilizer di ruang poli jantung", "D. Mengganti General X - ray dengan Mobile x - ray", "E. Menjauhkan kabel Tegangan Tinggi dari poli Jantung"],
        answer: "A. Memperdalam grounding listrik"
    },
    {
        question: "Sebua alat baby incubator dioperasionalkan, namun display Air Temperature tidak mengalami kenaikan, bertahan pada suhu kamar, sedangkan Skin Temperature menampilkan angka yang normal,. blower heater berputar dengan sempurna, dan tidak ada tanda alarm yang menyala. Berdasarkan observasi tersebut, kerusakan pada bagian mana yang terjadi?",
        options: ["A. Lampu indikator Power Heating mengala mi short circuit", "B. Heater tidak bekerja", "C. Rangkaian display tidak bekerja", "D. Timer tidak bekerja", "E. Alarm tidak berfungsi"],
        answer: "B. Heater tidak bekerja"
    },
    {
        question: "Klinik bersalin meminta elektromedis untuk pengadaan sebuah alat elektromedis. Alat tersebut digunakan untuk bayi kondisi kuning. Bayi lahir p rematur umumnya lebih rentan mengalami kondisi ini. Apakah alat elektromedik untuk menangani kasus tersebut?",
        options: ["A. Flame fotometer", "B. Bilirubin Meter", "C. Blue Light Phototeraphy", "D. Infant Warmer", "E. Baby Incubator"],
        answer: "C. Blue Light Phototeraphy"
    },
    {
        question: "Dokter bedah melakukan tindakan bedah pada daerah suhu 30 - 40 C sekitar pin elektroda aktif. untuk menghentikan perdarahan diperlukan pembekuan jaringanmapa. apa nama proses pembekuan pada ESU",
        options: ["A. Cuting", "B. Coagulation", "C. blend", "D. bipolar", "E. monopolar"],
        answer: "B. Coagulation"
    },
    {
        question: "Elektromedis mendapat laporan dari dokter obgyn. Saat mengoperasikan alat fetal do pler, tidak muncul suara (respon) pada alat fetal dopler tersebut. Apa penyebab dari kerusakan tersebut?",
        options: ["A. Volume", "B. Catu daya turun", "C. Kabel tranducer", "D. Batery lemah", "E. Speaker"],
        answer: "C. Kabel tranducer"
    },
    {
        question: "Pada ruangan laboratorium klinik mempunyai beberapa alat blood glucose strip, alat tersebut mempunyai suatu komponen yang akan membaca sampel darah dari test strip. sensor apakah yang digunakan pada alat tersebut?",
        options: ["A. tranduser", "B. photo dioda", "C. suhu", "D. jarak", "E. berat"],
        answer: "B. photo dioda"
    },
    {
        question: "Seorang teknisi sedang mengecek Centrifuge. pada saat Alat centrifuge dihidupkan lalu terjadi getaran yang sangat keras.Tindakan apakah yang seharusnya dilakukan oleh seorang teknisi pada kasus diatas ?",
        options: ["A. memeriksa posisi centrifuge", "B. Memeriksa carbon brush", "C. Menekan tombol lid", "D. Memeriksa pengunci pintu centrifuge", "E. Menurunkan kecepatan centrifuge"],
        answer: "A. memeriksa posisi centrifuge"
    },
    {
        question: "Dokter melaporkan terjadi permasalahan pada hasil gambar yang muncul pada monitor USG, dimana gambar hasil USG yang muncul pada display monitor terdapat blank spot pada area tertentu. Sehingga mengakibatkan hasil pembacaan diagnose terganggu dengan permasalahan t ersebut. Apakah yang menyebabkan kerusakan pada kasus tersebut?",
        options: ["A. Keypad", "B. Probe", "C. Printer", "D. Hardisk", "E. Monitor"],
        answer: "B. Probe"
    },
    {
        question: "Seorang perawat di ruang rawat inap Rumah Sakit melaporkan adanya sphygmomanometer yang mengalami kerusakan. Dilaporkan bahwa air raksa tidak dapat naik s etelah bulb dipompa. Teknisi melakukan pengecekan pada manset, bulb, valve. Setelah dilakukan pengecekan, teknisi menyimpulkan terdapat kerusakan pada sistem pemompa pada sphygmomanometer Apa yang harus dilakukan teknisi untuk memperbaiki alat tersebut?",
        options: ["A. Me ngganti bulb", "B. Mengganti valve", "C. Mengganti manset", "D. Menambah air raksa", "E. Mengganti tabung raksa"],
        answer: "A. Me ngganti bulb"
    },
    {
        question: "Lampu operasi adalah lampu yang digunakan pada saat operasi yang tidak menimbulkan panas, cahayanya tidak menyilaukan sehingga memudahkan dan tidak menganggu proses be rjalanya operasi serta arah sinar mudah diatur posisinya. Operator kamar bedah melaporkan bahwa lampu operasi telah terjadi bayangan. Apakah yang anda lakukan sebagai teknisi ?",
        options: ["A. Mengatur Reflector", "B. Dimmer", "C. Mengatur Cup lampu", "D. Membuat fokus", "E. Tegangan Trafo"],
        answer: "A. Mengatur Reflector"
    },
    {
        question: "Blo od bank merupakan alat yang digunakan untuk meyimpan darah yang diletakkan diruang laboratorium darah. Berapa suhu yang diatur pada alat tersebut?",
        options: ["A. 2 - 6", "B. 2 - 4", "C. 4 - 8", "D. 4 - 10", "E. 2 - 12"],
        answer: "A. 2 - 6"
    },
    {
        question: "Pada layar alat hematologi analyzer muncul alarm Background abnormal, platelete selalu berkisar 10 x 109/L pada saat dilakukan background check. Apakah penyebab terjadinya kasus tersebut?",
        options: ["A. Tidak dipasang stabilizer pada alat hematologi", "B. Terpengaruh frekuensi alat di samping nya", "C. Terpengaruh getaran yang ditimbulkan alat di sampingnya", "D. Reagen di luent sudah kadaluarsa", "E. Reagent Rinse kurang banyak"],
        answer: "D. Reagen di luent sudah kadaluarsa"
    },
    {
        question: "Pada ruang kebidanan terdapat alat ultrasonography (USG). Pada saat dokter menggunakan alat tersebut terdapat tanda seperti titik - titik hujan. Setelah dilakukan pengecekan ternyata tidak ada masalah karen a kabel grounding terpasang dan probe usg juga berfungsi dengan baik. Apa penyebab kerusakan alat tersebut?",
        options: ["A. Kristal pada probe rusak", "B. Noise dari peralatan elektronik lain", "C. Kabel VGA monitor rusak", "D. Kabel grounding putus", "E. Board power supply rusak"],
        answer: "B. Noise dari peralatan elektronik lain"
    },
    {
        question: "Untuk dapat me nghasilkan sinar - x, terdapat persyaratan khusus yang harus dipenuhi sebuah tabung sinar - x antara lain adanya sumber elektron berupa filamen, ruang hampa udara dan anoda, agar tabung sinar - x dapat menghasilkan sinar - x dibutuhkan arus tabung dan tegangan tin ggi antara katoda dan anoda.Fungsi utama tegangan tinggi antara katoda dan anoda adalah?",
        options: ["A. Menghasilkan elektron pada filamen", "B. Menghasilkan arus dari katoda menuju anoda", "C. Mempercepat elektron dari katoda menuju anoda", "D. Menahan laju elektron dari anoda ke katod a", "E. Menghasilkan breemsstrahlung"],
        answer: "C. Mempercepat elektron dari katoda menuju anoda"
    },
    {
        question: "Elektromedis mendapat laporan dari perawat terjadi permasalahan pada alat defibrillator. Saat dilakukan pengecekan oleh elektromedis ternyata indikator lowbatt. Apakah yang dilakukan elektromedis untuk mengatasi permasalahan tersebut?",
        options: ["A. Bersihkan konektor charger baterai", "B. Periksa paddle, bersihkan konektor relay", "C. Cek aksesoris defibrillator", "D. Periksa kontaktor pada relay, tegangan baterai", "E. Periksa kapasitor"],
        answer: "D. Periksa kontaktor pada relay, tegangan baterai"
    },
    {
        question: "Dalam perencanaan pemasangan General X - Ray Unit 500 mA 150 kV, perlu diperha tikan instalasi listrik yang baik dan sesuai dengan standar yang berlaku. Salah satu yang harus diperhitungkan adalah terjadinya rugi tegangan listrik. Apakah penyebab terjadinya pada kasus tersebut?",
        options: ["A. adanya line resistansi dan arus maksimal yang digunakan", "B. panjangnya kabel power yang terpasang", "C. besarnya penampang kabel power", "D. adanya fluktuasi tegangan listrik yang dipakai", "E. besarnya Kemampuan generator"],
        answer: "A. adanya line resistansi dan arus maksimal yang digunakan"
    },
    {
        question: "Terapi infra merah adalah pengobatan dengan sinar infra merah yang dapat meningkatkan proses penyembuhan, de ngan cara merangsang fungsi sel - sel sehingga metabolisme sel berjalan lebih baik. Bersifat terapi apakah yang dilakukan pada kasus diatas?",
        options: ["A. fisioterapi", "B. fototerapi", "C. radiografi", "D. mekanik", "E. non mekanik"],
        answer: "A. fisioterapi"
    },
    {
        question: "Seorang terapis melaporkan bahwa alat Short Wave Diathermy (SWD ) yang akan digunakan tidak dapat berfungsi, lalu dilakukan pemeriksaan ternyata kabel power sudah terhubung ke sumber power dan saklar utama diaktifkan (ON) tetapi lampu indikator tengangan input tidak menyala. Apakah penyebab terjadinya gangguan pada ala t tersebut?",
        options: ["A. Sekering putus dan mengukur sekering dengan Ohm Meter", "B. Kabel power putus dan mengukur kabel dengan jangka Sorong", "C. Lampu indikator putus dan mengukur lampu indikator dengan Tachometer", "D. Stop kontak tidak ada tegangan dan mengukur stop kontak dengan Lux Meter", "E. Saklar utama rusak dan memeriksa dan mengukur tenganan saklar utama dengan Lux Meter"],
        answer: "A. Sekering putus dan mengukur sekering dengan Ohm Meter"
    },
    {
        question: "Seorang perawat ingin merekam LEAD III untuk mengukur aktifitas kelistrikan jantung dari pasien dengan menggunakan alat ECG. Alat tersebut juga dapat mengidenti fikasi jika ada peredaran atau aliran darah yang tidak normal. Diambil dari titik manakah pengukuran diatas?",
        options: ["A. LA ( - ) dan LF (+)", "B. RA ( - ) dan LF (+)", "C. RA ( - ) dan LA (+)", "D. LF ( - ) dan RF (+)", "E. LF ( - ) dan LA ( - )"],
        answer: "A. LA ( - ) dan LF (+)"
    },
    {
        question: "Kode : 0212200158 Perawat ruang rawat inap melaporkan ba hwa pesawat EKG tidak menunjukan hasil pada salah satu leadnya. User telah melakukan pembersihan pada elektrodanya. Apakah tindakan yang anda lakukan sebagai seorang teknisi elektromedis terhadap kasus tersebut?",
        options: ["A. pengukuran tegangan jala jala listrik PLN", "B. Me lakukan pengecekan batere", "C. pengecekan pisik dari kabel pasien", "D. Mengganti batere pada EKG", "E. Mengganti kabel pasien"],
        answer: "C. pengecekan pisik dari kabel pasien"
    },
    {
        question: "Kode : 0312200218 Sebuah rumah sakit memiliki infant warmer pada ruang NICU. Salah satu perawat sedang menggunakan alat tersebut dan saat dinyala kan suhu pada alat tersebut tidak dapat terbaca pada display. Apakah yang diperiksa sebagai tenaga elektromedik?",
        options: ["A. kabel power", "B. fuse", "C. rangkaian suhu", "D. elemen heater", "E. relay"],
        answer: "C. rangkaian suhu"
    },
    {
        question: "Kode : 1305210104 melakukan pemeliharaan pada alat mikroskope sebaiknya mengikuti aturan SOP yang harus diperihara pengkondisian suhu, tempat, dan penyimpanan agar mikroskope bisa siap pakai. Bagaimakah cara saudara melakukan pemeliharaan pada alat tersebut?",
        options: ["A. menjaga kelembapan alat", "B. menyimpan lensa okuler dengan baik", "C. mencabut lamp selesai digun akan", "D. menyimpan lensa okuler dengan baik dan dijaga suhunya", "E. preparat di biarkan selesai digunakan"],
        answer: "A. menjaga kelembapan alat"
    },
    {
        question: "Kode : 2611190032 Sadapan pada alat ECG menghasilkan pulsa kompleks QRS jantung pada rekaman kertas yang disebut elektrokardiogram sebagai gambaran aktivitas j antung. berupa Lead I, II, III, aVR, aVL, aVF, VI, V2, V3, V4, V5 dan V6. Untuk dapat bekerja, alat EKG menggunakan supplay tegangan 220 VAC atau dapat juga menggunakan sumber tegangan Battery. Bagian apa dari alat yang berfungsi untuk mengisolasi patient circuit terhadap hubungan langsung dengan catu dava listrik ?",
        options: ["A. Pre - Amplifier", "B. High Pass Filter", "C. Low Pass Filter", "D. Isolated Power Supply", "E. Dumping Circuit"],
        answer: "D. Isolated Power Supply"
    },
    {
        question: "Kode : 1409200003 Sebuah alat blue light phototerapi tidak dapat menyala saat akan digunakan oleh perawat. S etelah dicek oleh seorang elektromedis kabel powernya masih bagus dan fuse tidak putus. Sementara hours meter menunjukan 950 jam. Apa tindakan yang paling tepat dalam mengganti spare part alat tersebut?",
        options: ["A. lampu", "B. ballast lampu", "C. Cek tegangan jala - jala", "D. stater lam pu", "E. tombol on - off"],
        answer: "A. lampu"
    },
    {
        question: "Kode: 1205210078 Bagian laboratorium melaporkan kepada Instalasi Pemeliharaan rumah sakit tentang salah satu alat centrifuge tidak berfungsi sama sekali. pemeriksaan apakah yang akan dilakukan oleh tenaga elektromedis untuk menangani alat tersebut?",
        options: ["A. motor", "B. fuse power", "C. kabel power", "D. Saklar On Off", "E. mikroswitch door"],
        answer: "C. kabel power"
    },
    {
        question: "Kode : 0212200083 Sebuah unit radiologi general purpose konvensional dengan generator X - Ray masih menggunakan auto travo. Alat tersebut mengalami masalah yakni hasil pencitraan X Ray tip is jika dilakukan expose diatas 80kV dan pengaturan kondisi mA large fokus/mA 150 atau lebih. Sumber listrik pada ruangan itu drop dan travo pada tabel control berdengung. Apa yang menyebabkan kasus tersebut diatas?",
        options: ["A. Berkurangnya sumber daya listrik untuk u nit radiologi tersebut", "B. Auto travo mengalami penurunan kinerja", "C. Kurangnya minyak pada housing tube", "D. Kurangnya daya hambat tegangan tinggi minyak travo pada HTT", "E. Berkurangnya daya hantar kabel tegangan tinggi"],
        answer: "B. Auto travo mengalami penurunan kinerja"
    },
    {
        question: "Kode : 1205210005 Teknisi elektromedik mendapat kel uhan bahwa lampu pada film viewer tidak menyala. Kemudian teknisi datang dan mengganti lampu tersebut. Setelah di ganti ternyata lampu film viewer tetap tidak menyala. penggantian spare part apakah yang dilakukan?",
        options: ["A. starter lampu film viewer", "B. Melakukan kalibr asi", "C. lampu yang baru lagi", "D. Switch on/off", "E. saklar lampu film viewer"],
        answer: "A. starter lampu film viewer"
    },
    {
        question: "Kode : 0312200041 Pada proses pemeliharaan unit ECG di ruang perawatan ICU diperoleh hasil print ECG. Jarak peak to peak pada kertas grafik tidak sesuai dengan hasil bpm pada tampilan display. Apa penyebab perbedaan hasil output pada alat tersebut?",
        options: ["A. Hilangnya salah satu signal kelistrikan dari elektroda", "B. Kertas grafik yang digunakan tidak sesuai dengan spesifikasi yang dibutuhkan oleh unit ECG", "C. Heather stylus sudah mengalami penurunan performa", "D. M otor printer mengalami penurunan performa", "E. Pre Amplifier unit rusak"],
        answer: "B. Kertas grafik yang digunakan tidak sesuai dengan spesifikasi yang dibutuhkan oleh unit ECG"
    },
    {
        question: "Kode : 2811190046 Saat menggunakaan alat Spektrofotometer, petugas lab mengeluhkan bahwa hasil pemeriksaan semakin tidak akurat padahal mengunakan sampel yang sama. pemeriksaan apakah yang pertama kali dilakukan oleh teknisi elektromedik?",
        options: ["A. Kondisi lampu", "B. K ondisi kabel power", "C. kondisi photo detector", "D. kuvet", "E. grounding"],
        answer: "A. Kondisi lampu"
    },
    {
        question: "Kode : 0312200073 Seorang petugas laboratorium menggunakan alat centrifuge digunakan dalam kondisi normal. Setelah selesai digunaka n petugas laboratorium tersebut mengambil larutan dari alat tersebut namun, penutup centrifuge tetep tidak terbuka. penggantian apakah yang harus dilakukan elektromedis dalam kasus tersebut?",
        options: ["A. motor", "B. sensor", "C. settingan baru", "D. fuse", "E. break system"],
        answer: "B. sensor"
    },
    {
        question: "Kode : 3107190134 P ada pesawat rontgen frekuensi tinggi semua pengaturan bekerjanya rangkaian menggunakan frekuensi tinggi. Komponen yang dipakai untuk membangkitkan frekuensi tinggi. Rangkaian apa pada kasus diatas?",
        options: ["A. inverter", "B. pemanas filament", "C. tegangan tinggi", "D. catu daya", "E. timer"],
        answer: "A. inverter"
    },
    {
        question: "Kode : 2211190007 Seorang elektromedis mendapat laporan dari perawat, terjadi permasalahan saat mengoperasikan tensimeter. Saat tensimeter dipompa, hasilnya tidak rata naiknya dan penunjukan jarum pada anaroid. Apakah penyebab permasalahan pada alat terseb ut?",
        options: ["A. Selang bocor", "B. Valve tidak terkunci", "C. Balon pecah", "D. M anset rusak", "E. peer rusak"],
        answer: "A. Selang bocor"
    },
    {
        question: "Kode : 140920004 Elektromedis melakukan pencatatan spesifikasi sebuah alat spektrofotometer. Cahaya tampak (Visible) adalah salah satu sumber cahaya yang digunakan pada spektrofotom eter. Berapakah panjang gelombang pada kasus tersebut?",
        options: ["A. 200 - 280 nm", "B. 780 - 3000 nm", "C. 3000 - 20.000 nm", "D. 10 - 200 nm", "E. 380 - 780 nm"],
        answer: "E. 380 - 780 nm"
    },
    {
        question: "Kode : 1305210008 Pada saat pengoperasian alat x - ray konvensional ternyata indikator panel tegangan jala - jala kurang dari 220V. Apa yang haru s dilakukan agar x - ray dapat bekerja dengan baik?",
        options: ["A. Menambah kV", "B. Menambah mA", "C. Menambah kV dan mA", "D. Mengatur Line Kompensator", "E. Mengatur mAs"],
        answer: "D. Mengatur Line Kompensator"
    },
    {
        question: "Kode : 1409200060 Elektromedis sedang menyampaikan kepada user tentang pengoperasian sebuah waterbath. Pengaturan pada panel kontrol suhu alat water bath. Saat kapan bagian kontrol tersebut mulai bekerja?",
        options: ["A. Suhu melebihi suhu yang disetting", "B. Sampel belum dimasukkan sudah di start", "C. Suhu pada waterbath dibawah suhu setting", "D. Suhu pada waterbath meningkat sangat lambat", "E. Waktu penyimpan an telah selesai, penutup membuka"],
        answer: "C. Suhu pada waterbath dibawah suhu setting"
    },
    {
        question: "Kode : 1409200028 Pada saat alat Centrifuge diaktifkan lampu indikator menyala tetapi alat tidak berfungsi yaitu motor tidak berputar. Apa analisa awal kerusakannya adalah",
        options: ["A. Sikat arang habis, komutator rusak", "B. Rangkaian penga tur kecepatan rusak", "C. Saklar ON)/Off rusak", "D. Sekring putus", "E. Karet penahan getaran lemah"],
        answer: "D. Sekring putus"
    },
    {
        question: "Kode: 2811190011 Pemeliharaan berkala alat suction pump yang telah dilakukan, mengganti filter, membersihkan jar. mengeratkan sambungan sambungan slang. Setelah alat dipasan g dan ketika diuji coba, ternyata alat tersebut tidak menghisap. Apa yang terjadi pada alat yang diperbaiki tersebut?",
        options: ["A. Selang penghisap tersumbat", "B. Motor suction Rusak", "C. Jar Terisi Penuh air", "D. Pemasangan Klep Suction terbalik", "E. Selang penghisap terlalu besar"],
        answer: "D. Pemasangan Klep Suction terbalik"
    },
    {
        question: "Kode : 2611190029 Elektrocardiograph (EKG) adalah salah satu alat elektromedik yang digunakan untuk memeriksa aktivitas bioelektrik jantung dengan metode sadapan menggunakan 5 lectrode yang dipasang pada titik - titik tertentu pada tubuh manusia Berdasarkan segitiga Einthoven. Apa sadapan yang dihasilkan antara Righ Arm (RA) dan Left Arm (LA)?",
        options: ["A. Lead II", "B. Lead III", "C. aVR", "D. aVL", "E. Lead I"],
        answer: "E. Lead I"
    },
    {
        question: "Kode : 1409200053 Seorang user melaporkan kepada Teknisi Elektromedis bahwa sebuah meja operasi pada ruang operasi rumah sakit apabila tersentu h pada saat operasi sering terjadi kebocoran listrik.Apa yang harus dilakukan untuk mengatasi hal tersebut agar petugas operasi merasa nyaman saat bekerja?",
        options: ["A. Petugas operasi harus menggunakan alas kaki", "B. Dudukan meja operasi dihubungkan ke grounding", "C. Meja oper asi harus diberi isolator", "D. Hindari Instrumen lainya bersentuhan dengan meja Operasi", "E. Letak meja operasi dipindahkan ke tempat lain"],
        answer: "B. Dudukan meja operasi dihubungkan ke grounding"
    },
    {
        question: "Kode : 0212200134 Saat dilakukan pemeriksaan alat ESU di rumah sakit, alat masih tampak normal namun teknisi mengalami masalah ketika foot switch ditekan tidak terjadi apapun pada elektroda aktif atau dengan kata lain pada elektroda aktif tidak ada frekwensi tinggi. Sebagai seorang tenaga elekromedik apa yang akan anda lakukan pengecekan ?",
        options: ["A. tegangan yang masuk ke alat", "B. konektor elek troda", "C. elektroda aktif", "D. foot switch", "E. elekroda"],
        answer: "D. foot switch"
    },
    {
        question: "Kode : 1305210066 Sebuah alat short wave diathermy yang digunakan untuk therapi tulang pasien harus diperhatikan dosis panas yang diperlukan dan akan dilakukan pemeliharaan rutin oleh teknisi elektromedis pengecak an Apa yang perlu diperhatikan saat melakukan pemeliharaan sebuah alat tersebut?",
        options: ["A. rangkaian oscillator,pengatur daya", "B. pengatur daya", "C. Control timer, pengatur daya", "D. Catu daya, power cord", "E. Rangkaian oscillator, power cord"],
        answer: "A. rangkaian oscillator,pengatur daya"
    },
    {
        question: "Kode : 2711190010 Sebuah suction pump dila porkan mengalami kerusakan, dimana daya hisapnya sangat lemah. Ketika dilakukan pengujian pada selang tidak ditemukan kebocoran. Kemungkinan terbesar kerusakan suction pump terletak pada?",
        options: ["A. Filter", "B. Vacuum manometer", "C. Vacuum Klep", "D. Regulator", "E. Vacuum House"],
        answer: "C. Vacuum Klep"
    },
    {
        question: "Kode : 11 05210028 Pada ruangan laboratorium terdapat Mikrosokop, pada alat tersebut ada bagian yang berfungsi untuk mengatur besar dan kecilnya cahaya yang masuk. Apakah nama bagian yang dimaksud ?",
        options: ["A. Lensa Obyektif", "B. L ensa Okuler", "C. Kondensor", "D. Cermin", "E. Diafragma"],
        answer: "E. Diafragma"
    },
    {
        question: "Kode : 03122 00216 Seorang perawat meminta bantuan kepada teknisi elektromedik untuk melihatkan alat infant warmer yang ada di ruangannya. Keluhannya adalah tampilan suhu pada alat infant warmer tidak sesuai dengan yang sudah di setting. Kerusakan pada bagian apa, anal isa saudara sebagai elektromedis ?",
        options: ["A. Kerusakan pada Board", "B. Kerusakan pada Sensor", "C. Tombol setting tidak berfungsi", "D. Display tidak mendapat inputan", "E. Tidak ada inputan yang masuk ke alat"],
        answer: "B. Kerusakan pada Sensor"
    },
    {
        question: "Kode : 1305210030 Sebuah Rumah Sakit melakukan pengadaan sebuah alat SPO Moni tor. Sebagai petugas elektromedis, harus melakukan pengecekan kelengkapan aksesoris apa saja yang harus ada. Apa saja kelengkapan yang harus ada pada alat tersebut?",
        options: ["A. Elektrode SPO2", "B. Kertas SPO2", "C. Gel SPO2", "D. Finger Sensor SPO2", "E. Cairan SPO2"],
        answer: "D. Finger Sensor SPO2"
    },
    {
        question: "Kode : 0212200013 Salah satu peralatan elektromedik adalah ESU (electro surgery unit). ESU digunakan pada saat tindakan pembedahan. Dalam penggunaanya, user harus mengoperasikan sesuai SOP. Apakah teknik yang digunakan untuk proses tersebut?",
        options: ["A. Cutting", "B. Cogulating", "C. Blend", "D. Monopolar", "E. Bip olar"],
        answer: "A. Cutting"
    },
    {
        question: "Kode : 0312200126 Seorang teknisi elektromedik sedang melakukan uji fungsi terhadap spyhgmomanometer. Sebelum alat dioperasikan.. Untuk melakukan uji fungsi, teknisi menggunakan phantom (lengan palsu). Langkah pertama apa yang harus dilakukan, untuk m engoperasikan alat tersebut?",
        options: ["A. Membuka valve", "B. Memompa bulb", "C. Mengisi air raksa", "D. Memasang manset", "E. Memasang stetoskop"],
        answer: "D. Memasang manset"
    },
    {
        question: "Kode : 1409200059 Pada saat akan dilakukan pengukuran berat suatu sampel menggunakan Analitical Balance. User harus memastikan bahwa posisi air bu ble harus berada tepat di tengah. Apakah nama bagian yang dimaksud ?",
        options: ["A. water pas", "B. regulator", "C. Leveling Feet", "D. Kalibrasi", "E. Step Down"],
        answer: "C. Leveling Feet"
    },
    {
        question: "Kode : 2811190017 Seorang terapis melaporkan alat terapi diathermy yang digunakan rusak, dengan keluhan panas yang dikeluarkan dari elektroda tidak stabil, terkadang keluar panas dan terkadang tetap dingin. pemeriksaan Apakah yang dilakukan untuk menormalkan alat tersebut?",
        options: ["A. Kabel Power", "B. Saklar ON/OFF", "C. Konektor Elektroda", "D. Fuse", "E. rangkaian pembangkit frekuensi"],
        answer: "E. rangkaian pembangkit frekuensi"
    },
    {
        question: "Kode : 0212200034 Pada suatu lab oratorium klinik di daerah terpencil ditemukan alat incubator amuba alat tersebut sudah tidak dapat berfungsi lagi, untuk dapat menggunakan kembali incubator tersebut dibutuhkan beberapa komponen. Komponen apa saja yang harus anda siapkan sebagai tenaga el ektromedis?",
        options: ["A. Kabel catu daya, switch on/off, lampu, thermostat", "B. Kabel catu daya, switch on/off, lampu, thermometer", "C. Kabel catu daya, switch on/off, lampu, heater", "D. K abel catu daya, switch on/off, thermostat, thermometer", "E. Switch on/off. thermometer, lampu, heate r"],
        answer: "C. Kabel catu daya, switch on/off, lampu, heater"
    },
    {
        question: "Kode : 3107190201 Seorang dokter bedah akan melakukan tindakan pembedahan menggunakan elektrosurgery unit (ESU). Ternyata alat tidak melakukan pemotongan jaringan walaupun supply listrik sudah terhubung dan alat sudah menyala. Langkah awal apakah yang ha rus dilakukan oleh seorang teknisi untuk melakukan pemeriksaan?",
        options: ["A. Indikator Cutting", "B. Indikator Coagulating", "C. Koneksi elektroda", "D. Koneksi grounding", "E. Bunyi alarm"],
        answer: "C. Koneksi elektroda"
    },
    {
        question: "Kode : 0312200030 Alat radiant warmer baru sedang melakukan pemasangan oleh seorang elektromedis. Alat ini memiliki wadah untuk meletakkan matras bayi Di atasnya i terpasang sensor suhu udara. Tampak juga ada semacam jaring dari bahan logam yang dipasang tepat dibawah elemen pemanas. Apakah fungsi dipasangnya komponen tersebut?",
        options: ["A. Pengaman bagi bayi dari terti mpa komponen di bagian atas alat", "B. Penyebar panas supaya merata", "C. Sebagai kisi difraksi cahaya sinar biru", "D. Filter penyaring udara", "E. Pengaman bagi sensor suhu udara"],
        answer: "B. Penyebar panas supaya merata"
    },
    {
        question: "Kode : 0312200233 Pada saat alat Baby incubator yang sedang digunakan, ketika sebuah Baby incubato r sedang berfungsi, tiba - tiba suhu dari pasien/bayi ini ternyata nilai suhunya tidak dapat ditampilkan. Apakah analisa kerusakan yang terjadi dari permasalahan tersebut?",
        options: ["A. Air probe sensor", "B. Humidity probe sensor", "C. Skin probe sensor", "D. Semua jawaban salah", "E. Semua ja waban benar"],
        answer: "C. Skin probe sensor"
    },
    {
        question: "Kode : 1205210050 Pesawat x - ray sistem condensator discharge menggunakan tabung x - ray jenis triode. Salah satu elektrodenya adalah grid pada tabung x - ray sistem condensator discharge. Apa fungsi dari bagian alat tersebut?",
        options: ["A. A Memfilter radasi ham bur", "B. B Mengatur proses ready", "C. C Mengatur laju elektron", "D. D Mengatur tegangan pada tabung", "E. E Mengatur tegangan"],
        answer: "C. C Mengatur laju elektron"
    },
    {
        question: "Kode : 3107190103 Seorang elektromedis ditugaskan untuk melakukan pengujian output kinerja alat centrifuge. Kegiatan tersebut dilakukan dalam rangka m elakukan inspeksi dan preventive maintenance (IPM). Manakah parameter yang perlu dikalibrasi pada kasus tersebut?",
        options: ["A. Waktu dan kecepatan", "B. Suhu dan kecepatan", "C. Suhu dan kelembaban", "D. Kecepatan dan kelembaban", "E. Waktu dan suhu"],
        answer: "A. Waktu dan kecepatan"
    },
    {
        question: "Kode : 3107190007 Alat bed side monitor ke tika saat pengukuran BPM, grafik jantung yang dihasilkan atau yang ditampilkan ECG yang dihasilkan kurang bagus (terdapat ripple). Apa penyebab dari masalah tersebut?",
        options: ["A. Grounding kurang bagus", "B. Pemasangan lead yang salah", "C. Gel yang digunakan kurang banyak", "D. Trand user ECG nya rusak", "E. Ada gangguan dari frekwensi lain"],
        answer: "A. Grounding kurang bagus"
    },
    {
        question: "Kode : 0212200066 Seorang Elektromedis diminta menyiapkan sebuah EKG 3 kanal standard 12 lead untuk digunakan dalam pelayanan UGD. Apakah kelengkapan aksesoris yang perlu dipersiapkan?",
        options: ["A. Kabel pasien denga n 12 elektroda; kertas rekam EKG. Gel", "B. Kabel pasien dengan 10 elektroda; kertas rekam EKG, Gel", "C. Kabel pasien dengan 8 elektroda; kertas rekam EKG. Gel", "D. Kabel pasien dengan 6 elektroda: kertas rekam EKG.Gel", "E. Kabel pasien dengan 4 elektroda; kertas rekam EKG, G el"],
        answer: "B. Kabel pasien dengan 10 elektroda; kertas rekam EKG, Gel"
    },
    {
        question: "Kode : 1205210094 Pemasangan elektroda pada ECG harus sesuai dengan SOP. Salah satu lead yang sering digunakan untuk diagnosa adalah lead II. Pada bagian manakah pemasangan untuk pemeriksaan tersebut?",
        options: ["A. Tangan kiri dan kaki kiri", "B. Tangan kanan dan kaki kiri", "C. Tangan kanan dan tangan kiri", "D. Tangan kanan dan kaki kanan", "E. Kaki kanan dan kaki kiri"],
        answer: "B. Tangan kanan dan kaki kiri"
    },
    {
        question: "Kode : 2311190028 Alat sterilisator kering salah satunya berupa alat sterilisator dengan menggunakan generator Ozon, dimana memanfaatkan reaksi kimia terbentuknya Ozon sehi ngga lingkungan daya dukung hidup virus dan bakteri menjadi mati. Apakah nama istilah yang dimaksud pada reaksi tersebut?",
        options: ["A. photolysis", "B. photometri", "C. photosintesis", "D. Ozomysis", "E. catalisis"],
        answer: "A. photolysis"
    },
    {
        question: "Kode : 3107190278 Lampu infrared merupakan suatu alat terapi yang berfungsi untuk menghilangkan rasa nyeri yang diderita pasien. Lampu infrared haru s diletakkan pada jarak 45 - 60 cm dengan sudut tertentu. Waktu yang diperlukan untuk terapi kurang lebih sekitar 10 - 30 menit. Bagaimana sudut pemasangan lampu pada pasien?",
        options: ["A. Tegak lurus dengan obyek terapi", "B. Bersebelahan dengan obyek terapi", "C. Pada sudut 30 deraj at dari obyek terapi", "D. Pada sudut 45 derajat dari obyek terapi", "E. Pada sudut 180 derajat dari obyek terapi"],
        answer: "A. Tegak lurus dengan obyek terapi"
    },
    {
        question: "Kode : 2311190004 Laboratorium klinik akan melakukan salah satu parameter pengukuran pada peralatan laboratorium klinik yaitu alat pH meter. Pengukuran y ang akan dilakukan adalah mengukur kadar asam - basa pada sampel urin yang sudah tersedia. Apa langkah awal yang dilakukan sebelum pengukuran?",
        options: ["A. Kalibrasi", "B. Mengelap ujung sensor dengan tisu", "C. Mengukur sampel", "D. Mengelap sensor dengan tisu basah", "E. Sensor pH meter dit iup biar bersih"],
        answer: "A. Kalibrasi"
    },
    {
        question: "Kode : 2811190027 Seorang perawat melaporkan bahwa alat ECG yang digunakan mengalami gangguan saat dilakukan perekaman, dimana hasil perekaman gelombang V1 dan V2 tidak tercetak pada kertas rekaman. Apa tindakan pemeriksaan yang seharusnya dilakukan sebagai elektromedis?",
        options: ["A. Pemasangan kabel ke pasien", "B. Penggunaan jelly pada pasien", "C. Tengangan jala - jala PLN", "D. Sumber tegangan sudah terpasang diground", "E. Kondisi kabel ECG dan elektrodanya"],
        answer: "E. Kondisi kabel ECG dan elektrodanya"
    },
    {
        question: "Kode : 0312200205 Alat suction pump piston dilaporkan mengalami ke rusakan, yaitu motor tidak bergerak tapi ada suara mendengung pada motor. Apa bagian yang diperbaiki berdasarkan kasus tersebut?",
        options: ["A. Piston", "B. Klep", "C. Motor", "D. Filter", "E. Chamber cairan"],
        answer: "C. Motor"
    },
    {
        question: "Kode : 0312200135 A lat paraffin bath memanfaatkan lilin parafin yang dilelehkan sebagai media penghantar panas ke bagian tubuh yang diterapi. Ada beberapa syarat yang harus dipenuhi agar di ruangan penempatan alat ini tidak timbul kebakaran. Salah satunya adalah gas. Gas apa yang tidak boleh ada di ruangan tersebut?",
        options: ["A. Karbon dioksida", "B. Oksigen murni", "C. Udara", "D. Uap air", "E. Sulfur"],
        answer: "B. Oksigen murni"
    },
    {
        question: "Kode :2311190045 Alat Elektrosurgery unit saat dioperasikan alat hidup, namun tidak dapat melakukan Cutting dan Coagulation. Pengecekan bagian apa yang dilakukan elektromedis sehingga alat tersebut berfungsi ?",
        options: ["A. Foot control", "B. Rangkai an penguatan arus dan tegangan", "C. Kabel elektroda", "D. Tegangan jala - jala PLN", "E. Patien Plat"],
        answer: "A. Foot control"
    },
    {
        question: "Sebuah lampu operasi dengan intensitas cahaya 160.000 lux terpasang di langit langit ruang operasi. Alat tersebut terdiri 1 set lampu yang dapat bersuhu 4300 Kelvin. Seorang elektromedis diminta untuk melakukan kegiatan pemeliharaan lampu tersebut. Kegiatan apakah yang seharusnya dihindari saat melakukan pemeliharaan alat tersebut?",
        options: ["A. Menggunakan desinfektan semprot", "B. Membersihkan alat dengan kain lembab", "C. Sterilisasi uap pada handp iece", "D. Mengganti handpiece yang retak/rusak", "E. Dilakukan saat lampu sudah dingin"],
        answer: "A. Menggunakan desinfektan semprot"
    },
    {
        question: "Operating Lamp Ceiling Mounted adalah suatu alat yang digunakan untuk menerangi obyek pada saat dilakukan operasi (pembedahan). Alat tersebut membutuhkan perawatan supaya alat ters ebut selalu dalam keadaan baik berfungsi dan selalu siap pakai. Dokumen pemeliharaan sangat diperlukan agar waktu umur pemakaian termonitor. Apa tujuan kegiatan terhadap alat tersebut?",
        options: ["A. Pelayanan pada pasien", "B. Memudahkan untuk pengadaan baru", "C. Mencegah terjadi nya permintaan baru", "D. Meminimalisasi atau mencegah terjadinya perpindahan alat", "E. Meminimalisasi atau mencegah terjadinya kerusakan yang fatal"],
        answer: "E. Meminimalisasi atau mencegah terjadinya kerusakan yang fatal"
    },
    {
        question: "Kode : 2708200005 Seorang terapis ingin menggunakan alat traksi untuk terapi kepada pasiennya. Terapis meminta bantua n teknisi rumah sakit untuk memasang alat tersebut. Apa yang harus dilakukan seor ang teknisi agar alat tersebut terpasang dengan baik ?",
        options: ["A. Pemberat Harus cukup tinggi di atas permukaan lantai", "B. Hubungkan korset dengan pengait", "C. Setting timer untuk menentukan lama proses terapi pada pasien", "D. Bersihkan badan pesawat dari debu", "E. Setting berat badan yang di dapat dari berat pasien"],
        answer: "A. Pemberat Harus cukup tinggi di atas permukaan lantai"
    },
    {
        question: "Kode: 1105210146 Seorang elektromedis mendapat laporan dari user bahwa tensi digital yang sedang di gunakan tidak mau be rhenti memompa saat melakukan pemeriksaan. Kemudian dilakukan pengecekan untuk hal tersebut. Mengganti bagian apakah yang harus dilakukan pada kasus tersebut ?",
        options: ["A Selang tensi meter", "B Air raksa", "C Bulb", "D Manset", "E Sekring"],
        answer: "C Bulb"
    },
    {
        question: "Kode: 1105210037 Seorang labora n akan menggunakan alat centrifuge. Pada saat alat digunakan ternyata alat tersebut tidak dapat memutar seperti biasa. Setelah dicek ternyata pengaman pada tutup alat centrifuge mengalami kerusakan. Apa yang diharus dikaukan pada alat tersebut?",
        options: ["A Mengecek tegangan motor", "B Mengganti sensor kecepatan", "C Mengganti fuse", "D Mengganti switch", "E Melakukan pembersihan"],
        answer: "D Mengganti switch"
    },
    {
        question: "Kode: 1105210022 Sebuah alat spectrophotometer digunakan untuk mengetahui kandungan zat yang terdapat pada sebuah larutan atau darah. Dengan cara apakah alat tersebut bekerja sehingga menghasilkan nilai dari zat yang akan diketahui ?",
        options: ["A mengaduk cairan sample", "B memanaskan cairan sample", "C mencairkan menggunakan air", "D mengukur banyaknya cairan sample E mengukur kepekatan suatu larutan sample"],
        answer: "E mengukur kepekatan suatu larutan sample"
    },
    {
        question: "Kode : 1105210009 Di rumah sakit terdapat alat doppler. Alat tersebut juga sering digunakan pada pelayanan kesehatan baik di puskesmas maupun rumah sakit. Karena alat ini dapat mendengarkan detak jantung janin ketika masih berada dalam kandungan. Pada bidang p elayanan apakah alat tersebut digunakan?",
        options: ["A Obgyn", "B THT", "C Bedah", "D Svaraf", "E Fisiotherapy"],
        answer: "A Obgyn"
    },
    {
        question: "Kode: 1105210144 Sebuah alat defibrilator saat bekeria terkadang mengalami kendala dengan tidak dapat dilakukan pengisian charger Apa analisa awal kerusakannya?",
        options: ["A T ombol charger rusak;kapasitor rusak; rangkaian charger rusak", "B Alat dalam kondisi diluar vmode kalibrasi", "C Rangkaian deteksi tidak berjalan", "D Rangkaian sinkron/asinkron tidak bekerja", "E Sekring putus"],
        answer: "A T ombol charger rusak;kapasitor rusak; rangkaian charger rusak"
    },
    {
        question: "Kode : 1105210053 Seorang dokter melakukan pemeriksaan pasien dengan menggunakan USG, pada saat pengoperasian timbul permasalahan yaitu monitor dari USG tersebut tidak menunjukkan warna pada hasil gambar. Apakah yang harus dicheck oleh teknisi pada kasus tersebut ?",
        options: ["A Kabel power pada alat tersebut", "B Kabel DVI", "C Indikator pada alat tersebut", "D printer dari alat tersebut", "E sumber PLN"],
        answer: "B Kabel DVI"
    },
    {
        question: "Kode : 1105210063 Seorang bayi lahir premature di IGD RS dengan usia kehamilan 33 minggu dengan berat badan 1900 gr. Bayi tersebut berjenis kelamin laki - laki memiliki kulit y ang tipis dan jaringan lemak sedikit. Alat bantu apakah yang digunakan untuk mempertahankan kondisi lingkungan sesuai kasus diatas?",
        options: ["A Infant warmer", "B NICU", "C Pediatric", "D UV Lamp", "E Baby Incubator"],
        answer: "A Infant warmer"
    },
    {
        question: "Kode: 1105210096 Seorang perawat gigi melaporkan bahwa D ental Unit di Poliklinik Gigi sering dilaporkan kerusakan dibagian kursi pasien, sehingga user kesulitan dalam melakukan pemeriksaan. Pemeriksaan apakah yang dilakukan elektromedis untuk kondisi tersebut?",
        options: ["A Supply Listrik di Poligigi", "B Berat badan pasien", "C Sistem hidrolik", "D Foot switch", "E Supply Air di Poli Gigi"],
        answer: "C Sistem hidrolik"
    },
    {
        question: "Kode: 1105210106 Sebuah Rumah Sakit baru membeli sebuah alat Baby Incubator melalui proses sesuai prosedur yang berlaku dengan masa garansi 1 tahun. Pada saat usia alat 3 bulan. alat tersebut me ngalami error pada pembacaan suhunya. Apakah langkah yang diambil oleh elektromedis untuk menangani alat tersebut?",
        options: ["A Menelepon Perusahaan rekanan lain", "B Menyalahkan user karena terjadi error", "C Mengembalikan alat ke perusahaan", "D Melakukan perbaikan semampun ya", "E Melaporkan keagenan karena masih garansi"],
        answer: "E Melaporkan keagenan karena masih garansi"
    },
    {
        question: "Kode : 1105210141 Sebagai seorang elektromedis harus menyampaikan kepada user bahwa peralatan elektromedis harus dibersihkan setelah penggunaan. Salah satunya adalah alat analytical balance. Setelah seles ai menggunakan, timbangan harus dibersihkan. Apakah bagian yang paling penting dari timbangan yang harus segera dibersihkan setelah digunakan?",
        options: ["A Kaca Penutup", "B Anak timbangan", "C Pan (piringan) tempat sampel", "D Kabel Power", "E Tombol pada timbangan"],
        answer: "C Pan (piringan) tempat sampel"
    },
    {
        question: "Kode : 1105210084 Seorang bidan menelpon ke IPS bahwa doppler. yang sedang digunakan pada pasien tiba - tiba rusak. Untuk menyikapi laporan bidan tersebut apa yang dilakukan oleh petugas elektromedis?",
        options: ["A Mengganti sparepart", "B Membuat Laporan Kerusakan", "C Menghubung i Agen alat tersebut", "D Melakukan pemeriksaan awal", "E Mengkalibrasi Alat"],
        answer: "D Melakukan pemeriksaan awal"
    },
    {
        question: "Kode : 1105210092 Di rumah sakit terdapat berbagai macam alat - alat medis sesuai dengan typenya. Salah satu alat yang dimaksud adalah alat shot wave diathermy (SWD). Pada saat al at digunakan untuk terapi pasien pemberian waktunya tidak sesuai dengan yang diatur. Kerusakan apa yang dialami oleh alat tersebut?",
        options: ["A Aplikator", "B Kabel power C Selector", "D Timer", "E Rangkaian penguat"],
        answer: "D Timer"
    },
    {
        question: "Kode : 1105210108 Setiap pengadaan alat elektromedik , maka wajib adanya dilakukan pelatihan alat terhadap pengguna. materi pelatihan berupa cara penggunaan, pemeliharaan rutin harian, prinsip keselamatan kerja bagi alat dan juga pengguna. Dan harus menyerahkan dokumen alat kepada pengguna. Apa dokumen yang harus anda cantumkan langsung pada alat?",
        options: ["A Standar operasional prosedur", "B Petunjuk perbaikan", "C Petunjuk pemeliharaan", "D Tata cara membersihkan", "E Buku petunjuk instalasi alat"],
        answer: "A Standar operasional prosedur"
    },
    {
        question: "Kode : 1105210122 Rumah sakit baru saja mengadakan pembelian alat electro su rgery unit (ESU) dan meminta kepada seorang teknisi Elektromedis untuk mengajukan usulan dokumen tehnik yang harus disertakan dalam pengadaan tersebut. Dokumen tehnik apa saja yang dibutuhkan sebagai bahan referensi dalam melaksanakan kegiatan tehnik ?",
        options: ["A S ervice manual dan operating manual", "B Electrode tambahan", "C Jaminan purna jual", "D Operating manual", "E Service manual"],
        answer: "A S ervice manual dan operating manual"
    },
    {
        question: "Kode : 0312200210 Sebuah suction pump dilaporkan mengalami kerusakan, dimana daya hisapnya sangat lemah. Ketika dilakukan pengujian pa da selang tidak ditemukan kebocoran. Apakah kerusakan alat tersebut?",
        options: ["A Regulator", "B Filter", "C Vacuum manometer", "D Vacuum Klep", "E Vacuum House"],
        answer: "D Vacuum Klep"
    },
    {
        question: "Kode : 2611190004 Suatu alat laboratorium berupa blood glucose tester sesaat yang dapat memeriksa kandungan gul a darah. kolesterol dan asam urat dalam darah. Alat tersebut dapat mendeteksi tiga jenis inputan yang berbeda dari testrip tersebut. Agar inputan yang akan dikeluarkan menjadi satu keluaran maka dibutuhkan:",
        options: ["A Decoder", "B Op Amp", "C ADC", "D DCA", "E MUX"],
        answer: "E MUX"
    },
    {
        question: "Kode : 0212200057 Pada pesawat Ultrasonograph, pada buku manualnya dituliskan spesifikasi kelistrikannya sebagai berikut tegangan AC input 90 to 240 Vac, Frekwensi: 47 ro 63 Hz. ground impedance: 100 m2; load: I, 150 VA: AC output (including PC): non sinusoidal 120 Vrms, daya: 350 VA. Berapakah dava UPS yang diperlukan.",
        options: ["A 250 VA", "B 1000 VA", "C 2500 VA", "D 5000 VA", "E 100 VA"],
        answer: "B 1000 VA"
    },
    {
        question: "Kode : 0312200163 Seorang elektromedis yang sedang melakukan pemeliharaan pada pesawat rontgen. Dalam pemeriksaan tersebut dijumpai bahwa aru s tabung yang ditunjukkan pada semua pemilihan arus tabung selalu lebih rendah dari nilai yang dipilih. Bagian manakah dari pesawat rontgen tersebut yang mengalami masalah?",
        options: ["A Standby resistor", "B High Tension Transformer", "C KV selector", "D Line voltage compens ator", "E Rectifier"],
        answer: "B High Tension Transformer"
    },
    {
        question: "Kode : 0312200135 Alat paraffin bath memanfaatkan lilin parafin yang dilelehkan sebagai media penghantar panas ke 2 bagian tubuh yang diterapi. Ada beberapa syarat yang harus dipenuhi agar di ruangan penempatan alat ini tidak timbul kebakaran. Salah satunya adalah gas. Gas apa yang tidak boleh ada di ruangan tersebut ?",
        options: ["A Karbon dioksida", "B Oksigen murni", "C Udara", "D Uap air", "E Sulfur"],
        answer: "B Oksigen murni"
    },
    {
        question: "Kode : 1409200023 User melaporkan alat dental unit ada keluhan air.pada handpiece tidak dapat kel uar. Sedangkan kompresor dan footswitch dalam kondisi baik. Apa analisa awal kerusakannya?",
        options: ["A Selang/tubing mampet, filter air kotor.", "B Tekanan udara kurang, pressure regulator tersumbat", "C Valve tidak bekeria. tidak ada aliran udara", "D Footswitch rusak, mik romotor rusak", "E Kompresor rusak, handpiece rusak"],
        answer: "A Selang/tubing mampet, filter air kotor."
    },
    {
        question: "Kode : 0212200158 Perawat ruang rawat inap melaporkan bahwa pesawat EKG tidak menunjukan hasil pada salah satu leadnya. User telah melakukan pembersihan pada elektrodanya. Apakah tindakan yang anda la kukan sebagai seorang teknisi elektromedis terhadap kasus tersebut?",
        options: ["A pengukuran tegangan jala jala listrik PLN", "B Melakukan pengecekan batere", "C pengecekan pisik dari kabel pasien", "D Mengganti batere pada EKG", "E Mengganti kabel pasien"],
        answer: "C pengecekan pisik dari kabel pasien"
    },
    {
        question: "Kode : 130521013 2 Perkembangan teknologi alat di rumah sakit sangat berkembang dengan cepat. Para dokter di rumah sakit biasanya akan meminta peralatan kesehatan yang baru dengan alasan bahwa alat yang dipakai sekarang sudah tidak akurat dan terstandar dengan baik. Apa ya ng anda lakukan dalam menanggapi hal ini",
        options: ["A Memperbaiki dan mengkalibrasi alat", "B Menservis dan inventaris alat", "C Memberikan brosur alat baru", "D Membuat berita acara palsu", "E Memanggil distributor"],
        answer: "A Memperbaiki dan mengkalibrasi alat"
    },
    {
        question: "Kode : 1205210005 Teknisi elektromedik mendapat keluha n bahwa lampu pada film viewer tidak menyala. Kemudian teknisi datang dan mengganti lampu tersebut. Setelah di ganti ternyata lampu film viewer tetap tidak menyala. Penggantian spare part apakah yang dilakukan?",
        options: ["A starter lampu film viewer", "B Melakukan kalib rasi", "C lampu yang baru lagi", "D Switch on/off", "E saklar lampu film viewer"],
        answer: "A starter lampu film viewer"
    },
    {
        question: "Kode : 3107190399 Sebuah lampu operasi dengan intensitas cahava 160.000 lux terpasang di langit langit ruang operasi. Alat tersebut terdiri I set lampu yang dapat bersuhu 4300 K elvin. Seorang elektromedis diminta untuk melakukan kegiatan pemeliharaan lampu tersebut. Kegiatan apakah yang seharusnya dihindari saat melakukan pemeliharaan alat tersebut?",
        options: ["A Menggunakan desinfektan semprot", "B Membersihkan alat dengan kain lembab", "C Ster ilisasi uap pada handpiece", "D Mengganti handpiece yang retak/rusak", "E Dilakukan saat lampu sudah dingin"],
        answer: "A Menggunakan desinfektan semprot"
    },
    {
        question: "Kode : 0212200059 Seorang teknisi melakukan kegiatan pemeliharaan lampu operasi. setiap akan melakukan operasi atau sesudah melakukan operasi, kebe rsihan dan kelengkapan alat - alat operasi akan selalu di cek terlebih dahulu. bagaimanakah cara melakukan pemeliharaan alat elektromedik tersebut?",
        options: ["A Dibersihkan dengan kain lap halus", "B Melakukan pelepasan pada lampu", "C Melakukan penggantian lampu", "D Dibersih kan dengan kain lap kasar", "E Dibersihkan dengan kain lap basah"],
        answer: "A Dibersihkan dengan kain lap halus"
    },
    {
        question: "Kode : 1105210026 Sebuah dental unit yang telah digunakan dalam layanan selama 6 bulan, belum pernah dilakukan pemeliharaan. Unit ini menggunakan chair hydraulic, supaya chairnya bisa nai k turun dengan baik. Pengecekan pada bagian apa yang harus dilakukan oleh seorang tenaga elektromedis?",
        options: ["A Turbin", "B Chair dan diganti olinya", "C Multifunction hand piece", "D Selang air", "E Kompresor"],
        answer: "B Chair dan diganti olinya"
    },
    {
        question: "Kode : 0209200001 Pada dental unit terdapat lampu untuk m embantu user dalam pemeriksaan. Jenis lampu yang di gunakan yaitu lampu halogen. Terdapat SOP yang benar dalam mengganti bolam lampu halogen yang putus atau mati. Bagaimana SOP mengganti lampu halogen tersebut?",
        options: ["A Memasang lampu halogen menggunakan tangan", "B Melapisi lampu halogen dengan tisu kering", "C Di tiup terlebih dahulu sebelum di pasang", "D Di gosok terlebih dahulu sebelum di pasang", "E. Memasang lampu dengan kapas"],
        answer: "B Melapisi lampu halogen dengan tisu kering"
    },
    {
        question: "Kode : 2611190059 ketika seorang elektromedis melakukan pengoperasian patient monitor power indicator menyala LCD screen tidak menyala/mati. Tindakan apakah yang dilakukan elektromedis tersebut?",
        options: ["A kabel power dengan (PM)", "B kabel elektroda dengan pasien", "C kabel elektroda dengan PM", "D kabel LCD dengan PCB utama", "E Kabel grounding"],
        answer: "D kabel LCD dengan PCB utama"
    },
    {
        question: "Kode : 0212200181 Petugas Laboratorium melaporkan bahwa water bath mereka sejak beberapa minggu belakangan terjadi kerusakan. Waterbath tidak bisa menghasilkan panas. Apa penyebab kasus tersebut?",
        options: ["A Tegangan listrik PLN yang tidak stabil", "B Terdapat gangguan pada sistem sirkulasi air", "C Heater tidak bekerja", "D Melakukan kalibrasi", "E Alat bekerja di luar keadaan normalnya"],
        answer: "C Heater tidak bekerja"
    },
    {
        question: "Kode : 2311190007 Pengoperasian water bath membutuhan suhu dan waktu yang konstan agar larutan bisa sesuai dengan kebutuhan. Apa yang harus dil engkapi oleh seorang teknisi elektromedik pada alat water bath?",
        options: ["A sensor level air", "B blower", "C kontrol suhu dan waktu", "D kontrol suhu", "E kontrol waktu"],
        answer: "A sensor level air"
    },
    {
        question: "Kode: 1105210075 Pada EKG recorder, gelombang ekg R - R (peak to peak) sejumlah 5 kotak besar pada ker tas EKG. Kecepatan kertas 25 mm/s. Barapa nilia beat per minute (BPM) yang dihasilkan ?",
        options: ["A 60", "B 70", "C 80", "D 90", "E 100"],
        answer: "A 60"
    },
    {
        question: "Kode : 1409200082 Sebuah shaker dilaporkan rusak dengan keluhan tidak dapat berfungsi sama sekali. Pemeriksaan apakah yang anda lakukan saat perbaikan. ?",
        options: ["A kabel power", "B fuse", "C mikroswitch door", "D Saklar On Off", "E motor"],
        answer: "A kabel power"
    },
    {
        question: "Kode : 1409200039 Rumah Sakit akan membeli sebuah alat x - ray mobile dengan spesifikasi 100kV 100mA. Dan kan ditempatkan satu bangsal dengan alat x - ray stationer yang m emiliki 150kV 500mA. Sementara pada bangsal terdapat daya 150 kVA. Apa yang harus direncanakan pada Instalasi listrik bangsal tersebut?",
        options: ["A Menambah daya menjadi 200kVA", "B Mengganti Sekring yang lebih besar kapasitas arusnya", "C Mengganti perangkat listrik sepe rti kabel dan MCB", "D Menginstal ulang jaringan listriknya", "E Mengganti saklar engkel"],
        answer: "C Mengganti perangkat listrik sepe rti kabel dan MCB"
    },
    {
        question: "Kode : 0312200190 Sebuah suction pump piston rusak tidak bisa digunakan, motor tidak bergerak, penggunaan terakhir satu minggu yang lalu. Apa yang harus kita lakukan pertama kali saat memperbaiki?",
        options: ["A Melakukan desinfektan terhadap alat", "B Membuka bagian motor", "C Memutar motor secara manual", "D Merendam alat dengan cairan desinfektan", "E Membersihkan Alat"],
        answer: "E Membersihkan Alat"
    },
    {
        question: "Kode: 2311190010 Sebelum pesawat Autoclave digunakan terlebih dah ulu kita mengatur bagian atau komponen yang terdapat pada autoclave. Apakah komponen atau bagian yang pertama kali diatur sebelum alat tersebut digunakan?",
        options: ["A Langsung dihubungkan ke tegangan jala - jala PLN", "B Mengatur temperature sesuai dengan yang kita kehen daki", "C Langsung menghidupkan autoclave", "D Mengatur waktu/timer yang kita kehendaki", "E Mengatur suhu seting dan waktu operasi"],
        answer: "E Mengatur suhu seting dan waktu operasi"
    },
    {
        question: "Kode: 0212200054 Sebuah Rumah Sakit akan melakukan pengadaan lampu Infra Red yang akan dipasang di dalam sebuah ruang fisioter api yang di dalamnya terdapat sebuah nebulizer. Lampu Infra Red tersebut digunakan untuk membantu terapi menggunakan nebulizer tersebut. Bagaimana rencana pemilihan lampu tersebut dan bagaimana pemasangannya?",
        options: ["A Lampu Infra Red Desk. Ditempatkan di Meja do kter", "B Lampu Infra Red Desk, Ditempatkan di atas nebulizer", "C Lampu Infra Red Stand. Ditempatkan di sekitar nebulizer", "D Lampu Infra Red Stand.Ditempatkan di Sekitar Meja dokter", "E Lampu Infra Red Wall. Ditempatkan di tembok sekitar nebulizer"],
        answer: "C Lampu Infra Red Stand. Ditempatkan di sekitar nebulizer"
    },
    {
        question: "Kode : 0312200090 Seorang elektromedis melakukan pemeliharaan pada alat Electro Surgical Unit, dengan cara melakukan pengecekan hasil keluaran dengan mengukur tegangan elektrode positip dan negatif. dengan hasil tidak keluar daya pada esu analizer. Apakah yang harus dilakukan elektromedis dalam kasus tersebut?",
        options: ["A Periksa kembali sambungan power supply", "B Menaikkan frekuensi", "C Memperbaiki Patien plate", "D Memeriksa generator HF", "E Periksa keluaran kabel power"],
        answer: "D Memeriksa generator HF"
    },
    {
        question: "Kode : 1205210140 Di rumah sakit terdapat alat baby incub ator. Alat tersebut dioperasikan dengan menekan tombol power switch ON. Akan tetapi pada saat alat digunakan ternyata display suhu tidak menyala dan indikator power mati. Apa yang harus diganti dalam mengatasi hal tersebut?",
        options: ["A probe sensor", "B fuse", "C tombol", "D heater", "E humidity"],
        answer: "B fuse"
    },
    {
        question: "Kode : 0312200150 Pesawat Rontgen adalah suatu alat radiologi yang memanfaatkan kemampuan tabung Rontgen dalam memproduksi sinar - x dimana 99% energinya berubah menjadi panas, dan hanya 1% energi yang menghasilkan sinar - x. Disampin g manfaat yang dihasilkannya, terdapat resiko terhadap penggunaan sinar - x yang berlebihan dan tidak tepat guna. Salah satu upaya pencegahan agar pemanfaatan sinar - x sesuai asas ALARA (as low as reasonably achievable) adalah",
        options: ["A Menganjurkan kepada operator a gar menggunakan setting kV yang kecil", "B Menganjurkan kepada operator agar meggunakan Apron saat melakukan pemeriksaan", "C Memasang Pb pada ruangan pemeriksaan", "D Menghidupkan lampu merah saat melakukan ekspose", "E Melakukan uji kesesuaian terhadap pesawat Sina r - X secara berkala"],
        answer: "E Melakukan uji kesesuaian terhadap pesawat Sina r - X secara berkala"
    },
    {
        question: "Kode : 0212200164 Perawat melaporkan kendala pada ECG. Pada kertas hasil pemeriksaan, banyak noise sehingga menganggu proses pembacaan sinyal EKG. Setelah diperiksa, kondisi fisik alat masih bagus. Apa yang harus Saudara lakukan un tuk pemeriksaan alat tersebut?",
        options: ["A switch speed motor.", "B tombol HUM Filter.", "C tombol Sensitifity.", "D tombol Calibration 1 mV.", "E grounding pada alat."],
        answer: "E grounding pada alat."
    },
    {
        question: "Kode : 0212200135 Berdasarkan analisa kerusakan pada sebuah alat sterilisator kering dengan keluhan al at tidak dapat bekerja meskipun saklar sudah pada posisi ON. Tindakan perbaikan pertama yang harus dilakukan?",
        options: ["A Menghubungkan dengan sumber tegangan", "B Mengecek tegangan yang masuk", "C Mengganti kabel power supply", "D Mengganti saklar", "E Mengganti fuse"],
        answer: "E Mengganti fuse"
    },
    {
        question: "Kode : 0212200143 salah satu jenis alat terapi yang menggunakan frekuensi tinggi yang menghasilkan panas untuk disalurkan kebagian tubuh pasien adalah SWD yang sering digunakan oleh therapis untuk menyembuhkan pasien cidera Apakah nama bagian yang menyalurka n frekuensi tinggi tersebut?",
        options: ["A Elektrode", "B Pedal", "C Transduser", "D Kabel pasien", "E Reflektor"],
        answer: "A Elektrode"
    },
    {
        question: "Kode: 0312200188 Seorang perawat di ruang NICU menyampaikan keluhan kepada elektromedis bahwa ada alat infant warmer yang setelah di - setting tenyata suhunya ti dak tercapai atau tidak panas. Apa pemeriksaan pertama yang akan dilakukan oleh tenaga elektromedik untuk menangani hal tersebut?",
        options: ["A Tegangan pada rangkaian driver", "B Tegangan pada heater", "C Tegangan pada semua rangkaian", "D Tegangan pada power supply", "E Tegang an pada sensor suhu"],
        answer: "B Tegangan pada heater"
    },
    {
        question: "Kode : 0312200058 Ultrasonography merupakan alat yang digunakan untuk mengetahui bagian dalam tubuh dengan menggunakan pancaran frekuensi suara. Alat ini digunakan untuk diagnosa suatu penyakit sehingga harus ditempatkan pada ruan g khusus agar tidak menganggu proses diagnosa pasien. Berdasarkan fungsinya, harus ditempatkan diruangan manakah alat tersebut?",
        options: ["A kedap suara", "B terbuka", "C banyak ventilasi", "D dilengkapi dengan hepa filter", "E dinding dan pintu yang dilapisi timbal"],
        answer: "A kedap suara"
    },
    {
        question: "Kode : 3107190204 Pada sebuah rumah sakit akan dilakukan instalasi autoclave table top dengan spesifikasi input 110 VAC. Dengan menggunakan alat apakah seorang elektromedis untuk mengatasi masalah tersebut?",
        options: ["A trafo step down", "B trafo step up", "C stabilizer", "D inver ter", "E UPS"],
        answer: "A trafo step down"
    },
    {
        question: "Kode : 1409200092 Seorang dokter akan melakukan tindakan pembedahan di sebuah rumah sakit. Peralatan yang digunakan adalah elektrosurgery unit (ESU). Apakah prosedur pertama yang diperhatikan pada kasus tersebut?",
        options: ["A Kebocoran gas", "B Penemp atan return elektroda pada pasien", "C Pengunaan footswitch", "D Penggunaan handswitc", "E Safety grounding"],
        answer: "B Penemp atan return elektroda pada pasien"
    },
    {
        question: "Kode : 0312200180 Saat dilakukan pegecekan pada sphygmomanometer air raksa atas laporan dari pengguna didapati bahwa nilai tekanan yang tampil pada s phygmomanometer terbaca 100 mmHg. Saat dilakukan kalibrasi pada alat tersebut nilai tekanan yang terbaca melebihi ambang batas yang diperkenankan yaitu 3 mmHg Apakah tindakan yang harus dilakukan elektromedis untuk memperbaiki hal tersebut?",
        options: ["A Penggantian m anset", "B Penggantian Y konektor", "C Penggantian tabung gelas ukur", "D Pembersihan tabung gelas ukur", "E Pengurangan volume air raksa"],
        answer: "E Pengurangan volume air raksa"
    },
    {
        question: "Kode : 0312200120 Seorang perawat merawat pasien dan memasang infus di ruangan ICU setelah dilakukan pemasanan infus Set ter nyata Infus tidak bisa menetes. Tindakan apakah yang dilakukan elektromedis",
        options: ["A Memperbaiki Karena adanya sumbatan pada selang infus", "B Memeriksa motor penggerak actuator jika perlu diganti", "C Pada saat selang diluruskan kurang bagus sehingga ada udara masuk", "D Lepas selang infus dan bersihkan sumbatannya.", "E Membuka Infus pump"],
        answer: "D Lepas selang infus dan bersihkan sumbatannya."
    },
    {
        question: "Kode : 0312200110 Seorang petugas laboratorium, mengeluhkan alat mikroskop yang mereka pakai, pencahayaan tidak maksimal, sehingga petugas laboratorium tidak dapat melihat obyek den gan jelas. Apa yang harus dilakukan elektromedis untuk mengecek kasus tersebut?",
        options: ["A lensa objektif", "B bagian diafragma", "C posisi cermin", "D bagian makrometer", "E bagian revolver"],
        answer: "C posisi cermin"
    },
    {
        question: "Kode : 2311190051 Kepala Ruangan di Ruang Operasi Rumah Sakit melaporkan keru sakan meja operasi yaitu meja operasi tidak dapat dioperasikan untuk naik turun. Apakah tindakan yang dilakukan berdasar kasus tersebut?",
        options: ["A Pengatur posisi", "B Remote", "C Aksesoris", "D Sistem Hidrolik/elektrik", "E Rem"],
        answer: "D Sistem Hidrolik/elektrik"
    },
    {
        question: "Kode : 3107190393 Sebuah alat harmonic s chalpel baru saja dibeli oleh rumah sakit. Seorang elektromedis akan melakukan pencatatan kelengkapan alat yang diterima. Ternyata ada kelengkapan yang terdapat pada kardus alat. Apakah nama kelengkapan alat harmonic schalpel yang tidak ada?",
        options: ["A Elektroda Pa ssive", "B Foot Swicth", "C Elektroda aktive", "D Monopolar electrode", "E Forceps"],
        answer: "A Elektroda Pa ssive"
    },
    {
        question: "Kode : 2611190071 Seorang terapis melaporkan bahwa alat terapi inframerah yang digunakan mengalami masalah. Setelah dicek oleh elektromedis, ternyata lampu tidak menyala. Tindaka n apa yang dilakukan harus oleh elektromedis?",
        options: ["A Memasang bola lampu & memutar starter", "B Mencari kabel pengganti", "C Mengecek arus", "D Ganti kabel power supply", "E cek kabel power"],
        answer: "A Memasang bola lampu & memutar starter"
    },
    {
        question: "Kode : 2811190058 Setiap rumah sakit memiliki instalasi radiologi, salah sa tu alatnya adalah General X - Ray, alat tersebut perlu mendapatkan perawatan yang sangat intens agar bisa bertahan lama dalam penggunaannya. Apakah yang dilakukan sehingga hal tersebut dapat dilaksanakan?",
        options: ["A Menghidupkan alat seketika saat ada pemeriksaan pa sien", "B Menghidupkan alat lebih awal untuk pemanasan sebelum pemeriksaan pasien dilakukan", "C Membiarkan alat hidup walaupun tidak ada pemeriksaan", "D Tidak menghidupkan alat dalam waktu lama walaupun tidak ada pemeriksaan pasien", "E Mematikan alat setiap sehabi s pemeriksaan pasien dan menghidupkan ketika ada pemeriksaan pasien"],
        answer: "B Menghidupkan alat lebih awal untuk pemanasan sebelum pemeriksaan pasien dilakukan"
    },
    {
        question: "Kode: 0312200134 Seorang teknisi harus dapat melakukan pemasangan alat traksi pada tali utama sehingga dapat memiliki gaya tarik. Traksi harus dapat bergerak bebas pada katrol. Berat ekstremitas dengan alat penyokong harus seimbang dengan pemberat agar reduksi dapat dipertahankan. Dimanakah seharusnya teknisi memasang komponen tersebut?",
        options: ["A Di tengah, sejajar dengan tubuh pasien", "B Tinggi di atas permukaan lantai", "C Di bawah, sejajar deng an lantai", "D Di samping kanan pasien", "E Di samping kiri pasien"],
        answer: "B Tinggi di atas permukaan lantai"
    },
    {
        question: "Kode : 2311190002 Seorang perawat sedang melakukan pemeriksaan tekanan darah terhadap pasien. Setelah tensimeter terpasang, manset tidak mengembang meskipun valve sudah ditutup. apa permas alahan yang terjadi pada alat tersebut?",
        options: ["A Balon bocor", "B Posisi manset tidak tepat", "C Manset bocor", "D Selang bocor", "E Manometer gauge perlu diperbaiki"],
        answer: "A Balon bocor"
    },
    {
        question: "Kode : 3107190386 Gelombang Microwave yang dihasilkan oleh alat MWD dapat menimbulkan interferensi ele ktromagnetik yang akan mempengaruhi kerja alat lain. Berapakah minimal jarak (meter) yang aman antara alat tersebut dengan alat kesehatan lainnya?",
        options: ["A 2", "B 1", "C 5", "D 10", "E 15"],
        answer: "B 1"
    },
    {
        question: "Kode : 1305210134 Seorang pasien yang mengalami kecelakaan membutuhkan 2 kantong darah, sebelum ditransfusikan ke pasien tersebut biasanya kantong darah tersebut di hangatkan dengan alat blood warmer. Berapa pengaturan suhu pada kasus alat tersebut?",
        options: ["A 3 - 5", "B 3 - 7", "C 4 - 3", "D 10 - 0", "E 2 - 6"],
        answer: "A 3 - 5"
    },
    {
        question: "Kode : 2708200001 Seorang elektromedis ingin men guji alat secara keseluruhan melalui bagian alat dengan kemampuan maximum. Pada saat dijuji alat tersebut dihubungkan tanpa beban, sehingga dapat diketahui secara keseluruhan bahwa alat tersebut dapat dioperasikan dengan baik. Apakah uji yang paling tepat pada alat tersebut?",
        options: ["A Fungsi", "B Kinerja", "C Teknis", "D Operasional", "E Terencana"],
        answer: "B Kinerja"
    },
    {
        question: "Kode : 0312200091 Seorang teknisi elektromedik, melakukan pemeliharaan harian di Rumah Sakit. Ketika di ruangan operasi, teknisi tersebut mendapatkan suction pump dengan masa lah tempat penampungan cairan suction pump yang berlebihan, sehingga cairan pasien yang terhisap tertumpah. Apakah bagian yang harus diperbaiki pada hal tersebut ?",
        options: ["A selang penghisap", "B pengaman Motor", "C manometer", "D sensor pengaman over flow protection", "E re gulator"],
        answer: "D sensor pengaman over flow protection"
    },
    {
        question: "Kode : 1305210005 Ada sebuah instrument ceiling operation lamp yang masih belum dipasang di kamar operasi dan masih menunggu seorang teknisi elektromedik untuk memasangnya.Apa yang harus dilakukan oleh seorang tenaga elektromedis yang bertuga s menangani alat tersebut?",
        options: ["A Melakukan pemasangan di langit - langit/plafon kamar operasi", "B Melakukan pemasangan di dinding kamar operasi", "C Melakukan pemasangan di kamar operasi cadangan", "D Tidak perlu melakukan pemasangan karena sudah mempunyai roda", "E Tida k perlu melakukan pemasangan karena dapat berpindah - pindah"],
        answer: "A Melakukan pemasangan di langit - langit/plafon kamar operasi"
    },
    {
        question: "Kode : 2311190015 seorang laboran memanggil saudara sebagai teknisi untuk memperbaiki alat lab stirrer dengan keluhan saat dioperasikan tidak mampu mngaduk sampel. Bagaimanakah tindakan sauda ra melakukan pengecekan perbaikan pada alat stirrer tersebut?",
        options: ["A pengaduk dan motor", "B casing dan pengaduk", "C timer dan sikat arang", "D magnet dan pengaduk", "E sikat arang dan motor"],
        answer: "A pengaduk dan motor"
    },
    {
        question: "Kode : 0212200089 RSUD tipe C di Provinsi Jawa Tengah berencana mengadaka n pembelian sebuah alat medis berupa lampu operasi Ceiling. Staf IPSRS ditugaskan untuk survey sebuah ruangan yang akan dipasang lampu operasiPenempatan di ruang manakah alat tersebut akan diinstall?",
        options: ["A ICU", "B IGD", "C Operasi", "D Rehab Medik", "E Laboratorium"],
        answer: "C Operasi"
    },
    {
        question: "Kode : 231119008 Pesawat autoclave pada saat proses sterilisasi mengalami kerusakan yaitu suhu uap air tidak dapat panas, dan akhirnya tidak dapat digunakan untuk sterilisasi. Apa yang dilakukan dalam pemeriksaan dan perbaikan alat tersebut?",
        options: ["A filter", "B t imer", "C casing", "D heater", "E gasket"],
        answer: "D heater"
    },
    {
        question: "Kode : 0212200047 User menyampaikan terjadi kerusakan alat spektrophotometer. Saat mengoperasikan alat spektrophotometer probe pada alat tidak dapat mengambil sampel. Apakah kerusakan yang terjadi pada kasus tersebut ?",
        options: ["A Kerusakan pada pompa servo", "B Tersumbatnya probe. C Kabel power rusak D Fuse terputus.", "E Pompa sudah berkarat"],
        answer: "B Tersumbatnya probe. C Kabel power rusak D Fuse terputus."
    },
    {
        question: "Kode : 0312200040 Seorang teknisi elektromedis menemukan Peralatan Infusion Pump terjadi kerusakan pada pompa peristaltic dengan kondisi, tidak mampu mengalirkan cairan sedangkan kondisi motor bekerja dengan baik. Apakah analisa kerusakan dari kasus tersebut? A Rangkaian sensor rusak",
        options: ["B Kontrol board rusak", "C Karet finger rusak, motor rusak", "D Gear pasa motor rusak", "E Fuse putus"],
        answer: "C Karet finger rusak, motor rusak"
    },
    {
        question: "Kode : 13 05210121 Dalam melakukan pemeliharaan pada pesawat suction pump yang harus diperhatikan daya hisapnya.Apakah yang mempengaruhi dava hisap dari suction pump?",
        options: ["A tekanan", "B selang", "C regulator", "D tabung", "E tutup botol"],
        answer: "A tekanan"
    },
    {
        question: "Kode : 2811190036 Infuse pump adalah salah satu alat yang banyak digunakan diruang ICU. yang berfungsi untuk memberikan nutrisi/makanan dan obat kepasien, oleh karena itu manajement rumah sakit harus melakukan pemeliharaan rutin. Bagian apakah dari alat tersebut yang memerlukan perhatian dan p emeliharaan khusus?",
        options: ["A Acclusion sensor", "B Air sensor", "C Door sensor", "D Bubble sensor", "E Drip Sensor"],
        answer: "A Acclusion sensor"
    },
    {
        question: "Kode : 0212200179 Seorang petugas laboratorium mengeluhkan penggunaan mikroskop pada perbesaran x100 tidak menemukan gambar objek yang jelas. Sedangkan p ada perbesaran x10 dan x40 tidak mengalami masalah. Untuk mengatasi masalah tersebut komponen yang harus dipersiapkan oleh seorang elektromedis adalah",
        options: ["A Okuler pengganti", "B Objektif pengganti", "C Bola lampu pengganti", "D Lens Cleaner", "E Immersion Oil"],
        answer: "B Objektif pengganti"
    },
    {
        question: "Kode : 2611190003 Salah satu komponen dasar dari bloodglucose menggunakan enzim glukosa oksidase dan didasarkan pada teknologi biosensor yang spesifik untuk pengukuran glukosa. Komponen dasar tersebut adalah:",
        options: ["A Blood Lancet B Pen Blood", "C Glucose Meter", "D Test Strip", "E Screen"],
        answer: "D Test Strip"
    },
    {
        question: "Kode: 1305210110 Seorang teknisi sedang melakukan pemeliharaan alat, dengan banyaknya permasalahan pada peralatan terapi yang terkait dengan kinerja alat. Apa yang harus dilakukan dengan masalah tersebut?",
        options: ["A Dibersihkan (dilap)", "B Membu at laporan perbaikan C Memanggil User", "D Kalibrasi alat", "E Pemantauan Fungsi Alat"],
        answer: "D Kalibrasi alat"
    },
    {
        question: "Kode : 1305210087 Apabila setelah dilakukan exposure tapi tidak menghasilkan gambar/bayangan pada film X - ray. Maka perlu dilakukan tindakan untuk mengetahui ada/tidaknya sinar - X. Apa yang harus dilakukan untuk mengetahui ada/tidaknya x ray?",
        options: ["A exposure pada kondisi ruang gelap", "B exposure ulang", "C exposure pada kaset terbuka", "D exposure ke kaset terbuka pada ruang gelap", "E exposure pada ruang terang"],
        answer: "D exposure ke kaset terbuka pada ruang gelap"
    },
    {
        question: "Kode : 0911180036 Ultrasonic dari harmonic scalpel bergerak secara longitudinal dapat bergetaran untuk memotong jaringan sambil bersamaan melakukan hemostasis. Berapa getaran per detik yang digunakan pada alat tersebut?",
        options: ["A 1.000", "B 3.500", "C 4.500", "D 10.000", "E 55.500"],
        answer: "E 55.500"
    },
    {
        question: "Kode : 0312200260 Pada sebuah buku service mamial & User manual alat pembangkit sinar - x, terdapat pernyataan bahwa tabung sinar - x akan menghasilkan panas yang tinggi saat terjadi sinar - x. Sehingga ditambahkan oli trafo di dalam tabung tersebut. Apakah fungsi pemberian Oli Trafo tersebut?",
        options: ["A Pendingin dan isolator tegangan", "B Isolator tegangan dan pengaman", "C Pendingin tabung dan pelicin", "D P elumas dan isolator", "E pengerak motor anoda"],
        answer: "A Pendingin dan isolator tegangan"
    },
    {
        question: "Kode : 0212200128 Jika pada saat awal user mengoperasikan alat ESU, ternyata terdapat keluhan bahwa display pada alat tersebut tidak menyala dan alat mengeluarkan asap. Sebagai tenaga teknik elektromedik an alisis apa yang anda lakukan?",
        options: ["A Mengganti fuse", "B Mengecek kerusakan pada blok power supply dan blok display", "C Mengecek sambungan elektroda pasif terhadap grounding", "D Mengecek kerusakan pada blok pembangkit frekuensi", "E Mengecek pada footswitch"],
        answer: "B Mengecek kerusakan pada blok power supply dan blok display"
    },
    {
        question: "Kode : 1205210007 Seorang perawat datang ke instalasi pemeliharaan sarana (IPS) Rumah sakit melaporkan kerusakan nebulizer unit yang tidak dapat dioperasikan. Untuk menyikapi perawat tersebut apa yang harus dilakukan oleh petugas elektromedis ?",
        options: ["A Membuat Laporan Kerusakan", "B Menghubungi Agen Alat tersebut", "C Membawa Alat keluar ruangan", "D Mengganti spare part yang rusak", "E Melakukan pemeriksaan awal"],
        answer: "E Melakukan pemeriksaan awal"
    },
    {
        question: "Kode : 2811190051 Salah satu sifat sinar X adalah menghasilkan efek biologis sehingga peralatan radiologi yang m enghasilkan radiasi sinar X harus ditempatkan pada ruang/bangunan yang sesuai ketentuan standar. Apa persyaratan fasilitas ruang radiologi yang sesuai untuk peralatan tersebut?",
        options: ["A Dinding beton ketebalan 20cm", "B Ruang berada pada lantai bawah tanah", "C Ruang dilengkapi dengan sangkar faraday", "D Dinding dilapisi timah hitam (Pb) dengan ketebalan 1mm", "E. Dipasang lampu berwarna merah, peringatan tanda adanya bahaya radiasi"],
        answer: "D Dinding dilapisi timah hitam (Pb) dengan ketebalan 1mm"
    },
    {
        question: "Kode : 1205210025 Prosedur pengoperasian alat suction pump diawali dengan menghubungka n kabel power pada sumber jala - jala listrik kemudian menekan tombol ON. Indicator lampu ON menvala, dari dalam alat terdengar suara motor bekerja, namun ketika ujung selang ditutup dengan jari terasa daya hisap pompa kurang kuat. Tindakan apa yang dilakuka n untuk memastikan permasalahan tersebut?",
        options: ["A Test dengan pressure gauge", "B Tutup selang menggunakan stopper", "C Matikan alat kemudian hidupkan kembali", "D Cek sistem kelistrikan", "E Lepaskan wadah pembuangan dari unit"],
        answer: "A Test dengan pressure gauge"
    },
    {
        question: "Kode : 3107190490 Tabung rontgen dikata kan rusak tidak bisa dipakai sama sekali dan harus diganti Identifikasi apakah yang dikatakan tabung rusak?",
        options: ["A Filamen pada tabung putus", "B Lampu Kolimator pada tabung putus", "C Stator motor anode putus", "D Konektor tegangan tinggi ke anode tabung putus.", "E Kone ktor tegangan tinggi ke katode tabung putus"],
        answer: "A Filamen pada tabung putus"
    },
    {
        question: "Kode : 2311190050 Seorang perawat menggunakan alat cardiotocograph. Saat dioperasikan alat tersebut gambar tidak nampak jelas. Sebagai elektromedis bagian manakah yang perlu diperiksa pada alat tersebut?",
        options: ["A Cek kabel konector probe", "B Cek kabel catu daya", "C Kabel power tidak terhubung", "D Membersihkan probe", "E Setting tampilan display"],
        answer: "A Cek kabel konector probe"
    },
    {
        question: "Kode : 3107190183 Aksesri infusion pump, IV Tubing set adalah salah satu aksesori habis pakai. Pemeliharaan yang harus dilak ukan adalah penggantian IV tubing set. Berapa lamakah penggantinya?",
        options: ["A 1 minggu", "B 1 hari", "C 2 hari", "D 2 minggu", "E Setiap pasien"],
        answer: "E Setiap pasien"
    },
    {
        question: "Kode : 1409200093 Electrosurgical adalah aplikasi elektronika yang dipakai pada pembedahan di rumah sakit h menggunakan cara m emotong membekukan, dan mengeringkan darah pada jaringan biologis. Keluaran apakah yang dihasilkan pada penggunaan peralatan ESU ?",
        options: ["A frekuensi tinggi dan arus listrik", "B panas dan arus listrik", "C tegangan listrik dan cahaya", "D mekanik dan arus listrik", "E caha ya dan spare gap"],
        answer: "A frekuensi tinggi dan arus listrik"
    },
    {
        question: "Kode : 1105210125 Jumlah Rumah sakit merupakan tempat berbagai macam jenis alat alat medis. Salah satu alat medis di rumah sakit yaitu pesawat rontgen. Salah satu bagian dari alat tersebut ada yang berfungsi dalam menghasilkan sinar - x. Svarat sinar - X dibutuhkan awan elektron yang akan dihasilkan pada katoda tabung sinar - X. Bagian manakah yang dimaksud pada alat tersebut?",
        options: ["A Focusing cup", "B Filamen", "C Target", "D Anoda", "E Katoda"],
        answer: "B Filamen"
    },
    {
        question: "Kode : 1409200042 Lampu operasi adalah lampu yang digu nakan pada saat operasi yang tidak menimbulkan panas, cahayanya tidak menyilaukan sehingga memudahkan dan tidak menganggu proses berjalanya operasi serta arah sinar mudah diatur posisinya. Operator kamar bedah melaporkan bahwa lampu operasi telah terjadi b ayangan . Apakah yang anda lakukan sebagai teknisi ?",
        options: ["A Mengatur Reflector", "B Dimmer", "C Mengatur Cup lampu", "D Membuat fokus", "E Tegangan Trafo"],
        answer: "A Mengatur Reflector"
    },
    {
        question: "Kode : 2611190042 Elektromedis mendapat laporan dari perawat saat menggunakan patien monitor di ruangan IGD Rumah Sakit. Saat digunakan tampi lan Heart Rate pada monitor tidak muncul. Pengaturan apakah yang dilakukan elektromedis untuk mengatasi kasus tersebut?",
        options: ["A Tampilan NIBP pada patien monitor", "B ECG pada patien monitor", "C Heart Rate pada patien monitor", "D NIBP pada p atien monitor", "E SPO2 pada patien monitor"],
        answer: "B ECG pada patien monitor"
    },
    {
        question: "Kode : 1205210125 Setelah dalam jangka waktu yang cukup lama tidak digunakan, pada tabung sinar - x akan timbul gas, sehingga akan menghasilkan molekul gas dalam tabung hampa udara. Untuk mencegah kerusa kan pada tabung x - ray seharusnya dilakukan?",
        options: ["A Inspeksi alat", "B Kalibrasi", "C Pemanasan pada tabung", "D Exposure.", "E pemasangan grounding"],
        answer: "C Pemanasan pada tabung"
    },
    {
        question: "Kode : 1305210112 Dokter melaporkan kepada bagian pemeliharaan sarana medis bahwa alat mikroskop mengalami kerusakan y aitu pada bagian lensa yang disekitar mata sang dokter. Lensa tersebut terlihat berdebu. Dokter tersebut meminta kepada teknisi agar lensa tersebut dibersihkan lensa apakah yang dimaksud ?",
        options: ["A Objektiv", "B Okuler", "C Prisma", "D Lensa Cembung", "E Kondenser"],
        answer: "B Okuler"
    },
    {
        question: "Kode : 0312200178 Elektromedis melakukan pemeliharaan pada peralatan ESU. Dengan adanya perencanaan yang baik, diharapkan tidak akan terjadi kegagalan penggunaan dan membahayakan pasien. Pemeliharaan berkala diperlukan dengan memperhatikan bahaya terhadap l uka bakar pada kulit pasien yang tidak diinginkan. Pemeliharaan apa yang dilakukan elektromedis agar tidak terjadi hal tersebut? \\",
        options: ["A Memeriksa dan mengganti bagian fuse", "B Pengecekan tegangan yang masuk", "C Patient plate dan konektor dalam keadaan baik", "D Elektroda aktif dalam kondisi bersih", "E Pemeriksaan bagian pembangkit frekuensi"],
        answer: "C Patient plate dan konektor dalam keadaan baik"
    },
    {
        question: "Kode : 0212200075 Perawat melaporkan bahwa tensimeter digital pembacaannya menyimpang dari nilai standar. Tensimeter tersebut telah dipakai lebih dari satu bulan. Apakah tinda kan yang dilakukanpada kasus tersebut?",
        options: ["A Mengganti manset", "B Mengganti batere", "C Mengkalibrasi alat tersebut", "D Mengecek manset", "E Mengukur tegangan batere"],
        answer: "C Mengkalibrasi alat tersebut"
    }
   ];
   