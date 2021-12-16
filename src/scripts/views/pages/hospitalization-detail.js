import IndoHospitalBedSource from '../../data/indo-hospital-bed-source';
import UrlParser from '../../routes/url-parser';
import FindHelper from '../../utils/find-helper';
import {
  createBreadcrumbItem,
  createInfoHospitalTemplate,
  createListBedDetailHospitalTemplate,
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
          <h2 class="font-weight-bold" tabindex="0" style="font-size: 2.6em;">
            Detail Ketersediaan Tempat Tidur Pasien Rumah Sakit
          </h2>
        </header>
        <div class="row justify-content-center">
          <div class="col col-lg-8">  
              <nav aria-label="breadcrumb">

              </nav>
              <div class="info-hospital-wrapper">
                
              </div>

              <div class="available-bed-details my-5">
              
              </div>

          </div>
        </div>
      </div>
    </section>`;
  },

  async afterRender() {
    let provId = null;
    let cityId = null;
    if (typeof (Storage) !== 'undefined') {
      const breadcrumbContainer = document.querySelector('nav[aria-label=breadcrumb]');
      const partsPreviousUrl = JSON.parse(sessionStorage.getItem('previousUrl'));

      breadcrumbContainer.innerHTML = createBreadcrumbItem(partsPreviousUrl);
      provId = partsPreviousUrl.id_or_sub;
      cityId = partsPreviousUrl.second_id;
    } else {
      console.log('Oops your browser is not support session storage feature');
    }

    /* set info hospital */
    const partsUrl = UrlParser.parseActiveUrlWithoutCombiner();
    const hospitalId = partsUrl.second_id;
    const typeInpatient = partsUrl.type;
    let response = await IndoHospitalBedSource.indoHospitalBedByType(hospitalId, typeInpatient);
    let hospital = response.data;
    hospital.type = typeInpatient; // add type property, nilai type dipakai untuk membangun fungsi favorite hospital button

    response = await IndoHospitalBedSource.indoHospitalMap(hospitalId);
    const hospitalGmaps = response.data.gmaps;
    hospital.gmaps = hospitalGmaps; // add gmaps property

    response = await IndoHospitalBedSource.indoHospitalsByType(provId, cityId, typeInpatient);
    const hospitalsData = response.hospitals;

    const complementHospital = FindHelper.findHospitalById(hospitalId, hospitalsData);

    hospital = {
      ...hospital,
      ...complementHospital,
    };

    const infoHospitalWrapperElem = document.querySelector('.info-hospital-wrapper');
    infoHospitalWrapperElem.innerHTML = '';
    infoHospitalWrapperElem.appendChild(createInfoHospitalTemplate(hospital));

    /* set available bed details */
    const availableBedDetailsElem = document.querySelector('.available-bed-details');
    availableBedDetailsElem.innerHTML = '<h5 class="mb-3">Jenis Ruang Rawat : </h5>';
    createListBedDetailHospitalTemplate(availableBedDetailsElem, hospital.bedDetail);
  },
};

export default HospitalizationDetail;
