var a = prompt("Wpisz pierwszą liczbę:");
var	b = prompt("Wpisz drugą liczbę:");
var	value = (a * a) + (2 * a * b) - (b * b);

console.log('Twój wynik to: ' + value);
if (value > 0) console.log('wynik dodatni');
else if (value < 0) console.log('wynik ujemny');
else console.log('wynik jest równy zeru');