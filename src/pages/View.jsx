import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import bgImg from '../assets/bg.svg';

function View() {
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
                <h1 className="mt-3">Ashish Post</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat laudantium, ea ipsa quasi ab possimus velit fugit iusto. Ullam quos, amet enim facere atque omnis facilis beatae eaque culpa repellendus!</p>
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
                src="https://via.placeholder.com/500x300"
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
