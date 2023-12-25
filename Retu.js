import React from 'react'
import { NavLink } from 'react-router-dom'

const Retu = () => {
  return (
   <>
   <img src='https://i.imgur.com/mLxgS34.png'/>
   <h1 ><NavLink style={{cursor:'pointer',color:'red',textDecoration:'none',marginTop:'-3rem'}} to ='/CartFood'>Return to home page</NavLink></h1>
   </>
  )
}

export default Retu