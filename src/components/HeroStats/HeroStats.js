import React from 'react';

import './HeroStats.css';
function HeroStats() {

  return (
      <div className="hero-stats">
          <img src="https://gamepedia.cursecdn.com/dota2_gamepedia/2/26/Abaddon_icon.png" alt=""/>
        <div className="info-block">
            <p className="hero-name">Abbadon</p>
            <table>
                <tbody>
                    <tr>
                        <td>Hit points:</td>
                        <td>600</td>
                    </tr>
                    <tr>
                        <td>Base health regen:</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Base mana regen:</td>
                        <td>0.2</td>
                    </tr>
                    <tr>
                        <td>Base attack:</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Base str:</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Base agi:</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Base int:</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Move speed</td>
                        <td>330</td>
                    </tr>
                </tbody>
            </table>
        </div>
        


      </div>
  );
}

export default HeroStats;