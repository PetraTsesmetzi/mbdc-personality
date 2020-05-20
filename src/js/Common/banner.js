export class Banner {
  constructor(bannerconfig) {
    this.bannerconfig = bannerconfig;
    console.log("bannerconstructor");
  }
  get getbanner() {
    return (this.innerHTML = `<section id=${this.bannerconfig.containerId}>
      <div id=${this.bannerconfig.bannerId}>
        <div id=${this.bannerconfig.imgId}></div>
        <div id=${this.bannerconfig.descId}>
          <h1>${this.bannerconfig.h1}</h1>
          <h2>${this.bannerconfig.h2}</h2>
        </div> 
      </div>
    </section>`);
  }
}
