/**
 * Un utilisateur
 * @typedef {object} CustomerDTO
 * @property {number} id
 * @property {string} username
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} img_url
 */
class CustomerDTO{

  constructor({ id, username, firstname, lastname, img_url }){
      this.id = id;
      this.username = username;
      this.firstname = firstname;
      this.lastname = lastname;
      this.img_url = img_url;
  }
}

/**
 * canvas de la list d'utilisateurs
 * @typedef {object} CustomerDTO
 * @property {number} id
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} img_url
 */
class CustomerListDTO {
  
  constructor({ id, firstname, lastname, img_url }){
      this.id = id;
      this.name = firstname + " " + lastname;
      this.imgurl = img_url;
  }
}

module.exports = {        CustomerListDTO : CustomerListDTO, 
  CustomerDTO : CustomerDTO
}
