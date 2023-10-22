import { LitElement, html, css, nothing } from 'lit';
import resetCSS  from './../shared/reset-css.js';
import { navigator } from "lit-element-router";
import commonCSS  from './../shared/commons-css';
import logo  from './../../assets/logo.svg';
import tree from './../state.js';
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
        padding: 10px 30px;
        background-color: var(--header);
      }

      .header__logo {
        height: 80px;
      }

      .header__options {
        display: flex;
      }

      .header__option:first-child {
        padding-right: 10px;
      }

      .header__button {
        margin-top: 5px;
        border: 1px solid var(--color-secondary);
        color: var(--color-secondary);        
      }

      .header__right {
        display: flex;
        align-items: center;
        color: var(--color-secondary);
      }

      .header__username {
        margin-right: 10px;
        margin-left: 10px;
      }
    `
  ];

  static get properties() {
    return {
      hrefHome: { type: String },
      hrefLogin: { type: String },
      hrefRegister: { type: String },
      hrefAddAdoption: { type: String },
      isAuthenticated: { type: Boolean },
      user: { type: Object }
    };
  }
  

  constructor() {
    super();
    import('../firebase/auth.js').then(({ login, logout }) => {        
      this.login = function(){
        login().then(()=>{}).catch(err =>{
          tree.select('error').set( err );
        })
      }

      this.logout = logout;
    });
  }
  
  render() {
    return html`
      <header>
        <div>
        <a href="${this.hrefHome}" @click="${e => this.linkClick(e, this.hrefHome)}">
          <img class="header__logo" src=${logo}/>              
        </a>
        </div>
        <section class="header-right">
          ${!this.user ?  
            html`
              <strong class="paragraph">Da en adopción</strong>` : nothing                
            }

          <div class="header__options">          
            <div class="header__option">
              ${!this.user ?  
                html`
                <button class="header__button" 
                  @click=${ function(){ this.login() }}>
                  Iniciar sesión
                </button>` : 
                html`
                <div class="header__right">

                  <button class="header__button" 
                    @click="${e => this.linkClick(e, this.hrefAddAdoption)}">
                    Da en adopción 
                  </button>
                  
                  <label class="header__username">${this.user.displayName}</label>                  
                  <button class="link"
                    @click=${ function(){ this.logout() } }>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="32"  height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M9 12h12l-3 -3" />
                      <path d="M18 15l3 -3" />
                    </svg>
                  </button>                
                </div>
                `
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

}
customElements.define('app-header', Header);
