import React from 'react'
import logo from "../logo.png"

export default function Navbar() {
  return (
    <div className='w-[100vw] overflow-x-hidden '>
        <div className=" md:hidden sticky overflow-y-visible w-[200vw]  flex top-0 ">
            <div className='relative w-[100vw] h-[10vh] '>
              <div className="image float-left"><img src={logo} alt="" className='w-56 h-10 mt-5 ml-4'/></div>
              <div className="side float-right "><img className='w-10 h-10 mt-5 mr-4 '  src="https://cdn-icons-png.flaticon.com/512/56/56763.png" alt="" onClick={()=>{
                document.getElementById('first').style.transform = "translate(-100vw , 0px)"
              }}/></div>
            </div>
            <ul className="flex flex-col relative space-y-10 text-3xl bg-blue-200 w-[100vw] h-[100vh]  overflow-x-hidden font-['Ubuntu'] transition-all duration-300 bg-white z-20"  id='first'>
              <li  className="mr-10 mt-4  w-full  float-right h-10 " > <img src="https://cdn-icons-png.flaticon.com/512/37/37752.png" className='w-10 h-10 mr-5  float-right' alt="" onClick={()=>{
                document.getElementById('first').style.transform = "translate(100vw , 0px)"
              }} /></li>
                <li className="p-2 px-4 ml-10  w-[40vw]  h-12 my-3">Home</li>
                <li className="p-2 px-4 ml-10  w-[40vw] h-12 my-3">About</li>
                <li className="p-2 px-4 ml-10  w-[40vw] h-12 my-3">Contact</li>
                <li className="p-2 px-4 ml-10  w-[40vw] h-12 my-3">Projects</li>
                <li className="p-2 px-4 ml-10  w-[40vw] h-12 my-3">Blog</li>
            </ul>
        </div>
    </div>
  )
}
