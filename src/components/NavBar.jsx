import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import icon from '../assets/icon.jpg';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalReg from "./ModalReg.jsx";
import {NavbarText} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar() {
    const [log, setLog] = useState(false);
    const [modal, setModal] = useState(false);

    const showModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to={'/'}> NETFILM <img src={icon} alt="img" style={{ width: '30px', height: '30px' }} /></Link></Navbar.Brand>
                    <NavbarText> <Link to={'/film'}> FILM</Link>  </NavbarText>

                    <Navbar.Text>
                            {log === false ? (
                                <Button onClick={showModal} variant="primary">Registrati</Button>
                            ) : 'Signed'}
                        </Navbar.Text>
                </Container>
            </Navbar>
            <ModalReg show={modal} close={closeModal} />
        </div>
    );
}

export default NavBar;
