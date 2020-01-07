import React, { Component } from 'react';
import SignupFormContainer from "./SignupFormContainer"
import LoginFormContainer from "./LoginFormContainer"
import {Navbar,NavDropdown,Nav} from "react-bootstrap"

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          LoginModalVisible: false,
          SignupModalVisible: false,
         
          
        };
      }
    
      toggleLoginModal = value => {
        this.setState({
          LoginModalVisible: value
        });
      };
      toggleSignupModal = value => {
        this.setState({
          SignupModalVisible: value
        });
      };
    render() {
    const {LoginModalVisible, SignupModalVisible} = this.state;
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand >Never have I ever </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link onClick={() => this.toggleLoginModal(true)}>
                    Login
                  </Nav.Link>
                  <Nav.Link onClick={() => this.toggleSignupModal(true)}>
                   Sign Up
                  </Nav.Link>
                <NavDropdown title="Rooms" id="basic-nav-dropdown">
                <NavDropdown.Item href="http://localhost:3000/rooms">Availble rooms</NavDropdown.Item>
                </NavDropdown>

                </Nav>

                </Navbar.Collapse>

                </Navbar>
                <LoginFormContainer   LoginModalVisible={LoginModalVisible}
          toggleLoginModal={this.toggleLoginModal} history={this.props.history}/>
                <SignupFormContainer SignupModalVisible={SignupModalVisible}
           toggleSignupModal={this. toggleSignupModal}/>
           <h1>hiiiii</h1>
            </div>
        );
    }
}

export default Homepage;

// <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">Never have I ever </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
      
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>