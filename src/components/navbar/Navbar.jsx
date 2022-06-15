import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/rabot.svg';
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#inicio">Início</a></p>
  <p><a href="#whfe">HighFive Education</a></p>
  <p><a href="#possibility">Inteligência Artificial</a></p>
  <p><a href="#features">Estudo de Casos</a></p>
  <p><a href="#blog">Biblioteca</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="highfive__navbar">
      <div className="highfive__navbar-links">
        <div className="highfive__navbar-links-logo">
          <img src= {logo} alt="logo" />
        </div>
        <div className="highfive__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="highfive__navbar-sign">
        <p>Entrar</p>
        <button type="button">Cadastre-se</button>
      </div>
      <div className="highfive__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="highfive__navbar-menu_container scale-up-center">
            <div className="highfive__navbar-menu_container-links">
              <Menu />
              <div className="highfive__navbar-menu_container-links-sign">
                <p>Entrar</p>
                <button type="button">Cadastre-se</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar