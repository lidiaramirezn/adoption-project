import { LitElement, html, css } from 'lit';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import resetCSS  from './../shared/reset-css.js';
import { navigator } from "lit-element-router";
import commonCSS  from './../shared/commons-css';

export class Header extends navigator(LitElement) {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;
      }

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--header);
      }

      .header-options {
        display: flex;
      }

      .header-option:first-child {
        padding-right: 10px;
      }
    `
  ];

  static get properties() {
    return {
      hrefHome: { type: String },
      hrefLogin: { type: String },
      hrefRegister: { type: String },
      hrefAddAdoption: { type: String },
      isAuthenticated: { type: Boolean }
    };
  }
  

  constructor() {
    super();
    this.isAuthenticated = false;
  }
  
  firebaseConfig = {
  };
  variable = 'lid';
  app = initializeApp(this.firebaseConfig);
  auth = getAuth(this.app);
  provider = new GoogleAuthProvider();
  
  render() {    

    this.auth.onAuthStateChanged( (user) => {
      this.isAuthenticated = !!user;
    })

    return html`
      <header>
        <div>
        <a href="${this.hrefHome}" @click="${e => this.linkClick(e, this.hrefHome)}">
          logo              
        </a>
        </div>
        <section class="header-right">
          <strong class="paragraph">Da en adopción</strong>
          <div class="header-options">          
            <div class="header-option">
              ${!this.isAuthenticated ?  
                html`
                <a class="link" @click="${this.login}">
                  Iniciar sesión
                </a>` : 
                html`
                <a class="link" @click="${this.logout}">
                  Cerrar sesión
                </a>`
              } 
            </div>
            <!-- <div class="header-option">
              <a class="link"  href="${this.hrefRegister}" @click="${e => this.linkClick(e, this.hrefRegister)}">
                Crear cuenta
              </a>              
            </div> -->
        </div>
        </section>
        
      </header>
    `;
  }

  linkClick(e, value) {
    e.preventDefault();
    this.navigate(value);  
  }

  logout() {
    this.auth.signOut()
    .then(() => {
      this.isAuthenticated = false;
      this.navigate('/');
    })
    .catch( error => console.log(error));
  }

  login() {
    signInWithPopup(this.auth, this.provider)
    .then((result) => { 
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;    
      const user = result.user;
      this.navigate(this.hrefAddAdoption);
    }).catch((error) => {
      console.error('signInWithPopup.error', error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

}
customElements.define('app-header', Header);
