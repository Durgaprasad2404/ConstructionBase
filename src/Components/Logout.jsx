import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

function Logout() {
  const history = useNavigate();
  const logoutUser = async () =>{
    Cookies.remove("jwtoken")
    history('/')
  }

  useEffect(() => {
    // const logoutUser = async () => {
    //   try {
    //     const res = await fetch(URL_FOR_API + "/api/logout", {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${jwtToken}`,
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //       },
    //       credentials: "include"
    //     });

    //     if (res.status !== 200) {
    //       throw new Error('Logout failed');
    //     }

    //     // Logout successful, redirect to home page
    //     history('/');
    //   } catch (err) {
    //     console.error(err);
    //     // Handle error, maybe display a message to the user
    //   }
    // };

    logoutUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      LOGOUT
    </div>
  );
}

export default Logout;
