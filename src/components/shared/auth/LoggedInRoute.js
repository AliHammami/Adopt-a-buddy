import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authService from 'src/services/auth-service';
import authServiceAsso from 'src/services/auth-service-asso';

export function LoggedInRoute(props) {

  const {component: Component, ...rest} = props;

  return (
    <Route {...rest} render={(props) => authService.isAuthenticated() || authServiceAsso.isAuthenticated()
                                        ? <Redirect to={{pathname: '/'}}/>
                                        : <Component {...props} {...rest} /> }/>
    )
}
