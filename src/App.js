import React, { Component} from 'react';
import Nav from './Navbar.js';
import Features from './Features.js';
import Searches from './Searches.js';
import Partner from './Partner.js';
import Steps from './Steps.js';
import LastRow from './LastRow.js';
import Footer from './Footer.js';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt,faCompass } from '@fortawesome/free-solid-svg-icons';
import chilli from './chilli.png';
import watermelon from './water-melon.png';
import bread from './bread.png';
import paperroll from './toiletpaper.png';
import burger from './burger.png';
import carrot from './carrot.png';
import grain from './grain.png';
import pumpkin from './pumpkin.png';
import nut from './nut.png';
import coffee from './coffee.png';
import sauce from './sauce.png';
import soap from './soap.png';
class App extends Component{
  render(){
    return(
      <div>
        <Nav />
        <div className="head">
        <div className="header">
        <div className="chilli">
              <img src={chilli} className="headerIcon" />                       
            </div>
           <div className="paperroll">
                <img src={paperroll} className="headerIcon" /> 

           </div>
           
        </div>
       <div className="header">
        <div className="watermelon">
              <img src={watermelon} className="headerIcon" />                       
        </div>
      
        <div className="heading" >
            <h1>Stay Home  -  We’ll Deliver</h1>
        </div>
        <div className="bread">
                <img src={bread} className="headerIcon" /> 

           </div>
           
        </div>
       <div className="header">
        <div className="burger">
              <img src={burger} className="headerIcon" />                       
        </div>
      
        <div className="heading" >
              <h2>Get your groceries delivered in less than an hour</h2>
        </div>
        <div className="carrot">
                <img src={carrot} className="headerIcon" /> 

           </div>
           
        </div>
       <div className="header">
        <div className="grain">
              <img src={grain} className="headerIcon" />                       
        </div>
      
       <div className="searchBar">
           
              <FontAwesomeIcon className="Map" icon={ faMapMarkerAlt } />
             <FontAwesomeIcon className="Compass" icon={ faCompass } />
              <button className="searchButton">Search</button>
               <input className="input-field" type="text" name="location" placeholder="Search for a location"/>
              
                      
         </div>
        <div className="pumpkin">
                <img src={pumpkin} className="headerIcon" /> 

           </div>
           
        </div>
       <div className="header">
        <div className="nut">
              <img src={nut} className="headerIcon" />                       
        </div>
      
      <div className="locationsList">
            <ul className="Locations">
                <li>NEW YORK</li>
                <li>LOS ANGELES</li>
                <li>CHICAGO</li>
                <li>HOUSTON</li>
                <li>PHOENIX</li>
                <li>PHILADELPHIA</li>
                <li>SAN ANTANIO</li>
           </ul>
         </div>
          <div className="coffee">
                <img src={coffee} className="headerIcon" />
           </div>
           
        </div>
      <div className="header">
        <div className="sauce">
              <img src={sauce} className="headerIcon" />                       
            </div>
           <div className="soap">
                <img src={soap} className="headerIcon" /> 

           </div>
           
        </div>
       </div>
      <Features />
      <Searches />
      <Steps />
      <Partner />
      <LastRow />
      <Footer />
      </div>
      
    );
  }
}

export default App;
