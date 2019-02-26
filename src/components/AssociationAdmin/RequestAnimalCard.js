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

const RequestAnimalCard = (props) => {
  const animal = props.animal;

  return (
    <Col className="col-sm-4">
      <Card className="mb-2 globalCard">
        <CardImage className="img-fluid animalPicture" src={animal.image} />
        <CardBody>
          <Link to={`/animals/${animal.id}`}><CardTitle>{animal.Name}</CardTitle></Link>
          <p className="card-statut">{animal.statut}</p>
          <p>Demande réalisé par : <a href="#">Nom de l'utisateur</a></p>
          <div className="card-footer">
            <Button color="success">Confirmer la demande</Button>{' '}
            <Button color="danger">Rejeter la demande</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RequestAnimalCard;
