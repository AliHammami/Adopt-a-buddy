import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../shared/form/FormInput';
import { BwmResError } from '../shared/form/BwmResError';



class AddAnimalForm extends React.Component {

  renderDropdown(elements) {
    const animalFeatures = []
    elements.map((element)=>{
      animalFeatures.push(<option value={element.id}
      >{element.name}</option>)
    return animalFeatures
    })
    return animalFeatures
  }

  render() {
  const { handleSubmit, pristine, submitting, changeValue, valid, errors, race, sex, coats, color, size, specie } = this.props;

    return (
      <form onSubmit={handleSubmit(changeValue)}>
          <div className="col-md-12">
            <h4 className="titleProfile">Ajouter un animal</h4>
            <Field
              name="name"
              type="text"
              placeholder="Nom de L'animal"
              className="form-control"
              component={FormInput}
            />
            <Field
              name="sex"
              type="text"
              className="form-control select"
              component="select"
            >
              <option value="" disabled selected hidden>Sexe</option>
              {this.renderDropdown(sex)}
            </Field>
            <Field
              name="species"
              type="text"
              className="form-control select"
              component="select"
            >
              <option value="" disabled selected hidden>Espece</option>
              {this.renderDropdown(specie)}
            </Field>
            <Field
              name="race"
              type="text"
              className="form-control select"
              component="select"
            >
              <option value="" disabled selected hidden>Race</option>
              {this.renderDropdown(race)}
            </Field>
            <Field
              name="coats"
              type="text"
              className="form-control select"
              component="select"
            >
              <option value="" disabled selected hidden>Pelage</option>
              {this.renderDropdown(coats)}
            </Field>
            <Field
              name="color"
              type="text"
              className="form-control select"
              component="select"
            >
              <option value="" disabled selected hidden>Couleur</option>
              {this.renderDropdown(color)}
            </Field>
            <Field
              name="size"
              type="text"
              className="form-control select"
              component="select"
            >
              <option value="" disabled selected hidden>Taille</option>
              {this.renderDropdown(size)}
            </Field>
            <Field
              name="age"
              type="text"
              placeholder="Age"
              className="form-control"
              component={FormInput}
            />
            <Field
              name="description"
              type="text"
              placeholder="Description"
              className="form-control"
              component={FormInput}
            />
            <div className="col-md-6 offset-md-4">
              <button type="submit" className="btn btn-primary" disabled={!valid || pristine || submitting}>
            Ajouter un animal
              </button>
            </div>
          </div>
      </form>
    );
  }
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Vous devez entrer un nom';
  } 
  if (!values.sex) {
    errors.sex = "Veuillez choisir le sexe de l'animal";
  }
  if (!values.specie) {
    errors.specie = "Veuillez choisir l'espece de l'animal";
  }
  if (!values.race) {
    errors.race = "Veuillez choisir la race de l'animal";
  }
  if (!values.coats) {
    errors.coats = "Veuillez choisir le pelage de l'animal";
  }
  if (!values.color) {
    errors.color = "Veuillez choisir la couleur de l'animal";
  }
  if (!values.size) {
    errors.size = "Veuillez choisir la couleur de l'animal";
  }
  if (!values.description) {
    errors.description = "Veuillez choisir une description de l'animal";
  }


  return errors;
};

export default reduxForm({
  form: 'addAnimalForm',
  validate,
})(AddAnimalForm);
