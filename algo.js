let choix = ["pierre", "feuille", "ciseaux"];

let joueur = prompt("entrez votre choix");

let ordi = choix[Math.floor(Math.random() * 3)];

console.log(ordi)




while() {


if (joueur == ordi) {
    console.log("égalité")
}

if (joueur == "ciseaux" && ordi == "feuille") {
    console.log("gg !")
}

if (joueur == "feuille" && ordi == "pierre") {
    console.log("gg !")
}

if (joueur == "pierre" && ordi == "ciseaux") {
    console.log("gg !")
}

if (joueur == "pierre" && ordi == "feuille") {
    console.log("nul !")
}

if (joueur == "feuille" && ordi == "ciseaux") {
    console.log("nul !")
}

if (joueur == "ciseaux" && ordi == "pierre") {
    console.log("nul !")
}


}

























