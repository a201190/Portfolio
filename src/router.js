import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './Containers/navbar/index.js'
class Routers extends React.Component{
  render(){
    return(
      <div>
      <NavBar/>
        <Switch>
        </Switch>
      </div>
    );
  }
}
export default Routers;
