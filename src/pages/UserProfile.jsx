import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImg from "../assets/bg.svg";
import profileImg from "../assets/profileImg.png";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";
import { userPostAPI } from "../services/allAPI";
import SERVER_BASE_URL from "../services/serverUrl";

function UserProfile() {
  const [userDetails, setUserDetails] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  console.log(userDetails);

  useEffect(() => {
    getAllUserPost();
    if (sessionStorage.getItem("user")) {
      setUserDetails(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);

  const getAllUserPost = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
        const result = await userPostAPI(reqHeader);
        setUserPosts(result.data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />
      {/* Profile Section */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "90vh" }}
      >
        <div
          className="card m-2"
          style={{
            height: "70vh",
            width: "80%",
            borderRadius: "50px",
            fontWeight: "500",
            fontSize: "16px",
            border: "2px solid black",
            boxShadow: "5px 5px 1.5px rgba(0, 0, 0, 1)",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <div className="row h-100">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              {userDetails.profilePic === "" ? (
                <img
                  width={"300px"}
                  style={{ borderRadius: "50%", border: "1.5px solid" }}
                  src={profileImg}
                  alt="Profile"
                />
              ) : (
                <img
                  width={"300px"}
                  style={{ borderRadius: "50%", border: "1.5px solid" }}
                  src={`${SERVER_BASE_URL}/uploads/${userDetails.profilePic}`}
                  alt="Profile"
                />
              )}
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center text-center">
              <h5 className="mb-4">
                <i>{userDetails?.username}</i>
              </h5>
              <h2>
                {userDetails?.firstname} {userDetails?.lastname}
              </h2>
              <p className="mb-3">{userDetails?.userBio}</p>
              <div>
                <Link to={"/edit-profile"}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary me-4"
                    style={{
                      borderRadius: "50px",
                      padding: "10px 25px",
                      fontWeight: "500",
                      fontSize: "16px",
                      border: "2px solid black",
                      boxShadow: "2px 2px 3px rgba(0, 0, 0, 1)",
                      color: "white",
                      backgroundColor: "black",
                    }}
                  >
                    Edit Profile
                  </button>
                </Link>
                <Link to={"/home"}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    style={{
                      borderRadius: "50px",
                      padding: "10px 25px",
                      fontWeight: "500",
                      fontSize: "16px",
                      border: "2px solid black",
                      boxShadow: "2px 2px 3px rgba(0, 0, 0, 1)",
                      color: "black",
                    }}
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Posts Section */}
      <div className="container my-3">
        <h4 className="fw-bold text-center mb-4">Posts</h4>
        <div className="row g-4">
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <PostCard displayData={post} />
              </div>
            ))
          ) : (
            <div className="text-center text-muted mt-3">
              This user has 0 posts.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
