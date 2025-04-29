import { LitElement, html, css } from "lit";
import "./getData";

export class RickMortyComponent extends LitElement {
  
  // Define los estilos del componente
  static styles = [
    css`
      :host {
        display: block;
      }
      .container {
        text-align: center;
      }
      get-data {
        display: none;
      }
      .card {
        background: #FFF;
        display: inline-block;
        border-radius: 0.125rem;
        height: 18.75rem;
        width: 12.5rem;
        margin: 1rem;
        position: relative;
        text-align: center;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      .card:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.24);
      }
      .card img {
        width: 80%;
      }
    `,
  ];

  // Define las propiedades del componente
  static get properties() {
    return {
      wiki: { type: Array }, // Almacena los datos de los personajes
    };
  }

  constructor() {
    super();
    this.wiki = []; // Inicializa la lista de personajes

    // Escucha el evento "ApiData" para procesar los datos de la API
    this.addEventListener("ApiData", (e) => {
      this._dataFormat(e.detail.data);
    });
  }

  // Formatea los datos recibidos de la API
  _dataFormat(data) {
    let characters = [];
    data["results"].forEach((character) => {
      characters.push({
        img: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
      });
    });
    this.wiki = characters; // Actualiza la propiedad con los datos formateados
  }

  // Renderiza el componente
  render() {
    return html`
      <get-data
        url="https://rickandmortyapi.com/api/character"
        method="GET"
      ></get-data>
      ${this.dateTemplate}
    `;
  }

  // Genera las tarjetas de los personajes
  get dateTemplate() {
    return html`
      ${this.wiki.map(
        (character) => html`
          <div class="card">
            <div class="card-content">
              <h2>${character.name}</h2>
              <img src="${character.img}" />
              <p>${character.species} | ${character.status}</p>
            </div>
          </div>
        `
      )}
    `;
  }
}

// Define el componente personalizado
customElements.define("rick-morty-component", RickMortyComponent);
