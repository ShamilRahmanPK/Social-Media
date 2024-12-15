import React from 'react'
import postImg from '../assets/postImg.jpg'
import { Link } from 'react-router-dom'

function PostCard() {
  return (
    <>
    <Link to={'/view'} className='col-lg-4 col-md-6' style={{textDecoration:'none'}}>
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
      src={postImg}
      className="card-img-top"
      alt="Post Image"
      style={{
        height: '200px',
        objectFit: 'cover',
      }}
    />
    <div className="card-body">
      <h5 className="card-title fw-bolder">Ashish Post</h5>
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