import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./logo.png"

function NavBar() {
    return (
        <>
            <Navbar bg="white" data-bs-theme="light" >
                <Container>
                    <Nav className="mx-auto">
                        <Navbar.Brand className="fw-bold" href="#home">
                            <div>
                                <img className="logo" src={logo} alt="Driftify"/>
                            </div>
                        </Navbar.Brand>
                        <Nav.Link className="fw-bold fs-4" href="#jobba">Jobba hos oss</Nav.Link>
                        <Nav.Link className="fw-bold fs-4" href="#vara">Våra tjänster</Nav.Link>
                        <Nav.Link className="fw-bold fs-4" href="#omoss">Om oss</Nav.Link>
                        <Nav.Link className="fw-bold fs-4" href="#kontakt">Kontakt</Nav.Link>
                        <Nav.Link className="fw-bold fs-4" href="#intra">Intranät</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;