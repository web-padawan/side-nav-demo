import '@vaadin/item';
import '@vaadin/list-box';
import { html, LitElement } from 'lit';

export class ListBoxView extends LitElement {
  render() {
    return html`
      <vaadin-list-box multiple selected-values="[0]" style="width: 200px">
        <vaadin-item>Show assignee</vaadin-item>
        <vaadin-item>Show due date</vaadin-item>
        <vaadin-item>Show status</vaadin-item>
      </vaadin-list-box>
    `;
  }
}

customElements.define('list-box-view', ListBoxView);
