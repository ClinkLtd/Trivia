import { css } from 'lit';
import { primaryColor } from 'styles/shared-styles';

// these styles can be imported from any component
// for an example of how to use this, check /pages/setup.ts
export const styles = css`
  .container {
    padding-top: 120px;
  }

  .sub-heading {
    margin-top: 30px;
    font-size: 1rem;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .category-item {
    display: inline-block;
    margin-bottom: 16px;
  }

  .category-label {
    background-color: rgba(134, 138, 143, 0.1);
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 0.875rem;
    cursor: pointer;
  }

  input[type="checkbox"]:checked + label.category-label {
    background-color: ${primaryColor};
    color: #fff;
  }
`;