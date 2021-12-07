import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/_responsive.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@iconify/iconify';
import $ from "jquery";
import {
  UrlParser
} from './routes/url-parser';

const ButtonsTypeOfHospitalization = document.querySelectorAll('button.form-check');

ButtonsTypeOfHospitalization.forEach((btnType) => {
  btnType.addEventListener('click', (event) => {
    if (event.target.classList.contains('form-check')) {
      event.target.firstElementChild.checked = true;
    }
  })
});

// rotate up-arrow-icon on event collapse accordion
$('.multi-collapse').on('show.bs.collapse', function () {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = "rotate(0deg)";
});

$('.multi-collapse').on('hide.bs.collapse', function () {
  this.previousElementSibling.querySelector('.up-arrow-icon').style.transform = "rotate(180deg)";
});

window.addEventListener('hashchange', (event) => {
  console.log(UrlParser.parseActiveUrlWithCombiner());
})