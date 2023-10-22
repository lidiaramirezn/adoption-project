import { LitElement, html, css } from 'lit';
import image  from './../../assets/gato.jpg';
import resetCSS  from './../shared/reset-css.js';
import commonCSS  from './../shared/commons-css';

export class CardHome extends LitElement {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;
      }

      .card {
        width: 280px;
        min-height: 250px;
        margin: 10px;
        border-radius: var(--radius);
        box-shadow: var(--box-shadow);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        cursor: pointer;
      }

      .card:hover{
        box-shadow: var(--box-shadow-hover);
      }

      .card__image {
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
      }

      .card__content {
        padding: 20px;
      }

      .card__title {
        color: var(--card-text);
      }

      .card__paragraph {
        color: var(--card-text);
        opacity: 0.8;
      }

      footer {
        display: flex;
        justify-content: center;
      }

      .card__button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }
    `
  ];

  static get properties() {
    return {
      data: Object
    };
  }

  

  render() {
    return html`
      <article class="card">
        <picture>
          <!-- <img src="${this.data.image}"/> -->
          <img class="card__image" src=${image}/>
        </picture>
        <div class="card__content">
          <h4 class="card__title">${this.data.name}</h4>
          <p class="card__paragraph">Edad: ${this.data.age} meses</p>
          <p class="card__paragraph">Sexo: ${this.data.gender === 'H' ? 'Hembra' : 'Macho'}</p>
          <p class="card__paragraph">Ubicación: ${this.data.district}</p>
          <p class="card__paragraph">${this.data.gender === 'H' ? 'Esterilizada' : 'Castrado'}: 
            ${!!this.data.sterilized ? 'Sí' : 'No'}
          </p>
        </div>
        <!-- <footer>
          <button class="card__button button__primary">
            Quiero adoptar &nbsp
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart-filled" width="12" height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" stroke-width="0" fill="currentColor" />
          </svg>
          </button>
        </footer> -->
      </article>
    `;
  }
}
customElements.define('card-home', CardHome);
