import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LocationState } from './dashboard';


const authAxios = axios.create({
  baseURL : "http://localhost:3001/api/v1",
  headers:{
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
})

export default function AdminDashboard() {
  const location = useLocation() as LocationState;
  const [message,setmessage] = useState(""); 
    
    async function getMessage(){
      await authAxios.get(`/message`,).then(res=>{
        setmessage(res.data.quote.message)
      })
    }
    useEffect(()=>{
      const token = localStorage.getItem('token');
      if(token){
        getMessage()
      }
      
    })
    
  return (
    <div className='flex flex-col p-5'>
        <div className=' flex justify-center'>
          <h1 className=' text-4xl font-bold'>Admin Page</h1>
        </div>
        <div className='flex justify-center pt-5'>
          <div className='flex flex-col gap-3'>
            <h1>welcome admin,  {location.state.username}</h1>
              <p>{message}</p>
          </div>
         
        </div>
    </div>
  )
}
