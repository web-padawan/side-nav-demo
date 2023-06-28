import '@vaadin/button';
import { html, LitElement } from 'lit';

export class ButtonView extends LitElement {
  render() {
    return html`<vaadin-button>Button</vaadin-button>`;
  }
}

customElements.define('button-view', ButtonView);
