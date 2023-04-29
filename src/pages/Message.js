import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import SendIcon from '@mui/icons-material/Send';

const MyMessage = () => {

  const [message_detail, setDetail] = useState([""])
  useEffect(()=>{
    const res = fetch("http://127.0.0.1:8000/getmessageapi/").then((value)=>{
      return value.json()
    }).then((value)=>{
      setDetail(value)
    })
  }, [message_detail])
  


  return (
    <>
    <div className="col-span-5 grid grid-cols-8 bg-gray-50">
    <div className='col-span-1'>
    
    </div> 
{/* Main Div */}
    <div className='col-span-6 grid grid-cols-5 border h-[99vh] bg-white'>
      <div className='col-span-2 border '>
      <div className='flex justify-center mt-8 pb-4 border-b'>
        <span>positive.mind.123456789</span>
        <span><KeyboardArrowDownIcon></KeyboardArrowDownIcon></span>
        <span className='ml-[2rem]'> <DriveFileRenameOutlineIcon></DriveFileRenameOutlineIcon></span>
      </div>
      
      {/* Map Start */}
      {message_detail.map((element, index)=>{
        

        return <div className='flex my-4 mx-2'>
        <img src={`http://127.0.0.1:8000`+element.img} className='rounded-[50%] h-[3rem] w-[3rem]'/>
        <span className=' font-semibold'> 
          <div >&nbsp;  {element.name}</div>
          <div className='text-[.7rem]'> &nbsp; {element.my_status}</div>
          </span>
        </div>
      })}
      {/* Map End */}



      </div>
      <div className='col-span-3 flex justify-center items-center'>
        <div className='flex-col'>
       
        <div className='text-center text-6xl'>
<span  className='border-2 border-solid border-black rounded-[50%] ]'>
        <SendIcon fontSize='inherit' className='mb-4 mx-4'></SendIcon>
        </span>
        </div>
       
        <h2 className='text-xl text-center'>Your Messages</h2>
        <p className='text-center'>Send privite photos and messages to a friend or group.</p>
        <div className='text-center'>

          
          <button className='bg-blue-400 font-bold rounded-xl text-white py-2 px-4'>Send Message</button>
        </div>
        </div>
      </div>

    </div>
    {/* Main Div Close */}

    <div className='col-span-1'>
    
    </div>

    </div>
    </>
  )
}

export default MyMessage