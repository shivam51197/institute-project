// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Signup } from './components/Signup'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Home} from './components/Home'
import { Courses } from './components/Courses'
import { AddCourse } from './components/AddCourse'
import { Students } from './components/Students'
import { AddStudent } from './components/AddStudent'
import { CollectFee } from './components/CollectFee'
import { PaymentHistory } from './components/PaymentHistory'

 const App=()=>{
  const myRouter = createBrowserRouter([
    {path:'',Component:Login},
    {path:'login', Component:Login},
    {path:'signup', Component:Signup},
    {path:'dashboard', Component:Dashboard, children:[
      {path:'',Component:Home},
      {path:'home',Component:Home},
      {path:'courses',Component:Courses},
      {path:'add-course',Component:AddCourse},
      {path:'students',Component:Students},
      {path:'add-student',Component:AddStudent},
      {path:'collect-fee',Component:CollectFee},
      {path:'payment-history',Component:PaymentHistory}

    ]}
  
  
  ])
  return(
    <div>
      
      <RouterProvider router={myRouter}/>
      <ToastContainer />

    </div>
  )
}

export default App