import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext";

function LeftPaneHomeScreen() {
  const { openModal } = useContext(ModalContext);
  return (
    <div className="border-2 border-black h-screen bg-black flex justify-end">
      <div className="mx-auto flex flex-col items-center justify-center gap-3">
        <img src="./logo.png" alt="logo" />
        <h3 className="font-semibold text-white">Code Deck</h3>
        <h3 className="font-semibold text-white">Code. Compile. Debug</h3>
        <button
          className="w-full p-4 bg-white shadow-lg rounded-lg drop-shadow-2xl 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 font-bold duration-300"
          onClick={() =>
            openModal({
              show: true,
              modalType: 3,
              identifiers: {
                folderId: "",
                cardID: "",
              },
            })
          }
        >
          + Create New Playground
        </button>
      </div>
    </div>
  );
}

export default LeftPaneHomeScreen;