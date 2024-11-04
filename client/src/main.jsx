import React from "react";
import { MantineProvider } from '@mantine/core';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Auth0Provider} from "@auth0/auth0-react"  
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <MantineProvider>
  <Auth0Provider 
  domain="dev-2ukb4egm2jxjjsxb.us.auth0.com" 
  clientId="A22bKF5YfSRDFSmoZzJdj29wPRk7xV5t" 
  authorizationParams={{
    redirect_uri:"http://localhost:5173"
  }}
  audience="http://localhost:8000"
  scope="openid profile email"
  >

    <App />
  </Auth0Provider>
  </MantineProvider>,
  </React.StrictMode>
);
