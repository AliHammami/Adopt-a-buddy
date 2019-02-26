import React from 'react';
import { registerAsso } from 'src/actions/';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import RegisterFormAsso from './RegisterFormAsso';


class RegisterAsso extends React.Component {
  constructor() {
    super();

    this.registerAsso = this.registerAsso.bind(this);
  }

  registerAsso(userData) {
    this.props.registerAsso(userData);
  }

  render() {
    const redirect  = this.props.redirect;
    if (redirect) {
      return <Redirect to={{ pathname: '/connexion-association', state: { successRegister: true } }} />;
    }
    return (
      <div className="container containerRegister">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card cardiv">
              <div className="card-header divheader">Créez votre compte Association</div>
              <div className="card-body">
                <RegisterFormAsso changeValue={this.registerAsso} errors={this.props.error} />
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
    error: state.registerAsso.registerError,
    redirect: state.registerAsso.redirect,
  };
}
//mapDispatchToProps = { registerAsso }
export default connect(mapStateToProps, { registerAsso })(RegisterAsso);
