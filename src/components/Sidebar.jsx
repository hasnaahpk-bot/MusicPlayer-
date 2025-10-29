// import React from 'react'
// import Home from "../assets/home.png"
// import Search from "../assets/search.png"
// import Stack from "../assets/stack.png"
// import Arrow from "../assets/arrow.png"
// import Plus from "../assets/plus.png"
// import { useNavigate } from 'react-router-dom'



// const Sidebar = () => {

//    const navigate = useNavigate();


//   return (
//     <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
//       <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
//         <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
//             <img className='w-6' src={Home} alt="" />
//             <p className='font-bold'>Home</p>
//         </div>

//         <div className='flex items-center gap-3 pl-8 cursor-pointer'>
//             <img className='w-6' src={Search} alt="" />
//             <p className='font-bold'>Search</p>
//         </div>
//       </div>

//       <div className='bg-[#121212] h-[85] rounded '>
//         <div className='p-4 flex items-center justify-between'>
         
//           <div className='flex items-center gap-3'>
//             <img src={Stack} alt="" />
//             <p className='font-semibold'>Your Library</p>
//           </div>

//           <div className='flex items-center gap-3'>
//             <img className='w-5' src={Arrow} alt="" />
//             <img className='w-5' src={Plus} alt="" />
//           </div>

//         </div>

//         <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
//             <h1>Create your first playists</h1>
//             <p className='font-light'>its easy we will help you</p>
//             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Create Playists</button>
//         </div>

//         <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
//             <h1>Find some podcasts to follow</h1>
//             <p className='font-light'>we will keep you update on new episodes</p>
//             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 '>Browse podcasts</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar


import React, { useState } from 'react';
import Home from "../assets/home.png";
import Search from "../assets/search.png";
import Stack from "../assets/stack.png";
import Arrow from "../assets/arrow.png";
import Plus from "../assets/plus.png";
import Menu from "../assets/menu_icon.svg"; // Add a hamburger icon in your assets
import Close from "../assets/cross_icon.svg"; // Add a close icon in your assets
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false); // toggle sidebar on mobile

  return (
    <>
      {/* Mobile Navbar (top bar) */}
      <div className="lg:hidden flex justify-start bg-[#121212] p-4 text-white">
        <img
          src={open ? Close : Menu}
          alt="menu"
          className="w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] sm:w-[60%] bg-[#121212] text-white flex flex-col p-4 z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-[25%] lg:flex`}
      >
        {/* Home / Search */}
        <div className="bg-[#1e1e1e] rounded p-3 flex flex-col gap-4">
          <div
            onClick={() => {
              navigate('/');
              setOpen(false);
            }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img className="w-6" src={Home} alt="" />
            <p className="font-bold">Home</p>
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-6" src={Search} alt="" />
            <p className="font-bold">Search</p>
          </div>
        </div>

        {/* Library Section */}
        <div className="bg-[#1e1e1e] mt-4 rounded flex-1 overflow-y-auto">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={Stack} alt="" />
              <p className="font-semibold">Your Library</p>
            </div>

            <div className="flex items-center gap-3">
              <img className="w-5" src={Arrow} alt="" />
              <img className="w-5" src={Plus} alt="" />
            </div>
          </div>

          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">It’s easy, we’ll help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create Playlist
            </button>
          </div>

          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Find some podcasts to follow</h1>
            <p className="font-light">We’ll keep you updated on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>

      {/* Overlay (dim background when sidebar open on mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;

