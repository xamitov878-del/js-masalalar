// // // // =================================1========================================

// // // // =======1=======

// // // function sonlar (son){
// // //     return son.reverse();
// // // }

// // // console.log(sonlar([1, 2, 3, 4]));

// // // // ======2=======

// // // function sonlar (son){
// // //     return son.join("");
// // // }

// // // console.log(sonlar([1, 2, 3, 4]));

// // // // ======3=======

// // // function topgich (topilgan, a){
// // //     return topilgan.indexOf(a);
// // // }

// // // console.log(topgich([1, 2, 5, 9], 5));
// // // console.log(topgich(["a", "b", "c", "d"], "h"));

// // // // ======4=======

// // // function type (nomi){
// // //     return nomi.map(c => typeof c)
// // // }

// // // console.log(type([1, 'a', true, undefined, null]));

// // // // ======5=======

// // // function g(d) {
// // //     return d.map(t => t * 2);
// // // }

// // // console.log(g([1, 2, 3]));

// // // // ======6=======

// // // function getNumbers(a) {
// // //     let result = [];
// // //     for (let i = a[0] + 1; i < a[1]; i++) {
// // //         result.push(i);
// // //     }
// // //     return result;
// // // }

// // // console.log(getNumbers([1, 6]));

// // // // ======7=======

// // // function number(a) {
// // //     return (a[0] + a[1]) < 100;
// // // }

// // // console.log(number([10, 57])); 
// // // console.log(number([60, 50])); 

// // // // ===============================================================

// // //=====Variables=====//
// // const ism = "Murodjon";
// // let yosh = 14;
// // const shahar = "Namangan"
// // console.log(ism,yosh,shahar);


// // const malumot = {
// //     ism: "Murodjon",
// //     yosh: 14,
// //     shahar: "Namangan"
// // }

// // malumot.yosh = 15
// // console.log(malumot);


// // var n = 10 
// // var n = 11
// // // hato shunki elementni qaytatan chaqirilmaydi shunig uchun const yoki let sihlatiladi !

// // console.log(b);
// // var b = "Uzbekiston"
// // // Variables da let yoki const chaqirishni Variables dan oldin qilingan bulsa Error buladi  ammo var da undefaind qaytadi qaytmasligi kerak bu hato degani shuning uchun const va letda error beradi bu esa tugri buladi ! 

// // var tuman  = "POP"
// // // var eski shuning uchun men Murodjon dasturchilarga var ni ishlatishni tavsiya qilmayman unda 2 ta hatolik bulagani uchun ishlatmang !
// // //=====Variables=====//


// // // //=====Primitive=====//
// // const userName = "Murodjon" 
// // const age = 14
// // const yaxshimi = true
// // const email = null
// // let und
// // console.log( typeof userName);
// // console.log( typeof age);
// // console.log( typeof yaxshimi);
// // console.log( typeof email);
// // console.log( typeof und);


// // const malumotB = {
// //     ism: "Murodjon",
// //     yosh: 14,
// //     shahar: "Namangan"
// // }

// // const malumotA = malumotB

// // malumotB.yosh = 15

// // console.log(malumotB);
// // console.log(malumotA);





// // // //null bu yoq degani masalan bitta odamni emaillini yoq bush turgandan kura null degan avzalroq !

// // // // undefained bu uzgaruvchi elon qilingan ammo qiymat berilmagan !

// // // // null faqatgina undefainga teng !

// // console.log(null == undefined); // true chiqadi !

// // //=====Primitive=====//


// // // =====Type-conversion=====//

// // Number("42abc"); // NaN

// // let f = 54 == "54" // true ikktalik type tekshirmaydi ichidagi kiymatni tekshiradi!
// // let q = 54 === "54" // false shunki 3talik teng type niyam tekshiradi !  
// // let h = null == undefined // true 
// // let j = null === undefined // false 
// // console.log(f,q,h,j);

// // // =====Type-conversion=====//


// // const elbtnP = document.querySelector(".btnP")
// // const elbtnM = document.querySelector(".btnM")
// // const elbtnB = document.querySelector(".btnB")
// // const elbtnK = document.querySelector(".btnK")
// // const elSpan = document.querySelector(".span")


// // let a = 0

// // elbtnP.addEventListener("click", () => {
// //     a++
// //     elSpan.textContent = a
// // });
// // elbtnM.addEventListener("click", () => {
// //     a--
// //     elSpan.textContent = a
// // });

// // elbtnB.addEventListener("click", () => {
// //     a /= 2
// //     elSpan.textContent = a
// // });
// // elbtnK.addEventListener("click", () => {
// //     a *= 2
// //     elSpan.textContent = a
// // });


// // let w = prompt("yoshingizni kiriting!")

// // if(w<18){
// //     alert('voyaga yetmagan');
// // }else if (w<40){
// //     alert(`urtacha yosh!`)
// // } else if (w>40){
// //     alert(`katta yosh!`)
// // }
// // // =====Type-conversion=====//


// // // =====Conversion=====//
// // let ball = prompt('Ballni kiriting!')
// // if (ball >= 100) {
// //     alert("A+")
// // } else if (ball >= 90) {
// //     alert("A")
// // } else if (ball >= 70) {
// //     alert("B")
// // } else if (ball >= 50) {
// //     alert("C")
// // } else {
// //     alert("F")
// // }
// // // =====Conversion=====//

// // // =====Loop=====//
// // for(let i = 1; i<=100; i++){
// //     if(i%7!==0){
// //         console.log(i);
// //     }
// // }

// // const MurodjonniMalumotlari = {
// //     ismi:`Murodjon`,
// //     yoshi:14,
// //     shahri:'Namangan'
// // }

// // for(const kalit in MurodjonniMalumotlari){
// //     console.log(`${kalit} ${MurodjonniMalumotlari[kalit]}`);
// // }
// // let o = 0
// // while(o<10){
// //     o++
// //     console.log(o);
// // }
// // // =====Loop=====//


// //=====Function=====//
// function aylana (r,p){
//     return p*r*r
// }
// console.log(aylana(2,4));


// function userNam (ism, yosh){
//     return ism+yosh
// }

// console.log('Murodjon'+14);


// function manfiy (arr){
// for(let i =0; i<arr.lenght; i++){
//     if(arr[i]>0){
//         return arr[i]
//     }
// }
// }

// let raqamlar = [13,-4,7,76,-56-35,43,-67];
// let javob = manfiy[raqamlar]
// console.log(javob);

// //=====Function=====//

//  const a = (x)=>{
//     return x*x
// }

// console.log(a(2,8));

// function odam (ism){
//     return ism.toLowerCase()

// }

// console.log(odam("MURODJON"));
// //=====Function=====//



//=====Arrow=====//

// function salomash(ism = "Mehmon") {
//     return `salom: ${ism}`
// }

// console.log(salomash());

// const sonlar  = [1,2,3,4,5];
// const jamisonlar = sonlar.reduce((jam,son)=>jam+son, 0)

// console.log(jamisonlar);

// function namee (){
//     return "Murdojon"
// }
// console.log(namee());

// const ism = `Murodjon`;
// console.log(ism);

// if (true) {
//     const ism = `Murodjon`;
//     console.log(ism);
// }

// console.log(kushish());

// function kushish (a,c){
//     return 1+8
// }

// console.log(age);
// const age = 15


// function hisoblagich (){
//     let son = 0;
//     return function () {
//         son++
//         return son
//     }
// }

// const hisob = hisoblagich()
// console.log(hisob());
// console.log(hisob());
// console.log(hisob());
// console.log(hisob());

// const kupaytir = (num) =>num *5
// console.log(kupaytir(10));



// const malumot = {
//     ism: "Murodjon",
//     age: 14,
//     malumotlar (){
//         console.log("Salom",this.ism);
//     } 

// }

// malumot.malumotlar()

// const malumot = {
//     ism: "Murodjon",
//     age: 14,
//     malumotlar: () => {
//         console.log("Salom",this.ism);
//     } 

// }

// malumot.malumotlar()




// const mevalar = ['olma','gulos', 'apelsin']

// mevalar.pop()
// mevalar.push("banan")
// mevalar.shift()
// mevalar.unshift("nok")
// console.log(mevalar.indexOf("banan"))
// console.log(mevalar.includes("banan"))

// console.log(mevalar);


// const narx =[77]
// const foiz = narx.map(i=>i%10)

// console.log(foiz);

// const narhlar = [100000,888888,9000,7890]

// const ajratilgam = narhlar.filter(narh => narh<50000)

// console.log(ajratilgam);


// const narhlar = [100000,888888,9000,7890]


// const jami =  narhlar.reduce((jami,son) => jami+son, 0)
// console.log(jami);


// const savat = [
//     {
//         nomi: "Kitob",
//         narx: 25000,
//         miqdor: 2
//     },
//       {
//         nomi: "Daftar",
//         narx: 8000,
//         miqdor: 5
//     },  {
//         nomi: "Qalam",
//         narx: 3000,
//         miqdor: 10
//     },
//       {
//         nomi: "Folder",
//         narx: 12000,
//         miqdor: 1
//     },  {
//         nomi: "Marker",
//         narx: 6000,
//         miqdor: 3
//     },
// ]

// const jamiNarhlar = savat.reduce((jam,son) => {
//     return jam + son.narx * son.miqdor
// }, 0)

// console.log(jamiNarhlar);


// const malumotlar = [
//     {
//         id: 1,
//         ism: "Murodjon",
//         yoshi: 14,
//         faol:true
//     },
//    {
//         id: 2,
//         ism: "Sherzod Oka",
//         yoshi: 18,
//         faol:true
//     },{
//         id: 3,
//         ism: "Asror Oka",
//         yoshi: 18,
//         faol:true
//     },{
//         id: 4,
//         ism: "Otabek",
//         yoshi: 15,
//         faol:true
//     },{
//         id: 5,
//         ism: "Narzillo",
//         yoshi: 18,
//         faol: false
//     },
// ]

// const kattaInsonlar = malumotlar.filter(f => f.yoshi >=18 && f.faol === true);
// console.log(kattaInsonlar);



// const savat = [
//     {
//         nomi: "Kitob",
//         narx: 25000,
//         miqdor: 2
//     },
//       {
//         nomi: "Daftar",
//         narx: 8000,
//         miqdor: 5
//     },  {
//         nomi: "Qalam",
//         narx: 3000,
//         miqdor: 10
//     },
//       {
//         nomi: "Folder",
//         narx: 12000,
//         miqdor: 1
//     },  {
//         nomi: "Marker",
//         narx: 6000,
//         miqdor: 3
//     },
// ]


// const narxKuyish = savat.map(d => d.narx * 0.15)
// console.log(narxKuyish);



// const malumotlar = [
//     {
//         id: 1,
//         ism: "Murodjon",
//         yoshi: 14,
//         faol:true
//     },
//    {
//         id: 2,
//         ism: "Sherzod Oka",
//         yoshi: 18,
//         faol:true
//     },{
//         id: 3,
//         ism: "Asror Oka",
//         yoshi: 18,
//         faol:true
//     },{
//         id: 4,
//         ism: "Otabek",
//         yoshi: 15,
//         faol:true
//     },{
//         id: 5,
//         ism: "Narzillo",
//         yoshi: 18,
//         faol: false
//     },
// ]

// const malumot = malumotlar.find (g=>{
//     return g.id === 3;
// })
// console.log(malumot);

const foydalanuvchilar = [
    { id: 1, ism: "Ali", email: "ali@mail.com" },
    { id: 2, ism: "Zilola", email: "zilola@mail.com" },
    { id: 3, ism: "Jasur", email: "jasur@mail.com" },
    { id: 4, ism: "Nodira", email: "nodira@mail.com" },
    { id: 5, ism: "Sardor", email: "sardor@mail.com" },
]

const accaunt = foydalanuvchilar.findIndex(t=>t.email ==="nodira@mail.com");
console.log(accaunt);
