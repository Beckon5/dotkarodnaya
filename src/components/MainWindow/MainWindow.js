import React, { useState} from "react";

import './MainWindow.css';
import HeroContainer from "../HeroContainer/HeroContainer"

function MainWindow(props) {
    const[currentHero, setCurrentHero] = [props.currentHero, props.setCurrentHero]
    const[currentSearchValue, setCurrentSearchValue] = useState("");
    return (
        
        <section className="main-window">
            
            
            
            <div className="main-window__search-field">
                <input type="text" placeholder="Find your hero!" onChange={e => setCurrentSearchValue(e.target.value)} />
                <button>Search</button>
            </div>
            <p className="title str">STRENGTH</p>
            <HeroContainer attr="str" currentSearchValue={currentSearchValue} data={props.data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            <p className="title agi">AGILITY</p>
            <HeroContainer attr="agi" currentSearchValue={currentSearchValue} data={props.data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            <p className="title int">INTELLIGENCE</p>
            <HeroContainer attr="int" currentSearchValue={currentSearchValue} data={props.data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            
        </section>
       
    );
}

export default MainWindow;


