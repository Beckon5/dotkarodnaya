import React,{useEffect} from "react";
import './HeroContainer.css';
import {

    Link
} from "react-router-dom";
function HeroContainer(props) {
    

    
    return (
        <div className="main-window__hero-container">
            {
                Object.keys(props.data).map((item) => {
                    const coloured = {
                        filter: "grayscale(100%)",
                        opacity: "0.4"
                    }
                    if(props.data[item].localized_name.toLowerCase().match(props.currentSearchValue.toLowerCase())){
                       coloured.filter="grayscale(0%)"
                       coloured.opacity="1"
                    
                    }
                    if (props.data[item].primary_attr === props.attr)
                        
                        return (
                            
                            <div className="hero-block" onMouseOver={(e) => props.setCurrentHero(props.data[item].localized_name)}>
                                                             
                                <Link to={"/"+props.currentHero} >
                                    <img style={coloured} src={"http://cdn.dota2.com" + props.data[item].img} alt={props.data[item].id} />
                                </Link>
                            </div>
                        )
                })
            }


        </div>

    );

}

export default HeroContainer;



