import { LitElement } from "lit";

export class getData extends LitElement {
  //Instancia de propiedades
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }

  constructor() {
    super();
  }
  
  firstUpdated(){
    this.getDatafromAPi();
  }

  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  getDatafromAPi() {

    fetch(this.url, { method: this.method })
      .then((reponse) => {
        if (reponse.ok) return reponse.json();
        return Promise.reject(reponse);
      })
      .then((data) => this._sendData(data))
      .catch((error)=> console.warn('Algo Ha fallado', error));
  }
}

customElements.define("get-data", getData);
