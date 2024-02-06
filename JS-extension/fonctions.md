
(
    +function (…) { … }(…);
)();

(
    -function (…) { … }(…);
)();

(
    ~function (…) { … }(…);
)();

(
    !function (…) { … }(…);
)();

(
    var maVariable = function (…) { … }(…);
)();
    
(
    true && function (…) { … }(…);
)();

(
    0, function (…) { … }(…)
)();

var compteur = (function () {
    var i = 0; // propriété privée

    return {   // méthodes publiques
        obtenir: function () {
            alert(i);
        },
        mettre: function (valeur) {
            i = valeur;
        },
        incrementer: function () {
            alert(++i);
        }
    };
})(); // module

compteur.obtenir();     // affiche 0
compteur.mettre(6);
compteur.incrementer(); // affiche 7
compteur.incrementer(); // affiche 8
compteur.incrementer(); 