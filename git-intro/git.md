##  git

git init => initialisation de git

git add [fileName] => ajouter un fichier dans le  "staging"

git add . => ajouter tous les fichiers dans le staging

git rm --cached [fileName] => retirer un fichier dans du "staging"

git commit -m "[message]" => ajouter les fichiers "stagés" dans une sauvegarde locale

git checkout [tag, branche, commit] => revenir à une sauvegarde

git reset --hard => Effacer les changements entre le dernier commit et le dossier courant

git reset head ~ [nb] => Effacer nb commits

git reset [commit] => Effacer tous les commits jusqu'au commit specifié

git tag [tagName] => Ajouter un tag à un commit

git tag => Voir tous les tags

git stash => Sauvegarder les fichiers non committés

git stash apply => réappliquer les changements sauvargadés

git branch [branchName] => créer une nouvelle branche

git checkout -b [branchName] => créer une nouvelle branche + checkout

git branch -d [branchName] => Supprimer une branche

git branch => Voir toutes les branches

git merge [branchName] => Ajouter tous les commits d'un branche sur la branche courante

git remote add [remoteName] [remoteAddress] => Ajouter un depot distant

git push [remoteName] [branchName] => synchroniser de local -> distant

git pull [remoteName] [branchName] => synchroniser de distant -> local

git clone [remoteUrl] => recuperer localement un depot


