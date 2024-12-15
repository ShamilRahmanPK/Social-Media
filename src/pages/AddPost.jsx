import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import bgImg from "../assets/bg.svg";
import { Link, useNavigate } from "react-router-dom";

function AddPost() {
  const navigate = useNavigate()
  const [preview,setPreview] = useState("")
  const [uploadFileStatus,setUploadFileStatus] = useState(false)
  const [postDetails,setPostDetails]=useState({
    postname:"",description:"",imageUrl:""
  })
  console.log(postDetails);
  

  useEffect(()=>{
    if (postDetails.imageUrl.type=="image/png" || postDetails.imageUrl.type=="image/jpg" || postDetails.imageUrl.type=="image/jpeg") {
      setUploadFileStatus(true)
      setPreview(URL.createObjectURL(postDetails.imageUrl))
    }else{
      // invaid image format
      setUploadFileStatus(false)
      setPostDetails({...postDetails,imageUrl:""})
    }
  },[postDetails.imageUrl])

  const handleClose = () => {
    setPreview("")
    setUploadFileStatus(false)
    setPostDetails({postname:"",description:"",imageUrl:""})
    navigate('/home')
  }


  return (
    <div style={{ minHeight: "100vh", backgroundImage: `url(${bgImg})` }}>
      <Header />
      <div
        style={{
          maxWidth: "600px",
          background: "#fff",
          padding: "20px",
          margin: "30px auto",
          borderRadius: "50px",
          fontWeight: "500",
          fontSize: "16px",
          border: "2px solid black",
          boxShadow: "4px 4px 1px rgba(0, 0, 0, 1)",
          backgroundColor: "white",
          color: "black",
        }}
        className="container"
      >
        <h2 className="text-center mb-4">Post something</h2>
        <p className="text-center">Create a post here.</p>
        <form>
          <div className="mb-3">
            { preview ?
              <label
              style={{
                width:'100%',
                border: "2px dashed #ccc",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                color: "#777",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              className="drag-drop"
            >
              <input onChange={e=>setPostDetails({...postDetails,imageUrl:e.target.files[0]})} type="file" style={{display:'none'}} />
                {!uploadFileStatus &&
                <span className="text-danger">(jpeg,jpg,png are only allowed to upload)</span>}
              <img style={{width:"500px"}} src={preview} alt="" />

            </label>
            :
            <label
              style={{
                width:'100%',
                border: "2px dashed #ccc",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                color: "#777",
                cursor: "pointer",
                transition: "border-color 0.3s",
              }}
              className="drag-drop"
            >
              <input onChange={e=>setPostDetails({...postDetails,imageUrl:e.target.files[0]})} type="file" style={{display:'none'}} />
              Browse your files {
                !uploadFileStatus &&
                <span className="text-warning">(jpeg,jpg,png are only allowed)</span>}
            </label>
            }
          </div>
          <div className="mb-3">
            <label htmlFor="postName" className="form-label">
              Post name
            </label>
            <input
            value={postDetails.postname}
            onChange={e=>setPostDetails({...postDetails,postname:e.target.value})}
              type="text"
              className="form-control"
              id="postName"
              placeholder="Lovely lake"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postDescription" className="form-label">
              Post description
            </label>
            <textarea
            value={postDetails.description}
            onChange={e=>setPostDetails({...postDetails,description:e.target.value})}
              className="form-control"
              id="postDescription"
              rows="3"
              placeholder="This is a really cool place I saw on a hike!"
            ></textarea>
          </div>
          <div className="d-flex">
            <button type="submit" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'black',
                  }} className="btn btn-primary w-100 m-2">
              Create post
            </button>
            <button onClick={handleClose} type="submit" style={{
                    borderRadius: '50px',
                    padding: '10px 25px',
                    fontWeight: '500',
                    fontSize: '16px',
                    border: '2px solid black',
                    boxShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
                    backgroundColor: 'white',
                    color: 'red',
                  }} className="btn btn-primary w-100 m-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
