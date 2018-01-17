import React, { Component } from 'react';
import Routers from './router.js';
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Routers/>
        </BrowserRouter>
      </div>
      );
  }
}

export default App;
