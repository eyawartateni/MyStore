import { Component } from "react";
import { Col, Button, Row, Container, Badge, Alert } from "react-bootstrap";
import Product from "./Product";
import products from "../products";
import NavBar from "./NavBar";


class Products extends Component {
    state = {
        listproducts: products,
        available: true,
        welcome_msg: false
      
      };
  
     
    
      componentDidMount() {
        this.timer = setTimeout(() => {
          this.setState({ welcome_msg: true });
        }, 3000);
      }
      componentWillUnmount() {
        clearTimeout(this.timer);
      }
  
  render() {
    return (
      <div>
        
         {this.state.welcome_msg && (
          <Alert variant="success">
            <Alert.Heading>
              Hey Welcome To Our Shop <b>MyStore</b>
            </Alert.Heading>
            <p>
              Thank you for choosing our store, we hope you enjoy your shopping
              experience !
            </p>
            <hr />
          </Alert>
        )}
        <Container>
          <Row>
            <Button variant="primary">
              Produits :{" "}
              <Badge bg="secondary">{this.state.listproducts.length}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
            <br />
            <br />
            {this.state.listproducts.map((prod, index) => (
              <Col key={index}>
                <Product product={prod}  />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Products;