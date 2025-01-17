import React, { useEffect, useState } from 'react'
import AdminHeader from './components/AdminHeader'
import Footer from '../components/Footer'
import PostCard from '../components/PostCard'
import { allPostAdminAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';

function AdminAllPost() {
    const [allPost, setAllPost] = useState([]);

  console.log(allPost);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    try {
      const result = await allPostAdminAPI();
      if (result.status == 200) {
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
        <div className="container mb-3 mt-5">
          <div className="d-flex justify-content-between">
            <h2 className="mb-4 fw-bolder">All posts</h2>
            <Link to={"/admin"}>
              <i class="fa-solid fa-arrow-left fa-xl"></i>
            </Link>
          </div>
          <hr />
          <div className="row g-4">
            {
            allPost.length>0 ?
            allPost.map((projects) => (
              <PostCard displayData={projects} />
            ))
            :
            <div>No Post Pending for Approval</div>
            }
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminAllPost