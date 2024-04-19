import React from 'react'
import { FaUser } from 'react-icons/fa'
import './user.css'

function User() {
  return (
    <div>
      <div className='userDp'>
        <FaUser />
      </div>
      <div className='userbio'>
        <h3 className='username'>User name</h3>
        <p className='userStatus'>Login/Logout</p>
      </div>
    </div>
  )
}

export default User
