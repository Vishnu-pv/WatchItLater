import { Container } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { useAuth } from '../../firebase'
import { useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../../firebase';

function Login() {
    const { signInWithGoogle } = useAuth();
    const handleLogin = () => {
        signInWithGoogle()
    }
  return (
    <>
        <Container>
            <Button onClick={handleLogin}>Login</Button>
        </Container>
    </>
  )
}

export default Login