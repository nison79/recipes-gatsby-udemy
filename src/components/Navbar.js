import React from 'react'
import { Link } from 'gatsby'
import { FaAlignJustify } from 'react-icons/fa'
import Logo  from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="recipes logo"/>
          </Link>
          <button className="nav-btn">
            <FaAlignJustify  />
          </button>
        </div>
        <div className="nav-links show-links">
          <Link to="/" className="nav-link" activeClassName="active-link">Home</Link>
          <Link to="/" className="nav-link" activeClassName="active-link">Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
