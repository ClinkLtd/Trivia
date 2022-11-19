import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles';
import { styles as sharedStyles } from 'styles/shared-styles'
import '@shoelace-style/shoelace/dist/components/card/card';

@customElement('app-trivia')
export class Trivia extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  constructor() {
    super();
  }

  render() {
    return html`
    <div class='container'>
      <div>
        <span>👋🏽</span>
        <span></span>
      </div>
    <sl-card class="card">
      <strong>Mittens</strong><br />
      <p>This kitten is as cute as he is playful. Bring him home today.</p>

      <div slot="footer">
        <button>Share</button>
      </div>
    </sl-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--sl-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
    </div>
    `;
  }
}
