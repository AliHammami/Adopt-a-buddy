import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../shared/form/FormInput';
import { BwmResError } from '../shared/form/BwmResError';

const RegisterFormAdoptant = (props) => {
  const { handleSubmit, pristine, submitting, changeValue, valid, errors } = props
  return (
    <form onSubmit={handleSubmit(changeValue)}>
      <Field
        name="lastname"
        type="text"
        placeholder="Nom"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="firstname"
        type="text"
        placeholder="Prénom"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="email"
        type="email"
        placeholder="Email"
        className="form-control"
        component={FormInput}
      />
      <BwmResError errors={errors} />
      <Field
        name="plainPassword"
        type="password"
        placeholder="Mot de passe"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="passwordConfirmation"
        type="password"
        placeholder="Confirmez votre mot de passe"
        className="form-control"
        component={FormInput}
      />
      <div className="col-md-6 offset-md-4">
        <button type="submit" className="btn btn-primary" disabled={!valid || pristine || submitting}>
          Inscrivez-vous
        </button>
      </div>
    </form>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.firstname = 'Vous devez entrer votre nom';
  }
  if (!values.lastname) {
    errors.lastname = 'Vous devez entrer votre prénom';
  }
  if (!values.email) {
    errors.email = 'Vous devez entrer une adresse mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Ceci est une adresse mail invalide';
  }
  if (!values.plainPassword) {
    errors.plainPassword = 'Veuillez saisir votre mot de passe ';
  } else if (values.plainPassword.length < 8) {
    errors.plainPassword = 'Votre mot de passe doit contenir au moins 8 caractères ';
  }
  if (values.email === values.plainPassword) {
    errors.plainPassword = 'Votre mot de passe et votre adresse mail ne peuvent pas être identique';
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Saisissez à nouveau votre mot de passe ';
  }

  if (values.plainPassword !== values.passwordConfirmation) {
    errors.password = 'Les mots de passe ne correspondent pas';
  }
  return errors;
};

export default reduxForm({
  form: 'registerFormAdoptant',
  validate,
})(RegisterFormAdoptant);
