import { LitElement, html, css } from 'lit';
import resetCSS  from './../shared/reset-css.js';
import commonCSS  from './../shared/commons-css';

export class Footer extends LitElement {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;
      }

      footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--header);
      }
    `
  ];

  render() {
    return html`
      <footer>
        <h2>Footer</h2>
      </footer>
    `;
  }
}
customElements.define('app-footer', Footer);

