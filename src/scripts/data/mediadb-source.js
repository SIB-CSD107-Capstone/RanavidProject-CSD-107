import API_ENDPOINT from '../globals/api-endpoint';

class MediaDBSource {
  static async Blog() {
    const response = await fetch(API_ENDPOINT.MEDIA);
    const responseJson = await response.json();
    return responseJson.blogs;
  }

  static async Vlog() {
    const response = await fetch(API_ENDPOINT.VLOG);
    const responseJson = await response.json();
    return responseJson.vlogs;
  }

  static async detailBlog(blogId) {
    const response = await fetch(API_ENDPOINT.BlOGDETAIL(blogId));
    return response.json();
  }
}

export default MediaDBSource;
