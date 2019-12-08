import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formFiller, SIGN_UP } from '../actions';
import { createUser } from '../proxies/User';

class SignUp extends Component {
  state = { userName: '', firstName: '', password: '', passwordCheck: '' };

  handleCreateUser = async () => {
    const { passwordChecker } = this;

    const { history, user } = this.props;

    const { userName, firstName, password, passwordCheck } = this.state;

    let newUser = { userName, firstName, password };

    let createdUser;

    if (passwordChecker(password, passwordCheck)) {
      createdUser = await createUser(newUser);

      const { data } = createdUser;

      alert(data);

      history.push('/');
    } else {
      alert('Password did not matched.');
    }
  };

  handleSignInfo = event => {
    const { id: key, value } = event.target;

    const { formFiller } = this.props;

    this.setState({ [key]: value });
  };

  passwordChecker = (pass, passCheck) => {
    if (pass === passCheck) {
      return true;
    }
    return false;
  };

  render() {
    const { handleSignInfo, handleCreateUser } = this;

    return (
      <div>
        <label>UserName</label>
        <br />
        <input
          type="text"
          onChange={handleSignInfo}
          id="userName"
          maxLength="15"
          placeholder="Max length of 15"
        />
        <br />
        <label>First Name</label>
        <br />
        <input type="text" onChange={handleSignInfo} id="firstName" />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          onChange={handleSignInfo}
          id="password"
          maxLength="15"
          placeholder="Max length of 15"
        />
        <br />
        <label>Password Check</label>
        <br />
        <input
          type="password"
          onChange={handleSignInfo}
          id="passwordCheck"
          maxLength="15"
        />

        <div>
          <button onClick={handleCreateUser}>Create Account</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, { formFiller })(SignUp);
