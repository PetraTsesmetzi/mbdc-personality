export class Viewportdetector {
  constructor() {
    this.scroll = 0;
    this.start = 0;
  }
  static detectDistance() {
    let vw = window.innerWidth;

    vw < 768 ? (this.scroll = 212) : (this.scroll = 155);
    return this.scroll;
  }
  static detectStartPosition() {
    let vw = window.innerWidth;

    vw < 768 ? (this.start = 600) : (this.start = 0);
    return this.start;
  }
}
