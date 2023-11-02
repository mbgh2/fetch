const select1 = document.querySelector('#select-1');
const input1 = document.querySelectorAll('input[name="rad-1"]');
console.log(input1);

select1.onchange = function() {
   console.log(select1.value);
   let res = select1.options[select1.selectedIndex].textContent;
   
   console.log(res);
}

// ==================

document.querySelector('#one').onclick = function adding() {
   console.log(this);
   this.innerHTML += ' Hello';
   console.log(this.textContent);
}

function f1(p) {
   let pres = document.querySelector(p);
   pres.classList.add('modify');
   // console.log(pres.style.fontSize = '30px');
   pres.innerHTML += ' <b>добавлено</b>';

}

f1('#two');
f1('#one');
// ============================
// let rr = [1,2,3,4];
// console.log(...rr);

// let tt = [5,5, ...rr]
// console.log(tt);

// let obj = {
//    name: 'Vova',
//    age: 45,
//    health: 100,
// }

// for (a in obj) {
//    console.log(a);
// }

// function f2(...arr) {
//    console.log(arr);
// }

// f2(1,3,5,6,4)
// ================================
// const div = document.createElement('div');
// div.classList.add('modify');
// div.innerHTML = 'New Div';
// div.style.background = 'green';
// select1.insertAdjacentElement('afterend',div);


// const div1 = document.createElement('div');
// div1.classList.add('modify');
// div1.innerHTML = 'New Div2';
// div1.style.background = 'green';
// select1.insertAdjacentElement('beforebegin',div1);

// document.createElement('div');
// div.classList.add('modify');
// div.innerHTML = 'New Div';
// div.style.background = 'green';
// select1.appendChild(div);
// ================================
const container = document.querySelector('.container')



function dobav(txt) {
   const div = document.createElement('div');
div.classList.add('modify');
div.innerHTML = txt;
div.style.background = 'green';
container.append(div);
container.append(div.cloneNode(true));
}

dobav('first');
dobav('second');
// dobav('third');













