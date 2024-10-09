import Card from 'react-bootstrap/Card';
import './CardFilm.css'

function CardFilm(props) {

    return (
        <Card className="cardStyle">
            <Card.Img className="imgStyle" variant="top" src={props.img}/>
            <Card.Body>
            </Card.Body>
        </Card>
    );
}

export default CardFilm;