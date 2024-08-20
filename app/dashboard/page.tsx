import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from './ContentArea'

const Dashboard = () => {
  return (
    <div className='flex w-screen h-screen'>
      <Sidebar/>
      <ContentArea/>
    </div>
  )
}

export default Dashboard