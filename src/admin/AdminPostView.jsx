import React, { useContext, useState, useEffect } from 'react';
import { adminDeletePostAPI, adminSinglePostAPI, approvePostAPI } from '../services/allAPI';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import SERVER_BASE_URL from '../services/serverUrl';
import Footer from '../components/Footer';
import { toast, ToastContainer } from 'react-toastify';

function AdminPostView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [postDetails, setPostDetails] = useState([]);

    // Fetch single post details
    const getPostDetails = async () => {
        try {
            const result = await adminSinglePostAPI(id);
            if (result.status === 200) {
                setPostDetails(result.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const approvePost = async (id) => {
        try {
            const result = await approvePostAPI(id);
            if (result.status === 200) {
                alert("Post approved successfully!");
                navigate('/admin-post-validate');
            }
        } catch (err) {
            console.error("Error approving post:", err);
            toast.error("Failed to approve post.");
        }
    };

    const deletePost = async (id) => {
        try {
            const result = await adminDeletePostAPI(id);
            if (result.status === 200) {
                toast.success("Post rejected");
                setTimeout(() => {
                    navigate('/admin-post-validate');
                }, 3000);
            } else {
                toast.error("Failed to reject post.");
            }
        } catch (err) {
            console.error("Error rejecting post:", err);
            toast.error("Failed to reject post.");
        }
    };

    useEffect(() => {
        getPostDetails();
    }, [id]);

    return (
        <div>
            <AdminHeader />
            <div
                className="container"
                style={{
                    background: "#fff",
                    padding: "20px",
                    margin: "50px auto",
                    textAlign: "center",
                }}
            >
                <div className="row">
                    <div className="col-lg-6 mt-5">
                        <h1 className="mt-3 fw-bold">{postDetails?.postname}</h1>
                        <p style={{ fontSize: '20px' }}>{postDetails?.description}</p>
                        <Link
                            to={`/view-user/${postDetails?.userId}`}
                            style={{
                                textDecoration: "none",
                                color: "#007bff",
                                fontSize: "14px",
                            }}
                        >
                            View profile
                        </Link>
                        {/* Back and edit buttons */}
                        <div className="mt-4 d-flex justify-content-center gap-3">
                            <Link to={"/admin"}>
                                <button
                                    style={{
                                        borderRadius: '50px',
                                        padding: '10px 25px',
                                        fontWeight: '500',
                                        fontSize: '16px',
                                        border: '2px solid black',
                                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                                        backgroundColor: 'white',
                                        color: 'black',
                                    }}
                                >
                                    Back
                                </button>
                            </Link>
                            {postDetails?.isValidate === false ? (
                                <div>
                                    <button
                                        onClick={() => approvePost(postDetails?._id)}
                                        style={{
                                            borderRadius: '50px',
                                            padding: '10px 25px',
                                            marginRight: '10px',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            border: '2px solid black',
                                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                                            backgroundColor: 'green',
                                            color: 'black',
                                        }}
                                    >
                                        Approve Post
                                    </button>
                                    <button
                                        onClick={() => deletePost(postDetails?._id)}
                                        style={{
                                            borderRadius: '50px',
                                            padding: '10px 25px',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            border: '2px solid black',
                                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                                            backgroundColor: 'red',
                                            color: 'black',
                                        }}
                                    >
                                        Reject Post
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <button
                                        onClick={() => deletePost(postDetails?._id)}
                                        style={{
                                            borderRadius: '50px',
                                            padding: '10px 25px',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            border: '2px solid black',
                                            boxShadow: '2px 2px 5px rgba(0, 0, 0, 1)',
                                            backgroundColor: 'red',
                                            color: 'black',
                                        }}
                                    >
                                        Delete Post
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="d-flex col-lg-6 justify-content-center mt-4">
                        <img
                            src={`${SERVER_BASE_URL}/uploads/${postDetails?.imageUrl}`}
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
            {/* Single ToastContainer */}
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default AdminPostView;
