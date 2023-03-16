import React from 'react'
import {TbTicket} from 'react-icons/tb'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineQuestionCircle} from 'react-icons/ai'

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white py-1">
      <h2 className="ml-16">Healthwork AI</h2>
      <div className="mr-5 flex justify-around items-center">
        <input
          type="text"
          placeholder="search..."
          className="border border-black px-2 py-1 mr-7 rounded focus:outline-none"
        />
        <div className="flex item-center justify-around w-[150px]">
          <TbTicket size={24} />
          <IoMdNotificationsOutline size={24} />
          <AiOutlineQuestionCircle size={24}/>
        </div>
      </div>
    </div>
  );
}
