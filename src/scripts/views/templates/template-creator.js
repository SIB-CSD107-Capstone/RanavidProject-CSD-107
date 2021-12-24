import '../../components/search-bar-content';
import '../../components/statistic-section-content';
import '../../components/hospital-list';
import '../../components/info-hospital';
import '../../components/bed-detail-item';
import '../../components/btn-group-hospitalization';

const createSearchBarTemplate = (flag) => {
  const searcBarContent = `<search-bar-content data-flag="${flag}"></search-bar-content>`;
  return searcBarContent;
};

const createSearchButton = (flag) => {
  let btnSearch = '';
  if (flag === 'in-landing-page') {
    btnSearch = `
    <button type="button" class="btn btn-search btn-danger p-2" id="btn-cari-rs" aria-label="cari rumah sakit">Cari</button>
    `;
  } else {
    btnSearch = `
    <button class="btn btn-danger btn-cari w-100" tabindex="0" id="btn-cari-rs">Cari <span class="iconify ml-2"
                  data-icon="fa-solid:arrow-right" style="color: white;" data-width="15"></span></button>
    `;
  }
  return btnSearch;
};

const createStatisticContentTemplate = (data) => {
  const statisticContentElem = document.createElement('statistic-section-content');
  statisticContentElem.data = data;
  return statisticContentElem;
};

const createSearchResultTemplate = (hospitals, inpatientType) => {
  const hospitalListElem = document.createElement('hospital-list');

  hospitalListElem.hospitals = hospitals;
  hospitalListElem.inpatientType = inpatientType;
  return hospitalListElem;
};

const createInfoAvailableBedButtonTemplate = (bedAvailability = 0) => {
  if (bedAvailability === undefined) {
    bedAvailability = 0;
  };
  return `
  <button tabindex="0" class="btn btn-primary ${(bedAvailability) ? 'btn-rs-ready' : 'btn-rs-not'} px-3 rounded-pill">
                    Tersedia ${bedAvailability} Kamar
                  </button>
  `;
};

const createBreadcrumbItem = (partsPreviousUrl) => {
  if (partsPreviousUrl.resource === 'favorite') {
    return `
  <ol class="breadcrumb bg-transparent pl-0">
    <li class="breadcrumb-item"><a href="#/favorite">favorite</a></li>
    <li class="breadcrumb-item active" aria-current="page">Detail</li>
  </ol>
  `;
  }
  const combinePartsPreviousUrl = `/#/${partsPreviousUrl.resource}/${partsPreviousUrl.id_or_sub}/${partsPreviousUrl.second_id}/${partsPreviousUrl.type}`;

  return `
      <ol class="breadcrumb bg-transparent pl-0">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="${combinePartsPreviousUrl}">Pencarian</a></li>
        <li class="breadcrumb-item active" aria-current="page">Detail</li>
      </ol>
  `;
};

const createInfoHospitalTemplate = (hospital) => {
  const infoHospitalElem = document.createElement('info-hospital');
  infoHospitalElem.hospital = hospital;
  return infoHospitalElem;
};

const createListBedDetailHospitalTemplate = (bedDetailContainer, bedsDetails) => {
  if (bedsDetails.length < 1) {
    bedDetailContainer.innerHTML = '<div class="text-center alert alert-danger">Data Rawat Inap Rumah Sakit Tidak Tersedia</div>';
  }
  bedsDetails.forEach((bedDetail, index) => {
    bedDetail.index = index;
    const bedDetailElem = document.createElement('bed-detail-item');
    bedDetailElem.detail = bedDetail;
    bedDetailContainer.appendChild(bedDetailElem);
  });
};

const createBtnGroupHospitalizationTemplate = () => {
  const btnGroupHospitalizationElem = document.createElement('btn-group-hospitalization');
  return btnGroupHospitalizationElem;
};

const createAboutWebTemplate = () => `
<div class="row d-flex align-items-center wrap-about">
    <div class="col-12 col-lg-6 gambar-about">
    <picture>
      <source media="(max-width: 576px)" data-srcset="./img/corona-2.webp">
        <source media="(max-width: 576px)" data-srcset="./img/corona-2-small.png">
        <source media="(max-width: 992px)" data-srcset="./img/corona-2-medium.png">
        <source data-srcset="./img/corona-2.webp">
        <source data-srcset="./img/corona-2.jpg">
        <img class="lazyload" data-src="./img/corona-2.jpg" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" alt="Tentang Aplikasi" tabindex="0">
      </picture>
    </div>
    <div class="col-12 col-lg-6 text-about">
      <p tabindex="0">Tentang Aplikasi</p>
      <h1 class="heading-1" tabindex="0">Mengenal Website Ranavid <span class="d-red">.</span></h1>
      <p tabindex="0">Pada tahun 2021 ini sudah 2 tahun lamanya pandemi COVID 19 melanda negeri Indonesia kita tercinta, tidak sedikit orang yang terinfeksi virus ini yang membutuhkan perawatan khusus.  Pada saat ini sudah banyak rumah sakit yang membuat layanan kesehatan khusus pasien covid 19, tetapi apakah masyarakat dapat mengetahui dimana saja rumah sakit yang terdapat layanan khusus pasien covid 19?. Dari alasan tersebut maka kami membuat aplikasi pencarian rumah sakit penyedia layanan kuhusus covid-19.
      </p>
    </div>
  </div>
`;

const createFiturWebTemplate = () => `
<p tabindex="0">Mengenal Fitur</p>
  <h2 class="heading-2" tabindex="0">Fitur yang Ada Dalam Website <span class="d-red">.</span></h2>
  <div class="col-12 col-md-10 mx-auto d-flex flex-column flex-md-row fitur-card">
    <div class="col-12 col-md-4 mb-4 container-fitur">
      <div class="card h-100 border-0 text-center">
        <div class="logo-fitur d-flex justify-content-center align-items-center mx-auto">
          <span class="iconify" data-icon="fa-solid:chart-bar" style="color: white;" data-width="35"></span>
        </div>
        <div class="card-body body-fitur">
          <h3 class="card-title heading-3" tabindex="0">Statistik Covid UpToDate</h3>
          <p class="card-text" tabindex="0">Data statistik kasus Covid-19 di Indonesia yang diambil dari API terupdate.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 mb-4 container-fitur">
      <div class="card h-100 border-0 text-center">
        <div class="logo-fitur d-flex justify-content-center align-items-center mx-auto">
          <span class="iconify" data-icon="fa-solid:search" style="color: white;" data-width="35"></span>
        </div>
        <div class="card-body body-fitur">
          <h3 class="card-title heading-3" tabindex="0">Pencarian Rumah Sakit</h3>
          <p class="card-text" tabindex="0">Mencari Rumah Sakit berdasarkan kota/kabupaten per provinsi beserta detail ketersediaan rawat inap.</p>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 container-fitur">
      <div class="card h-100 border-0 text-center">
        <div class="logo-fitur d-flex justify-content-center align-items-center mx-auto">
          <span class="iconify" data-icon="fa-solid:book-medical" style="color: white;" data-width="35"></span>
        </div>
        <div class="card-body body-fitur">
          <h3 class="card-title heading-3" tabindex="0">Blog Edukasi Tentang Covid19</h3>
          <p class="card-text" tabindex="0">Berisi artikel-artikel dan video yang menginspirasi saat pandemi Covid-19 ini.</p>
        </div>
      </div>
    </div>
  </div>
`;

const createTeamPengembangTemplate = () => `
<p tabindex="0">Mari Berkenalan</p>
  <h2 class="heading-2" tabindex="0">Team Pengembang Website <span class="d-red">.</span></h2>

  <div class="col-12 col-md-10 mx-auto d-flex flex-column flex-md-row">
    <div class="col-12 col-md-6 mb-4">
      <div class="card h-100 team-card">
        <img class="lazyload"
          data-src="https://res.cloudinary.com/ikram20/image/upload/v1639216877/ikram_dqlgii.png"
          class="card-img-top" alt="Ikram Maulana" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" tabindex="0">
        <div class="card-body pb-3">
          <h3 class="card-title team-name" tabindex="0">Ikram Maulana</h3>
          <p class="card-text team-id" tabindex="0">F267R4264</p>
        </div>
        <div class="i-social mb-4">
        <a href="https://instagram.com/Ikram_Maulana" target="_blank" rel="noreferrer" class="icon-about"><span class="iconify" data-icon="fa-brands:instagram-square"
        style="color: #121e2a;" data-width="24" data-height="24"></span></a>
    <a href="https://github.com/Ikram-Maulana" target="_blank" rel="noreferrer" class="icon-about"><span class="iconify" data-icon="fa-brands:github-square" style="color: #121e2a;"
        data-width="24" data-height="24"></span></a>
    <a href="https://www.linkedin.com/in/ikram-maulana-54a152217/" target="_blank" rel="noreferrer" class="icon-about"><span class="iconify" data-icon="fa-brands:linkedin" style="color: #121e2a;"
        data-width="24" data-height="24"></span></a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 mb-4">
      <div class="card h-100 team-card">
        <img class="lazyload"
          data-src="https://res.cloudinary.com/dnjfsndzc/image/upload/v1639196096/foto1_dvbsnw.jpg"
          class="card-img-top" alt="Febrianto" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" tabindex="0">
        <div class="card-body pb-3">
          <h3 class="card-title team-name" tabindex="0">Febrianto</h3>
          <p class="card-text team-id" tabindex="0">F190R7147</p>
        </div>
        <div class="i-social mb-4">
          <a href="https://www.instagram.com/febrianto.15/" target="_blank" rel="noreferrer" class="icon-about"><span class="iconify" data-icon="fa-brands:instagram-square"
              style="color: #121e2a;" data-width="24" data-height="24"></span></a>
          <a href="https://github.com/Febrianto752" target="_blank" rel="noreferrer" class="icon-about"><span class="iconify" data-icon="fa-brands:github-square" style="color: #121e2a;"
              data-width="24" data-height="24"></span></a>
          <a href="https://www.linkedin.com/in/febrianto752/" target="_blank" rel="noreferrer" class="icon-about"><span class="iconify" data-icon="fa-brands:linkedin" style="color: #121e2a;"
              data-width="24" data-height="24"></span></a>
        </div>
      </div>
    </div>
  </div>
`;

const createAboutCovid = () => `
<div class="row d-flex align-items-center wrap-about">
        <div class="col-12 col-lg-6 text-about">
          <p tabindex="0">Pandemi COVID19</p>
          <h1 class="heading-1" tabindex="0">Tentang Virus Corona <span class="d-red">.</span></h1>
          <p tabindex="0">Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus
            yang menyerang
            sistem pernapasan. Penyakit akibat infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan
            gangguan
            ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.
          </p>
        </div>
        <div class="col-12 col-lg-6 gambar-about">
        <picture>
      <source media="(max-width: 576px)" data-srcset="./img/corona-1.webp">
        <source media="(max-width: 576px)" data-srcset="./img/corona-1-small.png">
        <source media="(max-width: 992px)" data-srcset="./img/corona-1-medium.png">
        <source data-srcset="./img/corona-1.webp">
        <source data-srcset="./img/corona-1.png">
        <img class="lazyload" data-src="./img/corona-1.png" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" alt="Orang memakai masker" tabindex="0">
      </picture>
        </div>
      </div>
`;

const createBlogPost = (blog) => `
<div class="col mb-4">
          <div class="card h-100 border-0 custom-blog-post">
            <img data-src="${blog.blogImages}" class="card-img-top lazyload" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" alt="${blog.title}" tabindex="0" onclick="location.href='#/blog/${blog.id}';">
            <div class="card-body p-0">
              <h3 class="card-title heading-3" tabindex="0" onclick="location.href='#/blog/${blog.id}';">${blog.title}</h3>
              <p class="card-text" tabindex="0">${blog.content}</p>
              <div class="btn btn-danger read-btn" tabindex="0" onclick="location.href='#/blog/${blog.id}';">Baca Selengkapnya <span class="iconify ml-2"
                  data-icon="fa-solid:angle-right"></span></div>
            </div>
          </div>
        </div>
`;

const createVlogPost = (vlog) => `
<div class="col mb-4">
          <div class="card h-100 custom-video-post">
            <img data-src="${vlog.images}" class="card-img-top lazyload" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" alt="${vlog.title}" tabindex="0">
            <div class="card-body">
              <h3 class="card-title heading-3"><a href="#" data-toggle="modal"
                  data-target="#videoModals-${vlog.id}">${vlog.title}</a></h3>
            </div>
          </div>
        </div>
`;

const createSearchSectionAds = () => `
      <h1 class="heading-1" tabindex="0">Cari Rawat Inap Rumah Sakit</h1>
      <p tabindex="0">Ranavid App membantu anda dalam mengecek ketersediaan tempat tidur pasien rawat inap rumah sakit</p>
      <div class="btn btn-danger to-search-btn" tabindex="0" onclick="location.href='/';">Cari Sekarang <span class="iconify ml-2"
          data-icon="fa-solid:angle-right"></span></div>
`;

const createModalList = (vlog) => `
<div class="modal fade" id="videoModals-${vlog.id}" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body modal-custom" id="ytModals">
          <iframe class="mv-edukasi" src="${vlog.content}"">
          </iframe>
        </div>
      </div>
    </div>
    </div>
`;

const createDetailArticleContent = (blog) => `
<p class="sub-detail" tabindex="0">Detail Artikel</p>
<h1 class="heading-1" tabindex="0">${blog.title}</h1>
<p class="date-detail" tabindex="0">Diposting pada tanggal ${blog.createdAt}</p>
<img data-src="${blog.blogImages}" alt="${blog.title}" class="img-fluid lazyload" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';" tabindex="0">
<div class="blog-text">
  <p tabindex="0">
    ${blog.content}
  </p>
`;

export {
  createSearchBarTemplate,
  createStatisticContentTemplate,
  createSearchButton,
  createSearchResultTemplate,
  createInfoAvailableBedButtonTemplate,
  createAboutWebTemplate,
  createFiturWebTemplate,
  createTeamPengembangTemplate,
  createAboutCovid,
  createBlogPost,
  createVlogPost,
  createSearchSectionAds,
  createModalList,
  createDetailArticleContent,
  createBreadcrumbItem,
  createInfoHospitalTemplate,
  createListBedDetailHospitalTemplate,
  createBtnGroupHospitalizationTemplate,
};
