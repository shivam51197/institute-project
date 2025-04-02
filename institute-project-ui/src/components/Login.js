
import React, { useState } from 'react'
import axios from 'axios';
import '../components/style.css'
import { Link, useNavigate } from 'react-router-dom';

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading,setLoading] = useState(false);
    
    const navigate = useNavigate();

    const submitHandler = (event)=>{
      event.preventDefault();
      setLoading(true);
      
      axios.get('http://localhost:3000/user/login',{
        email:email,
        password:password
      })
      .then(res=>{
        setLoading(false);
        localStorage.setItem('token',res.data.token)
        localStorage.setItem('fullName',res.data.fullName)
        localStorage.setItem('imageUrl',res.data.imageUrl)
        localStorage.setItem('imageId',res.data.imageId)
        localStorage.setItem('email',res.data.email)
        navigate('/dashboard')
        console.log(res.data)
      })
      .catch(err=>{
        setLoading(false);
        console.log(err)
      })
      
    }

    
    return(
        <div className='signup-wrapper'>
          <div className='signup-box'>
            <div className='signup-left'>
                <img alt='logo' src={require('./assets/logo.png')}/>
                <h3 className='signup-left-heading'>SS Institute</h3>
                <p className='signup-left-para'>Learn code in easy way...</p>
            </div>
            <div className='signup-right'>
                <form onSubmit={submitHandler} className='signup-form'>
                <h3>Login With Your Account</h3>
                <input onChange={e=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
                <input onChange={e=>{setPassword(e.target.value)}} type='password' value={password} placeholder='Password'/>
                <button type='submit'>{ isLoading &&  <div class="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span> </div>}Submit</button>

                  <Link className='link' to='/signup'>Create Your Account</Link>
                </form>
            </div>
          </div>
        </div>
    )
}