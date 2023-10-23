import { css } from 'lit-element';

export default css `
  *,
  *::before,
  *::after { 
    box-sizing: border-box; 
    outline: none;
    margin: 0;
    padding: 0;
  }

  a { 
    text-decoration: none; 
    color: inherit; 
    cursor: pointer; 
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] { 
    font-family: inherit;
    background-color: transparent; 
    color: inherit; 
    border-width: 0; 
    padding: 0; 
    cursor: pointer;
  }

  input,
  textarea {
    font-family: inherit;
    margin: 0;
  }

  ul, 
  ol, 
  dd, 
  li { 
    list-style: none;
  }

  img {
    max-width: 100%;
  }
`;