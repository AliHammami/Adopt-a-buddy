import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import AnimalCardsDog from './AnimalCardsDog';
import AnimalCardsCat from './AnimalCardsCat';
import * as actions from '../../../actions';

class AnimalCardsList extends React.Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchAnimals());
  }

  render() {
    const { animals } = this.props;
    let dogs = [];
    let cats = [];
    [dogs, cats] = _.partition(animals, a => a.race.species.name === 'chien');

    return (
      <div className="container">
        <section id="animalListing">
          <h2 className="page-title">Nos derniers Dogs Buddy n'attendent plus que vous !</h2>
          <div className="page-title-link"><Link to={'/recherche?species-list="chien"'}>Voir tous les Dogs Buddy</Link></div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner row w-100 mx-auto">
              <AnimalCardsDog dogs={dogs} />
            </div>
          </div>
        </section>
        <section id="animalListing">
          <h2 className="page-title">Nos derniers Cats Buddy n'attendent plus que vous !</h2>
          <div className="page-title-link"><Link to={'/recherche?species-list="chat"'}>Voir tous les Cats Buddy</Link></div>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner row w-100 mx-auto">
              <AnimalCardsCat cats={cats} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    animals: state.animals.data,
  };
}

export default connect(mapStateToProps)(AnimalCardsList);
