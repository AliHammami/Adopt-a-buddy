import React from 'react';
import { Link } from 'react-router-dom';
import {
  Col,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  Button,
} from 'mdbreact';

const SearchAnimalCard = (props) => {
  const animal = props.animal;

  return (
    <Col className="col-sm-4">
      <Card className="mb-2 globalCard">
        <CardImage className="img-fluid animalPicture" src={animal.image} />
        <CardBody>
          <Link to={`/animals/${animal.id}`}><CardTitle>{animal.Name}</CardTitle></Link>
          <p className="card-statut">{animal.statut}</p>
          <p>Association : <a href="#">Nom de l'association</a></p>
          <div className="card-footer">
            <Button color="danger">Supprimer ma demande</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchAnimalCard;
