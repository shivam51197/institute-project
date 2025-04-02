import React from 'react'
import '../components/style.css'
import img2 from './assets/copy1.png';
import { Link, useLocation } from 'react-router-dom';

export function SideNav(){

const location = useLocation();

    return(
        <div className='nav-container'>
          <div className='brand-container'>
            <img  alt='brand-logo' className='profile-logo'src={img2}/>
             <div>
             <h4 className='brand-name'>SS Academy App</h4>
             <p className='brand-slogan'>Manage App in easy way</p>
             </div>
          </div>
          <div className='menu-container'>
            <Link to='/dashboard/home' className={location.pathname === '/dashboard/home'?'menu-active-link':'menu-link'}><i className="bi bi-house-door-fill"></i>Home</Link>
            <Link to='/dashboard/courses' className={location.pathname === '/dashboard/courses'?'menu-active-link':'menu-link'}><i className="bi bi-book-fill"></i>All Course</Link>
            <Link to='/dashboard/add-course' className={location.pathname === '/dashboard/add-course'?'menu-active-link':'menu-link'}><i className="bi bi-plus-square-fill"></i>Add Course</Link>
            <Link to='/dashboard/students' className={location.pathname === '/dashboard/students'?'menu-active-link':'menu-link'}><i className="bi bi-people-fill"></i>Add Student</Link>
            <Link to='/dashboard/add-student' className={location.pathname === '/dashboard/add-student'?'menu-active-link':'menu-link'}><i className="bi bi-plus-square-fill"></i>All Student</Link>
            <Link to='/dashboard/collect-fee' className={location.pathname === '/dashboard/collect-fee'?'menu-active-link':'menu-link'}><i className="bi bi-wallet-fill"></i>Collect Fee</Link>
            <Link to='/dashboard/payment-history' className={location.pathname === '/dashboard/payment-history'?'menu-active-link':'menu-link'}><i className="bi bi-collection-fill"></i>Payment History</Link>
          </div>
          <div className='contact-us'>
           <p><i class="bi bi-person-vcard"></i>Contact developer</p>
           <p><i class="bi bi-telephone-fill"></i>9876543210</p>
          </div>
        </div>
    )
}
