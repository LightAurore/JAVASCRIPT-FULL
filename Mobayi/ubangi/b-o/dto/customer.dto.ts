
export class CustomerDTO{
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  img_url: string;

  constructor({ id, username, firstname, lastname, img_url }: {
      id: string;
      username: string;
      firstname: string;
      lastname: string;
      img_url: string;
  }) {
      this.id = id;
      this.username = username;
      this.firstname = firstname;
      this.lastname = lastname;
      this.img_url = img_url;
  }
}

export class CustomerListDTO {
  id: string;
  firstname: string;
  lastname: string;
  imgurl: string;

  constructor({ id, firstname, lastname, imgurl }: {
      id: string;
      firstname: string;
      lastname: string;
      imgurl: string;
  }) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.imgurl = imgurl;
  }
}
