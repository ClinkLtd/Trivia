import { css } from 'lit';
import { secondaryTextColor, primaryColor } from 'styles/shared-styles';

export const styles = css`
  .container {
    padding-top: 73px;
  }

  .card {
    margin-top: 20px;
  }

  .card::part(base) {
    background-color: #FFFFFF;
    border: 1px solid rgba(134, 138, 143, 0.1);
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.04);
  }

  .card::part(footer) {
    border-top: 1px solid #F5F5F5;
    padding-top: 10px;
  }

  p {
    color: #232F34;
  }
`;