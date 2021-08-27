function validateconnection() {
    id = document.forms["firstencounter"]["nickname"].value;
    pwd = document.forms["firstencounter"]["passwdtext"].value;//on recupère les mot de passe et l'identifiant.

    if (id == "") {
        alert("Identifiant manquant");
        console.log(id);
        return false;
    }
    if (pwd == "") {
        alert("Mot de passe manquant");
        console.log(id);
        return false;
    }//on verifie si un mot de passe à était rentrer. on aurait pu le faire sur le HTML avec required sur les input
    var oReq = new XMLHttpRequest();

    oReq.open("GET", "xml/users.xml", false);
    oReq.send();

    if (oReq.status == 200) {
        xmlDoc = oReq.responseXML;
        var users = xmlDoc.getElementsByTagName("identity");

    }
    for (i = 0; i < users.length; i++) {
        //  console.log(users[i].childNodes[3].childNodes[0].nodeValue);
        if (users[i].childNodes[1].childNodes[0].nodeValue == id & users[i].childNodes[3].childNodes[0].nodeValue == pwd) {
            sessionStorage.setItem("id", users[i].childNodes[1].childNodes[0].nodeValue);
            sessionStorage.setItem("type", users[i].attributes[0].nodeValue);
            //on recherche si l'utilisateur existe et si le mot de pass lui correspond bien.
            //si oui, on utilisera l'objet sessionStorage ou l'on sotckera des information sur l'utilisateur pour le system de session. Le localstorage aurait pu être utilise mais le session est plus pratique pour le temps de stockage relatif au temps de l'onglet du navigateur.
            //sinon message d'erreur.
            return true;
        }



    }
    document.getElementById("error").innerHTML = "Utilisateur non reconnu";
    return false;
}
