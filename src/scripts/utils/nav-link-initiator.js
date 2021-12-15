import UrlParser from '../routes/url-parser';

const NavLinkInitiator = {
  init({
    navLinks,
  }) {
    this._navLinks = navLinks;

    this._renderNavLinkActiving();
  },

  _renderNavLinkActiving(navLinks) {
    const partsUrl = UrlParser.parseActiveUrlWithoutCombiner();

    if (partsUrl.resource === '/' || partsUrl.resource === '/home') {

    }
  }
}

export default NavLinkInitiator;