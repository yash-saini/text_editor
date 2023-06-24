import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  const colorthemefunction = (color_code)=>{
    props.changingthemes(color_code)
    props.changingAlertStates("Changed Theme","success")
   }
  

  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.dorl} bg-${props.dorl}`}>
  <div className="container-fluid" >
    <Link className="navbar-brand mb-0.5" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
  
     {/*       
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
       */}

    <div className="dropdown mx-5">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Color Themes
        </button>
        <ul className="dropdown-menu" style={{backgroundColor: 'lightyellow'}}>
            <li><button className="dropdown-item" style={{backgroundColor: '#5CB3FF', color: 'white'}} onClick={ () => colorthemefunction("#5CB3FF")}>Color 1</button></li>
            <li><button className="dropdown-item"  style={{backgroundColor: '#004225', color: 'white'}} onClick={ () => colorthemefunction("#004225")}>Color 2</button></li>
            <li><button className="dropdown-item"  style={{backgroundColor: '#FFDAB9', color: 'Blue'}} onClick={() => colorthemefunction("#FFDAB9")}>Color 3</button></li>
        </ul>
    </div>

       <div className="form-check form-switch" >
            <input className="form-check-input" type="checkbox" onClick={props.darkmode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color : props.dorl ==='light' ? 'black':'white'}}>{props.buttonlabel}</label>
    </div>

    </div>

  </div>
 
</nav>

  )
}

Navbar.propTypes= {
                title: PropTypes.string.isRequired,
                about: PropTypes.string.isRequired
                  }
Navbar.defaultProps = {
                title: "Give a title here",
                about: "Give about here"
                 }