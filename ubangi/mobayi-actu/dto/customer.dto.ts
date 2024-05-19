export class CustomerDTO {
  id: number;
  username: string;
  role: string;

  constructor({ id, username, role }: { id: number; username: string; role: string }) {
      this.id = id;
      this.username = username;
      this.role = role;
  }
}