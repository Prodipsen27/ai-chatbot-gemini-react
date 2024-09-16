import { useContext, useState, useEffect } from 'react';
import { assets } from '../../../assets/assets';
import './main.css'; // Ensure this file includes your dark mode styles
import { Context } from '../../../context/Context';
import { useDarkMode } from '../../../context/DarkModeContext';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, setRecentPrompt } = useContext(Context);
 
  const [showDevText, setShowDevText] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); // Dark mode state
  const [chatHistory, setChatHistory] = useState([]);

 

  // Load chat history from localStorage when the component mounts
  useEffect(() => {
    const savedChats = localStorage.getItem('chatHistory');
    if (savedChats) {
      setChatHistory(JSON.parse(savedChats));
    }
  }, []);

  // Save chat history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  // Helper function to handle card click




  // Update chat history when a result is received
  useEffect(() => {
    if (resultData && showResult) {
      setChatHistory((prevChats) => [
        ...prevChats,
        { type: 'bot', message: resultData },
      ]);
    }
  }, [resultData, showResult]);
  // Helper function to handle card click
  const handleCardClick = (prompt) => {
    setInput(prompt);
    setRecentPrompt(prompt);
 // Save the prompt to chat history
 setChatHistory((prevChats) => [
  ...prevChats,
  { type: 'user', message: prompt },
]);


    setTimeout(() => {
      onSent(prompt);
    }, 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) {
      
      setChatHistory((prevChats) => [
        ...prevChats,
        { type: 'user', message: input },
      ]);

      // Send the input
      onSent(input);

      // Clear the input field
      setInput('');
    }
  };
  
// 
  return (
    <div className={`flex-1 sm:min-h-screen pb-[15vh] relative animate-fadeIn max-h-fit ${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-white text-gray-800'}`}>
      <div className="nav flex items-center justify-between text-[18px] md:text-[22px] p-4 md:p-5 text-[#585858] dark:text-gray-300">
        <p className="text-lg sm:text-xl">Gemini</p>
        <div>
        <img src={assets.user_icon} className="w-8 md:w-10 rounded-full mb-1" alt="User Icon" />
        <button
        onClick={toggleDarkMode}
        className=" text-center justify-center rounded-full text-white ml-2 mt-2"
      >
        {darkMode ? <span className="material-symbols-outlined w-5 text-yellow-500 hover:text-yellow-300">
light_mode
</span> : <span className="material-symbols-outlined w-5 text-blue-400 hover:text-cyan-200">
dark_mode
</span>}
      </button>
      </div>
      </div>

      <div className="main-container max-w-[95%] md:max-w-[900px] mx-auto my-8">
      {/* <div className="main-container max-w-[95%] md:max-w-[900px] mx-auto my-8"> */}
        {/* Display Chat History */}
        
        {!showResult ? (
          <>
            <div className="greet my-10 text-[36px] sm:text-[48px] md:text-[56px] font-medium p-5 text-gray-400 dark:text-gray-200">
              <p className="text-gradient animate-pulse">Hello, Dev</p>
              <p className="text-base sm:text-lg md:text-2xl">How can I help today?</p>
            </div>

            <div className="cardList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              <div
                className="card h-[80px] sm:h-[150px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Suggest some beautiful places to see on an upcoming road trip")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Suggest some beautiful places to see on an upcoming road trip</p>
                <span className="material-symbols-outlined w-8  sm:w-8 p-1 absolute bg-blue-500 bottom-2 right-2 rounded-full text-black">explore</span>
                
              </div>
              <div
                className="card h-[80px] sm:h-[150px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Briefly summarize this concept: urban planning")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Briefly summarize this concept: urban planning</p>
                <span className="material-symbols-outlined sm:w-8 p-1 absolute bg-red-400 bottom-2 right-2 rounded-full text-black">
lightbulb
</span>
                
              </div>
              <div
                className="card h-[80px] sm:h-[150px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Brainstorm team bonding activities for our work retreat")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Brainstorm team bonding activities for our work retreat</p>
                <span className="material-symbols-outlined sm:w-8 p-1 absolute bg-yellow-300 bottom-2 right-2 rounded-full text-black">
sticky_note_2
</span>
              
              
              </div>
              <div
                className="card h-[80px] sm:h-[150px] p-4 bg-gray-100 dark:bg-gray-800 rounded-xl relative cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleCardClick("Improve the readability of the following code")}
              >
                <p className="text-[#585858] dark:text-gray-300 text-sm sm:text-lg">Improve the readability of the following code</p>
                <span className="material-symbols-outlined  sm:w-8 p-1 absolute bg-green-400 bottom-2 right-2 rounded-full text-black">
terminal
</span>
               
              </div>
            </div>
          </>
        ) : (
          <div className="result py-0 px-[5%] max-h-[70vh] overflow-y-scroll" >
            <div className="result-title my-10 flex items-center gap-5 justify-end">
            <p className={`text-sm md:text-lg g-slate-600 rounded-xl p-2 ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>{recentPrompt}</p>
  <img src={assets.user_icon} alt="" className="w-8 md:w-10 rounded-full" />
  
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
                <p dangerouslySetInnerHTML={{ __html: resultData }} className={`text-sm sm:text-lg font-light leading-[1.8] rounded-xl p-2 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`} ></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom absolute bottom-0 w-full max-w-[900px] py-0 px-5 mx-auto ">
             {/* Dark Mode Toggle Button */}
  
        {showDevText && (
              <div className="relative flex bottom-full left-0 mb-2 p-2 bg-red-500 dark:bg-red-800 text-sm text-white rounded-lg shadow-lg animate-fadeIn">
                Currently in development phase. Click again to hide this.
              </div>
            )}
          <div className="searchbox flex items-center justify-between gap-5 bg-[#f0f4f9] dark:bg-gray-800 py-[5px] px-5 rounded-[50px] max-w-fit sm:max-w-full">
            
            <form onSubmit={handleSubmit} className="flex items-center gap-4 ">
              
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none p-2 text-sm sm:text-lg dark:text-gray-200  sm:w-[690px]"
                placeholder="Type something"
              />
            </form>

            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined w-5 sm:w-4 cursor-pointer"  alt="Gallery Icon"
                onClick={() => setShowDevText(!showDevText)}>
add_a_photo
</span>
<span className="material-symbols-outlined w-5 sm:w-4 cursor-pointer" alt="Mic Icon"
                onClick={() => setShowDevText(!showDevText)}>
mic
</span>
             
              {input ? (<span className="material-symbols-outlined w-5 sm:w-6 cursor-pointer hover:text-gray-400" alt="Send Icon" onClick={() => onSent()}>
              send
              </span>
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
