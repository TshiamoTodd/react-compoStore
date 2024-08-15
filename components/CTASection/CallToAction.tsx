import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex flex-col mx-16 items-center mt-[120px] gap-6'>
        <h2 className='font-bold text-2xl text-center'>
            Manage and Create your react Components
        </h2>
        <p className='text-center text-[15px] w-[510px] max-sm:w-full text-slate-500'>
            React CompoStore is a platform for developers to manage and create react components. 
            It is a platform where developers can share their components and use components shared by others.
            Save time by reusing your favorite components. Store them in a centralized database and 
            create new components with ease.
        </p>
        <button className='block bg-sky-500 rounded-md px-9 py-3 text-sm font-medium text-white hover:bg-sky-600' type='button'>
            {'Let\'s Get Started'}
        </button>
    </div>
  )
}

export default CallToAction