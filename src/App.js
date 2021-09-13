import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Erreur from './Pages/Erreur';
import Home from './Pages/Home';



function App() {
  return (
      <>
        <Router  basename={process.env.PUBLIC_URL}>
          <Switch>           
                <Route exact path="/" component={Home} />    
                <Route component={Erreur} />
          </Switch>
        </Router>
      </>
  );
}

export default App;
