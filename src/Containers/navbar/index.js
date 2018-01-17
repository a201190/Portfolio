import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
class NavBar extends React.Component{
  render(){
    return(
    <div className="Nav">
      <div className="nav">
        <div className="Nav-1">
          <i className="fa fa-bars" aria-hidden="true"></i>
            Amit Kumar Sharma
        </div>
        <div className="Nav-2">
            <a href="https://github.com/a201190?tab=repositories" className="icon">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/amit-sharma-232636a8/" className="icon">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
        </div>
      </div>
      <ul className="link">
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/skills">SKILLS</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </div>
    );
  }
}
export default NavBar;
