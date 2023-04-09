import React from 'react'

export default function Feature() {
  return (
    <div>
    <div className='w-full h-[40vh] mt-10 text-center'>
        <div className="head font-serif w-[40vw] ml-[30vw]  text-2xl h-[5vh]  border-b-2 border-gray-600  ">
        Tech Stack
        </div>
        <div className="icons grid grid-cols-4 gap-x-4 w-[80vw] mx-auto ml-14 mt-5">
            <img src='https://img.icons8.com/color/256/html-5.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/color/256/css3.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/ios-filled/1x/javascript-logo.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/officel/1x/react.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/fluency/1x/node-js.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/ios/256/express-js.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/windows/256/django.png' className='w-10 h-10 rounded-md my-4' ></img>
            <img src='https://img.icons8.com/color/256/tailwindcss.png' className='w-10 h-10 rounded-md my-4' ></img>
        </div>
    </div>
    <div className='about '>
        <div className='font-serif w-[40vw] ml-[30vw] text-center text-2xl h-[5vh]  border-b-2 border-gray-600 '>About Me</div>
        <div className="entry  w-[80vw] text-2xl mx-auto text-center h-hit  mt-5 text-gray-800">
        Meet the Web Developer Behind the Magic
        </div>
        <div className="txt text-gray-600 w-[75vw] mx-auto mt-4 text-justify">
        As a front-end web developer with full-stack expertise, I am Krishna Bansal, living in India. My portfolio showcases my passion for crafting seamless user experiences and expertise in web development.Explore my work and see how I can help bring your vision to life.
        </div>
    </div>
    </div>
  )
}
