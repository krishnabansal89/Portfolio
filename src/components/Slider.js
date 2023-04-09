import React from 'react'
import photo from '../photo.jpg'
 
export default function Slider() {
  return (
    <div className="w-full h-[90vh] -z-10 -mt-[90vh] relative">
      <div className="image w-full h-[50vh] pt-5 ">
        <div className="circle w-80 h-80 mx-auto mt-10 rounded-full overflow-clip drop-shadow-2xl  bg-white">
          <img src={photo} alt=""  className='w-full h-full '/>
        </div>
        <div className="intro w-[100vw] mx-auto h-[15vh] mt-10  flex flex-row  ">
          <div className="small text-[2rem] w-[50vw] ml-[28vw] font-mono text-center">Full-Stack Web Developer </div>
          <img src="https://www.citypng.com/public/uploads/preview/waving-emoji-hand-hello-icon-png-11665221630gsv2hug6ob.png" alt="" className='w-[14vw] h-[14vw] mt-12 -ml-5'/>
        </div>
        <div className="desc text-gray-600 w-[80vw] mt-5 mx-auto text-center  ">
    <p>Hello, I'm Krishna Bansal, Full-stack web developer based in India with a passion for crafting stunning websites and web apps</p>
        </div>
        <div className="connects flex flex-row space-x-5 w-[40vw]  mt-5 mx-auto">
        <a href="https://www.linkedin.com/in/krishna-bansal-a82a68254/" className='w-10 ml-[20%]'> <img src=" https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" className='w-10 h-10' alt="" /></a>
         <a href="https://github.com/krishnabansal89" className='w-10'> <img src="https://img.icons8.com/3d-fluency/256/github.png" className='w-10 h-10' alt="" /></a>
        </div>
      </div>
    </div>
  )
}
