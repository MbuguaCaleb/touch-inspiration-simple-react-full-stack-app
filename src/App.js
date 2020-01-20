import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createUserComponent from "./components/createUserComponent";
import editUserComponet from "./components/editUserComponent";
import usersListComponent from "./components/usersListComponent";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <h2>Touch-Inspiration User Application</h2>
          <Route path='/' exact component={usersListComponent} />
          <Route path='/edit/:id' component={editUserComponet} />
          <Route path='/create' component={createUserComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
