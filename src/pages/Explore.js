import React, { useState, useEffect} from 'react'
import pepole_post from "../img/image1_files/user3.jpg";
import pepole_post2 from "../img/image1_files/post3.jpg";
import memes2 from "../img/memes2.jpg";
import memes3 from "../img/memes3.jpg";
import memes4 from "../img/memes4.jpg";
import memes5 from "../img/memes5.jpg";
import memes6 from "../img/memes6.jpg";
import memes7 from "../img/memes7.jpg";
import memes9 from "../img/memes9.jpg";
import memes8 from "../img/memes8.jpg";
import memes10 from "../img/memes10.jpg";

const MyExplore = () => {

  const [picImg, setPicImg] = useState([""])
  return (
    <>
    <div className='col-span-5 grid grid-cols-6 gap-1 '>
    <div className='bg-black col-span-2 h-[33vh]'>
        <img src={pepole_post} className='h-[100%]'/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={pepole_post2} className='h-[100%] w-[100%]'/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes2} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
        <img src={memes3} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes4} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes5} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
        <img src={memes6} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes7} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes8} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes9} className='h-[100%] '/>
    </div>
    <div className='bg-black col-span-2 h-[33vh]'>
    <img src={memes10} className='h-[100%] '/>
    </div>
    </div>
    </>
  )
}

export default MyExplore;