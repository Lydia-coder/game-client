import React from "react";
import {Form,Button} from "react-bootstrap" 

export default function LoginForm(props) {
  return (
    <Form className="test" onSubmit={props.onSubmit}>
      <Form.Label>user name</Form.Label>
      <Form.Control  type="text"
        name="userName"
        placeholder="userName"
        value={props.values.email}
        onChange={props.onChange} />
     
      
      <Form.Label className="label-style"> password </Form.Label>
      <Form.Control type="text"
       type="text"
       name="password"
       placeholder="password"
       value={props.values.password}
       onChange={props.onChange} />
      <Button type="Submit">LOGIN</Button>
    </Form>
  );
}
