import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authServiceAsso from 'src/services/auth-service-asso';

export function ProtectedRouteAsso(props) {

  const {component: Component, ...rest} = props;

  return (
    <Route {...rest} render={(props) => authServiceAsso.isAuthenticated()
                                        ? <Component {...props} {...rest}/>
                                        : <Redirect to={{pathname: '/connexion'}}/>}/>
    )
}
