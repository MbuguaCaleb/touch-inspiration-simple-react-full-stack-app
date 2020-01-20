import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createUserComponent from "./components/createUserComponent";
import editUserComponet from "./components/editUserComponent";
import usersListComponent from "./components/usersListComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import logoTwo from "./logoTwo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a
              href='navbar-brand'
              href='https://touchinspiration.com/'
              target='_blank'
            >
              <img
                src={logoTwo}
                width='30'
                height='30'
                alt='Touch inspiration User Application'
              />
            </a>
            <Link to='/' className='navbar-brand'>
              Touch Inspiration User Application
            </Link>

            <div className='collapase navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to='/' className='nav-link'>
                    UsersList
                  </Link>
                </li>
                <li className='navbar-item'>
                  <Link to='/create' className='nav-link'>
                    Create User
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' exact component={usersListComponent} />
          <Route path='/edit/:id' component={editUserComponet} />
          <Route path='/create' component={createUserComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
