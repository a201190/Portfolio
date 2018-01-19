import React from 'react';
import './index.scss';
import {Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
class Skill extends React.Component{
    render(){
        return(
            <Card style={{margin: '0em 12.7em'}}>
            <CardImg top width="100%" src={require('../../image/myskill.jpg')} className="skill" alt="Card image cap" />
            <CardBody>
              <CardTitle>My Skills</CardTitle>
              <CardText>As I am a Quick Learner and a Neophile. With my affinity for learning and continual investigation into the unknown, I am always searching for ways to gain and master new skills</CardText>
              <CardSubtitle>LANGUAGES</CardSubtitle>
              <hr/>
              <CardText>C, C++, Core Java,Html5, CSS, Reactstrap, Bootstrap, Javascript </CardText>
              <CardSubtitle>FRAMEWORKS, LIBRARIES AND OTHER TECHNOLOGIES</CardSubtitle><hr/>
              <CardText>Node.js, React, Firebase</CardText>
              <CardSubtitle>DATABASES</CardSubtitle><hr/>
              <CardText>MySQL, MongoDB</CardText>
              <CardSubtitle>VERSION CONTROL</CardSubtitle><hr/>
              <CardText>git</CardText>
              <CardSubtitle>PLATFORMS</CardSubtitle><hr/>
              <CardText>Windows, Linux (Ubuntu)</CardText>                                                        
            </CardBody>
          </Card>
        );
    }
}
export default Skill;