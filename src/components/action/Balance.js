import React from 'react';
import BalanceViewer from '../shared/BalanceViewer';
import { connect } from 'react-redux';
import compose from 'ramda/src/compose';
import withAuthCheck from '../shared/withAuthCheck';
import { Link } from 'react-router-dom';

const Balance = ({ currentBalance }) => {
  return (
    <main className="container">
      <Link to="/" className="link__atm link__atm--home">Home</Link>
      <h1>Your current balance is:</h1>
      <BalanceViewer currentBalance={currentBalance} />
    </main>
  );
};

const mapStateToProps = state => ({
  currentBalance: state.accounts.currentBalance,
  isAuthenticated: state.auth.isAuthenticated
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withAuthCheck
)(Balance);
