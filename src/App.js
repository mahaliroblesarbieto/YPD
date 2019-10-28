import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import FirstPageContainer from './container/FirstPageContainer';
import LoginContainer from './container/LoginContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/FirstPage" component={FirstPageContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
