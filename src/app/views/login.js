import { LitElement, html, css } from 'lit';
import resetCSS  from './../shared/reset-css.js';
import commonCSS  from './../shared/commons-css';

export class Login extends LitElement {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      <h1>LOGIN</h1>
      <button class="button__secondary">
        Continuar con Google
      </button>
    `;
  }
}
customElements.define('app-login', Login);
