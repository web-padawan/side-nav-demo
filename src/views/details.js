import '@vaadin/details';
import { html, LitElement } from 'lit';

export class DetailsView extends LitElement {
  render() {
    return html`
      <vaadin-details summary="Disclaimer" theme="filled">
        <div>This is not an officially supported project</div>
      </vaadin-details>
    `;
  }
}

customElements.define('details-view', DetailsView);
