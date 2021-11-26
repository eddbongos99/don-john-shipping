import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { firestore, auth } from '../../firebase'
import { RiShutDownLine, RiArrowRightFill } from "react-icons/ri";
import logo_png from '../../img/logo.png'

import './dashboard.css'

function Dashboard() {
    const [sender, setSender] = useState('');
    const [reciever, setReciever] = useState('');
    const [location, setLoacation] = useState('');
    const [status, setStatus] = useState('');
    const [isSucessful, setIsSuccessful] = useState(false)
    const [error, setError] = useState('')

    const setData = async () => {
        let result = new Promise((resolve, reject) => {
            resolve(
                firestore.collection('users').doc('bYnYHnyv8Lmf4HGLRZJF').set({
                    sender,
                    reciever,
                    location,
                    status,
                    trackingId: "9b1deb4d3b7d4bad"
                })
            )
        })

        return await result

    }
    const handleFormSubmission = async (e) => {
        e.preventDefault();
        await setData().then(() => setIsSuccessful(true))
            .catch(err => setError(err))
    }

    const updateSenderName = e => {
        setSender(e.target.value)
    }

    const updateRecieverName = e => {
        setReciever(e.target.value)
    }

    const updateCurrentLocation = e => {
        setLoacation(e.target.value)
    }

    const updateStatus = e => {
        setStatus(e.target.value)
    }

    const handleSignOut = () => {
        auth.signOut()
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light container" id="nav">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo_png} id="logo" alt="don john shipping logo" />
                    </a>
                    <button className=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-danger" to="/" onClick={handleSignOut}><RiShutDownLine /> Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <main className="container w-50 mt-5 mb-5" id="dashboard_form">
                {/* conditional rendering */}
                {isSucessful ?
                    <div class="alert alert-success alert-dismissible fade show container mt-3 mb-3" role="alert">
                        changes successfully updated!.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    : null}

                {/* conditional rendering */}
                {error ?
                    <div class="alert alert-danger alert-dismissible fade show container mt-3 mb-3" role="alert">
                        Oops! an error occured!.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    : null}

                <form onSubmit={handleFormSubmission}>
                    <div className="form-group">
                        <label htmlFor="trackingId">Tracking ID</label>
                        <input type="text"
                            className="form-control disabled"
                            id="trackingId"
                            placeholder="9b1deb4d3b7d4bad"
                            name="trackingId"
                            disabled
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sender">Sender Name</label>
                        <input type="text"
                            className="form-control"
                            id="sender"
                            placeholder="Who is sending the package?"
                            name="sender"
                            value={sender}
                            onChange={updateSenderName}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reciever">Reciever Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="reciever"
                            placeholder="Who is the package for?"
                            name="reciever"
                            value={reciever}
                            onChange={updateRecieverName}
                            required />

                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Current Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder="Who is the currently in?"
                            name="location"
                            value={location}
                            onChange={updateCurrentLocation}
                            required />

                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <input
                            type="text"
                            className="form-control disabled"
                            id="status"
                            placeholder="pending"
                            name="status"
                            value={status}
                            onChange={updateStatus}
                            required />

                    </div>
                    <button type="submit" className="btn btn-success mt-3 text-white"><i className="ri-admin-fill"></i>
                        Update changes <RiArrowRightFill /></button>
                </form>
            </main>
        </React.Fragment>
    )
}

export default Dashboard