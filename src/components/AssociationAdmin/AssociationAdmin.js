import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { editAsso, fetchAssociationById } from '../../actions';

import EditFormAsso from './EditFormAsso';


class AssociationAdmin extends React.Component {

  constructor() {
    super();

    this.editAsso = this.editAsso.bind(this);
  }

  editAsso(userData) {

    this.props.editAsso(userData);
  }
  
  render() {
    const association = this.props.association;
    const associationId = localStorage.idAsso;
    const redirect = this.props.redirect;
   
    if (redirect) {
      return window.location.replace('/');
    }

    return (
      <div className="container containerRegister">
        <div className="row">
          <div className="col-md-2 item">
            <div className="list-group ">
              <Link to={`/association-admin/${associationId}`} className="list-group-item onItem">Mon profil</Link>
              <Link to={`/association-admin/mes-demandes/${associationId}`} className="list-group-item list-group-item-action">Mes demandes</Link>
              <Link to={`/association-admin/ajouter-animal/${associationId}`} className="list-group-item list-group-item-action">Ajouter un Animal</Link>
              <Link to={`/association-admin/mes-animaux/${associationId}`} className="list-group-item list-group-item-action">Mes Animaux</Link>
            </div>
          </div>
          <div className="col-md-9 update">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" align="center">
                    <img alt="User Pic" src="https://cdn.pixabay.com/photo/2018/11/08/12/02/rose-3802424_960_720.jpg" className="img-fluid img-thumbnail-asso" />
                    <label className="btn btn-primary">
                      Uploader une image
                      <input type="file" hidden />
                    </label>
                  </div>
                  <div className="col-md-8">
                    <h4 className="titleProfile">Mettre à jour votre profil association</h4>
                    <EditFormAsso changeValue={this.editAsso} errors={this.props.error} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    association: state.association.data,
    error: state.editAsso.editError,
    redirect: state.editAsso.redirect,
  };
}

export default connect(mapStateToProps, { editAsso, fetchAssociationById })(AssociationAdmin);
