import '@vaadin/app-layout';
import '@vaadin/app-layout/vaadin-drawer-toggle.js';
import '@vaadin/icon';
import '@vaadin/side-nav/enable.js';
import '@vaadin/side-nav';
import '@vaadin/vaadin-lumo-styles/vaadin-iconset.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import { color } from '@vaadin/vaadin-lumo-styles/color.js';
import { typography } from '@vaadin/vaadin-lumo-styles/typography.js';
import { css, html, LitElement } from 'lit';
import { Router } from '@vaadin/router';

const router = new Router();

export class MainLayout extends LitElement {
  static get properties() {
    return {
      views: {
        type: Array,
      },
    };
  }

  static get styles() {
    return [
      color,
      typography,
      css`
        aside {
          padding: var(--lumo-space-xs);
        }

        h1 {
          margin: var(--lumo-space-m);
          font-size: var(--lumo-font-size-xxl);
        }
      `,
    ];
  }

  constructor() {
    super();

    this.views = [];
  }

  render() {
    const controls = this.views.filter(({ type }) => type === 'control');
    const fields = this.views.filter(({ type }) => type === 'field');
    const pickers = this.views.filter(({ type }) => type === 'picker');
    const interaction = this.views.filter(({ type }) => type === 'interaction');
    const { pathname } = location;

    return html`
      <vaadin-app-layout primary-section="drawer">
        <header slot="drawer">
          <h1>Side Nav demo</h1>
        </header>
        <aside slot="drawer">
          <vaadin-side-nav>
            <span slot="label">Data Entry</span>
            <vaadin-side-nav-item ?expanded="${fields.some(({ path }) => pathname === `/${path}`)}">
              <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>
              <span>Fields</span>
              ${fields.map(
                (viewRoute) => html`
                  <vaadin-side-nav-item slot="children" path=${router.urlForPath(viewRoute.path)}>
                    ${viewRoute.title}
                  </vaadin-side-nav-item>
                `,
              )}
            </vaadin-side-nav-item>
            <vaadin-side-nav-item ?expanded="${pickers.some(({ path }) => pathname === `/${path}`)}">
              <vaadin-icon slot="prefix" icon="lumo:calendar"></vaadin-icon>
              <span>Pickers</span>
              ${pickers.map(
                (viewRoute) => html`
                  <vaadin-side-nav-item slot="children" path=${router.urlForPath(viewRoute.path)}>
                    ${viewRoute.title}
                  </vaadin-side-nav-item>
                `,
              )}
            </vaadin-side-nav-item>
          </vaadin-side-nav>
          <hr />
          <vaadin-side-nav collapsible>
            <span slot="label">Interaction</span>
            <vaadin-side-nav-item ?expanded="${controls.some(({ path }) => pathname === `/${path}`)}">
              <vaadin-icon slot="prefix" icon="lumo:cog"></vaadin-icon>
              <span>Controls</span>
              ${controls.map(
                (viewRoute) => html`
                  <vaadin-side-nav-item slot="children" path=${router.urlForPath(viewRoute.path)}>
                    ${viewRoute.title}
                  </vaadin-side-nav-item>
                `,
              )}
            </vaadin-side-nav-item>
            <vaadin-side-nav-item
              ?expanded="${pathname === '/' || interaction.some(({ path }) => pathname === `/${path}`)}"
            >
              <vaadin-icon slot="prefix" icon="lumo:edit"></vaadin-icon>
              <span>Interaction</span>
              ${interaction.map(
                (viewRoute) => html`
                  <vaadin-side-nav-item slot="children" path=${router.urlForPath(viewRoute.path)}>
                    ${viewRoute.title}
                  </vaadin-side-nav-item>
                `,
              )}
            </vaadin-side-nav-item>
          </vaadin-side-nav>
        </aside>

        <footer slot="drawer"></footer>

        <vaadin-drawer-toggle slot="navbar" aria-label="Menu toggle"></vaadin-drawer-toggle>

        <main id="outlet"></main>
      </vaadin-app-layout>
    `;
  }

  async firstUpdated() {
    const outlet = this.renderRoot.querySelector('#outlet');

    const views = await fetch('./views.json').then((r) => r.json());

    this.views = views;

    const routes = views.map(({ path }) => {
      return {
        path: `/${path}`,
        component: `${path}-view`,
        action: () => {
          import(`./views/${path}.js`);
        },
      };
    });

    router.setOutlet(outlet);

    router.setRoutes([
      {
        path: '/',
        redirect: `/${views[0].path}`,
      },
      ...routes,
      {
        path: '(.*)+',
        component: 'not-found-view',
        action: () => {
          import('./404.js');
        },
      },
    ]);
  }
}

customElements.define('main-layout', MainLayout);
