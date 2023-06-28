import '@vaadin/time-picker';
import { html, LitElement } from 'lit';

export class TimePickerView extends LitElement {
  render() {
    return html`<vaadin-time-picker label="Appointment time"></vaadin-time-picker>`;
  }
}

customElements.define('time-picker-view', TimePickerView);
