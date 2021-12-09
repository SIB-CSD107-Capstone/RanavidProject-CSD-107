import CONFIG from './config';

const API_ENDPOINT = {
  STATISTIC: `${CONFIG.STATISTIC_URL}api/indonesia`,
  MEDIA: `${CONFIG.MEDIA_URL}blogs`,
  VLOG: `${CONFIG.MEDIA_URL}vlog`,
  BlOGDETAIL: (id) => `${CONFIG.MEDIA_URL}blogs/${id}`,
};

export default API_ENDPOINT;
