import { LitElement } from "lit";

// Define la clase del componente `getData`
export class getData extends LitElement {
  // Define las propiedades del componente
  static get properties() {
    return {
      url: { type: String }, // URL de la API desde donde se obtendrán los datos
      method: { type: String }, // Método HTTP (GET, POST, etc.) para la solicitud
    };
  }

  // Constructor del componente
  constructor() {
    super();
  }

  // Método del ciclo de vida de LitElement que se ejecuta después de que el componente se ha renderizado por primera vez
  firstUpdated() {
    this.getDatafromAPi(); // Llama al método para obtener los datos de la API
  }

  // Método para enviar los datos obtenidos como un evento personalizado
  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data }, // Incluye los datos obtenidos en el detalle del evento
        bubbles: true, // Permite que el evento burbujee hacia los elementos padres
        composed: true, // Permite que el evento atraviese el Shadow DOM
      })
    );
  }

  // Método para realizar la solicitud a la API
  getDatafromAPi() {
    // Realiza una solicitud HTTP utilizando `fetch`
    fetch(this.url, { method: this.method })
      .then((response) => {
        // Verifica si la respuesta es exitosa (código de estado 200-299)
        if (response.ok) return response.json(); // Convierte la respuesta a JSON si es exitosa
        return Promise.reject(response); // Rechaza la promesa si la respuesta no es exitosa
      })
      .then((data) => this._sendData(data)) // Envía los datos obtenidos mediante el evento personalizado
      .catch((error) => console.warn("Algo ha fallado", error)); // Maneja errores en la solicitud
  }
}

// Define el componente personalizado `get-data`
customElements.define("get-data", getData);
