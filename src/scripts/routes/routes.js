import Home from '../views/pages/home';
import Search from '../views/pages/search';

const routes = {
  '/': Home,
  '/home': Home,
  '/rumah-sakit/:idprov/:idcity/1': Search,
  '/rumah-sakit/:idprov/:idcity/2': Search,
};

export default routes;
