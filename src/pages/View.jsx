import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import bgImg from '../assets/bg.svg';
import { singlePostAPI } from "../services/allAPI";
import SERVER_BASE_URL from "../services/serverUrl";
import EditPost from "../components/EditPost";
import { editPostContext } from "../contexts/ContextShare";





function View() {
  const {editPostResponse,setEditPostResponse} = useContext(editPostContext)
    const { id } = useParams(); 
    const [postDetails, setPostDetails] = useState([]);

    console.log(postDetails);

    // Fetch single post details
    const getPostDetails = async () => {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization" : `Bearer ${token}`
        }
        // make api call
        try {
          const result = await singlePostAPI(id, reqHeader);
          if (result.status === 200) {
            setPostDetails(result.data);
          }
        } catch (err) {
          console.log(err);
          
        }
      }
      
    };

    useEffect(() => {
      getPostDetails();
    }, [id,editPostResponse]);

  return (
    <div>
      <Header insideView={true} />
      <div className="container"
        style={{
          background: "#fff",
          padding: "20px",
          margin: "50px auto",
          textAlign: "center",
          backgroundImage: `url(${bgImg})`
        }}
      >
        <div className="row">
            <div className="col-lg-6 mt-5">
                <h1 className="mt-3 fw-bold">{postDetails?.postname}</h1>
                <p style={{fontSize:'20px'}}>{postDetails?.description}</p>
                <Link to={`/view-user/${postDetails?.userId}`}
                  style={{
                    textDecoration: "none",
                    color: "#007bff",
                    fontSize: "14px",
                  }}
                >
                  View profile
                </Link>
                {/*  back and edit button */}
                <div className="mt-4 d-flex justify-content-center gap-3">
              <Link to="/home">
                <button
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
                  Back
                </button>
              </Link>
              {
                postDetails?.userId==JSON.parse(sessionStorage.getItem('user')).userId &&
                <EditPost post={postDetails}/>
                }
            </div>
            </div>
            <div className="d-flex col-lg-6 justify-content-center mt-4">
              <img
                src={`${SERVER_BASE_URL}/uploads/${postDetails?.imageUrl}`}
                alt="Post"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "12px",
                  border: '1px solid black',
                }}
              />
            </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default View;
