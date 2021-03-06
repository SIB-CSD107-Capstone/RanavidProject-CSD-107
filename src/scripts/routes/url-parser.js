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
    const result = (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
      + (splitedUrl.id_or_sub ? `/${this._checkDetailUrl(splitedUrl)}` : '')
      + (splitedUrl.second_id ? `/${(splitedUrl.id_or_sub === 'detail-rawat-inap') ? ':hospitalId' : ':cityId'}` : '')
      + (splitedUrl.type ? `/${splitedUrl.type}` : '');
    return result;
  },

  _checkDetailUrl(splitedUrl) {
    if (!splitedUrl.id_or_sub) {
      return false;
    }
    if (splitedUrl.id_or_sub === 'detail-rawat-inap') {
      return splitedUrl.id_or_sub;
    }

    if (splitedUrl.resource === 'blog') {
      return ':blogId';
    }
    return ':provId';
  },
};

export default UrlParser;
