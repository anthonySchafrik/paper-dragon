import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOG_OUT, formFiller } from '../actions/index';

const styles = {
  display: 'flex',
  justifyContent: 'space-evenly'
};

const Header = ({ formFiller, user }) => {
  const { isLoggedIn } = user;

  return isLoggedIn ? (
    <div style={styles}>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/accountSetting">
        <button>Account Setting</button>
      </Link>

      <Link to="/characterPage">
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
  const { user } = state;
  return { user };
};

export default connect(mapStateToProps, { formFiller })(Header);
