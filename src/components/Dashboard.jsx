import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Dashboard</p>
      <nav>
        <Link to="projects">projects</Link>
        <Link to="blogs">blogs</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Dashboard;
