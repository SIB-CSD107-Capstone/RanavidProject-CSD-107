import '../../components/search-bar-content';
import '../../components/statistic-section-content';
import '../../components/hospital-list';
import '../../components/info-hospital';
import '../../components/bed-detail-item';

const createSearchBarTemplate = (flag) => {
  // const searcBarContent = document.createElement('search-bar');
  const searcBarContent = `<search-bar-content data-flag="${flag}"></search-bar-content>`;
  return searcBarContent;
};

const createSearchButton = (flag) => {
  let btnSearch = '';
  if (flag === 'in-landing-page') {
    btnSearch = `
    <button type="button" class="btn btn-search btn-danger" id="btn-cari-rs" aria-label="cari rumah sakit">Cari</button>
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

const createInfoAvailableBedButtonTemplate = (bedAvailability) => `
<button tabindex="0" class="btn btn-primary ${(bedAvailability) ? 'btn-rs-ready' : 'btn-rs-not'} px-3 rounded-pill">
                  Tersedia ${bedAvailability} Kamar
                </button>
`;

const createHospitalizationDetailTemplate = () => `
<div class="container">
  <header class="text-center mb-5">
    <h2 class="font-weight-bold" tabindex="0" style="font-size: 3em;">
      Detail Rawat Inap
    </h2>
  </header>
  <div class="row justify-content-center">
    <div class="col col-lg-8">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent pl-0">
          <li class="breadcrumb-item"><a href="/">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Pencarian</a></li>
          <li class="breadcrumb-item active" aria-current="page">Detail</li>
        </ol>
      </nav>
      <div class="info-hospital">
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
        <a href="#" class="btn btn-outline-info btn-map pt-2 active-shadow mb-3 mb-md-0 mr-0 mr-md-3">Lihat Peta <span class="iconify"
        data-icon="simple-icons:googlemaps"></span></a>
    <button class="btn btn-info btn-telp active-shadow" onclick="location.href = 'tel:+085156590021'"><span class="telp-icon  iconify"
        data-icon="clarity:phone-handset-solid"></span>
      <span class="no-telp">081293334442</span></button>
        </div>
      </div>
        

      <!-- detail layanan rawat inap  -->
      <div class="available-bed-details my-5">
        <div class="card mb-3">
          <button class="card-header btn btn-block bg-danger" data-toggle="collapse" data-target="#card-1"
            aria-expanded="false" aria-controls="multiCollapseExample2" tabindex="0">
            <div class="bed-info">
              <h5 class="text-left text-white">Isolasi Tanpa Tekanan Negatif</h5>
              <p class="text-left text-white p-0 m-0">data diperbarui 40 menit yang lalu</p>
            </div>

            <span class="iconify up-arrow-icon" data-icon="fa-solid:angle-up"></span>
          </button>
          <div class="collapse multi-collapse" id="card-1">
            <div class="card-body">
              <div class="box bed bg-primary">
                <p tabindex="0">Tempat Tidur</p>
                <p tabindex="0">5</p>
              </div>
              <div class="box empty bg-success">
                <p tabindex="0">Kosong</p>
                <p tabindex="0">5</p>
              </div>
              <div class="box used bg-danger">
                <p tabindex="0">Terpakai</p>
                <p tabindex="0">5</p>
              </div>
            </div>
          </div>

        </div>
        <div class="card mb-3">
          <button class="card-header btn btn-block bg-danger" data-toggle="collapse" data-target="#card-2"
            aria-expanded="false" aria-controls="multiCollapseExample2" tabindex="0">
            <div class="bed-info">
              <h5 class="text-left text-white">Isolasi Tanpa Tekanan Negatif</h5>
              <p class="text-left text-white p-0 m-0">data diperbarui 40 menit yang lalu</p>
            </div>

            <span class="iconify up-arrow-icon" data-icon="fa-solid:angle-up"></span>
          </button>
          <div class="collapse multi-collapse" id="card-2">
            <div class="card-body">
              <div class="box bed bg-primary">
                <p tabindex="0">Tempat Tidur</p>
                <p tabindex="0">5</p>
              </div>
              <div class="box empty bg-success">
                <p tabindex="0">Kosong</p>
                <p tabindex="0">5</p>
              </div>
              <div class="box used bg-danger">
                <p tabindex="0">Terpakai</p>
                <p tabindex="0">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
`;

// const createDetailContainerContent
const createBreadcrumbItem = (partsPreviousUrl) => {
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
    bedDetailContainer.innerHTML = '<h4 class="text-center bg-info text-white">Data Rawat Inap Rumah Sakit Tidak Tersedia</h4>';
  }
  bedsDetails.forEach((bedDetail, index) => {
    bedDetail.index = index;
    const bedDetailElem = document.createElement('bed-detail-item');
    bedDetailElem.detail = bedDetail;
    bedDetailContainer.appendChild(bedDetailElem);
  });
};

const createFavoriteHospitalTemplate = () => `
<div class="container">
  <header class="my-5">
    <h2 class="text-center font-weight-bold" tabindex="0">Daftar Rumah Sakit Yang Kamu Sukai</h2>
  </header>
  <!-- favorite search bar   -->
  <div class="row justify-content-center">
    <div class="col-10 col-md-6">
      <div
        class="search-favorite-hospital w-100 border border-danger rounded-pill overflow-hidden d-flex align-items-center"
        style="min-height: 44px;">
        <input type="text" class="p-2 pl-4 border-0" placeholder="Cari nama rumah sakit ..."
          style="min-height: 44px;">
        <button class="btn text-secondary btn-search">
          <span class="iconify " data-icon="fa-solid:search" data-height="30" data-width="30"></span>
        </button>

      </div>
    </div>
  </div>

  <!-- button tipe rawat inap  -->
  <div class=" my-5 ">
    <p>Kategori</p>
    <button class="btn btn-danger accessibility-44 active-shadow" type="button">
      <input class="cursor-pointer" type="radio" name="inpatient" id="covid" value="covid" checked>
      <label class="form-check-label cursor-pointer" for="covid">
        Covid
      </label>
    </button>

    <button class="active-shadow btn btn-danger ml-2 accessibility-44" type="button">
      <input class="cursor-pointer" type="radio" name="inpatient" id="non-covid" value="non-covid">
      <label class="form-check-label cursor-pointer" for="non-covid">
        Non - Covid
      </label>
    </button>

  </div>

  <!-- list favorite hospital  -->
  <div class="row row-cols-1 row-cols-md-2 mb-5" id="list-favorite-hospital">
    <div class="col mb-4">
      <div class="card h-100 card-kamar">
        <div class="card-body p-4 p-md-5 text-center text-md-left">
          <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS
            Umum Daerah Sekarwangi</h3>
          <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
          <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
          <div tabindex="0" class="btn btn-primary btn-rs-ready px-3 rounded-pill">
            Tersedia 6 Kamar
          </div>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100 card-kamar">
        <div class="card-body p-4 p-md-5 text-center text-md-left">
          <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS
            Umum Daerah Sekarwangi</h3>
          <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
          <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
          <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-not">
            Tidak Tersedia
          </div>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100 card-kamar">
        <div class="card-body p-4 p-md-5 text-center text-md-left">
          <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS
            Umum Daerah Sekarwangi</h3>
          <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
          <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
          <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-ready">
            Tersedia 6 Kamar
          </div>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100 card-kamar">
        <div class="card-body p-4 p-md-5 text-center text-md-left">
          <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS
            Umum Daerah Sekarwangi</h3>
          <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
          <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
          <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-not">
            Tidak Tersedia
          </div>
        </div>
      </div>
    </div>
    <div class="col mb-4">
      <div class="card h-100 card-kamar">
        <div class="card-body p-4 p-md-5 text-center text-md-left">
          <h3 class="card-title nama-rs" tabindex="0" onclick="location.href='detail_rawat_inap_page.html';">RS
            Umum Daerah Sekarwangi</h3>
          <p class="card-text alamat-rs" tabindex="0">Jl. Siliwangi No. 49 Cibadak Sukabumi</p>
          <p class="update-rs" tabindex="0">Diupdate 30 menit yang lalu</p>
          <div tabindex="0" class="btn btn-primary rounded-pill px-3 btn-rs-not">
            Tidak Tersedia
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
`;

const createAboutWebTemplate = () => `
<div class="row d-flex align-items-center wrap-about">
    <div class="col-12 col-lg-6 gambar-about">
      <img src="img/corona-1.png" alt="Orang memakai masker" tabindex="0">
    </div>
    <div class="col-12 col-lg-6 text-about">
      <p tabindex="0">Tentang Aplikasi</p>
      <h1 class="heading-1" tabindex="0">Mengenal Website Ranavid <span class="d-red">.</span></h1>
      <p tabindex="0">Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang
        sistem pernapasan. Penyakit akibat infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan
        gangguan
        ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.
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
          <h3 class="card-title heading-3" tabindex="0">Statistik Covid UpToDAte</h3>
          <p class="card-text" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <p class="card-text" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <p class="card-text" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
        <img
          src="https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="card-img-top" alt="Foto Ikram" tabindex="0">
        <div class="card-body pb-3">
          <h3 class="card-title team-name" tabindex="0">Ikram Maulana</h3>
          <p class="card-text team-id" tabindex="0">F267R4264</p>
        </div>
        <div class="i-social mb-4">
          <a href="#" class="icon-about"><span class="iconify" data-icon="fa-brands:instagram-square"
              style="color: #121e2a;" data-width="24" data-height="24"></span></a>
          <a href="#" class="icon-about"><span class="iconify" data-icon="fa-brands:github-square" style="color: #121e2a;"
              data-width="24" data-height="24"></span></a>
          <a href="#" class="icon-about"><span class="iconify" data-icon="fa-brands:linkedin" style="color: #121e2a;"
              data-width="24" data-height="24"></span></a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 mb-4">
      <div class="card h-100 team-card">
        <img
          src="https://images.unsplash.com/photo-1612538498456-e861df91d4d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="card-img-top" alt="Foto Febrianto" tabindex="0">
        <div class="card-body pb-3">
          <h3 class="card-title team-name" tabindex="0">Febrianto</h3>
          <p class="card-text team-id" tabindex="0">F190R7147</p>
        </div>
        <div class="i-social mb-4">
          <a href="#" class="icon-about"><span class="iconify" data-icon="fa-brands:instagram-square"
              style="color: #121e2a;" data-width="24" data-height="24"></span></a>
          <a href="#" class="icon-about"><span class="iconify" data-icon="fa-brands:github-square" style="color: #121e2a;"
              data-width="24" data-height="24"></span></a>
          <a href="#" class="icon-about"><span class="iconify" data-icon="fa-brands:linkedin" style="color: #121e2a;"
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
          <img src="img/corona-1.png" alt="Orang memakai masker" tabindex="0">
        </div>
      </div>
`;

const createBlogPost = (blog) => `
<div class="col mb-4">
          <div class="card h-100 border-0 custom-blog-post">
            <img src="${blog.blogImages}" class="card-img-top" alt="${blog.title}" tabindex="0">
            <div class="card-body p-0">
              <h3 class="card-title heading-3" tabindex="0">${blog.title}</h3>
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
            <img src="${vlog.images}" class="card-img-top" alt="${vlog.title}" tabindex="0">
            <div class="card-body">
              <h3 class="card-title heading-3"><a href="#" data-toggle="modal"
                  data-target="#videoModals-${vlog.id}">${vlog.title}</a></h3>
            </div>
          </div>
        </div>
`;

const createSearchSectionAds = () => `
      <h1 class="heading-1" tabindex="0">Cari Rumah Sakit Rawat Inap Covid-19</h1>
      <p tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua</p>
      <div class="btn btn-danger to-search-btn" tabindex="0" onclick="location.href='/';">Cari Sekarang <span class="iconify ml-2"
          data-icon="fa-solid:angle-right"></span></div>
`;

const createModalList = (vlog) => `
<div class="modal fade" id="videoModals-${vlog.id}" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body modal-custom">
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
<img src="${blog.blogImages}" alt="${blog.title}" class="img-fluid" tabindex="0">
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
  createHospitalizationDetailTemplate,
  createFavoriteHospitalTemplate,
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
};
