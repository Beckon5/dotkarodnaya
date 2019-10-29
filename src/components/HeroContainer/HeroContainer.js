import React from "react";
import './HeroContainer.css';
import {changeCurrentHero} from '../../store/actions'
import {
    Link
} from "react-router-dom";
import { connect} from 'react-redux'
import {bindActionCreators } from 'redux'

const mapStateToProps = (state) => {
    
    return {
        data: state.data,
        searchValue: state.searchValue,
        currentHero: state.currentHero
    }
}
const putActionsToProps =(dispatch) =>{
    return{
        changeCurrentHero: bindActionCreators(changeCurrentHero, dispatch)
    }
};
function HeroContainer(props) {
    const {data, searchValue, changeCurrentHero, currentHero} = props;

    
    return (
        <div className="main-window__hero-container">
            {
                Object.keys(data).map((item) => {
                    const coloured = {
                        filter: "grayscale(100%)",
                        opacity: "0.4"
                    }
                    if(data[item].localized_name.toLowerCase().match(searchValue.toLowerCase())){
                       coloured.filter="grayscale(0%)"
                       coloured.opacity="1"
                    
                    }
                    if (props.data[item].primary_attr === props.attr)
                        
                        return (
                            
                            <div key={props.data[item].id} className="hero-block" onMouseOver={(event) => {changeCurrentHero(data[item].localized_name)}}>
                                                             
                                <Link to={"/"+currentHero} >
                                    <img style={coloured} src={"http://cdn.dota2.com" + props.data[item].img} alt={props.data[item].id} />
                                </Link>
                            </div>
                        )
                })
            }


        </div>

    );

}

export default connect(mapStateToProps, putActionsToProps)(HeroContainer);



