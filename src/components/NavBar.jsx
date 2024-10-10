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
    let [searchBar, setSearchBar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const showModal = () => setModal(true);
    const showSearchBar = () => setSearchBar(true);
    const closeModal = () => setModal(false);
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
                                style={{backgroundColor:'white',marginLeft:'10px'}}
                            />
                        ) : null
                        }
                    </NavbarText>


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
