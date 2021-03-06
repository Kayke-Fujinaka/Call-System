import React from "react";
import AuthProvider from "./Context/auth";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import GlobalStyle from "./Styles/global";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <ToastContainer autoClose={2000} />
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </AuthProvider>
    </div>
  );
}
