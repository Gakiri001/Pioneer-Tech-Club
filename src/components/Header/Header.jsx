import React from 'react'
import logo from "../../assets/mut_logo.png"
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
    <>
    <div className='Header'>
      <div className='HeaderImage'>
        <img src={logo} alt="" />
      </div>
    <ul className='HeaderLinks'>
      <li><Link className='links' to="/">Tech News</Link></li>
      <li><Link className='links' to="/">Events</Link></li>
      <li><Link className='links' to="/">Performance</Link></li>
      <li><Link className='links' to="/">Resources</Link></li>
    </ul>
    <div className='HeaderSign'>
      <button>Sign up</button>
      <button>Sign in</button>
    </div>
    </div>
    </>
  )
}

export default Header