export default class User {
  constructor(userName, password, name, role, token, id) {
    this.userName = userName;
    this.password = password;
    this.name = name;
    this.role = role;
    this.token = token;
    this.id = id;
  }
}
