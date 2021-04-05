import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from  './aws-exports';
import { homepage, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <homepage/>
          <h2>App Content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
