import FavoriteHospitalIdb from '../data/favorite-hospital-idb';

const FavoriteButtonInitiator = {
  async init({
    favoriteButton,
    hospital,
  }) {
    this._favoriteButton = favoriteButton;
    this._hospital = hospital;

    await this._renderButton();
  },

  async _renderButton() {
    if (this._hospital.type === '1') {
      if (!(this._hospital.id.substr(this._hospital.id.length - 5) === 'covid')) {
        this._hospital.id += 'covid';
      }
    }

    const {
      id,
      type,
    } = this._hospital;

    if (await this._isHospitalExist(id, type)) {
      this._renderFavorited(id);
    } else {
      this._renderFavorite();
    }
  },

  async _isHospitalExist(id, type) {
    const hospital = await FavoriteHospitalIdb.getHospital(id);

    return (hospital) ? hospital.type === type : false;
  },

  _renderFavorite() {
    this._favoriteButton.querySelector('.like-icon').style.color = 'gray';
    this._favoriteButton.addEventListener('click', async () => {
      await FavoriteHospitalIdb.putHospital(this._hospital);
      this._renderButton();
    });
  },

  _renderFavorited(id) {
    this._favoriteButton.querySelector('.like-icon').style.color = 'red';
    this._favoriteButton.addEventListener('click', async () => {
      await FavoriteHospitalIdb.deleteHospital(id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
