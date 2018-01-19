import React from 'react';
import './index.scss';
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
class About extends React.Component{
    render(){
        return(
            <div>
                <Card className="about">
                    <CardImg top src={require('../../image/aboutme.jpg')} alt="Card image cap" className="aboutme" />
                    <CardBody>
                    <CardTitle>About Me</CardTitle>
                    <CardText>
                        My Name is Amit Kumar Sharma, I passed B. Tech from Bengal College of Engineering and Technology, Durgapur, West Bengal, India,
                        I join B. C. E. T in 2012. Joining B. C. E. T was a great success for me in my life. I have done an internship from Redloop Technology in
                        which i am working an demo project www.leopetra.com. i am currently working an open source project by my self.
                        you can see it on my githup.I like exploring new tech articles on the internet, to keep myself updated with the recent technology. My interest lies in knowing more about Web Technology.
                        In my free time, I like to share my knowledge on Quora and do competitive coding on Websites like Hackerrank. I also play Cricket.
                    </CardText>
                    <hr/>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default About;