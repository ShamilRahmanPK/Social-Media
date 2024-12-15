import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImg from '../assets/bg.svg';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${bgImg})`, minHeight: '100vh' }}>
      <div className="card" style={{ 
                    width: '60%',
                    borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                    }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-warning text-center" style={{borderRadius:'50px'}}>
            <img
              src="https://via.placeholder.com/200" // Replace with your image URL
              className="img-fluid rounded-circle"
              alt="Profile"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 fw-bolder">Edit Your Profile</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="profilePicture" className="form-label">Profile Picture</label>
                  <input type="file" className="form-control" id="profilePicture" />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    value="Shamil Rahman PK"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="3"
                    placeholder="Write something about yourself"
                    value="nothing more"
                  ></textarea>
                </div>
                <div className="d-flex">
                <button type="button" className="btn btn-outline-secondary me-4" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}>Save</button>
                  <Link to={'/profile'} type="button" className="btn btn-outline-secondary" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'black',
                    color: 'white',
                  }}>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
