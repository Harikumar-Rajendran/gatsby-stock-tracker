import React from 'react';
import ReactDOM from 'react-dom';
import App from './callback';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../adapters/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

export default function IndexPage() {

  return (
    <MsalProvider instance={msalInstance}>
          <App />
      </MsalProvider>
  );
}