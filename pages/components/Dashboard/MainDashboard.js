import React from "react";
import TransactionBoard from "./TransactionBoard";
import MarketContainer from "./MarketContainer";
import InfoContainer from "./InfoContainer";

const MainDashboard = () => {
  return (
    <>
      <div className="container-fluid content-inner pb-0">
        <TransactionBoard />
        <div className="row">
          <MarketContainer />
          <InfoContainer />
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
