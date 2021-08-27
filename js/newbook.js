$(function () {

    if (sessionStorage.getItem("type") == null) {
        window.location.href = "connection.html";

    }
    else {
        document.getElementById("firstencounter").addEventListener("submit", (event) => {//ajout de l'event sur le submit du formualire.

            event.preventDefault();//on arrête les redirection du formulaire.
            newbooker();
        }, false);
    }
})
//POur des raison de securité , les enregistrement de sont pas fonctionnel. Donc un tableau est présent pour afficher les infos comme si on voulait les enregistré dans la BDD.
function newbooker() {//Fonction qui récupère les données du livre pour publication.
    const currentdate = new Date();//on enregistre la date actuelle (celle de la machine).
    if (document.forms["firstencounter"][1].value == "") {//On cherche si d'autres auteurs sont entrée
        var pressf = [document.forms["firstencounter"][0].value, document.forms["firstencounter"][3].value, currentdate.getDate() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear()];
        console.log(pressf);
        console.log(document.forms["firstencounter"][2].files[0]);
        document.forms["firstencounter"].style.display = "none";
        document.getElementById("testform").innerHTML = "Merci de votre participation, vous serai notififé par mail que votre oeuvre sera validé ou non";
        //On envois le tout à la BDD
        //Un ID est généré apartir des inital de l'auteur qui enregistre le livre avec ça date de naissance et 6 chiffres ou lettre random. exmple: JJ020378145A56
        setTimeout(() => { window.location.replace("cpanel.html"); }, 4000);//on redirige aprés 4 seconde vers le control panel.
    }
}