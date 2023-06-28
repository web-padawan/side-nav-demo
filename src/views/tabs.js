import '@vaadin/tabs';
import { html, LitElement } from 'lit';

export class TabsView extends LitElement {
  render() {
    return html`
      <vaadin-tabs>
        <vaadin-tab>Analytics</vaadin-tab>
        <vaadin-tab>Customers</vaadin-tab>
        <vaadin-tab>Dashboards</vaadin-tab>
        <vaadin-tab>Orders</vaadin-tab>
      </vaadin-tabs>
    `;
  }
}

customElements.define('tabs-view', TabsView);
