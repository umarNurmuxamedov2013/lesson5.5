const h1 = document.createElement('h1');
let random = prompt("Ismingizni kiritign")
const body = document.querySelector('body');
let b = body.appendChild(h1);
const main = document.querySelector('body')
h1.innerHTML = random;

h1.style.color = 'red'
h1.style.textAlign = 'center'
h1.style.marginTop = '50vh'

main.style.backgroundColor = 'black'

