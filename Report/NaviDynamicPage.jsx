import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Pagination } from "./Pagination.jsx";
import ReportingPeriodCard from "./Report.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mypage() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        {/* 🌐 Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container-fluid">
            <NavLink className="navbar-brand fw-bold text-white" to="/">
              React Dashboard
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    to="/reporting"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-warning fw-semibold" : "text-white"}`
                    }
                  >
                    Reporting Period
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/pagination"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active text-warning fw-semibold" : "text-white"}`
                    }
                  >
                    Pagination
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* 🌟 Page Content */}
        <div className="container py-4">
          <Routes>
            <Route path="/reporting" element={<ReportingPeriodCard />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route
              path="*"
              element={
                <div className="text-center mt-5">
                  <h3 className="fw-bold text-primary">Welcome 👋</h3>
                  <p className="text-muted">
                    Choose a section from the navigation bar above.
                  </p>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
