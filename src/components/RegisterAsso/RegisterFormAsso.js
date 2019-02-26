import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormInput from '../shared/form/FormInput';
import { BwmResError } from '../shared/form/BwmResError';

const RegisterFormAsso = (props) => {
  const { handleSubmit, pristine, submitting, changeValue, valid, errors } = props
  return (
    <form onSubmit={handleSubmit(changeValue)}>
      <Field
        name="name"
        type="text"
        placeholder="Nom de L'association"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="manager"
        type="text"
        placeholder="Président(e)"
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
      <Field
        name="phone"
        type="text"
        placeholder="Numéro de téléphone"
        className="form-control"
        component={FormInput}
      />
      <BwmResError errors={errors} />
      <Field
        name="rna"
        type="text"
        placeholder="Numéro RNA"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="line1"
        type="text"
        placeholder="Rue"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="line2"
        type="text"
        placeholder="Complément d'adresse"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="cp"
        type="text"
        placeholder="Code postal"
        className="form-control"
        component={FormInput}
      />
      <Field
        name="city"
        type="text"
        placeholder="Ville"
        className="form-control"
        component={FormInput}
      />
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
  if (!values.name) {
    errors.name = 'Vous devez entrer le nom de votre association';
  }
  if (!values.manager) {
    errors.manager = 'Vous devez entrer le nom et prénom de votre president(e)';
  }
  if (!values.phone) {
    errors.phone = 'Vous devez entrer un numéro de téléphone';
  } else if (values.phone < 8) {
    errors.phone = 'Le numéro de téléphone doit contenir au moins 8 chiffres';
  }
  if (!values.email) {
    errors.email = 'Vous devez entrer une adresse mail';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Ceci est une adresse mail invalide';
  }
  if (!values.rna) {
    errors.rna = 'Vous devez entrer un numéro RNA';
  } else if (values.rna.length < 10 || values.rna.length > 10) {
    errors.rna = 'Votre numéro RNA doit contenir 10 caractères';
  }
  if (!values.plainPassword) {
    errors.plainPassword = 'Veuillez saisir votre mot de passe ';
  } else if (values.plainPassword.length < 8) {
    errors.plainPassword = 'Votre mot de passe doit contenir au moins 8 caractères ';
  }
  if (values.email === values.plainPassword) {
    errors.password = 'Votre mot de passe et votre adresse mail ne peuvent pas être identique';
  }
  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Saisissez à nouveau votre mot de passe ';
  }

  if (values.plainPassword !== values.passwordConfirmation) {
    errors.plainPassword = 'Les mots de passe ne correspondent pas';
  }
  if (!values.line1) {
    errors.line = 'Vous devez entrer le nom de votre rue';
  }
  if (!values.cp) {
    errors.cp = 'Vous devez entrer votre code postal';
  } else if (values.cp < 5) {
    errors.cp = 'Le numéro de téléphone doit contenir 5 chiffres';
  }
  if (!values.city) {
    errors.city = 'Vous devez entrer votre ville';
  }
  return errors;
};

export default reduxForm({
  form: 'registerFormAsso',
  validate,
})(RegisterFormAsso);
