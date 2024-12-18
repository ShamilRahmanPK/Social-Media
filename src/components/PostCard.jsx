import React from 'react'
import { Link } from 'react-router-dom'
import SERVER_BASE_URL from '../services/serverUrl'

function PostCard({displayData}) {
  
  return (
    <>
    <Link to={`/view/${displayData._id}`} className="col-lg-4 col-md-6" style={{ textDecoration: 'none' }}>
  <div className="card border-1" style={{
    overflow: 'hidden', 
    borderRadius: '30px',
    fontWeight: '500',
    fontSize: '16px',
    border: '2px solid black',
    boxShadow: '4px 4px 1px rgba(0, 0, 0, 1)',
    backgroundColor: 'white',
    color: 'black',
    transition: 'box-shadow 0.3s ease'
  }} 
    onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'none'} 
    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '3px 3px 1px rgba(0, 0, 0, 1)'}
  >
    <img
      src={`${SERVER_BASE_URL}/uploads/${displayData.imageUrl}`}
      className="card-img-top"
      alt="Post Image"
      style={{
        height: '200px',
        objectFit: 'cover',
      }}
    />
    <div className="card-body">
      <h5 className="card-title fw-bolder">{displayData.postname}</h5>
      <a href="#" className="card-link text-decoration-none">
        View full post
      </a>
    </div>
  </div>
</Link>
    </>
  )
}

export default PostCard