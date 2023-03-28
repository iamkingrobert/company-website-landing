import React from 'react'

export default function Navbar() {
  return (
    <div>
     <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-none">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="navbar-brand" href="/">
                        <img src="Images/Trivago_logo.png" alt="Logo" className="img-fluid" width="150px"/>
                    </a>
                  </li>
                  </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="/"><img src="images/Ghana-removebg.png" alt="" height="30px" width="30px"/></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/"><img src="images/Naija-removebg.png" alt=""height="30px" width="30px"/></a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="/"><img src="images/Kenya-removebg.png" alt=""height="30px" width="30px"/></a>
                  </li>
                  </ul>
                  </div>
            <div className="collapse navbar-collapse order-3" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto menu-mag">
                <li className="nav-item active">
                  <a className="nav-link" href="/">About Us</a>
                </li>
                </ul>
            </div>
        </nav>
     </div>
    </div>
  )
}
