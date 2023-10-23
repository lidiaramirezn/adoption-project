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
        background-color: var(--card-background);
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
            ${!!this.data.isSterilized ? 'Sí' : 'No'}
          </p>
        </div>
      </article>
    `;
  }
}
customElements.define('card-home', CardHome);
