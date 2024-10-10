import {useEffect, useState} from 'react'
import './App.css'
import Navbar from "./components/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getMovie} from "./services/Movie.js";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CardFilm from "./components/CardFilm.jsx";
import {useDispatch, useSelector} from 'react-redux';
import {setMovies} from "./redux/MovieSlice.js";
import CarouselsFilm from "./components/CarouselsFilm.jsx";
import './components/TextStyle.css'
import EuroInput from "./components/EuroInput.jsx";


function App() {
    const [localMovies, setLocalMovies] = useState([]);
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);


    const fetchMovies = async () => {
        debugger
        const movies = await getMovie()
        setLocalMovies(movies);
        dispatch(setMovies(movies))
    }

    useEffect(() => {
        fetchMovies()

    }, []);


    return (
        <div>
            <Navbar></Navbar>
            <CarouselsFilm></CarouselsFilm>
            <h1 className='TextStyle'>Film che potrebbero piacerti </h1>
            <Container>
                <Row>
                    {localMovies.map((film, index) => (
                        <Col key={index}>
                            <CardFilm titolo={film.title} desc={film.descrizione} img={film.img}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default App
