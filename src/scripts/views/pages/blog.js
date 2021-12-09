import {
  createAboutCovid,
  createBlogPost,
  createVlogPost,
  createSearchSectionAds,
} from '../templates/template-creator';
import MediaDBSource from '../../data/mediadb-source';

const Blog = {
  async render() {
    const mainContent = document.querySelector('#main-content');
    mainContent.setAttribute('class', 'container');
    return `
    <!-- About Covid -->
    <section class="about-covid">
    </section>
    <!-- Blog Post -->
    <section class="blog-post">
    <p tabindex="0">Blog Edukasi</p>
    <h2 class="heading-2" tabindex="0">Postingan Terbaru <span class="d-red">.</span></h2>
    <div class="row row-cols-1 row-cols-md-3 blog-list">
    </div>
    </section>
    <!-- Vlog Post -->
    <section class="video-post">
      <p tabindex="0">Video Edukasi</p>
      <h2 class="heading-2" tabindex="0">Video Terbaru <span class="d-red">.</span></h2>
      <div class="row row-cols-1 row-cols-md-4 vlog-list">
      </div>
    </section>
    <!-- Search Ads -->
    <section class="search-hospital">
    </section>
    `;
  },

  async afterRender() {
    const aboutContainer = document.querySelector('.about-covid');
    aboutContainer.innerHTML = createAboutCovid();
    const blogs = await MediaDBSource.Blog();
    const blogList = document.querySelector('.blog-list');
    blogs.forEach((blog) => {
      blogList.innerHTML += createBlogPost(blog);
    });
    const vlogs = await MediaDBSource.Vlog();
    const vlogList = document.querySelector('.vlog-list');
    vlogs.forEach((vlog) => {
      vlogList.innerHTML += createVlogPost(vlog);
    });
    const searchAds = document.querySelector('.search-hospital');
    searchAds.innerHTML = createSearchSectionAds();
  },
};

export default Blog;
