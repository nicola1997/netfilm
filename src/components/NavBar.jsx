import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import icon from '../assets/icon.jpg';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalReg from "./ModalReg.jsx";

function NavBar() {
    const [log, setLog] = useState(false);
    const [modal, setModal] = useState(false);

    const handleShowModal = () => setModal(true);
    const handleCloseModal = () => setModal(false);

    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>NETFILM <img src={icon} alt="img" style={{ width: '30px', height: '30px' }} /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {log === false ? (
                                <Button onClick={handleShowModal} variant="primary">Registrati</Button>
                            ) : 'Signed'}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ModalReg show={modal} handleClose={handleCloseModal} />
        </div>
    );
}

export default NavBar;
