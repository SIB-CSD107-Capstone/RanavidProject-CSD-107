import UrlParser from '../../routes/url-parser';
import MediaDBSource from '../../data/mediadb-source';
import { createDetailArticleContent } from '../templates/template-creator';

const DetailBlog = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
    const mainContent = document.querySelector('#main-content');
    mainContent.setAttribute('class', 'container');
    return `
    <section class="blog-detail">
      <div class="row">
        <div class="col-12 col-md-8 mx-auto">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-transparent pl-0">
                <li class="breadcrumb-item"><a href="#/blog">Blog</a></li>
                <li class="breadcrumb-item active" aria-current="page">Detail</li>
              </ol>
            </nav>
          <div class="article-content">
          </div>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const blogId = url.id_or_sub;
    const {
      type,
    } = url;
    const { blog } = await MediaDBSource.detailBlog(blogId, type);
    const articleContent = document.querySelector('.article-content');
    articleContent.innerHTML = createDetailArticleContent(blog);
  },
};

export default DetailBlog;
