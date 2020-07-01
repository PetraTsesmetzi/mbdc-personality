/* Viewportdetector-static class
detects the size of the viewport
*/
export class Viewportdetector {
  constructor() {
    this.scroll = 0;
    this.start = 0;
  }
  //sets the distance of the scroll depending on the screensize
  static detectDistance() {
    let vw = window.innerWidth;

    vw < 768 ? (this.scroll = 212) : (this.scroll = 155);
    return this.scroll;
  }
  //ssets the startpoint of the scrollposition depending on the screensize
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
