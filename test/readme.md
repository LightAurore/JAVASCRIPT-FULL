# Test 


## Test unitaire
Tester une partie du code dans un scénario (success, error)




## Test d'intégration 
    Tester une fonctionalité


## Test fonctionnel
    Tester l'ensemble du système en fonctionnement (charge / performance / stress / security)

    (vegeta)


## Objectif
    - Automatiser les tests
        - Permet de relancer l'ensemble des tests 
        - Etre notifier en cas de changement "Cassant"

    - Eviter la régression
        - Casser une feature précedement implenté

    - Eviter qu'un bug "corrigé" ne revienne
        - Création d'un test lié à un bug 
        - Si en modifiant le code, celui-ci réapparaît, le test se déclanche  

    - Garantir que le code est fonctionnel
        - Code coverage

## Mise en place du TDD (Test driven Development)

### Processus
    1° Ecrire un test d'un élément à résoudre
    2° Vérifier que le test plante
    3° Ecrire le code nécessaire pour réussir le test
    4° Vérifier que le test passe , éxecuter le test
    a - Le test plate -> Retour à l'étape 3°
    b - Le test passe -> Etape 5
    5° Remanier le code ()
    6° Executer le test (si il plante -> retour à l'étape 5)
    7° Retour à l'étape 1° pour la fonctionnalité suivante


