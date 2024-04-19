import React from 'react'
import { FaUser } from 'react-icons/fa'
import './user.css'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div>
      <div className='userDp'>
        <FaUser />
      </div>
      <div className='userbio'>
        <h3 className='username'>User name</h3>
        <Link to='/login'>
          <p className='userStatus'>Login/Logout</p>
        </Link>
      </div>
    </div>
  )
}

export default User
