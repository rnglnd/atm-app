import React, { useState } from 'react';
import BalanceViewer from '../shared/BalanceViewer';
import { connect } from 'react-redux';
import { WITHDRAW } from '../../actionTypes';
import compose from 'ramda/src/compose';
import withAuthCheck from '../shared/withAuthCheck';
import { Link } from 'react-router-dom';

const BalanceWithdraw = ({ currentBalance, getNotes }) => {
  const [amount, setAmount] = useState('');

  return (
    <main className="container container--balance-withdraw">
      <Link to="/" className="link__atm link__atm--home">Home</Link>
      <h1>Please enter the amount you would like below:</h1>
      <form className="form" onSubmit={() => getNotes(amount)}>
        <h1>Please enter in the desired amount.</h1>
        <input type="number" className="input" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button type="submit" className="button button--normal">
          Enter
        </button>
      </form>
      <div className="balance-row">
        <h2>Your current balance is:</h2>
        <BalanceViewer currentBalance={currentBalance} />
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  currentBalance: state.accounts.currentBalance,
  isAuthenticated: state.auth.isAuthenticated
});

const mapDispatchToProps = (dispatch, { history }) => ({
  getNotes: (amount) => {
    dispatch({
      type: WITHDRAW,
      payload: {
        amount
      }
    });

    history.push('/end-screen')
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withAuthCheck
)(BalanceWithdraw);
