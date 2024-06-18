/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/
/**/
 
let popupBackground = document.getElementById("popupBackground")
 // Cette fonction affiche la popup pour partager son score. 
function afficherPopup() {
    // La popup est masquée par défaut (display:none), ajouter la classe "active"
    // va changer son display et la rendre visible. 
    popupBackground.classList.add("active")
}

/**
 * Cette fonction cache la popup pour partager son score. 
 */
const form = document.querySelector("form");
let email;
let pseudo;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    email = document.getElementById("email").value;
    pseudo = document.getElementById("pseudo").value;
    console.log(email)
    if (pseudo === "") {
        alert('Le champ nom est vide');
    } else {
        console.log('Le champ nom est rempli');
    }
    cacherPopup();
});
function cacherPopup() {
    // La popup est masquée par défaut (display:none), supprimer la classe "active"
    // va rétablir cet affichage par défaut. 
    popupBackground.classList.remove("active")
}

let btnPartage = document.getElementById("partager");
btnPartage.addEventListener("click", () => {
    afficherPopup();
});



