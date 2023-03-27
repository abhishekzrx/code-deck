import { createContext,useState } from "react";
export const ModalContext=createContext();
function ModalProvider({childern}){
    const initialModalFields={
        show:false,
        modaltype:"",
        identifiers:{
            folderId:"",
            cardID  :"",
        }
    };
    const [isOpenModel,setIsOpenModal]=useState({...initialModalFields});
    const openModal=(value)=>{
        setIsOpenModal(value);
    }
    const closeModal=()=>{
        setIsOpenModal({...initialModalFields})
    }
    const ModalFeatures={
       isOpenModel:isOpenModel,
       openModal:openModal,
       closeModal:closeModal,
    };
    return(
        <ModalContext.Provider value={ModalFeatures}>
            {childern}
        </ModalContext.Provider>
    )
}
export default ModalProvider;
// creation phase   const ModalContext=createContext()
//providing phase
//consumming phase