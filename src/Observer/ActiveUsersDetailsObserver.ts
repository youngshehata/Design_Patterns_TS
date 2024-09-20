import { AuthPublisher } from "./AuthPublisher";
import { IObserver } from "./IObserver";

export class ActiveUsersDetailsObserver implements IObserver {
  private thePublisher: AuthPublisher;
  constructor(pubisher: AuthPublisher) {
    this.thePublisher = pubisher;
  }

  public update(): void {
    console.log("Active Users Are: ", this.thePublisher.getValue().join(", "));
  }
}
