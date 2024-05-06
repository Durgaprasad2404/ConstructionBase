import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import './user.css'
import {Link, useNavigate } from 'react-router-dom'

function User() {
  const history=useNavigate()
  const [UserData,setuserData] = useState({})
  const [UserState,setuserState] = useState('Login')
const CalluserPage= async ()=>{
  try{
    const res = await fetch('https://constructionbackend-4ql2.onrender.com/user',{
      method:"GET",
      mode:"cors",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        'Access-Control-Allow-Origin' : '*'
      },
      credentials:"include"
    })
    const data = await res.json()
    setuserData(data)
    setuserState("Logout")
    if(!res.status===200){
      const error = new Error(res.error)
      throw error;
    }
  }
  catch (err){
    console.log(err)
    history('/login')
  }
}

  useEffect(()=>{
    CalluserPage()
    // eslint-disable-next-line
},[])

  return (
    <form className='userDetails' method='GET'>
      <div className='userContainer'>
        <div className='userDp'>
        <FaUser />
      </div>
      <div className='userbio'>
        <h3 className='username'>Hey &#128075;, <span className='userName'>{UserData.Username}</span></h3>
        <p className='greetingMsg'>Good To See You Here &#128525;</p>
        <Link to='/logout' className='userStatus'>
          {UserState}
        </Link>
      </div>
      </div>
    </form>
  )
}

export default User
