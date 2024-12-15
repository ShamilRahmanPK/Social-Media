import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserCard from '../components/UserCard'

function AllUsers() {
  return (
    <div>
        <Header/>
        <div className='container mb-3 mt-5'>
            <h2 className="mb-4 fw-bolder">All Users</h2>
            <hr />
            <div className="row g-4">
              <UserCard/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AllUsers