import React, { Component} from 'react';
import delivery from './delivery.png';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; 

class Features extends  React.Component{
  render(){
    return(
          <div className="Features subHeads">
             <div className="row">
                 <div className="column desc">
                     <p className="tag">#GroceryDeliveredSafely</p>
                     <h2>Hygenically</h2><h2>Packed,</h2><h2> Safely Delivered</h2>
                     <button className="btn2">Learn More</button>
                 </div>
                 <div className="column desc-image">
                     <img src={delivery} className="Delivery" />
                  </div>  
              </div>  
              <div className="row2">
                 <div className="column2">
                    <CheckCircleIcon className="check"/>
                    <p>Zero touch delivery options</p>
                 </div>
                 <div className="column2">
                    <CheckCircleIcon className="check"/>
                    <p>Regular cleaning of warehouses</p>
                  </div>  
                  <div className="column2">
                    <CheckCircleIcon className="check"/>
                    <p>Fever screening of all executives</p>
                  </div>
              </div> 
          </div>
     );
  }
}

export default Features;