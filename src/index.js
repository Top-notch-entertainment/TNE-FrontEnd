import React from 'react';
import './Components/css/index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Auth0Provider
  domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

  </Auth0Provider>,
  document.getElementById("root")
);
