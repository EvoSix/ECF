//#region Menu  
//Affichage du menu sur toute les page, cela parmet de modifier le menu sans devoir modifier toute les pages
function menu(menuel) {




	$("#nav").load(menuel);//on charge le menu dans la div nav

};
var xmlDoc;
$(function () { //cette fonction sera lancé dés l'appel du fichier JAVASCRIPT, elle est utilisé pour déterminé si un utilisateur est connecter pour non pour choisir le menu appropié
	if (sessionStorage.getItem("id") != null) {

		menu("menuConnected.html");

	}
	else menu("menuPublic.html");
})

//#endregion




//#region Bdd
// ici régis les appel au fichier XML
function bdd() {
	//Recupère les catégoruie avec leur livre associer.
	var oReq = new XMLHttpRequest(); //on créer l'objet de requête pour récupérer le fichier xml

	oReq.open("GET", "xml/bdd.xml", false);//on créer la requête avec l'url du fichier de façons synchrone, permettant de réutiliser la fonction (bien que qu'en cas d'aucune reponse du serveur , on recupère rien)
	oReq.send();//on envoir le requête

	if (oReq.status == 200) {//si le requête est s'est bien passé, le fichier est téléchargé
		xmlDoc = oReq.responseXML;

		return xmlDoc.getElementsByTagName("categorie");
		//on enregistre le fichier et on manipule les donnée HTMLCollection pour les retourner 
	}


	// console.log( xmlDoc);


}

function book() {

	var oReq2 = new XMLHttpRequest();

	oReq2.open("GET", "xml/book.xml", false);
	oReq2.send();
	if (oReq2.status == 200) {
		xmlDoc = oReq2.responseXML;

		return xmlDoc.getElementsByTagName("book");

	}

}


//#endregion


//#region init
$(function () {
	//Voir note. 
	switch (window.location.pathname.split("/").pop()) { //on recupère le chemin de l'url de la page acuelle que l'on sépare dans un tableaux avec pour séparateur /, puis on supprime le denier élément du tableau pour le retourner
		//Comme la condition a une valeur qui peut avoir plus que 2 état, on utilisera le swicth pour plus de lisibilité.
		case 'category.html':
			var cat;
			var booker;
			cat = bdd();

			booker = book();
			urlpar = new URLSearchParams(window.location.search).get('id');//On cherche sur l'url le paramètre que l'on a retourné pour avoir l'argument de quel catégorie il s'agit.

			for (i = 0; i < cat.length; i++) {

				if (cat[i].attributes[1].nodeValue == urlpar) {
					document.getElementById("titler").innerHTML = cat[i].attributes[0].nodeValue;
					document.getElementById("tablecategory").innerHTML += "<p>" + cat[i].childNodes[1].childNodes[0].nodeValue + "</p>";
					//On parcours les elements de la collection et on cherche si l'attribut de l'element correspond a l'argument . Une fois correspandance, on ajouite le titre de la catégory et ça description.
					//attributes est le collection d'attibut d'elements sous forme de tableau. childnodes est une collection des elements enfant sous forme de tableau.
					for (o = 0; o < booker.length; o++) {

						for (var s of cat[i].getElementsByTagName("book")) {
							if (s.attributes[0].nodeValue == booker[o].attributes[0].nodeValue) {
								document.getElementById("tablecategory").innerHTML += "<div class=listingcat><img src=" + booker[o].childNodes[9].childNodes[0].nodeValue +
									"><a href=book.html?id=" + booker[o].attributes[0].nodeValue + "&cat=" + urlpar + "><h3>" + booker[o].childNodes[1].childNodes[0].nodeValue +
									"</h3><h4> Auteur: " + booker[o].childNodes[3].childNodes[0].nodeValue + "</h4><h5> ajouté le: " + booker[o].childNodes[5].childNodes[0].nodeValue + "</h5><p>" +
									booker[o].childNodes[7].childNodes[0].nodeValue.substring(0, 20) + "</p></a></div>";
								//On va maintenant parcourir la collection des livre. on recupère tous les livre qui ce trouve dans la catégorie et on un comparatif de l'attribut id avec la collection des livre de la bdd, lorsqu'il ya correspondance on ajoute les informations du livre.


							}
						}



					} return;

				}
			}
			break;

		case 'book.html':

			var cat;
			var booker;
			cat = bdd();

			booker = book();
			urlpar = new URLSearchParams(window.location.search).get('id');
			cate = new URLSearchParams(window.location.search).get('cat');//on recupère les arguments pour le livre
			for (i = 0; i < booker.length; i++) {

				if (booker[i].attributes[0].nodeValue == urlpar) {


					document.getElementById("titler").innerHTML += cat[cate].attributes[0].nodeValue;

					document.getElementById("tablecategory").innerHTML += "<div id=bookerS><img id=imgr src=" + booker[i].childNodes[9].childNodes[0].nodeValue + " alt=illustration><h2>" + booker[i].childNodes[1].childNodes[0].nodeValue + "</h2><h3>" + booker[i].childNodes[3].childNodes[0].nodeValue + "</h3><h4>" + booker[i].childNodes[5].childNodes[0].nodeValue + "</h4>" + booker[i].childNodes[7].childNodes[0].nodeValue + "</br></br><a href=#>Télécharger le livre</a></div>";
					document.getElementById("imgr").style.float = "left";
				}


			}
			//on cherche les information dans la base de donnée par correspondance avec L'id




			break;
		/* default :
		   //console.log("ramus:ok");
		   //console.log(sessionStorage.getItem("id"));
	   	
		 break;*/
	}
});

//#endregion

function mdp() {


	var input = document.getElementById("passwdtext");
	if (input.type === "password") {
		input.type = "text";
	}
	else {
		input.type = "password";
	}
}
function inscriptionHandler() {
	document.getElementById("compte").style.display = "contents";
	return false;
}
//fonction permettant de voir le mot de passe lors de la connexion
