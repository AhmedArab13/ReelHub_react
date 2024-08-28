import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from '../Login/Login'

export default function ProtectedRoute({userData , savaUserData ,children }) {
 
    if (userData === null) 
    {
        return <Login savaUserData={savaUserData}/>

    }else{
        
        return children ;
    }
}


