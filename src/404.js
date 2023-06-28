import { html, LitElement } from 'lit';

export class NotFoundView extends LitElement {
  render() {
    return html`Page not found`;
  }
}

customElements.define('not-found-view', NotFoundView);
