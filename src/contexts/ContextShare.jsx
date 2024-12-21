import React, { createContext, useState } from 'react'
export const editUserContext = createContext()
export const editPostContext = createContext()
export const  logoutContext = createContext()

const ContextShare = ({children}) => {
    const [editUserResponse,setEditUserResponse] = useState("")
    const [editPostResponse,setEditPostResponse] = useState("")
    const [logout,setLogout] = useState("")
  return (
    <editUserContext.Provider value={{editUserResponse,setEditUserResponse}}>
        <editPostContext.Provider value={{editPostResponse,setEditPostResponse}}>
          <logoutContext.Provider value={{logout,setLogout}}>
            {children}
          </logoutContext.Provider>
        </editPostContext.Provider>
    </editUserContext.Provider>
  )
}

export default ContextShare