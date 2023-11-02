const user = {
   name: 'Pup',
   age: 27,
   profession: 'Work',
   salary: 10000,
   // help: function() {console.log('sos')}
};
// user.passport = 'nm584393';
// Object.defineProperty(user, 'passport', {
//    value: 'tg111111',
//    enumerable: true
// })

// console.log(user);
//keys
// let keys = Object.keys(user);
// console.log(keys);

// let values = Object.values(user);
// console.log(values);

// let entries = Object.entries(user);
// console.log(entries);

// entries.map(([index, item]) => {

//    console.log(index, item);
// });

// const arr1 = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0];
// const arr = [8, 5, 4, 8, 33, 41, 8, 12, 7, 28, 8, 2];
// function getAverage(arr) {
//    const total = arr.reduce((total, elem) => {
//       return total + elem;
//    }, 0);
//    console.log('total = ' + total);

//    return total/arr.length;
// }

// function mixingArr(arr) {
//    for(let i = 0; i < arr.length; i++) {
//       let k = arr[i];
//       let temp = Math.floor(Math.random()*arr.length);
//       arr[i] = arr[temp];
//       arr[temp] = k;
//    }
//    return arr;
// } 

// function shuffleArray(array) {
//    return array.sort(() => Math.random() - 0.5);
//  }

// console.log(Math.floor(Math.random()*arr.length));
// const arr = [5, 4, 33, 41, 8, 12, 7, 28, 8, 2];

// function allEnries(array, num) {
//    let a = [];
//    ind = array.indexOf(num);
//    while(ind != -1) {
//       a.push(ind);
//       ind = array.indexOf(num, ind + 1);
//    }
//    return a;
// }


// console.log(arr);

// console.log(allEnries(mixingArr(arr1), 1));

console.log('===============================');
const arr = [1, 2, 5, 3, 4]
// const arr = [8, 5, 4, 8, 33, 41, 8, 12, 7, 28, 8, 2];

let sum = 0;
arr.forEach((el, index) => arr[index] = arr[index] * 2);
console.log(arr);

// const sum = arr.reduce((acc, item) => {
//   let str = 'number' + item;
//   acc[str] = item - 1;
//   return acc;
// },{});

// console.log(sum);
// ================
// const b1 = document.querySelector('.b-1');
// const b2 = document.querySelector('.b-2');

// b1.onclick = function() {
//   test.call(b2);
// };

// function test() {
//   this.style.background = 'green';
// }
// ====================
const data = [
   [1, 2, 3],
   [3, 4, 5],
   [5, 6, 7]
];

const d = data.reduce((arr, item) => arr.concat(item));

console.log(d);
console.log(d.slice(1, -1));

// =============================

document.querySelector('.see_details').onclick = function () {
   document.querySelector('.inner').style.marginLeft = '-250px';
};

document.querySelectorAll('.back').forEach((elem) => {
   elem.onclick = () => {
      document.querySelector('.inner').style.marginLeft = '0px';
   }
})

console.log(encodeURIComponent('\uD800\uDFFF'));

// =============================

class User {
   constructor(name) {
      this.name = name;
   }
   sayHello() {
      console.log(this.name + 'Hello');
   }
}

const alex = new User('Alex');
console.log(alex);
// ======================

const cheeps = [true, false, true, true, false, true, true, false, true];
const tr = cheeps.filter((elem) => elem == true).length;
console.log(tr);

const trred = cheeps.reduce((res, elem) => {
   if(elem === true) res++;
   return res;
}, 0);
console.log(trred);
// ==============spread rest===============

// let b1 = [22,44,88];
// let b2 = [100, 200, 400];
// let but = document.querySelectorAll('button');

// console.log([...b1, ...b2]);

// let c1 = {name: 'test', param1: 48};
// let c2 = {name: 'test', param2: 31};
// let c3 = {...c1, ...c2};

// console.log(c3);
// ==============деструктуризация=============
// let s10 = [100, 200, 400, 999];
// let s11 = 'abcdef';
// console.log(s10);


// let [s12] = s10
// console.log(s12);
// =========================================
// let words = ['banana', 'grapefruit', 'banana', 'grapefruit','banana', 'orange', 'banana'];

// let u = words.sort();

// console.log(u);

// uni = new Set(u)

// console.log(uni);
// =====================================











