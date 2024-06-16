import { styled } from 'styled-components';

export const DivInput = styled.div`
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  input {
    width: 100%;
    height: 50px;
    outline: none;
    border: none;
    padding-left: 10px;
    border-bottom: 1px solid #000000;
  }

  input:focus {
    border-bottom: 2px solid #000000;
  }
`

export const DivSelectInput = styled.div`
  width: 100%;
  margin-top: 15px;

  .css-b62m3t-container {
    width: 100%;
    border: none;
  }

  div {
    border: none;
    border-radius: 0px;
  }

  .css-t3ipsp-control {
    outline: none;
    border: none;
    border-bottom: 1px solid #000000;
    box-shadow: none;
  }

  .css-t3ipsp-control {
    border-bottom: 1px solid #000000;
  }

  .css-13cymwt-control, .css-13cymwt-control:hover {
    border-bottom: 1px solid #000000;
  }

`
