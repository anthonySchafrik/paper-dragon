import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formFiller, LOGIN } from '../actions';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };

    this.handleLoggedIn = this.handleLoggedIn.bind(this);
    this.handleLoginInfo = this.handleLoginInfo.bind(this);
  }

  handleLogin() {
    console.log('clicked');
  }

  handleLoginInfo(event) {
    const { id: key, value } = event.target;

    this.props.formFiller(key, value, LOGIN);
  }

  handleLoggedIn() {
    const { handleLoginInfo, handleLogin } = this;
    const { loggedIn } = this.state;

    if (!loggedIn) {
      return (
        <div>
          <label>Username</label>
          <br />
          <input type="text" onChange={handleLoginInfo} id="username" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" onChange={handleLoginInfo} id="password" />
          <br />
          <button onClick={handleLogin}>Login</button>
          <Link to="/signUp">
            <button>Sign Up</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <button>Account Setting</button>
          <button>Characters</button>
          <button>Log Out</button>
        </div>
      );
    }
  }

  render() {
    const { handleLoggedIn } = this;

    return (
      <div>
        <h2>Paper Dragon</h2>
        {handleLoggedIn()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { logIn } = state;
  return { logIn };
};

export default connect(
  mapStateToProps,
  {
    formFiller
  }
)(HomePage);
