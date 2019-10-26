import React, { useState, useEffect } from "react";
import axios from 'axios';
import './MainWindow.css';
import HeroContainer from "../HeroContainer/HeroContainer"

function MainWindow() {
    const[currentHero, setCurrentHero] = useState(228);
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
        
        <section className="main-window">
            <p>current hero id:{currentHero}</p>
            
            
            <div className="main-window__search-field">
                <input type="text" placeholder="Find your hero!"/>
                <button>Search</button>
            </div>
            <p className="title str">STRENGTH</p>
            <HeroContainer attr="str" data={data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            <p className="title agi">AGILITY</p>
            <HeroContainer attr="agi" data={data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            <p className="title int">INTELLIGENCE</p>
            <HeroContainer attr="int" data={data} currentHero={currentHero} setCurrentHero={setCurrentHero}/>
            
        </section>
       
    );
}

export default MainWindow;


