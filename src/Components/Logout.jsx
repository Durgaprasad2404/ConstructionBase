import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const history = useNavigate();
    useEffect(()=>{
          fetch('/logout',{
      method:"GET",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }).then((res)=>{
      history('/')
      if (res.status !== 200){
        const error = new Error(res.error)
        throw error
      }
    }).catch((err)=>{
      console.log(err)
    })
    // eslint-disable-next-line
    },[])
  return (
    <div>
      LOGOUT
    </div>
  )
}

export default Logout
