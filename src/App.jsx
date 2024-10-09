import {useEffect, useState} from 'react'
import './App.css'
import Navbar from "./components/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getMovie} from "./services/Movie.ts";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CardFilm from "./components/CardFilm.jsx";


function App() {
    const [localMovies, setLocalMovies] = useState([]);
    const fetchMovies = async () => {
        setLocalMovies(await getMovie());
    }

    useEffect(() => {
       fetchMovies()
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Row>
                    {localMovies.map((film, index) => (
                        <Col key={index}>
                            <CardFilm titolo={film.title} desc={film.descrizione} img={film.img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default App
