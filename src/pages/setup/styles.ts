import { css } from 'lit';
import { secondaryTextColor, primaryColor } from 'styles/shared-styles';

// these styles can be imported from any component
// for an example of how to use this, check /pages/setup.ts
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

  .logo {
    display: inline-flex;
    justify-content: center;
  }

  .app-name {
    font-size: 1.5rem;
    line-height:1;
    font-style: normal;
    font-weight: 400;
    margin: 0;
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
`;