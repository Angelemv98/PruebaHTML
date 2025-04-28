import { LitElement, html, css } from "lit";
import { WiredButton } from "wired-elements";
import { WiredSlider } from "wired-elements";

export class aemvComp extends LitElement {
  //Primero se incluye el archivo css de este componente
  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        font-family: Arial, Helvetica, sans-serif;
        margin: 20px 20px;
        padding: 0;
        border: 0.3125rem solid lightblue;
        border-radius: 1.25rem;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.323);
      }
      h2 {
        font-size: 50px;
        color: lightblue;
        text-align: center;
      }
      .container {
        display: flex;
        width: 80%;
        height: 50px;
        align-items: center;
        align-content: center;
        justify-content: center;
      }
      .parrafo {
        font-size: 1.25em;
        border-radius: 20px;
        color: lightblue;
        text-align: center;
        background-color: black;
        padding: 20px;
      }
      button {
        width: 100px;
        height: 50px;
        margin: 10px 0;
        font-size: 1.25em;
        color: lightblue;
        border-radius: 1.25rem;
        border: none;
        text-align: center;
        background-color: black;
        padding: 10px;
        cursor: pointer;
      }
      .container-buttons {
        display: inline-block;
      }
      #quantity {
        width: 6.25rem;
        height: 50px;
        margin: 0px 20px;
        font-size: 20px;
        background: rgba(255, 255, 255, 0.323);
        color: white;
        border: none;
        border-radius: 10px;
        padding: 0px 5px;
        text-align: center;
        user-select: none;
      }
      wired-button {
        width: 100px;
        height: 50px;
        margin: 10px 20px;
        font-size: 1.25em;
        color: black;
        text-align: center;
        padding: 10px;
        cursor: pointer;
      }

      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="number"] {
        -moz-appearance: textfield;
      }

      input[type="date"]::-webkit-inner-spin-button,
      input[type="date"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="date"] {
        -moz-appearance: textfield;
      }
      wired-slider {
        width: 300px;
        display: block;
        margin-top: 20px;
      }
    `,
  ];

  //Propiedades del archivo, variables etc, aqui el reflect se muestra como atributo en el html
  static properties = {
    counter: { type: Number, reflect: true },
    quantity: { type: Number },
  };

  //Inicializacion de variables
  constructor() {
    super();
    this.counter = 0;
    this.quantity = 50;
  }

  //Ultimo paso, donde se agregan los elementos html en el componente, aqui pueden ir los listeners en los objetos para tener operabilidad
  render() {
    return html`
      <h2>Mi contador</h2>
      <div class="container">
        <p class="parrafo">${this.counter}</p>
        <input
          id="quantity"
          type="number"
          value="${this.quantity}"
          placeholder="Prueba"
          disabled
        />
      </div>
      <wired-slider
        value="50"
        min="0"
        max="100"
        @change=${this.doChangeQuantity}
      ></wired-slider>
      <div class="container-buttons">
        <wired-button @click=${this.increment}>Aumentar</wired-button>
        <wired-button @click=${this.decrement}>Restart</wired-button>
      </div>
    `;
  }

  // se utiliza el shadowRoot para conseguir el valor de esto
  // get incDecStep() {
  //   return this.shadowRoot.getElementById("quantity").value;
  // }

  doChangeQuantity(e) {
    this.quantity = e.detail.value;
  }

  //Funciones para cada boton
  increment() {
    this.counter += parseInt(this.quantity);
  }
  decrement() {
    this.counter -= parseInt(this.quantity);
  }
}
//Se define el componente
customElements.define("aemv-counter", aemvComp);
