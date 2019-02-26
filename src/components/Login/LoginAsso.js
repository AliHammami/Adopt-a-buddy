import React from 'react';
import { loginAsso } from 'src/actions/';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginFormAsso from './LoginFormAdoptant';

class LoginAsso extends React.Component {

  constructor() {
    super();

    this.loginAsso = this.loginAsso.bind(this);
  }

  loginAsso(userData) {
    this.props.dispatch(loginAsso(userData));
  }

  render() {

    const isAuthAsso = this.props.authAsso;

    const { successRegister } = this.props.location.state || false;

    if (isAuthAsso) {
      // return <Redirect to={{ pathname: '/' }} />;
      return window.location.replace('/');
    }

    return (
      <div className="row logindiv logindiv_asso">
        <section className="col-xs-12 col-sm-6">
          {
          successRegister && (
          <div className="alert alert-success">
            <p> Votre inscription est validé. Vous pouvez maintenant vous connecter. </p>
          </div>
          )
        }
          <article className="articles login-form">
            <div className="main-div">
              <div>
                <h2 className="title2">Connectez-vous à votre compte association</h2>
                <h3>Vous êtes dèja inscrit</h3>
                <p>Entrez votre adresse mail et votre mot de passe</p>
              </div>
              <LoginFormAsso changeValue={this.loginAsso} errors={this.props.error} />
            </div>
          </article>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authAsso: state.authAsso.isAuthAsso,
    error: state.authAsso.loginError,
  };
}

export default connect(mapStateToProps)(LoginAsso);
