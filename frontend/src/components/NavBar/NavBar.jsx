import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// Styles
import { StyledNavbar } from './styles'

export function NavBar() {

  const [ showMenu, setShowMenu ] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }

  console.log(showMenu)

  return(
    <StyledNavbar>
      <div className='container area-menu'>
        <NavLink to='/' className='image-logo'>
          <img src="./assets/images/logo-menu.png" alt="Logo Cataloga Mais" />
          CATALOGA+
        </NavLink>
        <button className='btn-menu' onClick={handleShowMenu}>
          <i className="bi bi-list"></i>
        </button>
        <ul className='menu-desktop'>
          <li>
            <NavLink to='/' activeclassname='active' >Exibir Produtos</NavLink>
          </li>
          <li>
            <NavLink to='/category-registration' activeclassname='active' >Cadastro de Categoria</NavLink>
          </li>
          <li>
            <NavLink to='/product-registration' activeclassname='active' >Cadastro de Produto</NavLink>
          </li>
          <li>
            <NavLink to='/supplier-registration' activeclassname='active' >Cadastro de Fornecedor</NavLink>
          </li>
        </ul>
        <div className={`menu-mobile ${showMenu ? 'open-menu' : 'close-menu'}`}>
          <button className='btn-menu btn-close' onClick={handleShowMenu}>
            <i class="bi bi-x-lg"></i>
          </button>
          <ul>
            <li onClick={handleShowMenu}>
              <NavLink to='/' activeclassname='active' >Exibir Produtos</NavLink>
            </li>
            <li onClick={handleShowMenu}>
              <NavLink to='/category-registration' activeclassname='active' >Cadastro de Categoria</NavLink>
            </li>
            <li onClick={handleShowMenu}>
              <NavLink to='/product-registration' activeclassname='active' >Cadastro de Produto</NavLink>
            </li>
            <li onClick={handleShowMenu}>
              <NavLink to='/supplier-registration' activeclassname='active' >Cadastro de Fornecedor</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </StyledNavbar>
  )

}