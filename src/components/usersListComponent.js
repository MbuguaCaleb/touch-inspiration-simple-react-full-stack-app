import React, { Component } from "react";
import axios from "axios";
import UserComponent from "./UserComponent";

export class usersListComponent extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = { users: [] };
  }
  //component LifeCycle Method
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:4000/api/one-touch-inspiration/usersList")
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({ users: response.data }).catch(error => {
  //         console.log(error);
  //       });
  //     });
  // }

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

  //custom userList Method
  userList() {
    //Method which gets the state then loops through
    return (this.state.users.map = user => {
      return <UserComponent userobj={user} key={user._id} />;
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

          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}

export default usersListComponent;
