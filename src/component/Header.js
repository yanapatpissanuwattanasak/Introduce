import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import { ScrollTo } from "react-scroll-to";
import {Link} from 'react-scroll'
function Header() {
  return (
  <div>
  <Navbar className='justify-content-center' bg="light" expand="lg">
      <Nav className="d-flex justify-content-between">
        <Nav.Link ><Link  to="aboutMe" spy={true} smooth={true}>About Me</Link></Nav.Link>
        <Nav.Link><Link  to="education" spy={true} smooth={true}>Education</Link></Nav.Link>
        <Nav.Link><Link  to="award" spy={true} smooth={true}>Award</Link></Nav.Link>
        <Nav.Link><Link  to="certificate" spy={true} smooth={true}>Certificate</Link></Nav.Link>
        <Nav.Link><Link  to="footer" spy={true} smooth={true}>Contact</Link></Nav.Link>
      </Nav>
  </Navbar>
  </div>
  )
  
  
}
export default Header
