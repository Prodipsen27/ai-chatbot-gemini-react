import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {

  const [extended, setExtended] =useState(false)
  const {onSent,previousPrompt,setRecentPrompt,newChat}=useContext(Context)

  const loadPrompt = async (prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <div className='sidebar min-h-[100vh] inline-flex flex-col justify-between bg-gray-200 py-[25px] px-[15px]'>
      <div className="top">
        <img src={assets.menu_icon} onClick={()=>setExtended(prev=>!prev)} className='w-[20px] ml-[10px] block cursor-pointer' alt="" />
        <div className='newChat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[15px] bg-gray-300 rounded-[50px] text-sm text-gray-400 cursor-pointer' onClick={()=>newChat()}>
            <img src={assets.plus_icon} className='w-[10px]' alt="" />
           {extended? <p>New Chat</p>:null}
        </div>
        {extended?
        <div className="recent flex flex-col animate-fadeIn">
            <p className="recent-title mt-[30px] mb-5 ">
            Recent
            </p>
            {previousPrompt.map((item)=>{
              return(
                // eslint-disable-next-line react/jsx-key
                <div className="recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-slate-400" onClick={()=>loadPrompt(item)}>
                   <img src={assets.message_icon} className='w-[25px]' alt="" />
                      <p>{item.slice(0,17)} ...</p>
             </div>
              )
              
            })}
           
        </div>
        :null}
      </div>


      <div className="bottom flex flex-col">
        <div className="bottom-items  flex items-start gap-[10px] p-[10px] 10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-slate-400">
            <img src={assets.question_icon} className='w-[20px]' alt="" />
              {extended? <p>Help</p>:null}

        </div>
        <div className="bottom-items flex items-start gap-[10px] p-[10px]  rounded-[50px] text-[#282828] cursor-pointer hover:bg-slate-400">
            <img src={assets.history_icon} className='w-[20px]' alt="" />
            {extended? <p>Activity</p>:null}

        </div>
        <div className="bottom-items flex items-start gap-[10px] p-[10px]  rounded-[50px] text-[#282828] cursor-pointer hover:bg-slate-400">
            <img src={assets.setting_icon} className='w-[20px]' alt="" />
            {extended?<p>Settings</p>:null}

        </div>
      </div>
    </div>
  )
}

export default Sidebar
