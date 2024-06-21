import React from "react";
import UserOrders from "@/components/UserOrders";

import "@/styles/UserPanel.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const UserPanel = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`user-panel__container ${navOpen ? "user-panel__open" : ""}`}
    >
      <div className="user-pannel__content">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPanel;
