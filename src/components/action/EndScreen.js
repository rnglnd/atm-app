import React from 'react';
import { connect } from 'react-redux';
import compose from 'ramda/src/compose';
import withAuthCheck from '../shared/withAuthCheck';
import { Link } from 'react-router-dom';

const EndScreen = ({ lastTransaction }) => {
  if (typeof lastTransaction === 'string') {
    return (
      <main className="container">
        <Link to="/" className="link__atm link__atm--home">Home</Link>
        <h1>{lastTransaction}</h1>
      </main>
    );
  }

  return (
    <main className="container">
      <Link to="/" className="link__atm link__atm--home">Home</Link>
      <h1>The notes used were: </h1>
      <ul>
        {Object.entries(lastTransaction).map(([key, value]) => (
          <li key={key}>
            <p>{value} £{key} note(s) </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapStateToProps = state => ({
  lastTransaction: state.accounts.lastTransaction,
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withAuthCheck
)(EndScreen);
