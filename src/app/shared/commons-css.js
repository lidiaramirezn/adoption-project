import { css } from 'lit-element';

export default css `

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    padding: 8px 15px;    
    border-radius: 5px;    
    font-weight: 500;
  }

  .button__primary {
    background-color: var(--button-primary);
    color: var(--button-primary-text);
  }

  .button__primary:hover {
    color: var(--button-primary-hover);
  }

  .button__secondary {
    background-color: var(--button-secondary);
    color: var(--button-secondary-text);
  }

  .paragraph {
    color: var(--paragraph);
  }

  .link {
    color: var(--link-text);
    font-weight: 500;
  }

  
  .link:hover {
    color: var(--link-hover);
  }

  input {
    overflow: visible;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--)
  }

`;