// j'ai récupéré les données d'une <table> édité.

// Maintenant je souhaite convertir "res" en fichier CSV.
// "res" contient plusieurs lignes.
$("#valider")
  .button()
  .bind("click", function () {
    var res = "";
    $("#makeEditable")
      .find("tbody")
      .find("tr")
      .each(function () {
        var gender = $(this).find("#genderTd").text();
        var nom = $(this).find("#nomTd").text();
        var prenom = $(this).find("#prenomTd").text();
        var montant = $(this).find("#montantTd").text();
        var nx = $(this).find("#nxTd").text();
        var frequence = $(this).find("#frequenceTd").text();
        var firstVersement = $(this).find("#firstVersementTd").text();
        var nbVersement = $(this).find("#nbVersementTd").text();
        var versement = $(this).find("#versementTd").text();
        var scenario = $(this).find("#scenarioTd").text();
        var type = $(this).find("#typeTd").text();
        var destinataire = $(this).find("#destinataireTd").text();
        var template = $(this).find("#templateTd").text();
        var langue = $(this).find("#langueTd").text();
        var devise = $(this).find("#deviseTd").text();
        var date = $(this).find("#dateTd").text();
        var heure = $(this).find("#heureTd").text();
        var url = $(this).find("#urlTd").text();
        res +=
          gender +
          nom +
          prenom +
          montant +
          nx +
          frequence +
          firstVersement +
          nbVersement +
          versement +
          scenario +
          type +
          destinataire +
          template +
          langue +
          devise +
          date +
          heure +
          url;
      });
    alert(res);
  });
