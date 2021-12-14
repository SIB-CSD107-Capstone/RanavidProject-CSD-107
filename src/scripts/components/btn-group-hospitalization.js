class BtnGroupHospitalization extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>Kategori</p>
    <button class="btn btn-danger accessibility-44 active-shadow" type="button" id="btn-covid">
      <input class="cursor-pointer" type="radio" name="inpatient" id="covid" value="covid" checked>
      <label class="form-check-label cursor-pointer" for="covid">
        Covid
      </label>
    </button>

    <button class="active-shadow btn btn-danger ml-2 accessibility-44" type="button" id="btn-nonCovid">
      <input class="cursor-pointer" type="radio" name="inpatient" id="non-covid" value="non-covid">
      <label class="form-check-label cursor-pointer" for="non-covid">
        Non - Covid
      </label>
    </button>
    `;
  }
}

customElements.define('btn-group-hospitalization', BtnGroupHospitalization);
