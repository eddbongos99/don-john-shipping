import React, { useState, useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { RiGlobalFill } from "react-icons/ri";
import { FadeLoader } from 'react-spinners'
import { firestore } from '../../firebase.js'
import { generateTableHead, generateTableBody } from '../../util.js'
import "./track.css"

function Track() {
    const [userID, setUserID] = useState('');
    const [loading, setLoading] = useState(false);
    const table = document.querySelector('table');

    useEffect(() => {
        document.title = "Tracking | DJS | Global"
    })

    // event handler for trackingId
    const updateUserID = (e) => {
        setUserID(e.target.value)
    }

    // funtion to fetch data from firestore
    const fetchData = async () => {
        let result = new Promise((resolve, reject) => {
            firestore.collection('users').where("trackingId", "==", userID).get().then(snapShot => {
                snapShot.forEach(doc => {
                    resolve(doc.data())
                })
            })
        })

        return await result
    }

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        setLoading(true);   // show loading icon
        let res = await fetchData().then(data => { return data }).catch(err => alert(err))
        let output = await res

        setLoading(false) // remove loading icon
        generateTableHead(table, output)
        generateTableBody(table, [output]);
    }

    return (
        <React.Fragment>
            <Navbar />
            <header className="bg-primary py-5 mb-5 container" id="track_hero">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-12">
                            <h1 className="display-4 text-white mt-5 mb-2 bold">Tracking Starts Here</h1>
                            <p className="lead mb-5 text-white-50">Track DJS shipments with one of the convenient tools below.
	Want more visibility of deliveries
	to your home? Sign up for DJS Delivery Manager® for free.</p>

                        </div>
                    </div>
                </div>
            </header>

            <section className="container" id="track">
                <div className="row mb-3 center-horizontally">
                    <form id="track_form" className="form-group form-inline " onSubmit={handleFormSubmission}>
                        <div className="mx-sm-3">
                            <label htmlFor="trackingId" hidden>Track</label>
                            <input type="text" className="form-control w-100 form-control-lg p-1" id="trackingId"
                                placeholder="Enter shipping ID" required name="userID" value={userID} onChange={updateUserID} />
                        </div>
                        <button type="submit" className="btn text-white"><i className="ri-search-line"></i><RiGlobalFill /> TRACK</button>
                    </form>
                </div>
            </section>

            <table className="table table-bordered container"></table>

            {/* conditional rendering */}
            {loading
                ? <div className="center-horizontally mb-3 "><FadeLoader /></div>
                : null}

            <Footer />
        </React.Fragment>
    )
}

export default Track
