
// 1.
const name = prompt ('dicci il tuo nome');
const lastname = prompt ('dicci il tuo cognome');
const prefColor = prompt ('dicci il tuo colore preferito');
const number = 23;
const password = name + lastname + prefColor +number

//2.
const message = `Ciao ${name} usa questa password: ${password}`

//3.
document.getElementById('output') .innerHTML = message;

console.log(message);

