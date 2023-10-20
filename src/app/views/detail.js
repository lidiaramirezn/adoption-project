import { LitElement, html, css } from 'lit';

export class Detail extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`DETAIL`;
  }
}
customElements.define('detail', Detail);
