import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from 'mdbreact';

const AnimalCard = (props) => {
  const animal = props.animal;
  console.log(animal.photos[0].contentUrl);
  return (
    <Col className="col sm-12" md="3">
      <Card className="mb-2">
        <Link to={`/animals/${animal.id}`}>
          <CardImage className="img-fluid" src={`http://127.0.0.1:8001${animal.photos[0].contentUrl}`} />
        </Link>
        <CardBody>
          <CardText className={`card-city ${animal.association.address.city}`}><Link to={`/recherche?searchbox="${animal.association.address.city}"`}>{animal.association.address.city}</Link></CardText>
          <CardTitle className="card-animal-name">{animal.name}</CardTitle>
          <CardText className="card-asso"><Link to={`/associations/${animal.association.id}`}>{animal.association.name}</Link></CardText>
          <Link to={`/animals/${animal.id}`} className="card-link">Découvrez votre Buddy</Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimalCard;
