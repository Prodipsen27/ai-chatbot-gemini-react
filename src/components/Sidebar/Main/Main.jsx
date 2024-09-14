// import React from 'react'
import { useContext } from 'react'
import { assets } from '../../../assets/assets'
import './main.css'
import { Context } from '../../../context/Context'

const Main = () => {

const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative animate-fadeIn">

  <div className="nav flex items-center justify-between text-[22px] p-5 text-[#585858]">

    <p>Gemini</p>
    <img src={assets.user_icon} className="w-10 rounded-full" alt="User Icon" />
  </div>

  <div className="main-container max-w-[900px] m-auto">
    {!showResult ?
    <>
    <div className="greet my-[50] mx-0 text-[56px] font-medium p-5 text-gray-400">
        <p className='text-gradient animate-pulse '>Hello, Dev</p>
        <p>How can I help today?</p>
    </div>
    <div className="cardList grid grid-cols-auto-fill-180 gap-4 p-5">
        <div className="card h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200">
    <p className='text-[#585858] text-lg'>Suggest some beautiful places to see on an upcoming road trip</p>
    <img src={assets.compass_icon} className='w-8 p-1 absolute bg-gray-50 bottom-2 right-2 rounded-full animate-pulse' alt="" />
        </div>
        <div className="card h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200">
        <p className='text-[#585858] text-lg'>Briefly summarize this concept: urban planning</p>
        <img src={assets.bulb_icon} className='w-8 p-1 absolute bg-gray-50 bottom-2 right-2 rounded-full animate-pulse' alt="" />
            </div>
            <div className="card h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200">
            <p className='text-[#585858] text-lg'>Brainstorm team bonding activities for our work retreat</p>
    <img src={assets.message_icon} className='w-8 p-1 absolute bg-gray-50 bottom-2 right-2 rounded-full animate-pulse' alt="" />
            </div>
            <div className="card h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200">
            <p className='text-[#585858] text-lg'>Improve the readability of the following code</p>
    <img src={assets.code_icon} className='w-8 p-1 absolute bg-gray-50 bottom-2 right-2 rounded-full animate-pulse' alt="" />
            </div>
    </div>
    </>
  : <div className='result py-0 px-[5%] max-h-[70vh] overflow-y-scroll'>
    <div className="result-title my-10 flex items-center gap-5 right-0">
      <img src={assets.user_icon} alt="" className='w-10 rounded-full'/>
      <p>{recentPrompt}</p>
    </div>
    <div className="result-data flex items-center gap-5">
      <img  src={assets.gemini_icon} alt="" className='w-10 rounded-full' />
     {loading?
     <div className='loader w-full flex flex-col gap-2'>
     <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-tr from-[#309eec] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-4'/>
     <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-tr from-[#0b82d8] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-4'/>
     <hr className='rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-tr from-[#4bb4ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-4'/>
   </div>
    :<p dangerouslySetInnerHTML={{__html:resultData}} className='text-lg font-light leading-[1.8]'></p>
    }

    </div>
  </div>  
  }

    <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-5 m-auto">
        <div className="searchbox flex items-center justify-between gap-5 bg-[#f0f4f9] py-[10px] px-5 rounded-[50px]">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" className='flex-1 bg-transparent border-none outline-none p-2 text-lg'  placeholder='Type something'/>
            <div className='flex items-center gap-4'>
                <img src={assets.gallery_icon} className='w-6 cursor-pointer' alt="" />
                <img src={assets.mic_icon} className='w-6 cursor-pointer' alt="" />
                {input?<img onClick={()=>onSent()} src={assets.send_icon} className='w-6 cursor-pointer' alt="" />:null}
                
            </div>
        </div>
        <p className="bottom-info text-sm text-center my-4 mx-auto font-light">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
    </div>
  </div>
</div>

  )
}

export default Main
