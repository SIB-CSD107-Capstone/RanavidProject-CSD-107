import {
  createBreadcrumbItem,
  createHospitalizationDetailTemplate,
} from '../templates/template-creator';

const HospitalizationDetail = {
  async render() {
    const navJumbo = document.querySelector('nav');
    if (navJumbo.classList.contains('withJumbo')) {
      navJumbo.classList.remove('withJumbo');
    }
    const mainContentElem = document.querySelector('#main-content');
    if (mainContentElem.classList.contains('container')) {
      mainContentElem.classList.remove('container');
    }
    return `
    <section id="detail-rawat-inap" class="detail-rawat-inap py-5">
      <div class="container">
        <header class="text-center mb-5">
          <h2 class="font-weight-bold" tabindex="0" style="font-size: 3em;">
            Detail Rawat Inap
          </h2>
        </header>
        <div class="row justify-content-center">
          <div class="col col-lg-8">  
              <nav aria-label="breadcrumb">

              </nav>
              <div class="info-hospital-wrapper">
                <div class="title-wrapper d-flex">
                  <h4 class="rs-name" tabindex="0">RS Umum Puri Raharja</h4>
                  <button class="btn-favorite">
                    <span class="iconify like-icon" data-icon="fa-solid:heart" tabindex="0"
                      onclick="location.href='favorite_hospitals_page.html';" data-width="46" data-height="44"
                      title="favorite rumah sakit"></span>
                  </button>

                </div>

                <p class="rs-address" tabindex="0">Jl. WR Supratman 14</p>
                <div class="detail-util d-flex flex-column flex-md-row">
                  <a href="#" class="btn btn-outline-info btn-map pt-2 active-shadow mb-3 mb-md-0 mr-0 mr-md-3">Lihat Peta <span
                      class="iconify" data-icon="simple-icons:googlemaps"></span></a>
                  <button class="btn btn-info btn-telp active-shadow" onclick="location.href = 'tel:+085156590021'"><span
                      class="telp-icon  iconify" data-icon="clarity:phone-handset-solid"></span>
                    <span class="no-telp">081293334442</span></button>
                </div>
              </div>

              <div class="available-bed-details my-5">
              
              </div>

          </div>
        </div>
      </div>
    </section>`;
  },

  async afterRender() {
    // const hospitalizationDetailElem = document.querySelector('#detail-rawat-inap');
    // hospitalizationDetailElem.innerHTML = createHospitalizationDetailTemplate();
    const breadcrumbContainer = document.querySelector('nav[aria-label=breadcrumb]');
    console.log(breadcrumbContainer);

    if (typeof (Storage) !== 'undefined') {
      const partsPreviousUrl = JSON.parse(sessionStorage.getItem('previousUrl'));
      // console.log(JSON.parse(partsPreviousUrl));
      breadcrumbContainer.innerHTML = createBreadcrumbItem(partsPreviousUrl);
    } else {
      console.log('Oops your browser is not support session storage feature');
    }
  },
};

export default HospitalizationDetail;
