import React from 'react';

import img_1 from "../../img/j1.jpg"
import img_2 from "../../img/j2.jpg"
import img_3 from "../../img/j3.jpg"

import './jumbotron.css'

function Jumbotron(props) {
  return (
    <React.Fragment>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner container">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img_1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img_2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img_3} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Jumbotron