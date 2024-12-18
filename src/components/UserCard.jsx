import React from 'react'
import { Link } from 'react-router-dom'

function UserCard({ displayData }) {
  return (
    <Link to={'/view-user'} className='col-lg-3 col-md-5 text-decoration-none'>
      <div
        className="card border-2 rounded-3 text-center"
        style={{
          overflow: 'hidden',
          borderRadius: '50px',
          fontWeight: '500',
          fontSize: '16px',
          border: '2px solid black',
          boxShadow: '4px 4px 1px rgba(0, 0, 0, 1)',
          backgroundColor: 'white',
          color: 'black',
          transition: 'box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'}
        onMouseLeave={(e) => e.currentTarget.style.boxShadow = '3px 3px 1px rgba(0, 0, 0, 1)'}
      >
        <div
          className="mx-auto mt-3"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid black',
          }}
        >
          <img
            src={
              displayData?.profilePic && displayData.profilePic.trim() !== '' 
                ? displayData.profilePic 
                : 'https://imgs.search.brave.com/odGlhx_DRYtz6d2mX5ELwD6kAZFHukGACLnLKKiDxXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcGVyc29uYWwt/cHJvZmlsZS1kb2N1/bWVudC13aXRoLXBo/b3RvLWlkLW15LWFj/Y291bnQtaWNvbi1p/c29sYXRlZC1mbGF0/LWNhcnRvb25fMTAx/ODg0LTc0OC5qcGc_/c2VtdD1haXNfaHli/cmlk'
            }
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{displayData?.username}</h5>
          <a href="#" className="card-link text-decoration-none text-primary">
            View full profile
          </a>
        </div>
      </div>
    </Link>
  )
}

export default UserCard
