import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Card,
  CardImage,
} from 'mdbreact';

const AnimalCard = (props) => {
  const animal = props.animal;

  return (
    <Col className="col-sm-12" md="3">
      <Card className="mb-2">
        <Link to={`/animals/${animal.id}`}>
          <CardImage className="img-fluid" src={`http://127.0.0.1:8000${animal.photos[0].contentUrl}`} />
        </Link>
      </Card>
    </Col>
  );
};

export default AnimalCard;
