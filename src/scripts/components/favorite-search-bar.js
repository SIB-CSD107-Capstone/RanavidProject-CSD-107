class FavoriteSearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.setAttribute('class', 'search-favorite-hospital w-100 border border-danger rounded-pill overflow-hidden d-flex align-items-center');
    this.innerHTML = `
      <input type="text" class="p-2 pl-4 border-0" placeholder="Cari nama rumah sakit ...">
      <button class="btn text-secondary btn-search">
        <span class="iconify " data-icon="fa-solid:search" data-height="30" data-width="30"></span>
      </button>
    `;
  }
}

customElements.define('favorite-search-bar', FavoriteSearchBar);
