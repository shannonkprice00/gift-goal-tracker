import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import "./App.css"
import Home from "./pages/Home";
import DonateForm from "./pages/DonateForm";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
   <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donateForm" element={<DonateForm />} />
      </Routes>
    </Router>
   </ApolloProvider>
  );
}

export default App;
