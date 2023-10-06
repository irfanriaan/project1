var hari = "Selasa";
var kegiatan;

switch (hari) {
    case "Senin":
        kegiatan = "Meeting tim kerja Kelompok Macro";
        break;
    case "Selasa":
        kegiatan = "Pelatihan Di Infinite learning";
        break;
    case "Rabu":
        kegiatan = "Presentasi proyek Macro ";
        break;
    default:
        kegiatan = "Hari libur Nasional ";
}

console.log("Hari ini adalah " + hari + ". Kegiatan hari ini: " + kegiatan);
