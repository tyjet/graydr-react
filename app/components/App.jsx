import React, { Component } from 'react';
import GoogleLogin from 'components/GoogleLogin';

export default class App extends Component {
  handleLoginSuccess = idToken => console.log(idToken)

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Greetings, Chirp Chirp Friends!</h1>
        <GoogleLogin onLoginSuccess={this.handleLoginSuccess} />
      </div>
    );
  }
}
