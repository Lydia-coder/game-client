import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/user";
import {Modal} from "react-bootstrap"

class LoginFormContainer extends Component {
  state = { userName: "", password: "" };

  componentDidUpdate() {
    if (this.props.user.length !== 0) {
      this.props.history.push("/rooms"); //  => try to understand...
    }
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    console.log("login");
    event.preventDefault();
    this.setState({
      
    });
    this.props.login(this.state.userName, this.state.password);
      
        this.props.toggleLoginModal(false);
      
      
        
      
      }

  render() {
    const { toggleLoginModal, LoginModalVisible } = this.props;
    

    return (
      <div>
        <Modal show={LoginModalVisible} onHide={() => toggleLoginModal(false)}>
        <LoginForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { login })(LoginFormContainer);
