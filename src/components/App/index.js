/**
 * NPM import
 */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ProtectedRoute } from 'src/components/shared/auth/ProtectedRoute';
import { ProtectedRouteAsso } from 'src/components/shared/auth/ProtectedRouteAsso';
import { LoggedInRoute } from 'src/components/shared/auth/LoggedInRoute';

import * as actions from 'src/actions';

import Header from '../Header/Header';
import Slider from '../Header/slider';
import AnimalCardsList from '../Animal/animal-listing/AnimalCardsList';
import AnimalDetail from '../Animal/animal-detail/AnimalDetail';
import SearchAnimalList from '../SearchAnimal/SearchAnimalList';
import FooterPage from '../Footer/Footer';
import Login from '../Login/Login';
import RegisterAsso from '../RegisterAsso/RegisterAsso';
import RegisterAdoptant from '../RegisterAdoptant/RegisterAdoptant';
import AssociationProfile from '../AssociationProfile/AssociationProfile';
import AdoptantProfile from '../AdoptantAdmin/AdoptantProfile';
import MyRequest from '../AdoptantAdmin/MyRequest';
import AssociationAdmin from '../AssociationAdmin/AssociationAdmin';
import Requests from '../AssociationAdmin/Requests';
import AddAnimal from '../AssociationAdmin/AddAnimal';
import MyAnimals from '../AssociationAdmin/MyAnimals';
import LoginAsso from '../Login/LoginAsso';
import UploadImage from '../AssociationAdmin/UploadImage';

/**
 * Local import
 */

// Components

// Styles
import './app.scss';

/**
 * Code
 */

const store = require('src/store').init();

class App extends Component {

  componentWillMount() {
    this.checkAuthState();
    this.checkAuthAssoState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }

  checkAuthAssoState() {
    store.dispatch(actions.checkAuthAssoState());
  }

  logoutUser() {
    store.dispatch(actions.logoutUser());
  }

  logoutAsso() {
    store.dispatch(actions.logoutAsso());
  }

  render() {
    const userId = localStorage.id;
    const associationId = localStorage.idAsso;
    
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="app">
            <Header logoutUser={this.logoutUser} logoutAsso={this.logoutAsso} />
            <Route exact path="/" component={Slider} />
            <Route exact path="/" component={AnimalCardsList} />
            <ProtectedRoute exact path="/animals/:id" component={AnimalDetail} />
            <Route exact path="/recherche" component={SearchAnimalList} />
            <LoggedInRoute exact path="/connexion" component={Login} />
            <LoggedInRoute exact path="/inscription-adoptant" component={RegisterAdoptant} />
            <LoggedInRoute exact path="/inscription-association" component={RegisterAsso} />
            <Route exact path="/associations/:id" component={AssociationProfile} />
            <ProtectedRoute exact path={`/adoptant-admin/${userId}`} component={AdoptantProfile} />
            <ProtectedRoute exact path={`/adoptant-admin/mes-demandes/${userId}`} component={MyRequest} />
            <ProtectedRouteAsso exact path={`/association-admin/${associationId}`} component={AssociationAdmin} />
            <ProtectedRouteAsso exact path={`/association-admin/mes-demandes/${associationId}`} component={Requests} />
            <ProtectedRouteAsso exact path={`/association-admin/ajouter-animal/${associationId}`} component={AddAnimal} />
            <ProtectedRouteAsso exact path={`/association-admin/mes-animaux/${associationId}`} component={MyAnimals} />
            <ProtectedRouteAsso exact path={`/association-admin/ajouter-une-image/${associationId}`} component={UploadImage} />
            <LoggedInRoute exact path="/connexion-association" component={LoginAsso} />
            <FooterPage />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
/**
 * Export
 */
export default App;
