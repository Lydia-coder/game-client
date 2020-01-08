import React, { Component } from "react";
//import superagent from "superagent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Card,ListGroup,ButtonToolbar,Button} from "react-bootstrap"

class Rooms extends Component {
     
  render() {
    const { rooms } = this.props;
    //console.log("this.props test:", this.props);
    if (!rooms) {
      return null;
    }

    //console.log("rooms test:", rooms);
    const list = rooms.map(room => (
      <p key={room.name}>
        <Link to={`/room/${room.roomName}`} key={room.roomName} 
        style={{color:"black", fontSize:"40px", fontStyle:"cursive", fontFamily:'Amatic SC'}}>
          {room.roomName}
        </Link>
      </p>
    ));
    return (
      <main align="center">
         <Card className="rooms-card" style={{ width: '18rem',border:"solid",borderColor:"#ffc107"}}>
        <div>
       
          <h1 className="room-name"style={{fontSize:"40px", fontStyle: "bold"}}>Rooms </h1>
          <ListGroup ><ListGroup.Item>{list}</ListGroup.Item></ListGroup>
          
        
        </div>
        </Card>
        
        <Link to="/question">
        <Button className="rooms-btn" variant="outline-warning">New Room!</Button>
        </Link>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms,
    user: state.user
    // value: state.value
  };
}

export default connect(mapStateToProps)(Rooms);

{/* 
  
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup> */}