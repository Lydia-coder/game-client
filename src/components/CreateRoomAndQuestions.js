import React, { Component } from "react";
import Questions from "./Questions";
import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Form,Button} from "react-bootstrap"

class CreateRoomAndQuestions extends Component {
  constructor() {
    super();
    this.onChangeQuestion = this.onChangeQuestion.bind(this);
  }
  state = {
    roomName: "",
     questions: {
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: ""
    }
  };
  // url = "https://evening-scrubland-81754.herokuapp.com";
  url = "http://localhost:4000"; //DONT FORGET IT'S HTTP!! WITHOUT SSSSSS !! BRO!

  onChange = event => {
    const input = event.target.value;
    this.setState({ roomName: input });
  };

  onChangeQuestion(event, name) {
    const input = event.target.value;
    this.setState({
      ...this.state,
      questions: { ...this.state.questions, [name]: input }
    });
    console.log(this.state.questions, "where???");
  }
  

  onSubmit = event => {
    console.log(this.state.roomName);
    event.preventDefault();
    const { roomName, questions } = this.state; // const value = this.state.value

    const postUrl = `${this.url}/room`;
    console.log({ postUrl, roomName });
    superagent
      .post(postUrl)
      .set({ authorization: `Bearer ${this.props.jwt}` })
      .send({ roomName, questions }) //
      .then(res => {
        console.log(res, "res test");
      });
  };

  render() {
    return (
      <div align="center">
        <Form onSubmit={this.onSubmit}>
          <Form.Label style={{color:"#ffc107",fontSize: "35px",fontStyle:"cursive",fontFamily:'Pacifico'}}>Create New a Room:</Form.Label>
          <Form.Control 
          style={{width:"200px"}}
            type="text"
            name="roomName"
            placeholder="Room Name"
            value={this.state.roomName}
            onChange={this.onChange}
          />
          <Questions
            questionsValues={this.state.questions}
            onChangeQuestion={this.onChangeQuestion}
            // onSubmitQuestion={this.onSubmitQuestion}
          />
       <Button variant="warning" type="Submit">Submit</Button>
        </Form>
        <Link style={{color:"#ffc107"}} to="/rooms">Rooms</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jwt: state.user,
    questions: state.question
    // user: state.user
    // value: state.value
  };
}

export default connect(mapStateToProps)(CreateRoomAndQuestions);
