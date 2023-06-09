import React from "react";

function Navbar({ isFullScreen }) {
  return (
    <div
      className={`relative ${
        isFullScreen ? "h-0" : "h-16"
      } bg-black font-semibold flex justify-center items-center gap-4`}
    >
      {isFullScreen ? null : (
        <img className="w-16" src="/logo-small.png" alt="logo" />
      )}
      <div className="text-white text-4xl">Code Deck</div>
    </div>
  );
}

export default Navbar;