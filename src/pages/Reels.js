import React from 'react';
import user1 from '../img/image1_files/geeky1.jpg.jpg';
import video from '../img/image1_files/post3.jpg';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Message } from '@mui/icons-material';
import { Share } from '@mui/icons-material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TurnedInIcon from '@mui/icons-material/TurnedIn';

const Reels = () => {
  return (

    <>
        <div className='col-span-5 bg-gray-100 flex-col  justify-center my-[0.5rem]'>
          <div className='flex justify-center my-[0.5rem]'>

          
      <div className='h-[95vh] my-4'>
        <img src={video} className="h-[100%]"/>
      </div>
      <div className='flex mx-4 h-[95vh]'></div>
        <div className='mt-auto'>
          <div className='my-8'><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></div>
          <div className='my-8'><Message></Message></div>
          <div className='my-8'><Share></Share></div>
          <div className='my-8'><TurnedInIcon></TurnedInIcon> </div>
          <div className='my-8'><MoreHorizIcon></MoreHorizIcon></div>
          <div className='mt-8 mb-8'>
          <img src={user1}  className='h-[1rem] w-[1rem] rounded-[50%]'/>
          </div>
        </div>
        </div>
          <div className='flex justify-center my-[0.5rem]'>

          
      <div className='h-[95vh] my-4'>
        <img src={video} className="h-[100%]"/>
      </div>
      <div className='flex mx-4 h-[95vh]'></div>
        <div className='mt-auto'>
          <div className='my-8'><FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon></div>
          <div className='my-8'><Message></Message></div>
          <div className='my-8'><Share></Share></div>
          <div className='my-8'><TurnedInIcon></TurnedInIcon> </div>
          <div className='my-8'><MoreHorizIcon></MoreHorizIcon></div>
          <div className='mt-8 mb-8'>
          <img src={user1}  className='h-[1rem] w-[1rem] rounded-[50%]'/>
          </div>
        </div>
        </div>
      </div>

      </>

  )
}

export default Reels;


