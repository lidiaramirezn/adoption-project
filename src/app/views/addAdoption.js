import { LitElement, html, css, nothing } from 'lit';
import {live} from 'lit/directives/live.js';
import resetCSS from './../shared/reset-css';
import commonCSS from './../shared/commons-css';
export class AddADoption extends LitElement {
  static styles = [
    resetCSS,
    commonCSS,
    css`
      :host {
        display: block;
      }

      .add-adoption {
        max-width: 1200px;
        min-width: 300px;
        margin: 20px auto;
        padding: 20px;
      }      

      section {
        padding: 20px;
        background-color: #fff;
        margin-bottom: 20px;
        box-shadow: var(--box-shadow);
      }

      h2,
      h3 {
        color: var(--color-fourth);
      }

      .add-adoption__wrapper-button {
        display: flex;
        justify-content: flex-end;
        margin: 10px 0 10px;
      }

      @media(min-width:950px)  {
        .add-adoption__wrapper-button {
          margin: 20px 0 30px;
        }
      }

    `
  ];

  static get properties() {
    return {
      user: { type: Object },
      pet: { type: Object}
    };
  }

  constructor() {
    super();
    import('./../firebase/pet.js').then(({ create }) => {
      this.create = create;
    });
    this.pet = this.newPet();
  }

  render() {
    return html`
      <div class="add-adoption">        
        <form @submit=${e => this.add(e)}>
          <section>
            <h2>Datos del adoptado</h2>
            <div class="col-4">
              <div>
                <label for="name">Nombre</label>
                <input type="text" id="name" minlength="3" maxlength="30" 
                  placeholder='Ingrese nombre de mascota' 
                  .value=${live(this.pet.name)}
                  @input=${ (e) => { this.pet.name = e.target.value } } />
              </div>
              <div>
                <label for="age">Edad</label>
                <input id="age" type="number" min="0" 
                  .value=${live(this.pet.age)}
                  @input=${ (e) => { this.pet.age = e.target.value } }/>
              </div>
              <div>
                <label for="gender">Sexo</label>            
                <select id="gender" 
                  .value=${live(this.pet.gender)}
                  @change=${ (e) => { this.pet.gender = e.target.value } }>
                  <option value="H">Hembra</option>
                  <option value="M">Macho</option>
                  <option>Desconocido</option>
                </select>
              </div>
              <div>
                <label for="district">Distrito</label>            
                <select id="district" 
                  .value=${live(this.pet.district)}
                  @change=${ (e) => { this.pet.district = e.target.value } } >
                  <option value="PIURA">Piura</option>
                  <option value="CASTILLA">Castilla</option>
                  <option value="26_DE_OCTUBRE">26 de Octubre</option>
                  <option>Desconocido</option>
                </select>
              </div>
            </div>
          </section>
          <section>
            <h3>Estado de salud</h3>
            <div class="col-3">
              <div>
                <label for="steilized" >
                  <input id="steilized" type="checkbox" 
                  .checked=${live(this.pet.isSterilized)} 
                  @click=${ (e) => { this.pet.isSterilized = e.target.checked } }>
                  Esterilizado
                </label>                
              </div>
              <div>
                <label for="vaccinated">
                  <input id="vaccinated" type="checkbox" 
                  .checked=${live(this.pet.isVaccinated)} 
                  @click=${ (e) => { this.pet.isVaccinated = e.target.checked } }>
                  Vacunado
                </label>
                
              </div>
              <div>
                <label>
                <label for="dewormed">
                  <input id="dewormed" type="checkbox" 
                  .checked=${live(this.pet.isDewormed)} 
                  @click=${ (e) => { this.pet.isDewormed = e.target.checked } }>
                  Desparacitado
                </label>            
              </div>
            </div>
          </section>
          <section>
            <h3>Información adicional</h3>
            <div>
              <label for="history">Historia</label>
              <textarea id="history" rows="6" .value=${live(this.pet.history)}
                  @input=${ (e) => { this.pet.history = e.target.value } }></textarea>
            </div>
          </section>          
          <section>
            <h2>Datos de contacto</h2>
            <p>Hola ${!!this.user ? this.user.displayName : nothing}, por favor ingresa datos para que se contacten contigo.</p>
            <div class="col-2">
              <div>
                <label for="ownerPhone">Teléfono</label>
                <input id="ownerPhone" type="tel" 
                  .value=${live(this.pet.owner.phone)}
                  @input=${ (e) => { this.pet.owner.phone = e.target.value } } />
              </div>
              <div>
                <label for="ownerEmail">E-mail</label>
                <input id="ownerEmail" type="email" 
                  value="${!!this.user ? this.user.email : ''}" 
                  .value=${live(this.pet.owner.email)}
                  @input=${ (e) => { this.pet.owner.email = e.target.value } }/>
              </div>
            </div>
          </section>
          <div class="add-adoption__wrapper-button">
            <button class="button__primary" type="submit">Agregar</button>
          </div>
        </form>
      </div>
    `;
  }

  newPet() {
    return {
      name: '',
      age: 0,
      gender: '',
      district: '',
      isSterilized: false,
      isVaccinated: false,
      isDewormed: false,
      history: '',
      owner: {
        phone: '',
        email: !!this.user ? this.user.email : ''
      }
    }
  }

  add(e) {
    console.log('Se agrego', this.pet);
    // todo: Agregar modal creación exitosa
    e.preventDefault();
    this.create(this.pet);
    this.clean();
  }

  clean() {
    this.pet = this.newPet();
    console.log('Limpiar', this.pet);
  }
}
customElements.define('app-add-adoption', AddADoption);
