class RsBedIndoSource {
  static async indoProvinces() {
    const response = await fetch('https://rs-bed-covid-api.vercel.app/api/get-provinces');
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoCitiesDistricts(provId) {
    const response = await fetch(`https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=${provId}`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoHospitalsByType(provId, cityId, type) {
    const response = await fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=${provId}&cityid=${cityId}&type=${type}`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoHospitalBedByType(hospitalId, type) {
    const response = await fetch(`https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=${hospitalId}&type=${type}`);
    const responseJson = await response.json();
    return responseJson;
  }

  static async indoHospitalMap(hospitalId) {
    const response = await fetch(`https://rs-bed-covid-api.vercel.app/api/get-hospital-map?hospitalid=${hospitalId}`);
    const responseJson = await response.json();
    return responseJson;
  }
};

export default RsBedIndoSource;
