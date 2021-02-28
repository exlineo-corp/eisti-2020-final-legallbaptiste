export class Tools {
  static generateRandomId(): number {
    return Math.floor(Math.random() * Math.floor(1000000000)) + 1000000001;
  }
}
