import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserCard from '../components/UserCard'
import { allUserAPI } from '../services/allAPI'

function AllUsers() {
  const [allUser,setAllUser] = useState([])
  console.log(allUser);
  
  useEffect(()=>{
    getAllUser()
  },[])

  const getAllUser = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
          const reqHeader = {
            "Authorization" : `Bearer ${token}`
          }
          try {
            const result = await allUserAPI(reqHeader)
            if (result.status==200) {
              setAllUser(result.data)
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
            <h2 className="mb-4 fw-bolder">All Users</h2>
            <hr />
            <div className="row g-4">
            {
                allUser.map(user=>(
                    <UserCard displayData={user}/>
                  ))
              }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AllUsers