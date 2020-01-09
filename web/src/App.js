import React from 'react';
import Landing from './pages/landing';
import LoginForm from "./components/login-form";

function App() {
  return (
      <div>
        Main
          <LoginForm/>
        <Landing/>
      </div>
  );
}

export default App;
