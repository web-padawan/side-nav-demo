import '@vaadin/password-field';
import { html, LitElement } from 'lit';

export class PasswordFieldView extends LitElement {
  render() {
    return html`<vaadin-password-field label="Password"></vaadin-password-field>`;
  }
}

customElements.define('password-field-view', PasswordFieldView);
