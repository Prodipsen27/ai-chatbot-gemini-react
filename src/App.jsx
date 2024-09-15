import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Sidebar/Main/Main';
import { DarkModeProvider } from './context/DarkModeContext'; // Adjust the path as needed

const App = () => {
  return (
    <DarkModeProvider>
      <div className='min-h-screen flex w-screen'>
        <Sidebar />
        <Main />
      </div>
    </DarkModeProvider>
  );
};

export default App;
