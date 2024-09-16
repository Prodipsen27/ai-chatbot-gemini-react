import React, { useContext} from 'react'

import { Context } from '../../context/Context'
import { useDarkMode } from '../../context/DarkModeContext';


const Sidebar = () => {
  const { darkMode } = useDarkMode();
  const [extended, setExtended] = React.useState(false);

  const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar sm:min-h-screen sm:inline-flex sm:flex-col sm:justify-between py-[25px] px-[15px] hidden ${darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-800'}`}>
      <div className="top">
      
      <span className="material-symbols-outlined w-[24px] ml-[10px] block cursor-pointer hover:text-gray-400" onClick={() => setExtended(prev => !prev)}>menu
</span>
<div className=' hover:text-gray-400'>
        <div className='newChat mt-[50px] inline-flex items-center gap-[10px] py-[10px] px-[10px] rounded-[50px] text-sm cursor-pointer ' onClick={() => newChat()}>
         
        <span className="material-symbols-outlined w-[10px] ">
add
</span>
        
          {extended ? <p className='pl-2 '>New Chat</p> : null}
          </div>
        </div>
        {extended ? (
          <div className="recent flex flex-col animate-fadeIn">
            <p className="recent-title mt-[30px] mb-5">Recent</p>
            {previousPrompt.map((item) => {
              return (
                <div
                  className={`recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-[50px] cursor-pointer ${darkMode ? 'text-gray-400 hover:bg-gray-700' : 'hover:bg-gray-400'}`}
                  onClick={() => loadPrompt(item)}
                  key={item}
                >
                  <span className="material-symbols-outlined w-[25px]">
sms
</span>
            
                  <p>{item.slice(0, 17)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bottom flex flex-col">
        <div className="bottom-items flex items-start gap-[10px] p-[10px] rounded-[50px] cursor-pointer hover:text-gray-400 ">
        <span className="material-symbols-outlined w-[20px]">help</span>
       
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-items flex items-start gap-[10px] p-[10px] rounded-[50px] cursor-pointer hover:text-gray-400">
       
<span className="material-symbols-outlined w-[20px]">
history
</span>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-items flex items-start gap-[10px] p-[10px] rounded-[50px] cursor-pointer hover:text-gray-400">
        <span className="material-symbols-outlined w-[20px]">
settings
</span>
         
          {extended ? <p>Settings</p> : null}
        </div>
      </div>

   
    </div>
  );
};

export default Sidebar;
