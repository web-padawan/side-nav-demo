import '@vaadin/date-picker';
import { html, LitElement } from 'lit';

export class DatePickerView extends LitElement {
  render() {
    return html`<vaadin-date-picker label="Appointment date"></vaadin-date-picker>`;
  }
}

customElements.define('date-picker-view', DatePickerView);
