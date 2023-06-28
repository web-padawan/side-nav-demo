import '@vaadin/radio-group';
import { html, LitElement } from 'lit';

export class RadioGroupView extends LitElement {
  render() {
    return html`
      <vaadin-radio-group label="Travel class" theme="vertical">
        <vaadin-radio-button value="economy" label="Economy"></vaadin-radio-button>
        <vaadin-radio-button value="business" label="Business"></vaadin-radio-button>
        <vaadin-radio-button value="firstClass" label="First Class"></vaadin-radio-button>
      </vaadin-radio-group>
    `;
  }
}

customElements.define('radio-group-view', RadioGroupView);
