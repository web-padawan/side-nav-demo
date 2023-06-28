import '@vaadin/text-field';
import { html, LitElement } from 'lit';

export class TextFieldView extends LitElement {
  render() {
    return html`<vaadin-text-field label="User name"></vaadin-text-field>`;
  }
}

customElements.define('text-field-view', TextFieldView);
