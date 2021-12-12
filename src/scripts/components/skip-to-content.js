/* eslint-disable no-undef */
class skipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<button class="skip-link">Menuju ke konten</button>';
  }
}

customElements.define('skip-to-content', skipToContent);
