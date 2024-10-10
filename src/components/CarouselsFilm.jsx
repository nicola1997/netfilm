import Carousel from 'react-bootstrap/Carousel';
import TopFilm from './TopFilm.jsx';
import {useSelector} from "react-redux";

function CarouseldsFilm() {
    const movies = useSelector((state) => state.movies);

    return (
        <div>
            <h1 className='TextStyle'> I film più popolari</h1>
            <Carousel>
                <Carousel.Item>
                    <TopFilm img={movies[Math.floor(Math.random() * movies.length)]?.img}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <TopFilm img={movies[Math.floor(Math.random() * movies.length)]?.img}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <TopFilm img={movies[Math.floor(Math.random() * movies.length)]?.img}/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default CarouseldsFilm;