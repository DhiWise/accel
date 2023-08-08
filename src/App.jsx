import { GoogleOAuthProvider } from "@react-oauth/google";
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";

function App() {
  return (
    <ProSidebarProvider>
      <GoogleOAuthProvider clientId={"1234"}>
        <Routes />
      </GoogleOAuthProvider>
    </ProSidebarProvider>
  );
}

export default App;
