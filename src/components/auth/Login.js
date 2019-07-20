import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SET_AUTH, SET_LOADING, SET_BALANCE } from '../../actionTypes';
import { withRouter } from "react-router";
import compose from 'ramda/src/compose';

const Auth = ({ login }) => {
  const [pin, setPin] = useState('');

  return (
    <main className="container">
      <form className="form" onSubmit={() => login(pin)}>
        <h1>Please enter PIN below to login</h1>
        <input type="number" className="input" value={pin} onChange={(e) => setPin(e.target.value)} />
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
  login: (pin) => {
    fetch('http://localhost:3001/pin/', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;'
      },
      body: JSON.stringify({
        pin
      })
    })
    .then((response) => response.json())
    .then(({ currentBalance }) => {
      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthenticated: true
        }
      });
      dispatch({
        type: SET_BALANCE,
        payload: {
          currentBalance
        }
      });
      dispatch({
        type: SET_LOADING,
        payload: {
          isLoading: false
        }
      });
      history.push('/')
    })
    .catch(() => {
      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthenticated: false
        }
      });
      dispatch({
        type: SET_LOADING,
        payload: {
          isLoading: false
        }
      });
    })
  }
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Auth);
