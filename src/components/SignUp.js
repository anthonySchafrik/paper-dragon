import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formFiller, SIGN_UP } from '../actions';
import { createUser } from '../proxies/User';
import DebounceComponent from './DebounceComponent';

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

  handleSignInfo = (key, value) => this.setState({ [key]: value });

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

        <DebounceComponent
          name="userName"
          type="text"
          placeholder="Max length of 15"
          maxLength={15}
          handleChange={handleSignInfo}
          minChar={1}
        />
        <br />
        <label>First Name</label>
        <br />

        <DebounceComponent
          name="firstName"
          type="text"
          placeholder=""
          maxLength={15}
          handleChange={handleSignInfo}
          minChar={1}
        />

        <br />
        <label>Password</label>
        <br />

        <DebounceComponent
          name="password"
          type="password"
          placeholder="Max length of 15"
          maxLength={15}
          handleChange={handleSignInfo}
          minChar={1}
        />

        <br />
        <label>Password Check</label>
        <br />

        <DebounceComponent
          name="passwordCheck"
          type="password"
          placeholder="Max length of 15"
          maxLength={15}
          handleChange={handleSignInfo}
          minChar={1}
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
