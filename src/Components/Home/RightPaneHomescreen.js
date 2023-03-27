import React from "react";
import { FcOpenedFolder } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";
import { IoTrashOutline } from "react-icons/io5";
import Card from "../Card";

function RightPaneHomeScreen() {
  return (
    <div className="border-2 border-black h-screen p-8">
      <div className="flex justify-between items-center">
        <h2>
          My <span className="font-semibold text-2xl">Playground</span>
        </h2>
        <h4 >
          <span className="font-semibold text-2xl">+</span> New Folder
        </h4>
      </div>
      <hr className="mb-12 mt-4 bg-black" />
     
        <div className="flex flex-col my-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <FcOpenedFolder size={"2em"} />
              <h3 className="font-semibold ">DSA</h3>
            </div>
            <div className="flex gap-4 items-center">
              <BiEditAlt size={"1.5em"}/>
              <IoTrashOutline
                size={"1.5em"}/>
              <h4>
                + New Playground
              </h4>
            </div>
          </div>
          <hr className="mb-12 mt-4 bg-black" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
           <Card>
                  <div className="flex gap-4 items-center justify-between">
                     <div className="flex justify-center items-center gap-4">
                     <img src="/logo-small.png" alt="small-logo" />
                         <div>
                           <p>Stack Implimentation</p>
                           <p>Language:cpp</p>
                         </div>
                     </div>
                     <div className="flex gap-4"> 
                        <IoTrashOutline/>
                        <BiEditAlt/>
                     </div>
                  </div>
           </Card> 
           <Card>
           <div className="flex gap-4 items-center justify-between">
                     <div className="flex justify-center items-center gap-4">
                     <img src="/logo-small.png" alt="small-logo" />
                         <div>
                           <p>Stack Implimentation</p>
                           <p>Language:cpp</p>
                         </div>
                     </div>
                     <div className="flex gap-4"> 
                        <IoTrashOutline/>
                        <BiEditAlt/>
                     </div>
                  </div>  
           </Card> 
          </div>
        </div>
    </div>
  );
}

export default RightPaneHomeScreen;