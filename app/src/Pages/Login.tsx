import React,{ useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt";

import axios from "axios";

interface token{
    iat: number,
    role: string,
    username: string
}
const Login=()=> {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("");

    // const [decodedToken,setDecodedToken] = useState<token>()
    let decodedToken:token|null;
    const navigate = useNavigate();
    
    
    const login=(e:any)=>{
        e.preventDefault();
        
        setErrorMessage("");
        axios.post("http://localhost:3001/api/v1/login",{
            username:username,
            password:password
        }).then(res=>{
            console.log(res)
            if(res.statusText==="OK"){
                if(res.data.user){
                    decodedToken = decodeToken(res.data.user)
                    localStorage.setItem('token', res.data.user)
                    if(decodedToken?.role==="user"){
                        navigate("/dashboard",{
                            state:{
                                username:decodedToken?.username
                            }
                        })
                    }else if(decodedToken?.role==="admin"){
                        navigate("/admindashboard",{
                            state:{
                                username:decodedToken?.username
                            }
                        })
                    } 
                    }else{
                    setUsername("");
                    setPassword("");
                    setErrorMessage(res.data.message)
                }
                
                
            }
            // console.log(res)
        })
    }

  return (
    <div className='flex justify-center h-screen items-center'>
        <form className='flex flex-col font-mono rounded-2xl shadow-2xl gap-9 p-7'>
            <div className='flex justify-center py-1'>
                <h1 className=' text-3xl  font-bold'>LOGIN FORM</h1>
            </div>
            <div className='flex py-1'>
                <label className='text-lg'>USERNAME :</label>
                <input className='border-2 border-slate-400 rounded-md mx-2 px-1' value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" />
            </div>
            <div className='flex py-1'>
                <label className='text-lg'>PASSWORD :</label>
                <input className='border-2 border-slate-400 rounded-md mx-2 px-1' value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" />
            </div>
            <div className='flex justify-center'>
                <p className=' text-red-500'>{errorMessage}</p>
                
            </div>
            <div className='flex justify-end '>
                <button className=' bg-blue-200 hover:bg-blue-400 rounded-md px-3 py-1' onClick={(e)=>login(e)}>login</button>
                
            </div>
            <Link to="/" className=' text-xs text-blue-700 underline'>Register user</Link>
        </form>
        
    </div>
  )
}

export default Login;