import React, { useState, useEffect } from "react";

import './MainWindow.css';
import HeroContainer from "../HeroContainer/HeroContainer"

function MainWindow(props) {
    const[currentHero, setCurrentHero] = [props.currentHero, props.setCurrentHero]
    
    return (
        
        <section className="main-window">
            {/* <p>current hero id:{currentHero}</p> */}
            
            
            <div className="main-window__search-field">
                <input type="text" placeholder="Find your hero!"/>
                <button>Search</button>
            </div>
            <p className="title str">STRENGTH</p>
            <HeroContainer attr="str" data={props.data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            <p className="title agi">AGILITY</p>
            <HeroContainer attr="agi" data={props.data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            <p className="title int">INTELLIGENCE</p>
            <HeroContainer attr="int" data={props.data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            
        </section>
       
    );
}

export default MainWindow;


