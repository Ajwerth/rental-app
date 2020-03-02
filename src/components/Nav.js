import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const headingStyle = {
    color: 'white',
    marginBottom: 0
}

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2 className="navbar-brand" style={headingStyle}>Alec's Rental App</h2>
            <div className="collpase navbar-collapse">
            <div className="navbar-nav">
                <Link to="/cars" className="nav-link">Cars</Link>
                <Link to="/rental" className="nav-link">Schedule Rental</Link>
            </div>
        </div>
    </nav>
  );
}

export default Nav;

