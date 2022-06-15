import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/rabot.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="highfive__navbar">
      <div className="highfive__navbar-links">
        <div className="highfive__navbar-links-logo">
          <img src= {logo} alt="logo" />
        </div>
        <div className="highfive__navbar-links_container">
          <p><a href="#inicio">Início</a></p>
          <p><a href="#whfe">HighFive Education</a></p>
          <p><a href="#possibility">Inteligência Artificial</a></p>
          <p><a href="#features">Estudo de Casos</a></p>
          <p><a href="#blog">Biblioteca</a></p>
        </div>
      </div>
      <div className="highfive__navbar-sign">
        <p>Entrar</p>
        <button type="button"></button>
      </div>
    </div>
  )
}

export default Navbar