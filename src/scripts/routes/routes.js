import Home from '../views/pages/home';
import Search from '../views/pages/search';
import HospitalizationDetail from '../views/pages/hospitalization-detail';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';
import Blog from '../views/pages/blog';
import DetailBlog from '../views/pages/detail-blog';

const routes = {
  '/': Home,
  '/home': Home,
  '/rumah-sakit/:provId/:cityId/1': Search,
  '/rumah-sakit/:provId/:cityId/2': Search,
  '/rumah-sakit/detail-rawat-inap/:hospitalId/1': HospitalizationDetail,
  '/rumah-sakit/detail-rawat-inap/:hospitalId/2': HospitalizationDetail,
  '/favorite': Favorite,
  '/about-us': AboutUs,
  '/blog': Blog,
  '/blog/:blogId': DetailBlog,
};

export default routes;
