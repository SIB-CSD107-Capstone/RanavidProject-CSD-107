import API_ENDPOINT from '../globals/api-endpoint';

class MediaDBSource {
  static async Blog() {
    const response = await fetch(API_ENDPOINT.MEDIA);
    const responseJson = await response.json();
    return responseJson.blogs;
  }
}

export default MediaDBSource;
