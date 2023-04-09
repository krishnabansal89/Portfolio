import React from 'react'
import img_1 from '../img-1.png'
import img_2 from '../img-2.png'
import img_3 from '../img-3.png'
import img_4 from '../img-4.png'


export default function Portfolio() {
    return (
        <div className='mt-10 '>
            <div className="head">
                <div className='font-serif w-[40vw] ml-[30vw]  text-2xl h-[5vh]  border-b-2 border-gray-600 '>PORTFOLIO</div>
                <div className='text-2xl w-[75vw] mx-auto text-justify mt-5'> Each project is a unique piece of development</div>
            </div>
            <div className="item mt-20">
                <div className="img w-[90vw] h-52    overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-auto">
                    <img src={img_1} className='w-[95vw] h-44 ml-2' alt="" />
                </div>
                <div className="details w-[90vw] mx-auto items-center h-[30vh]">
                    <div className="name w-[30vw] mx-auto text-[1.4rem] font-bold font-mono mt-10"> PET BAIT</div>
                    <div className="desc w-[70vw] mx-auto text-center mt-4 text-gray-600 ">Pet Bait is an Blog Website that allows users to read the articles releated to technology and business. The website provides an Interface for serching Particular Topic </div>
                    <div className="tech w-[44vw] mx-auto font-xl gap-x-8 items-center mt-4 h-fit flex flex-row">
                        <img src='https://img.icons8.com/ios/256/express-js.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/officel/1x/react.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/color/256/tailwindcss.png' className='w-10 h-10 rounded-md my-4' ></img>
                    </div>
                </div>
                <div className="code flex flex-row w-[75vw] mx-auto mt-[1rem] gap-x-14">
                    <div className='w-[30vw] h-16  rounded-xl flex flex-row items-center'>
                        <a href='https://github.com/krishnabansal89/PetBait/' target='_' className="text-2xl ml-2">Code</a>
                        <p className="logo ml-2">       
                          <img src="https://img.icons8.com/3d-fluency/256/github.png" className='w-10 h-10' alt="" />
                        </p>
                    </div>
                    <div className='w-[30vw] h-16  rounded-xl flex flex-row items-center'>
                        <a href='www.petbait.me' target="_" className="text-xl font-bold text-center fonto-mono">LIVE DEMO</a>
                    </div>
                </div>
            </div>
            <div className="item mt-20">
                <div className="img w-[90vw] h-52 bg-black    overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-auto">
                    <img src={img_2} className='w-[95vw] h-44 mt-4' alt="" />
                </div>
                <div className="details w-[90vw] mx-auto items-center h-[35vh]">
                    <div className="name w-[30vw] mx-auto text-[1.4rem] font-bold font-mono mt-10 text-center"> AsQ</div>
                    <div className="desc w-[70vw] mx-auto h-fit text-center mt-4 text-gray-600 ">AsQ is the ultimate solution for anonymous communication, allowing people to send questions or messages to the link, where user can then reply through social media. Connect with your audience like never before with ReplyLink's secure and easy-to-use platform.</div>
                    <div className="tech w-[44vw] mx-auto font-xl gap-x-8 items-center mt-4 h-fit flex flex-row">
                        <img src='https://img.icons8.com/ios/256/express-js.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/officel/1x/react.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/color/256/tailwindcss.png' className='w-10 h-10 rounded-md my-4' ></img>
                    </div>
                </div>
                <div className="code flex flex-row w-[75vw] mx-auto mt-[2rem] gap-x-14">
                    <div className='w-[30vw] h-16  rounded-xl flex flex-row items-center'>
                        <a href='https://github.com/krishnabansal89/frontend' target='_' className="text-2xl ml-2">Code</a>
                        <p className="logo ml-2">       
                          <img src="https://img.icons8.com/3d-fluency/256/github.png" className='w-10 h-10' alt="" />
                        </p>
                    </div>
                    <div className='w-[30vw] h-16  rounded-xl flex flex-row items-center'>
                        <a href='https://frontend-yd5b.onrender.com/' target='_' className="text-xl font-bold text-center fonto-mono">LIVE DEMO</a>
                    </div>
                </div>
            </div>
            <div className="item mt-20">
                <div className="img w-[90vw] h-48   overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-auto">
                    <img src={img_3} className='w-[90vw] h-44 mt-4 ' alt="" />
                </div>
                <div className="details w-[90vw] mx-auto items-center h-[35vh]">
                    <div className="name w-[30vw] mx-auto text-[1.4rem] font-bold font-mono mt-10"> Chatify </div>
                    <div className="desc w-[70vw] mx-auto text-center mt-4 text-gray-600 ">Chatify is a secure and modern instant messaging app built with Django. With real-time chat, group messaging, and customizability, Chatify is the perfect app for staying connected with friends and colleagues on the web</div>
                    <div className="tech w-[44vw] mx-auto font-xl gap-x-8 items-center mt-4 h-fit flex flex-row">
                        <img src='https://img.icons8.com/windows/256/django.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/color/256/css3.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/ios-filled/1x/javascript-logo.png' className='w-10 h-10 rounded-md my-4' ></img>
                    </div>
                </div>
                <div className="code flex flex-row w-[75vw] mx-auto  gap-x-14">
                    <div className='w-[30vw] h-16 mx-auto rounded-xl flex flex-row items-center'>
                        <a href='https://github.com/krishnabansal89/Just_chat' target='_' className="text-2xl ml-2">Code</a>
                        <p className="logo ml-2">       
                          <img src="https://img.icons8.com/3d-fluency/256/github.png" className='w-10 h-10' alt="" />
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="item mt-20">
                <div className="img w-[90vw] h-52    overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mx-auto">
                    <img src={img_4} className='w-[95vw] h-44 ml-2 mt-2' alt="" />
                </div>
                <div className="details w-[90vw] mx-auto items-center h-[40vh]">
                    <div className="name w-[30vw] mx-auto text-[1.4rem] font-bold font-mono mt-10"> DailyBrief</div>
                    <div className="desc w-[70vw] mx-auto text-center mt-4 text-gray-600 ">Stay up-to-date with DailyBriefs - the ultimate news webapp, updated daily and categorized for easy browsing. Access the latest articles from various categories with just a few clicks. Stay informed with DailyBriefs - the perfect news app for the modern reader! </div>
                    <div className="tech w-[44vw] mx-auto justify-center font-xl gap-x-8 items-center mt-4 h-fit flex flex-row">
                        <img src='https://img.icons8.com/officel/1x/react.png' className='w-10 h-10 rounded-md my-4' ></img>
                        <img src='https://img.icons8.com/color/256/css3.png' className='w-10 h-10 rounded-md my-4' ></img>
                    </div>
                </div>
                <div className="code flex flex-row w-[75vw] mx-auto    gap-x-14">
                    <div className='w-[30vw] h-16 mx-auto rounded-xl flex flex-row items-center'>
                        <a href='https://github.com/krishnabansal89/Daily_News' target='_' className="text-2xl ml-2">Code</a>
                        <p className="logo ml-2">       
                          <img src="https://img.icons8.com/3d-fluency/256/github.png" className='w-10 h-10' alt="" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
