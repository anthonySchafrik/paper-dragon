import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { formFiller, LOGIN } from '../actions';
import { userLogIn } from '../proxies/User';

class HomePage extends Component {
  handleLogin = async () => {
    const { loginInfo, formFiller } = this.props;

    const loginCheck = await userLogIn(loginInfo);

    const { passwordCheck, userid } = loginCheck.data;

    if (passwordCheck === true) {
      formFiller('userid', userid, LOGIN);

      formFiller('isLoggedIn', true, LOGIN);
    } else {
      alert(loginCheck.data);
    }
  };

  handleLoginInfo = event => {
    const { id: key, value } = event.target;

    const { formFiller } = this.props;

    formFiller(key, value, LOGIN);
  };

  render = () => {
    const { handleLoginInfo, handleLogin } = this;

    const { isLoggedIn } = this.props.loginInfo;

    return (
      <div>
        <h2>Paper Dragon</h2>
        {!isLoggedIn ? (
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
  const { loginInfo } = state;
  return { loginInfo };
};

export default connect(mapStateToProps, {
  formFiller
})(HomePage);
