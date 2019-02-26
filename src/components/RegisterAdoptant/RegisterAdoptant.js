import React from 'react';
import { registerUser } from 'src/actions/';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterFormAdoptant from './RegisterFormAdoptant';


class RegisterAdoptant extends React.Component {
  constructor() {
    super();

    this.registerAdoptant = this.registerAdoptant.bind(this);
  }

  registerAdoptant(userData) {
    this.props.registerUser(userData);
  }

  render() {
    const redirect  = this.props.redirect;
    if (redirect) {
      return <Redirect to={{ pathname: '/connexion', state: { successRegister: true } }} />;
    }
    return (
      <div className="container containerRegister">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card cardiv">
              <div className="card-header divheader">Créez votre compte Adoptant</div>
              <div className="card-body">
                <RegisterFormAdoptant changeValue={this.registerAdoptant} errors={this.props.error} />
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
    error: state.registerUser.registerError,
    redirect: state.registerUser.redirect,
  };
}
// mapDispatchToProps = { registerUser }
export default connect(mapStateToProps, { registerUser })(RegisterAdoptant);
