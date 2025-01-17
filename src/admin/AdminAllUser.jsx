import React from "react";
import { useEffect, useState } from "react";
import { allUserAdminAPI, allUserAPI } from "../services/allAPI";
import AdminHeader from "./components/AdminHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

function AdminAllUser() {
  const [allUser, setAllUser] = useState([]);
  console.log(allUser);

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      const result = await allUserAdminAPI();
      if (result.status == 200) {
        setAllUser(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <AdminHeader />
      <div className="container mb-3 mt-5">
        <div className="d-flex justify-content-between">
          <h2 className="mb-4 fw-bolder">All User</h2>
          <p className="fs-4">Total User : <span className="fw-bold text-success">{allUser.length}</span></p>
          <Link to={"/admin"}>
            <i class="fa-solid fa-arrow-left fa-xl"></i>
          </Link>
        </div>
        <hr />
        <div className="row g-4">
          {allUser.map((user) => (
            <UserCard displayData={user} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminAllUser;
