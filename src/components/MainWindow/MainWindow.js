import React from "react";
import './MainWindow.css';
import hero_icon from "../Media/temp/am.jpg";


class MainWindow extends React.Component {
    constructor() {
        super();
        this.state = { 
            data: {},
            str:{},
            agi:{},
            int:{}
        };
      }
      async componentDidMount() {
        const response = await fetch(`https://api.opendota.com/api/heroStats`);
        const json = await response.json();
        this.setState({ data: json });
        for (var key in this.state.data){
            if(this.state.data[key].primary_attr==="str")
            console.log(this.state.data[key].name);
            
        }
      }
      
    render(){
  return (
    <section className="main-window">
        <div className="main-window__search-field">
            <input type="text"/>
            <button>Search</button>
        </div>
        <p className="main-window__title">STRENGTH</p>
        <div className="main-window__hero-container str">
            
            <div className="hero-block">
                <img src={hero_icon} alt=""/>
            </div>
            <div className="hero-block">
                <img src={hero_icon} alt=""/>
            </div>
            <div className="hero-block">
                <img src={hero_icon} alt=""/>
            </div>
            <div className="hero-block">
                <img src={hero_icon} alt=""/>
            </div>
            <div className="hero-block">
                <img src={hero_icon} alt=""/>
            </div>
        </div>

    </section>
  );
    }
}

export default MainWindow;




// {DreamData.map((dreamDetail, index) => {
//     return (
//         <div
//             className="dream"
//             onClick={() => {
//                 props.setCurrentDreamIndex(index);
                
//             }}
//         >
//             <div className="img-small">
//                 <img
//                     src={require(`../../../Media/image/DreamTrader/${dreamDetail.img}`)}
//                     alt="dream-img"
//                 />
//             </div>
//             <div className="all-block">
//                 <div className="title">{dreamDetail.title}</div>
//                 <div className="img-block">
//                     <img
//                         src={require(`../../../Media/image/DreamTrader/${dreamDetail.img}`)}
//                         alt="dream-img"
//                     />
//                 </div>
//                 <button className="button">VIEW DETAILS</button>
//                 <p className="price">
//                     Real price ${dreamDetail.realPrice}
//                 </p>
//                 <p className="description">
//                 {dreamDetail.description}
//                 </p>
//                 <button className="delete-current-dream"></button>
//             </div>
//         </div>
        
//     );
// })}