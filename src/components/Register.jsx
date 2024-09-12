import React from 'react'
import { useState } from 'react'
import getContractInstance from '../contract';

const Register = () => {
  const [username , setUserName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('')
  const [loading,setLoading] = useState(false);
  
  const registerUser = async () => {
    try {
      setLoading(true);
      const { userAuthContract, web3 } = await getContractInstance();
      const accounts = await web3.eth.getAccounts();
      
      const gasEstimate = await userAuthContract.methods
        .registerUser(username, email, password)
        .estimateGas({ from: accounts[0] });
      
      await userAuthContract.methods.registerUser(username, email, password).send({
        from: accounts[0],
        gas: gasEstimate
      });
      
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleFormSubmit = (e) =>{
    e.preventDefault();
  }
  return (

  <section className='h-full'>
    <div className="flex flex-1 flex-col justify-center  px-6 py-12 lg:px-8" >
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center uppercase text-2xl text-black font-bold leading-9 tracking-tight">
        Get Register With the CryptoRaise
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleFormSubmit} className="space-y-6">
      <div>
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            UserName
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="username"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            onClick={registerUser}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Register
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </div>
</section>  

)
}


export default Register
