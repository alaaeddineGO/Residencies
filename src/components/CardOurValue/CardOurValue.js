
import Card from 'react-bootstrap/Card';
import './CardOurValue.css'
import { IoShieldCheckmark } from "react-icons/io5";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function CardOurValue() {
  return (
    <Card style={{boxShadow:'4px 8px 10px #458' , marginBottom: '10px' , cursor: 'pointer'}}>
      <Card.Header style={{backgroundColor:'#fff' , border:'none' , display: 'flex' , alignItems: 'center' , justifyContent: 'space-between' }}>
        <div className='art'><IoShieldCheckmark /></div>
        <h5 className='primaryText' style={{fontSize:'20px'}}>Best interest rates on the market</h5>
        <div className='art'><FaRegArrowAltCircleDown /></div>
      </Card.Header>
      <Card.Body>
        <Card.Text>
        Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardOurValue;