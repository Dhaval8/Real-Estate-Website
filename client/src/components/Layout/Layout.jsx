import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet, createHashRouter} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import UserContextDetail from '../../Context/UserContextDetail';
import { useMutation } from 'react-query';
import { createUser } from '../../utils/api';
const Layout = () => {
  // as it is the first thing to get rendered so we are doing user authentication here
  const {isAuthenticated,user} = useAuth0()
  const {setUserDetails} = useContext(UserContextDetail)
  const {mutate} = useMutation({
    mutationKey:[user?.email],
    mutationFn:()=>createUser(user?.email),
  })
  useEffect(()=>{
    // const getTokenAndRegister = async()=>{
    //   const res = await getAccessTokenWithPopup({
    //       authorizationParams:{
    //         audience:"http://localhost:8000",
    //         scope:"openid profile email"
    //       },
    //   });
    //   localStorage.setItem("access_token",res)
    // setUserDetails((prev)=>({...prev,token:res}))
    // };
    
      isAuthenticated && mutate()
  },[isAuthenticated])
  return (
    <>
        <div style={{background:"var(--black)",overflow:"hidden"}}>
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout