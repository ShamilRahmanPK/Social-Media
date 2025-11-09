import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer className="bg-white py-3 border-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left Section */}
        <div className="d-flex align-items-center">
        <Link to={"/"} className='text-decoration-none fw-bolder fs-3'>
            <i class="fa-solid fa-panorama "></i>
          Photosam
            </Link>
        </div>

        {/* Middle Section */}
        <div>
          <p className="mb-0 text-muted">
            © 2024 Shamil Rahman PK. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="d-flex gap-3">
          <a href="#" className="text-dark">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-dark">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer