class HospitalList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set hospitals(hospitals) {
    this._hospitals = hospitals;
    this.render();
  }

  render() {
    this.renderError('test eslint');
  }

  renderError(message) {
    return `<h2 class="text-center text-secondary">${message}</h2>`;
  }
}

customElements.define('hospital-list', HospitalList);
