import React from 'react';

import './HeroStats.css';

function HeroStats(props) {
    const data = props.data;
    const currentHero = props.currentHero
  return (
      <div className="hero-stats">

{Object.keys(props.data).map((item) => {
    if(data[item].localized_name===currentHero)
    return(
        <div className="info-block">
<p className="hero-name">{data[item].localized_name}</p>
<img className="hero-img" src={"http://cdn.dota2.com" + data[item].img} alt=""/>
<div className="attrs">
                        <div><img src="./img/str.png" alt="str"/>{data[item].base_str}</div>
                        <div><img src="./img/agi.png" alt="agi"/>{data[item].base_agi}</div>
                        <div><img src="./img/int.png" alt="int"/>{data[item].base_int}</div>
                    </div>
<table>
                <tbody>
                    
                    
                    
                    <tr>
                        <td className="table-title" >Hit points:</td>
                        <td className="table-value">{data[item].base_health}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Base health regen:</td>
                        <td className="table-value">{data[item].base_health_regen}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Base mana regen:</td>
                        <td className="table-value">{data[item].base_mana_regen}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Base attack:</td>
                        <td className="table-value">{data[item].base_attack_min}-{data[item].base_attack_max}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Base str:</td>
                        <td className="table-value">{data[item].base_str}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Base agi:</td>
                        <td className="table-value">{data[item].base_agi}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Base int:</td>
                        <td className="table-value">{data[item].base_int}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Move speed:</td>
                        <td className="table-value">{data[item].move_speed}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Attack type:</td>
                        <td className="table-value">{data[item].attack_type}</td>
                    </tr>
                    <tr>
                        <td className="table-title" >Roles</td>
                        <td className="table-value">{data[item].roles[0]}, { data[item].roles[1]}, {data[item].roles[2]}</td>
                    </tr>
                </tbody>
                </table>
          
        
            
        
            
        
        </div>
    )
})}

    <div>
        
    </div>
      </div>



  );
}

export default HeroStats;