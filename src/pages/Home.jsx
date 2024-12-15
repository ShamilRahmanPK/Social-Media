import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import UserCard from '../components/UserCard'
import bgImg from '../assets/bg.svg';


const Home = () => {
  return (
    <div style={{backgroundImage: `url(${bgImg})`}}>
      <Header/>
      <div className='container mb-3 mt-5'>
        <div>
          <h2 className="mb-4 fw-bolder">Recent posts</h2>
          <hr />
          <div className="row g-4">
            <PostCard/>
          </div>
          <div className='d-flex justify-content-center'><Link to={'/all-post'}><span className='text-center'>View more</span></Link></div>
        </div>
        <div>
          <h2 className="mb-4 fw-bolder">Explore profiles</h2>
          <hr />
          <div className="row g-4">
          <UserCard/>
          </div>
          <div className='d-flex justify-content-center'><Link to={'/all-users'}><span className='text-center'>View more</span></Link></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home