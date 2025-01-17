import React from 'react'
import { Toast } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


function AdminHeader() {
  const navigate = useNavigate()
  const logoutAdmin = async () => {
    sessionStorage.clear()
    toast.error("Logout successfully")
    setTimeout(() => {
      navigate('/');
    },3000);
  }
  return (
    <>
        <Navbar style={{ zIndex: 10, height: "80px", backgroundColor: 'white' }} className="shadow border w-100">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className='text-decoration-none fw-bolder fs-3 text-black'>
                  <i className="fa-solid fa-panorama"></i>
                  Photosam <span style={{fontSize:'18px',color:'red'}}>admin</span>
                </Link>
              </Navbar.Brand>
              <div>
                    <Link to={'/admin-post-validate'} style={{ textDecoration: 'none', color: 'black' }} className='me-3'>
                          Post Validation
                        </Link>
                        <Link to={'/admin/all-post'} style={{ textDecoration: 'none', color: 'black' }} className='me-3'>
                          All Post
                        </Link>
                        <Link to={'/admin/all-user'} style={{ textDecoration: 'none', color: 'black' }} className='me-3'>
                          All User
                        </Link>
                    <button onClick={logoutAdmin} type="button" className="btn btn-outline-secondary" style={{
                      borderRadius: '50px',
                      padding: '10px 25px',
                      fontWeight: '500',
                      fontSize: '16px',
                      border: '2px solid black',
                      boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                      backgroundColor: 'white',
                      color: 'red',
                    }}>Logout <i className="fa-solid fa-right-from-bracket"></i></button>
                  </div>
            </Container>
          </Navbar>
          <ToastContainer position='top-left' />
    </>
  )
}

export default AdminHeader