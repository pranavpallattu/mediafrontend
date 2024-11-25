import { faVideo, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>  <Navbar className="bg-transparent p-3">
    <Container>
      <Navbar.Brand>
      
     <Link to={'/'} style={{textDecoration:'none'}} > <h2 className='text-warning'><FontAwesomeIcon icon={faVideo} className='text-warning' beat style={{color: "#FFD43B",}} /> Media Player</h2></Link>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header