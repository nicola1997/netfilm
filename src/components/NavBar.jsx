import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import icon from '../assets/icon.jpg'
function NavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand >NETFILM <img src={icon} alt="img" style={{ width: '30px', height: '30px' }}/></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: Nicola Otto
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar