import { css } from 'lit';

export const backgrondColor = css`#FFFCF5`;
export const primaryTextColor = css`#232F34`;
export const secondaryTextColor = css`#9EA0A3`;
export const primaryColor = css`#9535E1`;

// these styles can be imported from any component
// for an example of how to use this, check /pages/setup/index.ts
export const styles = css`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  main {
    max-width: 428px;
    height: 100vh;
    margin: 0 auto;
    background-color: ${backgrondColor};
    color: ${primaryTextColor};
    position: relative;
  }

  h2 {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
  }

  .text-center {
    text-align: center;
  }

  ul {
    margin: 0;
    list-style: none;
    padding: 0;
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