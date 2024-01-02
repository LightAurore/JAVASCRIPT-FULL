"use strict";
import { Compte } from "../nzimbi/compte.js";

export class CompteEpargne extends Compte {
  constructor(titulaire, montant = 50, taux = 0.005, rythme = 40000) {
    super(titulaire, montant);
    this.taux = taux;
    this.rythme = rythme;

    // intérêts de taux toutes les 5000 millisecondes

    setInterval(() => {
      this.solde *= 1 + this.taux;
      //   console.log(this.solde);
    }, this.rythme);
  }

  afficher_epargne() {
    setInterval(() => {
      this.afficher_solde();
    }, 10000);
  }
}

// export default CompteEpargne;
