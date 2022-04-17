import React from 'react'
import './NavBar.css'
import LogoIMG from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
   
  return (
    <nav className="navbar ">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">
                <img className="Nav-logo"src={LogoIMG} alt="logo" />
            </a>
             <div className="navMenu">
                <ul className="navbar-nav">
                    
                    <li className="active" ><Link to='/'>Home</Link></li>
                    <li><Link to='/Pokedex'>Pokedex</Link></li>
                    <li><Link to='/Lendarios'>Lendarios</Link></li>
                    <li><Link to='/Documentations'>Documentação</Link></li>
                </ul>
            </div>
        </div>       
    </nav>
  )
}

export default NavBar