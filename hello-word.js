// Déclaration des variables

const name = "Essai";
// let monTableau ([50, 40, 30]);
let age = 22;
let chiffre = 2;

// Déclaration des fonctions

const kiki = (string) => {
  // instruction de la fonction
  console.log(string);
};

const checkAge = (age) => {
  if (age >= 18) {
    return true;
  } else {
    return console.log("Do you have permission from your parents?");
  }
};

const titi = () => {
  console.log("Hello Matheo");
};

// Instructions principales du programme

console.log(age);

if (name === "Vincent") {
  console.log("c'est vrai");
}

if (age == 55) {
  console.log(age);
}

titi();
titi();
console.log(name);

checkAge(15);
kiki("JavaScript");

// La boucle while permet d'exécuter du code tant qu'une condition est vraie

while (chiffre <= 5) {
  console.log(chiffre);
  chiffre++;
}
