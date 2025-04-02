import React, { useState } from 'react'
import axios from 'axios';
import '../components/style.css'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export function Signup(){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [image , setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setLoading] = useState(false)

    const navigate = useNavigate();

    const submitHandler = (event)=>{
      event.preventDefault();
      setLoading(true);

      const formData = new FormData()
      formData.append('fullName',fullName)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('phone', phone)
      formData.append('image',image)
      axios.post('http://localhost:3000/user/signup',formData)
      .then(res=>{
        setLoading(false);
        toast.success('your account is created...')
         navigate('/login')
        console.log(res)
      })
      .catch(err=>{
        setLoading(false);
        toast.error('something is wrong...')
        console.log(err)
      })
      // console.log(fullName,email,password,phone,image);
    }

    const fileHandler = (e)=>{
      setImage(e.target.files[0])
      setImageUrl(URL.createObjectURL(e.target.files[0]))
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
                <h3>Create Your Account</h3>
                <input onChange={e=>{setFullName(e.target.value)}} type='text' placeholder='Institute Full Name'/>
                <input onChange={e=>{setEmail(e.target.value)}} type='email' placeholder='Email'/>
                <input onChange={e=>{setPassword(e.target.value)}} type='password' value={password} placeholder='Password'/>
                <input onChange={e=>{setPhone(e.target.value)}} type='text' placeholder='Phone'/>
                <input onChange={fileHandler} type='file'/>
                <img className='your-logo' alt='Uploaded preview' src={imageUrl} style={{ width: '200px', height: 'auto' }}/>
                <button type='submit'>{isLoading &&  <div class="spinner-border text-danger" role="status">
                     <span className="visually-hidden">Loading...</span> </div>}Submit</button>
                       <Link className='link' to='/login'>Create With Your account</Link>
                </form>
            </div>
          </div>
        </div>
    )
}