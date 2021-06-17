import React, { Component} from 'react';
import Step1 from './step1.png';
import Payment from './payment.png';
import Rating from './rating.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faApple,faGooglePlay } from '@fortawesome/free-brands-svg-icons';

class Steps extends  React.Component{
  render(){
    return(
          <div className="Steps subHeads">
                 <p className="tag">Get delivered in 3 easy steps</p>
                 <h2>Here’s how it works</h2>
                 <div className="Step1"><img src={Step1} className="step-image"/>
                      <h3><span className="number">1</span> Request in the app</h3>
                      <p>Set your delivery location, Choose your groceries from a wide range of 5000+ products</p>
      
                     <div className="Buttons">
                        <div className="Inner">
                           <button className="Socialbtn">  
                                  <i className="Socialicon"> <FontAwesomeIcon icon={faApple} /></i>
                                  <p> Download on the<br /><span className="Bigtxt"> App Store</span></p>
                            </button>
                         </div>
                        <div className="Inner">
                            <button className="Socialbtn">
                                 <i className="Socialicon"> <FontAwesomeIcon icon={faGooglePlay} /></i>
                                  <p>Get it on<br /><span className="Bigtxt"> Google Play </span></p>
                            </button>
                         </div>
                      </div>
                 
                 </div>
      
                 <div class='stepsrow stepsrow_reverse'>
                   <div class='stepscolumn'>      
                       <h3><span className="number">2</span> Schedule and Pay</h3>
                      <p>Schedule the delivery at your 
convenient time <br />and pay digitally</p>    
                   </div>
                   <div class='stepscolumn '>     
                          <img src={Payment} />      
                   </div>
                 </div>
      
               <div class='stepsrow  '>
                  <div class='stepscolumn'>     
                          <img src={Rating} />      
                   </div>
                   <div class='stepscolumn'>      
                       <h3><span className="number">3</span> It’s delivered and Rate us</h3>
                      <p>Collect groceries at your doorstep 
and tell us about <br /> our service</p>    
                   </div>
                   
                 </div>
      </div>
     );
  }
}

export default Steps;