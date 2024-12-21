import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'
import UserCard from '../components/UserCard'
import bgImg from '../assets/bg.svg';
import { homePostAPI, homeUserAPI } from '../services/allAPI'


const Home = () => {
  const [homePost,setHomePost] = useState([])
  const [homeUser,setHomeUser] = useState([])

  console.log(homePost,homeUser);
  

  useEffect(()=>{
    getHomePost()
    getHomeUser()
  },[])

  const getHomePost = async ()=>{
    try {
      const result = await homePostAPI()
      console.log(result);
      if (result.status==200) {
        setHomePost(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getHomeUser = async ()=>{
    try {
      const result = await homeUserAPI()
      console.log(result);
      if (result.status==200) {
        setHomeUser(result.data)
      }
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <div style={{backgroundImage: `url(${bgImg})`}}>
      <Header/>
      <div className='container mb-3 mt-5'>
        <div>
          <h2 className="mb-4 fw-bolder">Recent posts</h2>
          <hr />
          <div className="row g-4">
            {
              homePost.map(projects=>(
                <PostCard displayData={projects}/>
              ))
              }
          </div>
          <div className='d-flex justify-content-center mt-4'><Link to={'/all-post'}><span className='text-center'>View more</span></Link></div>
        </div>
        <div>
          <h2 className="mb-4 fw-bolder">Explore profiles</h2>
          <hr />
          <div className="row g-4">
          {
            homeUser.map(users=>(
              <UserCard displayData={users}/>
            ))
            }
          </div>
          <div className='d-flex justify-content-center mt-4'><Link to={'/all-users'}><span className='text-center'>View more</span></Link></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home