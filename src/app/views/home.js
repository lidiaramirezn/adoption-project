import { LitElement, html, css } from 'lit';
import { data } from '../data';
import './../components/index';
import resetCSS  from './../shared/reset-css.js';
import commonCSS  from './../shared/commons-css';
import { register } from 'swiper/element/bundle';
import slider1Desktop from './../../assets/slider1_desktop.png';
import slider1Tablet from './../../assets/slider1_tablet.png';
import slider1Mobile from './../../assets/slider1_mobile.png';
import slider2Desktop from './../../assets/slider2_desktop.png';
import slider2Tablet from './../../assets/slider2_tablet.png';
import slider2Mobile from './../../assets/slider2_mobile.png';
export class Home extends LitElement {
  static get properties(){
    return {
      pets: { type: Array }
    }
  }

  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;        
      }

      .home__wrapper {
        max-width: 1200px;
        min-width: 300px;
        margin: auto;
      }
      
      .home__gallery {
        padding-top: 20px;
        padding-bottom: 20px;
      }

      .home__cards {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
        margin-bottom: 50px;
        min-height: 500px;
        justify-content: center;
      }

      swiper-container {
        width: 100%;
        height: 100%;
        background-color: #ffcb72;
      }

      swiper-container::part(bullet-active) {
        background-color: var(--background-color-swiper-bullet);
      }

      swiper-container::part(button-prev),
      swiper-container::part(button-next) {
        padding: 2px 10px;
        background-color: var(--background-color-swiper-button);
        border-radius: 2px;
        color: #fff;
        width: calc(var(--swiper-navigation-size)/ 44 * 16);
        height: var(--swiper-navigation-size);
      }

      @media(min-width:950px)  {
        .home__cards {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          margin-top: 30px;
          margin-bottom: 50px;
        }
      }
    `
  ];

  constructor() {
    super();
    this.pets = []
    register();

    import('./../firebase/pet.js').then(({ getPetInformation })=>{
      getPetInformation().then(pets => {
        console.log('***pets', pets);
        this.pets = pets;
      });
    });
  }

  data = data;  

  render() {
    return html`
    <div class="home">  
      <section class="home__panel">
      <swiper-container 
        pagination="true" 
        pagination-clickable="true" 
        navigation="true" 
        space-between="30" 
        loop="true"
        css-mode="true">
        <swiper-slide>
          <picture>
            <source media="(max-width: 768px)" srcset=${slider1Mobile}/>
            <source media="(max-width: 950px)" srcset=${slider1Tablet}/>
            <img src=${slider1Desktop} alt="" />
          </picture>
        </swiper-slide>
        <swiper-slide>
          <picture>
          <source media="(max-width: 768px)" srcset=${slider2Mobile}/>
            <source media="(max-width: 950px)" srcset=${slider2Tablet}/>
            <img src=${slider2Desktop} alt="" />
          </picture>
        </swiper-slide>
      </swiper-container>
      </section>
      <section class="home__gallery home__wrapper">

        <ul class="home__cards">
          ${
            this.pets?.map( value => html`
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
