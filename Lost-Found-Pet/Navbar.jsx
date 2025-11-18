import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Lost & Found Pets</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/report-lost">Report Lost</Link>
        <Link to="/report-found">Report Found</Link>
        <Link to="/browse">Browse</Link>
      </div>
    </nav>
  );
}
