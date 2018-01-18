import React from 'react';
import './index.scss';
class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={require('../../image/home.jpg')} alt="home" className="homeImg"></img>
            </div>
        );
    }
}
export default Home;