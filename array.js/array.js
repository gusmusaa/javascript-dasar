//Array
const sayurArray = ['wortel','kol','bayam','kangkung','terong']

//mengecek data
const bayam = sayurArray.includes('bayam')


if(bayam){
//mengecek posisi data
const posisiBayam = sayurArray.indexOf('bayam')
//mencari posisi sayur sesudah dan sebelum
const indexBefore = posisiBayam - 1
const indexAfter = posisiBayam + 1
const before = sayurArray[indexBefore]
const after = sayurArray[indexAfter]
console.log(`sayur sebelum bayam adalah ${before}`)
console.log(`sayur setelah bayam adalah ${after}`)
}else{
  console.log(`saya tidak tahu`)
}

console.log(bayam)

const ArraySaya = ['petir','air','api','tanah','angin','cahaya']

// mengcopy tanpa mempengaruhi data yang asli
const newArraySaya = ArraySaya.slice()
newArraySaya[1] = 'kegelapan' 

console.log({ArraySaya})
console.log({newArraySaya})

const arraySaya = ['akib','lukman','dicky']
const arrayKamu = ['musa','rahman','yasin']

//penggabungan array
const mergeArray = arraySaya.concat(arrayKamu)

//memunculkan sesuai urutan
for(list of mergeArray)
console.log(list)

//jika ingin urutan dan indexnya juga
mergeArray.map((value, index) => console.log(value,index))

//contoh realita data
const datas = [
    {
      name: 'musa',
      gender: 'laki',
      age: 19,
    },
    {
      name: 'rahman',
      gender: 'laki',
      age: 18,
    },
    {
      name: 'indah',
      gender: 'perempuan',
      age: 21,
    },
    {
      name: 'imel',
      gender: 'perempuan',
      age: 23,
    }
    ]
    
    //map=urutan sort=perbandingan filter=data yang di filter
    datas
    .sort((a, b) => a.age - b.age)
    .filter((x) => x.age < 20)
    .map(values => console.log(values))