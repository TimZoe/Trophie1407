import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>

        <p>
          Trophie 14.07.
        </p>
      
         
      </header>
    </div>
  );
}

export default withAuthenticator(App);
