import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOG_OUT } from '../actions/index';
import { formFiller } from '../actions/index';

const Header = ({ formFiller, loginInfo }) => {
  const { isLoggedIn } = loginInfo;

  return isLoggedIn ? (
    <div style={{ marginBottom: '5%' }}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="accountSetting">
        <button>Account Setting</button>
      </Link>
      <Link to="characterPage">
        <button>Characters</button>
      </Link>
      <Link to="/">
        <button
          onClick={() => {
            formFiller('isLoggedIn', false, LOG_OUT);
          }}
        >
          Log Out
        </button>
      </Link>
    </div>
  ) : null;
};

const mapStateToProps = state => {
  const { loginInfo } = state;
  return { loginInfo };
};

export default connect(
  mapStateToProps,
  { formFiller }
)(Header);
