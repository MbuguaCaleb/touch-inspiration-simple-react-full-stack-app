import React, { Component } from "react";
import axios from "axios";
import UserComponent from "./userComponent";

class usersListComponent extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/one-touch-inspiration/usersList")
      .then(response => {
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  userList() {
    return (this.state.users.map = currentUser => {
      return <UserComponent user={currentUser} key={currentUser._id}/>;
    });
  }

  render() {
    return (
      <div>
        <h3>Users List</h3>
        <table className='table table-striped' style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Occupation</th>
              <th>Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody> {this.userList()}</tbody>
        </table>
      </div>
    );
  }
}

export default usersListComponent;
