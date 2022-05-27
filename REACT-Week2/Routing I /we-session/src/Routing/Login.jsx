import React from 'react'
import { Navigate } from 'react-router-dom'

function Login() {
  return (<>
    <div>Login</div>
    <button onClick={()=>{<Navigate to = "/users"/>}}>Login</button>
  </>
  )
}

export default Login