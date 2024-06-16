import { styled } from 'styled-components';

export const StyledNavbar = styled.nav`
  background-color: #000000;

  .area-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  /* IMAGE LOGO */
  .image-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    font-size: 1.3em;
  }

  .image-logo img {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }

  .image-logo.active {
    background-color: transparent;
  }

  /* LIST PATH */
  ul {
    display: flex;
  }

  li {
    list-style: none;
  }

  .active {
    background-color: #232325;
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    height: 80px;
    padding: 20px;
    text-align: center;
  }

  li a:hover {
    background-color: #232325;
  }

  /* Menu Mobile */
  .menu-mobile {
    display: none;
    position: fixed;
    z-index: 99;
    top: 0;
    right: -250px;
    bottom: 0;
    width: 250px;
    background-color: #000000;
  }

  .btn-menu {
    display: none;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .btn-menu i {
    color: #FFFFFF;
    font-size: 1.7em;
  }

  .btn-menu.btn-close {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 80px;
    padding-left: 20px;
  }

  .menu-mobile.close-menu {
    right: -250px;
    transition: ease-in .3s;
  }

  .menu-mobile.open-menu {
    right: 0;
    transition: ease-in .3s;
  }

  .menu-mobile ul {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1100px) {
  
    .menu-desktop {
      display: none;
    }

    .btn-menu {
      display: block;
    }

    .menu-mobile {
      display: block;
    }

  }

`