import "./Cards.css";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import data from "../../data";



function Cards() {
  const [newData, setNewData] = useState(data)
  console.log(newData)



 
  const navigate = useNavigate();



  return (
    <CardGroup>
      {newData.categorys.map((card, index) => (
        <Card className="hover-effect" key={index}>
          <Card.Img className="cardImage" variant="top" src={card.image} />
          {console.log(card)}
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Link to={`/category/${card.category}`}>
            <button  className="buttonGo">GO!!</button>
            </Link>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
}

export default Cards;
