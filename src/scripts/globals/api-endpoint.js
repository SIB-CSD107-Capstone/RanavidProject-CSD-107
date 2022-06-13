import CONFIG from './config';

const API_ENDPOINT = {
  STATISTIC: `${CONFIG.STATISTIC_URL}/indonesia`,
  RSBEDPROV: `${CONFIG.RSBED_URL}api/get-provinces`,
  RSBEDCITY: (provId) => `${CONFIG.RSBED_URL}api/get-cities?provinceid=${provId}`,
  RSIDHOSP: (provId, cityId, type) => `${CONFIG.RSBED_URL}api/get-hospitals?provinceid=${provId}&cityid=${cityId}&type=${type}`,
  RSBEDTYPE: (hospitalId, type) => `${CONFIG.RSBED_URL}api/get-bed-detail?hospitalid=${hospitalId}&type=${type}`,
  RSBEDMAP: (hospitalId) => `${CONFIG.RSBED_URL}api/get-hospital-map?hospitalid=${hospitalId}`,
  MEDIA: `${CONFIG.MEDIA_URL}blogs`,
  VLOG: `${CONFIG.MEDIA_URL}vlog`,
  BlOGDETAIL: (id) => `${CONFIG.MEDIA_URL}blogs/${id}`,
};

export default API_ENDPOINT;
