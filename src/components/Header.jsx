import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles.css/header.css'
import Offcanvas from 'react-bootstrap/Offcanvas';


const Header=()=>{
    
    const scrollToID= 'about'
    const scrollCourses= 'courses'
    const scrollskill= 'skill'

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
                  <Nav.Link href="#action2">Experience</Nav.Link>
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