import React from 'react'
import logo from "../../assets/mut_logo.png"

function Header() {
  return (
    <>
    <div>
      <div>
        <img src={logo} alt="" />
      </div>
    <ul>
      <li>Tech News</li>
      <li>Events</li>
      <li>Performance</li>
    </ul>
    <div>
      <button>Sign up</button>
      <button>Sign in</button>
    </div>
    </div>
    </>
  )
}

export default Header