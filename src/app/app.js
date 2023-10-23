import { LitElement, html, css } from 'lit';
import { router } from 'lit-element-router';
import './components/index'
import './views/index';
import resetCSS  from './shared/reset-css.js';
import commonCSS  from './shared/commons-css';
import tree from './state';
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

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
  }

  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};

    tree.select('user').on('update',(e) => {
      this.user = e.data.currentData;
    });
  }
  
  render() {
    return html`
      <app-header         
        hrefHome="/" 
        hrefLogin="/login" 
        hrefRegister="/register"
        hrefAddAdoption="/dar-en-adopcion" 
        .user="${this.user}">
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
          <app-add-adoption .user="${this.user}"></app-add-adoption>
        </div>
      </app-main>        
      <app-footer></app-footer>
    `;
  }
}
customElements.define('main-app', App);

/* navigator.serviceWorker.register('/sw.js'); */