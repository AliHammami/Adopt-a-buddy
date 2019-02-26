import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Header extends React.Component {
  constructor() {
    super();

    this.handleLogoutUser = this.handleLogoutUser.bind(this);
    this.handleLogoutAsso = this.handleLogoutAsso.bind(this);  
  }

  // componentWillMount() {
  //   const associationId = this.props.match.params.id;
  //   this.props.dispatch(actions.fetchAssociationById(associationId));
  // }

  handleLogoutUser() {
    this.props.logoutUser();
  }

  handleLogoutAsso() {
    this.props.logoutAsso();
  }

  renderAuthButtons() {
    const isAuth = this.props.auth;
    const isAuthAsso = this.props.authAsso;
    const associationId = localStorage.idAsso;
    const userId = localStorage.id;

    if (isAuth) {
      return (
        <React.Fragment>
          <li>
            <Link className="nav-link nav-link-log" to={`/adoptant-admin/${localStorage.id}`}>Editer mon profil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-log" to="/connexion" onClick={this.handleLogoutUser}>Se déconnecter</Link>
          </li>
        </React.Fragment>
      );
    }
    if (isAuthAsso) {
      return (
        <React.Fragment>
          <li>
            <Link className="nav-link nav-link-log" to={`/association-admin/${associationId}`}>Editer mon profil</Link>           
          </li>
          <li className="nav-item">
            <Link className="nav-link nav-link-log" to="/connexion-association" onClick={this.handleLogoutAsso}>Se déconnecter</Link>
          </li>
        </React.Fragment>
      );
    }
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link nav-link-log" to="/connexion">Login / Register</Link>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-nav-app">
        <Link className="navbar-brand" to="/"><img src="src/images/logo.png" width="80" height="80" alt="accueil" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link nav-link-search" to="/recherche">Trouvez votre nouveau Buddy</Link>
            </li>
          </ul>
          {this.renderAuthButtons()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth.isAuth,
    authAsso: state.authAsso.isAuthAsso,
    association: state.association.data,
  };
}

export default connect(mapStateToProps)(Header);
