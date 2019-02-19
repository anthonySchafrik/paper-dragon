import React, { Component } from 'react';
import { connect } from 'react-redux';

import { formFiller, SIGN_UP } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleSignInfo = this.handleSignInfo.bind(this);
  }

  handleSignInfo(event) {
    const { id: key, value } = event.target;
    this.props.formFiller(key, value, SIGN_UP);
  }

  render() {
    const { handleSignInfo } = this;
    return (
      <div>
        <label>UserName</label>
        <input type="text" onChange={handleSignInfo} id="userName" />
        <br />
        <label>Password</label>
        <input type="text" onChange={handleSignInfo} id="password" />
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
