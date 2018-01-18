import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './Containers/navbar/index.js'
import Skill from './Containers/skill/index.js';
import About from './Containers/about/index.js';
import Portfolio from './Containers/portfolio/index.js';
import Contact from './Containers/contact/index.js';
import Home from './Containers/home/index.js';
class Routers extends React.Component{
  render(){
    return(
      <div>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/skills" component={Skill}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>          
        </Switch>
      </div>
    );
  }
}
export default Routers;
