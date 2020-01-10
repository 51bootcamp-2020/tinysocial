import React from 'react';
import Eventslist from './pages/eventslist';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:4000"
});

function App() {
  return (
      <div>
        Main
        <Eventslist client={client} />
      </div>
  );
}

export default App;
