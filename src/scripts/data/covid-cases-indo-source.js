import API_ENDPOINT from '../globals/api-endpoint';

class CovidCasesIndoSource {
  static async totalCases() {
    const response = await fetch(API_ENDPOINT.STATISTIC);
    const responseJson = await response.json();
    return responseJson;
  }
};

export default CovidCasesIndoSource;
