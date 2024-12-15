import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Auth from '../pages/Auth';
import bgImg from '../assets/bg.svg';
import mainImg from '../assets/mainImg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const Landing = () => {

  const [isLogin,setIsLogin]=useState(false)

  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  },[])
  return (
    <>
      <Header outsideLogin={true}/>
      <div style={{ backgroundImage: `url(${bgImg})`, height: '87vh',backgroundColor:'white' }}>
        <div className="container h-100">
          <Row className="h-100 align-items-center">
            <Col>
              <div>
                <h1 style={{fontSize:'60px'}}>Webflow Social Media Template</h1>
                <p>Allow members to create a profile, make posts, and delete posts</p>
                  {
                    isLogin ?
                    <Link to={'/home'}>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                >
                  Explore
                </button>
                </Link>
                :
                    <Link to={'/auth'}>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }}
                >
                  Sign up
                </button>
                </Link>}
              </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <img
                  className="rounded border border-2 border-black"
                  src={mainImg}
                  style={{ width: '80%' }}
                  alt="Main"
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Landing;
