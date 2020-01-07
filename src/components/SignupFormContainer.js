import React, { Component } from "react";
import SignupForm from "./SignupForm";
import { connect } from "react-redux";
import { createUser } from "../actions/user";
import {Modal} from "react-bootstrap"

class SignupFormContainer extends Component {
  state = { userName: "", password: "" };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    console.log("Signup",event);
    event.preventDefault();
    this.props.createUser({userName: this.state.userName,
      password: this.state.password})
    this.props.toggleSignupModal(false);
      
      
        
      
      }

  render() {
    const { toggleSignupModal, SignupModalVisible } = this.props;
    return (
      <div>
          <Modal show={SignupModalVisible} onHide={() => toggleSignupModal(false)}>
        <SignupForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
        <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

export default connect(null, { createUser })(SignupFormContainer);
