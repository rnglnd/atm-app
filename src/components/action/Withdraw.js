import React, { useState } from 'react';
import { WITHDRAW } from '../../actionTypes';
import { connect } from 'react-redux';
import compose from 'ramda/src/compose';
import withAuthCheck from '../shared/withAuthCheck';
import { Link } from 'react-router-dom';

const Withdraw = ({ getNotes }) => {
  const [amount, setAmount] = useState('');

  return (
    <main className="container">
      <Link to="/" className="link__atm link__atm--home">Home</Link>
      <form className="form" onSubmit={() => getNotes(amount)}>
        <h1>Please enter in the desired amount.</h1>
        <input type="number" className="input" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button type="submit" className="button button--normal">
          Enter
        </button>
      </form>
    </main>
  );
};

const mapStateToProps = state => ({
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
)(Withdraw);
