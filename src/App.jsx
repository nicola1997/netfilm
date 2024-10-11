import {useEffect} from 'react';
import './App.css';
import Navbar from "./components/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import {getMovie} from "./services/Movie.js";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CardFilm from "./components/CardFilm.jsx";
import {useDispatch, useSelector} from 'react-redux';
import {setMovies} from "./redux/MovieSlice.js";
import CarouselsFilm from "./components/CarouselsFilm.jsx";
import './components/TextStyle.css';

function App() {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    const fetchMovies = async () => {
        try {
            const mv = await getMovie();
            dispatch(setMovies(mv));
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div>
            <Navbar/>
            <CarouselsFilm/>
            <h1 className='TextStyle'>Film che potrebbero piacerti</h1>
            <Container>
                <Row>
                    {movies.map((film, index) => (
                        <Col key={index}>
                            <CardFilm img={film.img}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default App;
