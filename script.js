// // =================================1========================================

// // =======1=======

// function sonlar (son){
//     return son.reverse();
// }

// console.log(sonlar([1, 2, 3, 4]));

// // ======2=======

// function sonlar (son){
//     return son.join("");
// }

// console.log(sonlar([1, 2, 3, 4]));

// // ======3=======

// function topgich (topilgan, a){
//     return topilgan.indexOf(a);
// }

// console.log(topgich([1, 2, 5, 9], 5));
// console.log(topgich(["a", "b", "c", "d"], "h"));

// // ======4=======

// function type (nomi){
//     return nomi.map(c => typeof c)
// }

// console.log(type([1, 'a', true, undefined, null]));

// // ======5=======

// function g(d) {
//     return d.map(t => t * 2);
// }

// console.log(g([1, 2, 3]));

// // ======6=======

// function getNumbers(a) {
//     let result = [];
//     for (let i = a[0] + 1; i < a[1]; i++) {
//         result.push(i);
//     }
//     return result;
// }

// console.log(getNumbers([1, 6]));

// // ======7=======

// function number(a) {
//     return (a[0] + a[1]) < 100;
// }

// console.log(number([10, 57])); 
// console.log(number([60, 50])); 

// // ===============================================================

//=====Variables=====//
const ism = "Murodjon";
let yosh = 14;
const shahar = "Namangan"
console.log(ism,yosh,shahar);


const malumot = {
    ism: "Murodjon",
    yosh: 14,
    shahar: "Namangan"
}

malumot.yosh = 15
console.log(malumot);


var a = 10 
var a = 11
// hato shunki elementni qaytatan chaqirilmaydi shunig uchun const yoki let sihlatiladi !

console.log(b);
var b = "Uzbekiston"
// Variables da let yoki const chaqirishni Variables dan oldin qilingan bulsa Error buladi  ammo var da undefaind qaytadi qaytmasligi kerak bu hato degani shuning uchun const va letda error beradi bu esa tugri buladi ! 

var tuman  = "POP"
// var eski shuning uchun men Murodjon dasturchilarga var ni ishlatishni tavsiya qilmayman unda 2 ta hatolik bulagani uchun ishlatmang !
//=====Variables=====//


// //=====Primitive=====//
const userName = "Murodjon" 
const age = 14
const yaxshimi = true
const email = null
let und
console.log( typeof userName);
console.log( typeof age);
console.log( typeof yaxshimi);
console.log( typeof email);
console.log( typeof und);


const malumotB = {
    ism: "Murodjon",
    yosh: 14,
    shahar: "Namangan"
}

const malumotA = malumotB

malumotB.yosh = 15

console.log(malumotB);
console.log(malumotA);





// //null bu yoq degani masalan bitta odamni emaillini yoq bush turgandan kura null degan avzalroq !

// // undefained bu uzgaruvchi elon qilingan ammo qiymat berilmagan !

// // null faqatgina undefainga teng !

console.log(null == undefined); // true chiqadi !

//=====Primitive=====//


// =====Type-conversion=====//

Number("42abc"); // NaN

let f = 54 == "54" // true ikktalik type tekshirmaydi ichidagi kiymatni tekshiradi!
let q = 54 === "54" // false shunki 3talik teng type niyam tekshiradi !  
let h = null == undefined // true 
let j = null === undefined // false 
console.log(f,q,h,j);

// =====Type-conversion=====//


const elbtnP = document.querySelector(".btnP")
const elbtnM = document.querySelector(".btnM")
const elbtnB = document.querySelector(".btnB")
const elbtnK = document.querySelector(".btnK")
const elSpan = document.querySelector(".span")


let a = 0

elbtnP.addEventListener("click", () => {
    a++
    elSpan.textContent = a
});
elbtnM.addEventListener("click", () => {
    a--
    elSpan.textContent = a
});

elbtnB.addEventListener("click", () => {
    a /= 2
    elSpan.textContent = a
});
elbtnK.addEventListener("click", () => {
    a *= 2
    elSpan.textContent = a
});


let h = prompt("yoshingizni kiriting!")

if(h<18){
    alert('voyaga yetmagan');
}else if (h<40){
    alert(`urtacha yosh!`)
} else if (h>40){
    alert(`katta yosh!`)
}
// =====Type-conversion=====//


// =====Loop=====//
for(let i = 1; i<=100; i++){
    if(i%7!==0){
        console.log(i);
    }
}

const MurodjonniMalumotlari = {
    ismi:`Murodjon`,
    yoshi:14,
    shahri:'Namangan'
}

for(const kalit in MurodjonniMalumotlari){
    console.log(`${kalit} ${MurodjonniMalumotlari[kalit]}`);
}
let o = 0
while(o<10){
    o++
    console.log(o);
}
// =====Loop=====//
