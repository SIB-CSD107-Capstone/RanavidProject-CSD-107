import DateTimeHelper from '../utils/datetime-helper';

class BedDetailItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set detail(detail) {
    this._detail = detail;
    this.render();
  }

  render() {
    if (this._detail) {
      const updateBedInfo = new DateTimeHelper(this._detail.time);
      const distanceUpdateBedInfo = updateBedInfo.distanceWithNow();

      let timeUpdateData = '';
      if (distanceUpdateBedInfo.days) {
        timeUpdateData = `${distanceUpdateBedInfo.days} hari yang lalu`;
      } else if (distanceUpdateBedInfo.hours) {
        timeUpdateData = `${distanceUpdateBedInfo.hours} jam yang lalu`;
      } else if (distanceUpdateBedInfo.minutes) {
        timeUpdateData = `${distanceUpdateBedInfo.minutes} menit yang lalu`;
      } else if (distanceUpdateBedInfo.seconds) {
        timeUpdateData = `${distanceUpdateBedInfo.seconds} detik yang lalu`;
      } else {
        timeUpdateData = '';
      }

      this.innerHTML = `
      <div class="card mb-3" data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0">
        <button class="card-header btn btn-block" data-toggle="collapse" data-target="#card-${this._detail.index}"
          aria-expanded="false" aria-controls="multiCollapseExample2" style="background-color: #121E2A" tabindex="0">
          <div class="bed-info">
            <h5 class="text-left text-white">${this._detail.stats.title}</h5>
            <p class="text-left text-white p-0 m-0">data diperbarui ${timeUpdateData}</p>
          </div>

          <span class="iconify up-arrow-icon" data-icon="fa-solid:angle-up" style="color: white;"></span>
        </button>
        <div class="collapse multi-collapse" id="card-${this._detail.index}">
          <div class="card-body d-flex flex-column flex-md-row">
            <div class="box bed mb-3 mb-md-0 w-100" style="background-color: #007D51; margin-right: 1em !important;">
              <p tabindex="0" style="color: white;">Tempat Tidur</p>
              <p tabindex="0" style="color: white;">${this._detail.stats.bed_available}</p>
            </div>
            <div class="box empty mb-3 mb-md-0 w-100" style="background-color: #E29E21; margin-right: 1em !important;">
              <p tabindex="0" style="color: white;">Kosong</p>
              <p tabindex="0" style="color: white;">${this._detail.stats.bed_empty}</p>
            </div>
            <div class="box used mb-3 mb-md-0 w-100" style="background-color: #FE0B0B; margin-right: 1em !important;">
              <p tabindex="0" style="color: white;">Terpakai</p>
              <p tabindex="0" style="color: white;">${this._detail.stats.bed_available - this._detail.stats.bed_empty}</p>
            </div>
          </div>
        </div>

      </div>
      `;
    }
  }
}

customElements.define('bed-detail-item', BedDetailItem);
