import React, { useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import './App.css';
import MainWindow from "./components/MainWindow/MainWindow";
import HeroStats from "./components/HeroStats/HeroStats"
import { connect} from 'react-redux'
import {changeData, getData} from './store/actions'
import {bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
  return {
      currentHero: state.currentHero
  }
}

const putActionsToProps =(dispatch) =>{
  return{
      changeData: bindActionCreators(changeData, dispatch),
      getData: bindActionCreators(getData, dispatch)
  }
};

function App(props) {
  const {currentHero, getData} = props;
  
  useEffect(() => {
    getData();
    // const fetchData = async () => {
    //   const result = await axios(
    //     'https://api.opendota.com/api/heroStats',
    //   );
    //   changeData(result.data);
    // };
    // fetchData();
  });


  return (
    <Router>

      <div className="App">
        <header>

          Утренняя катка - лучше чем зарядка.
          <Link to="/">Main page</Link>
        </header>

        <Switch>
          {/* <Route path="/hero-stats"> */}
          <Route path={"/" + currentHero}>
            <HeroStats />

          </Route>
          <Route path="/">
            <MainWindow />
          </Route>
        </Switch>


      </div>
    </Router>
  );
}

export default connect(mapStateToProps, putActionsToProps)(App);
