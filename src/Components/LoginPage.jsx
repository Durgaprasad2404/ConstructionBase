import React from 'react'

function LoginPage() {
  return (
    <div className='loginBG'>
      <div class="main">
        <h3>Enter your login credentials</h3>
        <form action="">
            <label for="first">
                  Username:
              </label>
            <input type="text"
            className='login-input'
                   id="first"
                   name="first"
                   placeholder="Enter your Username" required/>
 
            <label for="password">
                  Password:
              </label>
            <input type="password"
            className='login-input'
                   id="password"
                   name="password"
                   placeholder="Enter your Password" required/>
 
            <div class="wrap">
                <button type="submit"
                        onclick="solve()">
                    Submit
                </button>
            </div>
        </form>
        <p>Not registered?
            {/*  eslint-disable-next-line  */}
              <a href="#"
               style={{textDecoration: "none"}}>
                Create an account
            </a>
        </p>
    </div>
    </div>
  )
}

export default LoginPage
