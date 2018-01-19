import React from 'react';
import './index.scss';
class Contact extends React.Component{
    render(){
        return(
            <div style={{color:'white', textAlign:'center'}}>
                <div className="tfv">
                    <h1>Thanks for visiting!</h1>
                </div>
                <div className="cont">
                    <h5>I would love to hear more from you.</h5>
                
                <h5>Want to know more about my projects? My work? Or want to provide me an opportunity of working with you?</h5>
                <div>
                    <i className="fa fa-envelope" aria-hidden="true">
                        amitkumarsharma201190@gmail.com
                    </i>
                </div>
                <div>
                    <i className="fa fa-linkedin" aria-hidden="true">
                        https://www.linkedin.com/in/amit-sharma-232636a8/
                    </i>
                </div>
                <div>
                    <i className="fa fa-angellist" aria-hidden="true">
                        https://angel.co/amit-kumar-sharma-13?public_profile=1
                    </i>
                </div>
                </div>
            </div>
        );
    }
}
export default Contact;