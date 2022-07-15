import React from 'react'
import { useLocation } from 'react-router-dom'

export type LocationState = {
    state:{
        username: string;
    };
  }

export default function Dashboard() {
    const location = useLocation() as LocationState;

  return (
    
    <div className='flex flex-col p-5'>
      <div className=' flex justify-center'>
        <h1 className=' text-4xl font-bold'>User Page</h1>
      </div>
      <div className='flex justify-center'>
        <h1>Welcome to dashboard,{location.state.username}</h1>
      </div>
  </div>
  )
}
