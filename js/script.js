// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. 
// Calcola la somma del peso di tutte le zucchine.

// Creo array di stringhe che rappresenta le varietà di zucchine disponibili
varietaZucchina = [
    'Zucchino nero di Milano', 
    'Zucchino romanesco', 
    'Zucchino ortolano di Faenza', 
    'Zucchina lunga fiorentina', 
    'Zucchino siciliano', 
    'Zucchina striata di Napoli', 
    'Zucchina bianca triestina', 
    'Zucchina rigata pugliese', 
    'Zucchino tondo di Piacenza', 
    'Zucchino tondo di Nizza', 
    'Zucchino tondo di Firenze', 
    'Zucchina trombetta di Albenga', 
    'Zucchina pâtisson', 
    'Zucchino giallo', 
    'Zucchino giallo rugoso friulano',
    'Zucchina Crookneck'
];

// Creo 10 oggetti zucchina e li metto in un array
arrayZucchine = [];
for(var i = 1; i <= 10; i++) {
    var zucchina = {
        'varieta': getRandomItem(varietaZucchina),
        'peso': getRandomInteger(300, 700),
        'lunghezza': getRandomInteger(7, 20),
    };

    arrayZucchine.push(zucchina);
}
console.log('Zucchine:', arrayZucchine);

// Clacolo la somma del peso delle zucchine
console.log('Peso totale zucchine:', calcolaPeso(arrayZucchine, 'peso'), 'g');


// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente
// quanto pesano i due gruppi di zucchine.

// Creo due array per le zucchine lunghe meno di 15cm e quelle più lunghe di 15cm e divido le zucchine
var zucchineLunghe = [];
var zucchineCorte = [];

for(var z = 0; z < arrayZucchine.length; z++) {
    var thisZucchina = arrayZucchine[z];

    if(thisZucchina.lunghezza < 15) {
        zucchineCorte.push(thisZucchina);
    } else {
        zucchineLunghe.push(thisZucchina);
    }
}

// Stampo zucchine e relativo peso:
// Lunghe
console.log('Zucchine Lunghe:', zucchineLunghe);
console.log('Peso totale zucchine lunghe:', calcolaPeso(zucchineLunghe, 'peso'), 'g');
// Corte
console.log('Zucchine Corte:', zucchineCorte);
console.log('Peso totale zucchine corte:', calcolaPeso(zucchineCorte, 'peso'), 'g');





// FUNZIONI

// Get a random varietaZucchina from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Get random number integer 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Creo una funzione per calcolare il peso delle zucchine.
// Riceve un array di oggetti e una loro proprietà sotto forma di stringa (la proprietà ha valore numerico).
// Faccio la somma dei valori di quella proprietà e ritorno il valore Totale.
function calcolaPeso(array, proprieta) {
    var somma = 0;
    for(var j = 0; j < array.length; j++) {
        var thisItem = array[j];
        
        somma = somma + thisItem[proprieta];
    }
    return somma;
}
