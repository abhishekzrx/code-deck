import React from 'react'
import LeftPaneHomeScreen from '../Home/LeftPaneHomeScreen'
import RightPaneHomescreen from '../Home/RightPaneHomescreen'
const Home = () => {
  console.log("from home")
  return (
    <div className='grid grid-cols-2'>
        <div className=''>
           <LeftPaneHomeScreen/>
        </div>      
        <div className=''>
           <RightPaneHomescreen/>
        </div>      
    </div>
  )
}

export default Home
