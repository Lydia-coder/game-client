import React, { Component } from "react";
import {Form} from "react-bootstrap"

export default class Questions extends Component {
  render() {
    const { questionsValues, onChangeQuestion } = this.props; //, onSubmitQuestion
    return (
      <div>
        <Form className="question-form">
    <h1>QUESTIONS</h1>
        <Form.Label> 1: </Form.Label>
        <Form.Control 
          type="text"
          name="Quesions"
          value={questionsValues["q1"]}
          onChange={event => onChangeQuestion(event, "q1")}
        />
        <Form.Label> 2: </Form.Label>
        <Form.Control 
          type="text"
          name="Quesions"
          value={questionsValues["q2"]}
          onChange={event => onChangeQuestion(event, "q2")}
        />
        <Form.Label> 3: </Form.Label>
        <Form.Control 
          type="text"
          name="Quesions"
          value={questionsValues["q3"]}
          onChange={event => onChangeQuestion(event, "q3")}
        />
        <Form.Label> 4: </Form.Label>
        <Form.Control 
          type="text"
          name="Quesions"
          value={questionsValues["q4"]}
          onChange={event => onChangeQuestion(event, "q4")}
        />
        <Form.Label> 5: </Form.Label>
        <Form.Control 
          type="text"
          name="Quesions"
          value={questionsValues["q5"]}
          onChange={event => onChangeQuestion(event, "q5")}
        />
        </Form>
      </div>
    );
  }
}
