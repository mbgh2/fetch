
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const w = (n) => n > 0 ? n : 0;

console.log(w(-2));


const e = animals.map((elem, index) => ({num: index, name: elem}));
console.log(e);

document.querySelector('.enter').addEventListener('click', () => {
   fetch('file.json')
      .then( res => res.json())
      .then(file => {
         file.forEach(item => {
            console.log(item.name);
         })
      })
});