var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "xml/bdd.xml", true);
xhttp.send();

function myFunction(xml) {
    var x, y, i, xlen, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName("categorie");
    xlen = x.length;


    for (i = 0; i < xlen; i++) {
        document.getElementById("tablecategory").innerHTML += "<div class=listingcat><a href=category.html?id=" + x[i].attributes[1].nodeValue + "><h2>" + x[i].attributes[0].nodeValue + "</h2><p>" + x[i].childNodes[1].childNodes[0].nodeValue + "</p></a><h4>Il y'a actuellement:" + x[i].getElementsByTagName("book").length + " livre(s)</h4></div>";

    }

}//fonction qui recherche toute les catégorie dans la bdd. On liste aussi le nombre de livre existant.