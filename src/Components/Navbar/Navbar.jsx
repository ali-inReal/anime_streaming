import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg"
      style={{
        backgroundColor: "#0477BF !imporant"
      }}
    >
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem"
            }}
            className="me-auto">
            <Link className="link"
              to='/'>Home</Link>
            <Link
              className="link"
              to="/">Popular</Link>
            {/* <Nav.Link href="#pricing">Genre</Nav.Link> */}
          </Nav>
          <Nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem"
          }}
          >
            <Link className="link" to="/login">Login</Link>
            <Link to="/" className='link'>
              Sign Up
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;