import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formFiller, SIGN_UP } from '../actions';
import { createUser } from '../proxies/createUser';

class SignUp extends Component {
  handleCreateUser = () => {
    const { passwordChecker } = this;
    const { userName, firstName, password, passwordCheck } = this.props.signUp;

    let newUser = { userName, firstName, password };

    if (passwordChecker(password, passwordCheck)) {
      createUser(newUser).then(res => {
        alert(res.data);
      });
    } else {
      alert('Password did not matched.');
    }
  };

  handleSignInfo = event => {
    const { id: key, value } = event.target;
    this.props.formFiller(key, value, SIGN_UP);
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
  const { signUp } = state;
  return { signUp };
};
export default connect(
  mapStateToProps,
  { formFiller }
)(SignUp);
