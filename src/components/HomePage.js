import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formFiller, LOGIN } from '../actions';
import { userLogIn } from '../proxies/User';
import DebounceComponent from './DebounceComponent';

class HomePage extends Component {
  state = { username: '', password: '' };

  handleLogin = async () => {
    const { formFiller } = this.props;

    const { username, password } = this.state;

    const loginCheck = await userLogIn({ username, password });

    const { passwordCheck, userid } = loginCheck.data;

    if (passwordCheck === true) {
      formFiller('userid', userid, LOGIN);

      formFiller('isLoggedIn', true, LOGIN);
    } else {
      this.setState({ username: '', password: '' });

      alert(loginCheck.data);
    }
  };

  handleLoginInfo = (key, value) => this.setState({ [key]: value });

  render = () => {
    const { handleLoginInfo, handleLogin } = this;

    const { isLoggedIn } = this.props.user;

    return (
      <div>
        <h2>Paper Dragon</h2>
        {!isLoggedIn ? (
          <div>
            <label>Username</label>
            <br />

            <DebounceComponent
              name="username"
              type="text"
              maxLength={15}
              handleChange={handleLoginInfo}
              minChar={1}
            />
            <br />
            <label>Password</label>
            <br />

            <DebounceComponent
              name="password"
              type="password"
              maxLength={15}
              handleChange={handleLoginInfo}
              minChar={1}
            />
            <br />

            <button onClick={handleLogin}>Login</button>
            <Link to="/signUp">
              <button>Sign Up</button>
            </Link>
          </div>
        ) : (
          <div>
            <h3>News and Updates</h3>

            <div>
              <p>Comming soon a game.</p>
            </div>
          </div>
        )}
      </div>
    );
  };
}

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, {
  formFiller
})(HomePage);
