export class Banner extends HTMLElement {
  constructor(bannerconfig) {
    super();
    this.bannerconfig = bannerconfig;
  }
  connectedCallback() {
    this.render();
  }
  render() {
    return (this.innerHTML = `
      <section id=${this.bannerconfig.containerId}>
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
customElements.define("banner-component", Banner);
