import React from 'react'

import "./navbar.css"

export default function Navbar(props) {
  return (
    <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/" style={{fontFamily:'Kaushan Script',fontSize:"40px"}}>A-plus</a>


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
              <a className="nav-link active"  href='/' >Home</a> 
          </li>

          {/* <li className="nav-item">
            {    props.user && props.user._id ? <a className="nav-link active" href='/roadmap' >Roadmap</a> : <a className="nav-link active" href='/login' >Login</a>  } 
          </li> */}
          <li className="nav-item">
            {    props.user && props.user._id ? <a className="nav-link active" href='/resourcescategory' >Resources</a> :<a className="nav-link active" href='/login' >Login</a>} 
          </li>
          <li className="nav-item">
            {    props.user && props.user._id ? <a className="nav-link active" href='/' onClick={() => props.updateUser({})} >Logout</a> : <a className="nav-link active" href='/register' >Register</a>  } 
          </li>
        </ul>

      </div>

    </div>
  </nav>

        
   
   
  </div>
  )
}
