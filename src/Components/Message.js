import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Message extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            message:'Welcome visitor'
        }
    }

    changeMessage()
    {
        this.setState({
            message:'thank you for subscribing'
        })
    }
render()
{
    return(
        <div>
<h1>{this.state.message}</h1>
<button onClick={()=>this.changeMessage()}>Subscribe</button>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    ) 
}
}

export default Message;