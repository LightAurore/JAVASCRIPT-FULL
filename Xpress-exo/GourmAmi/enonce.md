# Énoncé de l'exo récap - Web server Express

## Description
Créer un site Web collaboratif avec Express (Server Side Rendering - Pattern MVC - MongoDB).
Le site doit permet aux utilisateurs de partager et consulter des recettes (Thème possible : cocktail, nourriture, pâtisserie, ...).

## Fonctionnalité
Les pages du site : 
- Accueil _(Message d'accueil, derniere recette ajoutée, recette du jour)_.
- Recettes _(Liste des recettes - Avec une pagination)_
- Détail d'une recette
- Formulaire d'ajout de recette
- Profile utilisateur _(Info de l'utilisateur, Recettes favoris)_

Un utilisateur non-connecté peut : 
- Créer un compte
- Se connecter
- Consulter la liste des recettes
- Consulter le détail d'une recette

Un utilisateur connecté peut : 
- Se déconnecter
- Ajouter une recette
- Consulter un profil d'utilisateur
- Ajouter en favori une recette

(Bonus) Afficher des notifications quand une nouvelle recette est ajoutée

## Structure de donnée
Recette : 
- Nom
- Description
- Liste des ingrédients
- Etape de préparation
- (Bonus) Image de présentation

Utilisateur :
- Email
- Pseudo
- Prénom _(Optionnel)_
- Nom _(Optionnel)_
- Liste de recette fav