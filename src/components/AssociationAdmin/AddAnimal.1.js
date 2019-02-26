import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const AddAnimal = (props) => {
  const {
    typeValue,
    handleSubmit,
    pristine,
    reset,
    submitting,
  } = props;
  const associationId = localStorage.idAsso;
  return (
    <div className="container containerRegister">
      <h2 className="containerRegister-Title">Bonjour Nom de l'association</h2>
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
              <div className="row">
                <div className="col-md-4" align="center">
                  <img alt="User Pic" src="https://cdn.pixabay.com/photo/2018/11/08/12/02/rose-3802424_960_720.jpg" className="img-fluid img-thumbnail-asso" />
                  <label className="btn btn-primary">
                  Uploader l'image de l'animal
                    <input type="file" hidden />
                  </label>
                </div>
                <div className="col-md-8">
                  <h4 className="titleProfile">Ajouter un animal</h4>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <div className="col-8">
                        <Field
                          name="Name"
                          component="input"
                          type="text"
                          placeholder="Nom de l'animal"
                          className="form-control here"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-8">
                        <p>Sex</p>
                        <Field name="genre" component="select">
                          <option />
                          <option value="male">Male</option>
                          <option value="femelle">Femelle</option>
                        </Field>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-8">
                        <Field name="type" component="select">
                          <option />
                          <option value="chien">Chien</option>
                          <option value="chat">Chat</option>
                        </Field>
                      </div>
                    </div>
                    {typeValue
                && (
                <div>
                  <label>Type</label>
                  <div>
                    <Field
                      name="type"
                      component="select"
                    >
                      <option />
                      <option value="chien">Chien</option>
                      <option value="chien">Chat</option>
                      <option value="chat">Chien 2</option>
                      <option value="chat">Chat 1</option>
                    </Field>
                  </div>
                </div>
                )}
                    <div>
                      <button type="submit" disabled={pristine || submitting}>
                  Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// The order of the decoration does not matter.

// Decorate with redux-form
AddAnimal = reduxForm({
  form: 'selectingFormValues', // a unique identifier for this form
})(AddAnimal);

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues'); // <-- same as form name
AddAnimal = connect((state) => {
  // can select values individually
  const typeValue = selector(state, 'type');
  // or together as a group
  return {
    typeValue,
  };
})(AddAnimal);

export default AddAnimal;
