import { LitElement, html, css } from 'lit';

export class AddADoption extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `
  ];

  render() {
    return html`
      ADD ADOPTION
      <form>
        
      </form>
    `;
  }
}
customElements.define('app-add-adoption', AddADoption);
