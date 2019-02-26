import React from 'react';
import { Row } from 'mdbreact';
import { Link } from 'react-router-dom';
// import './adoptantProfile.scss';
import RequestAnimalCard from './RequestAnimalCard';


class Requests extends React.Component {
  state = {
    animals: [{
      id: 1,
      Name: 'Doggy',
      city: 'Paris',
      street: 'rue de la pompette',
      Asso: 'refuge 8',
      category: 'Cat',
      image: 'https://placeimg.com/336/226/animals',
      Race: 'york',
      description: 'Very nice apartment',
      shared: false,
      createdAt: '24/12/2017',
      statut: 'statut: accepté',
    },
    {
      id: 2,
      Name: 'Chat',
      city: 'Paris',
      street: 'rue de la pompette',
      Asso: 'refuge 7',
      category: 'Cat',
      image: 'https://placeimg.com/336/226/animals',
      Race: 'york',
      description: 'Very nice apartment',
      shared: false,
      createdAt: '24/12/2017',
      statut: 'statut: en attente',
    },
    {
      id: 3,
      Name: 'Minoche',
      city: 'Paris',
      street: 'rue de la pompette',
      Asso: 'refuge 6',
      category: 'Cat',
      image: 'https://placeimg.com/336/226/animals',
      Race: 'york',
      description: 'Very nice apartment',
      shared: false,
      createdAt: '24/12/2017',
      statut: 'statut: refusé',
    }],
  }

  renderAnimals() {
    return this.state.animals.map(animal => (
      <RequestAnimalCard key={animal.id} animal={animal} />
    ));
  }

  render() {
    const associationId = localStorage.idAsso;
    return (
      <div className="container containerRegister">
        <div className="row">
          <div className="col-md-2 item">
            <div className="list-group ">
              <Link to={`/association-admin/${associationId}`} className="list-group-item list-group-item-action">Mon profil</Link>
              <Link to={`/association-admin/mes-demandes/${associationId}`} className="list-group-item onItem">Mes demandes</Link>
              <Link to={`/association-admin/ajouter-animal/${associationId}`} className="list-group-item list-group-item-action">Ajouter un Animal</Link>
              <Link to={`/association-admin/mes-animaux/${associationId}`} className="list-group-item list-group-item-action">Mes Animaux</Link>
            </div>
          </div>
          <div className="col-md-10 update">
            <div className="card">
              <div className="card-body">
                <h4 className="titleRequire">Mes demandes</h4>
                <Row>
                  {this.renderAnimals()}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Requests;
