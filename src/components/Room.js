import React, { Component } from "react";
import superagent from "superagent";
import { connect } from "react-redux";
import {Button,Modal,Badge} from "react-bootstrap"


class Room extends Component {
  constructor(props){
    super(props)
    
    this.state={
      showContent: true
    }
  }
  toggleContent=(state) =>{
   
    this.setState({showContent:state })
    
  }
 
  onClick = async () => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/join/${name}`;

    const response = await superagent
      .put(url)
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response, "response test");
  };

  sendChoice = async choice => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/choice/${name}`;

    const response = await superagent

      .put(url)
      .send({ iHave: choice })
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response, "Ihave true test");
  };
  nextQuestion = async choice => {
    const { jwt, match } = this.props;
    const { name } = match.params;
    const url = `http://localhost:4000/round/${name}`;

    const response = await superagent

      .put(url)
      .set({ authorization: `Bearer ${jwt}` });
    console.log(response, "Ihave true test");
  };
  

  render() {
    
    const {showContent,toggleContent}=this.state

    const { name } = this.props.match.params;
    const { rooms } = this.props;
    console.log("test rooms", rooms);

    const room = rooms.find(room => room.roomName === name);
    if (!room) {
      return "this room does not exist";
    }
    const { users } = room;
    const { questions } = room;

    console.log("questions test:", questions);

    const listQuestion =
      questions && questions.length ? (
        questions.map(question => (
          <p key={question.question}> {question.question}</p>
        ))
      ) : (
        <p> no questions in this room</p>
      );

    const list =
      users && users.length ? (
        users.map(user => <ul><li key={user.userName}> <Badge pill variant="warning">{user.userName}</Badge></ li></ul>
        )
      ) : (
        <p> no users in this room</p>
      );
    const drink = users.every(user => user.iHave === null);

    console.log("hello", drink);
    // const { questions } = this.props;
    // //console.log("this.props test:", this.props);
    // if (!questions) {
    //   return null;
    // }

    // //console.log("rooms test:", rooms);
    // const listQuestion = questions.map(question => (
    //   <p key={question}>{question}</p>
    // ));

    console.log("room test", room);
    console.log(name, "test");
    console.log(room.questions);
    const userList = users.map(user => {
      if (user.iHave === true) {
        return  <Modal show={showContent} onHide={()=>{this.toggleContent(false)}}>
        
          
        <Modal.Header closeButton  >
          <Modal.Title>{user.userName} </Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          {showContent===true ?<p>Has to drink🍺</p> :""}
          
        </Modal.Body> 
        
        </Modal>
      }
     
    });
    //const content = !drink ? "both clicked" : "no body clicked ";
    console.log("after userList test");
    console.log("room.questions test:", room.questions);
    console.log("room.round test:", room.round);
    return (
      <div>
        
        <h1>{name}</h1>
        
        <Button className="one-btn"variant="outline-warning"onClick={() => {this.sendChoice(true)}} >I HAVE</Button>
        <Button className="twobtn"variant="outline-warning"onClick={() => this.sendChoice(false)}>I HAVE NOT</Button>
        <Button className="three-btn"variant="outline-warning"onClick={this.onClick}>JOIN</Button>
        {list}
        {room.round === null && <h1>{room.questions[0].question}</h1>}
        {room.round !== null && room.round < 5 && (
          <h2>{room.questions[room.round].question}</h2>
        )}
        {/* {room.round === 5 && (
          <h1>
            <Link to="/rooms"></Link>{" "}
          </h1>
        )} */}
        {!drink && userList}
        <Button variant="outline-warning"onClick={() => this.nextQuestion()}>Next</Button>
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    jwt: state.user,
    rooms: state.rooms
    // questions: state.rooms.                                                            room.questions
  };
}

export default connect(mapStateToProps)(Room);

// baseUrl = "https://evening-scrubland-81754.herokuapp.com";

// state = {
//   questions: [],
//   value: ""
// };
// componentDidMount() {}

// onChange = event => {
//   const { value } = event.target;

//   this.setState({ value: value });
// };
// onSubmit = event => {
//   event.preventDefault();

//   const { value } = this.state;

//   const { name } = this.props.match.params;

//   const url = `${this.baseUrl}/group/${name}`;

//   request.post(url).send({});
// };
