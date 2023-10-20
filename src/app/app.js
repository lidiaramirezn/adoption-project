import { LitElement, html, css } from 'lit';
import { router } from "lit-element-router";
import './components/header';
import './components/footer'; 
import './components/main'; 
import './views/home'; 
import './views/login';
import './views/register';
import './views/addAdoption';
import resetCSS  from './shared/reset-css.js';
import commonCSS  from './shared/commons-css';

export class App extends router(LitElement) {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;
        width: 100%;
      }
    `
  ];
  
  static get routes() {
    return [
      {
        name: 'home',
        pattern: ''
      },
      {
        name: 'login',
        pattern: 'login'
      },
      {
        name: 'register',
        pattern: 'register'
      },
      {
        name: 'addAdoption',
        pattern: 'dar-en-adopcion'
      },
    ]
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  render() {
    return html`
      <app-header         
        hrefHome="/" 
        hrefLogin="/login" 
        hrefRegister="/register"
        hrefAddAdoption="/dar-en-adopcion">
      </app-header>
      <app-main active-route=${this.route}>
        <div route="home">
          <app-home></app-home>
        </div>
        <div route="login">
          <app-login></app-login>
        </div>
        <div route="register">
          <app-register></app-register>
        </div>
        <div route="addAdoption">
          <app-add-adoption></app-add-adoption>
        </div>
      </app-main>        
      <app-footer></app-footer>
      <!-- 
        <p>
        Si quieres adoptarlo, escríbenos un email a adopta@elrefugio.org  adjuntando un teléfono 
      </p>
      -->
    `;
  }
}
customElements.define('main-app', App);
