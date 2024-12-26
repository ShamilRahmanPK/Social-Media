import React, { useState } from 'react'
import authImg from '../assets/auth.jpg'
import { Form,Spinner } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../assets/bg.svg';
import { loginAPI, registerAPI } from '../services/allAPI';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [isLogin,setIsLogin] = useState(false)
  const navigate = useNavigate()
  const [userInput,setUserInput] = useState({
    email:"",password:""
  })

  const login = async (e)=>{
    e.preventDefault()
    if (userInput.email && userInput.password) {
      // api call
      try {
        const result = await loginAPI(userInput)
        if (result.status==200) {
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",(result.data.token))
          setIsLogin(true)
          toast("Logined Successfully")
          setTimeout(()=>{
            navigate('/')
          setUserInput({email:"",password:""})
          setIsLogin(false)
          },2000)
        } else {
          if (result.response.status==404) {
            toast(result.response.data)
          }
        }
      } catch (err) {
        console.log(err);
      }
    }else{
      toast("Please fill the form Completely")
    }
  }

  return (
    <div style={{backgroundImage: `url(${bgImg})`,minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center'>
      <div className="container w-100">
        <div className="card shadow p-3 justify-content-center" style={{backgroundColor:'white',height:"500px"}}>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={authImg} width={"90%"} alt="" style={{
                    borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }} className="img-fluid rounded border border-2 border-black" />
            </div>
            <div className="col-lg-6">
            <div className="w-100 d-flex justify-content-center">
              <div className='text-center'>
              <h1 className="my-2">Login to Your Account</h1>
              <h5></h5>
              <Form>
            {/* email */}
            <FloatingLabel
              controlId="floatingEmail"
              label="Email address"
              className="mb-3">
              <Form.Control onChange={e=>setUserInput({...userInput,email:e.target.value})} value={userInput.email} type="email" placeholder="Email Adress" />
            </FloatingLabel>

            {/* password */}
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control onChange={e=>setUserInput({...userInput,password:e.target.value})} value={userInput.password} type="password" placeholder="Password" />
            </FloatingLabel>
            
              <div className="mt-3">
                <button onClick={login} className="btn btn-primary mb-2 d-flex" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}>Login
                  {
                    isLogin &&
                    <Spinner className='ms-1' animation="border" variant="secondary" />
                    }
                  </button>
                <p>New User ? Please Click here to <Link to={'/auth'}>Register</Link></p>
                <p><Link style={{textDecoration:'none'}} to={'/'}>Go back</Link></p>
              </div>
            </Form>
              </div>
            </div>
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
  )
}

export default Login