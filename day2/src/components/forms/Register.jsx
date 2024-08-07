import React from 'react'

const Register = () => {
  return (
    <div className='flex flex-1 flex-col min-h-full justify-center px-6 py-12 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>

       <h1 className=' h-12  text-4xl font-sans font-bold text-center'>Indieskool</h1>
      <h2 className='text-2xl text-center mt-10 font-semibold font-sans leading-9 tracking-tight text-gray-900 '>Sign up Now</h2>
    </div>
 <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method='POST' className='space-y-6'>

        <div>
            <label htmlFor="email" className='block text-sm font-medium leading-6 text-gray-900'> Email address</label>

            <div className='mt-2'>

               <input type="email" id='email'  required autoComplete='email'  className='block text-sm font-medium text-orange-900 shadow-sm ring-1 ring inset right-gray-400 focus:ring-2 sm:text-sm focus:ring-indigo-600  sm:leading-6'/> 
            </div>
        </div>
     <div>
        <div className=''></div>
     </div>
    </form>
 </div>


    </div>
  )
}

export default Register