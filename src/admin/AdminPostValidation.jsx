import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { allPostApprovalAPI } from "../services/allAPI";
import Footer from "../components/Footer";
import AdminHeader from "./components/AdminHeader";
import { Link } from "react-router-dom";

function AdminPostValidation() {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const result = await allPostApprovalAPI();
      if (result.status === 200) {
        setAllPost(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <AdminHeader />
        <div style={{ minHeight: '60vh' }} className="container mb-3 mt-5">
          <div className="d-flex justify-content-between">
            <h2 className="mb-4 fw-bolder">All posts</h2>
            <Link to={"/admin"}>
              <i className="fa-solid fa-arrow-left fa-xl"></i>
            </Link>
          </div>
          <hr />
          <div className="row g-4">
            {/* Check if there are posts to render */}
            {allPost.length > 0 ? (
              allPost.map((projects) => (
                <PostCard key={projects._id} displayData={projects} />
              ))
            ) : (
              <div>No Post Pending for Approval</div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AdminPostValidation;
