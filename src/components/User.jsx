import React, {useState} from 'react';
import {Button, Card} from 'react-bootstrap';
import NavBar from "./NavBar.jsx";

const User = () => {
    const [userData, setUserData] = useState({
        username: 'johndoe',
        email: 'johndoe@example.com',
        name: 'John',
        surname: 'Doe',
        birthdate: '1990-01-01',
        bio: 'Appassionato di cinema e tecnologia.',
        favoriteMovies: ['Il Padrino', 'Inception', 'Interstellar']
    });

    const handleEdit = () => {
        // Logica per modificare il profilo dell'utente
        console.log("Modifica profilo");
        // Qui potresti aggiungere un modal o un form per modificare i dati
    };

    return (
        <div>
            <NavBar/>
            <Card style={{width: '18rem', margin: '20px', backgroundColor: '#f8f9fa'}}>
                <Card.Body>
                    <Card.Title>
                        <span role="img" aria-label="film">🎬</span> {userData.username}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{userData.email}</Card.Subtitle>
                    <Card.Text>
                        <strong>Nome:</strong> {userData.name}<br/>
                        <strong>Cognome:</strong> {userData.surname}<br/>
                        <strong>Data di nascita:</strong> {userData.birthdate}<br/>
                        <strong>Bio:</strong> {userData.bio || "Nessuna bio disponibile."}
                    </Card.Text>
                    <Card.Text>
                        <strong>Film Preferiti:</strong><br/>
                        {userData.favoriteMovies.length > 0 ? userData.favoriteMovies.map((movie, index) => (
                            <span key={index}>{movie}<br/></span>
                        )) : "Nessun film preferito."}
                    </Card.Text>
                    <Button variant="primary" onClick={handleEdit}>
                        Modifica Profilo
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default User;
