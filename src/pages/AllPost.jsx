import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import postImg from '../assets/postImg.jpg'
import PostCard from '../components/PostCard'
import { allPostAPI } from '../services/allAPI'

function AllPost() {
  const [allPost,setAllPost] = useState([])

  console.log(allPost);
  
  useEffect(()=>{
    getAllPost()
  },[])

  const getAllPost= async ()=>{
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      try {
        const result = await allPostAPI(reqHeader)
        if (result.status==200) {
          setAllPost(result.data)
        }
      } catch (err) {
        console.log(err);
        
      }
    }
  }


  return (
    <div>
        <Header/>
        <div className='container mb-3 mt-5'>
            <h2 className="mb-4 fw-bolder">All posts</h2>
            <hr />
            <div className="row g-4">
              {
                allPost.map(projects=>(
                    <PostCard displayData={projects}/>
                  ))
              }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AllPost