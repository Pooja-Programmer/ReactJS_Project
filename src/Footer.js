import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import {  faInstagram,faFacebookSquare,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends  React.Component{
  render(){
    return(
          <div className="Footer">
             <hr />
            <div className="footerRow">
             <div className="footerCol">
                <p>&copy; 2021 PVN React Project</p>
             </div>
             <div className="footerCol">
                 <a>Privacy</a>
                 <a>Accessibility</a>
                 <a>Terms</a>
             </div>
             <div className="footerCol">
                 <FontAwesomeIcon icon={faInstagram} className="icon Inst"/>
                 <FontAwesomeIcon icon={faFacebookSquare} className="icon Fb" />
                 <FontAwesomeIcon icon={faTwitter} className="icon Tweet"/>
                 <FontAwesomeIcon icon={faYoutube} className="icon Youtube"/>
             </div>
              </div>
          </div>
     );
  }
}

export default Footer;