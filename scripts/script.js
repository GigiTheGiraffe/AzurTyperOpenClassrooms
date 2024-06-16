
let score = 0;
let choixListe;
let motUtilisateur;
let i = 0;

function afficherResultat(score, nombreQuestions) {
    zoneScore.textContent = `${score} | ${nombreQuestions}`;
}

let zoneProposition = document.querySelector(".zoneProposition")
function afficherProposition(mot) {
    zoneProposition.innerHTML = mot;
};

function lancerJeu() {
    let btnValider = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");
    btnValider.addEventListener("click", () => {
        if (inputEcriture.value === zoneProposition.innerHTML) {
            score++;
        };
        afficherResultat(score, i);
        console.log(inputEcriture.value);
        console.log(zoneProposition.innerHTML);
        afficherProposition(listeMots[i]);
        i++;
        inputEcriture.value = "";

        if(listeMots[i - 1] === undefined) {
            afficherProposition("Le jeu est fini");
            btnValider.disabled = true;
        }
    });
}

