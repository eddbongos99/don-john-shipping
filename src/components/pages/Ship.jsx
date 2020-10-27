import React, { useEffect } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import './ship.css'

function Ship() {
    useEffect(() => {
        document.title = "Book Online | DJS | Global"
    })

    return (
        <React.Fragment>
            <Navbar />
            <header className="bg-primary py-5 mb-5 container" id="ship_hero">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-12">
                            <h1 className="display-4 text-white mt-5 mb-2 bold">Create A Shippment</h1>
                            <p className="lead mb-5 text-white-50">Ship Early, Shop Early.</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* <!-- Page Content --> */}
            <main className="container" id="ship">
                <div className="card p-3 mb-3">
                    <div className="row">
                        <div className="col">
                            <h3 className="mb-3">From</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control form-control-sm" id="name"
                                        placeholder="First Name and Last Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company (optional)</label>
                                    <input type="text" className="form-control form-control-sm" id="company" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="senderLocation">Country/Territory</label>
                                    <input type="email" className="form-control form-control-sm" id="senderLocation" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control form-control-sm" id="address" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address2">Address 2</label>
                                    <input type="text" className="form-control form-control-sm" id="address2" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address3">Address 3</label>
                                    <input type="text" className="form-control form-control-sm" id="address3" />
                                </div>

                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="address3">Suburb </label>
                                        <input type="text" className="form-control form-control-sm" id="suburb" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="address3">City</label>
                                        <input type="text" className="form-control form-control-sm" id="city" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="address3">State</label>
                                        <input type="text" className="form-control form-control-sm" id="state" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email address </label>
                                    <input type="email" className="form-control form-control-sm" id="email" />
                                </div>

                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="phoneType">Phone type</label>
                                        <select className="form-control" id="phoneType">
                                            <option value="0">mobile</option>
                                            <option value="1">office</option>
                                            <option value="2">other</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="code">Code</label>
                                        <input type="text" className="form-control form-control-sm" id="code" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" className="form-control form-control-sm" id="phone" />
                                    </div>
                                </div>

                                <div className="form-check mt-1 mb-1">
                                    <input className="form-check-input" type="checkbox" value="" id="sms" />
                                    <label className="form-check-label" htmlFor="sms">
                                        SMS enabled
                            </label>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="vat">VAT/Tax ID </label>
                                    <input type="text" className="form-control form-control-sm" id="vat" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eori">EORI Number </label>
                                    <input type="text" className="form-control form-control-sm" id="eori" />
                                </div>

                            </form>
                        </div>
                        <div className="col">
                            <h3 className="mb-3">To</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control form-control-sm" id="name"
                                        placeholder="First Name and Last Name" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company (optional)</label>
                                    <input type="text" className="form-control form-control-sm" id="company" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="senderLocation">Country/Territory</label>
                                    <input type="email" className="form-control form-control-sm" id="senderLocation" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Email address</label>
                                    <input type="text" className="form-control form-control-sm" id="address" />
                                </div>

                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="phoneType">Phone type</label>
                                        <select className="form-control" id="phoneType">
                                            <option value="0">mobile</option>
                                            <option value="1">office</option>
                                            <option value="2">other</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label htmlFor="code">Code</label>
                                        <input type="text" className="form-control form-control-sm" id="code" />

                                    </div>
                                    <div className="col">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="tel" className="form-control form-control-sm" id="phone" />
                                    </div>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="sms" />
                                    <label className="form-check-label" htmlFor="sms">
                                        SMS enabled
                            </label>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="vat">VAT/Tax ID </label>
                                    <input type="text" className="form-control form-control-sm" id="vat" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="eori">EORI Number </label>
                                    <input type="text" className="form-control form-control-sm" id="eori" />
                                </div>
                                <button className="btn  text-white">Next <RiArrowRightLine /></button>
                            </form>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </React.Fragment>
    )
}

export default Ship