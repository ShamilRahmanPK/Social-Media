import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({outsideLogin,insideView}) {
  return (
    <>
    <Navbar style={{zIndex:10,height:"80px",backgroundColor:'white'}} className="shadow border w-100">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className='text-decoration-none fw-bolder fs-3 text-black'>
            <i class="fa-solid fa-panorama "></i>
          Photosam
            </Link>
          </Navbar.Brand>
          {
            outsideLogin==true ?
            <div>
            <Link className='me-4'><button type="button" className="btn btn-outline-dark" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'black',
                    color: 'white',
                  }}>Login</button>
            </Link>
            <Link><button type="button" className="btn btn-outline-secondary" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}>Sign up</button>
            </Link>
          </div>
          :
          <div>
            <Link to={'/add-post'} style={{textDecoration:'none',color:'black'}} className='me-3'>
                Add post
            </Link>
              {
                insideView==true?
                <Link to={'/home'} style={{textDecoration:'none',color:'black'}} className='me-3'>
                Home
              </Link>
              :
                <Link to={'/profile'} style={{textDecoration:'none',color:'black'}} className='me-3'>
                Profile
              </Link>
              }
            <Link><button type="button" className="btn btn-outline-secondary" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'red',
                  }}>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
            </Link>
          </div>
          }
        </Container>
      </Navbar> 
    </>
  )
}

export default Header