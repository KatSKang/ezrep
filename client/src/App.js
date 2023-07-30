import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Dashboard />;
      </div>
    </>
  );
}

export default App;
