import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

// You can also import styles from another file
// if you prefer to keep your CSS seperate from your component
import { styles } from './styles';
import { styles as sharedStyles } from 'styles/shared-styles'
import '@shoelace-style/shoelace/dist/components/button/button';

@customElement('set-categories')
export class Categories extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ]

  // load this from env or fetch
  // @property
  categoryList = [
    'sports',
    'entertainment',
    'politics',
    'famous people',
    'countries',
    'fashion',
    'history',
    'books',
    'art',
    'medical',
    'astrology'
  ];

  constructor() {
    super();
  }

  render() {
    return html`
    <div class='container'>
      <h2 class=''>Set your Trivia categories</h2>
      <p class='sub-heading'>Select all categories</p>
      <div class='category-container'>
        ${this.categoryList.map((category) =>
          html`
            <div class='category-item'>
              <input type='checkbox' name=${category} id=${category} value=${category}>
              <label class='category-label' for=${category}>${category}</label>
            </div>
          `
        )}
      </div>
    </div>
    <sl-button class='setup-btn' variant="default" href='/trivia'>
      Finish
      <sl-icon slot="suffix" src="./assets/icons/arrow-right.svg" style="font-size: 15px;"></sl-icon>
    </sl-button>
    `;
  }
}
