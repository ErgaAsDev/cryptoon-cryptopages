"use client";

import React, { useState } from "react";
import Navbar from "./components/Dashboard/Navbar";
import MainDashboard from "./components/Dashboard/MainDashboard";
import Sidebar from "./components/Dashboard/Sidebar";
import UserProfile from "./UserProfile";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [userProfileIsActive, setUserProfileIsActive] = useState(false);

  function handleSidebarToggle() {
    setToggle(!toggle);
  }
  function handleUserToggle() {
    setToggleUser(!toggleUser);
  }
  function handleUserActive() {
    setUserProfileIsActive(true);
  }

  console.log(userProfileIsActive);
  return (
    <div>
      <Sidebar
        toggle={toggle}
        toggleUser={toggleUser}
        handleSidebarToggle={handleSidebarToggle}
        handleUserToggle={handleUserToggle}
        userProfileIsActive={userProfileIsActive}
        handleUserActive={handleUserActive}
      />
      <main className="main-content">
        <Navbar />
        {userProfileIsActive ? <UserProfile /> : <MainDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;
