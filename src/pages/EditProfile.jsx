import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImg from '../assets/bg.svg';
import { Link, useNavigate } from 'react-router-dom';
import profileImg from '../assets/profileImg.png'
import SERVER_BASE_URL from '../services/serverUrl';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserAPI } from '../services/allAPI';
import { editUserContext } from '../contexts/ContextShare';

const EditProfile = () => {
  const navigate = useNavigate()
  const {editUserResponse,setEditUserResponse} = useContext(editUserContext)
  const [existingProfilePic,setExistingProfilePic] = useState("")
  const [preview,setPreview] = useState("")
  const [userDetails,setUserDetails] = useState({
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    profilePic:"",
    userBio:"",
    userId:""
  })

  console.log(userDetails);
  
  
  useEffect(()=>{
    if (sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem('user'))
      setUserDetails({
        ...userDetails,
        firstname:user.firstname,lastname:user.lastname,username:user.username,email:user.email,password:user.password,userBio:user.userBio,userId:user.userId
      })
      setExistingProfilePic(user.profilePic)
    }
  },[])

  useEffect(()=>{
    if (userDetails.profilePic) {
      setPreview(URL.createObjectURL(userDetails.profilePic))
    }else{
      setPreview("")
    }
  },[userDetails.profilePic])


  const handleUserUpdate = async ()=>{
    // get all user details
    const {firstname,lastname,username,email,password,profilePic,userBio,userId} = userDetails
    // if text fieds has value
    if (username && userBio) {
      // requestbody
      const reqBody = new FormData()
      reqBody.append("firstname",firstname)
      reqBody.append("lastname",lastname)
      reqBody.append("username",username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic",existingProfilePic)
      reqBody.append("userBio",userBio)
      reqBody.append("userId",userId)

      // request header
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Authorization" : `bearer ${token}`,
        "Content-Type" : "multipart/form-data"
      }

      // make api call 
      try {
        const result = await updateUserAPI(reqBody,reqHeader)
        if (result.status==200) {
          toast("Profile Update Succesfully")
          // store updated user in session
          sessionStorage.setItem('user',JSON.stringify(result.data))
          setEditUserResponse(result)
          setTimeout(() => {
            navigate('/profile')
          }, 3000);
        }
      } catch (err) {
        console.log(err);
      }
    }else{
      toast("Please fill the form completely!!!")
    }
  }

  return (
    <div className=" d-flex justify-content-center align-items-center" style={{backgroundImage: `url(${bgImg})`, minHeight: '100vh' }}>
      <div className="card" style={{ 
                    width: '60%',
                    borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                    }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center bg-warning text-center" style={{borderRadius:'50px'}}>
            {
              existingProfilePic=="" ?
              <img
              src={preview?preview:profileImg}
              className="img-fluid rounded-circle"
              alt="Profile"
            />
            :
            <img
              src={preview?preview:`${SERVER_BASE_URL}/uploads/${existingProfilePic}`}
              className="img-fluid rounded-circle"
              alt="Profile"
            />
          }
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title text-center mb-4 fw-bolder">Edit Your Profile</h3>
              <form>
                <div className="mb-3">
                  <label onChange={e=>setUserDetails({...userDetails,profilePic:e.target.files[0]})} htmlFor="profilePicture" className="form-label">Profile Picture
                  <input type="file" className="form-control" id="profilePicture" />
                  </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Enter your full name"
                    value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bio" className="form-label">Bio</label>
                  <textarea
                    className="form-control"
                    id="bio"
                    rows="3"
                    placeholder="Write something about yourself"
                    value={userDetails.userBio} onChange={e=>setUserDetails({...userDetails,userBio:e.target.value})}
                  ></textarea>
                </div>
                <div className="d-flex">
                <button onClick={handleUserUpdate} type="button" className="btn btn-outline-secondary me-4" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}>Save</button>
                  <Link to={'/profile'} type="button" className="btn btn-outline-secondary" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'black',
                    color: 'white',
                  }}>Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" transition={Bounce}
      />
    </div>
  );
};

export default EditProfile;
