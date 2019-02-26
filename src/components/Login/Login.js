import React from 'react';
import { loginUser } from 'src/actions/';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginFormAdoptant from './LoginFormAdoptant';

class Login extends React.Component {

  constructor() {
    super();

    this.loginAdoptant = this.loginAdoptant.bind(this);
  }

  loginAdoptant(userData) {
    this.props.dispatch(loginUser(userData));
  }

  render() {

    const isAuth = this.props.auth;

    const { successRegister } = this.props.location.state || false;

    if (isAuth) {
      return window.location.replace('/');
    }

    return (
      <div className="row logindiv">
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
                <h2 className="title2">Connectez-vous à votre compte Adoptant</h2>
                <h3>Vous êtes dèja inscrit</h3>
                <p>Entrez votre adresse mail et votre mot de passe</p>
              </div>
              <LoginFormAdoptant changeValue={this.loginAdoptant} errors={this.props.error} />
            </div>
            <Link to="/connexion-association">Cliquez ici si vous souhaitez vous connecter en tant qu'association</Link>
          </article>
        </section>
        <section className="col-xs-12 col-sm-6">
          <article className="articles register">
            <div>
              <h2 className="title2">Inscription des adoptants</h2>
            </div>
            <div>
              <h3>Vous n'êtes pas encore inscrit</h3> 
              <p>Créez votre compte, il vous permettra de faire des demandes d'adoptions auprès des associations.
              </p>
              <Link className="col-xs-12 btn btn-primary" to="/inscription-adoptant">Créer mon compte adoptant</Link>
            </div>
          </article>
          <article className="articles">
            <div>
              <h2 className="title2">Vous êtes une association ?</h2>
            </div>
            <div>
              <h3>Vous n’êtes pas encore inscrit </h3>
              <p>
              En adhérant à Adopt a Buddy vous aurez la possibilité de vous faire connaitre et d’annoncer les animaux
              que vous offrez à l’adoption pour leur assurer une large diffusion sur Internet.
              </p>
              <Link className="col-xs-12 btn btn-primary" to="/inscription-association">Créer mon compte association</Link>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.isAuth,
    error: state.auth.loginError,
  };
}

export default connect(mapStateToProps)(Login);
