import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ViewUser() {
  return (
    <>
    <Header />
      <div className="pt-5"
        style={{
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
          textAlign: "center",
          padding: "40px 0",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div className="container d-flex justify-content-around">
          {/* Header */}
          <div>
            <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              holala bolalaPOP
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#888",
              }}
            >
              vrkpk vemp mve kģo mlș. POPkofepjfepajf jffe poajfeaf omfefaf
            </p>
          </div>

          {/* Profile Image */}
          <div>
            <img
              src="https://via.placeholder.com/200" // Replace with the actual barcode image URL
              alt="Profile"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

          
        </div>
        {/* Posts Section */}
          <div className="mt-5">
            <h4 style={{ fontWeight: "600" }}>Posts</h4>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "5px",
                padding: "15px",
                marginTop: "20px",
                color: "#666",
                fontSize: "14px",
                maxWidth: "600px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              This user has 0 posts.
            </div>
          </div>
      </div>
    <Footer/>
    </>
  );
}

export default ViewUser;
