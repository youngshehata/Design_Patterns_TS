export class Singleton {
  private constructor() {
    // Private constructor to prevent instantiation
  }
  static #instance: Singleton;

  public static getinstance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }

    return Singleton.#instance;
  }

  private variables: { key: string; value: string }[] = [];

  public addVariable(variable: { key: string; value: string }): void {
    this.variables.push(variable);
  }

  public getVariables(keyName: string): { key: string; value: string } | null {
    const obj = this.variables.find((obj) => obj.key === keyName);
    if (!obj) return null;
    else {
      return obj;
    }
  }
}
