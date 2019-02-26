import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { editUser } from 'src/actions/';
import { connect } from 'react-redux';
import EditFormAdoptant from './EditFormAdoptant';

const userId = localStorage.id;

class AdoptantProfile extends React.Component {

  constructor() {
    super();

    this.editAdoptant = this.editAdoptant.bind(this);
  }


  editAdoptant(userData) {

    this.props.editUser(userData);
  }

  render() {
    const redirect  = this.props.redirect;
    if (redirect) {
      return <Redirect to={{ pathname: '/', state: { successRegister: true } }} />;
    }

    return (
      <div className="container containerRegister">
        <div className="row">
          <div className="col-md-2 item">
            <div className="list-group ">
              <Link to={`/adoptant-admin/${userId}`} className="list-group-item onItem">Mon profil</Link>
              <Link to={`/adoptant-admin/mes-demandes/${userId}`} className="list-group-item list-group-item-action">Mes demandes</Link>
            </div>
          </div>
          <div className="col-md-9 update">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4" align="center">
                    <img alt="User Pic" src="https://cdn.pixabay.com/photo/2018/11/08/12/02/rose-3802424_960_720.jpg" className="img-fluid img-thumbnail" />
                    <label className="btn btn-primary">
                      Uploader une image 
                      <input type="file" hidden />
                    </label>
                  </div>
                  <div className="col-md-8">
                    <h4 className="titleProfile">Mettre à jour votre profil adoptant</h4>
                    <EditFormAdoptant changeValue={this.editAdoptant} errors={this.props.error} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

function mapStateToProps(state) {
  return {
    error: state.editUser.editError,
    redirect: state.editUser.redirect,
  };
}
// mapDispatchToProps = { editUser }
export default connect(mapStateToProps, { editUser })(AdoptantProfile);
