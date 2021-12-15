const FindHelper = {
  findProviceById(provId, provinces) {
    return provinces.find((province) => province.id === provId);
  },

  findCityById(cityId, cities) {
    return cities.find((city) => city.id === cityId);
  },

  findHospitalById(hospitalId, hospitals) {
    return hospitals.find((hospital) => hospital.id === hospitalId);
  },
};

export default FindHelper;
