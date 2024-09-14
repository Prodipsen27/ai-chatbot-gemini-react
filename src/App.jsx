import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Sidebar/Main/Main'
const App = () => {
  return (
    <>
    <div className='min-h-screen flex w-screen'>
      <Sidebar/>
      <Main/>
      
    </div>
    </>
    
  )
}

export default App
