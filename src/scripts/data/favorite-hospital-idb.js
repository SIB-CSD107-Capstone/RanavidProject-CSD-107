import {
  openDB,
} from 'idb';
import CONFIG from '../globals/config';

const {
  IDB_NAME,
  IDB_VERSION,
  OBJECT_STORE_NAME,
} = CONFIG;

const dbPromise = openDB(IDB_NAME, IDB_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {
      keyPath: 'id',
    });
  },
});

const FavoriteHospitalIdb = {
  async getHospital(id) {
    if (!id) {
      return false;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllHospitals() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putHospital(hospital) {
    if (!hospital.hasOwnProperty('id')) {
      return false;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, hospital);
  },
  async deleteHospital(id) {
    if (!id) {
      return false;
    }
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};
export default FavoriteHospitalIdb;
