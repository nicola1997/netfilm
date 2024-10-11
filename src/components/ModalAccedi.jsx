import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {login, setUser} from "../services/Movie.js";
import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {setEmailRedux, setUsernameRedux,setPasswordRedux} from "../redux/UserSlice.js";


function ModalAccedi({show, close, joined, failAccess}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const loginUser = async () => {
        const userData = {
            username: username, email: email, password: password
        };

        try {
            const response = await login(userData);
            if (response === "Login riuscito") {
                joined();
                dispatch(setEmailRedux(email))
                dispatch(setUsernameRedux(username))
                dispatch(setPasswordRedux(password))
            } else {
                failAccess();
                console.error("Login fallito");
            }
        } catch (error) {
            console.error(error.message);
        }
    };


    return (<Modal show={show} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title>Accedi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  // Aggiorna lo stato email
                    />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  // Aggiorna lo stato password
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}  // Aggiorna lo stato username
                    />
                </Form.Group>
                <Button variant="primary" onClick={() => {
                    loginUser();
                    close();
                }}>
                    Invia
                </Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>
                Close
            </Button>
        </Modal.Footer>
    </Modal>);
}

export default ModalAccedi;
