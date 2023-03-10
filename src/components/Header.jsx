import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css/header.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import jsPDF from 'jspdf'
import { useState } from 'react';


const Header=()=>{
    
    const scrollToID= 'about'
    const scrollCourses= 'courses'
    const scrollskill= 'skill'
    const scrollExperience= 'skill'
    const scrollEducation= 'education'

    const handleClickNav =()=>{
        document.getElementById(scrollToID).scrollIntoView({behavior:
        "smooth"})
    }
    const handleClickNavCurses =()=>{
        document.getElementById(scrollCourses).scrollIntoView({behavior:
        "smooth"})
    }
    const handleClickSkill =()=>{
        document.getElementById(scrollskill).scrollIntoView({behavior:
        "smooth"})
    }
    const handleClickExperience =()=>{
      document.getElementById(scrollExperience).scrollIntoView({behavior:
      "smooth"})
  }
  const handleClickEducation =()=>{
    document.getElementById(scrollEducation).scrollIntoView({behavior:
    "smooth"})
}
const onButtonClick = () => {
  let doc= new jsPDF ('portrait','px','a4',false)
  doc.addImage('https://i.ibb.co/V345Qwm/Carlos-Nasay.png','PNG',0,0,417,653)
  doc.save('CarlosNasayo.pdf')
 
}
    return(
            <>
               {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="hola">
          <Container fluid>
            <Navbar.Brand href="#">Curriculum Vitae</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link onClick={handleClickNav}>About</Nav.Link>
                  <Nav.Link onClick={handleClickNavCurses}>Courses</Nav.Link>
                  <Nav.Link onClick={handleClickSkill}>Skills</Nav.Link>
                  <Nav.Link onClick={handleClickExperience}>Experience</Nav.Link>
                  <Nav.Link onClick={handleClickEducation}>Education</Nav.Link>
                  <Nav.Link onClick={onButtonClick}>Download Cv</Nav.Link>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
            </>
          );
        }

    

export default Header;