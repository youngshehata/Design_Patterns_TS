import { AuthPublisher } from "./AuthPublisher";
import { IObserver } from "./IObserver";

export class ActiveUsersObserver implements IObserver {
  private thePublisher: AuthPublisher;
  constructor(pubisher: AuthPublisher) {
    this.thePublisher = pubisher;
  }

  public update(): void {
    console.log("Active Users Number: ", this.thePublisher.getValue().length);
  }
}
