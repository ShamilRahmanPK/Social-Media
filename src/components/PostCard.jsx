import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SERVER_BASE_URL from "../services/serverUrl";

function PostCard({ displayData }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    isAdminFunction();

    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const isAdminFunction = () => {
    if (sessionStorage.getItem("IsAdmin")) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <>
      <Link
        to={
          isAdmin
            ? `/admin/post-view/${displayData._id}`
            : `/view/${displayData._id}`
        }
        className="col-lg-4 col-md-6"
        style={{ textDecoration: "none" }}
      >
        <div
          className="card border-1"
          style={{
            overflow: "hidden",
            borderRadius: "30px",
            fontWeight: "500",
            fontSize: "16px",
            border: "2px solid black",
            boxShadow: "4px 4px 1px rgba(0, 0, 0, 1)",
            backgroundColor: "white",
            color: "black",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "none")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = "3px 3px 1px rgba(0, 0, 0, 1)")
          }
        >
          <img
            src={`${SERVER_BASE_URL}/uploads/${displayData.imageUrl}`}
            className="card-img-top"
            alt="Post Image"
            style={{
              height: "200px",
              objectFit: "cover",
            }}
          />
          <div className="card-body d-flex justify-content-between align-items-center">
            {/* Left Side - Post Title and Link */}
            <div>
              <h5 className="card-title fw-bolder">{displayData.postname}</h5>
              <a href="#" className="card-link text-decoration-none">
                View full post
              </a>
            </div>
            <div className="position-relative">
              {displayData?.isValidate === false && (
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Your post is currently under review. Our team is carefully checking it to ensure it meets our community standards and guidelines. Your post will be shown to the public or removed if you cross the redline."
                  data-bs-custom-class="custom-tooltip"
                >
                  <i className="fa-solid fa-circle-info fs-4" style={{color:'#FFD43B'}}></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
