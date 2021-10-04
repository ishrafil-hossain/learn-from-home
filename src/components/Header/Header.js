import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container text-center ">
            <h1><span className="text-danger">Learn From Home</span><span className="text-success">.!!!</span></h1>
            <div className="d-flex justify-content-between container bg-light mt-3 border rounded-3 shadow p-3 mb-5 bg-body">
                <div>
                    <NavLink className="text-decoration-none me-5 fs-3 text-dark" to="/home" activeClassName="selected">
                        <span className="text-primary">Learn</span>
                        <span className="text-success">-from</span>
                        <span className="text-info">-home</span>
                    </NavLink>
                </div>
                <div>
                    <nav className=" text-center ">
                        <NavLink className="text-decoration-none me-5 fs-3 text-dark" to="/home" activeClassName="selected">Home</NavLink>
                        <NavLink className="text-decoration-none me-5 fs-3 text-dark" to="/about">About</NavLink>
                        <NavLink className="text-decoration-none me-5 fs-3 text-dark" to="/services">Services</NavLink>
                        <NavLink className="text-decoration-none me-5 fs-3 text-dark" to="dashboard">Dashboard</NavLink>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Header;