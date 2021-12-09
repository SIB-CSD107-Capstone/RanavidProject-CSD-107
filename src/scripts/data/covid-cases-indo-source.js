class CovidCasesIndoSource {
  static async totalCases() {
    const response = await fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia');
    const responseJson = await response.json();
    return responseJson;
  }
};

export default CovidCasesIndoSource;
