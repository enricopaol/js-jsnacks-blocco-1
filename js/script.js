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
        varieta: getRandomItem(varietaZucchina),
        peso: getRandomInteger(300, 700),
        lunghezza: getRandomInteger(7, 20),
    };

    arrayZucchine.push(zucchina);

}
console.log(arrayZucchine);

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente
// quanto pesano i due gruppi di zucchine.



// FUNZIONI

// Get a random varietaZucchina from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
};

// Get random number integer 
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
