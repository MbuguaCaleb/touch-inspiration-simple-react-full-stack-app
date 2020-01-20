import React, { Component } from "react";

export class createUserComponent extends Component {
  constructor(props) {
    super(props);

    //bounding event methods to the class.
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeOccupation = this.onChangeOccupation.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeBio = this.onChangeBio.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      occupation: "",
      email: "",
      bio: ""
    };
  }

  //class Methods
  onChangeUserName = e => {
    this.setState({
      name: e.target.value
    });
  };
  //class Methods
  onChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  onChangeBio = e => {
    this.setState({
      bio: e.target.value
    });
  };
  //class Methods
  onChangeOccupation = e => {
    this.setState({
      occupation: e.target.value
    });
  };

  //Method to Handle Submit

  onSubmit = e => {
    e.preventDefault();

    console.log(`Form submitted`);
    console.log(`name:${this.state.name}`);
    console.log(`occupation:${this.state.occupation}`);
    console.log(`email:${this.state.email}`);
    console.log(`bio:${this.state.bio}`);

    //Resetting to empty upon submit
    this.setState({
      name: "",
      occupation: "",
      email: "",
      bio: ""
    });
  };
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New User</h3>

        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Name:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.name}
              onChange={this.onChangeUserName}
            />
          </div>

          <div className='form-group'>
            <label>Email:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className='form-group'>
            <label>Occupation:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.occupation}
              onChange={this.onChangeOccupation}
            />
          </div>
          <div className='form-group'>
            <label>Bio:</label>
            <input
              type='text'
              className='form-control'
              value={this.state.bio}
              onChange={this.onChangeBio}
            />
          </div>

          <div className='form-group'>
            <input
              type='submit'
              value='Create User'
              className='btn btn-primary'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default createUserComponent;
