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
    const {
      id,
    } = this._hospital;

    if (await this._isHospitalExist(id)) {
      this._renderFavorited(id);
    } else {
      this._renderFavorite();
    }
  },

  async _isHospitalExist(id) {
    const hospital = await FavoriteHospitalIdb.getHospital(id);
    return !!hospital;
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
