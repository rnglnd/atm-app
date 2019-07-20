import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import compose from 'ramda/src/compose';
import withAuthCheck from '../shared/withAuthCheck';
import Loading from '../shared/Loading';

const Selection = ({ history, isLoading }) => {
  if (isLoading) {
    return (
      <Loading />
    )
  }
  
  return (
    <main className="container container--selection">
      <h1>Please make a selection</h1>
      <div className="selection-row">
        <Link to="balance" className="link__atm link__atm-1">View balance</Link>
        <button className="button button--atm button--atm-1" onClick={() => history.push('/balance')} />
      </div>
      <div className="selection-row">
        <button className="button button--atm button--atm-2" onClick={() => history.push('/withdraw')} />
        <Link to="withdraw" className="link__atm link__atm-2">Withdraw</Link>
      </div>
      <div className="selection-row">
        <Link to="balance-withdraw" className="link__atm link__atm-3">View balance & Withdraw</Link>
        <button className="button button--atm button--atm-3" onClick={() => history.push('/balance-withdraw')} />
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.loading.isLoading
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withAuthCheck
)(Selection);
