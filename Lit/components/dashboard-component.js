import { LitElement, html, css } from "lit";
import "./login-component";
export class DashboardComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
        justify-content: center;
        align-items: center;
        font-size: 2.5rem;
        color: white;
        width: 100%;
        height: 100dvh;
      }
    `,
  ];

  static get properties() {
    return {
      session: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.session = false;
  }

  render() {
    return html`
      ${this.session
        ? html`<h1>¡Welcome!</h1>`
        : // En el elemento padre se cacha dicho evento y posterior se agrega a el componente para poder ocultar dicho elemento si el evento es exitoso
          html`<login-component @signIn="${this._hiddenLogin}">
          </login-component>`}
    `;
  }

  _hiddenLogin() {
    this.session = true;
  }
}
customElements.define("dashboard-component", DashboardComponent);
