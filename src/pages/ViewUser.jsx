import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { singleUserAllPostsAPI, singleUserAPI } from "../services/allAPI";
import bgImg from "../assets/bg.svg";
import PostCard from "../components/PostCard";
import { editUserContext } from "../contexts/ContextShare";
import SERVER_BASE_URL from "../services/serverUrl";
import AdminHeader from "../admin/components/AdminHeader";

function ViewUser() {
  const { editUserResponse, setEdiUserResponse } = useContext(editUserContext);
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState("");
  const [userPosts, setUserPosts] = useState([]);

  console.log(userDetails);

  useEffect(() => {
    getUserDetails();
    getUserPosts();
  }, [editUserResponse]);

  // Fetch single user details
  const getUserDetails = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      // make api call
      try {
        const result = await singleUserAPI(userId, reqHeader);
        if (result.status === 200) {
          setUserDetails(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Fetch single user details
  const getUserPosts = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      // make api call
      try {
        const result = await singleUserAllPostsAPI(userId, reqHeader);
        if (result.status === 200) {
          setUserPosts(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      {sessionStorage.getItem("IsAdmin") ? <AdminHeader /> : <Header/>}
      <div
        className="pt-5"
        style={{
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          textAlign: "center",
          padding: "40px 0",
          fontFamily: "Arial, sans-serif",
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div
          className="container d-flex align-items-center justify-content-between"
          style={{
            height: "50vh",
            padding: "20px",
          }}
        >
          {/* User Details Section */}
          <div
            className="d-flex flex-column justify-content-center"
            style={{ flex: 1 }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              {userDetails?.username}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#888",
                maxWidth: "400px",
                lineHeight: "1.6",
              }}
            >
              {userDetails?.userBio || "This user has not added a bio yet."}
            </p>
            <div className="button text-align-center mt-4">
              <a
                type="button"
                className="btn btn-outline-secondary me-4"
                style={{
                  borderRadius: "50px",
                  padding: "10px 25px",
                  fontWeight: "500",
                  fontSize: "16px",
                  border: "2px solid black",
                  boxShadow: "2px 2px 3px rgba(0, 0, 0, 1)",
                  color: "black",
                  backgroundColor: "white",
                }}
                href={`mailto:${userDetails?.email}?subject=Hello&body=Hi%20there,%0D%0A%0D%0AI%20like%20your%20photos%20and%20photography%20styles.%20Would%20you%20be%20ready%20to%20work%20for%20me?%20Please%20contact%20me%20via%20email.`}
              >
                Contact Me <i class="fa-regular fa-envelope fa-bounce"></i>
              </a>
            </div>
          </div>

          {/* Profile Image Section */}
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              flex: 1,
            }}
          >
            <img
              src={
                userDetails?.profilePic && userDetails.profilePic.trim() !== ""
                  ? `${SERVER_BASE_URL}/uploads/${userDetails.profilePic}`
                  : "https://imgs.search.brave.com/odGlhx_DRYtz6d2mX5ELwD6kAZFHukGACLnLKKiDxXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvcGVyc29uYWwt/cHJvZmlsZS1kb2N1/bWVudC13aXRoLXBo/b3RvLWlkLW15LWFj/Y291bnQtaWNvbi1p/c29sYXRlZC1mbGF0/LWNhcnRvb25fMTAx/ODg0LTc0OC5qcGc_/c2VtdD1haXNfaHli/cmlk"
              }
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
        </div>
        {/* Posts Section */}
        {!sessionStorage.getItem("IsAdmin") && (
          <div className="mt-5">
            <h4 style={{ fontWeight: "600" }}>Posts</h4>
            {/* Posts Section */}
            <div className="container my-3">
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
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ViewUser;
