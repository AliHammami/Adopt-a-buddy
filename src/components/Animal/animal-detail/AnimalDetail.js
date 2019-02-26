import React from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
/* import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap'; */
import * as actions from '../../../actions';
import Map from '../../Map/Map';
import AnimalAdoption from '../animal-adoption/AnimalAdoption';

class AnimalDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proposedAdoption: {
        animal: {},
        status: '',
      },
      modal: false,
      errors: [],
    };

    this.cancelAdoption = this.cancelAdoption.bind(this);
    this.reserveAdoption = this.reserveAdoption.bind(this);
  }


  componentWillMount() {
    const animalId = this.props.match.params.id;
    this.props.dispatch(actions.fetchAnimalById(animalId));
  }

  cancelAdoption() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  confirmAdoption() {
    const { animal } = this.props;
    this.setState({
      proposedAdoption: {
        animal,
      },
      modal: true,
    });
  }

  reserveAdoption() {
    const animalId = this.props.match.params.id;
    const proposedAdoption = this.state.proposedAdoption;
    const animal = proposedAdoption.animal;
    
    animal.status['@id'] = '/api/statuses/103';
  
    this.props.dispatch(actions.updateAnimal(animal));
  
    this.cancelAdoption();
    NotificationManager.success('Votre demande a été envoyée');
  }

  render() {
    const { animal } = this.props;
    if (animal['@id']) {
      return (
        <div className="container animal-detail">
          <NotificationContainer />
          <section id="animalDetails">
            <h2 className="assoName">{animal.name} - {animal.association.address.city}</h2>
            <div className="row">
              <section className="col-xs-12 col-sm-6">
                <div className="profiler">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img className="d-block w-100" src={`http://127.0.0.1:8001${animal.photos[0].contentUrl}`} alt="First slide" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <a onClick={() => this.confirmAdoption()} className="card-link card-link-profil">Adoptez votre Buddy</a>
                    <p className="paragraph">
                      {animal.description}
                    </p>
                  </div>
                  <h3 className="title3">Partagez le profil de ce buddy</h3>
                  <div className="row share">
                    <a className="resp-sharing-button__link" href={`https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fadoptabuddy.com/animals/${animal.id}`} target="_blank" aria-label="">
                      <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm3.6 11.5h-2.1v7h-3v-7h-2v-2h2V8.34c0-1.1.35-2.82 2.65-2.82h2.35v2.3h-1.4c-.25 0-.6.13-.6.66V9.5h2.34l-.24 2z" /></svg>
                                                                                                                    </div>
                      </div>
                    </a>
                    <a className="resp-sharing-button__link" href="https://twitter.com/intent/tweet/?text=Decouvrez cet animal et adoptez-le.&amp;url=#" target="_blank" aria-label="">
                      <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.38 0 0 5.38 0 12s5.38 12 12 12 12-5.38 12-12S18.62 0 12 0zm5.26 9.38v.34c0 3.48-2.64 7.5-7.48 7.5-1.48 0-2.87-.44-4.03-1.2 1.37.17 2.77-.2 3.9-1.08-1.16-.02-2.13-.78-2.46-1.83.38.1.8.07 1.17-.03-1.2-.24-2.1-1.3-2.1-2.58v-.05c.35.2.75.32 1.18.33-.7-.47-1.17-1.28-1.17-2.2 0-.47.13-.92.36-1.3C7.94 8.85 9.88 9.9 12.06 10c-.04-.2-.06-.4-.06-.6 0-1.46 1.18-2.63 2.63-2.63.76 0 1.44.3 1.92.82.6-.12 1.95-.27 1.95-.27-.35.53-.72 1.66-1.24 2.04z" /></svg>
                                                                                                                   </div>
                      </div>
                    </a>
                    <a className="resp-sharing-button__link" href="whatsapp://send?text=Decouvrez cet animal et adoptez-le !" target="_blank" aria-label="">
                      <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solidcircle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><path d="m12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 3.8c2.2 0 4.2 0.9 5.7 2.4 1.6 1.5 2.4 3.6 2.5 5.7 0 4.5-3.6 8.1-8.1 8.1-1.4 0-2.7-0.4-3.9-1l-4.4 1.1 1.2-4.2c-0.8-1.2-1.1-2.6-1.1-4 0-4.5 3.6-8.1 8.1-8.1zm0.1 1.5c-3.7 0-6.7 3-6.7 6.7 0 1.3 0.3 2.5 1 3.6l0.1 0.3-0.7 2.4 2.5-0.7 0.3 0.099c1 0.7 2.2 1 3.4 1 3.7 0 6.8-3 6.9-6.6 0-1.8-0.7-3.5-2-4.8s-3-2-4.8-2zm-3 2.9h0.4c0.2 0 0.4-0.099 0.5 0.3s0.5 1.5 0.6 1.7 0.1 0.2 0 0.3-0.1 0.2-0.2 0.3l-0.3 0.3c-0.1 0.1-0.2 0.2-0.1 0.4 0.2 0.2 0.6 0.9 1.2 1.4 0.7 0.7 1.4 0.9 1.6 1 0.2 0 0.3 0.001 0.4-0.099s0.5-0.6 0.6-0.8c0.2-0.2 0.3-0.2 0.5-0.1l1.4 0.7c0.2 0.1 0.3 0.2 0.5 0.3 0 0.1 0.1 0.5-0.099 1s-1 0.9-1.4 1c-0.3 0-0.8 0.001-1.3-0.099-0.3-0.1-0.7-0.2-1.2-0.4-2.1-0.9-3.4-3-3.5-3.1s-0.8-1.1-0.8-2.1c0-1 0.5-1.5 0.7-1.7s0.4-0.3 0.5-0.3z" /></svg>
                                                                                                                    </div>
                      </div>
                    </a>


                  </div>
                </div>
              </section>
              <section className="profile col-xs-12 col-sm-6">
                <div className="map">
                  <Map location={`${animal.association.address.city}, ${animal.association.address.line1}`} />
                </div>
                <div>
                  <h3 className="title3 contact">Description</h3>
                  <div className="col-md-6 d-inline-flex flex-wrap">
                    <ul>
                      <li>Nom : {animal.name}</li>
                      <li>Age : {animal.age}</li>
                      <li>Genre : {animal.sex.name}</li>
                      <li>Race : {animal.race.species.name}</li>
                    </ul>
                  </div>
                  <div className="col-md-6 d-inline-flex flex-wrap">
                    <ul>
                      <li>Pelage: {animal.coats.name}</li>
                      <li>Taille : {animal.size.name}</li>
                      <li>Couleur : {animal.color.name}</li>
                    </ul>
                  </div>
                  <div className="align-card-link">
                    <a href={`/associations/${animal.association.id}`} className="card-link">Découvrez l'association {animal.association.name}</a>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <AnimalAdoption
            open={this.state.modal}
            closeModal={this.cancelAdoption}
            reserveAdoption={this.reserveAdoption}
            adoption={this.state.proposedAdoption.animal}
          />
        </div>
      );
    }
    return (
      <div className="container animal-detail">
        <h2> Chargement....</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animal: state.animal.data,
  };
}

export default connect(mapStateToProps)(AnimalDetail);
