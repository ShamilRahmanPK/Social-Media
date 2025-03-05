import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import postImg from '../assets/postImg.jpg';
import PostCard from '../components/PostCard';
import { allPostAPI } from '../services/allAPI';

function AllPost() {
  const [allPost, setAllPost] = useState([]); // Original posts
  const [filteredPost, setFilteredPost] = useState([]); // Filtered posts
  const [searchKey, setSearchKey] = useState(''); // Search query

  console.log(allPost);

  useEffect(() => {
    getAllPost();
  }, []);

  const getAllPost = async () => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await allPostAPI(reqHeader);
        if (result.status === 200) {
          setAllPost(result.data);
          setFilteredPost(result.data); // Initialize filtered posts
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSearch = (e) => {
    const key = e.target.value.toLowerCase();
    setSearchKey(key);
    const filtered = allPost.filter((post) =>
      post.postname.toLowerCase().includes(key)
    );
    setFilteredPost(filtered);
  };

  return (
    <div>
      <Header />
      <div className="container mb-3 mt-5">
        <div className='d-flex justify-content-between'>
          <h2 className="mb-4 fw-bolder">All posts</h2>
          <input
          style={{width:'250px'}}
            type="text"
            className="form-control"
            placeholder="Search posts by title..."
            value={searchKey}
            onChange={handleSearch}
          />
          </div>
        <hr />
        {/* Posts List */}
        <div className="row g-4">
          {filteredPost.length > 0 ? (
            filteredPost.map((project) => (
              <PostCard key={project.id} displayData={project} />
            ))
          ) : (
            <p className="text-muted">No posts found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllPost;
