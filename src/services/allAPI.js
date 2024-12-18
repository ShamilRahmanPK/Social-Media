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
    return await commonAPI("GET", `${SERVER_BASE_URL}/post/${postId}`, {}, reqHeader);
  };

// home users
export const homeUserAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_BASE_URL}/home-users`,{})
}  
