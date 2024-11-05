// Déclaration d'une variable x avec la portée globale
let x = 10;

if (true) {
    // Déclaration d'une variable x dans un bloc, masquant la variable x globale
    let x = 20;
    // Affiche 20 car elle se réfère à la variable x déclarée dans le bloc
    console.log(x);
}
// Affiche 10 car elle se réfère à la variable x dans la portée globale
console.log(x);

// Déclaration d'une constante x dans la portée globale
const x = 10;

if (true) {
    // Déclaration d'une constante x dans un bloc, masquant la constante x globale
    const x = 20;
    // Affiche 20 car elle se réfère à la constante x déclarée dans le bloc
    console.log(x);
}
// Affiche 10 car elle se réfère à la constante x dans la portée globale
console.log(x);

// Fonction de base pour additionner deux nombres
function addition(a, b) {
    return a + b;
}

// Fonction fléchée pour additionner deux nombres (ES6)
const adddition = (a, b) => a + b;

// Affiche 6, résultat de l'addition de 2 et 4
console.log(adddition(2, 4));

// Méthodes pour les nombres :

// Number.isNaN : Vérifie si une valeur est NaN (Not-a-Number)
console.log(Number.isNaN(123)); // false
console.log(Number.isNaN(NaN));  // true

// Number.isFinite : Vérifie si une valeur est un nombre fini
console.log(Number.isFinite(42));     // true
console.log(Number.isFinite(1 / 0));  // false

// Number.isInteger : Vérifie si une valeur est un entier
console.log(Number.isInteger(7));     // true
console.log(Number.isInteger(7.5));   // false

// Number.parseInt : Conversion d'une chaîne en entier
console.log(Number.parseInt("123"));      // 123
console.log(Number.parseInt(42.7));       // 42
console.log(Number.parseInt("hello"));    // NaN

// Number.parseFloat : Conversion d'une chaîne en nombre à virgule flottante
console.log(Number.parseFloat("42.7px")); // 42.7

// Number.isSafeInteger : Vérifie si un nombre est un entier sûr
console.log(Number.isSafeInteger(90000000000323424324)); // false

// toFixed : Formate un nombre en une chaîne avec un nombre fixe de décimales
const num = 123.456;
console.log(num.toFixed(6)); // "123.456000"

// Méthodes pour les chaînes de caractères :

var a = "   hello world    ";
// a.toUpperCase : Convertit la chaîne en majuscules
console.log(a.toUpperCase()); // "   HELLO WORLD    "

// a.includes : Vérifie si la chaîne contient une sous-chaîne
console.log(a.includes("world")); // true
console.log(a.includes("wo"));    // true

// a.startsWith : Vérifie si la chaîne commence par une sous-chaîne
console.log(a.startsWith("hello")); // true

// a.endsWith : Vérifie si la chaîne se termine par une sous-chaîne
console.log(a.endsWith("world")); // true
console.log(a.endsWith("hello")); // false

// a.repeat : Répète la chaîne un nombre spécifié de fois
console.log(a.repeat(3)); // "   hello world    "   "   hello world    "   "   hello world    "

// a.trim : Supprime les espaces autour de la chaîne
console.log(a.trim()); // "hello world"

// a.replace : Remplace une sous-chaîne par une autre
console.log(a.replace("world", "saif")); // "   hello saif    "

const str = "123";
// str.padStart : Ajoute des caractères au début de la chaîne jusqu'à atteindre la longueur spécifiée
console.log(str.padStart(7, "0")); // "0000123"

// str.padEnd : Ajoute des caractères à la fin de la chaîne jusqu'à atteindre la longueur spécifiée
console.log(str.padEnd(7, "0")); // "1230000"

// a.split : Divise la chaîne en un tableau de sous-chaînes
console.log(a.split(" ")); // ["", "", "", "hello", "world", "", "", ""]

// a.slice : Extrait une partie de la chaîne
console.log(a.slice(2, 5)); // " hel"

// Utilisation des modèles de chaînes (template literals) pour une interpolation de chaîne
const firstname = "houssem";
const lastname = "hidouri";
const msg = `hello my name is ${firstname} ${lastname}`;
console.log(msg); // "hello my name is houssem hidouri"

// Opérateur ternaire : une manière concise d'évaluer une condition
const age = 18;
const vote = age >= 18 ? "oui" : "non";
console.log(vote); // "oui"

// Tableaux :

// numbers.includes : Vérifie si un tableau contient un certain élément
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.includes(5)); // true

// numbers.find : Trouve le premier élément qui satisfait une condition
const found = numbers.find(num => num > 3);
console.log(found); // 4

// numbers.findIndex : Trouve l'index du premier élément qui satisfait une condition
const foundIndex = numbers.findIndex(num => num > 3);
console.log(foundIndex); // 3

// numbers.fill : Remplit les éléments du tableau avec une valeur
numbers.fill(0, 2, 4); // Remplit les indices 2 à 4 avec 0
console.log(numbers); // [1, 2, 0, 0, 5, 6]

// numbers.forEach : Exécute une fonction pour chaque élément du tableau
numbers.forEach(num => console.log(num * 2)); // Affiche chaque nombre multiplié par 2

// numbers.map : Crée un nouveau tableau avec les résultats de l'appel d'une fonction pour chaque élément
const numbers2 = numbers.map(num => num * 2);
console.log(numbers); // [1, 2, 0, 0, 5, 6]
console.log(numbers2); // [2, 4, 0, 0, 10, 12]

// numbers.filter : Crée un nouveau tableau avec tous les éléments qui passent le test de la fonction fournie
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [0, 0, 2, 4]

// numbers.reduce : Applique une fonction contre un accumulateur et chaque élément du tableau (de gauche à droite) pour le réduire à une seule valeur
const sum = numbers.reduce((a, b) => a + b, 0);
console.log(sum); // Somme des éléments du tableau

// Destructuring : Assigne les valeurs d'un tableau à des variables individuelles
const numbers = [1, 2, 3, 4, 5, 6];
const [a, b, c, d, e, f] = numbers; // A affecte la première valeur, b la deuxième, etc.
console.log(a); // 1
