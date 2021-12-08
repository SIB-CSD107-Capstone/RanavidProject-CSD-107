import IndoHospitalBedSource from '../data/indo-hospital-bed-source';

const OptionElementInitiator = {
  async init({
    selectProvinceElem,
    selectCityElem,
  }) {
    this._selectProvinceElem = selectProvinceElem;
    this._selectCityElem = selectCityElem;

    await this._renderOptions();
  },

  async _renderOptions() {
    await this._renderProvinceOptions();

    this._selectProvinceElem.addEventListener('change', async (event) => {
      await this._renderCityOptions(event.target.value);
    });
  },

  async _renderProvinceOptions() {
    const indoProvinces = await IndoHospitalBedSource.indoProvinces();

    let optionsProvinces = '<option selected value>Pilih Provinsi ...</option>';
    indoProvinces.provinces.forEach((province) => {
      optionsProvinces += `
    <option value="${province.id}">${province.name}</option>
    `;
    });

    this._selectProvinceElem.innerHTML = optionsProvinces;
  },

  async _renderCityOptions(selectProvinceValue) {
    const indoCities = await IndoHospitalBedSource.indoCitiesDistricts(selectProvinceValue);

    let optionCities = '<option selected value>Pilih Kab/Kota ...</option>';
    indoCities.cities.forEach((city) => {
      optionCities += `
      <option value="${city.id}">${city.name}</option>
      `;
    });

    this._selectCityElem.innerHTML = optionCities;
  },
};

export default OptionElementInitiator;
