import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import postImg from '../assets/postImg.jpg'
import PostCard from '../components/PostCard'

function AllPost() {
  return (
    <div>
        <Header/>
        <div className='container mb-3 mt-5'>
            <h2 className="mb-4 fw-bolder">All posts</h2>
            <hr />
            <div className="row g-4">
              <PostCard/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AllPost