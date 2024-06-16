
let score = 0;
let choixListe;
let motUtilisateur;

function afficherResulat(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    alert(message);
}


function choisirPhrasesOuMots() {
    while ((choixListe !== "Mots") && (choixListe !== "Phrases")) {
        choixListe = prompt("Voulez-vous vous entrainer sur des mots ou des phrases? Entrez Mots ou Phrases en fonction du mode de jeu choisi");
    }
    return choixListe;
}

function lancerBoucleDeJeu(choixListe) {
    if (choixListe === "Mots") {
        for (i = 0; i < listeMots.length; i++) {
            motUtilisateur = prompt("Entrez le mot: " + listeMots[i]);
            if (motUtilisateur === listeMots[i]) {
                console.log("Bravo, vous avez correctement tapé le mot");
                score++;
            } else {
                console.log("Malheureusement ce n'est pas le bon mot");
            }
        }
        return score;
    }

    if (choixListe === "Phrases") {
        for (i = 0; i < listePhrases.length; i++) {
            motUtilisateur = prompt("Entrez la phrase: " + listePhrases[i]);
            if (motUtilisateur === listePhrases[i]) {
                console.log("Bravo, vous avez correctement tapé la phrase");
                score++;
            } else {
                console.log("Malheureusement ce n'est pas la bonne phrase");
            }
        }
        return score;
    }
}

