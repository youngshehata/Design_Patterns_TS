import { NewUserMethod } from "./NewUserMethod";
import { User } from "./User";

export class NewUserAdapter extends User {
  private newUser: NewUserMethod;
  constructor(newUserMethod: NewUserMethod) {
    super();
    this.newUser = newUserMethod;
  }

  public getInfo(): string {
    return `User Info: username: ${this.newUser.getUsername()} , google: ${this.newUser.getGoogle()} , facebook: ${this.newUser.getFacebook()}`;
  }
}
