import React from 'react';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Auth0Provider
    domain="dev-58m7mc5hlf2xqm4e.us.auth0.com"
    clientId="42zXBIpn61Xuob81rtOkRhsGvO9x2fNj"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
