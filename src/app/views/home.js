import { LitElement, html, css } from 'lit';
import { data } from '../data';
import '../components/card-home';
import resetCSS  from './../shared/reset-css.js';
import commonCSS  from './../shared/commons-css';

export class Home extends LitElement {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;        
      }

      .home-wrapper {
        max-width: 1200px;
        min-width: 300px;
        margin: auto;
      }

      .home-panel {
        height: 300px;        
        border: 1px dashed gray;
      }

      .home-gallery {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .home-cards {
        display: flex;
        flex-wrap: wrap;
      }

    `
  ];

  data = data;  

  render() {
    return html`
    <div class="home">  
      <section class="home-panel">
      </section>
      <section class="home-gallery home-wrapper">
        <ul class="home-cards">
          ${this.data.map( value => html`
            <li>
              <card-home .data=${value}></card-home>        
            </li>`
          )}
        </ul>
      </section>
      
    </div>`;
  }
}
customElements.define('app-home', Home);
