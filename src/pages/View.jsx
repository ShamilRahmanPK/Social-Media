import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import bgImg from '../assets/bg.svg';
import { singlePostAPI } from "../services/allAPI";
import SERVER_BASE_URL from "../services/serverUrl";




function View() {
    const { id } = useParams(); 
    const [postDetails, setPostDetails] = useState(null);

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
    }, [id]);

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
                <h1 className="mt-3">{postDetails?.postname}</h1>
                <p>{postDetails?.description}</p>
                <Link to={"/view-user"}
                  style={{
                    textDecoration: "none",
                    color: "#007bff",
                    fontSize: "14px",
                  }}
                >
                  View profile
                </Link>
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
