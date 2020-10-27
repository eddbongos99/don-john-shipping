import React from 'react';
import { RiFacebookBoxFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'
import './footer.css'

function Footer() {
  return (
    <React.Fragment>
      <footer className="py-5 container">
        <div className="">
          <p className="m-0 text-center">Copyright &copy; Don John Shipping 2020</p>
          <div className="mt-3 text-center">
            <RiFacebookBoxFill size="20px" />
            <RiInstagramFill size="20px" />
            <RiTwitterFill size="20px" />
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer