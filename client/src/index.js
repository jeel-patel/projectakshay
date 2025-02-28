import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain='akshay-project.us.auth0.com'
    clientId='SujpqD6H2Cu5JOYONGIQULsA9PZLD23n'
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
  </Auth0Provider>
  , document.getElementById("root")
);