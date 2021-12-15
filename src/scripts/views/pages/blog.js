import {
  createAboutCovid,
  createBlogPost,
  createVlogPost,
  createSearchSectionAds,
  createModalList,
} from '../templates/template-creator';
import MediaDBSource from '../../data/mediadb-source';

const Blog = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
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
    <!-- Modals -->
    <div class="modal-list">
    </div>
    `;
  },

  async afterRender() {
    document.title = 'Blog - Ranavid Apps';
    const aboutContainer = document.querySelector('.about-covid');
    aboutContainer.innerHTML = createAboutCovid();
    const blogs = await MediaDBSource.Blog();
    const blogList = document.querySelector('.blog-list');
    if (blogs.length > 0) {
      blogs.forEach((blog) => {
        blogList.innerHTML += createBlogPost(blog);
      });
    } else {
      this._renderBlogEmpty();
    }
    const vlogs = await MediaDBSource.Vlog();
    const vlogList = document.querySelector('.vlog-list');
    const modalList = document.querySelector('.modal-list');
    if (vlogs.length > 0) {
      vlogs.forEach((vlog) => {
        vlogList.innerHTML += createVlogPost(vlog);
        modalList.innerHTML += createModalList(vlog);
      });
    } else {
      this._renderVlogEmpty();
    }
    const searchAds = document.querySelector('.search-hospital');
    searchAds.innerHTML = createSearchSectionAds();
  },

  _renderBlogEmpty() {
    const blogPost = document.querySelector('.blog-post');
    blogPost.innerHTML += `
    <div class="alert alert-danger" role="alert">
  Data tidak ditemukan!
</div>
    `;
  },

  _renderVlogEmpty() {
    const videoPost = document.querySelector('.video-post');
    videoPost.innerHTML += `
    <div class="alert alert-danger" role="alert">
  Data tidak ditemukan!
</div>
    `;
  },
};

export default Blog;
