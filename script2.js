var w = (c.width = window.innerWidth),
  h = (c.height = window.innerHeight),
  ctx = c.getContext("2d"),
  hw = w / 2, 
  hh = h / 2,
  
  // FITUR RESPONSIVE: Menentukan skala berdasarkan lebar layar
  // Jika layar < 600px (mobile), ukuran diperkecil
  scale = w < 600 ? w / 600 : 1, 
  
  opts = {
    strings: ["HAPPY", "VALENTINE", "DAY", " CESSA🤍"],
    charSize: 120 * scale,      // Ukuran font adaptif
    charSpacing: 110 * scale,   // Jarak antar huruf adaptif
    lineHeight: 130 * scale,    // Jarak antar baris adaptif

    cx: w / 2,
    cy: h / 2,

    fireworkPrevPoints: 10,
    fireworkBaseLineWidth: 5 * scale,
    fireworkAddedLineWidth: 8 * scale,
    fireworkSpawnTime: 200,
    fireworkBaseReachTime: 30,
    fireworkAddedReachTime: 30,
    fireworkCircleBaseSize: 20 * scale,
    fireworkCircleAddedSize: 10 * scale,
    fireworkCircleBaseTime: 30,
    fireworkCircleAddedTime: 30,
    fireworkCircleFadeBaseTime: 10,
    fireworkCircleFadeAddedTime: 5,
    fireworkBaseShards: 5,
    fireworkAddedShards: 5,
    fireworkShardPrevPoints: 3,
    fireworkShardBaseVel: 4 * scale,
    fireworkShardAddedVel: 2 * scale,
    fireworkShardBaseSize: 3 * scale,
    fireworkShardAddedSize: 3 * scale,
    gravity: 0.1 * scale,
    upFlow: -0.1 * scale,
    letterContemplatingWaitTime: 360,
    balloonSpawnTime: 20,
    balloonBaseInflateTime: 10,
    balloonAddedInflateTime: 10,
    balloonBaseSize: 20 * scale,
    balloonAddedSize: 20 * scale,
    balloonBaseVel: 0.4 * scale,
    balloonAddedVel: 0.4 * scale,
    balloonBaseRadian: -(Math.PI / 2 - 0.5),
    balloonAddedRadian: -1,
  },
  calc = {
    // Perbaikan logika totalWidth agar teks tidak terpotong di kiri/kanan
    totalWidth: opts.charSpacing * Math.max(opts.strings[0].length, opts.strings[1].length),
  },
  Tau = Math.PI * 2,
  TauQuarter = Tau / 4,
  letters = [];
for (var i = 0; i < opts.strings.length; ++i) {
  for (var j = 0; j < opts.strings[i].length; ++j) {
    // Menghitung titik tengah setiap baris kalimat
    var lineCenter = (opts.strings[i].length * opts.charSpacing) / 2;
    var columnCenter = (opts.strings.length * opts.lineHeight) / 2;

    letters.push(
      new Letter(
        opts.strings[i][j],
        j * opts.charSpacing + opts.charSpacing / 2 - lineCenter,
        i * opts.lineHeight + opts.lineHeight / 2 - columnCenter
      )
    );
  }
      }
window.addEventListener('resize', function() {
  location.reload(); // Refresh otomatis saat ukuran layar berubah
});
