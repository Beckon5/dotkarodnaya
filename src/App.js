import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import './App.css';
import MainWindow from "./components/MainWindow/MainWindow";
import HeroStats from "./components/HeroStats/HeroStats"
function App() {
  const[currentHero, setCurrentHero] = useState("Axe");
  const [data, setData] = useState({});
  
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://api.opendota.com/api/heroStats',
            );
            setData(result.data);
        };
        fetchData();
    }, []);
    
    
  return (
    <Router>
      
      <div className="App">
        <header>
          
          
          Утренняя катка - лучше чем зарядка.
          <Link to="/">Main page</Link>
      </header>

        <Switch>
          {/* <Route path="/hero-stats"> */}
          <Route path={"/"+currentHero}>
          <HeroStats data={data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
          
          </Route>
          <Route path="/">
            <MainWindow data={data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
