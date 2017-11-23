import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleLogin extends Component {
  static propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
  };

  state = { user: null }

  componentDidMount() {
    gapi.signin2.render('g-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark',
      onsuccess: this.onSignIn,
    });
  }

  onSignIn = (googleUser) => {
    // Useful data for your client-side scripts:
    const profile = googleUser.getBasicProfile();
    console.log(`ID: ${profile.getId()}`); // Don't send this directly to your server!
    console.log(`Full Name: ${profile.getName()}`);
    console.log(`Given Name: ${profile.getGivenName()}`);
    console.log(`Family Name: ${profile.getFamilyName()}`);
    console.log(`Image URL: ${profile.getImageUrl()}`);
    console.log(`Email: ${profile.getEmail()}`);

    // The ID token you need to pass to your backend:
    const idToken = googleUser.getAuthResponse().id_token;
    console.log(`ID Token: ${idToken}`);

    this.props.onLoginSuccess(idToken);

    this.setState({
      user: {
        name: profile.getName(),
        email: profile.getEmail(),
        token: idToken,
      },
    });
  }

  render() {
    return (
      <div>
        <div id="g-signin2" />
        {this.state.user && (
          <ul>
            <li>Name: {this.state.user.name}</li>
            <li>E-mail: {this.state.user.email}</li>
            <li>Token: {this.state.user.token}</li>
          </ul>
        )}
      </div>
    );
  }
}
