import { LitElement, css, html } from "lit";

export class AemvComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
      }
      .container {
        width: 12.5rem;
        height: 12.5rem;
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: rgb(0, 0, 0, 0.5);
        border-radius: .625rem;
        padding: 0 1.25rem;
        box-shadow: gray inset .625rem; 
      }
      .tituloPrincipal {
        color: white;
      }
    `,
  ];

  render() {
    return html`
      <div class="container">
        <h1 class="tituloPrincipal">Componente</h1>
      </div>
    `;
  }
}
customElements.define("aemv-component", AemvComponent);
