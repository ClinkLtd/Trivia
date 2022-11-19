import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './styles';
import { styles as sharedStyles } from 'styles/shared-styles'
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox';
import '@shoelace-style/shoelace/dist/components/button/button';

@customElement('set-frequency')
export class SetFrequency extends LitElement {
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
    <h2 class='text-center'>Set Trivia Frequency</h2>
    <ul>
      <li>
        <label for='freq'>
          <span>Daily</span>
          <sl-checkbox name='freq' value='daily' class='checkbox'></sl-checkbox>
        </label>
      </li>
      <li>
        <label for='freq'>
          Weekly
          <sl-checkbox name='freq' value='weekly' class='checkbox'></sl-checkbox>
        </label>
      </li>
      <li>
        <label for='freq'>
          Twice a week
          <sl-checkbox name='freq' value='twice-a-week' class='checkbox'></sl-checkbox>
        </label>
      </li>
      <li>
        <label for='freq'>
          Monthly
          <sl-checkbox name='freq' value='monthly' class='checkbox'></sl-checkbox>
        </label>
      </li>
    </ul>
    </div>
    <sl-button class='setup-btn' variant="default" href='/set-categories'>
      Continue
    </sl-button>
    `;
  }
}
