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

    if (vw < 992) {
      this.start = 420;
    } else if (vw < 1200) {
      this.start = 0;
    }
    return this.start;
  }
}
