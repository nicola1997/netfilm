import NavBar from "./NavBar.jsx";
import CardFilm from "./CardFilm.jsx";
import {useSelector} from "react-redux";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function Film() {
    const movies = useSelector((state) => state.movies);

    return (
        <div>
            <NavBar></NavBar>

            <Container>
                <Row>
                    {movies.map((film, index) => (
                        <Col key={index}>
                            <CardFilm titolo={film.title} desc={film.descrizione} img={film.img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Film