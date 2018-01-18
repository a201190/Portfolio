import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './Containers/navbar/index.js'
import Home from './Containers/home/index.js'
class Routers extends React.Component{
  render(){
    return(
      <div>
      <NavBar/>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}
export default Routers;
