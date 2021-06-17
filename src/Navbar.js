import React, { Component} from 'react';
import grocery from './grocery.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class Nav extends  React.Component{
  render(){
    return(
          <div className="Nav">
             <div id="Icon">
                <img src={grocery} className="groceryIcon" />
                 <div className="Navhead">
                              <p className="Navhead1">Fresh Grocery</p>
                              <p>Stay Home,Stay Safe</p>                    


                  </div>
             </div>
             
                <div id="buttons">
                     <button className="btn1">Log In</button>
                      <button className="btn2">Sign Up</button>         
                      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
   <FontAwesomeIcon className="collapseicon" icon={ faBars } />
  </a>
                </div>
           
                                 
          </div>
     );
  }
}

export default Nav;