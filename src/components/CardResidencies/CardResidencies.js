import Card from 'react-bootstrap/Card';
import c1 from '../../asets/r1.png';
import { BiDollar } from "react-icons/bi";
import './CardResidencies.css'

function CardResidencies() {
  return (
    <Card style={{ width: '14rem' , border: 'none' }}>
      <Card.Img variant="top" src={c1} />
      <Card.Body>
        <span className='ddd'><BiDollar />77,458</span>
        <Card.Title style={{fontSize:'27px'}} className='primaryText'>Aliva ayfnv jourdan</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardResidencies;