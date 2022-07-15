import React from 'react'
import { useLocation } from 'react-router-dom'

type LocationState = {
    state:{
        username: string;
    };
  }

export default function Dashboard() {
    const location = useLocation() as LocationState;

  return (
    <div>
        Welcome to dashboard,{location.state.username}
    </div>
  )
}
