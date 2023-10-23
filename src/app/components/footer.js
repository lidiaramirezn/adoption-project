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
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 15px 30px;
        background-color: var(--footer);
        color: var(--color-secondary);
        font-weight: 500;
        font-size: 1.1em;
      }

      .footer__paragraph--center {
        display: flex;
        align-items: center;
      }
    `
  ];

  render() {
    return html`
      <footer>
        <p> Versión de plataforma 1.0.0 - 2023</p>        
        <p class="footer__paragraph--center">Realizado con Lit &nbsp 
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="25.6" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 320"><path fill="#B8C9CC" d="m64 192l25.926-44.727l38.233-19.114l63.974 63.974l10.833 61.754L192 320l-64-64l-38.074-25.615z"></path><path fill="#B8C9CC" d="M128 256V128l64-64v128l-64 64ZM0 256l64 64l9.202-60.602L64 192l-37.542 23.71L0 256Z"></path><path fill="#FFF" d="M64 192V64l64-64v128l-64 64Zm128 128V192l64-64v128l-64 64ZM0 256V128l64 64l-64 64Z"></path><path fill="#FFF" d="M64 320V192l64 64z"></path></svg>
          &nbsp por Lid
        </p>
      </footer>
    `;
  }
}
customElements.define('app-footer', Footer);

