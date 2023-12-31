import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault()
    try{
      const URL = 'http://localhost:3001/register'
      const config = {
        method: 'POST',
        headers: {'Content-Type':'Application/json'},
        body: JSON.stringify({email, password}),
      }

      let response = await fetch(URL, config)
      
      navigate('/login')
      
    }catch(err){
      console.log(err.message)
    }
  }
    
  return (
    <>
      <form 
        className="form bg-primary-subtle"  
        onSubmit={handleRegister}
      >
        <h1 className="h3">Sign up</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handlePasswordChange}
          />
        </div>

        <button className="btn btn-primary">Register</button>
      </form>
    </>
  )
}