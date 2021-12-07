/* eslint-disable no-undef */
const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },

  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id_or_sub: urlsSplits[2] || null,
      second_id: urlsSplits[3] || null,
      type: urlsSplits[4] || null,
    };
  },
  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id_or_sub ? `/${this._checkDetailUrl(splitedUrl.id_or_sub)}` : '')
      + (splitedUrl.second_id ? `/${(splitedUrl.id_or_sub === 'detail-rawat-inap') ? ':idhospital' : ':idcity'}` : '')
      + (splitedUrl.type ? `/${splitedUrl.type}` : '');
  },

  _checkDetailUrl(partUrl) {
    if (!partUrl) {
      return false;
    } if (partUrl === 'detail-rawat-inap') {
      return partUrl;
    }
    return ':idprov';
  },
};

export default UrlParser;
