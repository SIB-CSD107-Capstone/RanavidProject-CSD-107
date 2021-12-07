import Home from '../views/pages/home';
import Search from '../views/pages/search';
import HospitalizationDetail from '../views/pages/hospitalization-detail';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/rumah-sakit/:idprov/:idcity/1': Search,
  '/rumah-sakit/:idprov/:idcity/2': Search,
  '/rumah-sakit/detail-rawat-inap/:idhospital/1': HospitalizationDetail,
  '/rumah-sakit/detail-rawat-inap/:idhospital/2': HospitalizationDetail,
  '/favorite': Favorite,
  '/about-us': AboutUs,
};

export default routes;
