import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../shared/form/FormInput';
import { BwmResError } from '../shared/form/BwmResError';

const LoginFormAdoptant = (props) => {
  const { handleSubmit, pristine, submitting, changeValue, valid, errors } = props
  return (
    <form onSubmit={handleSubmit(changeValue)}>
      <Field
        name="username"
        type="email"
        placeholder="Email"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="password"
        type="password"
        placeholder="Mot de passe"
        className="form-control"
        component={FormInput}
      />
      <BwmResError errors={errors} />
      <div className="col-md-6 offset-md-4">
        <button type="submit" className="btn btn-primary" disabled={!valid || pristine || submitting}>
          Se connecter
        </button>
      </div>
    </form>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Vous devez entrer une adresse mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
    errors.username = 'Ceci est une adresse mail invalide';
  }
  if (!values.password) {
    errors.password = 'Veuillez saisir votre mot de passe ';
  } else if (values.password.length < 6) {
    errors.password = 'Votre mot de passe doit contenir au moins 8 caractères ';
  }
  return errors;
};

export default reduxForm({
  form: 'loginFormAdoptant',
  validate,
})(LoginFormAdoptant);
