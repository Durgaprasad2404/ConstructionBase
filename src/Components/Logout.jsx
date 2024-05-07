import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import URL_FOR_API from '../API/UrlOfApi';

function Logout() {
    const history = useNavigate();
    useEffect(()=>{
          fetch(URL_FOR_API+"/api/logout",{
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
