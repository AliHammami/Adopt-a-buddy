import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'mdbreact';

const ModifyAnimalCard = (props) => {
  const animal = props.animal;

  return (
    <Col className="col-sm-4">
      <Card className="mb-2 globalCard">
        <CardImage className="img-fluid animalPicture" src={animal.image} />
        <CardBody>
          <Link to={`/animals/${animal.id}`}><CardTitle>{animal.Name}</CardTitle></Link>
          <div className="card-footer card-footer-myanimals">
            <Button color="success">Modifier l'animal</Button>{' '}
            <Button color="danger">Supprimer l'animal</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ModifyAnimalCard;
