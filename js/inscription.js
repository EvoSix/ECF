function inscription() {

  switch (new URLSearchParams(window.location.search).get('id')) {


    case '1':
      /*  
           Email.send({
               Host: "smtp.gmail.com",
             Username:"mathieuvigier6@gmail.com",
             Password: ,
               To: document.forms["firstencounter"]["mail"].value,
               From: "mathieuvigier6@gmail.com",
               Subject: "Inscription a Bbiblio accepté",
               Body: "Voici le liens pour completer votre profil",
               
             })*/


      document.getElementById("insAut").style.display = "none";
      document.getElementById("confirmationins").style.display = "block"
      document.getElementById("confirmationins").innerHTML = "<a href=profile.html?type=author&name=" + document.forms["firstencounter"]["firstname"].value + "&lastname=" + document.forms["firstencounter"]["lastname"].value + "&mail=" + document.forms["firstencounter"]["mail"].value + ">Cliquez ici pour finaliser le profil</a>";

      return false;
      break;
    case '2':
      document.getElementById("insAut").style.display = "none";
      document.getElementById("confirmationins").style.display = "block"
      document.getElementById("confirmationins").innerHTML = "<a href=profile.html?type=jury&name=" + document.forms["firstencounter"]["firstname"].value + "&lastname=" + document.forms["firstencounter"]["lastname"].value + "&mail=" + document.forms["firstencounter"]["mail"].value + ">Cliquez ici pour finaliser le profil</a>";

      break;
    case '3':
      break;
  }
  //on recupère l'information sur quel type d'utilisateur veut s'inscrire.
  // on créera une fonction pour envoyer un mail.
  //Pour l'exemple on retournera directement le liens de finalisation d'inscription. on ne prend pas compte du mot de passe a créer la première fois , on le fera dans la page de profile directement.

}