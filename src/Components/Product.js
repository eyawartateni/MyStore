import { isDisabled } from "@testing-library/user-event/dist/utils";
import React,{Component} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from "react-bootstrap/Alert";

class Product extends Component
{
     constructor(props)
    {
        super(props)
        this.state=
        {
           count:this.props.product.like,
           qte:this.props.product.quantity,
           alert:false
        }
    }
  
    increment()
    {
        this.setState((prevState,props)=>(
        {
  count:prevState.count+1
        }
        ));
      

    };

    showAlert()
    {
        this.setState({
        alert:true
        })
        
    }

    buyProduct()
    {
        if(this.state.qte)
        {
            this.setState((prevState,props)=>(
                {
                    
                    qte:prevState.qte-1
                }
                ));
        }
       
    }

    
render()
{
    return(
        <div>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require(`../assets/images/${this.props.product.img}`)} />
      <Card.Body>
        <Card.Title>{this.props.product.name}</Card.Title>
        <Card.Text>
         {this.props.product.description}
        </Card.Text>
        
        <Card.Text>Price : {this.props.product.price}</Card.Text>
        <Card.Text> Quantity:{this.state.qte}</Card.Text>
        <Card.Text>Likes: {this.state.count}</Card.Text>
        <Button variant="primary" onClick={()=>this.increment()}>Like</Button>
        <Button disabled={this.state.qte===0} variant="warning" onClick={()=>{this.buyProduct();this.showAlert()}}>Buy</Button>
        <br></br>
            <br></br>
            {this.state.alert && (
              <Alert key="success" variant="success">
                 You bought an Item 
              </Alert>
            )}
      </Card.Body>
      
    </Card>
    
        </div>
    ) 
}
}

export default Product;