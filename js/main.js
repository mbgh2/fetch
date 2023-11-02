const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const flag = [];

console.log(digit.includes('1'));

let block = document.querySelectorAll('.btn-elem');

block.forEach((element, index) => {
   element.onclick = (event) => {
      if (index != 2 && index != 10 && index != 6) {
         element.textContent = 'v';
         element.style.background = 'green';
      }
   };
});

console.log(block);
let stroke = '';
for (i = 0; i < 20; i++) {
   stroke += Math.floor(Math.random() * 10) + ' ';
}

document.querySelector('.display-block').textContent = stroke;

let pole = Math.floor(Math.random() * 10);
console.log(pole);

block[2].onclick = function () {
   block[2].textContent = Math.floor(Math.random() * 10);
}

console.log('============');
let i2 = 0;
let factor = 1;
let number = 6;
while(i2 < number) {
   let bblet = 5;
   var bbvar = 6;
   console.log(i2);
   i2++;
   factor = factor * i2;
}
console.log(factor); 
console.log(bbvar); 
// console.log(bblet); 

function ftf() {
   let fflet = 9;
   var ffvar = 8;
   var bbvar = 3;
   let bblet = 2;
}
ftf();
// console.log(ffvar);

let tuns = 8;
console.log(tuns);
{let tuns = 9;
   console.log(tuns);}
// ===============================

let kvadrat = document.querySelector('.frame-block');

block[8].onclick = () => {
   let kvadrat = document.querySelector('.frame-block');
   console.log(Math.floor(kvadrat.getBoundingClientRect().left));
   console.log(kvadrat);
   console.log(kvadrat.offsetLeft);
   console.log(kvadrat.clientLeft);
}

console.log(kvadrat.getBoundingClientRect());

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let body1 = document.querySelector('body1');
let body2 = document.querySelector('body2');
let ppp = document.querySelector('div');
// btn2.onclick = () => {
//    ppp.classList.add('hide');
//    body2.classList.add('show');
// }
btn1.onclick = () => {
   ppp.classList.add('hide');
   body2.classList.add('show');
}

console.log(window);
// window.location = '';

console.log(10 != '10');
console.log('Hello' == 'Hello');
console.log(1 == true);


console.log(1 != true)