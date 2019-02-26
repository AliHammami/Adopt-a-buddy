import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Select from 'react-select';
import { connect } from 'react-redux';
import { fetchRace, fetchSex, fetchCoats, fetchColor, fetchSize, fetchSpecie, createAnimal } from '../../actions';
 
import AddAnimalForm from './AddAnimalForm';

class AddAnimal extends React.Component {
  constructor() {
    super();

    this.addAnimal = this.addAnimal.bind(this);
  }
  componentWillMount() {
    this.props.fetchRace();
    this.props.fetchSex();
    this.props.fetchCoats();
    this.props.fetchColor();
    this.props.fetchSize();
    this.props.fetchSpecie();
  }
  addAnimal(animalData) {
    this.props.createAnimal(animalData);
  }
  
  render() {
    const redirect  = this.props.redirect;
    const associationId = localStorage.idAsso;
    if (redirect) {
      return <Redirect to={`/association-admin/ajouter-une-image/${associationId}`} />;
    }
    return (
      <div className="container containerRegister">
        <div className="row">
          <div className="col-md-2 item">
            <div className="list-group ">
              <Link to={`/association-admin/${associationId}`} className="list-group-item list-group-item-action">Mon profil</Link>
              <Link to={`/association-admin/mes-demandes/${associationId}`} className="list-group-item list-group-item-action">Mes demandes</Link>
              <Link to={`/association-admin/ajouter-animal/${associationId}`} className="list-group-item onItem">Ajouter un Animal</Link>
              <Link to={`/association-admin/mes-animaux/${associationId}`} className="list-group-item list-group-item-action">Mes Animaux</Link>
            </div>
          </div>
          <div className="col-md-9 update">
            <div className="card">
              <div className="card-body">
                <AddAnimalForm changeValue={this.addAnimal} race={this.props.race} sex={this.props.sex} coats={this.props.coats} color={this.props.color} size={this.props.size} specie={this.props.specie} />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    race: state.raceReducer.data,
    sex: state.sexReducer.data,
    coats: state.coatsReducer.data,
    color: state.colorReducer.data,
    size: state.sizeReducer.data,
    specie: state.specieReducer.data,
    redirect: state.createAnimal.redirect,
  };
}

export default connect(mapStateToProps, { fetchRace, fetchSex, fetchCoats, fetchColor, fetchSize, fetchSpecie, createAnimal })(AddAnimal);
