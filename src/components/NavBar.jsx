import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {useState} from "react";
import Button from "react-bootstrap/Button";
import ModalReg from "./ModalReg.jsx";
import {Alert, NavbarText} from "react-bootstrap";
import {Link} from "react-router-dom";
import './TextStyle.css'
import ModalAccedi from "./ModalAccedi.jsx";
import AlertDismissibleExample from "./AlertDismissibleExample.jsx";

function NavBar() {
    const [log, setLog] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalAccedi, setModalAccedi] = useState(false);
    let [searchBar, setSearchBar] = useState(false);
    let [isJoin, setIsJoin] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [failAccesso, setFailAccesso] = useState(false);

    const showModal = () => setModal(true);
    const showModalAccedi = () => setModalAccedi(true);
    const showSearchBar = () => setSearchBar(true);
    const closeModal = () => setModal(false);
    const closeModalAccedi = () => setModalAccedi(false);
    const joined = () => setIsJoin(true);
    const failAccess = () => {
        debugger
        setFailAccesso(true)
    }

    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand><Link to={'/'}><h1 className='TextStyle'> NetFilm </h1></Link></Navbar.Brand>
                    <NavbarText> <Link to={'/film'}> Film</Link> </NavbarText>
                    <NavbarText onClick={showSearchBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        {searchBar === true ? (

                            <input
                                type="text"
                                placeholder="Cerca un film..."
                                value={searchTerm}
                                style={{backgroundColor: 'white', marginLeft: '10px'}}
                            />
                        ) : null
                        }
                    </NavbarText>


                    <Navbar.Text>
                        {isJoin === false ? (
                            <Button onClick={showModal} variant="Secondary">Registrati</Button>
                        ) : ''}
                    </Navbar.Text>
                    <Navbar.Text>
                        {isJoin === false ? (
                            <Button onClick={showModalAccedi} variant="Secondary">Accedi</Button>
                        ) : ''}
                    </Navbar.Text>
                    <Navbar.Text>
                        {isJoin === true ? (
                            <Button variant="Secondary">
                                <Link to={'/user'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                         className="bi bi-person-circle" viewBox="0 0 16 16">
                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                        <path fillRule="evenodd"
                                              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                    </svg>
                                </Link>

                            </Button>
                        ) : ''}
                    </Navbar.Text>
                </Container>
            </Navbar>
            {failAccesso === true ? <AlertDismissibleExample/> : ''}
            <ModalReg show={modal} close={closeModal}/>
            <ModalAccedi show={modalAccedi} close={closeModalAccedi} joined={joined} failAccess={failAccess}/>
        </div>
    );
}

export default NavBar;
