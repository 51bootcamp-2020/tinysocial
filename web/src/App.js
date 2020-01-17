import React from 'react';
import Landing from './pages/landing';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

function App() {
  return (
      <div>
        Main
        <Landing client={client} />
      </div>
  );
}

export default App;
