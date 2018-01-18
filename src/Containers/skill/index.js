import React from 'react';
import './index.scss';
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
class Skill extends React.Component{
    render(){
        return(
            <Card style={{margin: '0em 12.7em'}}>
            <CardImg top width="100%" src={require('../../image/myskill.jpg')} className="skill" alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            </CardBody>
          </Card>
        );
    }
}
export default Skill;