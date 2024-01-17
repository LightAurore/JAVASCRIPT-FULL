Sur le thème de votre choix :
# Partie formulaire :

## Créer une page en deux parties (gauche-droite, haut-bas, comme vous voulez) : 
* un formulaire
* la future liste des éléments

## Votre formulaire devra :
* Avoir des champs requis
* Avoir au moins un champs où vous faites une vérification de contenu (valeur entre X et X ou verif de format)
* Sur chacun des champs, quand il est modifié, on affiche un message d'erreur personnalisé s'il est requis et pas rempli etc
* Le bouton pour envoyer le formulaire est disabled tant que tout n'est pas correctement rempli
* Quand le formulaire est valide, quand on appuie sur envoyer, on remet le formulaire à 0

# Partie API 
Une fois que votre formulaire est fait, on va relier tout ça à une API
## Setup
Grâce à json server, mettre en place une fausse API et encoder déjà quelques objets 
## Lien avec le formulaire
Quand on envoie le formulaire, faites maintenant en sorte que l'ajout se fasse dans la fausse DB
## Afficher la liste
Quand on arrive sur la page et à chaque ajout dans la db, mettre à jour la liste des éléments (cards, liste, faites le format que vous souhaitez)

### Bonus : 
* Suppression : Dans la liste, rajouter pour chaque élément un icon pour supprimer. On supprimera l'élément dans la db et on remet la liste à jour
* Pop up : Quand on clique sur un élément, on peut le voir en plus grand, en détail dans une popup