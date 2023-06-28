import '@vaadin/accordion';
import { html, LitElement } from 'lit';

export class AccordionView extends LitElement {
  render() {
    return html`
    <vaadin-accordion>
      <vaadin-accordion-panel>
        <vaadin-accordion-heading slot="summary">Panel 1</vaadin-accordion-heading>
        <div>Panel 1 content</div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel>
        <vaadin-accordion-heading slot="summary">Panel 2</vaadin-accordion-heading>
        <div>Panel 2 content</div>
      </vaadin-accordion-panel>
      <vaadin-accordion-panel summary="Panel 3">
        <div>Panel 3 content</div>
      </vaadin-accordion-panel>
    </vaadin-accordion>
    `;
  }
}

customElements.define('accordion-view', AccordionView);
