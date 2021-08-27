urlpar = new URLSearchParams(window.location.search);

//#region UserExist
console.log(urlpar);
$(function () {//cette fonction permet de retrouver les information du profil utilisateur et de les afficher
  if (!urlpar.has("type")) {

    if (sessionStorage.getItem("name") == null) {
      alreadyuser = userExist();




      alreadyautor = autor();
      whois = sessionStorage.getItem("id");



      var users = alreadyuser


      for (i = 0; i < users.length; i++) {

        if (users[i].childNodes[1].childNodes[0].nodeValue == whois) {
          auteur = users[i].childNodes[5].attributes[0].nodeValue;
          for (a = 0; a < alreadyautor.length; a++) {
            console.log(alreadyautor);

            if (alreadyautor[a].attributes[0].nodeValue == auteur) {

              document.forms["firstencounter"]["firstname"].value = alreadyautor[a].childNodes[1].childNodes[0].nodeValue;
              document.forms["firstencounter"]["lastname"].value = alreadyautor[a].childNodes[3].childNodes[0].nodeValue;
              document.forms["firstencounter"]["mail"].value = alreadyautor[a].childNodes[5].childNodes[0].nodeValue;
              document.forms["firstencounter"]["birth"].value = alreadyautor[a].childNodes[7].childNodes[0].nodeValue;
              document.forms["firstencounter"]["bio"].value = alreadyautor[a].childNodes[9].childNodes[0].nodeValue;
              document.forms["firstencounter"]["ident"].value = whois;

              return false;
            }
          }

          return false;
        }



      }
    }
    else {
      switch (sessionStorage.getItem("type")) {

        case "author":

          document.forms["firstencounter"]["firstname"].value = sessionStorage.getItem("name");
          document.forms["firstencounter"]["lastname"].value = sessionStorage.getItem("name2");
          document.forms["firstencounter"]["mail"].value = sessionStorage.getItem("mail");
          document.forms["firstencounter"]["birth"].value = sessionStorage.getItem("date");
          document.forms["firstencounter"]["bio"].value = sessionStorage.getItem("bio");
          document.forms["firstencounter"]["ident"].value = sessionStorage.getItem("id");


          break;
        case "jury":
          document.forms["firstencounter"]["firstname"].value = sessionStorage.getItem("name");
          document.forms["firstencounter"]["lastname"].value = sessionStorage.getItem("name2");
          document.forms["firstencounter"]["mail"].value = sessionStorage.getItem("mail");
          document.forms["firstencounter"]["birth"].value = sessionStorage.getItem("date");

          document.forms["firstencounter"]["ident"].value = sessionStorage.getItem("id");


          break;
      }

    }



  }
  else {
    typeprofile = urlpar.get("type")

    switch (typeprofile) {

      case "author":
        document.forms["firstencounter"]["firstname"].value = urlpar.get("name");
        document.forms["firstencounter"]["lastname"].value = urlpar.get("lastname");
        document.forms["firstencounter"]["mail"].value = urlpar.get("mail");
        break;
    }

  }




});
//#endregion
function profile(ampere) {
  switch (ampere) {//On verifi si l'utilisateur viens tou juste de faire l'inscription ou non. POur l'execice les 2 cas fonctionne pareil 

    case "firstauth":
      /* var oReq = new XMLHttpRequest();             ce code permet d'ajouté un utilisateur a la base de donnée mais pour des raison de securité on vas faire en sorte que tout soit fait
    
       oReq.open("GET", "xml/autor.xml", false);
       oReq.send(null);
        
        if(oReq.status == 200) {
           
             xmlDoc = oReq.responseXML;
             usersNode = xmlDoc.createElement("authorgroup");
             console.log(xmlDoc);
   userNode = xmlDoc.createElement("User");
   nameNode = xmlDoc.createElement("name");
   nameNode.innerText = "testuser";
   adminNode = xmlDoc.createElement("admin");
   adminNode.innerText = "true";
   userNode.appendChild(nameNode);
   userNode.appendChild(adminNode);
   usersNode.appendChild(userNode);
   
   userNode = xmlDoc.createElement("User");
   nameNode = xmlDoc.createElement("name");
   nameNode.innerText = "sof_user";
   adminNode = xmlDoc.createElement("admin");
   adminNode.innerText = "false";
   userNode.appendChild(nameNode);
   userNode.appendChild(adminNode);
   usersNode.appendChild(userNode);
   
   console.log(usersNode);*/
      mdp1 = document.forms["firstencounter"]["passwdautText"].value;
      mdp2 = document.forms["firstencounter"]["passwdautText2"].value;
      //on recupère les mode passe 
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{10,}$/.test(mdp1)) {//on utilise une expression reguliaire pour la verification de la conformité de mdp avec la méthode RegExp pour tester

        //(?=.*\d)          doit contenir au moins un chiffre
        //(?=.*[a-z])     doit contenir au moins une minuscule
        //(?=.*[A-Z])      doit contenir au moins une majuscule
        //[a-zA-Z0-9]{10,}   doit contenir au moins 10 charactères



        if (mdp1 == mdp2) {//si les mot de passe correspond, on change les information de l'utilisateur dans la base de donnée avec le ID.
          sessionStorage.setItem("id", document.forms["firstencounter"]["ident"].value);
          sessionStorage.setItem("type", "author");
          sessionStorage.setItem("name", document.forms["firstencounter"]["firstname"].value);
          sessionStorage.setItem("name2", document.forms["firstencounter"]["lastname"].value);
          sessionStorage.setItem("date", document.forms["firstencounter"]["birth"].value);
          sessionStorage.setItem("bio", document.forms["firstencounter"]["bio"].value);
          sessionStorage.setItem("mail", document.forms["firstencounter"]["mail"].value);
          window.location.href = "index.html"
        }
        else { document.getElementById("error").innerHTML = "les mot de passe ne correspondent pas"; }
        return false;

      }
      else {
        document.getElementById("error").innerHTML = "Pas le bon format de mot de passe";
      }



      break;
    case "second":


      return false;
  }
  return false;

}



function autor() {

  var oReq2 = new XMLHttpRequest();

  oReq2.open("GET", "xml/autor.xml", false);
  oReq2.send();
  if (oReq2.status == 200) {
    xmlDoc = oReq2.responseXML;

    return xmlDoc.getElementsByTagName("author");

  }

}

function userExist() {

  var oReq2 = new XMLHttpRequest();

  oReq2.open("GET", "xml/users.xml", false);
  oReq2.send();
  if (oReq2.status == 200) {
    xmlDoc = oReq2.responseXML;

    return xmlDoc.getElementsByTagName("identity");

  }

}
