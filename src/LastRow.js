import React, { Component} from 'react';
import grocery from './grocery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faApple,faGooglePlay } from '@fortawesome/free-brands-svg-icons';
class LastRow extends  React.Component{
  render(){
    return(
          <div className="LastRow">
             
             
      
                 <div className="LastRowColumn">
      
                    <div id="Icon">
                       <img src={grocery} className="groceryIcon" />
                        <div className="Navhead">
                              <p className="Navhead1">Fresh Grocery</p>
                              <p>Stay Home,Stay Safe</p>                    


                          </div>
                       </div>
                      <a> Help Center</a>
                      <a>English (International)</a>
    
                     <div className="Buttons">
                        <div className="LastRowButtons">
                           <button className="lastrowbtn">  
                                  <i className="Socialicon"> <FontAwesomeIcon icon={faApple} /></i>
                                  <p> Download on the<br /><span className="Bigtxt"> App Store</span></p>
                            </button>
                         </div>
                        <div className="LastRowButtons">
                            <button className="lastrowbtn">
                                 <i className="Socialicon"> <FontAwesomeIcon icon={faGooglePlay} /></i>
                                  <p>Get it on<br /><span className="Bigtxt"> Google Play </span></p>
                            </button>
                         </div>
                      </div>
                                  
                  </div>                
                 <div className="LastRowColumn LastRowColumn2 ">
                    <h3>About us</h3>
                    <a>My Account</a>
                    <a>Categories</a>
                    <a>Cities</a>
                    <a>Become a Partner</a>
                    <a>Blog</a>
                    <a>Careers</a>
                 </div>
                 <div className="LastRowColumn LastRowColumn2 ">
                    <h3>Questions?</h3>
                    <a>Frequently asked questions</a>
                    <a>Contact us</a>
                 </div>
             
               
      
          </div>
     );
  }
}

export default LastRow;