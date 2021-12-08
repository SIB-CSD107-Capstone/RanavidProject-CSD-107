import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@iconify/iconify';
import $ from 'jquery';
import App from './views/app';
import RsBedIndoSource from './data/indo-hospital-bed-api';
import DataCovidIndo from './data/data-covid-indo-api';

// rotate up-arrow-icon on event collapse accordion
$('.multi-collapse').on('show.bs.collapse', () => {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = 'rotate(0deg)';
});

$('.multi-collapse').on('hide.bs.collapse', () => {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = 'rotate(180deg)';
});

const app = new App({
  content: document.querySelector('#main-content'),
});

window.addEventListener('load', () => {
  app.renderPage();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

const getApi = async () => {
  await RsBedIndoSource.indoProvinces();
  await RsBedIndoSource.indoCitiesDistricts('32prop');
  await RsBedIndoSource.indoHospitalsByType('32prop', '3216', 1);
  await RsBedIndoSource.indoHospitalBedByType('3216399', 1);
  await RsBedIndoSource.indoHospitalMap('3216399');
  await DataCovidIndo.totalCases();
};

getApi();
