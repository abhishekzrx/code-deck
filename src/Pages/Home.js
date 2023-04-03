import React from 'react'
import { LeftPaneHomeScreen } from '../Components/Home/LeftPaneHomeScreen';
import { RightPaneHomeScreen } from '../Components/Home/RightPaneHomeScreen';
import { useContext } from 'react';
import { ModalContext } from '../Context/ModalContext';
import Modal from '../Components/Modal';
export const Home = () => {
  const {isOpenModal}=useContext(ModalContext)
  return (
    <div className="grid grid-cols-2">
         <div className=''>
            <LeftPaneHomeScreen/>      
         </div>
         <div className=''>
             <RightPaneHomeScreen/>
         </div>
         {isOpenModal.show && <Modal/>}
    </div>
  )
}
export default Home;