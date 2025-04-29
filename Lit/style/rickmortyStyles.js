import { css } from "lit";

export default css`
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
    background: #fff;
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
`;
