import React from 'react';
import { Link } from 'react-router-dom'
import { RiAccountPinBoxLine, RiMenuLine } from "react-icons/ri";
import logo_png from "../../img/logo.png"
import './navbar.css'


function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg" id="nav">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo_png} id="logo" alt="don john shipping logo" />
                    </a>
                    <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <RiMenuLine />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home
              <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Ship
            </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/ship">Create a shippment</Link>
                                    <a className="dropdown-item" href="/">Get a rate and time quote</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/">Schedule a pickup</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/track">Track</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Support</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"> Signup | Login <RiAccountPinBoxLine /> <i className="ri-account-circle-line"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar