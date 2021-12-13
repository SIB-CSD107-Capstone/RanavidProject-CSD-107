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
        <button class="card-header btn btn-block bg-danger" data-toggle="collapse" data-target="#card-${this._detail.index}"
          aria-expanded="false" aria-controls="multiCollapseExample2" tabindex="0">
          <div class="bed-info">
            <h5 class="text-left text-white">${this._detail.stats.title}</h5>
            <p class="text-left text-white p-0 m-0">data diperbarui ${timeUpdateData}</p>
          </div>

          <span class="iconify up-arrow-icon" data-icon="fa-solid:angle-up"></span>
        </button>
        <div class="collapse multi-collapse" id="card-${this._detail.index}">
          <div class="card-body">
            <div class="box bed bg-primary">
              <p tabindex="0">Tempat Tidur</p>
              <p tabindex="0">${this._detail.stats.bed_available}</p>
            </div>
            <div class="box empty bg-success">
              <p tabindex="0">Kosong</p>
              <p tabindex="0">${this._detail.stats.bed_empty}</p>
            </div>
            <div class="box used bg-danger">
              <p tabindex="0">Terpakai</p>
              <p tabindex="0">${this._detail.stats.bed_available - this._detail.stats.bed_empty}</p>
            </div>
          </div>
        </div>

      </div>
      `;
    }
  }
}

customElements.define('bed-detail-item', BedDetailItem);
