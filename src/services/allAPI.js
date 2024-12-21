import commonAPI from "./commonAPI";
import SERVER_BASE_URL from "./serverUrl";


// register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/register`,reqBody)
}

// login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/login`,reqBody)
}

// add post 
export const addPostAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_BASE_URL}/add-post`,reqBody,reqHeader)
}

// home posts
export const homePostAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-posts`,{})
}

// user posts
export const userPostAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/user-posts`,{},reqHeader)
}

// all posts
export const allPostAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/all-posts`,{},reqHeader)
}



// Fetch single post by ID
export const singlePostAPI = async (postId, reqHeader) => {
    return await commonAPI("GET", `${SERVER_BASE_URL}/post/${postId}`,{}, reqHeader);
  };

// home users
export const homeUserAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-users`,{})
}  

// Fetch single user by userID
export const singleUserAPI = async (userId, reqHeader) => {
    return await commonAPI("GET", `${SERVER_BASE_URL}/user/${userId}`,{}, reqHeader);
  };

  // Fetch single post by userID
export const singleUserAllPostsAPI = async (userId, reqHeader) => {
    return await commonAPI("GET", `${SERVER_BASE_URL}/user/posts/${userId}`,{}, reqHeader);
  };

// edit use
export const updateUserAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT",`${SERVER_BASE_URL}/user/edit`,reqBody,reqHeader);
  };

// Edit post
export const updateUserPostAPI = async (id, reqHeader, reqBody) => {
    return await commonAPI("PUT", `${SERVER_BASE_URL}/post/${id}/edit`, reqBody, reqHeader);
};

// deete post /post/:id/delete
export const deletePostAPI = async (id, reqHeader) => {
    return await commonAPI("DELETE", `${SERVER_BASE_URL}/post/${id}/delete`, {}, reqHeader);
};

