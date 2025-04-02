import React from 'react'
import '../components/style.css'
import img1 from './assets/copy1.png';
import { SideNav } from './SideNav';
import { Outlet, useNavigate } from 'react-router-dom';

export function Dashboard(){

    const navigate = useNavigate();
    const logoutHandler = ()=>{
        // localStorage.clean();
        navigate('/login');
    }
    return(
        <div className='dashboard-main-container'>
            <div className='dashboard-container'>
               <SideNav/>
               <div className='main-container'>
                <div className='top-bar'>
                   <div className='logo-container'>
                    
                    <img alt='profile-logo' className='profile-logo' src={img1} />
                    </div>
                        
                    <div className='profile-container'>
                      <h2 className='profile-name'>SS Academy</h2>
                      <button className='logout-btn' onClick={logoutHandler}>Logout</button>
                    </div>
                </div>
                 
                 <div className='outlet-area'>
                 <Outlet/>
                 </div>
                
               </div>
            </div>
        </div>
    )
}