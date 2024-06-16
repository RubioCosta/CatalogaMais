import { styled } from 'styled-components';

export const DivItem = styled.div`

  .rc-collapse {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #D8D8D8;
    border-radius: 0px;
  }

  .rc-collapse-header-text {
    font-weight: 600;
    font-size: 1.2em;
    color: #000000;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    border-bottom: 1px solid #D8D8D8;
    margin-bottom: 10px;
    padding-bottom: 5px;
  }

  li:last-child {
    margin-bottom: 30px;
  }

  .product-name {
    font-weight: 600;
    font-size: 1.1em;
    margin-right: 5px;
    color: #373737;
  }

  .category-name {

  }

`