import React, { useEffect, useState } from 'react';
import {
  useMsal,
  useIsAuthenticated,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  MsalProvider
} from "@azure/msal-react";
import { PublicClientApplication, InteractionStatus } from "@azure/msal-browser";
import Button from '@mui/material/Button';
import { loginRequest, msalConfig } from "../adapters/authConfig";
import { ProfileData } from "../components/myProfile/ProfileData";
import { callMsGraph } from "../adapters/graph";
import {invokeStockFunction} from '../services/invokeFunctionService';

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const name = accounts[0] && accounts[0].name;

  function handleLogin() {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
      });
    }
  }

  function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
      console.error(e);
    });
  }

  function RequestAccessToken() {
    console.log("AccessToken Requested");
    const request = {
      ...loginRequest,
      account: accounts[0]
    }
    instance.acquireTokenSilent(request).then((response) => {
      setAccessToken(response.accessToken);
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        setAccessToken(response.accessToken);
      });
    });
  }

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };
    instance.acquireTokenSilent(request).then((response) => {
      callMsGraph(response.accessToken).then(response => setGraphData(response));
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
    });
  }

  useEffect(() => {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      handleLogin();
    }
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      RequestAccessToken();
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (accessToken !== null) {
      RequestProfileData();
    }
  }, [accessToken])

  
  useEffect(() => {
    if (graphData !== null) {
      console.log(graphData);
    }
  }, [graphData])

  function invokefunction(){
    invokeStockFunction();
  }

  return (
    <div className="App">

      <AuthenticatedTemplate>
        <p>Only authenticated users will see this!</p>
        <h5 className="card-title">Welcome</h5>      
        <Button onClick={invokefunction}>Get Stock Data</Button>  
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div onClick={handleLogin}><p>You are not signed in! Please sign in.</p></div>
      </UnauthenticatedTemplate>
    </div>
  );
}

export default App;
