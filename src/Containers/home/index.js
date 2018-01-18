import React from 'react';
import './index.scss';
class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={require('../../image/prof.jpg')} alt="home" className="homeImg"/>
                <h1 className="homet">Hi, I am Amit</h1>
                <h1 className="home1">Developer. Quick Learner. Neophile.</h1>
            </div>
        );
    }
}
export default Home;