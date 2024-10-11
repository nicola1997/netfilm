import React, {useState} from 'react';
import {Button, Card, Modal, Form} from 'react-bootstrap';
import NavBar from "./NavBar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setUsernameRedux, setEmailRedux, setPasswordRedux} from '../redux/userSlice';

const User = () => {
    const dispatch = useDispatch();

    const username = useSelector((state) => state.user.username);
    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);

    const [name, setName] = useState('Nome');
    const [surname, setSurname] = useState('Cognome');
    const [birthdate, setBirthdate] = useState('01/01/1990');
    const [bio, setBio] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleEdit = () => {
        setShowModal(true);
    };

    const handleSave = () => {
        // Logica per salvare i dati modificati
        dispatch(setUsernameRedux(username));  // Aggiorna il Redux con i nuovi valori se necessario
        dispatch(setEmailRedux(email));
        dispatch(setPasswordRedux(password));
        setShowModal(false);
    };

    return (
        <div>
            <NavBar/>
            <Card style={{width: '18rem', margin: '20px', backgroundColor: '#f8f9fa'}}>
                <Card.Body>
                    <Card.Title>
                        <span role="img" aria-label="film">🎬</span> {username || "Username"}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{email || "Email non disponibile"}</Card.Subtitle>
                    <Card.Text>
                        <strong>Nome:</strong> {name}<br/>
                        <strong>Cognome:</strong> {surname}<br/>
                        <strong>Data di nascita:</strong> {birthdate}<br/>
                        <strong>Bio:</strong> {bio || "Nessuna bio disponibile."}
                    </Card.Text>

                    <Button variant="primary" onClick={handleEdit}>
                        Modifica Profilo
                    </Button>
                </Card.Body>
            </Card>

            {/* Modal per modificare i dati */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica Profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={username} onChange={(e) => dispatch(setUsernameRedux(e.target.value))} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => dispatch(setEmailRedux(e.target.value))} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Cognome</Form.Label>
                            <Form.Control type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Data di nascita</Form.Label>
                            <Form.Control type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Bio</Form.Label>
                            <Form.Control as="textarea" rows={3} value={bio} onChange={(e) => setBio(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Chiudi
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Salva Modifiche
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default User;
