// Tugas dari dea afrizal

// const saldoAwal = Number(prompt('Berapa saldo awal kamu?')); // masukkan tipe data
// const saldoTambahan = Number(prompt('dapat berapa tambahan?')); //masukkan tipe data
// const hutang = Number(prompt('hutang anda?')); //masukkan tipe data
// const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// alert(
//     `saldo awal anda adalah Rp.${saldoAwal} & saldo tambahan yang anda dapatkan adalah Rp.${saldoTambahan} tapi anda memiliki hutang sebesar Rp.${hutang} jadi total saldo yang anda miliki sekarang adalah Rp.${saldoAkhir}`,
// );

// const hari = new Date() .getDay()
// let hariIni 
// if (hari == 1 ){
//     hariIni = "senin"
// }else if(hari == 2){
//    hariIni = "selasa"
// }else if(hari == 3){
//     hariIni = "rabu"
// }else{
//     hariIni = "hari lain"
// }
// alert(`hari ini adalah hari ${hariIni}`)

// Tugas dari Rahmat hari dan bulan

// const hari = new Date() .getDay()
// let hariIni 
// if (hari == 1 ){
//     hariIni = "senin"
// }else if(hari == 2){
//    hariIni = "selasa"
// }else if(hari == 3){
//     hariIni = "rabu"
// }else{
//     hariIni = "hari lain"
// }
// const inputUser = prompt('hari apakah ini?')
// if (inputUser == hariIni){
//     alert('benar')
// }else{
//     alert(`anda salah. Hari ini adalah ${hariIni}`)
// }

const Bulan = new Date().getMonth()
let bulanIni
if (Bulan == 0) {
    bulanIni = "januari"
}else if (Bulan == 1) {
    bulanIni = "februari"
}else if (Bulan == 2) {
    bulanIni = "maret"
}else if (Bulan == 3) {
    bulanIni = "april"
}else{
    bulanIni = "bulan apa ya?"
}
const inputUser = prompt('bulan apa sekarang?')
if (inputUser == bulanIni){
    alert('anda pintar')
}else{
    alert(`anda goblok, bulan ini adalah ${bulanIni}`)
}