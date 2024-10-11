import Carousel from 'react-bootstrap/Carousel';
import TopFilm from './TopFilm.jsx';
import {useSelector} from "react-redux";

function CarouseldsFilm() {
    const movies = useSelector((state) => state.movies);

    return (<div>
            <h1 className='TextStyle'> I film più popolari</h1>
            <Carousel>
                <Carousel.Item>
                    <TopFilm img={movies[Math.floor(Math.random() * movies.length)]?.img}/>

                </Carousel.Item>
                <Carousel.Item>
                    <TopFilm img={movies[Math.floor(Math.random() * movies.length)]?.img}/>

                </Carousel.Item>
                <Carousel.Item>
                    <TopFilm img={movies[Math.floor(Math.random() * movies.length)]?.img}/>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default CarouseldsFilm;