let a = [3, 5, 7, [11, 12]];
let b = a.reduce((res, elem) => {
   res.push(elem);
   return res;
},[]);
// console.log(a);
// console.log(b);
a.push(100,50);
a[3].push(999);

console.log(a);
console.log(b);

// let obj = {
//    n: 12,
//    t: 11
// }

// let oo = [obj, obj, obj]

// let objParse = JSON.parse(JSON.stringify(oo));
// console.log(objParse);
// console.log(oo[0]);
// oo[0].c = 100;
// console.log(JSON.parse(JSON.stringify(oo)));

let arr = [1,2,4,1,7,2,6,8,1];
let st = new Set(arr);
console.log(st);

let arrst = [...st];
console.log(arrst);

let arrfrom = Array.from(st);
console.log(arrfrom);

var i = 5;
console.log(i++, ++i);

