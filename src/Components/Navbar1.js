import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



export default function Navbar1() {
  return (
    <Navbar expand="lg" className="bg-white my-3">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>BOOKHUB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to='/' className='mx-3 fw-semibold'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about' className='mx-3 fw-semibold'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

