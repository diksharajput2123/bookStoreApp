import React, { createContext, useContext, useState } from 'react'

export const AuthContext= createContext()
export default function AuthProvider({children}) {
  const initaialAuthUser=localStorage.getItem("Users");
  const [authUser,setAuthUser]=useState(
    initaialAuthUser? JSON.parse(initaialAuthUser) : undefined

  )
  return(
    <AuthContext.Provider value={[authUser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext);

