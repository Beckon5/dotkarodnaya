import React from 'react';
import { connect, } from 'react-redux'
import './HeroStats.css';


const mapStateToProps = (state) => {

    return {
        currentHero: state.currentHero,
        data: state.data
    }
}
const HeroStats =(props)=> {
    const {data, currentHero} = props;
    return (
        <div className="hero-stats">

            {Object.keys(props.data).map((item) => {
                if (data[item].localized_name === currentHero)
                    return (
                        <div key={data[item].id} className="info-block">
                            <p className="hero-name">{data[item].localized_name}</p>
                            <img className="hero-img" src={"http://cdn.dota2.com" + data[item].img} alt="" />
                            <div className="attrs">
                                <div><img src="./img/str.png" alt="str" />{data[item].base_str}</div>
                                <div><img src="./img/agi.png" alt="agi" />{data[item].base_agi}</div>
                                <div><img src="./img/int.png" alt="int" />{data[item].base_int}</div>
                            </div>
                            


                                <div className="stats-table">
                                    <div className="tr">
                                        <div className="table-title" >Hit points:</div>
                                        <div className="table-value">{data[item].base_health}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Base health regen:</div>
                                        <div className="table-value">{data[item].base_health_regen}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Base mana regen:</div>
                                        <div className="table-value">{data[item].base_mana_regen}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Base attack:</div>
                                        <div className="table-value">{data[item].base_attack_min}-{data[item].base_attack_max}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Base str:</div>
                                        <div className="table-value">{data[item].base_str}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Base agi:</div>
                                        <div className="table-value">{data[item].base_agi}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Base int:</div>
                                        <div className="table-value">{data[item].base_int}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Move speed:</div>
                                        <div className="table-value">{data[item].move_speed}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Attack type:</div>
                                        <div className="table-value">{data[item].attack_type}</div>
                                    </div>
                                    <div className="tr">
                                        <div className="table-title" >Roles</div>
                                        <div className="table-value">{data[item].roles[0]}, {data[item].roles[1]}, {data[item].roles[2]}</div>
                                    </div>
                                    </div>






                        </div>
                    )
            })}

            <div>

            </div>
        </div>



    );
}

export default connect(mapStateToProps)(HeroStats);