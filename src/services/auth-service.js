import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';

class AuthService {

  tokenKey = 'auth_token';

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  decode(token) {
    return jwt.decode(token);
  }

  // remove token from local storage
  invalidateUser() {
    localStorage.removeItem(this.tokenKey);
  }

  // get when the token will expire

  getExpiration(token) {
    const exp = this.decode(token).exp;
    return moment.unix(exp);
  }

  getUsername() {
    return this.decode(this.getToken()).username;
  }

  // check if the token expire or not
  isValid(token) {
    return moment().isBefore(this.getExpiration(token));
  }

  isAuthenticated() {
    const token = this.getToken();

    // if the token is valid return true
    return (token && this.isValid(token)) ? true : false;
  }
}


export default new AuthService();
