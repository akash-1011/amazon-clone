import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push('/');
            })
            .catch(e => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
                history.push('/')
            })
            .catch(e => alert(e.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login-logo'
                    src='http://pngimg.com/uploads/amazon/amazon_PNG24.png'
                />
            </Link>

            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={login} className='login-signInButton'>Sign In</button>
                </form>
                <button onClick={register} className='login-registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
