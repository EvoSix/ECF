$(function () {//Fonction permettant de verifier si l'utilisateur est connecter ou non via l'appelle de données du sessionStorage

    if (sessionStorage.getItem("type") == null) {
        window.location.href = "connection.html";//sinon le sessionStorage retourne null et on redirige sur la page de connection.

    }
    else
        switch (sessionStorage.getItem("type")) {//si l'utilisateur est connecté, on recupère le type d'utilisateur stocker dans le sessionStorage et on fais des cas. Selon les cas, des elements sont caché et d'autre correspondant au type sont visible. Par defaut la partie auteur est visible.

            case "author":
                n = 7;
                listelivre = document.getElementById("listeAut");
                listelivre.innerHTML += "	<tr><td>Les toiles de la nuit</td><td>Jensen Jacket</td><td>25/02/2021</td><td>Pas encore noté</td><td><a href=#>pas encore de moyenne</a></td></tr><tr><td>Les rayons traçant</td><td>Jensen Jacket</td><td>25/06/2021</td><td>02/07/2021</td><td id=notation></td></tr>";
                for (i = 0; i < 10; i++) {
                    if (n > 0) {
                        document.getElementById("notation").innerHTML += " <span class='fa fa-star checked'>";
                    }
                    else { document.getElementById("notation").innerHTML += " <span class='fa fa-star '>"; }
                    n--;
                    console.log(n);
                }

                break;
            //on recupère les livre de l'auteur sur la BDD et on les affiche avec toutes les information correspondante. 
            //pour l'exemple 2 livre on était ajouté manuellement. les étoile sont généré via la note global du livre.
            //Pour le system d'etoile, le CSS d'Awesome Font a était utiliser avec une autre class pour le remplissage pour les note.

            case "editor":

                break;

            case "jury":
                document.getElementById("insAut").style.display = "none";
                document.getElementById("insJur").style.display = "flex";
                listelivre = document.getElementById("listeJur");
                listelivre.innerHTML += "	<tr><td>Les toiles de la nuit</td><td>Jensen Jacket</td><td>25/02/2021</td><td></td><td>Noté</td><td><ul><li>Style:5/10</li><li>Illustrations:8/10</li><li>Mise en page:8/10</li><li>Emotion:8/10</li></ul></td></tr><tr><td>Les rayons traçant</td><td>Jensen Jacket</td><td>25/06/2021</td><td>non noté</td><td><a href=#>Lien du livre pour notation</a></td></tr>";

                break;
            //La même choise que précedement mais cette fois si ce sont les livre de la catégorie ou les catégories choisi qui sont trouver.
            //On remplie les information avec des correspondance entre les livre de la catégorie et des livre noté present dans la table des juré pour afficher les bonnes information des note de livre.
            //cette liste comportera une fonction de tri en fonction des note , de l'auteur , des livre noté ou non, de la date.
        }

})