import { LitElement, html, css } from "lit";

export class LoginComponent extends LitElement {
  // componentese CSS
  static styles = [
    css`
      :host {
        display: flex;
        justify-items: center;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
        margin: 20px 20px;
        padding: 0;
        border: 0.3125rem solid #9ceb9f;
        border-radius: 1.25rem;
        align-items: center;
        background-color: #5c5c5c93;
        width: 37.5rem;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
      }
      h2 {
        align-items: center;
        text-align: center;
        color: white;
        font-size: 2rem;
      }
      input {
        display: flex;
        width: 18.75rem;
        margin: 1.25rem 0.625rem;
        align-items: center;
        justify-content: center;
        background-color: #9ceb9f;
        font-size: 1.875rem;
        border: 5px #276d2b solid;
        padding: 0.3125rem 0.625rem;
        border-radius: 0.3125rem;
      }
      button {
        display: flex;
        align-self: center;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 50%;
        margin: 1.25rem 10px;
        padding: 10px 0;
        border: none;
        background-color: #9ceb9f;
        border-radius: 10px;
      }
      button:hover {
        cursor: pointer;
        background-color: #c8f3ca;
      }
    `,
  ];

  //Instancia de propiedades
  static get properties() {
    return {
      email: { type: String },
      pass: { type: String },
    };
  }
  //Inicializacion en null para la prueba de campos
  constructor() {
    super();
    this.email = null;
    this.pass = null;
  }
  // Metodo de revision de campos
  check() {
    this.email = this.shadowRoot.querySelector("#email").value;
    this.pass = this.shadowRoot.querySelector("#password").value;

    // Verifica si ambos campos (email y password) tienen valores
    if (!!this.email && this.pass) {
      // Se inicializa un evento personalizado 'signIn' para notificar al componente padre
      // que se ha iniciado sesión correctamente. El evento incluye un detalle con la sesión activa.
      this.dispatchEvent(
        new CustomEvent("signIn", {
          detail: { session: true },
          bubbles: true,
          composed: true,
        })
      );
    }
  }

  render() {
    return html`
      <div>
        <h2>Prueba de Login</h2>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Write your email"
        />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Write your password"
        />
        <button type="submit" @click=${this.check}>Sign In</button>
      </div>
    `;
  }
}
customElements.define("login-component", LoginComponent);
