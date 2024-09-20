import { IObserver } from "./IObserver";
import { IPublisher } from "./IPublisher";

export class AuthPublisher implements IPublisher {
  private currentValue = ["shehata", "omar"];

  public getValue(): string[] {
    return this.currentValue;
  }

  public setValue(value: string[]): void {
    this.currentValue = value;
    this.notify();
  }

  private observers: IObserver[] = [];
  public subscribe(observer: IObserver): void {
    this.observers.push(observer);
  }
  public unsubscribe(observer: IObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  public notify(): void {
    this.observers.forEach((observer: IObserver) => observer.update());
  }
}
