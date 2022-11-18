import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './styles';
import { styles as sharedStyles } from 'styles/shared-styles'
import '@shoelace-style/shoelace/dist/components/icon/icon';
import '@shoelace-style/shoelace/dist/components/button/button';

@customElement('app-setup')
export class AppSetup extends LitElement {
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
      <div class='logo'>
      <sl-icon src="./assets/icons/app-logo.svg" style="font-size: 50px;"></sl-icon>
      <h1 class='app-name'>Trivial </br> Dispatch</h1>
      </div>
      <p class='intro'>Get a new trivia delivered to you everyday</p>
    </div>
    <sl-button class='setup-btn' variant="default">
      Setup
      <sl-icon slot="suffix" src="./assets/icons/arrow-right.svg" style="font-size: 15px;"></sl-icon>
    </sl-button>
    `;
  }
}
