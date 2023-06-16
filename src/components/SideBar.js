import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)


  return (
    !isMenuOpen ? null :
      <div className=" px-4 gap-12 w-48 mt-2 shadow-md" style={{ scrollbarWidth: 'none' }}>
        <ul className='border-b-slate-500 border-b p-4'>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
        <ul className='border-b-slate-500 border-b p-4'>
          <li>Library</li>
          <li>History</li>
          <li>Your Videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
        </ul>
        <div className='pt-5 border-b-slate-500 border-b p-4'>
          <h1 className='text-l font-bold pb-2'>Subscriptions</h1>
          <ul >
            <li>Mohanlal</li>
            <li>Mammootty</li>
            <li>India</li>
            <li>Eminem</li>
          </ul>
        </div>
      </div>
  );
};

export default SideBar;
