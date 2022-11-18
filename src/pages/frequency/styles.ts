import { css } from 'lit';
import { secondaryTextColor, primaryColor } from 'styles/shared-styles';

export const styles = css`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-content: center;
  }

  .intro {
    text-align: center;
    color: ${secondaryTextColor};
    font-size: 1rem;
    max-width: 195px;
    margin: 20px auto 0;
  }

  sl-button{
    position: absolute;
    bottom: 60px;
    right: 20px;
    left: 20px;
    display: block;
  }

  .setup-btn::part(base) {
    background-color: ${primaryColor};
    color: #fff;
    border: 0;
  }

  .checkbox::part(control) {
    border-radius: 50%;
    border-color: ${primaryColor};
    background-color: ${primaryColor};
    color: #fff;
  }

  li {
    list-style: none;
    padding: 20px 0;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #F5F5F5;
  }

  li label {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;