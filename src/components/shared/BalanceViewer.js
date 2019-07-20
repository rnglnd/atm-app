import React from "react";

const BalanceViewer = ({ currentBalance, fontSize = '2rem' }) => {
  return (
    <div style={{ fontSize }} className={`balance__viewer ${currentBalance < 0 && `balance__viewer--negative`}`}>
      £{currentBalance}
    </div>
  );
};

export default BalanceViewer;
