import React, { useEffect, useState } from 'react';
import {
  useMsal,
  useIsAuthenticated,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  MsalProvider
} from "@azure/msal-react";
import { PublicClientApplication, InteractionStatus } from "@azure/msal-browser";
import { loginRequest, msalConfig } from "../adapters/authConfig";
import { ProfileData } from "../components/myProfile/ProfileData";
import { callMsGraph } from "../adapters/graph";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  const [graphData, setGraphData] = useState(null);
  const name = accounts[0] && accounts[0].name;
  const [count, setCount] = useState(0);

  function handleLogin() {
    if (!isAuthenticated && inProgress === InteractionStatus.None) {
      instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
      });
    }
  }

  // function handleLogout(instance) {
  //   instance.logoutRedirect().catch(e => {
  //     console.error(e);
  //   });
  // }

  function RequestAccessToken() {
    // const request = {
    //   ...loginRequest,
    //   account: accounts[0]
    };

  //   // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  //   instance.acquireTokenSilent(request).then((response) => {
  //     setAccessToken(response.accessToken);
  //   }).catch((e) => {
  //     instance.acquireTokenPopup(request).then((response) => {
  //       setAccessToken(response.accessToken);
  //     });
  //   });
  // }

  function RequestProfileData() {
    // const request = {
    //   ...loginRequest,
    //   account: accounts[0]
    };

  //   // Silently acquires an access token which is then attached to a request for Microsoft Graph data
  //   instance.acquireTokenSilent(request).then((response) => {
  //     callMsGraph(response.accessToken).then(response => setGraphData(response));
  //   }).catch((e) => {
  //     instance.acquireTokenPopup(request).then((response) => {
  //       callMsGraph(response.accessToken).then(response => setGraphData(response));
  //     });
  //   });
  // }
  // useEffect(() => {
  //   if (!isAuthenticated && inProgress === InteractionStatus.None) {
  //   handleLogin();
  //   }
  // }, [])

  return (
      <div className="App">

        {/* <div>
          {isAuthenticated ?
            <div> User Authenticated </div> :
            <div> Access Denied</div>
          }
        </div> */}
        <AuthenticatedTemplate>
          <p>Only authenticated users will see this!</p>
          <h5 className="card-title">Welcome</h5>
          {/* {accessToken ?
            <p>Access Token Acquired!</p>
            :
            <div variant="secondary" onClick={RequestAccessToken}>Request Access Token</div>
          } */}

          {/* <h5 className="card-title">Welcome </h5> */}
          {/* {graphData ?
            <ProfileData graphData={graphData} />
            :
            <div variant="secondary" onClick={RequestProfileData}>Request Profile Information</div>
          } */}
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div onClick={handleLogin()}><p>You are not signed in! Please sign in.</p></div>
        </UnauthenticatedTemplate>
      </div>
  );
}

export default App;
