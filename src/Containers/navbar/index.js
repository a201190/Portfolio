import React from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import {Modal, ModalFooter, ModalHeader} from 'reactstrap';
class NavBar extends React.Component{
  constructor(){
    super();
    this.toggle=this.toggle.bind(this);
    this.state={
      active:false
    }
  }
  toggle(){
    this.setState({
      active:!this.state.active
    });
  }
  renderContent(){
    let val;
    if(this.state.active===true){ 
       val= (<Modal isOpen={this.state.active} toggle={this.toggle} style={{display:'table-cell'}} >
          <ModalHeader toggle={this.toggle}>
             <img src={require("../../image/prof.jpg")} alt="profimg" className="Img"/> Explore
          </ModalHeader>
          <ModalFooter style={{display:'grid',justifyContent:'flex-start'}} className="model" >
              <a href="https://github.com/a201190?tab=repositories" className="icon">
                <i className="fa fa-github" aria-hidden="true"></i>Github
              </a>
              <a href="https://www.linkedin.com/in/amit-sharma-232636a8/" className="icon">
               <i className="fa fa-linkedin" aria-hidden="true"></i>Linkedin
              </a>
              <a href="/" className="icon">
              MyResume
              </a>
        </ModalFooter>
        </Modal>)
    }
    return val;
  }
  render(){
    console.log(this.state.active)
    return(
    <div className="Nav">
      <div className="nav">
        <div className="Nav-1">
          <i onClick={this.toggle} className="fa fa-bars" aria-hidden="true"></i>
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
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/skills">SKILLS</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      <div>{this.renderContent()}</div>      
    </div>
    );
  }
}
export default NavBar;
