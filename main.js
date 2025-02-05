// Tugas dari dea afrizal

const saldoAwal = Number(prompt('Berapa saldo awal kamu?')); // masukkan tipe data
const saldoTambahan = Number(prompt('dapat berapa tambahan?')); //masukkan tipe data
const hutang = Number(prompt('hutang anda?')); //masukkan tipe data
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

alert(
    `saldo awal anda adalah Rp.${saldoAwal} & saldo tambahan yang anda dapatkan adalah Rp.${saldoTambahan} tapi anda memiliki hutang sebesar Rp.${hutang} jadi total saldo yang anda miliki sekarang adalah Rp.${saldoAkhir}`,
);

const hari = new Date() .getDay()
let hariIni 
if (hari == 1 ){
    hariIni = "senin"
}else if(hari == 2){
   hariIni = "selasa"
}else if(hari == 3){
    hariIni = "rabu"
}else{
    hariIni = "hari lain"
}
alert(`hari ini adalah hari ${hariIni}`)

// Tugas dari Rahmat

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