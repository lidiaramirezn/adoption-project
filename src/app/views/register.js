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
      <h1>CREAR CUENTA</h1>
      <button>continuar con Google</button>
    `;
  }
}
customElements.define('app-register', Login);
