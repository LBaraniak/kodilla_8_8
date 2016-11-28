// plik scripts.js

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
	console.log(text);

var animal = 'Zielone słonie';
	console.log(animal);
	
animal = animal.toUpperCase();
	console.log(animal);
	
text = text.replace('Papugi', animal);
	console.log(text);

var wynik = text.substr(0, (text.length)/2);
	console.log(wynik);
