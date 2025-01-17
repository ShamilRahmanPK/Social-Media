import React from 'react';
import AdminHeader from './components/AdminHeader';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <>
      {/* Admin Header */}
      <AdminHeader />

      {/* Main Container */}
      <div className="container mt-5 p-4 bg-light rounded shadow-lg">
        {/* Title Section */}
        <h1 className="text-center fw-bold mb-4">Photosam Admin Dashboard</h1>
        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="fw-semibold text-secondary">Welcome to the Admin Panel</h3>
          <p className="text-danger">
            As an admin, you are responsible for reviewing posts submitted by users. Please ensure:
          </p>
          <ul className="text-primary">
            <li>Reject explicit content that violates our guidelines.</li>
            <li>Flag and reject images with potential copyright issues.</li>
            <li>Ensure all approved content aligns with community standards.</li>
          </ul>
        </div>
        <div className="text-center mt-4">
          <p className="text-muted fw-semibold mb-3">Ready to start moderating?</p>
          <Link to={'/admin-post-validate'} className="btn btn-primary px-4 py-2 fw-bold">
            Go to Posts
          </Link>
        </div>
      </div>
    </>
  );
}

export default AdminHome;
