import React from "react";

import './MainWindow.css';
import HeroContainer from "../HeroContainer/HeroContainer"
import {bindActionCreators } from 'redux'
import { connect} from 'react-redux'
import {changeSearchValue} from '../../store/actions'

const mapStateToProps = (state) => {
   return {
        searchValue: state.searchValue
    }
}

const putActionsToProps =(dispatch) =>{
    return{
        changeSearchValue: bindActionCreators(changeSearchValue, dispatch)
    }
};

function MainWindow(props) {
    const{searchValue, changeSearchValue} = props;
    return (
        
        <section className="main-window">

            <div className="main-window__search-field">
                <input type="text" placeholder="Find your hero!" value={searchValue} onChange={(event) => {changeSearchValue(event.target.value)}} />
                <button>Search</button>
            </div>
            <p className="title str">STRENGTH</p>
            <HeroContainer attr="str" />
            <p className="title agi">AGILITY</p>
            <HeroContainer attr="agi" />
            <p className="title int">INTELLIGENCE</p>
            <HeroContainer attr="int" />
            
        </section>
       
    );
}

export default connect(mapStateToProps, putActionsToProps)(MainWindow);


