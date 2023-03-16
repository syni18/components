import React from 'react'
import ContentForm from './ContentForm'
import ContentHead from './ContentHead'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Lobby() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[1240px] h-[650px] mt-2 border rounded">
        <div className="h-full">
          <Sidebar /> 
        </div>
        <div className="bg-[#F8F8FF] flex-1 relative">
          <Header />
          <div className="flex">
            <ContentHead />
            <ContentForm />
          </div>
          <div className=''>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
