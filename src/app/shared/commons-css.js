import { css } from 'lit-element';

export default css `

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    padding: 8px 15px;    
    border-radius: 5px;    
    font-weight: 500;
    font-size: 16px;
  }

  .button__primary {
    padding: 10px 25px;
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

  [type="text"],
  [type="number"],
  [type="tel"],
  [type="email"],
  select,
  textarea {
    overflow: visible;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--color-fourth);
    border: 1px solid rgba(138, 138, 138, 0.3);
    border-radius: 5px;
  }

  .col-3,
  .col-4,
  .col-2 {
    display: grid;
    grid-template-columns: auto
  }

  @media(min-width:950px)  {
    .col-2 {
      grid-template-columns: auto auto;
      gap: 20px;
    }

    .col-3 {
      grid-template-columns: auto auto auto;
      gap: 20px;
    }

    .col-4 {
      grid-template-columns: auto auto auto auto;
      gap: 20px;
    }


  }

`;