import React from 'react';
import image1 from '../img/image1_files/me.jpg';
import { Apps, Check } from '@mui/icons-material';
import { faU, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TurnedInIcon from '@mui/icons-material/TurnedIn';   


const MyProfile = () => {
  return (
    <>
    <div className='col-span-5 my-[3rem]'>

    <div className='flex'>
      <img src={image1} className='rounded-[50%] h-[10rem] w-[10rem]'/>
      <div className='  mx-[3rem]'>
        <div className='text-xl'>&nbsp;positive.mind.123456789</div>
        <div className='flex space-x-5 text-[1rem]'> &nbsp; 
          <span>1 post</span>
          <span>2.2k Followers</span>
          <span>0 Following</span>
        </div>
        <div className='flex space-x-5 text-base'> &nbsp; 
          <span>manoj</span>
        </div>
          <span> &nbsp;Munna Bahi</span>
        </div>
      <span className=' text-sm '>
        <button type='button' className='rounded-xl bg-gray-100 font-semibold py-2 px-4'>  Switch</button>
        </span>
      </div>

<hr />
      {/*  */}
      <div className='flex justify-center'>
<div className='flex space-x-[4rem]'>
  <div>
    <Apps></Apps>
     <br />
    POST <Check fontSize='small' className='bg-green-700 text-white rounded-[50%]'></Check></div>
  <div> 
    <TurnedInIcon></TurnedInIcon> <br />
    SAVED <Check fontSize='small' className='bg-green-700 text-white rounded-[50%]'></Check></div>
  <div> 
    <FontAwesomeIcon icon={faUser} className='border border-solid border-black rounded'></FontAwesomeIcon> <br />
    TAGGED <Check fontSize='small' className='bg-green-700 text-white rounded-[50%]'></Check>
  </div>
</div>
      </div>

      <div className='mt-4'>
        {/* <img src={} /> */}
      </div>
      {/*  */}

    </div>
    </>
  );
}

export default MyProfile