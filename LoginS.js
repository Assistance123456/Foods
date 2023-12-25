import React, { useState } from 'react'
import './LoginS.css';


 function FormvalidS(){ 
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState(false)
    const[phone,setPhone]=useState(false)

    function login(e){
        // alert("Ram")
        if(name.length<5||password.length<6){
            alert("Invalid Username or Password")
        }else{
            alert("Login Successfull")
        }
        e.preventDefault("")
    }

    function userhandler(e){
        const item = e.target.value
        if(item.length<5){
            setEmail(true)
        }else{
            setEmail(false)
        }
        setName(item)
    }

    function userpassword(e){
        const item = e.target.value
        if(item.length<6){
            setPhone(true)
        }else{
            setPhone(false)
        }
        setPassword(item)

    }


  return (
    <div className ="a">
        <h1><u>Login</u></h1>
        <form onSubmit={login}>
            <input type="text" placeholder='Enter Your Id' onChange={userhandler} />
            <div>{email?<span>User Not Valid</span>:""}</div>
            <br /><br />
            <input type="password" placeholder='Enter Your Password' onChange={userpassword} />
            <div>{phone?<span>Password Not Valid</span>:"" }</div>
            <br /><br />
            <button type="submit">Login</button>


      
        </form>
    </div>
  )
}
export default FormvalidS