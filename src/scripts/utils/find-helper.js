const FindHelper = {
  findProviceById(provId, provinces) {
    return provinces.find((province) => province.id === provId);
  },

  findCityById(cityId, cities) {
    return cities.find((city) => city.id === cityId);
  },
};

export default FindHelper;
