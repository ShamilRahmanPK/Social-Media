import React, { createContext, useState } from 'react'
export const editUserContext = createContext()
export const editPostContext = createContext()

const ContextShare = ({children}) => {
    const [editUserResponse,setEditUserResponse] = useState("")
    const [editPostResponse,setEditPostResponse] = useState("")
  return (
    <editUserContext.Provider value={{editUserResponse,setEditUserResponse}}>
        <editPostContext.Provider value={{editPostResponse,setEditPostResponse}}>
          {children}
        </editPostContext.Provider>
    </editUserContext.Provider>
  )
}

export default ContextShare