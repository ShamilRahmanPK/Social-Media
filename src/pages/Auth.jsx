import React, { useState } from 'react'
import authImg from '../assets/auth.jpg'
import { Form,Spinner } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../assets/bg.svg';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerAPI } from '../services/allAPI';


const Auth = () => {
  const navigate = useNavigate()
  const [userInput,setUserInput] = useState({
    firstname:"",lastname:"",username:"",email:"",password:""
  })

  console.log(userInput);

  const register = async (e)=>{
    e.preventDefault()
    if (userInput.firstname && userInput.lastname && userInput.username && userInput.email && userInput.password) {
      // api call
      try {
        const result = await registerAPI(userInput)
        if (result.status==200) {
          toast(`Welcome ${result.data?.username},Redirecting to Login`)
          setTimeout(()=>{
            navigate('/login')
          },3000)
          setUserInput({firstname:"",lastname:"",username:"",email:"",password:""})
        }else{
          if (result.response.status==406) {
            toast(result.response.data)
            setUserInput({firstname:"",lastname:"",username:"",email:"",password:""})
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
        <div className="card shadow p-3" style={{backgroundColor:'white'}}>
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={authImg} height={'100%'} alt="" style={{
                    borderRadius: '50px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }} className="img-fluid rounded border-2 border-black" />
            </div>
            <div className="col-lg-6">
            <div className="w-100 d-flex justify-content-center">
              <div className='text-center'>
              <h1 className="my-2">Create an Account</h1>
              <h5></h5>
              <Form>
            {/* First Name */}
            <FloatingLabel
              controlId="floatingInputFirstName"
              label="First Name"
              className="mb-3">
              <Form.Control value={userInput.firstname} onChange={e=>setUserInput({...userInput,firstname:e.target.value})} type="text" placeholder="First Name" />
            </FloatingLabel>

            {/* Last name */}
            <FloatingLabel
              controlId="floatingInputLastName"
              label="Last Name"
              className="mb-3">
              <Form.Control onChange={e=>setUserInput({...userInput,lastname:e.target.value})} value={userInput.lastname} type="text" placeholder="Last Name" />
            </FloatingLabel>

            {/*  username */}
            <FloatingLabel
              controlId="floatingInputUserName"
              label="Username"
              className="mb-3">
              <Form.Control onChange={e=>setUserInput({...userInput,username:e.target.value})} value={userInput.username} type="text" placeholder="Username" />
            </FloatingLabel>

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
                <button onClick={register} className="btn btn-primary mb-2" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}>Create Acount</button>
                <p>Existing User ? Please Click here to <Link to={'/login'}>Login</Link></p>
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

export default Auth