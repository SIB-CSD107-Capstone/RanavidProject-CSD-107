import API_ENDPOINT from '../globals/api-endpoint';

class IndoHospitalBedSource {
  static async indoProvinces() {
    const response = await fetch(API_ENDPOINT.RSBEDPROV);
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoCitiesDistricts(provId) {
    const response = await fetch(API_ENDPOINT.RSBEDCITY(provId));
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoHospitalsByType(provId, cityId, type) {
    const response = await fetch(API_ENDPOINT.RSIDHOSP(provId, cityId, type));
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoHospitalBedByType(hospitalId, type) {
    const response = await fetch(API_ENDPOINT.RSBEDTYPE(hospitalId, type));
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoHospitalMap(hospitalId) {
    const response = await fetch(API_ENDPOINT.RSBEDMAP(hospitalId));
    const responseJson = await response.json();
    return responseJson;
  }
};

export default IndoHospitalBedSource;
