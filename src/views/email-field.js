import '@vaadin/email-field';
import { html, LitElement } from 'lit';

export class EmailFieldView extends LitElement {
  render() {
    return html`<vaadin-email-field label="Email"></vaadin-email-field>`;
  }
}

customElements.define('email-field-view', EmailFieldView);
