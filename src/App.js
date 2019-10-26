import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import MainWindow from "./components/MainWindow/MainWindow";
import HeroStats from "./components/HeroStats/HeroStats"
function App() {

  return (
    <Router>
      <div className="App">
        <header>
          Утренняя катка - лучше чем зарядка.
      </header>

        <Switch>

          <Route path="/hero-stats">
          
          <HeroStats/>
          </Route>
          <Route path="/">
            <MainWindow />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
