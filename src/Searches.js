import React, { Component} from 'react';
import flour from './flour.png';
import vegetables from './vegetables.png';
import personalcare from './personal-care.png';
import kitchen from './kitchen.png';
import beverages from './beverages.png';

class Searches extends  React.Component{
  render(){
    return(
          <div className="Searches subHeads">
             <p className="tag">Here’s what you need</p>
             <h2>Quick Searches</h2>
          
         <div className="Searches-row">
                 <div className="column Searches-col">
                     <img src={flour} className="searchesImage"/>
                     <h3>Grocery and Staples</h3>
                 </div>
                 
                 
      <div className="column Searches-col">
                     <img src={vegetables} className="searchesImage"/>
                     <h3>Vegetables & Fruits</h3>
                 </div> 
       <div className="column Searches-col">
                     <img src={personalcare} className="searchesImage"/>
                     <h3>Personal Care</h3>
                     
                 </div>
                <div className="column Searches-col">
                     <img src={kitchen} className="searchesImage"/>
                     <h3>Home & Kitchen</h3>
                 </div>
                <div className="column Searches-col">
                     <img src={beverages} className="searchesImage"/>
                     <h3>Beverages</h3>
        </div>
              
           
        </div> 
       <button className="btn2 center">Explore More</button>
      </div>
     );
  }
}

export default Searches;