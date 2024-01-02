"use strict";

const Compte =  class newCompte {
  /**
   *
   * @param {*} titulaire
   * @param {*} montant
   */
  constructor(titulaire, montant = 0) {
    this.titulaire = titulaire;
    this.solde = montant;
  }

  /**
   * crédidter le compte
   * @param {number} montant
   */
  crediter(montant) {
    this.solde -= -montant;
  }

  debiter(montant) {
    this.solde -= montant;
  }

  afficher_solde() {
    console.log(`Le montant de votre solde est de ${this.solde.toFixed(2)} €`);
  }
}

export {Compte};
