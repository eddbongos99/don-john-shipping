import React, { useState, useContext, useEffect } from "react";
import { AppContext } from '../../contextAPI/context'
import { auth } from '../../firebase.js'

import logo_png from "../../img/logo.png"
import { RiAccountPinBoxLine } from "react-icons/ri";
import { Redirect } from "react-router-dom";

import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [error, setError] = useState(false)
    const context = useContext(AppContext)
    useEffect(() => {
        document.title = "Login Portal | DJS | Global"
    })

    const updateEmail = e => {
        setEmail(e.target.value);
    }

    const updatePassword = e => {
        setPassword(e.target.value)
    }

    const handleFormSubmission = e => {
        e.preventDefault() // prevent page reload

        auth.signInWithEmailAndPassword(email, password)
            .then(() => setIsAuthenticated(true))
            .then(() => context.setAuthData())
            .catch(err => setError(err.message))

    }
    return (
        <React.Fragment>
            {/* conditional rendering */}
            {isAuthenticated && <Redirect to="/dashboard" />}
            <main className="bg-blue">
                <div className="container center">
                    <div className="card p-3" id="login">
                        <a className="text-center" href="/">
                            <img src={logo_png} id="logo" alt="" width='70px' height='70px' />
                        </a>
                        <form onSubmit={handleFormSubmission} className="mt-5">
                            {/* conditional rendering */}
                            {error && <div className="alert alert-danger">{error}</div>}

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={email}
                                    onChange={updateEmail} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pwd">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter password"
                                    name="password"
                                    value={password}
                                    onChange={updatePassword} />
                            </div>
                            <div className="checkbox">
                                <label><input type="checkbox" name="remember" /> Remember me</label>
                            </div>
                            <button type="submit" className="btn  btn-block mt-3 text-white"><i className="ri-admin-fill"></i>
                                <RiAccountPinBoxLine /> Login</button>
                        </form>
                        <p>Not Registered? <a href="/">Register Now</a></p>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Login
