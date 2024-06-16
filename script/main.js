function lancerJeu() {
    choisirPhrasesOuMots();
    lancerBoucleDeJeu(choixListe)
    if (choixListe === "Mots") {
    afficherResulat(score, listeMots.length);
    } else {
    afficherResulat(score, listePhrases.length);
    }
}

lancerJeu();