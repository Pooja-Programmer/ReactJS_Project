import React, { Component} from 'react';
import order from './order.png';
import track from './track.png';
import delivery1 from './delivery1.png';
import PartnerCenter from './PartnerCenter.png';
class Partner extends  React.Component{
  render(){
    return(
          <div className="Partner subHeads">
             <p className="tag">Why Choose Fresh Grocery</p>
             <h2>Because we are in it together</h2>
              <div className="Searches-row">
                 <div className="column Partner-col">
                     <img src={order} className="searchesImage"/>
                     <h3>No Minimum Order</h3>
                     <p>No order value restrictions, Order <br /> for yourself or your group</p>
                 </div>
                 <div className="column Partner-col">
                     <img src={track} className="searchesImage"/>
                     <h3>Live Order Tracking</h3>
                     <p>Track your order anytime from<br /> the store to your doorstep</p>
                 </div>
                 <div className="column Partner-col">
                     <img src={delivery1} className="searchesImage"/>
                     <h3>24 x 7 delivery</h3>
                     <p>Order anytime, anywhere. We <br /> will get you delivered</p>
                 </div>
               </div>  
                <div class='Partnerrow'>
                   <div class='stepscolumn extend'>      
                       <h3>Become a Partner and start earning!</h3>
                      <p>You can login and logout whenever you want! No mandatory timings</p> 
                      <button className="btn2">Become a Partner</button>
                   </div>
                   <div class='stepscolumn extend'>     
                          <img src={PartnerCenter} className="PartnerImage"/>     
                   </div>
                 </div>
      
          </div>
     );
  }
}

export default Partner;