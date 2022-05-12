import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Admin from './Admin';

const Navbar1 = () => {

    return (
        <>
            <nav className="navbar navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">COUPONS APP </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/News">News</a>
                        <a className="nav-link active" aria-current="page" href="/Login">Logoff</a>
                    </div>
                </div>
            </nav>
        </>
    )
};
export default Navbar1;