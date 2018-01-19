import React from 'react';
import './index.scss';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';  
class Portfolio extends React.Component{
    constructor(){
        super();
        this.state={
            data:[
                {
                    img:require("../../image/port1.png"), header:'Survey', about:`I Developed and Design asurvey web, in which i connect an MongoDb database, when you click on Login with gmail to login your account, after login you click on plus button to open new surve then you fill the form to send your surve to save on Database`, link:'https://asurvey.herokuapp.com'
                },{
                    img:require("../../image/port2.png"), header:'Pokemon' ,about:'I Developed and Design apokemon web, in which i connect an MongoDb database, when you click on Login with facebook to login your account, after login you click on search box to search pokemon', link:'https://apokemon.herokuapp.com'                   
                },{
                    img:require("../../image/port3.png"), header:'Replica Facebook' ,about:'I Developed and Design areplicafb web, in which i do only frontend', link:'https://areplicafb.herokuapp.com'                 
                }
            ]
        }
    }
    render(){
        return(
           <div>
               <Card className="Portfil">
                    <CardImg top height='300px' src={require('../../image/leopetra.png')} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Leopetra</CardTitle>
                    <CardText>
                        . I Developed and Design Leopetra Admin Panel <br/>
                        . Full​ ​Responsive​ ​Website​,​ ​with​ ​admins​ ​having​ ​ability​ ​to  update​ ​content​ ​on​ ​server<br/>
                        . Technologies​ ​Used:​ ​​NodeJS,​ ​Express,​ ​jQuery, ReactJs 
                    </CardText>
                    </CardBody>
                </Card>
                <div className="port">
                {this.state.data.map((data, i)=>{
                    return(
                            <Card className="acard" key={i}>
                            <CardImg top width="100%" height="200px" src={data.img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{data.header}</CardTitle>
                                <CardText>{data.about}</CardText>
                                <a href={data.link}>click here to open web</a>
                            </CardBody>
                            </Card>
                    )
                })}
                </div>
           </div>
        );
    }
}
export default Portfolio;