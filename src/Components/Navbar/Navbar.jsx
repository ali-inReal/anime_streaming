import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context';
function NavigationBar() {
  const loginData = useContext(UserContext);
  const {login,setLogin,admin,setAdmin} = loginData
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
              to="/popular">Popular</Link>
                <Link
              className="link" style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
              to="/search">Search</Link>
              {admin!==""?<Link
              className="link" style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
              }}
              to="/admin">Admin</Link>:""}
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

            <Link className="link" onClick={()=>{setLogin("")}} to="/login">Logout</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;