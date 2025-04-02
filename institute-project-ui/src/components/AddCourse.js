import React, { useState } from 'react'
import '../components/style.css'
import axios from 'axios';

export function AddCourse(){
    const [course,setCourse] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);
    const [startingDate,setStartingDate] = useState('')
    const [endDate,setEndDate] = useState('');
    const [image,setImage] = useState(null);

    const [imageUrl,setImageUrl] = useState('')
    const [isLoading,setIsLoading] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('course',course)
        formData.append('price',price)
        formData.append('description',description)
        formData.append('startingDate',startingDate)
        formData.append('endDate',endDate)
        formData.append('image',image)

        axios.post('http://logalhost:4200/course/add-course',formData,{
            headers:{
                Authorization:'Bearer'+localStorage.getItem('token')
            }
        })
        .then(res=>{
            console.log(res.data)
        })
        console.log(course, price,description,startingDate,endDate,image)
    }

    const fileHandler = (e)=>{
        setImage(e.target.files[0])
        setImageUrl(URL.createObjectURL(e.target.files[0]))
    }
    return(
        <div>
            <form onSubmit={submitHandler} className="addcourse-form">
                <h2>Add New Course</h2>
              <input onChange={e=>{setCourse(e.target.value)}} type='text' placeholder='Course Name'/>
              <input onChange={e=>{setDescription(e.target.value)}} type='text' placeholder='Description'/>
              <input onChange={e=>{setPrice(e.target.value)}} type='number' placeholder='Price'/>
              <input onChange={e=>{setStartingDate(e.target.value)}} type='text' placeholder='Starting Date(DD-MM-YY)'/>
              <input onChange={e=>{setEndDate(e.target.value)}} type='text' placeholder='End Date(DD-MM-YY)'/>
              <input onChange={fileHandler} type='file'/>
              <img className='your-logo' alt='Uploaded preview' src={imageUrl}/>
              <button  type='submit'className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}