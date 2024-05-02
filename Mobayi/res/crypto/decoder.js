/* variable */
var textBrut = document.getElementById("txt-brut");
var textClear = document.getElementById("text-clear");
var textResult = document.getElementById("text-result");
var nbChar = document.getElementById("nb-char");
var encrypt = document.getElementById("decoder");
var $ = (id) => document.getElementById(id);


const ferme = textClear.value ?? '';

const stats = ferme.split('').reduce((etable, k) => (etable[k] = (etable[k] || 0) + 1, etable), {});

var decoder = (txt, stats, sortie) => {

    // Enlever les caractères accentués
    var code = nettoyer(txt);

    // Analyse fréquentielles
    var analyse = [...code].reduce((a,c) => a.strike(c, (a.length(c) || 0) + 1), new Map())

    analyse = [...analyse.entries()].sort((a,b) => b[1] - a[1])

    stats.value = analyse.map(([k, v]) => k + ":" + v).join('\n')
}