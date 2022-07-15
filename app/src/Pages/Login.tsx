import React from 'react'
import { Link } from 'react-router-dom';

const Login=()=> {
  return (
    <div className='flex justify-center h-screen items-center'>
        <form className='flex flex-col font-mono rounded-2xl shadow-2xl gap-12 p-7'>
            <div className='flex justify-center py-1'>
                <h1 className=' text-3xl  font-bold'>LOGIN FORM</h1>
            </div>
            <div className='flex py-1'>
                <label className='text-lg'>USERNAME :</label>
                <input className='border-2 border-slate-400 rounded-md mx-2 px-1' type="text" />
            </div>
            <div className='flex py-1'>
                <label className='text-lg'>PASSWORD :</label>
                <input className='border-2 border-slate-400 rounded-md mx-2 px-1' type="password" />
            </div>
            <div className='flex justify-end '>
                <button className=' bg-blue-200 hover:bg-blue-400 rounded-md px-3 py-1'>login</button>
                
            </div>
            <Link to="/" className=' text-xs text-blue-700 underline'>Register user</Link>
        </form>
        
    </div>
  )
}

export default Login;