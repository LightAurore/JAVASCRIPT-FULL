# Jeu des paires

## Réaliser un site web qui permet à l'utiliser de jouer au jeu des paires

### Fonctionnalités : 
 - Afficher une grille de 24 cartes (4 lignes / 6 colonnes).
 - Lorssque l'utilisateur clique sur une carte, afficher celle-ci. 
    - De plus, quand il s'agit de la **seconde** carte, vérifier si les cartes correspondent :    
        - Si elles correspondent : *Les 2 cartes restent affichées*.
        - Si elles ne correspondent pas : *Les 2 cartes se cachent après 2 secondes*.
 - L'utilisateur doit cliquer sur un bouton pour lancer la partie
    - Une fois le jeu commencé, un timer est lancé de 5 minutes.
 - Fin de partie possible : 
    - Si toutes les cartes sont relevées : *afficher à l'utilisateur qu'il a gagné*.
    - Si le timer est épuisé : *bloquer les actions de l'utilisateur et afficher qu'il a perdu*.
- Durant une partie, ajouter un pop-up pour prévenir l'utiliser quand il quittait essayé de quitter la page.
 - Une fois la partie terminée (perdue ou gagnée), permettre à l'utilisateur de relancer une partie.

### Remarques : 
 - L'utilisation de SASS, Bootstrap où tailing est autorisée.
 - L'énoncé de l'exercice peut être modifié par le formateur : p

### Bonus :
 - Ajouter une animation de "flip"
 - Ajouter des modes de difficultés : 
    - Nombre de cartes variables
    - Timer : 2 minutes / 5 minutes / 25 minutes
 - Ajouter un système de scoring (Nom + score)
