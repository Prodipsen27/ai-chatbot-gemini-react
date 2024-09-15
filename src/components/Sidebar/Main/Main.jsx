import { useContext, useState } from 'react';
import { assets } from '../../../assets/assets';
import './main.css'; // Ensure this file includes your dark mode styles
import { Context } from '../../../context/Context';
import { useDarkMode } from '../../../context/DarkModeContext';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, setRecentPrompt } = useContext(Context);
 
  const [showDevText, setShowDevText] = useState(false);
  // const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Helper function to handle card click
  const handleCardClick = (prompt) => {
    setInput(prompt);
    setRecentPrompt(prompt);

    setTimeout(() => {
      onSent(prompt);
    }, 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      onSent();
      setInput('');
    }
  };
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex-1 sm:min-h-screen pb-[15vh] relative animate-fadeIn max-h-fit ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'}`}>
      <div className="nav flex items-center justify-between text-[18px] md:text-[22px] p-4 md:p-5 text-[#585858] dark:text-gray-300">
        <p className="text-lg sm:text-xl">Gemini</p>
        <img src={assets.user_icon} className="w-8 md:w-10 rounded-full" alt="User Icon" />
     
      </div>

      <div className="main-container max-w-[95%] md:max-w-[900px] mx-auto">
        {!showResult ? (
          <>
            <div className="greet my-10 text-[36px] sm:text-[48px] md:text-[56px] font-medium p-5 text-gray-400 dark:text-gray-200">
              <p className="text-gradient animate-pulse">Hello, Dev</p>
              <p className="text-base sm:text-lg md:text-2xl">How can I help today?</p>
            </div>

            <div className="cardList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              <div
                className="card h-[70px] sm:h-[200px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Suggest some beautiful places to see on an upcoming road trip")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Suggest some beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} className="w-6 sm:w-8 p-1 absolute bg-blue-500 bottom-2 right-2 rounded-full animate-pulse" alt="" />
              </div>
              <div
                className="card h-[70px] sm:h-[200px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Briefly summarize this concept: urban planning")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} className="w-6 sm:w-8 p-1 absolute bg-red-400 bottom-2 right-2 rounded-full animate-pulse" alt="" />
              </div>
              <div
                className="card h-[70px] sm:h-[200px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} className="w-6 sm:w-8 p-1 absolute bg-yellow-300 bottom-2 right-2 rounded-full animate-pulse" alt="" />
              </div>
              <div
                className="card h-[70px] sm:h-[200px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Improve the readability of the following code")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Improve the readability of the following code</p>
                <img src={assets.code_icon} className="w-6 sm:w-8 p-1 absolute bg-green-400 bottom-2 right-2 rounded-full animate-pulse" alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll">
            <div className="result-title my-10 flex items-center gap-5">
              <img src={assets.user_icon} alt="" className="w-8 md:w-10 rounded-full" />
              <p className="text-sm md:text-lg">{recentPrompt}</p>
            </div>

            <div className="result-data flex items-center gap-5">
              <img src={assets.gemini_icon} alt="" className="w-8 md:w-10 rounded-full" />
              {loading ? (
                <div className="loader w-full flex flex-col gap-2">
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-tr from-[#309eec] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-4" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-tr from-[#0b82d8] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-4" />
                  <hr className="rounded-[4px] border-none bg-[#f6f7f8] bg-gradient-to-tr from-[#4bb4ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-4" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }} className="text-sm sm:text-lg font-light leading-[1.8]"></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-5 mx-auto ">
             {/* Dark Mode Toggle Button */}
   <button
        onClick={toggleDarkMode}
        className="mt-0 px-2 py-2 bg-gray-400 rounded-full text-white hover:bg-gray-500 text-sm"
      >
        {darkMode ? 'L' : 'D'}
      </button>
        {showDevText && (
              <div className="relative flex bottom-full left-0 mb-2 p-2 bg-red-500 dark:bg-red-800 text-sm text-white rounded-lg shadow-lg animate-fadeIn">
                Currently in development phase
              </div>
            )}
          <div className="searchbox flex items-center justify-between gap-5 bg-[#f0f4f9] dark:bg-[#2d2d2d] py-[5px] px-5 rounded-[50px]">
            
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
              
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none p-2 text-sm sm:text-lg dark:text-gray-200"
                placeholder="Type something"
              />
            </form>

            <div className="flex items-center gap-4">
              <img
                src={assets.gallery_icon}
                className="w-5 sm:w-6 cursor-pointer"
                alt="Gallery Icon"
                onClick={() => setShowDevText(!showDevText)}
              />
              <img
                src={assets.mic_icon}
                className="w-5 sm:w-6 cursor-pointer"
                alt="Mic Icon"
                onClick={() => setShowDevText(!showDevText)}
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  className="w-5 sm:w-6 cursor-pointer"
                  alt="Send Icon"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info text-xs sm:text-sm text-center my-4 mx-auto font-light dark:text-gray-400">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
