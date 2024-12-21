import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deletePostAPI, updateUserPostAPI } from "../services/allAPI";
import { editPostContext } from "../contexts/ContextShare";
import { useNavigate } from "react-router-dom";

function EditPost({ post }) {
  const navigate = useNavigate()
  const { editPostResponse, setEditPostResponse } = useContext(editPostContext);
  const [postDetails, setPostDetails] = useState({
    id: post?._id,
    postname: post?.postname,
    description: post?.description,
    imageUrl: post?.imageUrl,
    userId: post?.userId,
  });

  console.log("Post ID:", postDetails.id);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setPostDetails({
      id: post?._id,
      postname: post?.postname,
      description: post?.description,
      imageUrl: post?.imageUrl,
      userId: post?.userId,
    });
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const { id, postname, description, imageUrl, userId } = postDetails;
    console.log("Updating Post ID:", id);
    if (postname && description) {
      const reqBody = new FormData();
      reqBody.append("postname", postname);
      reqBody.append("description", description);
      reqBody.append("imageUrl", imageUrl);
      reqBody.append("userId", userId);

      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,
      };

      try {
        // Pass id to updateUserPostAPI
        const result = await updateUserPostAPI(id, reqHeader, reqBody);
        if (result.status === 200) {
          toast("Changes applied");
          setShow(false);
          // useContext
          setEditPostResponse(result);
        }
      } catch (err) {
        toast(err.message || "Error updating post");
      }
    } else {
      toast("Fill the form completely");
    }
  };

  // delete post
  const deletePost = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "multipart/form-data",
        Authorization: `bearer ${token}`,
      };
      try {
        const result = await deletePostAPI(id,reqHeader);
        if (result.status==200) {
          toast("Post removed")
          navigate('/profile')
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Button variant="primary" style={{
        borderRadius: '50px',
        padding: '10px 25px',
        fontWeight: '500',
        fontSize: '16px',
        border: '2px solid black',
        boxShadow: '2px 2px 5px rgb(0, 0, 0)',
        backgroundColor: 'black',
        color: 'white',
      }} onClick={handleShow}>
        Edit
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="postTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title"
                value={postDetails.postname}
                onChange={(e) =>
                  setPostDetails({ ...postDetails, postname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="postDescription" className="mt-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter post description"
                value={postDetails.description}
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    description: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button  style={{
        borderRadius: '50px',
        padding: '10px 25px',
        fontWeight: '500',
        fontSize: '16px',
        border: '2px solid black',
        boxShadow: '2px 2px 5px rgb(0, 0, 0)',
        backgroundColor: 'white',
        color: 'red',
      }} onClick={()=>{deletePost(post?._id)}} variant="danger">Delete Post</Button>
          <Button  style={{
        borderRadius: '50px',
        padding: '10px 25px',
        fontWeight: '500',
        fontSize: '16px',
        border: '2px solid black',
        boxShadow: '2px 2px 5px rgb(0, 0, 0)',
        backgroundColor: 'black',
        color: 'white',
      }} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  style={{
        borderRadius: '50px',
        padding: '10px 25px',
        fontWeight: '500',
        fontSize: '16px',
        border: '2px solid black',
        boxShadow: '2px 2px 5px rgb(0, 0, 0)',
        backgroundColor: 'white',
        color: 'black',
      }} onClick={handleUpdatePost} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditPost;
