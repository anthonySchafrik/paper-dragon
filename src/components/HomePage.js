import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h2>Paper Dragon</h2>
        <div>
          <label>Username</label>
          <br />
          <input type="text" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />
          <button>Login</button>
          <Link to="/signUp">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
