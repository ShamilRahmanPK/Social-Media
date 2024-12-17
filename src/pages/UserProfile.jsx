import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bgImg from '../assets/bg.svg';
import profileImg from '../assets/profileImg.png'
import { Link } from 'react-router-dom';


function UserProfile() {
  const [userDetails,setUserDetails]=useState("")
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUserDetails(JSON.parse(sessionStorage.getItem("user")));
    }
  },[]);
  return (
    <div>
        <Header/>
        <div id="profile" className='d-flex align-items-center justify-content-center' style={{backgroundImage: `url(${bgImg})`,height:'90vh'}}>
        <div className="card m-2" style={{height:'70vh', width:'80%',borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                    }} >
            <div className="row" style={{height: '100%'}}>
                <div className="col-lg-6 d-flex align-items-center justify-content-center">
                    <img width={"300px"} src={profileImg} alt="" />
                </div>
                <div className="col-lg-6 d-flex flex-column align-items-start text-center justify-content-center">
                <h5><i>{userDetails?.username}</i></h5>
                    <h2>{userDetails?.firstname} {userDetails?.lastname}</h2>
                    <p className='d-flex align-items-start text-left pe-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi magnam reprehenderit iure aliquid sunt adipisci totam, nobis quaerat
                    </p>
                    <div>
                    <Link to={'/edit-profile'}><button type="button" className="btn btn-outline-secondary me-4" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}>Edit Profile</button></Link>
                    <Link to={'/home'}><button type="button" className="btn btn-outline-secondary me-4" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}><i class="fa-solid fa-arrow-left"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default UserProfile