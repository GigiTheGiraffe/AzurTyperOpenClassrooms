
let score = 0;
let choixListe;
let motUtilisateur;
let i = 0;
let listeProposition = listeMots;

function afficherResultat(score, nombreQuestions) {
    zoneScore.textContent = `${score} | ${nombreQuestions}`;
}

let zoneProposition = document.querySelector(".zoneProposition");

function afficherProposition(mot) {
    zoneProposition.innerHTML = mot;
};

afficherProposition("Choisissez votre option au-dessus");

let radioBtn = document.querySelectorAll(".optionSource input");
console.log(radioBtn)


for (let j = 0; j < radioBtn.length; j++) {
    radioBtn[j].addEventListener("change", (event) => {
        if (event.target.value === "1") {
            listeProposition = listeMots;
        } else {
            listeProposition = listePhrases;
        }

        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini");
        } else {
            afficherProposition(listeProposition[i]);
        }
    });
}

function lancerJeu() {
    let btnValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    btnValider.addEventListener("click", () => {
        if (inputEcriture.value === zoneProposition.innerHTML) {
            score++;
        };
        afficherResultat(score, i + 1);
        afficherProposition(listeProposition[i + 1]);
        i++;
        inputEcriture.value = "";

        if (listeProposition[i] === undefined) {
            afficherProposition("Le jeu est fini");
            btnValider.disabled = true;
        }
    });
}

