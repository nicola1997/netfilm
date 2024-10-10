import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {useState} from "react";
import Button from "react-bootstrap/Button";
import ModalReg from "./ModalReg.jsx";
import {NavbarText} from "react-bootstrap";
import {Link} from "react-router-dom";
import './TextStyle.css'

function NavBar() {
    const [log, setLog] = useState(false);
    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to={'/'}><h1 className='TextStyle'> NetFilm </h1></Link></Navbar.Brand>
                    <NavbarText> <Link to={'/film'}> Film</Link> </NavbarText>

                    <Navbar.Text>
                        {log === false ? (
                            <Button onClick={showModal} variant="primary">Registrati</Button>
                        ) : 'Signed'}
                    </Navbar.Text>
                </Container>
            </Navbar>
            <ModalReg show={modal} close={closeModal}/>
        </div>
    );
}

export default NavBar;
