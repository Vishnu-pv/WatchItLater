import { Container } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useUserAuth } from '../context/UserAuthContext';

const Login = () => {
    const { signIn,user } = useUserAuth()
    const navigate = useNavigate()
    useEffect(()=>{
      if(user){
        navigate("/home")
      }
    },[user])
    const handleLogin = async () => {
      try{
        console.log(user)
        if(user) {
          navigate("/home")
        }else{
          await signIn()
        }
       
        console.log(user)
      
      }catch(err){
          console.error(err)
      }
    }
  return (
    <>{
      <Container>
      <Button onClick={handleLogin}>Login</Button>
  </Container>
    }
     
    </>
  )
}

export default Login