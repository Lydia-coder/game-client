import React, { Component } from 'react';
import SignupFormContainer from "./SignupFormContainer"
import LoginFormContainer from "./LoginFormContainer"
import {Navbar,NavDropdown,Nav,Modal,Button} from "react-bootstrap"


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          LoginModalVisible: false,
          SignupModalVisible: false,
          PlayModalVisible: true,
         
          
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
      togglePlayModal = (state) => {
        this.setState({
          PlayModalVisible: state
        });
      };
    render() {
    const {LoginModalVisible, SignupModalVisible,PlayModalVisible} = this.state;
        return (
            <div>
                <Navbar  bg="warning" expand="lg">
                <Navbar.Brand className="navbar-title" >Never have I ever </Navbar.Brand>
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
           toggleSignupModal={this.toggleSignupModal}/>
        <Modal show={PlayModalVisible} onHide={()=>{this.togglePlayModal(false)}}>
        <Modal.Header closeButton>
            <Modal.Title>Welcome to "Never Have I ever!"</Modal.Title>
           
          </Modal.Header>
          <Modal.Body>
            <p> How to play the game<br/>
              1. Sign up and Login<br/>
            2.Create a room and fill out the five questions<br/>
            3. Go to the room you created. and wait for other players to join<br/>
            4. When a question is presentend the player can answer I have or I have not.<br/>
            5. The player who chooses I have will have to drink, after that click next for next question</p>
          </Modal.Body>
        
        </Modal>
        <div className="text-homepage">
        <h1 align="center"> Never Have I ever</h1>
        <p align="center">Never Have I Ever is a really fun way to get to know people,<br/>
         or to learn more about people you already know. You can play the basic version of the game,<br/>
         which is suitable for all ages. Or you can turn into a drinking game for a group of people <br/>
         above drinking age. If you do play the drinking game version, <br/>
        make sure you don’t drink too much and you don’t drive afterward</p>
        <Button variant="outline-warning" style={{ width: "200px", margin: 'auto', marginTop:"120px", display: "block"}} onClick={() => this.togglePlayModal(true)}> How to play!</Button>
        </div>
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