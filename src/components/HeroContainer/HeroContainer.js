import React from "react";
import './HeroContainer.css';
import {

    Link
} from "react-router-dom";
function HeroContainer(props) {

    const[currentHero, setCurrentHero] = [props.currentHero, props.setCurrentHero]
    return (
        <div className="main-window__hero-container">
            {
                Object.keys(props.data).map((item) => {

                    if (props.data[item].primary_attr === props.attr)

                        return (
                            <div className="hero-block" onClick={(e) => setCurrentHero(props.data[item].id)}>
                                <Link to="/hero-stats" >
                                    <img src={"http://cdn.dota2.com" + props.data[item].img} alt={props.data[item].id} />
                                </Link>
                            </div>
                        )
                })
            }


        </div>

    );

}

export default HeroContainer;



