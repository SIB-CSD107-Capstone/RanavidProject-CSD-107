const BtnTelpInitiator = {
  init({
    btnTelp,
    hospitalPhone,
  }) {
    this._btnTelp = btnTelp;
    this._hospitalPhone = hospitalPhone;

    this._renderNoTelp();
  },

  _renderNoTelp() {
    if (!this._hospitalPhone) {
      this._btnTelp.innerHTML = `
      <span
            class="telp-icon  iconify" data-icon="clarity:phone-handset-solid"></span>
          <span class="no-telp">hotline tidak tersedia</span>
      `;
    } else {
      this._btnTelp.setAttribute('onclick', `location.href = 'tel:${this._hospitalPhone}'`);
      this._btnTelp.innerHTML = `
      <span
            class="telp-icon  iconify" data-icon="clarity:phone-handset-solid"></span>
          <span class="no-telp">${this._hospitalPhone}</span>
      `;
    }
  },
};

export default BtnTelpInitiator;
