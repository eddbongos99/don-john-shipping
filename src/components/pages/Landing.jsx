import React, { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Jumbotron from "../layouts/Jumbotron";

import img_1 from "../../img/brooke-cagle-WHWYBmtn3_0-unsplash.jpg"
import img_2 from "../../img/macau-photo-agency-NhhhRZQxnFY-unsplash.jpg"
import img_3 from "../../img/claudio-schwarz-purzlbaum-q8kR_ie6WnI-unsplash.jpg"


import './landing.css'

function Landing() {
  useEffect(() => {
    document.title = "DJS | Tracking, Shipping and Logistics"
  })
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      {/* page content */}
      <div className="container" id="landing">

        <div className="row">
          <div className="col-md-8 mb-5">
            <h2>What We Do</h2>
            <hr />
            <p>Don John Shipping International is an Afghanistan courier, parcel,
              and express mail service which is a division of the German logistics company Deutsche Post DHL.
              The company delivers over 1.3 billion parcels per year.</p>
            <p>We are an international team of over 380,000 shipping professionals, united by a passion for logistics.
              And we work in a unique environment. Don John Shipping is as innovative as a start-up, with the power of an international organization.
				</p>
          </div>
          <div className="col-md-4 mb-5">
            <h2>Contact Us</h2>
            <iframe title="kabul" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d420608.85172325943!2d68.91753509212828!3d34.55338690934091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d1694c3c1e6d49%3A0xebdf473578214429!2sKabul%2C%20Afghanistan!5e0!3m2!1sen!2sng!4v1603670839897!5m2!1sen!2sng" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
            <hr />
            <address>
              <strong>Don John Shipping</strong>
              <br />3481 Melrose Place
					<br />Kabul, Afghanistan, 90210
					<br />
            </address>
            <address>
              <abbr title="Email">Email:</abbr>
              <a href="mailto:#">support@djs.com</a>
            </address>
          </div>
        </div>
        {/* row */}

        <div className="row">
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={img_3} alt="" loading="lazy" height="auto" />
              <div className="card-body">
                <h4 className="card-title">Hold packages for pickup</h4>
                <p className="card-text">Your gifts stay secret and safe with
									us when you redirect packages to one of thousands
							of nearby Don John Shipping locations. Track your package to begin.</p>
              </div>
              <div className="card-footer">
                <a href="/" className="">Find Out More >> </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={img_2} alt="" loading="lazy" height="auto" />
              <div className="card-body">
                <h4 className="card-title">Manage your time</h4>
                <p className="card-text">Benefit from our powerful and time-saving features.

									Don John Shipping is a one-stop shipment management solution. When you register, you’ll be able to create your own
							address book, track shipments, view shipment history, customize settings and much more! </p>
              </div>
              <div className="card-footer">
                <a href="/" className="">Find Out More >> </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={img_1} alt="" loading="lazy" height="auto" />
              <div className="card-body">
                <h4 className="card-title">Get a quote</h4>
                <p className="card-text">Need a quick quote to see rates and delivery options before you ship? Don John Shipping makes that
									easy to do! Then you can quickly create your shipping label and schedule a courier pickup.

									Best of all, you don’t have to have an account to ship online! Be our Guest and simply pay with a cash.
						</p>
              </div>
              <div className="card-footer">
                <a href="/" className="">Request Quote >> </a>
              </div>
            </div>
          </div>
        </div>
        {/* end row */}

      </div>

      <Footer />
    </React.Fragment>
  )
}

export default Landing
