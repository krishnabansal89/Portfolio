import React from 'react'

export default function Contact() {
    return (
        <div className='w-full h-[40vh]'>
            <div className="head mt-16 w-full ">
                <div className='font-serif w-[40vw] ml-[30vw] text-center text-2xl h-[5vh]  border-b-2 border-gray-600 '>Contact</div>
            </div>
            <div className="mail w-[80vw] mx-auto text-center  h-[15vh]">
                <img src="https://img.icons8.com/color/256/apple-mail.png" className='w-14 h-14 mx-auto mt-10 ' alt="" />
                <div className="txt text-2xl mt-2 font-semibold mb-4">Mail</div>
                <a href='mailto:krishnabansal890@gmail.com'target='_' className="email text-blue-400    text-xl">krishnabansal890@gmail.com</a>
            </div>
            <div className="mail w-[80vw] mx-auto text-center  h-[20vh]">
                <img src="https://img.icons8.com/color/256/fiverr.png" className='w-14 h-14 mx-auto mt-10 ' alt="" />
                <div className="txt text-2xl mt-2 font-semibold mb-4">Fiverr</div>
                <a href='https://www.fiverr.com/knowledge899' target='_' className=" text-blue-400 text-xl">@knowledge899</a>
            </div>
            <div className="mail w-[80vw] mx-auto text-center  h-[20vh]">
                <img src="https://img.icons8.com/fluency/256/twitter.png" className='w-14 h-14 mx-auto mt-10 ' alt="" />
                <div className="txt text-2xl mt-2 font-semibold mb-4">Twitter</div>
                <a href='https://www.twitter.com/Krishna__Bansal' target='_' className=" text-blue-400 text-xl">@Krishna__Bansal</a>
            </div>
            <div className="mail w-[80vw] mx-auto text-center  h-[20vh]">
                <img src=" https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" className='w-14 h-14 mx-auto mt-10 ' alt="" />
                <div className="txt text-2xl mt-2 font-semibold mb-4">LinkedIn</div>
                <a href='https://www.linkedin.com/in/krishna-bansal-a82a68254/' target='_' className=" text-blue-400 text-xl">@Krishna Bansal</a>
            </div>
            <div className="mail w-[80vw] mx-auto text-center  h-[20vh]">
                <img src="https://img.icons8.com/3d-fluency/256/github.png" className='w-14 h-14 mx-auto mt-10 ' alt="" />
                <div className="txt text-2xl mt-2 font-semibold mb-4">Gtihub</div>
                <a href='https://www.github.com/krishnabansal89' target='_' className=" text-blue-400 text-xl">@krishnabansal890</a>
            </div>
        </div>
    )
}
