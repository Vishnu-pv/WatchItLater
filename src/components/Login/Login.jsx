import { Container } from '@mui/material'
import React, {useEffect} from 'react'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { buttonStyle } from './LoginStyle';
import AnimatedTextCharacter from './WaveAnimation';

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
         <AnimatedTextCharacter text="Watch It Later"/>
        <Button variant="outlined" style={buttonStyle} onClick={handleLogin}>Sign In With Google</Button>
      </Container>
    }
     
    </>
  )
}

export default Login