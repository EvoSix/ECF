var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "xml/bdd.xml", true);
xhttp.send();

function myFunction(xml) {
    var x, i, xlen, xmlDoc;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("categorie");
    xlen = x.length;

    document.getElementById("category").innerHTML += "<ul id='undercat'>"
    for (i = 0; i < xlen; i++) {
        document.getElementById("undercat").innerHTML += "<li><a href=category.html?id=" + x[i].attributes[1].nodeValue + ">" + x[i].attributes[0].nodeValue + "</a></li>"
        console.log(x[i].attributes[0].nodeValue);
    }

    //Fonction qui permet dynamiquemnt de généré le sous menu des catégories en cherchant dans la BDD
    //On génère aussi des lien avec un paramètre pour savoir quelle catégorie à était demander. 

}
function Deco() {//Comme le bouton de déconnexion est sur le menu cette fonction permet de supprimer tout les données du sessionStorage et de rechargé la page.

    sessionStorage.clear();
    window.location.reload();
}