import React from 'react'

function Navbar(){
    const navItems=(
    <>
    <li>
        <a href='/'>Home</a>
      </li>
      <li>
        <a href='/schd'>Train Schedule</a>
      </li>
      <li>
        <a href='/bookticket'>Book Ticket</a>
      </li>
      <li>
        <a href='/meals'>Order Meals</a>
      </li>
      <li>
        <a href='/about' >About Us</a>
      </li>
      <li>
        <a href='/contact'>Contact Us</a>
      </li>
    </>);
  return(
    <>
    <div className="max-w-full container fixed top-0 left-0 right-0 z-50">
    <div className="navbar bg-blue-500">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}</ul>
    </div>
    <a className="text-3xl font-bold cursor-pointer text-white">Mangal Yatra</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
  </div>
</div>    
    </div>
    </>
  )
}

export default Navbar;