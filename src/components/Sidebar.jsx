import React from 'react';

export default function Sidebar({ onIconClick }) {
  return (
    <div className="flex flex-col justify-start items-center gap-10 w-12 h-full py-8">
      <div onClick={() => onIconClick('home')}>
        <i className="fa-solid fa-house fa-md" style={{ color: "#D6D6D6" }}></i>
      </div>
      <div onClick={() => onIconClick('conversations')}>
        <i className="fa-solid fa-message fa-md" style={{ color: "#D6D6D6" }}></i>
      </div>
      <div onClick={() => onIconClick('utilisateurs')}>
        <i className="fa-solid fa-user-group fa-md" style={{ color: "#D6D6D6" }}></i>
      </div>
      <div className="py-1.5 px-2 rounded-md bg-[rgb(255,255,255)] bg-opacity-10 relative">
        <div className="absolute top-1 right-0.5 w-1.5 h-1.5 bg-[#FF00A6] rounded-full"></div>
        <i className="fa-solid fa-video fa-md" style={{ color: "#FF00A6" }}></i>
      </div>
      <div className="mt-48" onClick={() => onIconClick('settings')}>
        <i className="fa-solid fa-gear fa-lg" style={{ color: "#D6D6D6" }}></i>
      </div>
    </div>
  );
}
