import { NavDropdown, Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const HeaderNavBar = () => {

    const authContext = useAuth();
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" >
                            Home
                        </Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <Link to='/product/list' class="dropdown-item">Product List</Link>
                            <Link to='/product/add' class="dropdown-item">Add Product</Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                       {authContext.username}
                       <span style={{marginLeft:"10px"}}>
                            <Button variant="light" onClick={()=> authContext.clearSession()}>Sign Out</Button>
                       </span>
                      
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderNavBar;