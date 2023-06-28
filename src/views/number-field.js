import '@vaadin/number-field';
import { html, LitElement } from 'lit';

export class NumberFieldView extends LitElement {
  render() {
    return html`<vaadin-number-field label="Price"></vaadin-number-field>`;
  }
}

customElements.define('number-field-view', NumberFieldView);
