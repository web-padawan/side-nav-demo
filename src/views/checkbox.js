import '@vaadin/checkbox';
import { html, LitElement } from 'lit';

export class CheckboxView extends LitElement {
  render() {
    return html`<vaadin-checkbox label="Show details"></vaadin-checkbox>`;
  }
}

customElements.define('checkbox-view', CheckboxView);
