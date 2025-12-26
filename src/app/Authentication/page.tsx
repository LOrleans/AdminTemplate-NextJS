'use client'

import AuthInput from "@/src/components/auth/AuthInput";
import { GoogleIcon, WarningIcon } from "@/src/components/icons";
import { useState } from "react";

export default function Authentication(){
  const [error, setError] = useState(null)
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function showError(msg: any, tempoSec = 5){
    setError(msg)
    setTimeout(() => setError(null), tempoSec * 1000);
  }

  function onSubmit(){
    if(mode === 'login'){
      console.log('login')
      showError('Ocorreu um erro no login')
    } else {
      console.log('register')
      showError('Ocorreu um erro no cadastro')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" hidden md:block md:w-1/2 lg:w-2/3">
        <img 
        src="https://picsum.photos/1200/1200" 
        alt="Image of the Authentication Screen" 
        className="h-screen w-full object-cover"
      />
      </div>
      <div className="md:w-1/2 w-full m-10 lg:w-1/3">
        {/* Title */}
        <h1 
          className={`
            text-3xl font-bold mb-5 
          `}
        >
          {mode === 'login' ? 'Login with your account.' : 'Register on the platform.'}
        </h1>

        {/* Error message */}
        {error ? (
          <div className="flex items-center bg-red-400 text-white py-3 px-5 my-2 border border-red-700 rounded-lg">
            {WarningIcon}
            <span className="ml-3">{error}</span>
          </div>
        ) : false}

        {/* Inputs */}
        <AuthInput 
          label="Email" 
          type="email" 
          required 
          value={email} 
          onChange={setEmail}
        />
        <AuthInput 
          label="Password" 
          type="password" 
          required 
          value={password} 
          onChange={setPassword}
        />
        {/* Action Button */}
        <button 
          onClick={onSubmit}
          className={`w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 py-3 mt-6`}
        >
          {mode === 'login' ? 'Login' : 'Register'}
        </button>
        {/* Parting line */}
        <hr className="my-6 border-gray-300 w-full"/>

        <button 
          onClick={onSubmit}
          className={`flex flex-col justify-center items-center w-full bg-red-500 hover:bg-red-600 text-white rounded-lg px-4 py-3`}
        >
          {GoogleIcon}
          Login with Google
        </button>

        {mode === 'login' ? (
          <p className="flex mt-4">
            New here?
            <a onClick={() => setMode('register')}>
              <p className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1`}>
                Create a free account!
              </p>
            </a>
          </p>
        ) : (
          <p className="flex mt-4">
            Are you already part of our community?
            <a onClick={() => setMode('login')}>
              <p className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-1`}>
                Log in with your credentials.
              </p>
            </a>
          </p>
        )}
      </div>
    </div>
  )
}