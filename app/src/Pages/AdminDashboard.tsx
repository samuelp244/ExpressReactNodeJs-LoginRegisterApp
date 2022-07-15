import React from 'react'
import { useLocation } from 'react-router-dom'
import { LocationState } from './dashboard';

export default function AdminDashboard() {
  const location = useLocation() as LocationState;
  return (
    <div className='flex flex-col p-5'>
        <div className=' flex justify-center'>
          <h1 className=' text-4xl font-bold'>Admin Page</h1>
        </div>
        <div className='flex justify-center pt-5'>
          <h1>welcome admin, {location.state.username}</h1>
        </div>
    </div>
  )
}
